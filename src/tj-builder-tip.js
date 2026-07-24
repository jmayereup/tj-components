/**
 * TJ Components - Builder Onboarding Tip Module
 * Displays instructions when <tj-builder> scrolls into view for the first time.
 */

const STORAGE_KEY = 'tj_builder_tip_dismissed';

const STYLES = `
.tj-builder-tip-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease, visibility 0.25s ease;
    padding: 1rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    box-sizing: border-box;
}

.tj-builder-tip-backdrop.open {
    opacity: 1;
    visibility: visible;
}

.tj-builder-tip-card {
    background: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    width: 100%;
    max-width: 520px;
    padding: 1.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(6, 182, 212, 0.15);
    position: relative;
    transform: scale(0.95) translateY(10px);
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    color: #f8fafc;
    box-sizing: border-box;
}

.tj-builder-tip-backdrop.open .tj-builder-tip-card {
    transform: scale(1) translateY(0);
}

.tj-builder-tip-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 6px;
    transition: color 0.15s, background-color 0.15s;
}

.tj-builder-tip-close:hover {
    color: #f8fafc;
    background-color: rgba(255, 255, 255, 0.1);
}

.tj-builder-tip-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.3rem 0.75rem;
    background: rgba(34, 211, 238, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.3);
    color: #38bdf8;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 9999px;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.tj-builder-tip-title {
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 1rem 0;
    line-height: 1.3;
}

.tj-builder-tip-step-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
}

.tj-builder-tip-step-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: #cbd5e1;
    background: rgba(15, 23, 42, 0.6);
    padding: 0.65rem 0.85rem;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    line-height: 1.45;
}

.tj-builder-tip-step-item strong {
    color: #f8fafc;
}

.tj-builder-tip-step-item em {
    color: #38bdf8;
    font-style: normal;
}

.tj-builder-tip-step-num {
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    color: #ffffff;
    font-weight: 700;
    font-size: 0.75rem;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
}

.tj-builder-tip-checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
    font-size: 0.9rem;
    color: #94a3b8;
    user-select: none;
    margin-top: 0.75rem;
}

.tj-builder-tip-checkbox-label:hover {
    color: #e2e8f0;
}

.tj-builder-tip-checkbox-label input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    background-color: rgba(15, 23, 42, 0.5);
    cursor: pointer;
    display: grid;
    place-content: center;
    transition: background-color 0.15s, border-color 0.15s;
    margin: 0;
}

.tj-builder-tip-checkbox-label input[type="checkbox"]:checked {
    background-color: #06b6d4;
    border-color: #06b6d4;
}

.tj-builder-tip-checkbox-label input[type="checkbox"]:checked::before {
    content: "✓";
    color: #0f172a;
    font-size: 13px;
    font-weight: 900;
}

.tj-builder-tip-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-top: 1.25rem;
}

.tj-builder-tip-btn {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    outline: none;
}

.tj-builder-tip-btn-primary {
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    color: #ffffff;
    box-shadow: 0 4px 14px rgba(6, 182, 212, 0.35);
    width: 100%;
    text-align: center;
}

.tj-builder-tip-btn-primary:hover {
    box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
    transform: translateY(-1px);
}

@media (max-width: 480px) {
    .tj-builder-tip-card {
        padding: 1.25rem;
    }
}
`;

let modalElement = null;

function injectStyles() {
    if (document.getElementById('tj-builder-tip-styles')) return;
    const styleEl = document.createElement('style');
    styleEl.id = 'tj-builder-tip-styles';
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);
}

/**
 * Shows the builder instructions tip modal if user has not previously dismissed it.
 */
export function showBuilderInstructionsTip() {
    try {
        if (localStorage.getItem(STORAGE_KEY) === 'true') return;
    } catch (e) {
        console.warn('TJ Builder Tip: LocalStorage read failed', e);
    }

    if (modalElement && modalElement.classList.contains('open')) return;

    injectStyles();

    const backdrop = document.createElement('div');
    backdrop.id = 'tj-builder-tip-modal';
    backdrop.className = 'tj-builder-tip-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'tj-b-title');

    backdrop.innerHTML = `
        <div class="tj-builder-tip-card">
            <button type="button" class="tj-builder-tip-close" id="tj-b-close" aria-label="Close">&times;</button>
            <div class="tj-builder-tip-badge">⚡ How to Use TJ Builder</div>
            <h3 class="tj-builder-tip-title" id="tj-b-title">Create Interactive Components in 4 Steps</h3>
            <div class="tj-builder-tip-step-list">
                <div class="tj-builder-tip-step-item">
                    <span class="tj-builder-tip-step-num">1</span>
                    <span><strong>Select Component:</strong> Choose your component type and then click <em>✨ Gemini Gem ↗</em> to generate or convert content.</span>
                </div>
                <div class="tj-builder-tip-step-item">
                    <span class="tj-builder-tip-step-num">2</span>
                    <span><strong>Input Content:</strong> Paste Gemini AI output into the textarea or build questions manually using the visual card editor.</span>
                </div>
                <div class="tj-builder-tip-step-item">
                    <span class="tj-builder-tip-step-num">3</span>
                    <span><strong>Configure Settings:</strong> Set your Start Quiz Code and Teacher Unlock Code under Teacher Settings.</span>
                </div>
                <div class="tj-builder-tip-step-item">
                    <span class="tj-builder-tip-step-num">4</span>
                    <span><strong>Export Code:</strong> Click <em>Copy Ready-to-Embed Blog Code</em> and paste into <a href="https://sites.google.com" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Google Sites</a> (<a href="https://youtu.be/bazjwznb7CY" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline;">🎬 Video Tutorial ↗</a>) or WordPress.</span>
                </div>
            </div>
            <label class="tj-builder-tip-checkbox-label">
                <input type="checkbox" id="tj-b-dont-show" />
                <span>Don't show this message again</span>
            </label>
            <div class="tj-builder-tip-footer">
                <button type="button" class="tj-builder-tip-btn tj-builder-tip-btn-primary" id="tj-b-got-it">Got it! Start Building 🚀</button>
            </div>
        </div>
    `;

    document.body.appendChild(backdrop);
    modalElement = backdrop;

    requestAnimationFrame(() => {
        backdrop.classList.add('open');
    });

    const btnClose = backdrop.querySelector('#tj-b-close');
    const btnGotIt = backdrop.querySelector('#tj-b-got-it');
    const chkDontShow = backdrop.querySelector('#tj-b-dont-show');

    const handleDismiss = () => {
        if (chkDontShow.checked) {
            try {
                localStorage.setItem(STORAGE_KEY, 'true');
            } catch (e) {
                console.warn('TJ Builder Tip: LocalStorage write failed', e);
            }
        }
        backdrop.classList.remove('open');
        setTimeout(() => {
            backdrop.remove();
            modalElement = null;
        }, 250);
    };

    btnClose.addEventListener('click', handleDismiss);
    btnGotIt.addEventListener('click', handleDismiss);

    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            handleDismiss();
        }
    });

    const keyHandler = (e) => {
        if (e.key === 'Escape' && backdrop.classList.contains('open')) {
            document.removeEventListener('keydown', keyHandler);
            handleDismiss();
        }
    };
    document.addEventListener('keydown', keyHandler);
}
