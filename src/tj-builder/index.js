import stylesText from "./styles.css?inline";
import templateHtml from "./template.html?raw";

const STORAGE_KEY = 'tj_builder_settings';
const DEFAULT_SUBMISSION_URL = 'https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec';

const SAMPLE_QUIZ_MD = `---
text
title = The Magic of Photosynthesis
audio-src = https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Plants generally involve the green pigment chlorophyll and generate oxygen as a byproduct.

---
questions-1
1. What do green plants use to synthesize food during photosynthesis?
* A. Sunlight, carbon dioxide, and water
B. Oxygen and nitrogen
C. Soil and fertilizer only
D. Darkness and rain

2. What green pigment is involved in photosynthesis?
A. Hemoglobin
* B. Chlorophyll
C. Carotene
D. Melanin

---
vocab-1
chlorophyll = Green pigment found in plants
photosynthesis = Process of converting light energy into chemical energy
byproduct = An incidental or secondary product made in a manufacture or synthesis
`;

const SAMPLE_INFOGAP_JSON = JSON.stringify({
    title: "Weekend Plans Information Gap",
    image: "https://placehold.co/400x200?text=Weekend+Plans",
    gaps: [
        { text: "Where are you going this Saturday?", answer: "to the park", type: "text" },
        { text: "Who will you go with?", answer: "my brother", type: "text" },
        { text: "What time will you leave?", answer: "at 10 am", type: "text" }
    ]
}, null, 2);

const SAMPLE_SPEED_JSON = JSON.stringify({
    title: "Essential Vocabulary Speed Match",
    deck: [
        { term: "Enthusiastic", definition: "Having or showing intense and eager enjoyment" },
        { term: "Resilient", definition: "Able to withstand or recover quickly from difficult conditions" },
        { term: "Meticulous", definition: "Showing great attention to detail; very careful and precise" },
        { term: "Pragmatic", definition: "Dealing with things sensibly and realistically" }
    ]
}, null, 2);

