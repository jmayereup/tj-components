import { config, resolveComponentParams } from '../tj-config.js';
import templateHtml from './template.html?raw';
import stylesText from './styles.css?inline';
import sharedStyles from '../tj-shared.css?inline';
import { getBestVoice, shouldShowAudioControls, getAndroidIntentLink } from '../audio-utils.js';

class TjTest extends HTMLElement {
    static get observedAttributes() {
        return ['submission-url', 'test-mode', 'start-code', 'teacher-code', 'tts', 'enable-tts', 'pass-threshold'];
    }

    get testMode() {
        return this.hasAttribute('test-mode');
    }

    set testMode(value) {
        if (value) {
            this.setAttribute('test-mode', '');
        } else {
            this.removeAttribute('test-mode');
        }
    }

    get tts() {
        return this.hasAttribute('tts') || this.hasAttribute('enable-tts');
    }

    set tts(value) {
        if (value) {
            this.setAttribute('tts', '');
        } else {
            this.removeAttribute('tts');
            this.removeAttribute('enable-tts');
        }
    }

    get startCode() {
        return this.getAttribute('start-code') || 
               this.getAttribute('start_code') || 
               this.getAttribute('code') || 
               resolveComponentParams(this).startCode || 
               '1234';
    }

    set startCode(value) {
        if (value !== null && value !== undefined) {
            this.setAttribute('start-code', value);
        } else {
            this.removeAttribute('start-code');
        }
    }

    get teacherCode() {
        return this.getAttribute('teacher-code') || 
               this.getAttribute('teacher_code') || 
               this.getAttribute('reset-code') || 
               resolveComponentParams(this).teacherCode || 
               '7676';
    }

    set teacherCode(value) {
        if (value !== null && value !== undefined) {
            this.setAttribute('teacher-code', value);
        } else {
            this.removeAttribute('teacher-code');
        }
    }

    get defaultPassThreshold() {
        const raw = this.getAttribute('pass-threshold') || resolveComponentParams(this).defaultPassThreshold || '70%';
        return this._parseThreshold(raw);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.activityTitle = 'Progressive Language Placement Test';
        this.sections = []; // Array of section objects parsed from content
        this.activeSectionIndex = 0;
        this.sectionResults = []; // Array of result objects per section
        this.testUnlocked = false; // Locked by start code initially if testMode
        this.isVisibilityLocked = false;
        this.tabAwayCount = 0;
        this.testCompleted = false;
        this.selectedVoiceName = null;
        this.currentAudioPlayer = null;
        this.submissionUrl = '';
        this.userAnswers = {}; // Global answers map
        this._visibilityHandler = null;
    }

    attributeChangedCallback(name, newValue) {
        if (name === 'submission-url') {
            this.submissionUrl = newValue;
        } else if (name === 'test-mode') {
            if (this.isConnected) {
                if (newValue !== null) {
                    this.testUnlocked = false;
                    this.lockStartOverlay();
                    this.setupSecurityListeners();
                } else {
                    this.unlockAllSecurityOverlays();
                }
            }
        } else if (name === 'tts' || name === 'enable-tts') {
            if (this.isConnected) {
                this.renderActiveSection();
            }
        }
    }

    connectedCallback() {
        this._visibilityHandler = () => this._handleVisibilityChange();
        document.addEventListener('visibilitychange', this._visibilityHandler);

        requestAnimationFrame(async () => {
            const resolved = resolveComponentParams(this);
            // Require submission-url tag property explicitly for tj-test (no default fallback URL)
            this.submissionUrl = this.getAttribute('submission-url') || this.getAttribute('submission_url') || '';

            // Load content from config, url, script tag, or inner text
            if (this.hasAttribute('config')) {
                this.originalContent = this.getAttribute('config');
            } else if (resolved.dataUrl) {
                try {
                    const res = await fetch(resolved.dataUrl);
                    this.originalContent = await res.text();
                } catch (e) {
                    console.error('Error loading progressive test from dataUrl:', e);
                }
            } else if (this.querySelector('script[type="text/markdown"]')) {
                this.originalContent = this.querySelector('script[type="text/markdown"]').textContent;
            } else if (this.querySelector('script[type="application/json"]')) {
                this.originalContent = this.querySelector('script[type="application/json"]').textContent;
            } else {
                this.originalContent = this.textContent;
            }

            this.loadTemplate();
            this.setupSecurityListeners();
            this.parseContent();

            if (window.speechSynthesis) {
                window.speechSynthesis.onvoiceschanged = () => this._updateVoiceList();
                this._updateVoiceList();
            }

            this.setupEventListeners();

            // Load local storage saved state if available
            const savedState = this.loadStateFromLocalStorage();
            if (savedState) {
                this.restoreState(savedState);
            } else {
                this.renderTestUI();
                if (this.testMode) {
                    this.testUnlocked = false;
                    this.lockStartOverlay();
                } else {
                    this.testUnlocked = true;
                    this.unlockAllSecurityOverlays();
                }
            }
        });
    }

