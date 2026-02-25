import { getBestVoice } from '../audio-utils.js';
import { config } from '../tj-config.js';
import stylesText from './styles.css?inline';
import templateHtml from './template.html?raw';



class TjChapterBook extends HTMLElement {
    getLanguageName(localeStr) {
        if (!localeStr) return 'Unknown';
        try {
            const dn = new Intl.DisplayNames(['en'], { type: 'language' });
            return dn.of(localeStr.split(/[-_]/)[0]);
        } catch(e) {
            return localeStr;
        }
    }

    static chapterHasTranslation(chapter) {
        if (!chapter) return false;
        if (typeof chapter.translation !== 'string') return false;
        return chapter.translation.trim().length > 0;
    }

    static bookHasAnyTranslations(data) {
        if (!data || !Array.isArray(data.chapters)) return false;
        return data.chapters.some(ch => TjChapterBook.chapterHasTranslation(ch));
    }

    static ensureGlobalPrintScoping() {
        if (TjChapterBook._globalPrintScopingReady) return;
        TjChapterBook._globalPrintScopingReady = true;

        window.addEventListener('beforeprint', () => {
            // If a print target is already set, keep it.
            let target = document.querySelector('tj-chapter-book[data-tj-print-target="true"]');
            if (!target) {
                // Opt-in for Ctrl/Cmd+P when embedded in other pages.
                target = document.querySelector('tj-chapter-book[print-scope="component"]');
                if (target) target.setAttribute('data-tj-print-target', 'true');
            }

            if (target) {
                document.documentElement.classList.add('tj-print-scope');
            }
        });

        window.addEventListener('afterprint', () => {
            document.documentElement.classList.remove('tj-print-scope');
            document.querySelectorAll('tj-chapter-book[data-tj-print-target="true"]').forEach(el => {
                el.removeAttribute('data-tj-print-target');
            });
        });
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.synth = window.speechSynthesis;
        this.currentUtterance = null;
        this.currentButtonId = null;
        this.isTextSwapped = false;
        this.studentInfo = { nickname: '', number: '', homeroom: '', teacherCode: '' };
        this.submissionUrl = config?.submissionUrl || 'https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec';
        this.isSubmitting = false;
        this.ttsState = {
            status: 'idle',
            activeButtonId: null,
            activeElementId: null,
            activeRate: 1.0,
            activeLang: null,
        };
        this._ttsActionSeq = 0;
        this._ttsUtteranceSeq = 0;
        this.language = 'fr-FR'; // Default language
        this.selectedVoiceName = null;
        this.totalScore = 0;
        this.totalQuestions = 0; // Legacy if needed, but we'll use absoluteTotalQuestions
        this.absoluteTotalQuestions = 0;
        this.wrongQuestions = [];
        this.lockoutTimers = new Map();
    }

    connectedCallback() {
        if (this.synth && this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this._updateVoiceList();
        }

        // Initialize IntersectionObserver to hide checked quizzes when scrolled past
        this._initVisibilityObserver();

        const src = this.getAttribute('src');

        // Use setTimeout to ensure children (JSON content) are parsed by the browser
        requestAnimationFrame(() => {
            if (this.config) {
                if (typeof this.config === 'object') {
                    this.render(this.config);
                } else {
                    this._parseAndRender(String(this.config));
                }
            } else if (this.hasAttribute('config')) {
                this._parseAndRender(this.getAttribute('config'));
            } else if (src) {
                this.loadData(src);
            } else if (this.shadowRoot.querySelector('script[type="application/json"]')) {
                this._parseAndRender(this.shadowRoot.querySelector('script[type="application/json"]').textContent);
            } else {
                this._parseAndRender(this.textContent);
            }
        });
    }

    _parseAndRender(jsonString) {
        try {
            if (!jsonString || !jsonString.trim()) return;
            const data = JSON.parse(jsonString.trim());
            this.render(data);
        } catch (e) {
            console.error('Error parsing inline JSON data', e);
            this.shadowRoot.innerHTML = `<p style="color: red;">Error loading book data: Invalid JSON.</p>`;
        }
    }

