import { getBestVoice } from '../audio-utils.js';
import { config } from '../tj-config.js';
import stylesText from "./styles.css?inline";
import templateHtml from "./template.html?raw";

class TjListening extends HTMLElement {
    // Static registry of all instances on the page
    static _instances = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.lessonData = null;
        this.currentPhase = 0; // 0=intro, 1=vocab, 2=listening
        this.score = 0;
        this.answeredCount = 0;
        this.totalQuestions = 0;
        this.isCompleted = false;

        // Student info for report card
        this.studentInfo = { nickname: '', number: '', homeroom: '', teacherCode: '' };
        this.submissionUrl = config?.submissionUrl || 'https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec';
        this.isSubmitting = false;

        // TTS State
        this.selectedVoiceName = null;
        this.isPlaying = false;

        // Audio element references
        this._currentAudioEl = null;

        // Quiz mode — hides transcript when ?quiz=1 is in URL
        const params = new URLSearchParams(window.location.search);
        this.isQuizMode = params.get('quiz') === '1';

        // Register this instance
        TjListening._instances.push(this);

        // Use addEventListener so multiple instances don't clobber each other
        if (window.speechSynthesis) {
            window.speechSynthesis.addEventListener('voiceschanged', () => this._updateVoiceList());
        }
    }

    connectedCallback() {
        // Use setTimeout to ensure children (JSON content) are parsed by the browser
        requestAnimationFrame(() => {
            let rawJson = '';

            // 1. Property
            if (this.config) {
                if (typeof this.config === 'object') {
                    this.lessonData = this.config;
                    this._initDataAndRender();
                    return;
                } else {
                    rawJson = String(this.config);
                }
            }
            // 2. Attribute
            else if (this.hasAttribute('config')) {
                rawJson = this.getAttribute('config');
            }
            // 3. Script tag
            else if (this.querySelector('script[type="application/json"]')) {
                rawJson = this.querySelector('script[type="application/json"]').textContent.trim();
            }
            // 4. Default: Text Content
            else {
                rawJson = this.textContent.trim();
                this.textContent = ''; // clear only if used directly
            }

            try {
                if (rawJson) {
                    this.lessonData = JSON.parse(rawJson);
                    this._initDataAndRender();
                }
            } catch (error) {
                this.shadowRoot.innerHTML = `<p style="color: red;">Error parsing JSON: ${error.message}</p>`;
            }
        });
    }

    _initDataAndRender() {
        this.totalQuestions = this.lessonData.listening?.questions?.length || 0;
        this.render();

        // Retry voice list population for mobile
        this._updateVoiceList();
        setTimeout(() => this._updateVoiceList(), 500);
        setTimeout(() => this._updateVoiceList(), 1500);
    }

    _getLang() {
        return this.lessonData?.lang || 'en-US';
    }

    render() {
        if (!this.shadowRoot.querySelector('#lesson-container')) {
            const template = document.createElement("template");
            template.innerHTML = `<style>${stylesText}</style>${templateHtml}`;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this._attachBaseListeners();
        }

        if (this.isCompleted) {
            this.renderScoreScreen();
        } else {
            this.renderLesson();
        }
    }

    renderLesson() {
        const data = this.lessonData;
        const phaseLabels = ['Introduction', 'Vocabulary', 'Listening'];

        // Show lesson container, hide score screen
        this.shadowRoot.getElementById('lesson-container').style.display = 'block';
        const scoreScreen = this.shadowRoot.getElementById('score-screen');
        if (scoreScreen) scoreScreen.style.display = 'none';

        // Update Header
        this.shadowRoot.getElementById('lesson-title').textContent = data.title || 'Listening Lesson';
        this.shadowRoot.getElementById('phase-badge').textContent = phaseLabels[this.currentPhase];
        
        const progressInfo = this.shadowRoot.getElementById('progress-info');
        if (this.currentPhase === 2) {
            progressInfo.style.display = 'block';
            progressInfo.textContent = `${this.answeredCount} / ${this.totalQuestions} Answered`;
        } else {
            progressInfo.style.display = 'none';
        }

        // Update Phase Dots
        const dotsContainer = this.shadowRoot.getElementById('phase-dots');
        dotsContainer.innerHTML = phaseLabels.map((label, i) => `
            <div class="phase-dot-group ${i === this.currentPhase ? 'active' : ''} ${i < this.currentPhase ? 'completed' : ''}">
                <div class="phase-dot">${i < this.currentPhase ? '✓' : i + 1}</div>
                <span class="phase-dot-label">${label}</span>
            </div>
            ${i < phaseLabels.length - 1 ? '<div class="phase-dot-line"></div>' : ''}
        `).join('');

        // Update Phase Content
        const contentContainer = this.shadowRoot.getElementById('phase-content');
        if (this.currentPhase === 0) {
            contentContainer.innerHTML = this._renderIntroPhase();
        } else if (this.currentPhase === 1) {
            contentContainer.innerHTML = this._renderVocabPhase();
        } else {
            contentContainer.innerHTML = this._renderListeningPhase();
        }

        // Update Nav Buttons
        const prevBtn = this.shadowRoot.getElementById('prev-btn');
        const nextBtn = this.shadowRoot.getElementById('next-btn');
        if (prevBtn) prevBtn.disabled = this.currentPhase === 0;
        if (nextBtn) {
            if (this.currentPhase < 2) {
                nextBtn.style.display = 'flex';
            } else {
                nextBtn.style.display = 'none';
            }
        }

        this._attachPhaseListeners();
    }

    // ─── PHASE RENDERERS ───────────────────────────────────

    _renderIntroPhase() {
        const intro = this.lessonData.intro || {};

        return `
            <div class="intro-section">
                ${intro.context ? `<div class="context-card">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    <span>${intro.context}</span>
                </div>` : ''}
                <div class="intro-text">
                    <p>${intro.text || 'Welcome to this listening lesson.'}</p>
                </div>
            </div>
        `;
    }

    _renderVocabPhase() {
        const vocab = this.lessonData.vocab || [];

        if (vocab.length === 0) {
            return '<p class="empty-state">No vocabulary items for this lesson.</p>';
        }

        const cardsHtml = vocab.map((item, i) => `
            <div class="vocab-card">
                <div class="vocab-header">
                    <h3 class="vocab-word">${item.word}</h3>
                    <button class="tts-btn vocab-play-btn" data-text="${item.word}. ${item.example || ''}" title="Listen">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
                <p class="vocab-definition">${item.definition}</p>
                ${item.example ? `<p class="vocab-example">"${item.example}"</p>` : ''}
            </div>
        `).join('');

        return `
            <div class="instruction-banner">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                Review the vocabulary before listening. Tap the speaker to hear each word.
            </div>
            <div class="vocab-grid">
                ${cardsHtml}
            </div>
        `;
    }

    _renderListeningPhase() {
        const listening = this.lessonData.listening || {};
        const audioListening = this.getAttribute('audio-listening');

        let audioHtml = '';
        if (audioListening) {
            audioHtml = `
                <div class="audio-player">
                    <audio controls preload="metadata" class="audio-el">
                        <source src="${audioListening}" type="audio/mpeg">
                        Your browser does not support audio playback.
                    </audio>
                </div>
            `;
        } else {
            audioHtml = `
                <button class="tts-play-btn" id="listening-play-btn" title="Listen to dialogue">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    <span>Play Dialogue</span>
                </button>
            `;
        }

        // Build transcript display (hidden in quiz mode)
        let transcriptHtml = '';
        if (listening.transcript && !this.isQuizMode) {
            const lines = listening.transcript.split('\n').filter(l => l.trim());
            transcriptHtml = `
                <div class="transcript-box">
                    <div class="transcript-header">
                        <span class="transcript-label">Transcript</span>
                        <button class="transcript-toggle" id="transcript-toggle">Show</button>
                    </div>
                    <div class="transcript-body" id="transcript-body" style="display: none;">
                        ${lines.map(line => `<p class="transcript-line">${line}</p>`).join('')}
                    </div>
                </div>
            `;
        }

        // Build comprehension questions
        let questionsHtml = '';
        if (listening.questions && listening.questions.length > 0) {
            questionsHtml = listening.questions.map((q, qIndex) => {
                const questionId = `q_${qIndex}`;
                const optionsHtml = q.options.map((opt, optIndex) => `
                    <label class="mc-option" id="label_${questionId}_${optIndex}">
                        <input type="radio" name="${questionId}" value="${opt}" data-correct="${q.correct}" data-label-id="label_${questionId}_${optIndex}">
                        ${opt}
                    </label>
                `).join('');

                return `
                    <div class="question-card">
                        <div class="question-header">
                            <p class="question-text"><strong>Q${qIndex + 1}.</strong> ${q.question}</p>
                            <button class="tts-btn" data-text="${q.question}" title="Listen to question">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="options-group">
                            ${optionsHtml}
                        </div>
                    </div>
                `;
            }).join('');
        }

        return `
            <div class="listening-section">
                <div class="instruction-banner">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                    Listen to the dialogue, then answer the comprehension questions below.
                </div>
                ${audioHtml}
                ${transcriptHtml}
                <div class="section-title">Comprehension Questions</div>
                ${questionsHtml}
                <div id="footer-actions" class="footer-actions" style="display: ${this.answeredCount === this.totalQuestions && this.totalQuestions > 0 ? 'flex' : 'none'}">
                    <button id="complete-btn" class="complete-btn">See My Score</button>
                </div>
            </div>
        `;
    }

    // ─── EVENT LISTENERS ───────────────────────────────────

    _attachBaseListeners() {
        // Navigation
        const prevBtn = this.shadowRoot.getElementById('prev-btn');
        const nextBtn = this.shadowRoot.getElementById('next-btn');
        if (prevBtn) prevBtn.onclick = () => this._navigatePhase(-1);
        if (nextBtn) nextBtn.onclick = () => this._navigatePhase(1);

        // Share as Quiz button
        const shareBtn = this.shadowRoot.getElementById('share-quiz-btn');
        if (shareBtn) shareBtn.onclick = () => this._shareAsQuiz();

        // Voice overlay
        this.shadowRoot.getElementById('voice-btn').onclick = () => this._showVoiceOverlay();
        this.shadowRoot.getElementById('close-voice-btn').onclick = () => this._hideVoiceOverlay();
        this.shadowRoot.getElementById('voice-overlay').onclick = (e) => {
            if (e.target.id === 'voice-overlay') this._hideVoiceOverlay();
        };
    }

    _attachPhaseListeners() {
        // TTS buttons (vocab + question play buttons)
        this.shadowRoot.querySelectorAll('.tts-btn, .vocab-play-btn').forEach(btn => {
            btn.onclick = () => this._playTTS(btn.getAttribute('data-text'));
        });

        // Listening play button (TTS)
        const listeningPlayBtn = this.shadowRoot.getElementById('listening-play-btn');
        if (listeningPlayBtn) {
            listeningPlayBtn.onclick = () => {
                const text = this.lessonData.listening?.transcript || '';
                this._playTTS(text);
            };
        }

        // Transcript toggle
        const transcriptToggle = this.shadowRoot.getElementById('transcript-toggle');
        if (transcriptToggle) {
            transcriptToggle.onclick = () => {
                const body = this.shadowRoot.getElementById('transcript-body');
                if (body.style.display === 'none') {
                    body.style.display = 'block';
                    transcriptToggle.textContent = 'Hide';
                } else {
                    body.style.display = 'none';
                    transcriptToggle.textContent = 'Show';
                }
            };
        }

        // MC validation
        this._attachValidationListeners();

        // Complete button
        const completeBtn = this.shadowRoot.getElementById('complete-btn');
        if (completeBtn) {
            completeBtn.onclick = () => {
                this.isCompleted = true;
                this.render();
            };
        }
    }

    _navigatePhase(direction) {
        const newPhase = this.currentPhase + direction;
        if (newPhase >= 0 && newPhase <= 2) {
            // Stop any TTS playback when switching phases
            if (window.speechSynthesis) window.speechSynthesis.cancel();
            this.currentPhase = newPhase;
            this.render();
            this.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    _attachValidationListeners() {
        const radios = this.shadowRoot.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                const selectedValue = e.target.value;
                const correctAnswer = e.target.getAttribute('data-correct');
                const labelId = e.target.getAttribute('data-label-id');
                const parentLabel = this.shadowRoot.getElementById(labelId);

                const groupName = e.target.name;
                const groupRadios = this.shadowRoot.querySelectorAll(`input[name="${groupName}"]`);

                // Disable all radios in this group
                groupRadios.forEach(r => { r.disabled = true; });

                if (selectedValue === correctAnswer) {
                    parentLabel.classList.add('correct');
                    this.score++;
                } else {
                    parentLabel.classList.add('incorrect');
                    // Highlight the correct answer
                    groupRadios.forEach(r => {
                        if (r.value === r.getAttribute('data-correct')) {
                            const correctLabelId = r.getAttribute('data-label-id');
                            this.shadowRoot.getElementById(correctLabelId).classList.add('correct-highlight');
                        }
                    });
                }

                this.answeredCount++;
                this._updateProgress();
                this._checkCompletion();
            });
        });
    }

    _updateProgress() {
        const display = this.shadowRoot.querySelector('.progress-info');
        if (display) {
            display.textContent = `${this.answeredCount} / ${this.totalQuestions} Answered`;
        }
    }

    _checkCompletion() {
        if (this.answeredCount === this.totalQuestions && this.totalQuestions > 0) {
            const footer = this.shadowRoot.getElementById('footer-actions');
            if (footer) footer.style.display = 'flex';
        }
    }

    _isLastInstance() {
        const all = TjListening._instances;
        return all.length > 1 && all[all.length - 1] === this;
    }

    _getCombinedScore() {
        const all = TjListening._instances;
        let totalScore = 0, totalQuestions = 0, allDone = true;
        all.forEach(inst => {
            totalScore += inst.score;
            totalQuestions += inst.totalQuestions;
            if (!inst.isCompleted) allDone = false;
        });
        return { totalScore, totalQuestions, allDone, count: all.length };
    }

    renderScoreScreen() {
        const percentage = Math.round((this.score / this.totalQuestions) * 100) || 0;
        let emoji = '🎉';
        if (percentage < 50) emoji = '💪';
        else if (percentage < 80) emoji = '👍';

        // Combined score for last instance
        let combinedHtml = '';
        if (this._isLastInstance()) {
            const combined = this._getCombinedScore();
            if (combined.allDone) {
                const combinedPct = Math.round((combined.totalScore / combined.totalQuestions) * 100) || 0;
                let combinedEmoji = '🏆';
                if (combinedPct < 50) combinedEmoji = '💪';
                else if (combinedPct < 80) combinedEmoji = '⭐';
                combinedHtml = `
                    <div class="combined-score">
                        <div class="combined-header">${combinedEmoji} Combined Score — All ${combined.count} Lessons</div>
                        <div class="combined-stats">
                            <div class="combined-value">${combined.totalScore} / ${combined.totalQuestions}</div>
                            <div class="combined-percent">${combinedPct}%</div>
                        </div>
                        <div class="combined-bar-track">
                            <div class="combined-bar-fill" style="width: ${combinedPct}%"></div>
                        </div>
                    </div>
                `;
            } else {
                const done = TjListening._instances.filter(i => i.isCompleted).length;
                combinedHtml = `
                    <div class="combined-score combined-pending">
                        <div class="combined-header">📋 Lesson Progress</div>
                        <p class="combined-note">${done} of ${combined.count} lessons completed. Finish all to see your combined score.</p>
                    </div>
                `;
            }
        }

        const isLast = this._isLastInstance();

        // Hide lesson, show score screen
        this.shadowRoot.getElementById('lesson-container').style.display = 'none';
        const scoreScreen = this.shadowRoot.getElementById('score-screen');
        scoreScreen.style.display = 'block';

        scoreScreen.innerHTML = `
            <div class="score-circle">
                <div class="score-value">${this.score}/${this.totalQuestions}</div>
                <div class="score-percent">${percentage}%</div>
            </div>
            <h2>${emoji} ${percentage >= 80 ? 'Excellent!' : percentage >= 50 ? 'Good effort!' : 'Keep practicing!'}</h2>
            <p>You completed the "${this.lessonData.title || 'Listening Lesson'}" activity.</p>
            <div class="score-actions">
                <button class="role-btn" id="restart-btn">Try Again</button>
                ${isLast ? `<button class="report-btn" id="report-btn">📄 See Report Card</button>` : ''}
            </div>
            ${combinedHtml}
        `;

        this.scrollIntoView({ behavior: 'smooth', block: 'start' });

        this.shadowRoot.getElementById('restart-btn').addEventListener('click', () => {
            this.score = 0;
            this.answeredCount = 0;
            this.isCompleted = false;
            this.currentPhase = 0;
            this.render();
        });

        if (isLast) {
            this.shadowRoot.getElementById('report-btn').addEventListener('click', () => {
                this._showReportOverlay();
            });

            this.shadowRoot.getElementById('generate-btn').addEventListener('click', () => {
                this._generateReport();
            });

            this.shadowRoot.getElementById('cancel-btn').addEventListener('click', () => {
                this.shadowRoot.getElementById('report-overlay').style.display = 'none';
            });

            this.shadowRoot.getElementById('report-overlay').addEventListener('click', (e) => {
                if (e.target.id === 'report-overlay') {
                    this.shadowRoot.getElementById('report-overlay').style.display = 'none';
                }
            });
        }
    }

    _showReportOverlay() {
        const overlay = this.shadowRoot.getElementById('report-overlay');
        overlay.style.display = 'flex';

        // Pre-fill and re-generate if already entered
        if (this.studentInfo.nickname) {
            const nicknameInput = this.shadowRoot.getElementById('nickname-input');
            const numberInput = this.shadowRoot.getElementById('number-input');
            if (nicknameInput) nicknameInput.value = this.studentInfo.nickname;
            if (numberInput) numberInput.value = this.studentInfo.number;
            this._generateReport();
        } else {
            const initialForm = this.shadowRoot.getElementById('initial-form');
            const reportArea = this.shadowRoot.getElementById('report-area');
            if (initialForm) initialForm.style.display = 'block';
            if (reportArea) reportArea.style.display = 'none';
        }
    }

    _generateReport() {
        const nicknameInput = this.shadowRoot.getElementById('nickname-input');
        const numberInput = this.shadowRoot.getElementById('number-input');
        const homeroomInput = this.shadowRoot.getElementById('homeroom-input');
        const nickname = nicknameInput ? nicknameInput.value.trim() : this.studentInfo.nickname;
        const number = numberInput ? numberInput.value.trim() : this.studentInfo.number;
        const homeroom = homeroomInput ? homeroomInput.value.trim() : this.studentInfo.homeroom;

        if (!nickname || !number) {
            alert('Please enter both nickname and student number.');
            return;
        }

        this.studentInfo = { ...this.studentInfo, nickname, number, homeroom };

        const combined = this._getCombinedScore();
        const combinedPct = Math.round((combined.totalScore / combined.totalQuestions) * 100) || 0;
        const timestamp = new Date().toLocaleString();

        let combinedEmoji = '🏆';
        if (combinedPct < 50) combinedEmoji = '💪';
        else if (combinedPct < 80) combinedEmoji = '⭐';

        const reportHtml = `
            <div class="rc-header">
                <div class="rc-icon">📄</div>
                <div class="rc-title">${this.lessonData.title || 'Listening Practice'}</div>
                <div class="rc-subtitle">Report Card</div>
                <div class="rc-activity">All ${combined.count} Lessons</div>
            </div>
            <div class="rc-student">
                <span class="rc-label">Student</span>
                <span class="rc-value">${nickname} <span class="rc-number">(${number}) ${homeroom ? `- ${homeroom}` : ''}</span></span>
            </div>
            <div class="rc-score-row">
                <div class="rc-score-circle">
                    <div class="rc-score-val">${combined.totalScore}/${combined.totalQuestions}</div>
                    <div class="rc-score-pct">${combinedPct}%</div>
                </div>
                <div class="rc-score-label">${combinedEmoji} ${combinedPct >= 80 ? 'Excellent!' : combinedPct >= 50 ? 'Good effort!' : 'Keep practicing!'}</div>
            </div>
            <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${combinedPct}%"></div></div>
            <div class="rc-details">
                <div class="rc-detail-row"><span>Total Correct</span><span>${combined.totalScore} / ${combined.totalQuestions}</span></div>
                <div class="rc-detail-row"><span>Completed On</span><span>${timestamp}</span></div>
            </div>

            <div class="rc-submission-box">
                <p class="rc-submission-header">Submission (Optional)</p>
                <input type="text" id="report-teacher-code" class="rc-teacher-code-input" placeholder="Enter Teacher Code" value="${this.studentInfo.teacherCode || ''}">
                <p class="rc-help-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
            </div>

            <div class="rc-actions" style="margin-top: 16px;">
                <button class="rc-submit-btn" id="submit-score-btn">Submit Score Online</button>
                <button class="rc-secondary-btn" id="rc-close-btn" style="margin-top: 8px;">↩ Return to Activity</button>
            </div>
        `;

        const initialForm = this.shadowRoot.getElementById('initial-form');
        const reportArea = this.shadowRoot.getElementById('report-area');
        if (initialForm) initialForm.style.display = 'none';
        if (reportArea) {
            reportArea.style.display = 'block';
            reportArea.innerHTML = reportHtml;
        }

        const submitBtn = this.shadowRoot.getElementById('submit-score-btn');
        if (submitBtn) submitBtn.onclick = () => this._submitScore();

        this.shadowRoot.getElementById('rc-close-btn').addEventListener('click', () => {
            this.shadowRoot.getElementById('report-overlay').style.display = 'none';
        });
    }

    async _submitScore() {
        const reportTeacherCodeInput = this.shadowRoot.getElementById('report-teacher-code');
        const currentTeacherCode = reportTeacherCodeInput ? reportTeacherCodeInput.value.trim() : this.studentInfo.teacherCode;
        
        // Cache for reuse
        this.studentInfo.teacherCode = currentTeacherCode;

        if (currentTeacherCode !== '6767') {
            alert('Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.');
            return;
        }

        if (this.isSubmitting) return;

        const submitBtn = this.shadowRoot.getElementById('submit-score-btn');
        if (!submitBtn) return;
        const originalText = submitBtn.textContent;
        
        this.isSubmitting = true;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        const combined = this._getCombinedScore();
        const combinedPct = Math.round((combined.totalScore / combined.totalQuestions) * 100) || 0;

        const payload = {
            nickname: this.studentInfo.nickname,
            homeroom: this.studentInfo.homeroom || '',
            studentId: this.studentInfo.number,
            quizName: 'Listening- ' + (this.lessonData.title || 'Lesson'),
            score: combinedPct,
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
            submitBtn.style.background = '#64748b';
        } catch (err) {
            console.error('Error submitting score:', err);
            alert('There was an error submitting your score. Please try again.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.isSubmitting = false;
        }
    }

    // ─── TTS LOGIC ─────────────────────────────────────────

    _getBestVoice(lang) {
        return getBestVoice(window.speechSynthesis, lang);
    }

    _playTTS(text) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const lang = this._getLang();
        utterance.lang = lang;
        utterance.rate = 0.85;

        const voices = window.speechSynthesis.getVoices();
        let voice = voices.find(v => v.name === this.selectedVoiceName);
        if (!voice) {
            voice = this._getBestVoice(lang);
        }

        if (voice) utterance.voice = voice;

        utterance.onstart = () => { this.isPlaying = true; };
        utterance.onend = () => { this.isPlaying = false; };

        window.speechSynthesis.speak(utterance);
    }

    _shareAsQuiz() {
        const url = new URL(window.location.href);
        url.searchParams.set('quiz', '1');
        const quizUrl = url.toString();

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(quizUrl).then(() => {
                this._showToast('Quiz link copied!');
            }).catch(() => {
                this._showToast(quizUrl, true);
            });
        } else {
            this._showToast(quizUrl, true);
        }
    }

    _showToast(message, isUrl = false) {
        // Remove existing toast
        const existing = this.shadowRoot.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        if (isUrl) {
            toast.innerHTML = `<span>Quiz link:</span><input type="text" value="${message}" readonly class="toast-url" />`;
            toast.querySelector('.toast-url').onclick = function () { this.select(); };
        } else {
            toast.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg><span>${message}</span>`;
        }
        this.shadowRoot.appendChild(toast);

        // Auto-remove after 3 seconds
        setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3000);
    }

    _showVoiceOverlay() {
        const overlay = this.shadowRoot.getElementById('voice-overlay');
        overlay.style.display = 'flex';
        this._updateVoiceList();
    }

    _hideVoiceOverlay() {
        const overlay = this.shadowRoot.getElementById('voice-overlay');
        overlay.style.display = 'none';
    }

    _updateVoiceList() {
        const voiceList = this.shadowRoot.getElementById('voice-list');
        if (!voiceList) return;

        const voices = window.speechSynthesis.getVoices();
        const lang = this._getLang();
        const langPrefix = lang.split(/[-_]/)[0].toLowerCase();
        // Always use prefix-based matching so all variants (e.g. en-US, en-GB) appear
        let langVoices = voices.filter(v => v.lang.split(/[-_]/)[0].toLowerCase() === langPrefix);
        const bestVoice = this._getBestVoice(lang);

        voiceList.innerHTML = '';
        langVoices.sort((a, b) => a.name.localeCompare(b.name));

        langVoices.forEach(voice => {
            const btn = document.createElement('button');
            btn.classList.add('voice-option-btn');
            if (this.selectedVoiceName === voice.name || (!this.selectedVoiceName && bestVoice && voice.name === bestVoice.name)) {
                btn.classList.add('active');
            }

            btn.innerHTML = `<span>${voice.name}</span>`;
            if (bestVoice && voice.name === bestVoice.name) {
                btn.innerHTML += `<span class="badge">Best</span>`;
            }

            btn.onclick = () => {
                this.selectedVoiceName = voice.name;
                this._updateVoiceList();
                this._hideVoiceOverlay();
            };
            voiceList.appendChild(btn);
        });
    }

}

customElements.define('tj-listening', TjListening);