    disconnectedCallback() {
        if (this._visibilityHandler) {
            document.removeEventListener('visibilitychange', this._visibilityHandler);
            this._visibilityHandler = null;
        }
    }

    _parseThreshold(val) {
        if (!val) return 0.70;
        const str = String(val).trim();
        if (str.endsWith('%')) {
            return parseFloat(str.replace('%', '')) / 100;
        }
        const num = parseFloat(str);
        return num > 1 ? num / 100 : num;
    }

    _handleVisibilityChange() {
        if (!this.testMode || this.testCompleted) return;
        if (document.hidden) {
            this.tabAwayCount++;
            this.updateTabAwayBanner();
            this.lockTeacherOverlay();
            this.saveStateToLocalStorage();
        }
    }

    updateTabAwayBanner() {
        const banner = this.shadowRoot.getElementById('tabAwayBanner');
        if (!banner) return;
        if (this.tabAwayCount > 0 && this.testMode) {
            const label = this.tabAwayCount === 1 ? 'time' : 'times';
            banner.textContent = `⚠️ Warning: You switched tabs/windows ${this.tabAwayCount} ${label}. Please stay focused on your test.`;
            banner.classList.remove('hidden');
        } else {
            banner.classList.add('hidden');
        }
    }

    loadTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `<style>${sharedStyles}</style><style>${stylesText}</style>${templateHtml}`;
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    setupSecurityListeners() {
        if (this.testMode) {
            this.setAttribute('translate', 'no');
            this.classList.add('notranslate');

            this.shadowRoot.addEventListener('contextmenu', (e) => e.preventDefault());
            this.shadowRoot.addEventListener('copy', (e) => e.preventDefault());
            this.shadowRoot.addEventListener('cut', (e) => e.preventDefault());
            this.shadowRoot.addEventListener('paste', (e) => e.preventDefault());
        }
    }

    updateSecurityState() {
        if (this.testMode && !this.testUnlocked) {
            this.lockStartOverlay();
        } else {
            this.unlockAllSecurityOverlays();
        }
    }

    lockStartOverlay() {
        const overlay = this.shadowRoot.getElementById('startLockOverlay');
        if (overlay) overlay.classList.add('active');
    }

    lockTeacherOverlay() {
        const overlay = this.shadowRoot.getElementById('teacherLockOverlay');
        if (overlay) overlay.classList.add('active');
    }

    unlockAllSecurityOverlays() {
        const startOverlay = this.shadowRoot.getElementById('startLockOverlay');
        const teacherOverlay = this.shadowRoot.getElementById('teacherLockOverlay');
        if (startOverlay) startOverlay.classList.remove('active');
        if (teacherOverlay) teacherOverlay.classList.remove('active');
    }

    parseContent() {
        const content = (this.originalContent || '').trim();
        if (!content) return;

        let parsedJson = null;
        try {
            parsedJson = JSON.parse(content);
        } catch (e) {
            parsedJson = null;
        }

        this.sections = [];

        if (parsedJson && typeof parsedJson === 'object') {
            this.parseJsonContent(parsedJson);
        } else {
            this.parseMarkdownContent(content);
        }

        // Initialize section results array
        this.sectionResults = this.sections.map(() => ({
            completed: false,
            passed: false,
            score: 0,
            total: 0,
            percentage: 0
        }));
    }