    async loadData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error('Error loading chapter data:', error);
            this.shadowRoot.innerHTML = `<p style="color: red;">Error loading book data.</p>`;
        }
    }

    _getBestVoice(lang) {
        return getBestVoice(window.speechSynthesis, lang);
    }

    _showVoiceOverlay() {
        const overlay = this.shadowRoot.querySelector('.voice-overlay');
        if (overlay) {
            overlay.classList.add('visible');
            document.body.style.overflow = 'hidden';
            this._updateVoiceList();
        }
    }

    _hideVoiceOverlay() {
        const overlay = this.shadowRoot.querySelector('.voice-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
            document.body.style.overflow = '';
        }
    }

    _updateVoiceList() {
        if (!this.synth) return;
        const voices = this.synth.getVoices();
        const voiceList = this.shadowRoot.querySelector('.voice-list');
        const voiceBtn = this.shadowRoot.querySelector('#voice-btn');
        if (!voiceList || !voiceBtn || voices.length === 0) return;

        const lang = this.language;
        const langPrefix = lang.split(/[-_]/)[0].toLowerCase();
        const langVoices = voices.filter(v => v.lang.split(/[-_]/)[0].toLowerCase() === langPrefix);
        const bestVoice = this._getBestVoice(lang);

        // Default to best voice if no user choice yet
        if (!this.selectedVoiceName && bestVoice) {
            this.selectedVoiceName = bestVoice.name;
        }

        voiceList.innerHTML = '';
        langVoices.sort((a, b) => a.name.localeCompare(b.name));

        langVoices.forEach(voice => {
            const btn = document.createElement('button');
            btn.classList.add('voice-option-btn');
            if (this.selectedVoiceName === voice.name) btn.classList.add('active');

            let btnContent = `<span>${voice.name}</span>`;
            if (bestVoice && voice.name === bestVoice.name) {
                btnContent += `<span class="badge">Best</span>`;
            }
            btn.innerHTML = btnContent;

            btn.onclick = () => {
                this.selectedVoiceName = voice.name;
                this.cancelTTS();
                this._updateVoiceList();
                this._hideVoiceOverlay();
            };
            voiceList.appendChild(btn);
        });
    }

    _initVisibilityObserver() {
        this._visibilityObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const chapterCard = entry.target;
                const chapterId = chapterCard.id;
                const quizContainer = chapterCard.querySelector(`#quiz-${chapterId}`);

                // If not intersecting and we scrolled PAST it (it's above us)
                if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
                    if (quizContainer && quizContainer.dataset.checked === 'true' && !quizContainer.classList.contains('quiz-hidden-checked')) {
                        this._hideCheckedQuiz(chapterCard, quizContainer);
                    }
                }
            });
        }, {
            threshold: 0,
            rootMargin: '0px'
        });
    }

    _hideCheckedQuiz(chapterCard, quizContainer) {
        const transDetails = chapterCard.querySelector('.translation-details');
        const lockMsg = chapterCard.querySelector('.quiz-lock-message');

        // Capture height before hiding
        // We use the quiz container's height as the primary compensation measure
        const quizHeight = quizContainer.offsetHeight;

        // Add hidden classes
        quizContainer.classList.add('quiz-hidden-checked');
        if (transDetails) {
            transDetails.classList.add('translation-hidden-checked');
            transDetails.open = false;
        }

        if (lockMsg) {
            lockMsg.innerHTML = 'Results Hidden';
        }

        // In modern browsers, scroll anchoring handles the layout shift automatically.
        // Manual compensation (window.scrollBy) often causes "jumping" issues.
        console.log(`Hidden checked quiz for chapter ${chapterCard.id}`);
    }

    render(data) {
        if (!data) return;
        this.hasAnyTranslations = TjChapterBook.bookHasAnyTranslations(data);

        // Calculate absolute total questions
        this.absoluteTotalQuestions = 0;
        if (data.chapters) {
            data.chapters.forEach(chapter => {
                if (chapter.quiz) {
                    this.absoluteTotalQuestions += chapter.quiz.length;
                }
            });
        }

        // Store language if provided
        if (data.language) {
            this.language = data.language;
            this.originalLanguage = data.language;
        } else {
            this.originalLanguage = this.language;
        }

        if (data.translationLanguage) {
            this.translationLanguage = data.translationLanguage;
            this.originalTranslationLanguage = data.translationLanguage;
        } else {
            this.translationLanguage = this.language.startsWith('en') ? 'th-TH' : 'en-US';
            this.originalTranslationLanguage = this.translationLanguage;
        }

        // Use Shadow DOM
        this.shadowRoot.innerHTML = `
            <style>${stylesText}</style>
            ${templateHtml}
        `;

        // Populate header
        const titleEl = this.shadowRoot.getElementById('book-title');
        if (titleEl) titleEl.textContent = data.title;
        const subtitleEl = this.shadowRoot.getElementById('book-subtitle');
        if (subtitleEl) subtitleEl.textContent = data.subtitle;

        // Audio controls placeholder
        const audioPlaceholder = this.shadowRoot.getElementById('audio-controls-placeholder');
        if (audioPlaceholder && this.shouldShowAudioControls()) {
            audioPlaceholder.innerHTML = `
                <button id="voice-btn" title="Choose Voice">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z"/>
                    </svg>
                </button>
            `;
        }

        // Language selector placeholder
        const langPlaceholder = this.shadowRoot.getElementById('lang-selector-placeholder');
        if (langPlaceholder && this.hasAnyTranslations) {
            langPlaceholder.innerHTML = `
                <div class="lang-selector-container">
                    <p class="lang-selector-label">I want to read in:</p>
                    <div class="lang-selector-buttons">
                        <button class="lang-btn ${!this.isTextSwapped ? 'active' : ''}" data-action="set-lang" data-swap="false">${this.getLanguageName(this.originalLanguage)}</button>
                        <button class="lang-btn ${this.isTextSwapped ? 'active' : ''}" data-action="set-lang" data-swap="true">${this.getLanguageName(this.originalTranslationLanguage)}</button>
                    </div>
                </div>
            `;
        }

        // Chapters
        const chaptersContainer = this.shadowRoot.getElementById('chapters-container');
        if (chaptersContainer) {
            chaptersContainer.innerHTML = data.chapters ? data.chapters.map((chapter, index) => this.renderChapter(chapter, index)).join('') : '<p>No chapters found.</p>';
        }

        // Tally
        const totalTally = this.shadowRoot.getElementById('total-tally');
        if (totalTally) totalTally.textContent = this.absoluteTotalQuestions;

        this.attachEventListeners();
        this._updateVoiceList();
        this.checkBrowserSupport();

        // Start observing chapters for scroll-past behavior
        this.shadowRoot.querySelectorAll('.chapter-card').forEach(card => {
            if (this._visibilityObserver) {
                this._visibilityObserver.observe(card);
            }
        });
    }

    _getAndroidIntentLink() {
        const isAndroid = /android/i.test(navigator.userAgent);
        if (!isAndroid) return '';

        const url = new URL(window.location.href);
        const urlNoScheme = url.toString().replace(/^https?:\/\//, '');
        const scheme = window.location.protocol.replace(':', '');

        return `intent://${urlNoScheme}#Intent;scheme=${scheme};package=com.android.chrome;end`;
    }

    checkBrowserSupport() {
        if (!this.shouldShowAudioControls()) {
            const overlay = this.shadowRoot.querySelector('.browser-prompt-overlay');
            if (overlay) {
                overlay.style.display = 'flex';
                const androidLink = this._getAndroidIntentLink();
                const actionBtn = this.shadowRoot.querySelector('.browser-action-btn');

                if (androidLink) {
                    actionBtn.href = androidLink;
                    actionBtn.textContent = 'Open in Chrome';
                } else {
                    // iOS or fallback: manual prompt
                    actionBtn.innerHTML = 'Use Safari / Chrome<br><span style="font-size: 0.8em; font-weight: normal;">กรุณาเปิดใน Safari หรือ Chrome</span>';
                    actionBtn.onclick = (e) => {
                        e.preventDefault();
                        alert('Please open this page in Safari or Chrome for audio features.\n\nกรุณาเปิดหน้านี้ใน Safari หรือ Chrome เพื่อใช้งานฟีเจอร์เสียง');
                    };
                }
            }
        }
    }

    shouldShowAudioControls() {
        if (!window.speechSynthesis) return false;

        const ua = navigator.userAgent.toLowerCase();

        // Block known in-app browsers and WebViews
        if (ua.includes("wv") || ua.includes("webview") ||
            ua.includes("instagram") || ua.includes("facebook") ||
            ua.includes("line")) {
            return false;
        }

        return true;
    }

    renderChapter(chapter, index) {
        const textId = `text-${chapter.id}`;
        const quizId = `quiz-${chapter.id}`;
        const translationId = `trans-${chapter.id}`;

        const chapterHasTranslation = TjChapterBook.chapterHasTranslation(chapter);

        const contentHtml = this.wrapWords(chapter.content ?? chapter.text);
        const translatedContentHtml = chapterHasTranslation ? this.wrapWords(chapter.translation) : '';

        const translationAsMainHtml = translatedContentHtml;

        const quizHtml = chapter.quiz.map((q, qIndex) => `
            <div class="question-block">
                <p class="question-text">${q.question}</p>
                ${q.options.map(opt => `
                    <label class="option-label">
                        <input type="radio" name="${chapter.id}-q${qIndex}" value="${opt.value}"> ${opt.text}
                    </label>
                `).join('')}
                <p class="feedback"></p>
            </div>
        `).join('');

        const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
        const stopIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2" ry="2"></rect></svg>`;
        const langIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
        const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
        const pencilIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`;

        let audioControls;
        if (this.shouldShowAudioControls()) {
            audioControls = `
                <div class="audio-controls">
                    <button data-action="play" data-rate="1.0" data-target="${textId}" id="btn-${chapter.id}-normal" class="audio-btn audio-btn-normal">
                        <span class="icon-wrapper">${playIcon}</span> Normal
                    </button>
                    <button data-action="play" data-rate="0.6" data-target="${textId}" id="btn-${chapter.id}-slow" class="audio-btn audio-btn-slow">
                        <span class="icon-wrapper">${playIcon}</span> Slow
                    </button>
                    <button data-action="cancel-tts" id="btn-${chapter.id}-cancel" class="audio-btn audio-btn-cancel" aria-label="Cancel audio" title="Stop audio">
                        <span class="icon-wrapper">${stopIcon}</span> Cancel
                    </button>
                </div>`;
        } else {
            const isAndroid = /android/i.test(navigator.userAgent);
            let actionBtn = '';
            if (isAndroid) {
                const url = window.location.href;
                const urlNoScheme = url.replace(/^https?:\/\//, '');
                const scheme = window.location.protocol.replace(':', '');
                // Android Intent to open in Chrome
                const intentUrl = `intent://${urlNoScheme}#Intent;scheme=${scheme};package=com.android.chrome;end`;
                actionBtn = `<div style="margin-top: 0.5em;"><a href="${intentUrl}" style="color: var(--tj-accent-color); text-decoration: underline; font-weight: bold;">Open in Chrome</a></div>`;
            }

            audioControls = `
                <div style="background-color: var(--tj-btn-bg); color: var(--tj-subtitle-color); padding: 0.75em; border-radius: 0.5em; border: 1px dashed var(--tj-card-border); text-align: center; font-size: 0.9em; margin-bottom: 1em;">
                    <p style="margin-bottom: 0.25em;">🎧 Audio available in Chrome or Safari</p>
                    <p>เสียงบรรยายใช้ได้ใน Chrome หรือ Safari</p>
                    ${actionBtn}
                </div>`;
        }

        return `
            <section id="${chapter.id}" class="chapter-card">
                <h2 class="chapter-title">${chapter.title}</h2>
                
                ${audioControls}

                <template data-tj-template="main-original">${contentHtml}</template>
                ${chapterHasTranslation ? `<template data-tj-template="main-translation">${translatedContentHtml}</template>` : ''}
                <template data-tj-template="trans-original">${contentHtml}</template>
                ${chapterHasTranslation ? `<template data-tj-template="trans-translation">${translatedContentHtml}</template>` : ''}

                <div id="${textId}" class="chapter-text">
                    ${(this.isTextSwapped && chapterHasTranslation) ? translationAsMainHtml : contentHtml}
                </div>

                ${chapterHasTranslation ? `
                <aside id="trans-aside-${chapter.id}" style="display: none;">
                <details class="translation-details group">
                    <summary class="translation-summary">
                        <span style="display: flex; align-items: center; gap: 0.5rem;">${langIcon} Translation</span>
                        <span class="chevron">${chevronIcon}</span>
                    </summary>
                    <div style="padding: 0.5em 0.75em 0;">
                        <button data-action="play" data-rate="1.0" data-target="${translationId}" data-lang="${this.translationLanguage}" id="btn-trans-${chapter.id}" class="audio-btn audio-btn-normal" style="font-size: 0.8em; padding: 0.25em 0.5em;">
                            <span class="icon-wrapper">${playIcon}</span> Play
                        </button>
                    </div>
                    <div id="${translationId}" class="translation-content">
                        ${this.isTextSwapped ? contentHtml : translatedContentHtml}
                    </div>
                </details>
                </aside>
                ` : ''}

                <div class="quiz-container" id="${quizId}">
                    <h3 class="quiz-title">${pencilIcon} Comprehension</h3>
                    ${quizHtml}
                    <button data-action="check-quiz" data-target="${quizId}" class="check-btn">Check</button>
                </div>
                <div id="lock-msg-${chapter.id}" class="quiz-lock-message" style="display: none;">
                    Answers will disappear when you scroll past.
                </div>
            </section>
        `;
    }

    attachEventListeners() {
        TjChapterBook.ensureGlobalPrintScoping();

        // Print button
        const printToggle = this.shadowRoot.querySelector('#print-toggle');
        if (printToggle) {
            printToggle.addEventListener('click', () => {
                document.querySelectorAll('tj-chapter-book[data-tj-print-target="true"]').forEach(el => {
                    el.removeAttribute('data-tj-print-target');
                });
                this.setAttribute('data-tj-print-target', 'true');
                document.documentElement.classList.add('tj-print-scope');
                window.print();
            });
        }

        // Swap target/translation languages (TTS)
        this.shadowRoot.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetSwap = btn.dataset.swap === 'true';
                if (this.isTextSwapped !== targetSwap) {
                    this.cancelTTS();

                    const prevTarget = this.language;
                    this.language = this.translationLanguage;
                    this.translationLanguage = prevTarget;

                    this.isTextSwapped = targetSwap;
                    this.applyLanguageTextSwap();

                    this.shadowRoot.querySelectorAll('button[id^="btn-trans-"][data-action="play"]').forEach(b => {
                        b.dataset.lang = this.translationLanguage;
                    });

                    this.selectedVoiceName = null;
                    this._updateVoiceList();

                    this.shadowRoot.querySelectorAll('.lang-btn').forEach(b => {
                        b.classList.toggle('active', b.dataset.swap === String(this.isTextSwapped));
                    });

                    this.resetApp(true);
                }
            });
        });

        // Voice selection button
        const voiceBtn = this.shadowRoot.querySelector('#voice-btn');
        if (voiceBtn) {
            voiceBtn.addEventListener('click', () => {
                this._showVoiceOverlay();
            });
        }

        // Voice overlay close
        const closeVoiceBtn = this.shadowRoot.querySelector('.close-voice-btn');
        if (closeVoiceBtn) {
            closeVoiceBtn.addEventListener('click', () => {
                this._hideVoiceOverlay();
            });
        }

        // Close overlay on click outside card
        const voiceOverlay = this.shadowRoot.querySelector('.voice-overlay');
        if (voiceOverlay) {
            voiceOverlay.addEventListener('click', (e) => {
                if (e.target === voiceOverlay) {
                    this._hideVoiceOverlay();
                }
            });
        }

        // Theme toggle
        const themeToggle = this.shadowRoot.querySelector('#theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.classList.toggle('dark-theme');
                const isDark = this.classList.contains('dark-theme');

                const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
                const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

                themeToggle.innerHTML = isDark ? sunIcon : moonIcon;
            });
        }

        // Audio buttons
        this.shadowRoot.querySelectorAll('button[data-action="play"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Handle click on icon inside button
                const button = e.target.closest('button');
                const targetId = button.dataset.target;
                const rate = parseFloat(button.dataset.rate);
                this.playAudio(targetId, rate, button.id);
            });
        });

        // Cancel TTS buttons
        this.shadowRoot.querySelectorAll('button[data-action="cancel-tts"]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.cancelTTS();
            });
        });

        // Quiz buttons
        this.shadowRoot.querySelectorAll('button[data-action="check-quiz"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const button = e.target.closest('button');
                const targetId = button.dataset.target;
                this.checkRadioAnswers(targetId, button);
            });
        });

        // Report Card Actions
        const generateBtn = this.shadowRoot.querySelector('#generate-report');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.showReportCard());
        }

        const resetBtn = this.shadowRoot.querySelector('#reset-book');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetApp());
        }

        const closeReportBtn = this.shadowRoot.querySelector('.close-report-btn');
        if (closeReportBtn) {
            closeReportBtn.addEventListener('click', () => this.hideReportCard());
        }

        // Clickable words
        this.shadowRoot.querySelectorAll('.chapter-text, .translation-content').forEach(container => {
            container.addEventListener('click', (e) => {
                const wordEl = e.target.closest('.word');
                if (wordEl) {
                    // Determine which language to use
                    let lang = this.language;
                    if (container.classList.contains('translation-content') && !this.isTextSwapped) {
                        lang = this.translationLanguage;
                    } else if (container.classList.contains('chapter-text') && this.isTextSwapped) {
                        // When swapped, chapter-text contains translation language text
                        // Wait, no. language/translationLanguage are also swapped!
                        // So this.language ALWAYS points to what's in chapter-text.
                        lang = this.language;
                    } else if (container.classList.contains('translation-content') && this.isTextSwapped) {
                        // Swapped: translation-content contains original language text
                        lang = this.translationLanguage;
                    }

                    this.playWord(wordEl.innerText, lang);
                }
            });
        });

        // Translation toggle (lockout mechanism)
        this.shadowRoot.querySelectorAll('.translation-details').forEach(details => {
            details.addEventListener('toggle', (e) => {
                const chapterCard = details.closest('.chapter-card');
                if (chapterCard) {
                    this.handleTranslationToggle(chapterCard.id, details.open);
                }
            });
        });
    }

    wrapWords(content) {
        const isThai = (text) => /[\u0E00-\u0E7F]/.test(text);

        // Handle both single string and array of strings
        const paragraphs = Array.isArray(content) ? content : [content];

        return paragraphs.map(p => {
            if (p == null) return '';
            // Strip existing HTML tags if any (basic approach)
            const plainText = p.replace(/<[^>]*>/g, '');

            if (isThai(plainText)) {
                return `<p>${p}</p>`;
            } else {
                // Split by spaces but preserve them as part of the structure
                const tokens = plainText.split(/(\s+)/);
                const wrappedTokens = tokens.map(token => {
                    if (/\s+/.test(token) || token === "") {
                        return token;
                    }
                    return `<span class="word">${token}</span>`;
                });
                return `<p>${wrappedTokens.join('')}</p>`;
            }
        }).join('');
    }

    updateIcon(btnId, type) {
        const btn = this.shadowRoot.querySelector(`#${btnId}`);
        if (!btn) return;
        const iconWrapper = btn.querySelector('.icon-wrapper');

        const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
        const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

        if (type === 'play') {
            iconWrapper.innerHTML = playIcon;
            btn.classList.remove('playing');
        } else if (type === 'pause') {
            iconWrapper.innerHTML = pauseIcon;
            btn.classList.add('playing');
        }
    }

    resetAllButtons() {
        this.shadowRoot.querySelectorAll('button[data-action="play"]').forEach(btn => {
            this.updateIcon(btn.id, 'play');
        });
    }

    cancelTTS() {
        try {
            if (this.synth) this.synth.cancel();
        } finally {
            this._ttsActionSeq++;
            this._ttsUtteranceSeq++;
            this.ttsState.status = 'idle';
            this.ttsState.activeButtonId = null;
            this.ttsState.activeElementId = null;
            this.ttsState.activeRate = 1.0;
            this.ttsState.activeLang = null;
            this.currentButtonId = null;
            this.currentUtterance = null;
            this.resetAllButtons();
        }
    }

    applyLanguageTextSwap() {
        // Swap chapter text vs translation text in-place, without re-rendering quizzes.
        this.shadowRoot.querySelectorAll('section.chapter-card').forEach(section => {
            const main = section.querySelector('.chapter-text[id^="text-"]');
            const trans = section.querySelector('.translation-content[id^="trans-"]');
            if (!main || !trans) return;

            const mainTpl = section.querySelector(this.isTextSwapped
                ? 'template[data-tj-template="main-translation"]'
                : 'template[data-tj-template="main-original"]');
            const transTpl = section.querySelector(this.isTextSwapped
                ? 'template[data-tj-template="trans-original"]'
                : 'template[data-tj-template="trans-translation"]');

            if (mainTpl) main.innerHTML = mainTpl.innerHTML;
            if (transTpl) trans.innerHTML = transTpl.innerHTML;
        });
    }

    handleTranslationToggle(chapterId, isOpen) {
        // Feature removed: No longer lock the quiz when translation is opened.
    }

    playAudio(elementId, rate, btnId) {
        // Prefer our own state machine; some browsers report paused/speaking unreliably.
        // Treat Normal/Slow as controls for the same target text; allow toggling by target.
        const isSameTarget = this.ttsState.activeElementId === elementId && this.ttsState.status !== 'idle';

        if (!isSameTarget) {
            this.cancelTTS();
            this.startNewSpeech(elementId, rate, btnId);
            return;
        }

        // Same target currently active.
        if (this.ttsState.status === 'playing') {
            // If user clicks a different rate/lang while playing, immediately switch by cancel+restart.
            const clickedLang = (() => {
                const btn = this.shadowRoot.querySelector(`#${btnId}`);
                return btn && btn.dataset.lang ? btn.dataset.lang : this.language;
            })();

            const needsSwitch = this.ttsState.activeRate !== rate || this.ttsState.activeLang !== clickedLang;
            if (needsSwitch) {
                this.cancelTTS();
                this.startNewSpeech(elementId, rate, btnId);
                return;
            }

            this.pauseTTS(btnId);
            return;
        }

        if (this.ttsState.status === 'paused') {
            // If user clicks a different rate/lang button while paused, restart with new settings.
            const clickedLang = (() => {
                const btn = this.shadowRoot.querySelector(`#${btnId}`);
                return btn && btn.dataset.lang ? btn.dataset.lang : this.language;
            })();

            const needsRestart = this.ttsState.activeRate !== rate || this.ttsState.activeLang !== clickedLang;
            if (needsRestart) {
                this.cancelTTS();
                this.startNewSpeech(elementId, rate, btnId);
                return;
            }

            this.resumeTTS(elementId, rate, btnId);
            return;
        }

        // idle (shouldn't happen when isSameTarget is true, but keep it safe)
        this.startNewSpeech(elementId, rate, btnId);
    }

    pauseTTS(btnId) {
        this._ttsActionSeq++;
        try {
            if (this.synth) this.synth.pause();
        } catch (e) {
            console.warn('Speech pause() failed:', e);
        }
        this.ttsState.status = 'paused';
        this.ttsState.activeButtonId = btnId;
        this.resetAllButtons();
    }

    resumeTTS(elementId, rate, btnId) {
        // Some environments are flaky about resume(); attempt resume, then fall back to restart.
        this._ttsActionSeq++;
        const seq = this._ttsActionSeq;

        this.ttsState.status = 'playing';
        this.ttsState.activeButtonId = btnId;
        this.ttsState.activeElementId = elementId;
        this.ttsState.activeRate = rate;
        // activeLang remains whatever started the utterance; rate/lang changes while paused restart instead.
        this.updateIcon(btnId, 'pause');

        try {
            if (this.synth) this.synth.resume();
        } catch (e) {
            console.warn('Speech resume() failed:', e);
        }

        window.setTimeout(() => {
            // Guard: only act if no other TTS action has happened since.
            if (this._ttsActionSeq !== seq) return;

            // If we tried to resume but it's still paused/not-speaking, restart.
            // We still consult synth as a heuristic, but we don't *depend* on it.
            const synthPaused = !!(this.synth && this.synth.paused);
            const synthSpeaking = !!(this.synth && this.synth.speaking);

            if (this.ttsState.status === 'playing' && (synthPaused || !synthSpeaking)) {
                this.startNewSpeech(elementId, rate, btnId);
            }
        }, 650);
    }

    startNewSpeech(elementId, rate, btnId) {
        // Check for in-app browsers which often have broken TTS
        const userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();

        // Common in-app browser identifiers
        if (userAgent.includes("wv") || userAgent.includes("webview") ||
            userAgent.includes("instagram") || userAgent.includes("facebook") ||
            userAgent.includes("line")) {
            this.showTTSError(btnId);
            return;
        }

        const element = this.shadowRoot.querySelector(`#${elementId}`);
        if (!element) return;

        const text = element.innerText;
        const btn = this.shadowRoot.querySelector(`#${btnId}`);
        const lang = btn && btn.dataset.lang ? btn.dataset.lang : this.language;

        this._ttsActionSeq++;
        this._ttsUtteranceSeq++;
        const utteranceSeq = this._ttsUtteranceSeq;
        this.ttsState.status = 'playing';
        this.ttsState.activeButtonId = btnId;
        this.ttsState.activeElementId = elementId;
        this.ttsState.activeRate = rate;
        this.ttsState.activeLang = lang;

        try {
            this.currentUtterance = new SpeechSynthesisUtterance(text);

            const voices = this.synth.getVoices();
            let voice = voices.find(v => v.name === this.selectedVoiceName);

            // If the selected voice doesn't match the current language, or isn't found, find best voice
            const voiceLangPrefix = voice ? voice.lang.split(/[-_]/)[0].toLowerCase() : null;
            const targetLangPrefix = lang.split(/[-_]/)[0].toLowerCase();

            if (!voice || voiceLangPrefix !== targetLangPrefix) {
                voice = this._getBestVoice(lang);
            }

            if (voice) {
                this.currentUtterance.voice = voice;
            }

            // Always set lang (critical for Android stability)
            this.currentUtterance.lang = lang;

            this.currentUtterance.rate = rate;

            this.currentUtterance.onend = () => {
                if (this._ttsUtteranceSeq !== utteranceSeq) return;
                this.updateIcon(btnId, 'play');
                this._ttsActionSeq++;
                this.ttsState.status = 'idle';
                this.ttsState.activeButtonId = null;
                this.ttsState.activeElementId = null;
                this.ttsState.activeRate = 1.0;
                this.ttsState.activeLang = null;
                this.currentButtonId = null;
                this.currentUtterance = null;
            };

            this.currentUtterance.onerror = (e) => {
                if (this._ttsUtteranceSeq !== utteranceSeq) return;
                console.error('Speech error:', e);
                this.updateIcon(btnId, 'play');
                this._ttsActionSeq++;
                this.ttsState.status = 'idle';
                this.ttsState.activeButtonId = null;
                this.ttsState.activeElementId = null;
                this.ttsState.activeRate = 1.0;
                this.ttsState.activeLang = null;
                this.currentButtonId = null;

                // Show error if not just canceled/interrupted
                if (e.error !== 'canceled' && e.error !== 'interrupted') {
                    this.showTTSError(btnId);
                }
            }

            this.currentButtonId = btnId;
            this.updateIcon(btnId, 'pause');
            this.synth.speak(this.currentUtterance);
        } catch (e) {
            console.error("Speech synthesis setup error", e);
            this.showTTSError(btnId);
            this.updateIcon(btnId, 'play');
            this._ttsActionSeq++;
            this.ttsState.status = 'idle';
            this.ttsState.activeButtonId = null;
            this.ttsState.activeElementId = null;
            this.ttsState.activeRate = 1.0;
            this.ttsState.activeLang = null;
        }
    }

    playWord(word, lang) {
        if (!this.synth) return;

        // Strip punctuation for better TTS
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
        if (!cleanWord) return;

        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(cleanWord);

        const voices = this.synth.getVoices();
        let voice = voices.find(v => v.name === this.selectedVoiceName);

        const voiceLangPrefix = voice ? voice.lang.split(/[-_]/)[0].toLowerCase() : null;
        const targetLangPrefix = (lang || this.language).split(/[-_]/)[0].toLowerCase();

        if (!voice || voiceLangPrefix !== targetLangPrefix) {
            voice = this._getBestVoice(lang || this.language);
        }

        if (voice) {
            utterance.voice = voice;
        }

        // Always set lang (critical for Android stability)
        utterance.lang = lang || this.language;

        utterance.rate = 0.8; // Slightly slower for individual words

        this.synth.speak(utterance);
    }

    showTTSError(btnId) {
        const errorHtml = `
            <div class="tts-error-message" style="background-color: #fee2e2; color: #991b1b; padding: 0.75em; border-radius: 0.5em; border: 1px solid #f87171; text-align: center; font-weight: 500;">
                <p style="margin-bottom: 0.5em;">⚠️ Audio not supported in this browser</p>
                <p style="font-size: 0.9em;">Please open in Chrome or Safari</p>
                <p style="font-size: 0.9em;">กรุณาเปิดใน Chrome หรือ Safari</p>
            </div>
        `;

        if (btnId) {
            const btn = this.shadowRoot.querySelector(`#${btnId}`);
            if (btn) {
                const container = btn.closest('.audio-controls');
                if (container) {
                    container.innerHTML = errorHtml;
                    return;
                }
            }
        }

        // Fallback global message
        if (this.shadowRoot.querySelector('.tts-error-message')) return;

        const errorDiv = document.createElement('div');
        errorDiv.className = 'tts-error-message';
        errorDiv.style.cssText = `
            background-color: #fee2e2;
            color: #991b1b;
            padding: 1em;
            margin: 1em auto;
            border-radius: 0.5em;
            border: 1px solid #f87171;
            max-width: 48em;
            text-align: center;
            font-weight: 500;
        `;
        errorDiv.innerHTML = `
            <p>Text-to-speech is not supported in this browser. Please try opening this page in a standard browser like Chrome or Safari.</p>
            <p style="margin-top: 0.5em;">เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง กรุณาลองเปิดหน้านี้ในเบราว์เซอร์มาตรฐาน เช่น Chrome หรือ Safari</p>
            <button style="margin-top: 0.5em; background: none; border: none; color: #991b1b; text-decoration: underline; cursor: pointer;">Dismiss / ปิด</button>
        `;

        const closeBtn = errorDiv.querySelector('button');
        closeBtn.onclick = () => errorDiv.remove();

        const header = this.shadowRoot.querySelector('.book-header');
        if (header) {
            header.after(errorDiv);
        } else {
            this.prepend(errorDiv);
        }
    }

    checkRadioAnswers(quizId, btn) {
        const quizContainer = this.shadowRoot.querySelector(`#${quizId}`);
        const chapterCard = quizContainer.closest('.chapter-card');
        const questionBlocks = quizContainer.querySelectorAll('.question-block');
        let chapterScore = 0;
        let chapterTotal = 0;
        let allAnswered = true;

        // First check if all are answered
        questionBlocks.forEach(block => {
            const selectedOption = block.querySelector('input[type="radio"]:checked');
            if (!selectedOption) allAnswered = false;
        });

        if (!allAnswered) {
            alert("Please answer all questions before checking.");
            return;
        }

        // Disable button
        if (btn) {
            btn.disabled = true;
            btn.textContent = "Checked";
            btn.style.opacity = "0.7";
            btn.style.cursor = "not-allowed";
        }

        quizContainer.dataset.checked = "true";

        questionBlocks.forEach(block => {
            const selectedOption = block.querySelector('input[type="radio"]:checked');
            const feedback = block.querySelector('.feedback');
            const inputs = block.querySelectorAll('input[type="radio"]');

            // Disable inputs
            inputs.forEach(input => input.disabled = true);

            chapterTotal++;

            // Clear previous styles
            feedback.classList.remove('feedback-correct', 'feedback-wrong', 'feedback-neutral');

            if (selectedOption.value === "correct") {
                feedback.textContent = "Correct !";
                feedback.classList.add('feedback-correct');
                chapterScore++;
            } else {
                feedback.textContent = "Incorrect.";
                feedback.classList.add('feedback-wrong');

                // Track wrong question
                const chapterTitle = chapterCard ? chapterCard.querySelector('.chapter-title').innerText : 'Unknown Chapter';
                const questionText = block.querySelector('.question-text').innerText;

                this.wrongQuestions.push({
                    question: questionText,
                    chapter: chapterTitle
                });
            }
        });

        this.updateScore(chapterScore, chapterTotal);

        // Notify user that questions will disappear on scroll
        const chapterId = quizId.replace('quiz-', '');
        const lockMsg = this.shadowRoot.querySelector(`#lock-msg-${chapterId}`);
        const transAside = chapterCard.querySelector(`#trans-aside-${chapterId}`);

        if (transAside) {
            transAside.style.display = 'block';
        }

        if (lockMsg) {
            lockMsg.innerHTML = `Answers and translation will disappear when you scroll past.`;
            lockMsg.classList.add('visible');
            lockMsg.style.display = 'block';
        }
    }

    updateScore(chapterScore, chapterTotal) {
        this.totalScore = (this.totalScore || 0) + chapterScore;

        const scoreSpan = this.shadowRoot.querySelector('#score-tally');
        const totalSpan = this.shadowRoot.querySelector('#total-tally');

        if (scoreSpan && totalSpan) {
            scoreSpan.textContent = this.totalScore;
            totalSpan.textContent = this.absoluteTotalQuestions;
        }
    }

    showReportCard() {
        const nameInput = this.shadowRoot.querySelector('#student-name');
        const idInput = this.shadowRoot.querySelector('#student-id');
        const homeroomInput = this.shadowRoot.querySelector('#student-homeroom');
        const name = nameInput.value.trim();
        const studentId = idInput.value.trim();
        const homeroom = homeroomInput.value.trim();

        if (!name || !studentId) {
            alert("Please enter both Student Name and Student ID before generating a report card.");
            if (!name) nameInput.focus();
            else idInput.focus();
            return;
        }

        this.studentInfo = { ...this.studentInfo, nickname: name, number: studentId, homeroom };

        // Lock inputs
        nameInput.disabled = true;
        idInput.disabled = true;
        if (homeroomInput) homeroomInput.disabled = true;

        const overlay = this.shadowRoot.querySelector('.report-overlay');
        const content = this.shadowRoot.querySelector('#report-content');

        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const bookTitle = this.shadowRoot.querySelector('.book-title').innerText;
        const percentage = this.absoluteTotalQuestions > 0 ? Math.round((this.totalScore / this.absoluteTotalQuestions) * 100) : 0;

        const emoji = percentage >= 80 ? '🏆' : percentage >= 50 ? '⭐' : '💪';
        const feedback = percentage >= 80 ? 'Excellent!' : percentage >= 50 ? 'Good effort!' : 'Keep practicing!';

        content.innerHTML = `
            <div class="rc-header">
                <div class="rc-icon">📄</div>
                <div class="rc-title">${bookTitle}</div>
                <div class="rc-subtitle">Report Card</div>
            </div>
            <div class="rc-student">
                <span class="rc-label">Student</span>
                <span class="rc-value">${name} <span class="rc-number">(${studentId}) ${homeroom ? `- ${homeroom}` : ''}</span></span>
            </div>
            <div class="rc-score-row">
                <div class="rc-score-circle">
                    <div class="rc-score-val">${percentage}%</div>
                    <div class="rc-score-pct">Overall</div>
                </div>
                <div class="rc-score-label">${emoji} ${feedback}</div>
            </div>
            <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${percentage}%"></div></div>
            <div class="rc-details">
                <div class="rc-detail-row"><span>Total Score</span><span>${this.totalScore} / ${this.absoluteTotalQuestions}</span></div>
                <div class="rc-detail-row"><span>Date</span><span>${dateStr}</span></div>
                <div class="rc-detail-row"><span>Time</span><span>${timeStr}</span></div>
            </div>

            ${this.wrongQuestions.length > 0 ? `
                <div class="report-wrong-list" style="margin-bottom: 20px;">
                    <h3 style="font-size: 1em; color: var(--tj-error-color); margin-bottom: 10px; font-weight: 700;">Needs Review:</h3>
                    <div style="max-height: 200px; overflow-y: auto; background: var(--tj-btn-bg); border-radius: 8px; border: 1px solid var(--tj-card-border);">
                    ${this.wrongQuestions.map(item => `
                        <div class="report-wrong-item" style="padding: 10px; border-bottom: 1px solid var(--tj-card-border);">
                            <span class="report-wrong-chapter" style="font-size: 0.75em; color: var(--tj-subtitle-color); text-transform: uppercase;">${item.chapter}</span>
                            <div style="font-size: 0.9em;">${item.question}</div>
                        </div>
                    `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="rc-submission-box">
                <p class="rc-submission-header">Submission (Optional)</p>
                <input type="text" id="report-teacher-code" class="rc-teacher-code-input" placeholder="Enter Teacher Code" value="${this.studentInfo.teacherCode || ''}">
                <p class="rc-help-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
            </div>

            <div class="rc-actions" style="margin-top: 16px;">
                <button class="rc-submit-btn" id="submit-score-btn">Submit Score Online</button>
                <button class="rc-secondary-btn close-report-btn">Close Report</button>
            </div>
        `;

        const submitBtn = content.querySelector('#submit-score-btn');
        if (submitBtn) submitBtn.onclick = () => this._submitScore();

        const closeBtn = content.querySelector('.close-report-btn');
        if (closeBtn) closeBtn.onclick = () => this.hideReportCard();

        overlay.classList.add('visible');
    }

    hideReportCard() {
        const overlay = this.shadowRoot.querySelector('.report-overlay');
        overlay.classList.remove('visible');
    }

    async _submitScore() {
        const reportTeacherCodeInput = this.shadowRoot.querySelector('#report-teacher-code');
        const currentTeacherCode = reportTeacherCodeInput ? reportTeacherCodeInput.value.trim() : this.studentInfo.teacherCode;
        
        // Cache for reuse
        this.studentInfo.teacherCode = currentTeacherCode;

        if (currentTeacherCode !== '6767') {
            alert('Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.');
            return;
        }

        if (this.isSubmitting) return;

        const submitBtn = this.shadowRoot.querySelector('#submit-score-btn');
        if (!submitBtn) return;
        const originalText = submitBtn.textContent;
        
        this.isSubmitting = true;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        const bookTitle = this.shadowRoot.querySelector('.book-title').innerText;
        const percentage = this.absoluteTotalQuestions > 0 ? Math.round((this.totalScore / this.absoluteTotalQuestions) * 100) : 0;

        const payload = {
            nickname: this.studentInfo.nickname,
            homeroom: this.studentInfo.homeroom || '',
            studentId: this.studentInfo.number,
            quizName: 'Book- ' + bookTitle,
            score: percentage,
            total: 100
        };

        try {
            await fetch(this.submissionUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            alert('Score successfully submitted!');
            submitBtn.textContent = 'Submitted ✓';
            submitBtn.style.background = 'var(--tj-subtitle-color)';
        } catch (err) {
            console.error('Error submitting score:', err);
            alert('There was an error submitting your score. Please try again.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.isSubmitting = false;
        }
    }

    resetApp(skipConfirmation = false) {
        if (!skipConfirmation && !confirm("Are you sure you want to reset everything? Your scores and progress will be lost.")) return;

        // Reset state
        this.totalScore = 0;
        this.wrongQuestions = [];

        // Unlock and clear inputs
        const nameInput = this.shadowRoot.querySelector('#student-name');
        const idInput = this.shadowRoot.querySelector('#student-id');
        if (nameInput) {
            nameInput.disabled = false;
            nameInput.value = '';
        }
        if (idInput) {
            idInput.disabled = false;
            idInput.value = '';
        }

        // Reset Tally UI
        const scoreSpan = this.shadowRoot.querySelector('#score-tally');
        const totalSpan = this.shadowRoot.querySelector('#total-tally');
        if (scoreSpan) scoreSpan.textContent = "0";
        if (totalSpan) totalSpan.textContent = this.absoluteTotalQuestions;

        // Reset All Chapters
        this.shadowRoot.querySelectorAll('.chapter-card').forEach(card => {
            // Re-enable quizzes
            const quizId = `quiz-${card.id}`;
            const quizContainer = card.querySelector(`#${quizId}`);
            if (quizContainer) {
                quizContainer.classList.remove('quiz-hidden-checked', 'locked-open', 'locked-delay');
                delete quizContainer.dataset.checked;

                // Re-enable "Check" button
                const checkBtn = quizContainer.querySelector('button[data-action="check-quiz"]');
                if (checkBtn) {
                    checkBtn.disabled = false;
                    checkBtn.textContent = "Check";
                    checkBtn.style.opacity = "1";
                    checkBtn.style.cursor = "pointer";
                }

                // Re-enable radio buttons and clear selection
                quizContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
                    radio.disabled = false;
                    radio.checked = false;
                });

                // Clear feedbacks
                quizContainer.querySelectorAll('.feedback').forEach(f => {
                    f.textContent = '';
                    f.className = 'feedback';
                });
            }

            // Reset translation visibility
            const transDetails = card.querySelector('.translation-details');
            if (transDetails) {
                transDetails.classList.remove('translation-hidden-checked');
                transDetails.open = false;
            }

            // Reset lock messages
            const lockMsg = card.querySelector('.quiz-lock-message');
            if (lockMsg) {
                lockMsg.classList.remove('visible');
                lockMsg.textContent = '';
            }
        });

        // Clear all lockout timers
        this.lockoutTimers.forEach((timer) => clearInterval(timer));
        this.lockoutTimers.clear();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    disconnectedCallback() {
        if (this.synth) {
            this.synth.cancel();
        }
        if (this._visibilityObserver) {
            this._visibilityObserver.disconnect();
        }
    }
}

customElements.define('tj-chapter-book', TjChapterBook);
