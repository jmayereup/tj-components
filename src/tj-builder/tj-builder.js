import stylesText from "./styles.css?inline";
import templateHtml from "./template.html?raw";
import { COMPONENT_CATALOG, getComponentByTag, SAMPLE_QUIZ_MD, SAMPLE_INFOGAP_JSON, SAMPLE_SPEED_JSON } from "../tj-catalog.js";
import { openGeminiUrlWithTip } from "../tj-gemini-tip.js";
import { showBuilderInstructionsTip } from "../tj-builder-tip.js";

const STORAGE_KEY = 'tj_builder_settings';
const DEFAULT_SUBMISSION_URL = 'https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec';

class TjBuilder extends HTMLElement {
    static get observedAttributes() {
        return ['school'];
    }

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
            componentType: 'tj-test',
            rawContent: '',
            isJson: false,
            jsonObject: null,
            markdownAst: null
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'school' && oldValue !== newValue) {
            this._fetchTeacherPresets();
        }
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>${stylesText}</style>
            ${templateHtml}
        `;

        this._loadSettings();
        this._initElements();
        this._bindEvents();
        this._fetchTeacherPresets();
        
        // Start with empty input so Gemini Overlay is immediately visible on startup
        this._updateGeminiOverlay();
        this._syncBox2ThresholdDisplay();

        // Trigger builder onboarding tip notice when element scrolls into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showBuilderInstructionsTip();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });
        observer.observe(this);
    }

    _getCleanTagName(typeStr) {
        if (!typeStr) return 'tj-test';
        const match = String(typeStr).match(/(tj-[a-z0-9-]+)/i);
        if (match) {
            return match[1].toLowerCase();
        }
        return 'tj-test';
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
        this.selectTeacherImport = this.shadowRoot.getElementById('select-teacher-import');
        this.fieldGroupTeacherImport = this.shadowRoot.getElementById('field-group-teacher-import');
        
        this.badgeStartCode = this.shadowRoot.getElementById('badge-start-code');
        this.badgeTeacherCode = this.shadowRoot.getElementById('badge-teacher-code');
        
        this.inputGemini = this.shadowRoot.getElementById('gemini-input');
        this.inputWrapper = this.shadowRoot.getElementById('input-area-wrapper');
        this.inputCharCount = this.shadowRoot.getElementById('input-char-count');
        this.btnClearInput = this.shadowRoot.getElementById('btn-clear-input');
        
        this.selectComponentType = this.shadowRoot.getElementById('component-type-select');
        this.btnPasteClipboard = this.shadowRoot.getElementById('btn-paste-clipboard');
        
        this.geminiPromptOverlay = this.shadowRoot.getElementById('gemini-prompt-overlay');
        this.geminiOverlayTitle = this.shadowRoot.getElementById('gemini-overlay-title');
        this.geminiOverlayDesc = this.shadowRoot.getElementById('gemini-overlay-desc');
        this.btnGeminiConvert = this.shadowRoot.getElementById('btn-gemini-convert');
        this.btnGeminiCreate = this.shadowRoot.getElementById('btn-gemini-create');
        this.titleGeminiConvert = this.shadowRoot.getElementById('title-gemini-convert');
        this.titleGeminiCreate = this.shadowRoot.getElementById('title-gemini-create');
        this.btnOpenGeminiOverlay = this.shadowRoot.getElementById('btn-open-gemini-overlay');
        this.parseStatusBadge = this.shadowRoot.getElementById('parse-status-badge');
 
        this.box2ThresholdContainer = this.shadowRoot.getElementById('box2-threshold-container');
        this.box2ThresholdMode = this.shadowRoot.getElementById('box2-test-threshold-mode');
        this.box2ThresholdValue = this.shadowRoot.getElementById('box2-test-threshold-value');
        
        this.badgeDetected = this.shadowRoot.getElementById('detected-type-badge');
        this.rawCodeEditor = this.shadowRoot.getElementById('raw-code-editor');
        this.visualFormContainer = this.shadowRoot.getElementById('visual-form-container');
        
        this.btnExpandAll = this.shadowRoot.getElementById('btn-expand-all');
        this.btnCollapseAll = this.shadowRoot.getElementById('btn-collapse-all');
        
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
        this.editorContainer = this.shadowRoot.getElementById('editor-container');

        // Populate setting input values
        this.inputStartCode.value = this.currentSettings.startCode;
        this.inputTeacherCode.value = this.currentSettings.teacherCode;
        this.inputSubmissionUrl.value = this.currentSettings.submissionUrl;
        this._updateCredentialsSummaryBadges();

        if (this.chkTestMode) {
            this.chkTestMode.checked = !!this.currentSettings.isTestMode;
        }
    }

    _updateCredentialsSummaryBadges() {
        if (this.badgeStartCode) this.badgeStartCode.textContent = this.currentSettings.startCode || '1234';
        if (this.badgeTeacherCode) this.badgeTeacherCode.textContent = this.currentSettings.teacherCode || '7676';
    }

    _updateGeminiOverlay() {
        const selectedType = this.selectComponentType?.value || 'tj-test';
        const item = getComponentByTag(selectedType);
        if (!item) return;

        if (this.geminiOverlayTitle) {
            this.geminiOverlayTitle.textContent = `Create or Convert ${item.name} with Gemini`;
        }
        if (this.geminiOverlayDesc) {
            this.geminiOverlayDesc.textContent = `Use our custom Gemini Gem to convert existing test materials or generate brand-new ${item.name} content automatically.`;
        }
        if (item.geminiUrl) {
            if (this.btnGeminiConvert) this.btnGeminiConvert.href = item.geminiUrl;
            if (this.btnGeminiCreate) this.btnGeminiCreate.href = item.geminiUrl;
        }
        if (this.titleGeminiConvert) {
            this.titleGeminiConvert.textContent = `Convert Documents ↗`;
        }
        if (this.titleGeminiCreate) {
            this.titleGeminiCreate.textContent = `Create from Scratch ↗`;
        }
        this._checkOverlayVisibility();
    }

    _checkOverlayVisibility() {
        const hasText = !!(this.inputGemini?.value?.trim());
        if (this.geminiPromptOverlay) {
            if (hasText) {
                this.geminiPromptOverlay.classList.add('hidden');
            } else {
                this.geminiPromptOverlay.classList.remove('hidden');
            }
        }
    }

    _syncBox2ThresholdDisplay() {
        const cleanType = this._getCleanTagName(this.selectComponentType?.value);
        const isTest = cleanType === 'tj-test';
        
        if (this.box2ThresholdContainer) {
            this.box2ThresholdContainer.style.display = isTest ? 'flex' : 'none';
        }

        if (isTest) {
            const mode = (this.parsedState.jsonObject && this.parsedState.jsonObject._thresholdMode) || 'disabled';
            const val = (this.parsedState.jsonObject && this.parsedState.jsonObject.passThreshold && this.parsedState.jsonObject.passThreshold !== '0%') ? this.parsedState.jsonObject.passThreshold : '70%';
            
            if (this.box2ThresholdMode) {
                this.box2ThresholdMode.value = mode;
            }
            if (this.box2ThresholdValue) {
                this.box2ThresholdValue.value = val;
                this.box2ThresholdValue.style.display = (mode === 'enabled') ? 'block' : 'none';
            }
        }
    }

    _debouncedParseInput() {
        if (this._parseTimer) clearTimeout(this._parseTimer);
        this._parseTimer = setTimeout(() => {
            this._handleParseInput();
        }, 200);
    }

    async _fetchTeacherPresets() {
        if (!this.selectTeacherImport) return;

        const school = this.hasAttribute('school') ? this.getAttribute('school')?.trim() : null;

        if (!school) {
            if (this.fieldGroupTeacherImport) this.fieldGroupTeacherImport.style.display = 'none';
            return;
        }

        if (this.fieldGroupTeacherImport) {
            this.fieldGroupTeacherImport.style.display = '';
        }
        
        const url = `https://blog.teacherjake.com/api/collections/tj_components_teacher_info/records?filter=(school='${encodeURIComponent(school)}')`;
        
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error ${res.status}`);
            const data = await res.json();
            const items = data.items || [];
            
            if (items.length === 0) {
                this.selectTeacherImport.innerHTML = `<option value="" disabled selected>No presets for ${school}</option>`;
                return;
            }

            const optionsHtml = [
                `<option value="" disabled selected>Import Teacher...</option>`,
                ...items.map(teacher => `<option value="${teacher.url}">${teacher.name}</option>`),
                `<option value="__custom__">✏️ Custom Submission URL...</option>`
            ].join('');

            this.selectTeacherImport.innerHTML = optionsHtml;

            // Check if saved submission URL matches an imported teacher preset
            const currentUrl = this.currentSettings.submissionUrl;
            const matchingTeacher = items.find(t => t.url === currentUrl);
            if (matchingTeacher) {
                this.selectTeacherImport.value = matchingTeacher.url;
                if (this.inputSubmissionUrl) {
                    this.inputSubmissionUrl.disabled = true;
                    this.inputSubmissionUrl.title = `Locked to preset URL for ${matchingTeacher.name}`;
                }
            }
        } catch (e) {
            console.warn('TJ Builder: Could not fetch teacher info presets', e);
            this.selectTeacherImport.innerHTML = `<option value="" disabled selected>Import Teacher...</option>`;
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
            this._updateCredentialsSummaryBadges();
            this._saveSettings();
            this._updateOutputs();
        };

        [this.inputStartCode, this.inputTeacherCode, this.inputSubmissionUrl].forEach(input => {
            input?.addEventListener('input', handleSettingChange);
        });

        if (this.selectTeacherImport) {
            this.selectTeacherImport.addEventListener('change', (e) => {
                const selectedVal = e.target.value;
                if (selectedVal === '__custom__') {
                    this.inputSubmissionUrl.disabled = false;
                    this.inputSubmissionUrl.title = '';
                    this.inputSubmissionUrl.focus();
                    this._showToast('Unlocked Custom Submission URL input');
                } else if (selectedVal) {
                    this.inputSubmissionUrl.value = selectedVal;
                    this.inputSubmissionUrl.disabled = true;
                    const teacherName = e.target.options[e.target.selectedIndex]?.text;
                    this.inputSubmissionUrl.title = `Locked to preset URL for ${teacherName}`;
                    handleSettingChange();
                    if (teacherName) {
                        this._showToast(`Loaded & locked settings for ${teacherName}`);
                    }
                }
            });
        }

        // Input stats, Overlay check & Debounced Auto-Parsing
        const updateInputStats = () => {
            const len = this.inputGemini?.value?.length || 0;
            if (this.inputCharCount) this.inputCharCount.textContent = `${len.toLocaleString()} chars`;
        };

        this.inputGemini?.addEventListener('input', () => {
            updateInputStats();
            this._checkOverlayVisibility();
            this._debouncedParseInput();
        });
        updateInputStats();

        this.btnClearInput?.addEventListener('click', () => {
            if (this.inputGemini) {
                this.inputGemini.value = '';
                updateInputStats();
                this._checkOverlayVisibility();
                this._handleParseInput();
                this._showToast('Input cleared');
            }
        });

        if (this.inputWrapper) {
            this.inputWrapper.addEventListener('dragover', (e) => {
                e.preventDefault();
                this.inputWrapper.classList.add('drag-over');
            });
            this.inputWrapper.addEventListener('dragleave', (e) => {
                e.preventDefault();
                this.inputWrapper.classList.remove('drag-over');
            });
            this.inputWrapper.addEventListener('drop', (e) => {
                e.preventDefault();
                this.inputWrapper.classList.remove('drag-over');
                const file = e.dataTransfer?.files?.[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        this.inputGemini.value = ev.target.result;
                        updateInputStats();
                        this._checkOverlayVisibility();
                        this._handleParseInput();
                        this._showToast(`Imported ${file.name}`);
                    };
                    reader.readAsText(file);
                }
            });
        }

        // Question Expand/Collapse All
        this.btnExpandAll?.addEventListener('click', () => {
            this.shadowRoot.querySelectorAll('.vf-question-card').forEach(card => card.classList.remove('collapsed'));
        });
        this.btnCollapseAll?.addEventListener('click', () => {
            this.shadowRoot.querySelectorAll('.vf-question-card').forEach(card => card.classList.add('collapsed'));
        });

        // Gemini Gem button click (header action button)
        this.btnOpenGeminiOverlay?.addEventListener('click', () => {
            const selectedType = this.selectComponentType?.value;
            const item = getComponentByTag(selectedType);
            if (item && item.geminiUrl) {
                openGeminiUrlWithTip(item.geminiUrl);
            }
        });

        // Gemini Overlay action cards click
        const handleGeminiCardClick = (e) => {
            const btn = e.currentTarget;
            const url = btn.getAttribute('href');
            if (url && url !== '#') {
                e.preventDefault();
                openGeminiUrlWithTip(url);
            }
        };
        this.btnGeminiConvert?.addEventListener('click', handleGeminiCardClick);
        this.btnGeminiCreate?.addEventListener('click', handleGeminiCardClick);

        // Component selector change (at top of Box 1)
        this.selectComponentType?.addEventListener('change', () => {
            const cleanTag = this._getCleanTagName(this.selectComponentType.value);
            this.parsedState.componentType = cleanTag;
            if (cleanTag === 'tj-test' || cleanTag === 'tj-progressive-test') {
                if (this.chkTestMode) this.chkTestMode.checked = true;
            }
            if (this.badgeDetected) this.badgeDetected.textContent = this.parsedState.componentType;
            this._updateGeminiOverlay();
            this._syncBox2ThresholdDisplay();
            this._handleParseInput();
        });

        // Box 2 Pass Threshold controls change
        this.box2ThresholdMode?.addEventListener('change', (e) => {
            const newMode = e.target.value;
            if (this.parsedState.jsonObject) {
                this.parsedState.jsonObject._thresholdMode = newMode;
                if (newMode === 'disabled') {
                    this.parsedState.jsonObject.passThreshold = "0%";
                    if (Array.isArray(this.parsedState.jsonObject.sections)) {
                        this.parsedState.jsonObject.sections.forEach(s => s.passThreshold = "0%");
                    }
                } else {
                    const val = this.parsedState.jsonObject.passThreshold && this.parsedState.jsonObject.passThreshold !== '0%' ? this.parsedState.jsonObject.passThreshold : "70%";
                    this.parsedState.jsonObject.passThreshold = val;
                    if (Array.isArray(this.parsedState.jsonObject.sections)) {
                        this.parsedState.jsonObject.sections.forEach(s => s.passThreshold = val);
                    }
                }
            }
            this._syncBox2ThresholdDisplay();
            this._renderVisualForm();
            this._updateOutputs();
        });

        this.box2ThresholdValue?.addEventListener('input', (e) => {
            const val = e.target.value.trim() || '70%';
            if (this.parsedState.jsonObject) {
                this.parsedState.jsonObject.passThreshold = val;
                if (Array.isArray(this.parsedState.jsonObject.sections)) {
                    this.parsedState.jsonObject.sections.forEach(s => s.passThreshold = val);
                }
            }
            this._renderVisualForm();
            this._updateOutputs();
        });

        // Paste from clipboard button
        this.btnPasteClipboard?.addEventListener('click', () => this._handlePasteFromClipboard());

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
        this.rawCodeEditor?.addEventListener('input', () => {
            this.parsedState.rawContent = this.rawCodeEditor.value;
            this._updateOutputs({ skipRawEditorUpdate: true });
        });

        // Copy button & test mode toggle
        this.chkTestMode?.addEventListener('change', () => {
            this.currentSettings.isTestMode = this.chkTestMode.checked;
            this._saveSettings();
            this._updateOutputs();
        });
        this.btnCopyCode.addEventListener('click', () => this._copyEmbedCode(this.btnCopyCode));
        this.btnCopyModal.addEventListener('click', () => this._copyEmbedCode(this.btnCopyModal));

        // Modal Preview Controls & Viewport Switchers
        this.btnOpenPreview.addEventListener('click', () => this._openModalPreview());
        this.btnCloseModal.addEventListener('click', () => this._closeModalPreview());
        this.btnCloseModalFooter.addEventListener('click', () => this._closeModalPreview());
        this.previewModal.addEventListener('click', (e) => {
            if (e.target === this.previewModal) {
                this._closeModalPreview();
            }
        });

        const viewportBtns = this.shadowRoot.querySelectorAll('.btn-viewport');
        viewportBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                viewportBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const vp = btn.dataset.viewport || 'desktop';
                if (this.livePreviewContainer) {
                    this.livePreviewContainer.className = `preview-stage view-${vp}`;
                }
            });
        });
    }

    async _handlePasteFromClipboard() {
        try {
            if (!navigator.clipboard || typeof navigator.clipboard.readText !== 'function') {
                throw new Error('Clipboard API not available');
            }
            const text = await navigator.clipboard.readText();
            if (!text || !text.trim()) {
                return;
            }
            this.inputGemini.value = text.trim();
            this._handleParseInput();
            this._showPasteFeedback();
        } catch (err) {
            console.warn('TJ Builder: Could not read clipboard directly', err);
            if (this.inputGemini) {
                this.inputGemini.focus();
                this.inputGemini.placeholder = "Please press Ctrl+V or Cmd+V to paste your Gemini AI output here...";
            }
        }
    }

    _showPasteFeedback() {
        if (!this.btnPasteClipboard) return;
        this.btnPasteClipboard.classList.add('pasted');
        const originalText = this.btnPasteClipboard.innerHTML;
        this.btnPasteClipboard.innerHTML = '✅ Pasted & Parsed!';
        setTimeout(() => {
            this.btnPasteClipboard.classList.remove('pasted');
            this.btnPasteClipboard.innerHTML = originalText;
        }, 2000);
    }

    _clearComponentSessionStorage() {
        try {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && (key.startsWith('tj-') || key.startsWith('tj_')) && key !== STORAGE_KEY) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));
        } catch (e) {
            console.warn('TJ Builder: Could not clear component session storage', e);
        }
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
            
            // Auto-detect and populate teacher attributes if present on tag
            const startCodeMatch = raw.match(/start-code=["']([^"']+)["']/i);
            if (startCodeMatch && this.inputStartCode) {
                this.inputStartCode.value = startCodeMatch[1];
                this.currentSettings.startCode = startCodeMatch[1];
            }
            const teacherCodeMatch = raw.match(/teacher-code=["']([^"']+)["']/i);
            if (teacherCodeMatch && this.inputTeacherCode) {
                this.inputTeacherCode.value = teacherCodeMatch[1];
                this.currentSettings.teacherCode = teacherCodeMatch[1];
            }
            const subUrlMatch = raw.match(/submission-url=["']([^"']+)["']/i);
            if (subUrlMatch && this.inputSubmissionUrl) {
                this.inputSubmissionUrl.value = subUrlMatch[1];
                this.currentSettings.submissionUrl = subUrlMatch[1];
            }
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

        if (this.selectComponentType) this.selectComponentType.value = detectedType;
        if (this.badgeDetected) this.badgeDetected.textContent = detectedType;

        this._updateGeminiOverlay();
        this._syncBox2ThresholdDisplay();
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
            const type = this.parsedState.componentType;
            const obj = this.parsedState.jsonObject;

            if (type === 'tj-test' || Array.isArray(obj.sections) || obj.passThreshold !== undefined) {
                this._renderTestJsonVisualForm(obj);
            } else if (type === 'tj-info-gap' || obj.gaps !== undefined || obj.blocks !== undefined) {
                this._renderInfoGapJsonVisualForm(obj);
            } else if (type === 'tj-speed-review' || obj.deck !== undefined || obj.cards !== undefined || (Array.isArray(obj) && obj[0] && obj[0].questions)) {
                this._renderSpeedReviewJsonVisualForm(obj);
            } else if (type === 'tj-chapter-book' || obj.chapters !== undefined) {
                this._renderChapterBookJsonVisualForm(obj);
            } else if (type === 'tj-grammar-hearts' || type === 'grammar-hearts' || obj.hearts !== undefined || obj.grammar !== undefined || (Array.isArray(obj) && obj[0] && obj[0].hint)) {
                this._renderGrammarHeartsJsonVisualForm(obj);
            } else if (type === 'tj-listening' || obj.listening !== undefined || obj.intro !== undefined) {
                this._renderListeningJsonVisualForm(obj);
            } else if (type === 'tj-pronunciation' || obj.activities !== undefined || obj.targetWords !== undefined) {
                this._renderPronunciationJsonVisualForm(obj);
            } else if (type === 'tj-reader' || type === 'lbl-reader' || obj.storyTitle !== undefined || (Array.isArray(obj) && obj[0] && obj[0].original !== undefined)) {
                this._renderReaderJsonVisualForm(obj);
            } else {
                this._renderGenericJsonVisualForm(obj);
            }
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
            <div class="vf-section-title">📖 Reading Passage</div>
            <div class="field-group" style="margin-bottom: 0.6rem;">
                <label>Title</label>
                <input type="text" id="vf-passage-title" value="${this._escapeHtml(ast.passageTitle)}" placeholder="Passage title..." />
            </div>
            <div class="field-group" style="margin-bottom: 0.6rem;">
                <label>Audio URL</label>
                <input type="url" id="vf-passage-audio" value="${this._escapeHtml(ast.audioSrc)}" placeholder="https://..." />
            </div>
            <div class="field-group">
                <label>Passage</label>
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
                    const isCorrect = (optIdx === q.correctIndex);
                    optionsHtml += `
                        <div class="vf-option-row ${isCorrect ? 'is-correct' : ''}">
                            <input type="radio" name="q-correct-${qIdx}" class="vf-option-radio" ${isCorrect ? 'checked' : ''} data-q="${qIdx}" data-opt="${optIdx}" />
                            <strong style="color: #cbd5e1; font-size: 0.85rem;">${letter}.</strong>
                            <input type="text" class="vf-option-input" value="${this._escapeHtml(opt)}" data-q="${qIdx}" data-opt="${optIdx}" placeholder="Option text..." />
                            ${isCorrect ? '<span class="vf-correct-badge">✓ Correct</span>' : ''}
                        </div>
                    `;
                });

                qCard.innerHTML = `
                    <div class="vf-question-header">
                        <span class="vf-question-num">Question ${qIdx + 1}</span>
                        <div class="vf-question-actions">
                            <button type="button" class="vf-btn-action btn-q-move" data-dir="-1" data-q="${qIdx}" title="Move Question Up" ${qIdx === 0 ? 'disabled style="opacity: 0.4;"' : ''}>▲</button>
                            <button type="button" class="vf-btn-action btn-q-move" data-dir="1" data-q="${qIdx}" title="Move Question Down" ${qIdx === ast.questions.length - 1 ? 'disabled style="opacity: 0.4;"' : ''}>▼</button>
                            <button type="button" class="vf-btn-action btn-q-dup" data-q="${qIdx}" title="Duplicate Question">📋</button>
                            <button type="button" class="vf-btn-action btn-q-toggle" data-q="${qIdx}" title="Toggle Collapse">📁</button>
                            <button type="button" class="vf-btn-delete" data-q="${qIdx}">Delete</button>
                        </div>
                    </div>
                    <div class="vf-question-body">
                        <div class="field-group" style="margin-bottom: 0.65rem;">
                            <input type="text" class="vf-q-text" value="${this._escapeHtml(q.question)}" data-q="${qIdx}" placeholder="Enter question..." />
                        </div>
                        <div class="vf-options-grid">
                            ${optionsHtml}
                        </div>
                    </div>
                `;
                qList.appendChild(qCard);
            });
        };

        renderQuestions();

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
                renderQuestions();
                this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                this._updateOutputs();
            }
        });

        container.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            if (btn.classList.contains('vf-btn-delete')) {
                const qIdx = parseInt(btn.dataset.q, 10);
                ast.questions.splice(qIdx, 1);
                renderQuestions();
                this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                this._updateOutputs();
                this._showToast('Question deleted');
            } else if (btn.classList.contains('btn-q-move')) {
                const qIdx = parseInt(btn.dataset.q, 10);
                const dir = parseInt(btn.dataset.dir, 10);
                const targetIdx = qIdx + dir;
                if (targetIdx >= 0 && targetIdx < ast.questions.length) {
                    const temp = ast.questions[qIdx];
                    ast.questions[qIdx] = ast.questions[targetIdx];
                    ast.questions[targetIdx] = temp;
                    renderQuestions();
                    this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                    this._updateOutputs();
                }
            } else if (btn.classList.contains('btn-q-dup')) {
                const qIdx = parseInt(btn.dataset.q, 10);
                const copy = JSON.parse(JSON.stringify(ast.questions[qIdx]));
                copy.question = `${copy.question} (Copy)`;
                ast.questions.splice(qIdx + 1, 0, copy);
                renderQuestions();
                this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                this._updateOutputs();
                this._showToast('Question duplicated');
            } else if (btn.classList.contains('btn-q-toggle')) {
                const qIdx = parseInt(btn.dataset.q, 10);
                const cards = qList.querySelectorAll('.vf-question-card');
                if (cards[qIdx]) cards[qIdx].classList.toggle('collapsed');
            } else if (btn.id === 'vf-add-q') {
                ast.questions.push({
                    question: 'New Question',
                    options: ['Option A', 'Option B', 'Option C', 'Option D'],
                    correctIndex: 0
                });
                renderQuestions();
                this.parsedState.rawContent = this._generateMarkdownFromAst(ast);
                this._updateOutputs();
                this._showToast('New question added');
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
                <input type="text" id="vf-json-title" value="${this._escapeHtml(jsonObject.title || '')}" placeholder="Activity title..." />
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

    _renderTestJsonVisualForm(jsonObject) {
        if (!jsonObject.sections || !Array.isArray(jsonObject.sections)) {
            jsonObject.sections = [];
        }

        // Default threshold mode to 'disabled' unless explicitly enabled by user
        if (!jsonObject._thresholdMode) {
            jsonObject._thresholdMode = 'disabled';
        }

        const container = document.createElement('div');
        container.className = 'vf-test-editor';

        const renderFormContent = () => {
            container.innerHTML = '';
            const currentMode = jsonObject._thresholdMode || 'disabled';
            const isThresholdEnabled = currentMode === 'enabled';

            // 1. Root / Activity Level Configuration
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>⚡ Test Configuration (tj-test)</span>
                    <span class="vf-badge">${jsonObject.sections.length} Section${jsonObject.sections.length !== 1 ? 's' : ''}</span>
                </div>
                <div class="vf-grid-2">
                    <div class="field-group">
                        <label for="vf-test-title">Title</label>
                        <input type="text" id="vf-test-title" value="${this._escapeHtml(jsonObject.title || '')}" placeholder="e.g. CEFR Placement Test" />
                    </div>
                    <div class="field-group">
                        <label for="vf-test-threshold-mode">Pass Threshold Requirement</label>
                        <select id="vf-test-threshold-mode" class="vf-select-input">
                            <option value="disabled" ${!isThresholdEnabled ? 'selected' : ''}>Disabled (No minimum score required)</option>
                            <option value="enabled" ${isThresholdEnabled ? 'selected' : ''}>Global Threshold (Set percentage)</option>
                        </select>
                    </div>
                </div>
                <div id="vf-threshold-value-group" class="field-group" style="margin-top: 0.75rem; display: ${isThresholdEnabled ? 'block' : 'none'};">
                    <div style="display: flex; gap: 0.5rem; align-items: flex-end;">
                        <div style="flex: 1;">
                            <label for="vf-test-threshold">Global Pass Threshold</label>
                            <input type="text" id="vf-test-threshold" value="${this._escapeHtml(jsonObject.passThreshold && jsonObject.passThreshold !== '0%' ? jsonObject.passThreshold : '70%')}" placeholder="e.g. 70%" />
                        </div>
                        <button type="button" class="vf-btn-secondary" id="vf-btn-apply-global-threshold" style="white-space: nowrap; height: 38px;">Apply Global to All Sections</button>
                    </div>
                    <p style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem;">Sets score cutoff percentage required to unlock subsequent test sections.</p>
                </div>
            `;
            container.appendChild(rootSec);

            // 2. Sections List
            const sectionsContainer = document.createElement('div');
            sectionsContainer.className = 'vf-sections-list';

            jsonObject.sections.forEach((sec, sIdx) => {
                const secCard = document.createElement('div');
                secCard.className = 'vf-section-card';
                secCard.dataset.sidx = sIdx;

                const secTitle = sec.title || `Section ${sIdx + 1}`;
                const secThreshold = isThresholdEnabled 
                    ? (sec.passThreshold && sec.passThreshold !== '0%' ? sec.passThreshold : (jsonObject.passThreshold || '70%'))
                    : '0%';
                const passages = Array.isArray(sec.passages) ? sec.passages : (sec.passage ? [sec.passage] : []);
                const questions = Array.isArray(sec.questions) ? sec.questions : [];
                const vocabulary = Array.isArray(sec.vocabulary) ? sec.vocabulary : (Array.isArray(sec.vocab) ? sec.vocab : []);
                const cloze = Array.isArray(sec.cloze) ? sec.cloze : [];

                let passagesHtml = passages.map((p, pIdx) => {
                    const text = typeof p === 'string' ? p : (p.text || '');
                    return `
                        <div class="vf-passage-row" data-sidx="${sIdx}" data-pidx="${pIdx}">
                            <div class="vf-item-header">
                                <span class="vf-sub-item-title">Passage ${pIdx + 1}</span>
                                <button type="button" class="vf-btn-delete vf-btn-del-passage" data-sidx="${sIdx}" data-pidx="${pIdx}">Remove</button>
                            </div>
                            <textarea class="vf-passage-input" data-sidx="${sIdx}" data-pidx="${pIdx}" rows="3" placeholder="Enter passage text...">${this._escapeHtml(text)}</textarea>
                        </div>
                    `;
                }).join('');

                let questionsHtml = questions.map((q, qIdx) => {
                    const qText = q.question || q.q || '';
                    const options = Array.isArray(q.options) ? q.options : (Array.isArray(q.o) ? q.o : []);
                    const answer = q.answer !== undefined ? q.answer : (q.a || '');
                    const explanation = q.explanation || q.e || '';

                    let optionsHtml = options.map((opt, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx);
                        const isChecked = (String(answer) === String(opt) || String(answer) === String(optIdx) || String(answer) === letter);
                        return `
                            <div class="vf-option-row">
                                <input type="radio" name="q-ans-${sIdx}-${qIdx}" class="vf-ans-radio" ${isChecked ? 'checked' : ''} data-sidx="${sIdx}" data-qidx="${qIdx}" data-optidx="${optIdx}" title="Mark as correct answer" />
                                <strong class="vf-opt-letter">${letter}.</strong>
                                <input type="text" class="vf-opt-input" value="${this._escapeHtml(opt)}" data-sidx="${sIdx}" data-qidx="${qIdx}" data-optidx="${optIdx}" placeholder="Option text..." />
                                <button type="button" class="vf-btn-icon-del vf-btn-del-opt" data-sidx="${sIdx}" data-qidx="${qIdx}" data-optidx="${optIdx}" title="Delete option">✕</button>
                            </div>
                        `;
                    }).join('');

                    return `
                        <div class="vf-question-card" data-sidx="${sIdx}" data-qidx="${qIdx}">
                            <div class="vf-question-header">
                                <span class="vf-question-num">Question ${qIdx + 1}${qText ? `: ${this._escapeHtml(qText.length > 40 ? qText.substring(0, 40) + '...' : qText)}` : ''}</span>
                                <div class="vf-question-actions">
                                    <button type="button" class="vf-btn-action btn-q-toggle" data-sidx="${sIdx}" data-qidx="${qIdx}" title="Toggle Collapse">📁</button>
                                    <button type="button" class="vf-btn-delete vf-btn-del-q" data-sidx="${sIdx}" data-qidx="${qIdx}">Delete Question</button>
                                </div>
                            </div>
                            <div class="vf-question-body">
                                <div class="field-group" style="margin-bottom: 0.5rem;">
                                    <input type="text" class="vf-q-text-input" value="${this._escapeHtml(qText)}" data-sidx="${sIdx}" data-qidx="${qIdx}" placeholder="Enter question..." />
                                </div>
                                <div class="vf-options-grid">
                                    ${optionsHtml}
                                </div>
                                <button type="button" class="vf-btn-secondary vf-btn-add-opt" data-sidx="${sIdx}" data-qidx="${qIdx}">+ Add Option</button>
                                
                                <div class="field-group" style="margin-top: 0.5rem;">
                                    <label style="font-size: 0.78rem; color: #94a3b8;">Explanation</label>
                                    <input type="text" class="vf-q-exp-input" value="${this._escapeHtml(explanation)}" data-sidx="${sIdx}" data-qidx="${qIdx}" placeholder="e.g. Option B is correct because..." />
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                let vocabHtml = vocabulary.map((v, vIdx) => {
                    const word = typeof v === 'string' ? v : (v.word || '');
                    const def = typeof v === 'string' ? '' : (v.def || v.definition || '');
                    return `
                        <div class="vf-vocab-row" data-sidx="${sIdx}" data-vidx="${vIdx}">
                            <input type="text" class="vf-vocab-word" value="${this._escapeHtml(word)}" data-sidx="${sIdx}" data-vidx="${vIdx}" placeholder="Word..." />
                            <input type="text" class="vf-vocab-def" value="${this._escapeHtml(def)}" data-sidx="${sIdx}" data-vidx="${vIdx}" placeholder="Definition..." />
                            <button type="button" class="vf-btn-icon-del vf-btn-del-vocab" data-sidx="${sIdx}" data-vidx="${vIdx}" title="Remove word">✕</button>
                        </div>
                    `;
                }).join('');

                let clozeHtml = cloze.map((c, cIdx) => {
                    const cText = typeof c === 'string' ? c : (c.text || '');
                    return `
                        <div class="vf-cloze-row" data-sidx="${sIdx}" data-cidx="${cIdx}">
                            <input type="text" class="vf-cloze-input" value="${this._escapeHtml(cText)}" data-sidx="${sIdx}" data-cidx="${cIdx}" placeholder="e.g. She *visited* Paris last *summer*." />
                            <button type="button" class="vf-btn-icon-del vf-btn-del-cloze" data-sidx="${sIdx}" data-cidx="${cIdx}" title="Remove cloze item">✕</button>
                        </div>
                    `;
                }).join('');

                secCard.innerHTML = `
                    <div class="vf-section-header">
                        <div class="vf-section-title-group">
                            <input type="text" class="vf-sec-title-input" value="${this._escapeHtml(secTitle)}" data-sidx="${sIdx}" placeholder="Section Title (e.g. Level A1 - Beginner)" />
                        </div>
                        <div class="vf-section-actions">
                            <div class="field-group inline-field">
                                <label>Pass Cutoff:</label>
                                <input type="text" class="vf-sec-threshold-input" value="${this._escapeHtml(secThreshold)}" data-sidx="${sIdx}" placeholder="${isThresholdEnabled ? '70%' : '0%'}" ${!isThresholdEnabled ? 'disabled title="Pass threshold is disabled globally"' : ''} />
                            </div>
                            <button type="button" class="vf-btn-delete vf-btn-del-sec" data-sidx="${sIdx}">Delete Section</button>
                        </div>
                    </div>

                    <div class="vf-section-body">
                        <div class="vf-sub-section">
                            <div class="vf-sub-header">
                                <span>📖 Reading Passages</span>
                                <button type="button" class="vf-btn-secondary vf-btn-add-passage" data-sidx="${sIdx}">+ Add Passage</button>
                            </div>
                            <div class="vf-passages-list">${passagesHtml || '<p class="vf-empty-sub">No passages added yet.</p>'}</div>
                        </div>

                        <div class="vf-sub-section">
                            <div class="vf-sub-header">
                                <span>❓ Multiple Choice Questions</span>
                                <button type="button" class="vf-btn-secondary vf-btn-add-q" data-sidx="${sIdx}">+ Add Question</button>
                            </div>
                            <div class="vf-questions-list">${questionsHtml || '<p class="vf-empty-sub">No questions added yet.</p>'}</div>
                        </div>

                        <div class="vf-sub-section">
                            <div class="vf-sub-header">
                                <span>📚 Vocabulary</span>
                                <button type="button" class="vf-btn-secondary vf-btn-add-vocab" data-sidx="${sIdx}">+ Add Vocabulary</button>
                            </div>
                            <div class="vf-vocab-list">${vocabHtml || '<p class="vf-empty-sub">No vocabulary words added.</p>'}</div>
                        </div>

                        <div class="vf-sub-section">
                            <div class="vf-sub-header">
                                <span>✏️ Cloze (Fill-in-the-Blanks) <small style="color: #94a3b8; font-weight: normal;">(Wrap target blank words in asterisks like *word*)</small></span>
                                <button type="button" class="vf-btn-secondary vf-btn-add-cloze" data-sidx="${sIdx}">+ Add Cloze</button>
                            </div>
                            <div class="vf-cloze-list">${clozeHtml || '<p class="vf-empty-sub">No cloze items added.</p>'}</div>
                        </div>
                    </div>
                `;

                sectionsContainer.appendChild(secCard);
            });

            container.appendChild(sectionsContainer);

            const addSecBar = document.createElement('div');
            addSecBar.className = 'vf-add-sec-bar';
            addSecBar.innerHTML = `
                <button type="button" class="vf-add-btn" id="vf-btn-add-section">+ Add New Section</button>
            `;
            container.appendChild(addSecBar);
        };

        renderFormContent();

        const _syncTestThresholds = () => {
            const currentMode = jsonObject._thresholdMode || 'disabled';
            if (currentMode === 'disabled') {
                jsonObject.passThreshold = "0%";
                if (Array.isArray(jsonObject.sections)) {
                    jsonObject.sections.forEach(sec => {
                        sec.passThreshold = "0%";
                    });
                }
            } else {
                const globalVal = (jsonObject.passThreshold && jsonObject.passThreshold !== '0%') ? jsonObject.passThreshold : '70%';
                jsonObject.passThreshold = globalVal;
                if (Array.isArray(jsonObject.sections)) {
                    jsonObject.sections.forEach(sec => {
                        if (!sec.passThreshold || sec.passThreshold === '0%') {
                            sec.passThreshold = globalVal;
                        }
                    });
                }
            }
        };

        const syncState = () => {
            _syncTestThresholds();
            const cleanObj = { ...jsonObject };
            delete cleanObj._thresholdMode;
            this.parsedState.rawContent = JSON.stringify(cleanObj, null, 2);
            this._syncBox2ThresholdDisplay();
            this._updateOutputs();
        };

        // Initialize state synchronization immediately on form load
        syncState();

        container.addEventListener('change', (e) => {
            const t = e.target;
            if (t.id === 'vf-test-threshold-mode') {
                jsonObject._thresholdMode = t.value;
                if (t.value === 'disabled') {
                    jsonObject.passThreshold = "0%";
                    if (Array.isArray(jsonObject.sections)) {
                        jsonObject.sections.forEach(s => s.passThreshold = "0%");
                    }
                } else {
                    const val = jsonObject.passThreshold && jsonObject.passThreshold !== '0%' ? jsonObject.passThreshold : "70%";
                    jsonObject.passThreshold = val;
                    if (Array.isArray(jsonObject.sections)) {
                        jsonObject.sections.forEach(s => s.passThreshold = val);
                    }
                }
                renderFormContent();
                syncState();
            } else if (t.classList.contains('vf-ans-radio')) {
                const sIdx = parseInt(t.dataset.sidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                const optIdx = parseInt(t.dataset.optidx, 10);
                if (jsonObject.sections[sIdx] && jsonObject.sections[sIdx].questions[qIdx]) {
                    const qObj = jsonObject.sections[sIdx].questions[qIdx];
                    const opts = qObj.options || qObj.o || [];
                    const selectedVal = opts[optIdx] || '';
                    if (qObj.a !== undefined) qObj.a = selectedVal;
                    else qObj.answer = selectedVal;
                    syncState();
                }
            }
        });

        container.addEventListener('input', (e) => {
            const t = e.target;
            
            if (t.id === 'vf-test-title') {
                jsonObject.title = t.value;
                syncState();
                return;
            }
            if (t.id === 'vf-test-threshold') {
                jsonObject.passThreshold = t.value;
                syncState();
                return;
            }

            const sIdx = parseInt(t.dataset.sidx, 10);
            if (isNaN(sIdx) || !jsonObject.sections[sIdx]) return;
            const sec = jsonObject.sections[sIdx];

            if (t.classList.contains('vf-sec-title-input')) {
                sec.title = t.value;
            } else if (t.classList.contains('vf-sec-threshold-input')) {
                sec.passThreshold = t.value;
            } 
            else if (t.classList.contains('vf-passage-input')) {
                const pIdx = parseInt(t.dataset.pidx, 10);
                if (!Array.isArray(sec.passages)) sec.passages = [];
                if (typeof sec.passages[pIdx] === 'object' && sec.passages[pIdx] !== null) {
                    sec.passages[pIdx].text = t.value;
                } else {
                    sec.passages[pIdx] = t.value;
                }
            }
            else if (t.classList.contains('vf-q-text-input')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (sec.questions && sec.questions[qIdx]) {
                    if (sec.questions[qIdx].q !== undefined) sec.questions[qIdx].q = t.value;
                    else sec.questions[qIdx].question = t.value;
                }
            } else if (t.classList.contains('vf-opt-input')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                const optIdx = parseInt(t.dataset.optidx, 10);
                if (sec.questions && sec.questions[qIdx] && Array.isArray(sec.questions[qIdx].options)) {
                    sec.questions[qIdx].options[optIdx] = t.value;
                }
            } else if (t.classList.contains('vf-q-exp-input')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (sec.questions && sec.questions[qIdx]) {
                    if (sec.questions[qIdx].e !== undefined) sec.questions[qIdx].e = t.value;
                    else sec.questions[qIdx].explanation = t.value;
                }
            }
            else if (t.classList.contains('vf-vocab-word')) {
                const vIdx = parseInt(t.dataset.vidx, 10);
                if (!Array.isArray(sec.vocabulary)) sec.vocabulary = [];
                if (!sec.vocabulary[vIdx]) sec.vocabulary[vIdx] = { word: '', def: '' };
                sec.vocabulary[vIdx].word = t.value;
            } else if (t.classList.contains('vf-vocab-def')) {
                const vIdx = parseInt(t.dataset.vidx, 10);
                if (!Array.isArray(sec.vocabulary)) sec.vocabulary = [];
                if (!sec.vocabulary[vIdx]) sec.vocabulary[vIdx] = { word: '', def: '' };
                if (sec.vocabulary[vIdx].definition !== undefined) sec.vocabulary[vIdx].definition = t.value;
                else sec.vocabulary[vIdx].def = t.value;
            }
            else if (t.classList.contains('vf-cloze-input')) {
                const cIdx = parseInt(t.dataset.cidx, 10);
                if (!Array.isArray(sec.cloze)) sec.cloze = [];
                if (typeof sec.cloze[cIdx] === 'object' && sec.cloze[cIdx] !== null) {
                    sec.cloze[cIdx].text = t.value;
                } else {
                    sec.cloze[cIdx] = t.value;
                }
            }

            syncState();
        });

        container.addEventListener('change', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-ans-radio')) {
                const sIdx = parseInt(t.dataset.sidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                const optIdx = parseInt(t.dataset.optidx, 10);
                if (jsonObject.sections[sIdx] && jsonObject.sections[sIdx].questions[qIdx]) {
                    const qObj = jsonObject.sections[sIdx].questions[qIdx];
                    const opts = qObj.options || qObj.o || [];
                    const selectedVal = opts[optIdx] || '';
                    if (qObj.a !== undefined) qObj.a = selectedVal;
                    else qObj.answer = selectedVal;
                    syncState();
                }
            }
        });

        container.addEventListener('click', (e) => {
            const t = e.target;

            if (t.classList.contains('btn-q-toggle') || t.closest('.vf-question-header')) {
                const card = t.closest('.vf-question-card');
                if (card && !t.classList.contains('vf-btn-delete') && !t.classList.contains('vf-btn-del-q')) {
                    card.classList.toggle('collapsed');
                    return;
                }
            }

            if (t.id === 'vf-btn-add-section') {
                jsonObject.sections.push({
                    title: `Section ${jsonObject.sections.length + 1}`,
                    passThreshold: "70%",
                    passages: ["Sample passage text..."],
                    questions: [
                        {
                            question: "Sample Question?",
                            options: ["Option A", "Option B", "Option C"],
                            answer: "Option A"
                        }
                    ],
                    vocabulary: [],
                    cloze: []
                });
                renderFormContent();
                syncState();
                return;
            }

            const sIdx = parseInt(t.dataset.sidx, 10);
            if (isNaN(sIdx) || !jsonObject.sections[sIdx]) return;
            const sec = jsonObject.sections[sIdx];

            if (t.classList.contains('vf-btn-del-sec')) {
                jsonObject.sections.splice(sIdx, 1);
                renderFormContent();
                syncState();
                return;
            }

            if (t.classList.contains('vf-btn-add-passage')) {
                if (!Array.isArray(sec.passages)) sec.passages = [];
                sec.passages.push("New passage text...");
                renderFormContent();
                syncState();
                return;
            }
            if (t.classList.contains('vf-btn-del-passage')) {
                const pIdx = parseInt(t.dataset.pidx, 10);
                if (Array.isArray(sec.passages)) sec.passages.splice(pIdx, 1);
                renderFormContent();
                syncState();
                return;
            }

            if (t.classList.contains('vf-btn-add-q')) {
                if (!Array.isArray(sec.questions)) sec.questions = [];
                sec.questions.push({
                    question: "New Question?",
                    options: ["Option A", "Option B", "Option C"],
                    answer: "Option A"
                });
                renderFormContent();
                syncState();
                return;
            }
            if (t.classList.contains('vf-btn-del-q')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (Array.isArray(sec.questions)) sec.questions.splice(qIdx, 1);
                renderFormContent();
                syncState();
                return;
            }

            if (t.classList.contains('vf-btn-add-opt')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (sec.questions && sec.questions[qIdx]) {
                    const qObj = sec.questions[qIdx];
                    if (!qObj.options && !qObj.o) qObj.options = [];
                    const opts = qObj.options || qObj.o;
                    opts.push(`Option ${String.fromCharCode(65 + opts.length)}`);
                    renderFormContent();
                    syncState();
                }
                return;
            }
            if (t.classList.contains('vf-btn-del-opt')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                const optIdx = parseInt(t.dataset.optidx, 10);
                if (sec.questions && sec.questions[qIdx]) {
                    const qObj = sec.questions[qIdx];
                    const opts = qObj.options || qObj.o;
                    if (Array.isArray(opts)) {
                        opts.splice(optIdx, 1);
                        renderFormContent();
                        syncState();
                    }
                }
                return;
            }

            if (t.classList.contains('vf-btn-add-vocab')) {
                if (!Array.isArray(sec.vocabulary)) {
                    if (Array.isArray(sec.vocab)) sec.vocabulary = sec.vocab;
                    else sec.vocabulary = [];
                }
                sec.vocabulary.push({ word: "New Word", def: "Definition..." });
                renderFormContent();
                syncState();
                return;
            }
            if (t.classList.contains('vf-btn-del-vocab')) {
                const vIdx = parseInt(t.dataset.vidx, 10);
                const list = sec.vocabulary || sec.vocab;
                if (Array.isArray(list)) list.splice(vIdx, 1);
                renderFormContent();
                syncState();
                return;
            }

            if (t.classList.contains('vf-btn-add-cloze')) {
                if (!Array.isArray(sec.cloze)) sec.cloze = [];
                sec.cloze.push("Fill in the *blank* word.");
                renderFormContent();
                syncState();
                return;
            }
            if (t.classList.contains('vf-btn-del-cloze')) {
                const cIdx = parseInt(t.dataset.cidx, 10);
                if (Array.isArray(sec.cloze)) sec.cloze.splice(cIdx, 1);
                renderFormContent();
                syncState();
                return;
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderInfoGapJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';

        const render = () => {
            container.innerHTML = '';
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>👥 Info Gap Configuration (tj-info-gap)</span>
                </div>
                <div class="vf-grid-2">
                    <div class="field-group">
                        <label>Title</label>
                        <input type="text" class="vf-ig-title" value="${this._escapeHtml(jsonObject.title || jsonObject.topic || '')}" placeholder="e.g. Weekend Plans" />
                    </div>
                    <div class="field-group">
                        <label>Players</label>
                        <input type="number" class="vf-ig-players" value="${jsonObject.player_count || 2}" min="1" max="4" />
                    </div>
                </div>
                <div class="field-group" style="margin-top: 0.5rem;">
                    <label>Scenario</label>
                    <textarea class="vf-ig-scenario" rows="2" placeholder="e.g. Read your info and ask questions...">${this._escapeHtml(jsonObject.scenario_description || '')}</textarea>
                </div>
            `;
            container.appendChild(rootSec);

            if (Array.isArray(jsonObject.gaps)) {
                const gapsSec = document.createElement('div');
                gapsSec.className = 'vf-section';
                let gapsHtml = jsonObject.gaps.map((g, gIdx) => `
                    <div class="vf-vocab-row" data-gidx="${gIdx}">
                        <input type="text" class="vf-gap-text" data-gidx="${gIdx}" value="${this._escapeHtml(g.text || '')}" placeholder="Prompt text..." />
                        <input type="text" class="vf-gap-ans" data-gidx="${gIdx}" value="${this._escapeHtml(g.answer || '')}" placeholder="Answer..." />
                        <button type="button" class="vf-btn-icon-del vf-btn-del-gap" data-gidx="${gIdx}">✕</button>
                    </div>
                `).join('');
                gapsSec.innerHTML = `
                    <div class="vf-sub-header">
                        <span>💬 Information Gaps</span>
                        <button type="button" class="vf-btn-secondary vf-btn-add-gap">+ Add Gap</button>
                    </div>
                    <div>${gapsHtml || '<p class="vf-empty-sub">No gaps added.</p>'}</div>
                `;
                container.appendChild(gapsSec);
            }

            if (Array.isArray(jsonObject.blocks)) {
                const blocksSec = document.createElement('div');
                blocksSec.className = 'vf-sections-list';
                jsonObject.blocks.forEach((blk, bIdx) => {
                    const blkCard = document.createElement('div');
                    blkCard.className = 'vf-section-card';
                    const questions = Array.isArray(blk.questions) ? blk.questions : [];
                    let qHtml = questions.map((q, qIdx) => `
                        <div class="vf-question-card" data-bidx="${bIdx}" data-qidx="${qIdx}">
                            <div class="vf-question-header">
                                <span class="vf-question-num">Question ${qIdx + 1} (Asker: Player ${q.asker_id || 1})</span>
                                <button type="button" class="vf-btn-delete vf-btn-del-ig-q" data-bidx="${bIdx}" data-qidx="${qIdx}">Delete Question</button>
                            </div>
                            <div class="field-group" style="margin-bottom: 0.5rem;">
                                <input type="text" class="vf-ig-q-text" data-bidx="${bIdx}" data-qidx="${qIdx}" value="${this._escapeHtml(q.question || '')}" placeholder="Question text..." />
                            </div>
                            <div class="field-group" style="margin-bottom: 0.5rem;">
                                <label style="font-size: 0.78rem; color: #94a3b8;">Options (csv)</label>
                                <input type="text" class="vf-ig-q-opts" data-bidx="${bIdx}" data-qidx="${qIdx}" value="${this._escapeHtml((q.options || []).join(', '))}" placeholder="Option A, Option B, Option C" />
                            </div>
                            <div class="field-group">
                                <label style="font-size: 0.78rem; color: #94a3b8;">Correct Answer</label>
                                <input type="text" class="vf-ig-q-ans" data-bidx="${bIdx}" data-qidx="${qIdx}" value="${this._escapeHtml(q.correct_answer || q.answer || '')}" placeholder="Correct option text..." />
                            </div>
                        </div>
                    `).join('');

                    blkCard.innerHTML = `
                        <div class="vf-section-header">
                            <span class="vf-section-badge">Player ${blk.text_holder_id || bIdx + 1}'s Info</span>
                            <button type="button" class="vf-btn-delete vf-btn-del-blk" data-bidx="${bIdx}">Delete Block</button>
                        </div>
                        <div class="vf-section-body">
                            <div class="field-group">
                                <label>Information</label>
                                <textarea class="vf-blk-text" data-bidx="${bIdx}" rows="2" placeholder="Text for this player...">${this._escapeHtml(blk.text || '')}</textarea>
                            </div>
                            <div class="vf-sub-section" style="margin-top: 0.75rem;">
                                <div class="vf-sub-header">
                                    <span>❓ Partner Questions</span>
                                    <button type="button" class="vf-btn-secondary vf-btn-add-ig-q" data-bidx="${bIdx}">+ Add Question</button>
                                </div>
                                <div>${qHtml || '<p class="vf-empty-sub">No questions added.</p>'}</div>
                            </div>
                        </div>
                    `;
                    blocksSec.appendChild(blkCard);
                });
                container.appendChild(blocksSec);

                const addBlkBar = document.createElement('div');
                addBlkBar.className = 'vf-add-sec-bar';
                addBlkBar.innerHTML = `<button type="button" class="vf-add-btn" id="vf-btn-add-blk">+ Add Player Info Block</button>`;
                container.appendChild(addBlkBar);
            }
        };

        render();

        const syncState = () => {
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        };

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-ig-title')) {
                if (jsonObject.title !== undefined) jsonObject.title = t.value;
                else jsonObject.topic = t.value;
            } else if (t.classList.contains('vf-ig-players')) {
                jsonObject.player_count = parseInt(t.value, 10) || 2;
            } else if (t.classList.contains('vf-ig-scenario')) {
                jsonObject.scenario_description = t.value;
            } else if (t.classList.contains('vf-gap-text')) {
                const gIdx = parseInt(t.dataset.gidx, 10);
                if (jsonObject.gaps && jsonObject.gaps[gIdx]) jsonObject.gaps[gIdx].text = t.value;
            } else if (t.classList.contains('vf-gap-ans')) {
                const gIdx = parseInt(t.dataset.gidx, 10);
                if (jsonObject.gaps && jsonObject.gaps[gIdx]) jsonObject.gaps[gIdx].answer = t.value;
            } else if (t.classList.contains('vf-blk-text')) {
                const bIdx = parseInt(t.dataset.bidx, 10);
                if (jsonObject.blocks && jsonObject.blocks[bIdx]) jsonObject.blocks[bIdx].text = t.value;
            } else if (t.classList.contains('vf-ig-q-text')) {
                const bIdx = parseInt(t.dataset.bidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (jsonObject.blocks[bIdx] && jsonObject.blocks[bIdx].questions[qIdx]) {
                    jsonObject.blocks[bIdx].questions[qIdx].question = t.value;
                }
            } else if (t.classList.contains('vf-ig-q-opts')) {
                const bIdx = parseInt(t.dataset.bidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (jsonObject.blocks[bIdx] && jsonObject.blocks[bIdx].questions[qIdx]) {
                    jsonObject.blocks[bIdx].questions[qIdx].options = t.value.split(',').map(s => s.trim()).filter(Boolean);
                }
            } else if (t.classList.contains('vf-ig-q-ans')) {
                const bIdx = parseInt(t.dataset.bidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (jsonObject.blocks[bIdx] && jsonObject.blocks[bIdx].questions[qIdx]) {
                    jsonObject.blocks[bIdx].questions[qIdx].correct_answer = t.value;
                }
            }
            syncState();
        });

        container.addEventListener('click', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-btn-add-gap')) {
                if (!Array.isArray(jsonObject.gaps)) jsonObject.gaps = [];
                jsonObject.gaps.push({ text: "New gap text", answer: "answer", type: "text" });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-gap')) {
                const gIdx = parseInt(t.dataset.gidx, 10);
                jsonObject.gaps.splice(gIdx, 1);
                render(); syncState();
            } else if (t.id === 'vf-btn-add-blk') {
                if (!Array.isArray(jsonObject.blocks)) jsonObject.blocks = [];
                const nextId = jsonObject.blocks.length + 1;
                jsonObject.blocks.push({ text_holder_id: nextId, text: "Info text for player " + nextId, questions: [] });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-blk')) {
                const bIdx = parseInt(t.dataset.bidx, 10);
                jsonObject.blocks.splice(bIdx, 1);
                render(); syncState();
            } else if (t.classList.contains('vf-btn-add-ig-q')) {
                const bIdx = parseInt(t.dataset.bidx, 10);
                if (jsonObject.blocks[bIdx]) {
                    if (!Array.isArray(jsonObject.blocks[bIdx].questions)) jsonObject.blocks[bIdx].questions = [];
                    jsonObject.blocks[bIdx].questions.push({ asker_id: 1, question: "New Question?", options: ["Option A", "Option B"], correct_answer: "Option A" });
                    render(); syncState();
                }
            } else if (t.classList.contains('vf-btn-del-ig-q')) {
                const bIdx = parseInt(t.dataset.bidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (jsonObject.blocks[bIdx] && jsonObject.blocks[bIdx].questions) {
                    jsonObject.blocks[bIdx].questions.splice(qIdx, 1);
                    render(); syncState();
                }
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderSpeedReviewJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';
        const targetObj = Array.isArray(jsonObject) ? (jsonObject[0] || {}) : jsonObject;

        const render = () => {
            container.innerHTML = '';
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>🏎️ Speed Review Configuration (tj-speed-review)</span>
                </div>
                <div class="field-group">
                    <label>Title</label>
                    <input type="text" class="vf-sr-title" value="${this._escapeHtml(targetObj.title || '')}" placeholder="Activity title..." />
                </div>
            `;
            container.appendChild(rootSec);

            const deckList = targetObj.deck || targetObj.cards;
            if (Array.isArray(deckList)) {
                const deckSec = document.createElement('div');
                deckSec.className = 'vf-section';
                let deckHtml = deckList.map((card, cIdx) => `
                    <div class="vf-vocab-row" data-cidx="${cIdx}">
                        <input type="text" class="vf-sr-term" data-cidx="${cIdx}" value="${this._escapeHtml(card.term || card.q || '')}" placeholder="Term / Prompt..." />
                        <input type="text" class="vf-sr-def" data-cidx="${cIdx}" value="${this._escapeHtml(card.definition || card.a || '')}" placeholder="Definition / Answer..." />
                        <button type="button" class="vf-btn-icon-del vf-btn-del-card" data-cidx="${cIdx}">✕</button>
                    </div>
                `).join('');
                deckSec.innerHTML = `
                    <div class="vf-sub-header">
                        <span>🃏 Flashcard Deck</span>
                        <button type="button" class="vf-btn-secondary vf-btn-add-card">+ Add Card</button>
                    </div>
                    <div>${deckHtml || '<p class="vf-empty-sub">No cards in deck.</p>'}</div>
                `;
                container.appendChild(deckSec);
            }

            if (Array.isArray(targetObj.questions)) {
                const qSec = document.createElement('div');
                qSec.className = 'vf-section';
                let qHtml = targetObj.questions.map((q, qIdx) => `
                    <div class="vf-question-card" data-qidx="${qIdx}">
                        <div class="vf-question-header">
                            <span class="vf-question-num">Question ${qIdx + 1} (${this._escapeHtml(q.category || 'General')})</span>
                            <button type="button" class="vf-btn-delete vf-btn-del-sr-q" data-qidx="${qIdx}">Delete Question</button>
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <input type="text" class="vf-sr-q-cat" data-qidx="${qIdx}" value="${this._escapeHtml(q.category || '')}" placeholder="Category (e.g. Verb → Noun)" />
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <input type="text" class="vf-sr-q-text" data-qidx="${qIdx}" value="${this._escapeHtml(q.question || '')}" placeholder="Question prompt..." />
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Options (csv)</label>
                            <input type="text" class="vf-sr-q-opts" data-qidx="${qIdx}" value="${this._escapeHtml((q.options || []).join(', '))}" placeholder="Option A, Option B, Option C, Option D" />
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Correct Answer</label>
                            <input type="text" class="vf-sr-q-ans" data-qidx="${qIdx}" value="${this._escapeHtml(q.answer || '')}" placeholder="Correct answer text..." />
                        </div>
                        <div class="field-group">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Explanation</label>
                            <input type="text" class="vf-sr-q-exp" data-qidx="${qIdx}" value="${this._escapeHtml(q.explanation || '')}" placeholder="Explanation..." />
                        </div>
                    </div>
                `).join('');

                qSec.innerHTML = `
                    <div class="vf-sub-header">
                        <span>❓ Questions</span>
                        <button type="button" class="vf-btn-secondary vf-btn-add-sr-q">+ Add Question</button>
                    </div>
                    <div>${qHtml || '<p class="vf-empty-sub">No questions added.</p>'}</div>
                `;
                container.appendChild(qSec);
            }
        };

        render();

        const syncState = () => {
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        };

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-sr-title')) {
                targetObj.title = t.value;
            } else if (t.classList.contains('vf-sr-term')) {
                const cIdx = parseInt(t.dataset.cidx, 10);
                const deck = targetObj.deck || targetObj.cards;
                if (deck && deck[cIdx]) {
                    if (deck[cIdx].term !== undefined) deck[cIdx].term = t.value;
                    else deck[cIdx].q = t.value;
                }
            } else if (t.classList.contains('vf-sr-def')) {
                const cIdx = parseInt(t.dataset.cidx, 10);
                const deck = targetObj.deck || targetObj.cards;
                if (deck && deck[cIdx]) {
                    if (deck[cIdx].definition !== undefined) deck[cIdx].definition = t.value;
                    else deck[cIdx].a = t.value;
                }
            } else if (t.classList.contains('vf-sr-q-cat')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions && targetObj.questions[qIdx]) targetObj.questions[qIdx].category = t.value;
            } else if (t.classList.contains('vf-sr-q-text')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions && targetObj.questions[qIdx]) targetObj.questions[qIdx].question = t.value;
            } else if (t.classList.contains('vf-sr-q-opts')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions && targetObj.questions[qIdx]) {
                    targetObj.questions[qIdx].options = t.value.split(',').map(s => s.trim()).filter(Boolean);
                }
            } else if (t.classList.contains('vf-sr-q-ans')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions && targetObj.questions[qIdx]) targetObj.questions[qIdx].answer = t.value;
            } else if (t.classList.contains('vf-sr-q-exp')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions && targetObj.questions[qIdx]) targetObj.questions[qIdx].explanation = t.value;
            }
            syncState();
        });

        container.addEventListener('click', (e) => {
            const t = e.target;
            const deck = targetObj.deck || targetObj.cards;
            if (t.classList.contains('vf-btn-add-card')) {
                if (!targetObj.deck && !targetObj.cards) targetObj.deck = [];
                const list = targetObj.deck || targetObj.cards;
                list.push({ term: "New Term", definition: "Definition text" });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-card')) {
                const cIdx = parseInt(t.dataset.cidx, 10);
                if (Array.isArray(deck)) deck.splice(cIdx, 1);
                render(); syncState();
            } else if (t.classList.contains('vf-btn-add-sr-q')) {
                if (!Array.isArray(targetObj.questions)) targetObj.questions = [];
                targetObj.questions.push({ category: "General", question: "New Question?", options: ["Option A", "Option B"], answer: "Option A" });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-sr-q')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (Array.isArray(targetObj.questions)) targetObj.questions.splice(qIdx, 1);
                render(); syncState();
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderChapterBookJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';
        if (!Array.isArray(jsonObject.chapters)) jsonObject.chapters = [];

        const render = () => {
            container.innerHTML = '';
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>📚 Chapter Book Configuration (tj-chapter-book)</span>
                </div>
                <div class="vf-grid-2">
                    <div class="field-group">
                        <label>Title</label>
                        <input type="text" class="vf-cb-title" value="${this._escapeHtml(jsonObject.title || '')}" placeholder="Book title..." />
                    </div>
                    <div class="field-group">
                        <label>Subtitle</label>
                        <input type="text" class="vf-cb-sub" value="${this._escapeHtml(jsonObject.subtitle || jsonObject.author || '')}" placeholder="Subtitle or Author..." />
                    </div>
                </div>
            `;
            container.appendChild(rootSec);

            const chapSec = document.createElement('div');
            chapSec.className = 'vf-sections-list';
            jsonObject.chapters.forEach((chap, chIdx) => {
                const chapCard = document.createElement('div');
                chapCard.className = 'vf-section-card';
                const quiz = Array.isArray(chap.quiz) ? chap.quiz : [];
                let quizHtml = quiz.map((q, qIdx) => {
                    const opts = Array.isArray(q.options) ? q.options : [];
                    let optsHtml = opts.map((opt, oIdx) => {
                        const isCorrect = (opt.value === 'correct' || opt.correct);
                        return `
                            <div class="vf-option-row">
                                <input type="radio" name="cb-q-ans-${chIdx}-${qIdx}" class="vf-cb-ans-radio" ${isCorrect ? 'checked' : ''} data-chidx="${chIdx}" data-qidx="${qIdx}" data-oidx="${oIdx}" />
                                <input type="text" class="vf-cb-opt-text" data-chidx="${chIdx}" data-qidx="${qIdx}" data-oidx="${oIdx}" value="${this._escapeHtml(opt.text || opt.label || '')}" placeholder="Option text..." />
                                <button type="button" class="vf-btn-icon-del vf-btn-del-cb-opt" data-chidx="${chIdx}" data-qidx="${qIdx}" data-oidx="${oIdx}">✕</button>
                            </div>
                        `;
                    }).join('');

                    return `
                        <div class="vf-question-card" data-chidx="${chIdx}" data-qidx="${qIdx}">
                            <div class="vf-question-header">
                                <span class="vf-question-num">Question ${qIdx + 1}</span>
                                <button type="button" class="vf-btn-delete vf-btn-del-cb-q" data-chidx="${chIdx}" data-qidx="${qIdx}">Delete Question</button>
                            </div>
                            <div class="field-group" style="margin-bottom: 0.5rem;">
                                <input type="text" class="vf-cb-q-text" data-chidx="${chIdx}" data-qidx="${qIdx}" value="${this._escapeHtml(q.question || '')}" placeholder="Comprehension question..." />
                            </div>
                            <div class="vf-options-grid">${optsHtml}</div>
                            <button type="button" class="vf-btn-secondary vf-btn-add-cb-opt" data-chidx="${chIdx}" data-qidx="${qIdx}">+ Add Option</button>
                        </div>
                    `;
                }).join('');

                chapCard.innerHTML = `
                    <div class="vf-section-header">
                        <span class="vf-section-badge">Chapter ${chIdx + 1}</span>
                        <input type="text" class="vf-cb-chap-title" data-chidx="${chIdx}" value="${this._escapeHtml(chap.title || '')}" placeholder="Chapter Title..." />
                        <button type="button" class="vf-btn-delete vf-btn-del-chap" data-chidx="${chIdx}">Delete Chapter</button>
                    </div>
                    <div class="vf-section-body">
                        <div class="field-group">
                            <label>Content</label>
                            <textarea class="vf-cb-chap-content" data-chidx="${chIdx}" rows="4" placeholder="Story text for this chapter...">${this._escapeHtml(chap.content || '')}</textarea>
                        </div>
                        <div class="field-group">
                            <label>Translation</label>
                            <textarea class="vf-cb-chap-trans" data-chidx="${chIdx}" rows="2" placeholder="Translation text...">${this._escapeHtml(chap.translation || '')}</textarea>
                        </div>
                        <div class="vf-sub-section" style="margin-top: 0.75rem;">
                            <div class="vf-sub-header">
                                <span>❓ Chapter Comprehension Quiz</span>
                                <button type="button" class="vf-btn-secondary vf-btn-add-cb-q" data-chidx="${chIdx}">+ Add Quiz Question</button>
                            </div>
                            <div>${quizHtml || '<p class="vf-empty-sub">No quiz questions for this chapter.</p>'}</div>
                        </div>
                    </div>
                `;
                chapSec.appendChild(chapCard);
            });
            container.appendChild(chapSec);

            const addChapBar = document.createElement('div');
            addChapBar.className = 'vf-add-sec-bar';
            addChapBar.innerHTML = `<button type="button" class="vf-add-btn" id="vf-btn-add-chap">+ Add Chapter</button>`;
            container.appendChild(addChapBar);
        };

        render();

        const syncState = () => {
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        };

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-cb-title')) jsonObject.title = t.value;
            else if (t.classList.contains('vf-cb-sub')) jsonObject.subtitle = t.value;
            else if (t.classList.contains('vf-cb-chap-title')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                if (jsonObject.chapters[chIdx]) jsonObject.chapters[chIdx].title = t.value;
            } else if (t.classList.contains('vf-cb-chap-content')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                if (jsonObject.chapters[chIdx]) jsonObject.chapters[chIdx].content = t.value;
            } else if (t.classList.contains('vf-cb-chap-trans')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                if (jsonObject.chapters[chIdx]) jsonObject.chapters[chIdx].translation = t.value;
            } else if (t.classList.contains('vf-cb-q-text')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (jsonObject.chapters[chIdx] && jsonObject.chapters[chIdx].quiz[qIdx]) {
                    jsonObject.chapters[chIdx].quiz[qIdx].question = t.value;
                }
            } else if (t.classList.contains('vf-cb-opt-text')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                const oIdx = parseInt(t.dataset.oidx, 10);
                if (jsonObject.chapters[chIdx] && jsonObject.chapters[chIdx].quiz[qIdx] && jsonObject.chapters[chIdx].quiz[qIdx].options[oIdx]) {
                    jsonObject.chapters[chIdx].quiz[qIdx].options[oIdx].text = t.value;
                }
            }
            syncState();
        });

        container.addEventListener('change', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-cb-ans-radio')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                const oIdx = parseInt(t.dataset.oidx, 10);
                if (jsonObject.chapters[chIdx] && jsonObject.chapters[chIdx].quiz[qIdx]) {
                    jsonObject.chapters[chIdx].quiz[qIdx].options.forEach((opt, idx) => {
                        opt.value = (idx === oIdx) ? 'correct' : 'wrong';
                    });
                    syncState();
                }
            }
        });

        container.addEventListener('click', (e) => {
            const t = e.target;
            if (t.id === 'vf-btn-add-chap') {
                jsonObject.chapters.push({
                    id: "chapter-" + (jsonObject.chapters.length + 1),
                    title: "Chapter " + (jsonObject.chapters.length + 1) + ": New Chapter",
                    content: "Chapter content goes here...",
                    translation: "",
                    quiz: []
                });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-chap')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                jsonObject.chapters.splice(chIdx, 1);
                render(); syncState();
            } else if (t.classList.contains('vf-btn-add-cb-q')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                if (jsonObject.chapters[chIdx]) {
                    if (!Array.isArray(jsonObject.chapters[chIdx].quiz)) jsonObject.chapters[chIdx].quiz = [];
                    jsonObject.chapters[chIdx].quiz.push({
                        question: "Comprehension Question?",
                        options: [ { value: "correct", text: "Correct Option" }, { value: "wrong", text: "Incorrect Option" } ]
                    });
                    render(); syncState();
                }
            } else if (t.classList.contains('vf-btn-del-cb-q')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (jsonObject.chapters[chIdx] && jsonObject.chapters[chIdx].quiz) {
                    jsonObject.chapters[chIdx].quiz.splice(qIdx, 1);
                    render(); syncState();
                }
            } else if (t.classList.contains('vf-btn-add-cb-opt')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (jsonObject.chapters[chIdx] && jsonObject.chapters[chIdx].quiz[qIdx]) {
                    jsonObject.chapters[chIdx].quiz[qIdx].options.push({ value: "wrong", text: "New Option" });
                    render(); syncState();
                }
            } else if (t.classList.contains('vf-btn-del-cb-opt')) {
                const chIdx = parseInt(t.dataset.chidx, 10);
                const qIdx = parseInt(t.dataset.qidx, 10);
                const oIdx = parseInt(t.dataset.oidx, 10);
                if (jsonObject.chapters[chIdx] && jsonObject.chapters[chIdx].quiz[qIdx]) {
                    jsonObject.chapters[chIdx].quiz[qIdx].options.splice(oIdx, 1);
                    render(); syncState();
                }
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderGrammarHeartsJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';
        const targetObj = Array.isArray(jsonObject) ? (jsonObject[0] || {}) : jsonObject;
        if (!Array.isArray(targetObj.questions)) targetObj.questions = [];

        const render = () => {
            container.innerHTML = '';
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>❤️ Grammar Hearts Configuration (tj-grammar-hearts)</span>
                </div>
                <div class="field-group">
                    <label>Title</label>
                    <input type="text" class="vf-gh-title" value="${this._escapeHtml(targetObj.title || '')}" placeholder="Activity title..." />
                </div>
            `;
            container.appendChild(rootSec);

            const qSec = document.createElement('div');
            qSec.className = 'vf-section';
            let qHtml = targetObj.questions.map((q, qIdx) => {
                const type = q.type || 'multiple-choice';
                let typeFields = '';
                if (type === 'multiple-choice') {
                    typeFields = `
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Question</label>
                            <input type="text" class="vf-gh-q-text" data-qidx="${qIdx}" value="${this._escapeHtml(q.question || '')}" placeholder="e.g. She ___ every morning." />
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Options (csv)</label>
                            <input type="text" class="vf-gh-q-opts" data-qidx="${qIdx}" value="${this._escapeHtml((q.options || []).join(', '))}" placeholder="runs, is running, run" />
                        </div>
                    `;
                } else if (type === 'fill-in-the-blank') {
                    const ansStr = Array.isArray(q.answer) ? q.answer.join(', ') : (q.answer || '');
                    typeFields = `
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Question</label>
                            <input type="text" class="vf-gh-q-text" data-qidx="${qIdx}" value="${this._escapeHtml(q.question || '')}" placeholder="e.g. I ___ to school right now." />
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Acceptable Answers (csv)</label>
                            <input type="text" class="vf-gh-q-ans" data-qidx="${qIdx}" value="${this._escapeHtml(ansStr)}" placeholder="am walking, 'm walking" />
                        </div>
                    `;
                } else if (type === 'scramble') {
                    typeFields = `
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Sentence</label>
                            <input type="text" class="vf-gh-q-sent" data-qidx="${qIdx}" value="${this._escapeHtml(q.sentence || '')}" placeholder="They are playing football in the park." />
                        </div>
                    `;
                }

                return `
                    <div class="vf-question-card" data-qidx="${qIdx}">
                        <div class="vf-question-header">
                            <span class="vf-question-num">Question ${qIdx + 1} [${type}]</span>
                            <button type="button" class="vf-btn-delete vf-btn-del-gh-q" data-qidx="${qIdx}">Delete</button>
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Instruction</label>
                            <input type="text" class="vf-gh-q-inst" data-qidx="${qIdx}" value="${this._escapeHtml(q.instruction || '')}" placeholder="Instruction..." />
                        </div>
                        ${typeFields}
                        <div class="field-group">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Explanation</label>
                            <input type="text" class="vf-gh-q-exp" data-qidx="${qIdx}" value="${this._escapeHtml(q.explanation || '')}" placeholder="Explanation..." />
                        </div>
                    </div>
                `;
            }).join('');

            qSec.innerHTML = `
                <div class="vf-sub-header">
                    <span>❓ Question Challenges</span>
                    <div style="display: flex; gap: 0.4rem;">
                        <button type="button" class="vf-btn-secondary vf-btn-add-gh-q" data-qtype="multiple-choice">+ MC</button>
                        <button type="button" class="vf-btn-secondary vf-btn-add-gh-q" data-qtype="fill-in-the-blank">+ Fill Blank</button>
                        <button type="button" class="vf-btn-secondary vf-btn-add-gh-q" data-qtype="scramble">+ Scramble</button>
                    </div>
                </div>
                <div>${qHtml || '<p class="vf-empty-sub">No questions added.</p>'}</div>
            `;
            container.appendChild(qSec);
        };

        render();

        const syncState = () => {
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        };

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-gh-title')) targetObj.title = t.value;
            else if (t.classList.contains('vf-gh-q-inst')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions[qIdx]) targetObj.questions[qIdx].instruction = t.value;
            } else if (t.classList.contains('vf-gh-q-text')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions[qIdx]) targetObj.questions[qIdx].question = t.value;
            } else if (t.classList.contains('vf-gh-q-opts')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions[qIdx]) targetObj.questions[qIdx].options = t.value.split(',').map(s => s.trim()).filter(Boolean);
            } else if (t.classList.contains('vf-gh-q-ans')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions[qIdx]) targetObj.questions[qIdx].answer = t.value.split(',').map(s => s.trim()).filter(Boolean);
            } else if (t.classList.contains('vf-gh-q-sent')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions[qIdx]) targetObj.questions[qIdx].sentence = t.value;
            } else if (t.classList.contains('vf-gh-q-exp')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.questions[qIdx]) targetObj.questions[qIdx].explanation = t.value;
            }
            syncState();
        });

        container.addEventListener('click', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-btn-add-gh-q')) {
                const qtype = t.dataset.qtype || 'multiple-choice';
                if (qtype === 'multiple-choice') {
                    targetObj.questions.push({ type: 'multiple-choice', instruction: 'Choose the correct form:', question: 'She ___ every day.', options: ['runs', 'is running'], correctIndex: 0, explanation: '' });
                } else if (qtype === 'fill-in-the-blank') {
                    targetObj.questions.push({ type: 'fill-in-the-blank', instruction: 'Fill in the blank:', question: 'I ___ to school right now.', answer: ['am walking'], explanation: '' });
                } else if (qtype === 'scramble') {
                    targetObj.questions.push({ type: 'scramble', instruction: 'Unscramble the sentence:', sentence: 'They are playing football.', explanation: '' });
                }
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-gh-q')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                targetObj.questions.splice(qIdx, 1);
                render(); syncState();
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderListeningJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';
        const targetObj = Array.isArray(jsonObject) ? (jsonObject[0] || {}) : jsonObject;

        const render = () => {
            container.innerHTML = '';
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>🎧 Listening Lesson Configuration (tj-listening)</span>
                </div>
                <div class="field-group">
                    <label>Title</label>
                    <input type="text" class="vf-ls-title" value="${this._escapeHtml(targetObj.title || '')}" placeholder="Lesson title..." />
                </div>
                <div class="field-group" style="margin-top: 0.5rem;">
                    <label>Intro</label>
                    <textarea class="vf-ls-intro-text" rows="2" placeholder="Introductory instructions...">${this._escapeHtml(targetObj.intro ? targetObj.intro.text : '')}</textarea>
                </div>
            `;
            container.appendChild(rootSec);

            if (Array.isArray(targetObj.vocab)) {
                const vSec = document.createElement('div');
                vSec.className = 'vf-section';
                let vHtml = targetObj.vocab.map((v, vIdx) => `
                    <div class="vf-vocab-row" data-vidx="${vIdx}">
                        <input type="text" class="vf-ls-v-word" data-vidx="${vIdx}" value="${this._escapeHtml(v.word || '')}" placeholder="Word..." />
                        <input type="text" class="vf-ls-v-def" data-vidx="${vIdx}" value="${this._escapeHtml(v.definition || '')}" placeholder="Definition..." />
                        <button type="button" class="vf-btn-icon-del vf-btn-del-ls-v" data-vidx="${vIdx}">✕</button>
                    </div>
                `).join('');
                vSec.innerHTML = `
                    <div class="vf-sub-header">
                        <span>📚 Vocabulary Preview</span>
                        <button type="button" class="vf-btn-secondary vf-btn-add-ls-v">+ Add Vocab</button>
                    </div>
                    <div>${vHtml || '<p class="vf-empty-sub">No vocabulary words.</p>'}</div>
                `;
                container.appendChild(vSec);
            }

            const lObj = targetObj.listening || {};
            const lSec = document.createElement('div');
            lSec.className = 'vf-section';
            const questions = Array.isArray(lObj.questions) ? lObj.questions : [];
            let qHtml = questions.map((q, qIdx) => `
                <div class="vf-question-card" data-qidx="${qIdx}">
                    <div class="vf-question-header">
                        <span class="vf-question-num">Question ${qIdx + 1}</span>
                        <button type="button" class="vf-btn-delete vf-btn-del-ls-q" data-qidx="${qIdx}">Delete Question</button>
                    </div>
                    <div class="field-group" style="margin-bottom: 0.5rem;">
                        <input type="text" class="vf-ls-q-text" data-qidx="${qIdx}" value="${this._escapeHtml(q.question || '')}" placeholder="Comprehension Question..." />
                    </div>
                    <div class="field-group" style="margin-bottom: 0.5rem;">
                        <label style="font-size: 0.78rem; color: #94a3b8;">Options (csv)</label>
                        <input type="text" class="vf-ls-q-opts" data-qidx="${qIdx}" value="${this._escapeHtml((q.options || []).join(', '))}" placeholder="Option A, Option B, Option C" />
                    </div>
                    <div class="field-group">
                        <label style="font-size: 0.78rem; color: #94a3b8;">Correct Answer</label>
                        <input type="text" class="vf-ls-q-ans" data-qidx="${qIdx}" value="${this._escapeHtml(q.correct || q.answer || '')}" placeholder="Correct Option text..." />
                    </div>
                </div>
            `).join('');

            lSec.innerHTML = `
                <div class="vf-sub-header">
                    <span>💬 Transcript & Comprehension</span>
                </div>
                <div class="field-group" style="margin-bottom: 0.75rem;">
                    <label>Transcript</label>
                    <textarea class="vf-ls-transcript" rows="4" placeholder="Enter dialogue transcript...">${this._escapeHtml(lObj.transcript || '')}</textarea>
                </div>
                <div class="vf-sub-section">
                    <div class="vf-sub-header">
                        <span>❓ Questions</span>
                        <button type="button" class="vf-btn-secondary vf-btn-add-ls-q">+ Add Question</button>
                    </div>
                    <div>${qHtml || '<p class="vf-empty-sub">No questions added.</p>'}</div>
                </div>
            `;
            container.appendChild(lSec);
        };

        render();

        const syncState = () => {
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        };

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-ls-title')) targetObj.title = t.value;
            else if (t.classList.contains('vf-ls-intro-text')) {
                if (!targetObj.intro) targetObj.intro = {};
                targetObj.intro.text = t.value;
            } else if (t.classList.contains('vf-ls-v-word')) {
                const vIdx = parseInt(t.dataset.vidx, 10);
                if (targetObj.vocab && targetObj.vocab[vIdx]) targetObj.vocab[vIdx].word = t.value;
            } else if (t.classList.contains('vf-ls-v-def')) {
                const vIdx = parseInt(t.dataset.vidx, 10);
                if (targetObj.vocab && targetObj.vocab[vIdx]) targetObj.vocab[vIdx].definition = t.value;
            } else if (t.classList.contains('vf-ls-transcript')) {
                if (!targetObj.listening) targetObj.listening = {};
                targetObj.listening.transcript = t.value;
            } else if (t.classList.contains('vf-ls-q-text')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.listening && targetObj.listening.questions[qIdx]) targetObj.listening.questions[qIdx].question = t.value;
            } else if (t.classList.contains('vf-ls-q-opts')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.listening && targetObj.listening.questions[qIdx]) {
                    targetObj.listening.questions[qIdx].options = t.value.split(',').map(s => s.trim()).filter(Boolean);
                }
            } else if (t.classList.contains('vf-ls-q-ans')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.listening && targetObj.listening.questions[qIdx]) targetObj.listening.questions[qIdx].correct = t.value;
            }
            syncState();
        });

        container.addEventListener('click', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-btn-add-ls-v')) {
                if (!Array.isArray(targetObj.vocab)) targetObj.vocab = [];
                targetObj.vocab.push({ word: "New Word", definition: "Definition..." });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-ls-v')) {
                const vIdx = parseInt(t.dataset.vidx, 10);
                if (Array.isArray(targetObj.vocab)) targetObj.vocab.splice(vIdx, 1);
                render(); syncState();
            } else if (t.classList.contains('vf-btn-add-ls-q')) {
                if (!targetObj.listening) targetObj.listening = { questions: [] };
                if (!Array.isArray(targetObj.listening.questions)) targetObj.listening.questions = [];
                targetObj.listening.questions.push({ question: "Comprehension Question?", options: ["Option A", "Option B"], correct: "Option A" });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-ls-q')) {
                const qIdx = parseInt(t.dataset.qidx, 10);
                if (targetObj.listening && targetObj.listening.questions) targetObj.listening.questions.splice(qIdx, 1);
                render(); syncState();
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderPronunciationJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';
        if (!Array.isArray(jsonObject.activities)) jsonObject.activities = [];

        const render = () => {
            container.innerHTML = '';
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>🗣️ Pronunciation Configuration (tj-pronunciation)</span>
                </div>
                <div class="field-group">
                    <label>Title</label>
                    <input type="text" class="vf-pr-title" value="${this._escapeHtml(jsonObject.title || '')}" placeholder="Title..." />
                </div>
            `;
            container.appendChild(rootSec);

            const actSec = document.createElement('div');
            actSec.className = 'vf-section';
            let actHtml = jsonObject.activities.map((act, aIdx) => {
                const type = act.type || 'listen_record';
                return `
                    <div class="vf-question-card" data-aidx="${aIdx}">
                        <div class="vf-question-header">
                            <span class="vf-question-num">Activity ${aIdx + 1} [${type}]</span>
                            <button type="button" class="vf-btn-delete vf-btn-del-pr-act" data-aidx="${aIdx}">Delete</button>
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Target Text</label>
                            <input type="text" class="vf-pr-text" data-aidx="${aIdx}" value="${this._escapeHtml(act.targetText || act.audioText || '')}" placeholder="Target text..." />
                        </div>
                        <div class="field-group" style="margin-bottom: 0.5rem;">
                            <label style="font-size: 0.78rem; color: #94a3b8;">Options / Focus</label>
                            <input type="text" class="vf-pr-extra" data-aidx="${aIdx}" value="${this._escapeHtml(Array.isArray(act.options) ? act.options.join(', ') : (act.focus || ''))}" placeholder="Options or phonetic focus..." />
                        </div>
                    </div>
                `;
            }).join('');

            actSec.innerHTML = `
                <div class="vf-sub-header">
                    <span>🗣️ Pronunciation Activities</span>
                    <button type="button" class="vf-btn-secondary vf-btn-add-pr-act">+ Add Activity</button>
                </div>
                <div>${actHtml || '<p class="vf-empty-sub">No activities added.</p>'}</div>
            `;
            container.appendChild(actSec);
        };

        render();

        const syncState = () => {
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        };

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-pr-title')) jsonObject.title = t.value;
            else if (t.classList.contains('vf-pr-text')) {
                const aIdx = parseInt(t.dataset.aidx, 10);
                if (jsonObject.activities[aIdx]) {
                    if (jsonObject.activities[aIdx].targetText !== undefined) jsonObject.activities[aIdx].targetText = t.value;
                    else jsonObject.activities[aIdx].audioText = t.value;
                }
            }
            syncState();
        });

        container.addEventListener('click', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-btn-add-pr-act')) {
                jsonObject.activities.push({ type: 'listen_record', targetText: 'Practice sentence here.' });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-pr-act')) {
                const aIdx = parseInt(t.dataset.aidx, 10);
                jsonObject.activities.splice(aIdx, 1);
                render(); syncState();
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderReaderJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';
        const list = Array.isArray(jsonObject) ? jsonObject : (jsonObject.sentences || jsonObject.pages || []);

        const render = () => {
            container.innerHTML = '';
            const rootSec = document.createElement('div');
            rootSec.className = 'vf-section vf-root-config';
            rootSec.innerHTML = `
                <div class="vf-section-title">
                    <span>📖 Reader Configuration (tj-reader / lbl-reader)</span>
                </div>
                <div class="field-group">
                    <label>Title</label>
                    <input type="text" class="vf-rd-title" value="${this._escapeHtml(jsonObject.storyTitle || jsonObject.title || '')}" placeholder="Story title..." />
                </div>
            `;
            container.appendChild(rootSec);

            const rSec = document.createElement('div');
            rSec.className = 'vf-section';
            let rHtml = list.map((item, iIdx) => `
                <div class="vf-question-card" data-iidx="${iIdx}">
                    <div class="vf-question-header">
                        <span class="vf-question-num">Sentence ${iIdx + 1}</span>
                        <button type="button" class="vf-btn-delete vf-btn-del-rd-item" data-iidx="${iIdx}">Delete</button>
                    </div>
                    <div class="field-group" style="margin-bottom: 0.5rem;">
                        <label style="font-size: 0.78rem; color: #94a3b8;">Original Sentence</label>
                        <input type="text" class="vf-rd-orig" data-iidx="${iIdx}" value="${this._escapeHtml(item.original || item.text || '')}" placeholder="Original sentence..." />
                    </div>
                    <div class="field-group" style="margin-bottom: 0.5rem;">
                        <label style="font-size: 0.78rem; color: #94a3b8;">Full Translation</label>
                        <input type="text" class="vf-rd-trans" data-iidx="${iIdx}" value="${this._escapeHtml(item.fullTranslation || item.translation || '')}" placeholder="Full translation..." />
                    </div>
                    <div class="field-group">
                        <label style="font-size: 0.78rem; color: #94a3b8;">Translation Options (csv)</label>
                        <input type="text" class="vf-rd-opts" data-iidx="${iIdx}" value="${this._escapeHtml((item.translationOptions || []).join(', '))}" placeholder="Option A, Option B" />
                    </div>
                </div>
            `).join('');

            rSec.innerHTML = `
                <div class="vf-sub-header">
                    <span>📄 Story Sentences</span>
                    <button type="button" class="vf-btn-secondary vf-btn-add-rd-item">+ Add Sentence</button>
                </div>
                <div>${rHtml || '<p class="vf-empty-sub">No sentences added.</p>'}</div>
            `;
            container.appendChild(rSec);
        };

        render();

        const syncState = () => {
            this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
            this._updateOutputs();
        };

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-rd-title')) {
                if (jsonObject.storyTitle !== undefined) jsonObject.storyTitle = t.value;
                else jsonObject.title = t.value;
            } else if (t.classList.contains('vf-rd-orig')) {
                const iIdx = parseInt(t.dataset.iidx, 10);
                if (list[iIdx]) {
                    if (list[iIdx].original !== undefined) list[iIdx].original = t.value;
                    else list[iIdx].text = t.value;
                }
            } else if (t.classList.contains('vf-rd-trans')) {
                const iIdx = parseInt(t.dataset.iidx, 10);
                if (list[iIdx]) {
                    if (list[iIdx].fullTranslation !== undefined) list[iIdx].fullTranslation = t.value;
                    else list[iIdx].translation = t.value;
                }
            } else if (t.classList.contains('vf-rd-opts')) {
                const iIdx = parseInt(t.dataset.iidx, 10);
                if (list[iIdx]) {
                    list[iIdx].translationOptions = t.value.split(',').map(s => s.trim()).filter(Boolean);
                }
            }
            syncState();
        });

        container.addEventListener('click', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-btn-add-rd-item')) {
                list.push({ original: "New sentence text.", highlightIndex: 0, fullTranslation: "", translationOptions: [] });
                render(); syncState();
            } else if (t.classList.contains('vf-btn-del-rd-item')) {
                const iIdx = parseInt(t.dataset.iidx, 10);
                list.splice(iIdx, 1);
                render(); syncState();
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _renderGenericJsonVisualForm(jsonObject) {
        const container = document.createElement('div');
        container.className = 'vf-test-editor';

        const rootSec = document.createElement('div');
        rootSec.className = 'vf-section vf-root-config';
        rootSec.innerHTML = `
            <div class="vf-section-title">
                <span>⚙️ Dynamic Component Configuration</span>
            </div>
            <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 1rem;">
                Visual property editor for custom or structured JSON payloads. Edit properties below or switch to the Raw Code Editor tab.
            </p>
            <div id="generic-json-fields"></div>
        `;
        container.appendChild(rootSec);

        const fieldsContainer = rootSec.querySelector('#generic-json-fields');

        const renderFields = (obj, parentPath = '') => {
            if (!obj || typeof obj !== 'object') return '';
            let html = '';
            Object.keys(obj).forEach(key => {
                const val = obj[key];
                const fullKey = parentPath ? `${parentPath}.${key}` : key;
                if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
                    html += `
                        <div class="field-group" style="margin-bottom: 0.6rem;">
                            <label style="color: #cbd5e1; font-weight: 600;">${this._escapeHtml(key)}</label>
                            <input type="text" class="vf-generic-input" data-keypath="${fullKey}" value="${this._escapeHtml(val)}" />
                        </div>
                    `;
                }
            });
            return html;
        };

        fieldsContainer.innerHTML = renderFields(jsonObject) || '<p class="vf-empty-sub">No simple primitive fields detected at root level.</p>';

        container.addEventListener('input', (e) => {
            const t = e.target;
            if (t.classList.contains('vf-generic-input')) {
                const keypath = t.dataset.keypath;
                if (keypath) {
                    const keys = keypath.split('.');
                    let current = jsonObject;
                    for (let i = 0; i < keys.length - 1; i++) {
                        current = current[keys[i]];
                    }
                    current[keys[keys.length - 1]] = t.value;
                    this.parsedState.rawContent = JSON.stringify(jsonObject, null, 2);
                    this._updateOutputs();
                }
            }
        });

        this.visualFormContainer.appendChild(container);
    }

    _syncTestStateAndOutputs() {
        if (!this.parsedState.jsonObject) return;
        const obj = this.parsedState.jsonObject;
        const mode = obj._thresholdMode || 'disabled';
        if (mode === 'disabled') {
            obj.passThreshold = "0%";
            if (Array.isArray(obj.sections)) {
                obj.sections.forEach(s => s.passThreshold = "0%");
            }
        } else {
            const glob = (obj.passThreshold && obj.passThreshold !== '0%') ? obj.passThreshold : "70%";
            obj.passThreshold = glob;
            if (Array.isArray(obj.sections)) {
                obj.sections.forEach(s => {
                    if (!s.passThreshold || s.passThreshold === '0%') s.passThreshold = glob;
                });
            }
        }
        const cleanObj = { ...obj };
        delete cleanObj._thresholdMode;
        this.parsedState.rawContent = JSON.stringify(cleanObj, null, 2);
        this._renderVisualForm();
        this._updateOutputs();
    }

    _updateOutputs(options = {}) {
        if (!options.skipRawEditorUpdate) {
            this.rawCodeEditor.value = this.parsedState.rawContent;
        }

        const componentType = this._getCleanTagName(this.parsedState.componentType);
        const supportsTestMode = (componentType === 'tj-quiz-element' || componentType === 'tj-test' || componentType === 'tj-progressive-test');

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
                    btnText.textContent = 'Copy Embed Code';
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
        const includeScript = true;

        // MUST include type="module" so browsers load ES module scripts without throwing "Cannot use import statement outside a module"
        let scriptTag = includeScript ? `<script type="module" src="${scriptUrl}"></script>\n` : '';
        
        const startCode = this.currentSettings.startCode || '1234';
        const teacherCode = this.currentSettings.teacherCode || '7676';
        const submissionUrl = this.currentSettings.submissionUrl;

        const supportsTestMode = (componentType === 'tj-quiz-element' || componentType === 'tj-test' || componentType === 'tj-progressive-test');
        const isTestMode = supportsTestMode && this.chkTestMode && this.chkTestMode.checked;

        let attrs = '';
        if (supportsTestMode) {
            if (isTestMode) {
                attrs += 'test-mode ';
            } else {
                attrs += 'test-mode="false" ';
            }
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
        this._clearComponentSessionStorage();
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
        this._clearComponentSessionStorage();
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
            const supportsTestMode = (componentType === 'tj-quiz-element' || componentType === 'tj-test' || componentType === 'tj-progressive-test');
            if (supportsTestMode && this.chkTestMode && this.chkTestMode.checked) {
                previewEl.setAttribute('test-mode', '');
            } else if (supportsTestMode) {
                previewEl.setAttribute('test-mode', 'false');
            }
            previewEl.setAttribute('start-code', this.currentSettings.startCode || '1234');
            previewEl.setAttribute('teacher-code', this.currentSettings.teacherCode || '7676');
            previewEl.setAttribute('submission-url', this.currentSettings.submissionUrl || '');

            // 4. Set config property AND attribute before appending to DOM
            const jsonText = isJson ? (typeof rawContent === 'string' ? rawContent : JSON.stringify(rawContent)) : rawContent;
            previewEl.setAttribute('config', jsonText);
            
            if (isJson && jsonObject) {
                previewEl.config = jsonObject;
            } else {
                previewEl.config = rawContent;
            }

            // 5. Set inner light DOM content script tag
            if (componentType === 'tj-quiz-element' || componentType === 'tj-test' || componentType === 'tj-progressive-test') {
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
            this._showToast('Copied embed code!');
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    }

    _showToast(msg) {
        const container = this.shadowRoot.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = `<span>⚡</span> <span>${this._escapeHtml(msg)}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(1rem)';
            setTimeout(() => toast.remove(), 300);
        }, 2500);
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
export { TjBuilder };