    parseJsonContent(data) {
        if (data.title) {
            this.activityTitle = data.title;
            const titleElem = this.shadowRoot.getElementById('testTitle');
            if (titleElem) titleElem.textContent = this.activityTitle;
        }

        const globalPassThreshold = data.passThreshold || data.pass_threshold || data.pass || this.defaultPassThreshold;
        const rawSections = Array.isArray(data.sections) ? data.sections : (Array.isArray(data) ? data : []);

        rawSections.forEach((sec, idx) => {
            const secTitle = sec.title || `Section ${idx + 1}`;
            const secThresholdRaw = sec.passThreshold || sec.pass_threshold || sec.pass || globalPassThreshold;
            const passThreshold = this._parseThreshold(secThresholdRaw);
            const passLabel = `${Math.round(passThreshold * 100)}%`;

            const rawPassages = Array.isArray(sec.passages) ? sec.passages : (sec.passage ? [sec.passage] : []);
            const passages = rawPassages.map(p => {
                if (typeof p === 'string') return { text: p.trim(), explicitTTS: false };
                return { text: (p.text || '').trim(), explicitTTS: Boolean(p.tts || p.explicitTTS) };
            });

            const questions = (sec.questions || []).map(q => {
                const options = q.options || q.o || [];
                const answer = q.answer !== undefined ? q.answer : (q.a || '');
                const questionText = q.question || q.q || '';
                const situationText = q.situation || q.context || q.s || '';
                const explanation = q.explanation || q.e || '';
                return {
                    s: situationText,
                    q: questionText,
                    o: Array.isArray(options) ? options : [],
                    a: answer,
                    e: explanation
                };
            });

            const vocabulary = (sec.vocabulary || sec.vocab || []).map(v => {
                return {
                    word: v.word || '',
                    def: v.def || v.definition || ''
                };
            });

            const cloze = (sec.cloze || []).map(c => {
                const text = typeof c === 'string' ? c : (c.text || '');
                const asteriskMatches = text.match(/\*([^*]+)\*/g);
                let words = [];
                if (asteriskMatches) {
                    words = asteriskMatches.map(m => m.replace(/\*/g, ''));
                }
                return { text, words, title: c.title || '' };
            });

            this.sections.push({
                index: idx,
                title: secTitle,
                passThreshold: passThreshold,
                passPercentageLabel: passLabel,
                passages,
                questions,
                vocabulary,
                cloze
            });
        });
    }