class TjBuilder extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.currentSettings = {
            startCode: '1234',
            teacherCode: '7676',
            submissionUrl: DEFAULT_SUBMISSION_URL,
            cdnBaseUrl: 'https://scripts.teacherjake.com/',
            isTestMode: false
        };

        this.parsedState = {
            componentType: 'tj-quiz-element',
            rawContent: '',
            isJson: false,
            jsonObject: null,
            markdownAst: null
        };
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>${stylesText}</style>
            ${templateHtml}
        `;

        this._loadSettings();
        this._initElements();
        this._bindEvents();
        
        // Auto-load sample quiz on start for instant zero-setup preview!
        this._loadSample(SAMPLE_QUIZ_MD, 'tj-quiz-element');
    }

    _getCleanTagName(typeStr) {
        if (!typeStr) return 'tj-quiz-element';
        const match = String(typeStr).match(/(tj-[a-z0-9-]+)/i);
        if (match) {
            return match[1].toLowerCase();
        }
        return 'tj-quiz-element';
    }

    _loadSettings() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                this.currentSettings = { ...this.currentSettings, ...parsed };
            }
        } catch (e) {
            console.warn('TJ Builder: Could not load settings from LocalStorage', e);
        }
    }

    _saveSettings() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentSettings));
            const statusBadge = this.shadowRoot.getElementById('storage-status');
            if (statusBadge) {
                statusBadge.style.opacity = '1';
                setTimeout(() => { statusBadge.style.opacity = '0.8'; }, 1000);
            }
        } catch (e) {
            console.warn('TJ Builder: Could not save settings to LocalStorage', e);
        }
    }

    _initElements() {
        this.inputStartCode = this.shadowRoot.getElementById('setting-start-code');
        this.inputTeacherCode = this.shadowRoot.getElementById('setting-teacher-code');
        this.inputSubmissionUrl = this.shadowRoot.getElementById('setting-submission-url');
        
        this.inputGemini = this.shadowRoot.getElementById('gemini-input');
        this.selectComponentType = this.shadowRoot.getElementById('component-type-select');
        this.btnParse = this.shadowRoot.getElementById('btn-parse');
        
        this.badgeDetected = this.shadowRoot.getElementById('detected-type-badge');
        this.rawCodeEditor = this.shadowRoot.getElementById('raw-code-editor');
        this.visualFormContainer = this.shadowRoot.getElementById('visual-form-container');
        
        this.embedCodeDisplay = this.shadowRoot.getElementById('embed-code-display');
        this.chkIncludeScript = this.shadowRoot.getElementById('chk-include-script');
        this.chkTestMode = this.shadowRoot.getElementById('chk-test-mode');
        this.modeToggleContainer = this.shadowRoot.getElementById('mode-toggle-container');
        this.btnCopyCode = this.shadowRoot.getElementById('btn-copy-code');
        this.btnCopyModal = this.shadowRoot.getElementById('btn-copy-modal');
        
        this.btnOpenPreview = this.shadowRoot.getElementById('btn-open-preview');
        this.previewModal = this.shadowRoot.getElementById('preview-modal');
        this.btnCloseModal = this.shadowRoot.getElementById('btn-close-modal');
        this.btnCloseModalFooter = this.shadowRoot.getElementById('btn-close-modal-footer');
        this.modalComponentName = this.shadowRoot.getElementById('modal-component-name');
        this.livePreviewContainer = this.shadowRoot.getElementById('live-preview-container');

        // Populate setting input values
        this.inputStartCode.value = this.currentSettings.startCode;
        this.inputTeacherCode.value = this.currentSettings.teacherCode;
        this.inputSubmissionUrl.value = this.currentSettings.submissionUrl;
        if (this.chkTestMode) {
            this.chkTestMode.checked = !!this.currentSettings.isTestMode;
        }
    }

    _bindEvents() {
        // Setting inputs change
        const handleSettingChange = () => {
            this.currentSettings = {
                ...this.currentSettings,
                startCode: this.inputStartCode.value.trim() || '1234',
                teacherCode: this.inputTeacherCode.value.trim() || '7676',
                submissionUrl: this.inputSubmissionUrl.value.trim(),
                cdnBaseUrl: 'https://scripts.teacherjake.com/'
            };
            this._saveSettings();
            this._updateOutputs();
        };

        [this.inputStartCode, this.inputTeacherCode, this.inputSubmissionUrl].forEach(input => {
            input.addEventListener('input', handleSettingChange);
        });

        // Sample buttons
        this.shadowRoot.getElementById('btn-sample-quiz')?.addEventListener('click', () => {
            this._loadSample(SAMPLE_QUIZ_MD, 'tj-quiz-element');
        });
        this.shadowRoot.getElementById('btn-sample-infogap')?.addEventListener('click', () => {
            this._loadSample(SAMPLE_INFOGAP_JSON, 'tj-info-gap');
        });
        this.shadowRoot.getElementById('btn-sample-speed')?.addEventListener('click', () => {
            this._loadSample(SAMPLE_SPEED_JSON, 'tj-speed-review');
        });

        // Parse button & component selector
        this.btnParse.addEventListener('click', () => this._handleParseInput());
        this.selectComponentType.addEventListener('change', () => {
            this.parsedState.componentType = this._getCleanTagName(this.selectComponentType.value);
            this.badgeDetected.textContent = this.parsedState.componentType;
            this._updateOutputs();
        });

        // Tab buttons
        const tabBtns = this.shadowRoot.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const targetTab = btn.dataset.tab;
                this.shadowRoot.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
                this.shadowRoot.getElementById(`tab-${targetTab}-content`)?.classList.add('active');
            });
        });

        // Raw code editor input
        this.rawCodeEditor.addEventListener('input', () => {
            this.parsedState.rawContent = this.rawCodeEditor.value;
            this._updateOutputs({ skipRawEditorUpdate: true });
        });

        // Copy button & include script / test mode toggles
        this.chkIncludeScript.addEventListener('change', () => this._updateOutputs());
        this.chkTestMode?.addEventListener('change', () => {
            this.currentSettings.isTestMode = this.chkTestMode.checked;
            this._saveSettings();
            this._updateOutputs();
        });
        this.btnCopyCode.addEventListener('click', () => this._copyEmbedCode(this.btnCopyCode));
        this.btnCopyModal.addEventListener('click', () => this._copyEmbedCode(this.btnCopyModal));

        // Modal Preview Controls
        this.btnOpenPreview.addEventListener('click', () => this._openModalPreview());
        this.btnCloseModal.addEventListener('click', () => this._closeModalPreview());
        this.btnCloseModalFooter.addEventListener('click', () => this._closeModalPreview());
        this.previewModal.addEventListener('click', (e) => {
            if (e.target === this.previewModal) {
                this._closeModalPreview();
            }
        });
    }

    _loadSample(sampleContent, componentType) {
        this.inputGemini.value = sampleContent;
        this.selectComponentType.value = this._getCleanTagName(componentType);
        this._handleParseInput();
    }

    _handleParseInput() {
        let raw = this.inputGemini.value.trim();
        if (!raw) return;

        // 1. Strip markdown code fences (```html ... ```, ```json ... ```, ```markdown ... ```)
        raw = raw.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/i, '').trim();

        let detectedType = this._getCleanTagName(this.selectComponentType.value);
        let content = raw;
        let isJson = false;
        let jsonObject = null;

        // 2. Check if raw contains custom element tag
        const tagMatch = raw.match(/<(?:\s*)(tj-[a-z0-9-]+)[\s>]/i);
        if (tagMatch) {
            detectedType = tagMatch[1].toLowerCase();
            if (raw.toLowerCase().includes('test-mode')) {
                if (this.chkTestMode) this.chkTestMode.checked = true;
                this.currentSettings.isTestMode = true;
            }
            const closingTagRegex = new RegExp(`<${detectedType}\\b[^>]*>([\\s\\S]*?)(?:<\\/${detectedType}>|$)`, 'i');
            const innerMatch = raw.match(closingTagRegex);
            if (innerMatch && innerMatch[1].trim()) {
                const innerHtml = innerMatch[1].trim();
                const scriptMatch = innerHtml.match(/<script\b[^>]*>([\s\S]*?)<\/script>/i);
                if (scriptMatch) {
                    content = scriptMatch[1].trim();
                } else {
                    content = innerHtml;
                }
            }
        }

        // 3. Check if content is valid JSON
        try {
            jsonObject = JSON.parse(content);
            isJson = true;

            // Auto-detect JSON component type if tag wasn't explicitly present
            if (!tagMatch) {
                if (jsonObject.gaps) detectedType = 'tj-info-gap';
                else if (jsonObject.chapters) detectedType = 'tj-chapter-book';
                else if (jsonObject.deck || jsonObject.cards) detectedType = 'tj-speed-review';
                else if (jsonObject.targetWords || jsonObject.words) detectedType = 'tj-pronunciation';
                else if (jsonObject.heart || jsonObject.grammar) detectedType = 'tj-grammar-hearts';
                else if (jsonObject.audio || jsonObject.lessons) detectedType = 'tj-listening';
                else if (jsonObject.passages || jsonObject.pages) detectedType = 'tj-reader';
            }
        } catch (e) {
            isJson = false;
            // If raw contains section headers like --- text or --- questions, target is tj-quiz-element
            if (!tagMatch && content.includes('---')) {
                detectedType = 'tj-quiz-element';
            }
        }

        detectedType = this._getCleanTagName(detectedType);

        this.parsedState = {
            componentType: detectedType,
            rawContent: content,
            isJson,
            jsonObject,
            markdownAst: (!isJson && detectedType === 'tj-quiz-element') ? this._parseMarkdownAst(content) : null
        };

        this.selectComponentType.value = detectedType;
        this.badgeDetected.textContent = detectedType;

        this._renderVisualForm();
        this._updateOutputs();
    }

    // Markdown AST parser for tj-quiz-element
    _parseMarkdownAst(mdText) {
        const ast = {
            passageTitle: '',
            audioSrc: '',
            passageBody: '',
            questions: [],
            vocab: [],
            cloze: ''
        };

        const sections = mdText.split(/^---$/m).map(s => s.trim()).filter(Boolean);
        
        sections.forEach(sec => {
            const lines = sec.split('\n').map(l => l.trim()).filter(Boolean);
            if (!lines.length) return;

            const header = lines[0].toLowerCase();
            
            if (header === 'text' || header.startsWith('text-')) {
                let bodyLines = [];
                for (let i = 1; i < lines.length; i++) {
                    if (lines[i].startsWith('title =')) {
                        ast.passageTitle = lines[i].replace('title =', '').trim();
                    } else if (lines[i].startsWith('audio-src =')) {
                        ast.audioSrc = lines[i].replace('audio-src =', '').trim();
                    } else {
                        bodyLines.push(lines[i]);
                    }
                }
                ast.passageBody = bodyLines.join('\n');
            } else if (header.startsWith('questions')) {
                let currentQ = null;
                for (let i = 1; i < lines.length; i++) {
                    const line = lines[i];
                    if (/^\d+\./.test(line)) {
                        if (currentQ) ast.questions.push(currentQ);
                        currentQ = {
                            question: line.replace(/^\d+\.\s*/, ''),
                            options: [],
                            correctIndex: 0
                        };
                    } else if (currentQ && /^(\*?\s*[A-D]\.)/.test(line)) {
                        const isCorrect = line.startsWith('*');
                        const optText = line.replace(/^\*?\s*[A-D]\.\s*/, '');
                        if (isCorrect) currentQ.correctIndex = currentQ.options.length;
                        currentQ.options.push(optText);
                    }
                }
                if (currentQ) ast.questions.push(currentQ);
            } else if (header.startsWith('vocab')) {
                for (let i = 1; i < lines.length; i++) {
                    if (lines[i].includes('=')) {
                        const parts = lines[i].split('=');
                        ast.vocab.push({
                            term: parts[0].trim(),
                            definition: parts.slice(1).join('=').trim()
                        });
                    }
                }
            } else if (header.startsWith('cloze')) {
                ast.cloze = lines.slice(1).join('\n');
            }
        });

        return ast;
    }

    _generateMarkdownFromAst(ast) {
        const parts = [];

        if (ast.passageBody || ast.passageTitle) {
            let pSec = '---\ntext';
            if (ast.passageTitle) pSec += `\ntitle = ${ast.passageTitle}`;
            if (ast.audioSrc) pSec += `\naudio-src = ${ast.audioSrc}`;
            if (ast.passageBody) pSec += `\n${ast.passageBody}`;
            parts.push(pSec);
        }

        if (ast.questions && ast.questions.length > 0) {
            let qSec = '---\nquestions-1';
            ast.questions.forEach((q, idx) => {
                qSec += `\n${idx + 1}. ${q.question}`;
                q.options.forEach((opt, optIdx) => {
                    const letter = String.fromCharCode(65 + optIdx);
                    const prefix = (optIdx === q.correctIndex) ? '* ' : '';
                    qSec += `\n${prefix}${letter}. ${opt}`;
                });
            });
            parts.push(qSec);
        }

        if (ast.vocab && ast.vocab.length > 0) {
            let vSec = '---\nvocab-1';
            ast.vocab.forEach(v => {
                vSec += `\n${v.term} = ${v.definition}`;
            });
            parts.push(vSec);
        }

        if (ast.cloze) {
            parts.push(`---\ncloze-1\n${ast.cloze}`);
        }

        return parts.join('\n\n');
    }

    _renderVisualForm() {
        this.visualFormContainer.innerHTML = '';

        if (this.parsedState.componentType === 'tj-quiz-element' && this.parsedState.markdownAst) {
            this._renderQuizVisualForm(this.parsedState.markdownAst);
        } else if (this.parsedState.isJson && this.parsedState.jsonObject) {
            this._renderJsonVisualForm(this.parsedState.jsonObject);
        } else {
            this.visualFormContainer.innerHTML = `
                <p style="color: #94a3b8; font-size: 0.9rem;">
                    Visual Form editor is available for structured Markdown quizzes and JSON components. Switch to the <strong>Raw Code Editor</strong> tab to edit freeform content directly.
                </p>
            `;
        }
    }

    _renderQuizVisualForm(ast) {
        const container = document.createElement('div');
        
        // Passage / Text Section
        const passageSec = document.createElement('div');
        passageSec.className = 'vf-section';
        passageSec.innerHTML = `
            <div class="vf-section-title">📖 Passage / Reading Text</div>
            <div class="field-group" style="margin-bottom: 0.6rem;">
                <label>Title</label>
                <input type="text" id="vf-passage-title" value="${this._escapeHtml(ast.passageTitle)}" placeholder="Passage Title..." />
            </div>
            <div class="field-group" style="margin-bottom: 0.6rem;">
                <label>Audio URL (Optional)</label>
                <input type="url" id="vf-passage-audio" value="${this._escapeHtml(ast.audioSrc)}" placeholder="https://..." />
            </div>
            <div class="field-group">
                <label>Passage Text</label>
                <textarea id="vf-passage-body" rows="4" placeholder="Enter passage text...">${this._escapeHtml(ast.passageBody)}</textarea>
            </div>
        `;
        container.appendChild(passageSec);

        // Questions Section
        const qSec = document.createElement('div');
        qSec.className = 'vf-section';
        qSec.innerHTML = `
            <div class="vf-section-title">
                <span>❓ Multiple Choice Questions</span>
                <span style="font-size: 0.8rem; color: #94a3b8;">${ast.questions.length} questions</span>
            </div>
            <div id="vf-questions-list"></div>
            <button type="button" class="vf-add-btn" id="vf-add-q">+ Add Question</button>
        `;
        container.appendChild(qSec);

        const qList = qSec.querySelector('#vf-questions-list');
        
        const renderQuestions = () => {
            qList.innerHTML = '';
            ast.questions.forEach((q, qIdx) => {
                const qCard = document.createElement('div');
                qCard.className = 'vf-question-card';
                
                let optionsHtml = '';
                q.options.forEach((opt, optIdx) => {
                    const letter = String.fromCharCode(65 + optIdx);
                    optionsHtml += `
                        <div class="vf-option-row">
                            <input type="radio" name="q-correct-${qIdx}" class="vf-option-radio" ${optIdx === q.correctIndex ? 'checked' : ''} data-q="${qIdx}" data-opt="${optIdx}" />
                            <strong style="color: #cbd5e1; font-size: 0.85rem;">${letter}.</strong>
                            <input type="text" class="vf-option-input" value="${this._escapeHtml(opt)}" data-q="${qIdx}" data-opt="${optIdx}" placeholder="Option text..." />
                        </div>
                    `;
                });

                qCard.innerHTML = `
                    <div class="vf-question-header">
                        <span class="vf-question-num">Question ${qIdx + 1}</span>
                        <button type="button" class="vf-btn-delete" data-q="${qIdx}">Delete</button>
                    </div>
                    <div class="field-group">
                        <input type="text" class="vf-q-text" value="${this._escapeHtml(q.question)}" data-q="${qIdx}" placeholder="Enter question..." />
                    </div>
                    <div class="vf-options-grid">
                        ${optionsHtml}
                    </div>
                `;
                qList.appendChild(qCard);
            });
        };

        renderQuestions();

        // Event listeners for updating AST and updating outputs
        container.addEventListener('input', (e) => {
            const target = e.target;
            if (target.id === 'vf-passage-title') ast.passageTitle = target.value;
            else if (target.id === 'vf-passage-audio') ast.audioSrc = target.value;
            else if (target.id === 'vf-passage-body') ast.passageBody = target.value;
            else if (target.classList.contains('vf-q-text')) {
                const qIdx = parseInt(target.dataset.q, 10);
                if (ast.questions[qIdx]) ast.questions[qIdx].question = target.value;
            } else if (target.classList.contains('vf-option-input')) {
                const qIdx = parseInt(target.dataset.q, 10);
                const optIdx = parseInt(target.dataset.opt, 10);
                if (ast.questions[qIdx] && ast.questions[qIdx].options[optIdx] !== undefined) {
                    ast.questions[qIdx].options[optIdx] = target.value;
                }
            }
            
            this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
            this._updateOutputs();
        });

        container.addEventListener('change', (e) => {
            const target = e.target;
            if (target.classList.contains('vf-option-radio')) {
                const qIdx = parseInt(target.dataset.q, 10);
                const optIdx = parseInt(target.dataset.opt, 10);
                if (ast.questions[qIdx]) ast.questions[qIdx].correctIndex = optIdx;
                this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                this._updateOutputs();
            }
        });

        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('vf-btn-delete')) {
                const qIdx = parseInt(e.target.dataset.q, 10);
                ast.questions.splice(qIdx, 1);
                renderQuestions();
                this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                this._updateOutputs();
            } else if (e.target.id === 'vf-add-q') {
                ast.questions.push({
                    question: 'New Question',
                    options: ['Option A', 'Option B', 'Option C', 'Option D'],
                    correctIndex: 0
                });
                renderQuestions();
                this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                this._updateOutputs();
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-section';
        
        let fieldsHtml = `
            <div class="vf-section-title">⚙️ Activity Configuration</div>
            <div class="field-group" style="margin-bottom: 0.6rem;">
                <label>Title</label>
                <input type="text" id="vf-json-title" value="${this._escapeHtml(jsonObject.title || '')}" placeholder="Activity Title..." />
            </div>
        `;

        if (jsonObject.image !== undefined) {
            fieldsHtml += `
                <div class="field-group" style="margin-bottom: 0.6rem;">
                    <label>Image URL</label>
                    <input type="text" id="vf-json-image" value="${this._escapeHtml(jsonObject.image || '')}" placeholder="https://..." />
                </div>
            `;
        }

        container.innerHTML = fieldsHtml;

        container.addEventListener('input', (e) => {
            if (e.target.id === 'vf-json-title') jsonObject.title = e.target.value;
            if (e.target.id === 'vf-json-image') jsonObject.image = e.target.value;
            
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        });

        this.visualFormContainer.appendChild(container);
    }

    _updateOutputs(options = {}) {
        if (!options.skipRawEditorUpdate) {
            this.rawCodeEditor.value = this.parsedState.rawContent;
        }

        const componentType = this._getCleanTagName(this.parsedState.componentType);
        const supportsTestMode = (componentType === 'tj-quiz-element' || componentType === 'tj-progressive-test');

        if (this.modeToggleContainer) {
            this.modeToggleContainer.style.display = supportsTestMode ? 'flex' : 'none';
        }

        if (this.btnCopyCode) {
            const btnText = this.btnCopyCode.querySelector('.btn-text');
            if (btnText && !this.btnCopyCode.classList.contains('copied')) {
                if (supportsTestMode) {
                    const modeText = (this.chkTestMode && this.chkTestMode.checked) ? '(Test Mode)' : '(Practice Mode)';
                    btnText.textContent = `Copy Embed Code ${modeText}`;
                } else {
                    btnText.textContent = 'Copy Exact Embed Code';
                }
            }
        }

        const embedCode = this._buildExactEmbedCode();
        this.embedCodeDisplay.textContent = embedCode;

        if (this.previewModal.classList.contains('open')) {
            this._renderLivePreview();
        }
    }

    _buildExactEmbedCode() {
        const componentType = this._getCleanTagName(this.parsedState.componentType);
        const { rawContent, isJson } = this.parsedState;
        const cdnBaseUrl = this.currentSettings.cdnBaseUrl || 'https://scripts.teacherjake.com/';
        const cleanCdnBase = cdnBaseUrl.endsWith('/') ? cdnBaseUrl : `${cdnBaseUrl}/`;
        const scriptUrl = `${cleanCdnBase}${componentType}.js`;
        const includeScript = this.chkIncludeScript.checked;

        // MUST include type="module" so browsers load ES module scripts without throwing "Cannot use import statement outside a module"
        let scriptTag = includeScript ? `<script type="module" src="${scriptUrl}"></script>\n` : '';
        
        const startCode = this.currentSettings.startCode || '1234';
        const teacherCode = this.currentSettings.teacherCode || '7676';
        const submissionUrl = this.currentSettings.submissionUrl;

        const supportsTestMode = (componentType === 'tj-quiz-element' || componentType === 'tj-progressive-test');
        const isTestMode = supportsTestMode && this.chkTestMode && this.chkTestMode.checked;

        let attrs = '';
        if (isTestMode) {
            attrs += 'test-mode ';
        }
        attrs += `start-code="${startCode}" teacher-code="${teacherCode}"`;
        if (submissionUrl) {
            attrs += ` submission-url="${submissionUrl}"`;
        }

        let innerContentTag = '';
        if (componentType === 'tj-quiz-element') {
            innerContentTag = `<script type="text/markdown">\n${rawContent}\n</script>`;
        } else if (isJson || componentType.startsWith('tj-')) {
            innerContentTag = `<script type="application/json">\n${rawContent}\n</script>`;
        } else {
            innerContentTag = rawContent;
        }

        return `<!-- TJ Component Embed Code -->\n${scriptTag}<${componentType} ${attrs}>\n${innerContentTag}\n</${componentType}>`;
    }

    _openModalPreview() {
        const componentType = this._getCleanTagName(this.parsedState.componentType);
        this.modalComponentName.textContent = componentType;
        this.previewModal.classList.add('open');
        this._renderLivePreview();
    }

    _closeModalPreview() {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        this.previewModal.classList.remove('open');
        if (this.livePreviewContainer) {
            this.livePreviewContainer.innerHTML = '';
        }
    }

    async _renderLivePreview() {
        if (!this.livePreviewContainer) return;
        this.livePreviewContainer.innerHTML = '';
        
        const componentType = this._getCleanTagName(this.parsedState.componentType);
        const { rawContent, isJson, jsonObject } = this.parsedState;

        if (!componentType || !rawContent) {
            this.livePreviewContainer.innerHTML = '<p class="empty-preview-msg">Paste content or load a sample to see live interactive preview here.</p>';
            return;
        }

        try {
            // 1. Wait for custom element registration
            if (window.customElements && typeof window.customElements.whenDefined === 'function') {
                await window.customElements.whenDefined(componentType);
            }

            // 2. Create clean HTML element using tag name
            const previewEl = document.createElement(componentType);
            
            // 3. Set standard attributes
            const supportsTestMode = (componentType === 'tj-quiz-element' || componentType === 'tj-progressive-test');
            if (supportsTestMode && this.chkTestMode && this.chkTestMode.checked) {
                previewEl.setAttribute('test-mode', '');
            } else {
                previewEl.removeAttribute('test-mode');
            }
            previewEl.setAttribute('start-code', this.currentSettings.startCode || '1234');
            previewEl.setAttribute('teacher-code', this.currentSettings.teacherCode || '7676');
            if (this.currentSettings.submissionUrl) {
                previewEl.setAttribute('submission-url', this.currentSettings.submissionUrl);
            }

            // 4. Set config property AND attribute before appending to DOM
            const jsonText = isJson ? (typeof rawContent === 'string' ? rawContent : JSON.stringify(rawContent)) : rawContent;
            previewEl.setAttribute('config', jsonText);
            
            if (isJson && jsonObject) {
                previewEl.config = jsonObject;
            } else {
                previewEl.config = rawContent;
            }

            // 5. Set inner light DOM content script tag
            if (componentType === 'tj-quiz-element' || componentType === 'tj-progressive-test') {
                const scriptEl = document.createElement('script');
                scriptEl.type = isJson ? 'application/json' : 'text/markdown';
                scriptEl.textContent = rawContent;
                previewEl.appendChild(scriptEl);
            } else {
                const scriptEl = document.createElement('script');
                scriptEl.type = 'application/json';
                scriptEl.textContent = typeof rawContent === 'string' ? rawContent : JSON.stringify(rawContent);
                previewEl.appendChild(scriptEl);
            }

            // 6. Append to container (triggers connectedCallback naturally)
            this.livePreviewContainer.appendChild(previewEl);

        } catch (e) {
            console.error('TJ Builder: Error rendering live preview', e);
            this.livePreviewContainer.innerHTML = `<p style="color: #ef4444; padding: 1rem;">Error rendering preview component &lt;${componentType}&gt;: ${e.message}</p>`;
        }
    }

    _copyEmbedCode(buttonEl) {
        const codeText = this.embedCodeDisplay.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
            if (buttonEl) {
                buttonEl.classList.add('copied');
                const btnTextEl = buttonEl.querySelector('.btn-text') || buttonEl;
                const originalText = btnTextEl.textContent;
                btnTextEl.textContent = '✅ Copied to Clipboard!';
                
                setTimeout(() => {
                    buttonEl.classList.remove('copied');
                    btnTextEl.textContent = originalText;
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    }

    _escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}

if (!customElements.get('tj-builder')) {
    customElements.define('tj-builder', TjBuilder);
}

export default TjBuilder;
