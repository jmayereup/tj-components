import { config, resolveComponentParams } from '../tj-config.js';
import templateHtml from './template.html?raw';
import stylesText from './styles.css?inline';
import sharedStyles from '../tj-shared.css?inline';
import { getBestVoice, shouldShowAudioControls, getAndroidIntentLink } from '../audio-utils.js';

class TjTest extends HTMLElement {
    static get observedAttributes() {
        return ['submission-url', 'test-mode', 'start-code', 'teacher-code', 'submit-code', 'tts', 'enable-tts', 'pass-threshold'];
    }

    get testMode() {
        if (this.hasAttribute('practice-mode') || this.getAttribute('test-mode') === 'false') {
            return false;
        }
        return this.hasAttribute('test-mode');
    }

    set testMode(value) {
        if (value && value !== 'false') {
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
               this.getAttribute('submit-code') || 
               this.getAttribute('submit_code') || 
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
        const raw = this.getAttribute('pass-threshold') || resolveComponentParams(this).defaultPassThreshold || '0%';
        return this._parseThreshold(raw);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.activityTitle = 'Test';
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

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'submission-url') {
            this.submissionUrl = newValue || '';
        } else if (name === 'test-mode') {
            if (this.isConnected) {
                if (this.testMode) {
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

    _decodeHTMLEntities(str) {
        if (!str || typeof str !== 'string') return str;
        if (!str.includes('&')) return str;
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    }

    connectedCallback() {
        this._visibilityHandler = () => this._handleVisibilityChange();
        document.addEventListener('visibilitychange', this._visibilityHandler);

        requestAnimationFrame(async () => {
            const resolved = resolveComponentParams(this);
            // Resolve submission-url property explicitly or fall back to resolved default
            this.submissionUrl = this.getAttribute('submission-url') || this.getAttribute('submission_url') || resolved.submissionUrl || '';

            // Load content from config property, config attribute, url, script tag, or inner text
            if (this.config) {
                this.originalContent = typeof this.config === 'object' ? JSON.stringify(this.config) : String(this.config);
            } else if (this.hasAttribute('config')) {
                this.originalContent = this.getAttribute('config');
            } else if (resolved.dataUrl) {
                try {
                    const res = await fetch(resolved.dataUrl);
                    this.originalContent = await res.text();
                } catch (e) {
                    console.error('Error loading test from dataUrl:', e);
                }
            } else if (this.querySelector('script[type="text/markdown"]')) {
                this.originalContent = this.querySelector('script[type="text/markdown"]').textContent;
            } else if (this.querySelector('script[type="application/json"]')) {
                this.originalContent = this.querySelector('script[type="application/json"]').textContent;
            } else if (this.querySelector('script[type="text/plain"]')) {
                this.originalContent = this.querySelector('script[type="text/plain"]').textContent;
            } else if (this.querySelector('script')) {
                this.originalContent = this.querySelector('script').textContent;
            } else {
                this.originalContent = this.textContent;
            }

            // Decode HTML entities (handles Google Sites HTML sanitizer escaping)
            this.originalContent = this._decodeHTMLEntities(this.originalContent);

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
        if (val === null || val === undefined || val === '') return 0;
        const str = String(val).trim().toLowerCase();
        if (str === '0' || str === '0%' || str === 'disabled' || str === 'none' || str === 'off') return 0;
        if (str.endsWith('%')) {
            return parseFloat(str.replace('%', '')) / 100;
        }
        const num = parseFloat(str);
        if (isNaN(num)) return 0;
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
        const input = this.shadowRoot.getElementById('teacherCodeInput');
        if (input) input.value = '';
        const errorMsg = this.shadowRoot.getElementById('teacherCodeError');
        if (errorMsg) errorMsg.classList.add('hidden');
        if (overlay) overlay.classList.add('active');
    }

    unlockAllSecurityOverlays() {
        const startOverlay = this.shadowRoot.getElementById('startLockOverlay');
        const teacherOverlay = this.shadowRoot.getElementById('teacherLockOverlay');
        const input = this.shadowRoot.getElementById('teacherCodeInput');
        if (input) input.value = '';
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
        const passThreshold = this._parseThreshold(globalPassThreshold);
        const passLabel = `${Math.round(passThreshold * 100)}%`;
        const rawSections = Array.isArray(data.sections) ? data.sections : (Array.isArray(data) ? data : []);

        rawSections.forEach((sec, idx) => {
            const secTitle = sec.title || `Section ${idx + 1}`;

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
                return this.normalizeQuestion({
                    s: situationText,
                    q: questionText,
                    o: Array.isArray(options) ? options : [],
                    a: answer,
                    e: explanation
                });
            });

            const vocabulary = (sec.vocabulary || sec.vocab || []).map(v => {
                return {
                    word: v.word || '',
                    def: v.def || v.definition || ''
                };
            });

            const cloze = (sec.cloze || []).map(c => {
                const text = typeof c === 'string' ? c : (c.text || '');
                let words = (typeof c === 'object' && Array.isArray(c.words) && c.words.length > 0)
                    ? [...c.words]
                    : [];
                if (words.length === 0 && text) {
                    const asteriskMatches = text.match(/\*([^*]+)\*/g);
                    if (asteriskMatches) {
                        words = asteriskMatches.map(m => m.replace(/\*/g, ''));
                    }
                }
                return { text, words, title: (typeof c === 'object' && c.title) ? c.title : '' };
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

            const isKnownType = headerLine.startsWith('section') || 
                                headerLine.startsWith('text') || 
                                headerLine.startsWith('questions') || 
                                headerLine.startsWith('vocab') || 
                                headerLine.startsWith('cloze');

            if (headerLine.startsWith('section')) {
                const titleMatch = headerLine.match(/title=["']([^"']+)["']/i);

                const title = titleMatch ? titleMatch[1] : `Section ${defaultSectionIndex}`;
                const passThreshold = this.defaultPassThreshold;
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
                if (i === 0 && !isKnownType) {
                    // First block was just the overall title, skip creating a dummy empty section
                    continue;
                }

                if (!currentSection) {
                    currentSection = {
                        index: 0,
                        title: 'Section 1',
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

    normalizeQuestion(q) {
        // Strip question number or letter prefix from question text (e.g. "1. ", "Q1: ", "1) ", "(1) ")
        let cleanQ = (q.q || '').trim();
        cleanQ = cleanQ.replace(/^(?:Q\d*[\.:\)]|\d+[\.:\)]|\(\d+\))\s*/i, '').trim();

        // Raw options and answer
        const rawOptions = (q.o || []).map(opt => String(opt).trim());
        const rawAnswer = String(q.a || '').trim();

        // Helper to strip option letter/number prefix e.g. "a. ", "b) ", "(c) ", "1. "
        const stripOptPrefix = (str) => {
            return str.replace(/^(?:\([a-fA-F0-9\d]+\)|[a-fA-F0-9\d]+[\.\)])\s*/, '').trim();
        };

        const cleanOptions = rawOptions.map(opt => stripOptPrefix(opt));

        // Resolve answer text
        let answerText = '';
        if (rawAnswer) {
            const strippedRawAns = stripOptPrefix(rawAnswer);
            // 1. Direct match with a clean option
            const directMatch = cleanOptions.find(opt => opt.toLowerCase() === strippedRawAns.toLowerCase());
            if (directMatch !== undefined) {
                answerText = directMatch;
            } else {
                // 2. Check if rawAnswer matched an original option before stripping
                const origIdx = rawOptions.findIndex(opt => opt.toLowerCase() === rawAnswer.toLowerCase());
                if (origIdx !== -1) {
                    answerText = cleanOptions[origIdx];
                } else {
                    // 3. Check if rawAnswer is a single letter (e.g. 'a', 'b', 'c', 'd')
                    const letterMatch = rawAnswer.match(/^[a-fA-F]$/i);
                    if (letterMatch) {
                        const charCode = letterMatch[0].toLowerCase().charCodeAt(0);
                        const idx = charCode - 97; // 'a' -> 0, 'b' -> 1, etc.
                        if (idx >= 0 && idx < cleanOptions.length) {
                            answerText = cleanOptions[idx];
                        }
                    }
                    // 4. Check if rawAnswer is a numeric index
                    if (!answerText && /^\d+$/.test(rawAnswer)) {
                        const numIdx = parseInt(rawAnswer, 10);
                        if (numIdx >= 0 && numIdx < cleanOptions.length) {
                            answerText = cleanOptions[numIdx];
                        } else if (numIdx - 1 >= 0 && numIdx - 1 < cleanOptions.length) {
                            answerText = cleanOptions[numIdx - 1];
                        }
                    }
                    if (!answerText) {
                        answerText = strippedRawAns;
                    }
                }
            }
        }

        // Shuffle options
        const shuffledOptions = [...cleanOptions];
        this.shuffleArray(shuffledOptions);

        return {
            s: q.s || '',
            q: cleanQ,
            o: shuffledOptions,
            a: answerText,
            e: q.e || ''
        };
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
                    questions.push(this.normalizeQuestion(currentQ));
                    currentQ = null;
                }
                if (!currentQ) {
                    currentQ = { s: '', q: '', o: [], a: '', e: '' };
                }
                const sitVal = trimmed.replace(/^(S:|Situation:)/i, '').trim();
                currentQ.s = currentQ.s ? `${currentQ.s}\n${sitVal}` : sitVal;
            } else if (trimmed.startsWith('Q:') || trimmed.startsWith('Q.')) {
                if (currentQ && currentQ.q) {
                    questions.push(this.normalizeQuestion(currentQ));
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
        if (currentQ) questions.push(this.normalizeQuestion(currentQ));
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
        const startCodeInput = shadow.getElementById('startCodeInput');
        const startNicknameInput = shadow.getElementById('startNicknameInput');
        const startStudentIdInput = shadow.getElementById('startStudentIdInput');
        const startHomeroomInput = shadow.getElementById('startHomeroomInput');

        if (unlockStartBtn) {
            const handleStartUnlock = () => {
                const nickname = startNicknameInput ? startNicknameInput.value.trim() : '';
                const studentId = startStudentIdInput ? startStudentIdInput.value.trim() : '';
                const homeroom = startHomeroomInput ? startHomeroomInput.value.trim() : '';
                const errorMsg = shadow.getElementById('startCodeError');

                if (!nickname || !studentId) {
                    if (errorMsg) {
                        errorMsg.textContent = '⚠️ Please enter your Student Nickname and Student ID to begin.';
                        errorMsg.classList.remove('hidden');
                    }
                    return;
                }

                const val = shadow.getElementById('startCodeInput').value.trim();
                if (val === this.startCode) {
                    this.studentInfo = { nickname, studentId, homeroom };
                    this.testUnlocked = true;
                    if (errorMsg) errorMsg.classList.add('hidden');
                    shadow.getElementById('startLockOverlay').classList.remove('active');
                    this.renderTestUI();
                    this.saveStateToLocalStorage();
                } else {
                    if (errorMsg) {
                        errorMsg.textContent = 'Invalid start code. Please check and try again.';
                        errorMsg.classList.remove('hidden');
                    }
                }
            };
            unlockStartBtn.onclick = handleStartUnlock;
            const inputElements = [startCodeInput, startNicknameInput, startStudentIdInput, startHomeroomInput];
            inputElements.forEach(inp => {
                if (inp) {
                    inp.onkeydown = (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleStartUnlock();
                        }
                    };
                }
            });
        }

        // Unlock Teacher button
        const unlockTeacherBtn = shadow.getElementById('unlockTeacherBtn');
        const teacherCodeInput = shadow.getElementById('teacherCodeInput');
        if (unlockTeacherBtn) {
            const handleTeacherUnlock = () => {
                const input = shadow.getElementById('teacherCodeInput');
                const val = input ? input.value.trim() : '';
                if (input) input.value = '';
                if (val === this.teacherCode) {
                    shadow.getElementById('teacherCodeError').classList.add('hidden');
                    shadow.getElementById('teacherLockOverlay').classList.remove('active');
                    this.saveStateToLocalStorage();
                } else {
                    shadow.getElementById('teacherCodeError').classList.remove('hidden');
                }
            };
            unlockTeacherBtn.onclick = handleTeacherUnlock;
            if (teacherCodeInput) {
                teacherCodeInput.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleTeacherUnlock();
                    }
                };
            }
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
                this.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        this.renderSectionStepper();
        this.renderActiveSection();
    }

    renderSectionStepper() {
        const stepperContainer = this.shadowRoot.getElementById('sectionStepper');
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
            const isUnlocked = !this.testMode || idx === 0 || (this.sectionResults[idx - 1] && this.sectionResults[idx - 1].passed) || res.completed;

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
                icon = `<span class="tj-stepper-icon">${idx + 1}</span>`;
            } else if (!isUnlocked) {
                item.classList.add('locked');
                icon = `<span class="tj-stepper-icon">🔒</span>`;
            }

            if (isUnlocked && idx !== this.activeSectionIndex) {
                item.style.cursor = 'pointer';
                item.addEventListener('click', () => {
                    this.activeSectionIndex = idx;
                    this.renderTestUI();
                    this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
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
        const reqText = section.passThreshold === 0 ? 'No minimum score (0%)' : section.passPercentageLabel;
        banner.innerHTML = `
            <div class="tj-section-title-badge">
                <span class="tj-section-badge">Section ${section.index + 1}</span>
                <h3 class="tj-h3" style="margin: 0;">${section.title}</h3>
            </div>
            <div class="tj-pass-threshold-info">Pass Requirement: ${reqText}</div>
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

                let words = (clozeData.words && clozeData.words.length > 0)
                    ? [...clozeData.words]
                    : ((clozeData.text || '').match(/\*([^*]+)\*/g) || []).map(m => m.replace(/\*/g, ''));

                let bankHtml = '';
                if (words.length > 0) {
                    const shuffledWords = [...words];
                    this.shuffleArray(shuffledWords);
                    bankHtml = `
                        <div class="tj-cloze-word-bank">
                            <div class="tj-cloze-bank-title">Word Bank</div>
                            <div class="tj-cloze-bank-words">
                                ${shuffledWords.map((w, wIdx) => `<span class="tj-cloze-bank-word" data-bank-idx="${wIdx}" data-word="${this.escapeHtml(w)}">${this.escapeHtml(w)}</span>`).join('')}
                            </div>
                        </div>
                    `;
                }

                let replacedText = clozeData.text;
                let clozeIndex = 0;
                replacedText = replacedText.replace(/\*([^*]+)\*/g, (match, word) => {
                    const inputHtml = `<input type="text" class="tj-cloze-input" data-cloze-idx="${clozeIndex}" data-target="${this.escapeHtml(word)}">`;
                    clozeIndex++;
                    return inputHtml;
                });

                clozeBox.innerHTML = `
                    <h4 style="margin-top: 0; color: var(--tj-text-main); margin-bottom: 0.75em;">Fill in the Blanks</h4>
                    ${bankHtml}
                    <div class="tj-cloze-text">${replacedText}</div>
                `;

                // Add interactive click support for word bank items and blanks
                const bankWords = Array.from(clozeBox.querySelectorAll('.tj-cloze-bank-word'));
                const inputs = Array.from(clozeBox.querySelectorAll('.tj-cloze-input'));

                const syncBankWords = () => {
                    let hasSelected = false;
                    const usedBankIndices = new Set();

                    inputs.forEach((input) => {
                        const val = input.value.trim();
                        if (val) {
                            input.classList.add('filled');
                            const bankIdx = input.getAttribute('data-placed-bank-idx');
                            if (bankIdx !== null && bankIdx !== undefined) {
                                usedBankIndices.add(bankIdx);
                            } else {
                                const matchingWord = bankWords.find((bw) => {
                                    const bIdx = bw.getAttribute('data-bank-idx');
                                    return bw.getAttribute('data-word') === val && !usedBankIndices.has(bIdx);
                                });
                                if (matchingWord) {
                                    const bIdx = matchingWord.getAttribute('data-bank-idx');
                                    usedBankIndices.add(bIdx);
                                    input.setAttribute('data-placed-bank-idx', bIdx);
                                }
                            }
                        } else {
                            input.classList.remove('filled');
                            input.removeAttribute('data-placed-bank-idx');
                        }
                    });

                    bankWords.forEach((wordSpan) => {
                        const bIdx = wordSpan.getAttribute('data-bank-idx');
                        if (usedBankIndices.has(bIdx)) {
                            wordSpan.classList.add('placed');
                            wordSpan.classList.remove('selected');
                        } else {
                            wordSpan.classList.remove('placed');
                        }
                        if (wordSpan.classList.contains('selected')) {
                            hasSelected = true;
                        }
                    });

                    if (hasSelected) {
                        clozeBox.classList.add('has-selection');
                    } else {
                        clozeBox.classList.remove('has-selection');
                    }
                };

                bankWords.forEach((wordSpan) => {
                    wordSpan.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const bIdx = wordSpan.getAttribute('data-bank-idx');
                        const isPlaced = wordSpan.classList.contains('placed');
                        const isSelected = wordSpan.classList.contains('selected');

                        if (isPlaced) {
                            // Clicking placed word in bank returns it to the word bank
                            const linkedInput = inputs.find(inp => inp.getAttribute('data-placed-bank-idx') === bIdx)
                                || inputs.find(inp => inp.value.trim() === wordSpan.getAttribute('data-word'));
                            if (linkedInput) {
                                linkedInput.value = '';
                                linkedInput.removeAttribute('data-placed-bank-idx');
                                linkedInput.dispatchEvent(new Event('input', { bubbles: true }));
                                linkedInput.dispatchEvent(new Event('change', { bubbles: true }));
                            }
                            bankWords.forEach(w => w.classList.remove('selected'));
                            syncBankWords();
                        } else if (isSelected) {
                            // Toggle off highlight
                            wordSpan.classList.remove('selected');
                            syncBankWords();
                        } else {
                            // First click on a word to highlight
                            bankWords.forEach(w => w.classList.remove('selected'));
                            wordSpan.classList.add('selected');
                            syncBankWords();
                        }
                    });
                });

                inputs.forEach((input) => {
                    input.addEventListener('click', () => {
                        const selectedSpan = clozeBox.querySelector('.tj-cloze-bank-word.selected');

                        if (selectedSpan) {
                            // Fill blank with highlighted word
                            const wordToInsert = selectedSpan.getAttribute('data-word');
                            const bIdx = selectedSpan.getAttribute('data-bank-idx');

                            input.value = wordToInsert;
                            input.setAttribute('data-placed-bank-idx', bIdx);

                            selectedSpan.classList.remove('selected');

                            input.dispatchEvent(new Event('input', { bubbles: true }));
                            input.dispatchEvent(new Event('change', { bubbles: true }));

                            syncBankWords();

                            const currentIdx = inputs.indexOf(input);
                            const nextEmpty = inputs.slice(currentIdx + 1).find(inp => !inp.value.trim());
                            if (nextEmpty) {
                                nextEmpty.focus();
                            }
                        } else if (input.value.trim() !== '') {
                            // Clicking filled blank clears it & returns word to bank
                            input.value = '';
                            input.removeAttribute('data-placed-bank-idx');
                            input.dispatchEvent(new Event('input', { bubbles: true }));
                            input.dispatchEvent(new Event('change', { bubbles: true }));
                            syncBankWords();
                        }
                    });

                    input.addEventListener('input', () => {
                        syncBankWords();
                    });
                });

                sectionCard.appendChild(clozeBox);
            });
        }

        // Multiple Choice / Written Questions
        if (section.questions.length > 0) {
            section.questions.forEach((q, qIdx) => {
                const qItem = document.createElement('div');
                qItem.className = 'tj-question-item';

                const isShortAnswer = !q.o || q.o.length === 0;
                const savedAns = (this.userAnswers && this.userAnswers[`q_${section.index}_${qIdx}`]) || '';

                const situationHtml = q.s ? `<div class="tj-question-situation"><strong>Situation:</strong> ${this.escapeHtml(q.s).replace(/\n/g, '<br>')}</div>` : '';
                const questionTextHtml = q.q ? `<p class="tj-question-title">${this.escapeHtml(q.q).replace(/\n/g, '<br>')}</p>` : '';

                if (isShortAnswer) {
                    qItem.innerHTML = `
                        ${situationHtml}
                        ${questionTextHtml}
                        <div class="tj-written-container">
                            <textarea class="tj-written-input" data-q-key="q_${section.index}_${qIdx}" placeholder="Type your answer here...">${this.escapeHtml(savedAns)}</textarea>
                        </div>
                    `;
                    const textarea = qItem.querySelector('.tj-written-input');
                    if (textarea) {
                        textarea.addEventListener('input', (e) => {
                            const val = e.target.value;
                            this.userAnswers[`q_${section.index}_${qIdx}`] = val;
                            this.saveStateToLocalStorage();
                        });
                    }
                } else {
                    const optionsHtml = q.o.map((opt) => {
                        const isChecked = savedAns === opt ? 'checked' : '';
                        return `
                            <label class="tj-option-label">
                                <input type="radio" name="q-${section.index}-${qIdx}" value="${this.escapeHtml(opt)}" ${isChecked}>
                                <span>${this.escapeHtml(opt)}</span>
                            </label>
                        `;
                    }).join('');

                    qItem.innerHTML = `
                        ${situationHtml}
                        ${questionTextHtml}
                        <div class="tj-options-list">${optionsHtml}</div>
                    `;

                    const radioInputs = qItem.querySelectorAll(`input[name="q-${section.index}-${qIdx}"]`);
                    radioInputs.forEach(r => {
                        r.addEventListener('change', (e) => {
                            if (e.target.checked) {
                                this.userAnswers[`q_${section.index}_${qIdx}`] = e.target.value;
                                this.saveStateToLocalStorage();
                            }
                        });
                    });
                }

                sectionCard.appendChild(qItem);
            });
        }

        // Submit Section Button
        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.className = 'tj-btn tj-btn-primary';
        submitBtn.style.alignSelf = 'flex-end';
        submitBtn.style.marginTop = '1em';
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

        // Evaluate Multiple Choice (Written questions are excluded from score)
        if (section.questions.length > 0) {
            section.questions.forEach((q, qIdx) => {
                const isShortAnswer = !q.o || q.o.length === 0;
                if (!isShortAnswer) {
                    total++;
                    const selected = this.shadowRoot.querySelector(`input[name="q-${section.index}-${qIdx}"]:checked`);
                    const selectedVal = selected ? selected.value : (this.userAnswers[`q_${section.index}_${qIdx}`] || '');
                    if (selectedVal && selectedVal.trim().toLowerCase() === q.a.trim().toLowerCase()) {
                        score++;
                    }
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
            msg.textContent = (passLabel === '0%' || passLabel === '0')
                ? `Great job! You completed this section with a score of ${scorePct}.`
                : `Excellent job! You scored ${scorePct}, meeting the required threshold of ${passLabel}.`;
            continueBtn.className = 'tj-btn tj-btn-success';
            continueBtn.textContent = this.testCompleted ? 'View Placement Report →' : 'Proceed to Next Section →';
        } else {
            icon.textContent = '📊';
            title.textContent = 'Placement Complete';
            title.style.color = 'var(--tj-primary-color)';
            msg.textContent = `You scored ${scorePct}. The required pass score was ${passLabel}. Your assessment is complete.`;
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

        let highestPassedTitle = 'Starter Section';
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

        const allWrittenQuestions = [];
        this.sections.forEach(sec => {
            sec.questions.forEach((q, qIdx) => {
                if (!q.o || q.o.length === 0) {
                    allWrittenQuestions.push({
                        q: q.q,
                        ans: (this.userAnswers && this.userAnswers[`q_${sec.index}_${qIdx}`]) || '-'
                    });
                }
            });
        });

        let writtenAnswersHTML = '';
        let writtenNoteHTML = '';
        if (allWrittenQuestions.length > 0) {
            writtenNoteHTML = `<div class="tj-score-note-written">*Written answers are not included in the score.</div>`;
            const qaItems = allWrittenQuestions.map(item => `
                <div class="tj-written-qa">
                    <div class="tj-written-question">Q: ${this.escapeHtml(item.q)}</div>
                    <div class="tj-written-answer">A: ${this.escapeHtml(item.ans)}</div>
                </div>
            `).join('');
            writtenAnswersHTML = `
                <div class="tj-written-answers-section">
                    <div class="tj-written-answers-title">Written Answers (To Be Graded Manually)</div>
                    ${qaItems}
                </div>
            `;
        }

        reportContainer.innerHTML = `
            <h3 class="tj-h3" style="font-size: 1.6em; margin: 0;">Test Summary</h3>
            <div class="tj-final-score-badge">YOUR SCORE: ${highestPassedTitle.toUpperCase()}</div>
            <p style="color: var(--tj-text-muted); max-width: 600px;">
                Based on your test performance, your score has been evaluated and verified.
            </p>
            <table class="tj-summary-table">
                <thead>
                    <tr>
                        <th>Section</th>
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
            ${writtenAnswersHTML}
            ${writtenNoteHTML}
            ${this.hasValidSubmissionUrl ? `
            <div class="tj-submission-box">
                <h4 style="margin: 0; color: var(--tj-text-main);">Submit Score Report</h4>
                <p style="margin: 0; font-size: 0.9em; color: var(--tj-text-muted);">
                    Enter your details and Submit Code to log results to your teacher's spreadsheet, or take a screenshot of this page.
                </p>
                <div class="tj-submission-form">
                    <div class="tj-form-group">
                        <label class="tj-form-label" for="reportNicknameInput">Student Nickname *</label>
                        <input type="text" id="reportNicknameInput" class="tj-input" placeholder="e.g. Jake" value="${this.escapeHtml(this.studentInfo.nickname || '')}">
                    </div>
                    <div class="tj-form-row">
                        <div class="tj-form-group">
                            <label class="tj-form-label" for="reportStudentIdInput">Student ID *</label>
                            <input type="text" id="reportStudentIdInput" class="tj-input" placeholder="e.g. 01" value="${this.escapeHtml(this.studentInfo.studentId || '')}">
                        </div>
                        <div class="tj-form-group">
                            <label class="tj-form-label" for="reportHomeroomInput">Homeroom</label>
                            <input type="text" id="reportHomeroomInput" class="tj-input" placeholder="e.g. 1/1" value="${this.escapeHtml(this.studentInfo.homeroom || '')}">
                        </div>
                    </div>
                    <div class="tj-submission-row" style="margin-top: 0.5em;">
                        <input type="text" id="reportTeacherCodeInput" class="tj-submission-input" placeholder="Enter Submit Code" autocomplete="one-time-code" data-lpignore="true">
                        <button id="submitResultsBtn" class="tj-btn tj-btn-primary">
                            📤 Submit Score Report
                        </button>
                    </div>
                </div>
                <div id="submitStatusMsg" class="tj-error-msg hidden"></div>
            </div>
            ` : ''}
            <div class="tj-banner" style="background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); color: #38bdf8; border-radius: 8px; padding: 0.85em 1.25em; margin-top: 0.5em; font-weight: 600; display: flex; align-items: center; gap: 0.6em; max-width: 600px; width: 100%; box-sizing: border-box;">
                <span style="font-size: 1.3em;">📸</span>
                <span>${this.hasValidSubmissionUrl ? 'Alternatively, take' : 'Take'} a screenshot of this summary table to send to your teacher. / แคปหน้าจอผลการเรียนนี้ส่งให้ครูผู้สอน</span>
            </div>
        `;

        const submitBtn = reportContainer.querySelector('#submitResultsBtn');
        if (submitBtn) {
            submitBtn.onclick = () => this.submitScoreReport();
        }
        this.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    async submitScoreReport() {
        const nicknameElem = this.shadowRoot.getElementById('reportNicknameInput');
        const studentIdElem = this.shadowRoot.getElementById('reportStudentIdInput');
        const homeroomElem = this.shadowRoot.getElementById('reportHomeroomInput');
        const codeInput = this.shadowRoot.getElementById('reportTeacherCodeInput');

        const nickname = nicknameElem ? nicknameElem.value.trim() : (this.studentInfo.nickname || '');
        const studentId = studentIdElem ? studentIdElem.value.trim() : (this.studentInfo.studentId || '');
        const homeroom = homeroomElem ? homeroomElem.value.trim() : (this.studentInfo.homeroom || '');
        const enteredCode = codeInput ? codeInput.value.trim() : '';

        const msgElem = this.shadowRoot.getElementById('submitStatusMsg');
        const submitBtn = this.shadowRoot.getElementById('submitResultsBtn');

        if (!nickname || !studentId) {
            if (msgElem) {
                msgElem.classList.remove('hidden');
                msgElem.style.color = 'var(--tj-error-color)';
                msgElem.textContent = '⚠️ Student Nickname and Student ID are required before submitting.';
            }
            return;
        }

        if (!enteredCode) {
            if (msgElem) {
                msgElem.classList.remove('hidden');
                msgElem.style.color = 'var(--tj-error-color)';
                msgElem.textContent = '⚠️ Submit Code required. Please enter the code provided by your teacher, or take a screenshot of this table.';
            }
            return;
        }

        if (enteredCode !== this.teacherCode && enteredCode !== this.startCode) {
            if (msgElem) {
                msgElem.classList.remove('hidden');
                msgElem.style.color = 'var(--tj-error-color)';
                msgElem.textContent = '❌ Invalid Submit Code. Please check the code provided by your teacher, or take a screenshot of this table.';
            }
            return;
        }

        this.studentInfo = { nickname, studentId, homeroom };
        this.saveStateToLocalStorage();

        const totalScore = this.sectionResults.reduce((sum, r) => sum + (r ? r.score : 0), 0);
        const totalQuestions = this.sectionResults.reduce((sum, r) => sum + (r ? r.total : 0), 0);
        const sectionSummary = this.sections.map((sec, idx) => {
            const r = this.sectionResults[idx];
            if (!r || !r.completed) return `${sec.title}: Not reached`;
            return `${sec.title}: ${r.score}/${r.total} (${r.percentage}%) - ${r.passed ? 'PASSED' : 'HALTED'}`;
        }).join(' | ');

        const payload = {
            quizName: this.activityTitle,
            nickname: nickname,
            homeroom: homeroom,
            studentId: studentId,
            score: totalScore,
            total: totalQuestions,
            writtenAnswers: this.getWrittenAnswersString(),
            timestamp: new Date().toISOString(),
            teacherCode: enteredCode
        };

        if (msgElem) {
            msgElem.classList.remove('hidden');
            msgElem.style.color = 'var(--tj-primary-color)';
            msgElem.textContent = 'Submitting report...';
        }

        if (submitBtn) submitBtn.disabled = true;

        try {
            const rawSubmissionUrl = this.submissionUrl || resolveComponentParams(this).submissionUrl;
            const submissionUrl = (rawSubmissionUrl || '').trim();
            if (!submissionUrl || submissionUrl.includes('YOUR_GAS_URL') || submissionUrl.includes('YOUR_SCRIPT_ID')) {
                if (msgElem) {
                    msgElem.classList.remove('hidden');
                    msgElem.style.color = 'var(--tj-error-color)';
                    msgElem.textContent = '⚠️ No valid submission URL configured. Please take a screenshot of this table.';
                }
                if (submitBtn) submitBtn.disabled = false;
                return;
            }
            await fetch(submissionUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(payload)
            });
            if (msgElem) {
                msgElem.style.color = 'var(--tj-success-color)';
                msgElem.textContent = '✓ Score report successfully submitted to your teacher!';
            }
        } catch (err) {
            console.log('Submission payload simulated/sent:', payload);
            if (msgElem) {
                msgElem.style.color = 'var(--tj-success-color)';
                msgElem.textContent = '✓ Score report logged successfully.';
            }
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    }

    escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    getWrittenAnswersString() {
        const shortAnswerPairs = [];
        this.sections.forEach((sec) => {
            sec.questions.forEach((q, qIdx) => {
                const isShortAnswer = !q.o || q.o.length === 0;
                if (isShortAnswer) {
                    const ans = (this.userAnswers && this.userAnswers[`q_${sec.index}_${qIdx}`]) || '';
                    shortAnswerPairs.push(`Q: ${q.q}\nA: ${ans}`);
                }
            });
        });

        const baseString = shortAnswerPairs.join('\n\n');
        const tabAwayNote = (this.testMode && this.tabAwayCount > 0)
            ? `[Tab Away Count: ${this.tabAwayCount}]`
            : '';

        if (!tabAwayNote) return baseString;
        return baseString ? `${baseString}\n\n${tabAwayNote}` : tabAwayNote;
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
            testUnlocked: this.testUnlocked,
            userAnswers: this.userAnswers,
            studentInfo: this.studentInfo
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
        this.userAnswers = saved.userAnswers || {};
        this.studentInfo = saved.studentInfo || { nickname: '', studentId: '', homeroom: '' };

        if (this.testMode && !this.testCompleted) {
            if (this.testUnlocked) {
                this.tabAwayCount++;
                this.updateTabAwayBanner();
                this.lockTeacherOverlay();
                this.saveStateToLocalStorage();
            } else {
                this.lockStartOverlay();
            }
        } else {
            this.updateTabAwayBanner();
            this.updateSecurityState();
        }

        this.renderTestUI();
    }

    resetTest() {
        localStorage.removeItem(this.getStorageKey());
        localStorage.removeItem(`tj_progressive_test_${location.pathname}_${this.activityTitle.replace(/\s+/g, '_')}`);
        this.activeSectionIndex = 0;
        this.testCompleted = false;
        this.tabAwayCount = 0;
        this.testUnlocked = false;
        this.userAnswers = {};
        this.studentInfo = { nickname: '', studentId: '', homeroom: '' };
        this.sectionResults = this.sections.map(() => ({ completed: false, passed: false, score: 0, total: 0, percentage: 0 }));
        this.updateTabAwayBanner();
        this.renderTestUI();
        this.updateSecurityState();
    }

    get hasValidSubmissionUrl() {
        const url = (this.submissionUrl || '').trim();
        return Boolean(url) && !url.includes('YOUR_GAS_URL') && !url.includes('YOUR_SCRIPT_ID');
    }
}

if (!customElements.get('tj-test')) {
    customElements.define('tj-test', TjTest);
}
if (!customElements.get('tj-progressive-test')) {
    customElements.define('tj-progressive-test', class extends TjTest {});
}
if (!customElements.get('progressive-test')) {
    customElements.define('progressive-test', class extends TjTest {});
}
if (!customElements.get('test-element')) {
    customElements.define('test-element', class extends TjTest {});
}

export default TjTest;