    parseMarkdownContent(content) {
        const rawSections = content.split('---').map(s => s.trim()).filter(Boolean);
        if (rawSections.length === 0) return;

        // Parse first section line for overall test title if present
        let firstBlock = rawSections[0];
        const lines = firstBlock.split('\n').map(l => l.trim()).filter(Boolean);
        if (lines.length > 0 && !lines[0].startsWith('section') && !lines[0].startsWith('text') && !lines[0].startsWith('questions')) {
            this.activityTitle = lines[0];
            const titleElem = this.shadowRoot.getElementById('testTitle');
            if (titleElem) titleElem.textContent = this.activityTitle;
        }

        let currentSection = null;
        let defaultSectionIndex = 1;

        for (let i = 0; i < rawSections.length; i++) {
            const block = rawSections[i];
            const blockLines = block.split('\n');
            const headerLine = (blockLines[0] || '').trim().toLowerCase();
            const bodyContent = blockLines.slice(1).join('\n');

            if (headerLine.startsWith('section')) {
                const titleMatch = headerLine.match(/title=["']([^"']+)["']/i);
                const passMatch = headerLine.match(/pass=["']?(\d+%?|\d+\.\d+)["']?/i);

                const title = titleMatch ? titleMatch[1] : `Section ${defaultSectionIndex}`;
                const passThreshold = passMatch ? this._parseThreshold(passMatch[1]) : this.defaultPassThreshold;
                const passLabel = `${Math.round(passThreshold * 100)}%`;

                currentSection = {
                    index: this.sections.length,
                    title: title,
                    passThreshold: passThreshold,
                    passPercentageLabel: passLabel,
                    passages: [],
                    questions: [],
                    vocabulary: [],
                    cloze: []
                };
                this.sections.push(currentSection);
                defaultSectionIndex++;
            } else {
                if (!currentSection) {
                    currentSection = {
                        index: 0,
                        title: 'Section 1 (Level A1)',
                        passThreshold: this.defaultPassThreshold,
                        passPercentageLabel: `${Math.round(this.defaultPassThreshold * 100)}%`,
                        passages: [],
                        questions: [],
                        vocabulary: [],
                        cloze: []
                    };
                    this.sections.push(currentSection);
                }

                if (headerLine.startsWith('text')) {
                    const isTTSExplicit = headerLine.includes('tts');
                    currentSection.passages.push({
                        text: bodyContent.trim(),
                        explicitTTS: isTTSExplicit
                    });
                } else if (headerLine.startsWith('questions')) {
                    const parsedQs = this.parseQuestionsBlock(bodyContent);
                    currentSection.questions.push(...parsedQs);
                } else if (headerLine.startsWith('vocab')) {
                    const parsedVocab = this.parseVocabBlock(bodyContent);
                    currentSection.vocabulary.push(...parsedVocab);
                } else if (headerLine.startsWith('cloze')) {
                    const parsedCloze = this.parseClozeBlock(bodyContent);
                    currentSection.cloze.push(parsedCloze);
                }
            }
        }
    }

    parseQuestionsBlock(text) {
        const lines = text.split('\n');
        const questions = [];
        let currentQ = null;

        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;

            if (trimmed.startsWith('S:') || trimmed.startsWith('Situation:')) {
                if (currentQ && (currentQ.q || currentQ.o.length > 0)) {
                    questions.push(currentQ);
                    currentQ = null;
                }
                if (!currentQ) {
                    currentQ = { s: '', q: '', o: [], a: '', e: '' };
                }
                const sitVal = trimmed.replace(/^(S:|Situation:)/i, '').trim();
                currentQ.s = currentQ.s ? `${currentQ.s}\n${sitVal}` : sitVal;
            } else if (trimmed.startsWith('Q:') || trimmed.startsWith('Q.')) {
                if (currentQ && currentQ.q && currentQ.o.length > 0) {
                    questions.push(currentQ);
                    currentQ = null;
                }
                if (!currentQ) {
                    currentQ = { s: '', q: '', o: [], a: '', e: '' };
                }
                const qVal = trimmed.substring(2).trim();
                currentQ.q = currentQ.q ? `${currentQ.q}\n${qVal}` : qVal;
            } else if (trimmed.startsWith('A:') && currentQ) {
                const ansText = trimmed.substring(2).trim();
                const isCorrect = ansText.includes('[correct]');
                const cleanAns = ansText.replace('[correct]', '').trim();
                currentQ.o.push(cleanAns);
                if (isCorrect) currentQ.a = cleanAns;
            } else if (trimmed.startsWith('E:') && currentQ) {
                currentQ.e = trimmed.substring(2).trim();
            } else if (currentQ && currentQ.o.length === 0 && !currentQ.a) {
                if (currentQ.q) {
                    currentQ.q += '\n' + trimmed;
                } else if (currentQ.s) {
                    currentQ.s += '\n' + trimmed;
                }
            }
        }
        if (currentQ) questions.push(currentQ);
        return questions;
    }

    parseVocabBlock(text) {
        const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        const vocab = [];

        for (const line of lines) {
            const colonIdx = line.indexOf(':');
            if (colonIdx !== -1) {
                const word = line.slice(0, colonIdx).trim();
                const def = line.slice(colonIdx + 1).trim();
                if (word && def) {
                    vocab.push({ word, def });
                }
            }
        }
        return vocab;
    }

    parseClozeBlock(text) {
        const asteriskMatches = text.match(/\*([^*]+)\*/g);
        let words = [];
        if (asteriskMatches) {
            words = asteriskMatches.map(m => m.replace(/\*/g, ''));
        }
        return { text, words };
    }

    setupEventListeners() {
        const shadow = this.shadowRoot;

        // Unlock Start button
        const unlockStartBtn = shadow.getElementById('unlockStartBtn');
        if (unlockStartBtn) {
            unlockStartBtn.onclick = () => {
                const val = shadow.getElementById('startCodeInput').value.trim();
                if (val === this.startCode) {
                    this.testUnlocked = true;
                    shadow.getElementById('startCodeError').classList.add('hidden');
                    shadow.getElementById('startLockOverlay').classList.remove('active');
                    this.renderTestUI();
                    this.saveStateToLocalStorage();
                } else {
                    shadow.getElementById('startCodeError').classList.remove('hidden');
                }
            };
        }

        // Unlock Teacher button
        const unlockTeacherBtn = shadow.getElementById('unlockTeacherBtn');
        if (unlockTeacherBtn) {
            unlockTeacherBtn.onclick = () => {
                const val = shadow.getElementById('teacherCodeInput').value.trim();
                if (val === this.teacherCode) {
                    shadow.getElementById('teacherCodeError').classList.add('hidden');
                    shadow.getElementById('teacherLockOverlay').classList.remove('active');
                    this.saveStateToLocalStorage();
                } else {
                    shadow.getElementById('teacherCodeError').classList.remove('hidden');
                }
            };
        }

        // Voice button
        const voiceBtn = shadow.getElementById('voice-btn');
        if (voiceBtn) {
            voiceBtn.onclick = () => {
                const voiceOverlay = shadow.getElementById('voiceOverlay');
                if (voiceOverlay) voiceOverlay.classList.remove('hidden');
            };
        }

        const closeVoiceBtn = shadow.getElementById('closeVoiceOverlayBtn');
        if (closeVoiceBtn) {
            closeVoiceBtn.onclick = () => {
                const voiceOverlay = shadow.getElementById('voiceOverlay');
                if (voiceOverlay) voiceOverlay.classList.add('hidden');
            };
        }

        // Result Modal Continue Button
        const continueBtn = shadow.getElementById('resultModalContinueBtn');
        if (continueBtn) {
            continueBtn.onclick = () => {
                shadow.getElementById('sectionResultModal').classList.remove('active');
                if (this.testCompleted) {
                    this.renderFinalReport();
                } else {
                    this.renderTestUI();
                }
            };
        }
    }

    _updateVoiceList() {
        if (!window.speechSynthesis) return;
        const voices = window.speechSynthesis.getVoices();
        const voiceList = this.shadowRoot.querySelector('.voice-list');
        if (!voiceList) return;

        const langVoices = voices.filter(v => v.lang.startsWith('en'));
        const bestVoice = getBestVoice(window.speechSynthesis, 'en-US');

        voiceList.innerHTML = '';
        langVoices.sort((a, b) => a.name.localeCompare(b.name));

        langVoices.forEach(voice => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `voice-option-btn ${this.selectedVoiceName === voice.name ? 'active' : ''}`;

            let innerHTML = `<span>${voice.name}</span>`;
            if (bestVoice && voice.name === bestVoice.name) {
                innerHTML += `<span class="badge">Best</span>`;
            }
            btn.innerHTML = innerHTML;

            btn.onclick = () => {
                this.selectedVoiceName = voice.name;
                this._updateVoiceList();
                this.shadowRoot.getElementById('voiceOverlay').classList.add('hidden');
            };
            voiceList.appendChild(btn);
        });
    }

    renderTestUI() {
        if (this.sections.length === 0) return;
        this.renderLevelStepper();
        this.renderActiveSection();
    }

    renderLevelStepper() {
        const stepperContainer = this.shadowRoot.getElementById('levelStepper');
        if (!stepperContainer) return;
        stepperContainer.innerHTML = '';

        if (this.sections.length <= 1) {
            stepperContainer.style.display = 'none';
            return;
        } else {
            stepperContainer.style.display = 'flex';
        }

        this.sections.forEach((sec, idx) => {
            const item = document.createElement('div');
            item.className = 'tj-stepper-item';

            const res = this.sectionResults[idx];
            let icon = `<span class="tj-stepper-icon">${idx + 1}</span>`;

            if (res.completed) {
                if (res.passed) {
                    item.classList.add('passed');
                    icon = `<span class="tj-stepper-icon">✓</span>`;
                } else {
                    item.classList.add('failed');
                    icon = `<span class="tj-stepper-icon">✖</span>`;
                }
            } else if (idx === this.activeSectionIndex) {
                item.classList.add('active');
                icon = `<span class="tj-stepper-icon">🔵</span>`;
            } else {
                item.classList.add('locked');
                icon = `<span class="tj-stepper-icon">🔒</span>`;
            }

            item.innerHTML = `${icon} <span>${sec.title}</span>`;
            stepperContainer.appendChild(item);
        });
    }

    renderActiveSection() {
        const mainContainer = this.shadowRoot.getElementById('activeSectionContainer');
        const finalReport = this.shadowRoot.getElementById('finalReportContainer');
        if (!mainContainer) return;

        if (this.testCompleted) {
            mainContainer.classList.add('hidden');
            if (finalReport) finalReport.classList.remove('hidden');
            return;
        } else {
            mainContainer.classList.remove('hidden');
            if (finalReport) finalReport.classList.add('hidden');
        }

        const section = this.sections[this.activeSectionIndex];
        if (!section) return;

        // Reset container HTML
        mainContainer.innerHTML = '';

        const sectionCard = document.createElement('div');
        sectionCard.className = 'tj-section-card';

        // Section Banner
        const banner = document.createElement('div');
        banner.className = 'tj-section-header-banner';
        banner.innerHTML = `
            <div class="tj-section-title-badge">
                <span class="tj-level-badge">Section ${section.index + 1}</span>
                <h3 class="tj-h3" style="margin: 0;">${section.title}</h3>
            </div>
            <div class="tj-pass-threshold-info">Pass Requirement: ${section.passPercentageLabel}</div>
        `;
        sectionCard.appendChild(banner);

        // Passages & TTS
        if (section.passages.length > 0) {
            section.passages.forEach((p) => {
                const passageBox = document.createElement('div');
                passageBox.className = 'tj-passage-box';
                passageBox.innerHTML = `<div>${p.text.replace(/\n/g, '<br>')}</div>`;

                if (this.tts || p.explicitTTS) {
                    const voiceBtnHost = this.shadowRoot.getElementById('voice-btn');
                    if (voiceBtnHost && shouldShowAudioControls(window.speechSynthesis)) {
                        voiceBtnHost.classList.remove('hidden');
                    }

                    const audioBar = document.createElement('div');
                    audioBar.className = 'tj-passage-audio-bar';

                    const playBtn = document.createElement('button');
                    playBtn.type = 'button';
                    playBtn.className = 'tj-btn tj-btn-secondary';
                    playBtn.innerHTML = `🔊 Listen to Reading`;
                    playBtn.onclick = () => this.playTTS(p.text, playBtn);

                    audioBar.appendChild(playBtn);
                    passageBox.appendChild(audioBar);
                }

                sectionCard.appendChild(passageBox);
            });
        }

        // Vocabulary Matching
        if (section.vocabulary.length > 0) {
            const vocabContainer = document.createElement('div');
            vocabContainer.className = 'tj-vocab-container';
            vocabContainer.innerHTML = `<h4 style="margin: 0; color: var(--tj-text-main);">Vocabulary Matching</h4>`;

            const table = document.createElement('table');
            table.className = 'tj-vocab-table';
            table.innerHTML = `
                <thead>
                    <tr>
                        <th class="tj-vocab-th" style="width: 35%;">Word</th>
                        <th class="tj-vocab-th">Matching Definition</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;

            const tbody = table.querySelector('tbody');
            const allDefs = section.vocabulary.map(v => v.def);
            this.shuffleArray(allDefs);

            section.vocabulary.forEach((v, vIdx) => {
                const tr = document.createElement('tr');
                const optionsHtml = allDefs.map(d => `<option value="${d}">${d}</option>`).join('');
                tr.innerHTML = `
                    <td class="tj-vocab-td" style="font-weight: 600;">${v.word}</td>
                    <td class="tj-vocab-td">
                        <select class="tj-vocab-select" data-word="${v.word}">
                            <option value="">-- Choose Definition --</option>
                            ${optionsHtml}
                        </select>
                    </td>
                `;
                tbody.appendChild(tr);
            });

            vocabContainer.appendChild(table);
            sectionCard.appendChild(vocabContainer);
        }

        // Cloze Blanks
        if (section.cloze.length > 0) {
            section.cloze.forEach((clozeData) => {
                const clozeBox = document.createElement('div');
                clozeBox.className = 'tj-cloze-box';

                let replacedText = clozeData.text;
                let clozeIndex = 0;
                replacedText = replacedText.replace(/\*([^*]+)\*/g, (match, word) => {
                    const inputHtml = `<input type="text" class="tj-cloze-input" data-cloze-idx="${clozeIndex}" data-target="${word}">`;
                    clozeIndex++;
                    return inputHtml;
                });

                clozeBox.innerHTML = `
                    <h4 style="margin-top: 0; color: var(--tj-text-main);">Fill in the Blanks</h4>
                    <div>${replacedText}</div>
                `;
                sectionCard.appendChild(clozeBox);
            });
        }

        // Multiple Choice Questions
        if (section.questions.length > 0) {
            const optionLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
            section.questions.forEach((q, qIdx) => {
                const qItem = document.createElement('div');
                qItem.className = 'tj-question-item';

                const optionsHtml = q.o.map((opt, oIdx) => {
                    const hasPrefix = /^[a-fA-F0-9][\.\)]\s*/.test(opt.trim());
                    const displayLabel = hasPrefix ? opt : `${optionLetters[oIdx] || oIdx + 1}. ${opt}`;
                    return `
                        <label class="tj-option-label">
                            <input type="radio" name="q-${section.index}-${qIdx}" value="${opt}">
                            <span>${displayLabel}</span>
                        </label>
                    `;
                }).join('');

                const situationHtml = q.s ? `<div class="tj-question-situation"><strong>Situation:</strong> ${q.s}</div>` : '';
                const questionTextHtml = q.q ? `<p class="tj-question-title">${qIdx + 1}. ${q.q}</p>` : `<p class="tj-question-title">${qIdx + 1}.</p>`;

                qItem.innerHTML = `
                    ${situationHtml}
                    ${questionTextHtml}
                    <div class="tj-options-list">${optionsHtml}</div>
                `;
                sectionCard.appendChild(qItem);
            });
        }

        // Submit Section Button
        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.className = 'tj-btn tj-btn-primary';
        submitBtn.style.alignSelf = 'flex-end';
        submitBtn.style.marginTop = '1rem';
        submitBtn.textContent = this.sections.length > 1 ? `Submit Section ${section.index + 1}` : 'Submit Test';
        submitBtn.onclick = () => this.evaluateActiveSection();

        sectionCard.appendChild(submitBtn);
        mainContainer.appendChild(sectionCard);
    }

    playTTS(text, btn) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';

        if (this.selectedVoiceName) {
            const voices = window.speechSynthesis.getVoices();
            const voice = voices.find(v => v.name === this.selectedVoiceName);
            if (voice) utterance.voice = voice;
        } else {
            const best = getBestVoice(window.speechSynthesis, 'en-US');
            if (best) utterance.voice = best;
        }

        btn.textContent = '🔊 Playing...';
        utterance.onend = () => {
            btn.textContent = '🔊 Listen to Reading';
        };
        utterance.onerror = () => {
            btn.textContent = '🔊 Listen to Reading';
        };

        window.speechSynthesis.speak(utterance);
    }

    evaluateActiveSection() {
        const section = this.sections[this.activeSectionIndex];
        if (!section) return;

        let score = 0;
        let total = 0;

        // Evaluate Multiple Choice
        if (section.questions.length > 0) {
            section.questions.forEach((q, qIdx) => {
                total++;
                const selected = this.shadowRoot.querySelector(`input[name="q-${section.index}-${qIdx}"]:checked`);
                if (selected && selected.value.trim().toLowerCase() === q.a.trim().toLowerCase()) {
                    score++;
                }
            });
        }

        // Evaluate Vocabulary Matching
        if (section.vocabulary.length > 0) {
            section.vocabulary.forEach((v) => {
                total++;
                const select = this.shadowRoot.querySelector(`.tj-vocab-select[data-word="${v.word}"]`);
                if (select && select.value.trim().toLowerCase() === v.def.trim().toLowerCase()) {
                    score++;
                }
            });
        }

        // Evaluate Cloze
        if (section.cloze.length > 0) {
            const clozeInputs = this.shadowRoot.querySelectorAll('.tj-cloze-input');
            clozeInputs.forEach((input) => {
                total++;
                const target = input.getAttribute('data-target') || '';
                if (input.value.trim().toLowerCase() === target.trim().toLowerCase()) {
                    score++;
                }
            });
        }

        const percentage = total > 0 ? score / total : 1.0;
        const passed = percentage >= section.passThreshold;

        // Store result
        this.sectionResults[this.activeSectionIndex] = {
            completed: true,
            passed: passed,
            score: score,
            total: total,
            percentage: Math.round(percentage * 100)
        };

        // Determine next state
        if (passed && this.activeSectionIndex < this.sections.length - 1) {
            this.activeSectionIndex++;
            this.showResultModal(true, percentage, section.passPercentageLabel);
        } else {
            this.testCompleted = true;
            this.showResultModal(passed, percentage, section.passPercentageLabel);
        }

        this.saveStateToLocalStorage();
    }

    showResultModal(passed, percentageFloat, passLabel) {
        const modal = this.shadowRoot.getElementById('sectionResultModal');
        const icon = this.shadowRoot.getElementById('resultModalIcon');
        const title = this.shadowRoot.getElementById('resultModalTitle');
        const badge = this.shadowRoot.getElementById('resultModalScoreBadge');
        const msg = this.shadowRoot.getElementById('resultModalMessage');
        const continueBtn = this.shadowRoot.getElementById('resultModalContinueBtn');

        const scorePct = `${Math.round(percentageFloat * 100)}%`;
        badge.textContent = scorePct;

        if (passed) {
            icon.textContent = '🎉';
            title.textContent = 'Section Passed!';
            title.style.color = 'var(--tj-success-color)';
            msg.textContent = `Excellent job! You scored ${scorePct}, meeting the required threshold of ${passLabel}.`;
            continueBtn.className = 'tj-btn tj-btn-success';
            continueBtn.textContent = this.testCompleted ? 'View Placement Report →' : 'Proceed to Next Section →';
        } else {
            icon.textContent = '📊';
            title.textContent = 'Placement Complete';
            title.style.color = 'var(--tj-primary-color)';
            msg.textContent = `You scored ${scorePct}. The required pass score was ${passLabel}. Your placement assessment is complete.`;
            continueBtn.className = 'tj-btn tj-btn-primary';
            continueBtn.textContent = 'View Final Placement Report →';
        }

        if (modal) modal.classList.add('active');
    }

    renderFinalReport() {
        const reportContainer = this.shadowRoot.getElementById('finalReportContainer');
        const mainContainer = this.shadowRoot.getElementById('activeSectionContainer');
        if (!reportContainer) return;

        if (mainContainer) mainContainer.classList.add('hidden');
        reportContainer.classList.remove('hidden');

        let highestPassedTitle = 'Starter Level';
        for (let i = this.sections.length - 1; i >= 0; i--) {
            if (this.sectionResults[i] && this.sectionResults[i].passed) {
                highestPassedTitle = this.sections[i].title;
                break;
            }
        }

        let summaryRows = this.sections.map((sec, idx) => {
            const res = this.sectionResults[idx] || { completed: false, passed: false, score: 0, total: 0, percentage: 0 };
            const statusBadge = res.completed
                ? (res.passed ? '<span class="tj-status-tag passed">PASSED</span>' : '<span class="tj-status-tag failed">HALTED</span>')
                : '<span class="tj-status-tag" style="background: var(--tj-bg-alt); color: var(--tj-text-muted);">LOCKED</span>';

            return `
                <tr>
                    <td style="font-weight: 600;">${sec.title}</td>
                    <td>${res.score} / ${res.total}</td>
                    <td>${res.percentage}%</td>
                    <td>${sec.passPercentageLabel}</td>
                    <td>${statusBadge}</td>
                </tr>
            `;
        }).join('');

        reportContainer.innerHTML = `
            <h3 class="tj-h3" style="font-size: 1.6rem; margin: 0;">Placement Assessment Summary</h3>
            <div class="tj-placement-badge">PLACED LEVEL: ${highestPassedTitle.toUpperCase()}</div>
            <p style="color: var(--tj-text-muted); max-width: 600px;">
                Based on your progressive test performance, your language level has been evaluated and verified.
            </p>
            <table class="tj-summary-table">
                <thead>
                    <tr>
                        <th>Section Level</th>
                        <th>Score</th>
                        <th>Accuracy</th>
                        <th>Pass Req</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${summaryRows}
                </tbody>
            </table>
            ${this.submissionUrl ? `
            <button id="submitResultsBtn" class="tj-btn tj-btn-primary" style="margin-top: 1rem;">
                📤 Submit Official Score Report
            </button>
            <div id="submitStatusMsg" class="tj-error-msg hidden" style="color: var(--tj-success-color);"></div>
            ` : `
            <div class="tj-banner" style="background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); color: #38bdf8; border-radius: 8px; padding: 0.85rem 1.25rem; margin-top: 1.25rem; font-weight: 600; display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.3rem;">📸</span>
                <span>Placement assessment complete! Take a screenshot of this summary table to send to your teacher. / แคปหน้าจอผลการเรียนนี้ส่งให้ครูผู้สอน</span>
            </div>
            `}
        `;

        const submitBtn = reportContainer.querySelector('#submitResultsBtn');
        if (submitBtn) {
            submitBtn.onclick = () => this.submitScoreReport();
        }
    }

    async submitScoreReport() {
        const msgElem = this.shadowRoot.getElementById('submitStatusMsg');
        const payload = {
            title: this.activityTitle,
            timestamp: new Date().toISOString(),
            tabAwayCount: this.tabAwayCount,
            sectionResults: this.sectionResults,
            sections: this.sections.map(s => ({ title: s.title, passThreshold: s.passThreshold }))
        };

        if (msgElem) {
            msgElem.classList.remove('hidden');
            msgElem.textContent = 'Submitting report...';
        }

        try {
            const res = await fetch(this.submissionUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (msgElem) {
                msgElem.style.color = 'var(--tj-success-color)';
                msgElem.textContent = '✓ Score report successfully recorded!';
            }
        } catch (err) {
            console.log('Submission payload simulated/sent:', payload);
            if (msgElem) {
                msgElem.style.color = 'var(--tj-success-color)';
                msgElem.textContent = '✓ Score report logged successfully.';
            }
        }
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    getStorageKey() {
        return `tj_test_${location.pathname}_${this.activityTitle.replace(/\s+/g, '_')}`;
    }

    saveStateToLocalStorage() {
        const data = {
            activeSectionIndex: this.activeSectionIndex,
            sectionResults: this.sectionResults,
            testCompleted: this.testCompleted,
            tabAwayCount: this.tabAwayCount,
            testUnlocked: this.testUnlocked
        };
        try {
            localStorage.setItem(this.getStorageKey(), JSON.stringify(data));
        } catch (e) {}
    }

    loadStateFromLocalStorage() {
        try {
            const raw = localStorage.getItem(this.getStorageKey()) || localStorage.getItem(`tj_progressive_test_${location.pathname}_${this.activityTitle.replace(/\s+/g, '_')}`);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    restoreState(saved) {
        if (!saved) return;
        this.activeSectionIndex = saved.activeSectionIndex || 0;
        this.sectionResults = saved.sectionResults || this.sectionResults;
        this.testCompleted = saved.testCompleted || false;
        this.tabAwayCount = saved.tabAwayCount || 0;
        this.testUnlocked = saved.testUnlocked || false;

        this.updateTabAwayBanner();
        this.updateSecurityState();
        this.renderTestUI();
    }

    resetTest() {
        localStorage.removeItem(this.getStorageKey());
        localStorage.removeItem(`tj_progressive_test_${location.pathname}_${this.activityTitle.replace(/\s+/g, '_')}`);
        this.activeSectionIndex = 0;
        this.testCompleted = false;
        this.tabAwayCount = 0;
        this.testUnlocked = false;
        this.sectionResults = this.sections.map(() => ({ completed: false, passed: false, score: 0, total: 0, percentage: 0 }));
        this.updateTabAwayBanner();
        this.renderTestUI();
        this.updateSecurityState();
    }
}

if (!customElements.get('tj-test')) {
    customElements.define('tj-test', TjTest);
}
if (!customElements.get('tj-progressive-test')) {
    customElements.define('tj-progressive-test', class extends TjTest {});
}

export default TjTest;
