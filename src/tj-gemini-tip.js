/**
 * TJ Components - Gemini Link Tip Module
 * Provides a warning tip dialog when opening custom Gemini Gems for the first time.
 */

const STORAGE_KEY = 'tj_gemini_tip_dismissed';

const STYLES = `
.tj-gemini-tip-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(15, 23, 42, 0.75);
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

.tj-gemini-tip-backdrop.open {
    opacity: 1;
    visibility: visible;
}

.tj-gemini-tip-card {
    background: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    width: 100%;
    max-width: 480px;
    padding: 1.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(6, 182, 212, 0.15);
    position: relative;
    transform: scale(0.95) translateY(10px);
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    color: #f8fafc;
    box-sizing: border-box;
}

.tj-gemini-tip-backdrop.open .tj-gemini-tip-card {
    transform: scale(1) translateY(0);
}

.tj-gemini-tip-close {
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

.tj-gemini-tip-close:hover {
    color: #f8fafc;
    background-color: rgba(255, 255, 255, 0.1);
}

.tj-gemini-tip-header {
    margin-bottom: 1.25rem;
}

.tj-gemini-tip-badge {
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

.tj-gemini-tip-title {
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.3;
}

.tj-gemini-tip-body {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
}

.tj-gemini-tip-body p {
    margin: 0 0 1rem 0;
}

.tj-gemini-tip-steps {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1.25rem;
}

.tj-gemini-tip-step {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: #e2e8f0;
}

.tj-gemini-tip-step .step-num {
    background: linear-gradient(135deg, #06b6d4, #3b82f6);
    color: #ffffff;
    font-weight: 700;
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
}

.tj-gemini-tip-checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
    font-size: 0.9rem;
    color: #94a3b8;
    user-select: none;
    margin-top: 0.5rem;
}

.tj-gemini-tip-checkbox-label:hover {
    color: #e2e8f0;
}

.tj-gemini-tip-checkbox-label input[type="checkbox"] {
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

.tj-gemini-tip-checkbox-label input[type="checkbox"]:checked {
    background-color: #06b6d4;
    border-color: #06b6d4;
}

.tj-gemini-tip-checkbox-label input[type="checkbox"]:checked::before {
    content: "✓";
    color: #0f172a;
    font-size: 13px;
    font-weight: 900;
}

.tj-gemini-tip-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
}

.tj-gemini-tip-btn {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    outline: none;
}

.tj-gemini-tip-btn-secondary {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #e2e8f0;
}

.tj-gemini-tip-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
}

.tj-gemini-tip-btn-primary {
    background: linear-gradient(135deg, #06b6d4, #2563eb);
    color: #ffffff;
    box-shadow: 0 4px 14px rgba(6, 182, 212, 0.35);
}

.tj-gemini-tip-btn-primary:hover {
    box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
    transform: translateY(-1px);
}

@media (max-width: 480px) {
    .tj-gemini-tip-card {
        padding: 1.25rem;
    }
    .tj-gemini-tip-footer {
        flex-direction: column-reverse;
        width: 100%;
    }
    .tj-gemini-tip-btn {
        width: 100%;
        text-align: center;
    }
}
`;

let modalElement = null;
let targetGeminiUrl = '';

function injectStyles() {
    if (document.getElementById('tj-gemini-tip-styles')) return;
    const styleEl = document.createElement('style');
    styleEl.id = 'tj-gemini-tip-styles';
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);
}

function createModal() {
    if (modalElement) return modalElement;

    injectStyles();

    const backdrop = document.createElement('div');
    backdrop.id = 'tj-gemini-tip-modal';
    backdrop.className = 'tj-gemini-tip-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'tj-gemini-tip-title');

    backdrop.innerHTML = `
        <div class="tj-gemini-tip-card">
            <button type="button" class="tj-gemini-tip-close" id="tj-gemini-tip-close" aria-label="Close">&times;</button>
            <div class="tj-gemini-tip-header">
                <div class="tj-gemini-tip-badge">✨ Important Note</div>
                <h3 class="tj-gemini-tip-title" id="tj-gemini-tip-title">Google Gemini Login Required</h3>
            </div>
            <div class="tj-gemini-tip-body">
                <p>If you aren't currently logged into <strong>Google Gemini</strong> in this browser, this link will open a regular Gemini chat instead of launching the custom Gem.</p>
                <div class="tj-gemini-tip-steps">
                    <div class="tj-gemini-tip-step">
                        <span class="step-num">1</span>
                        <span>Log in to Gemini in this browser.</span>
                    </div>
                    <div class="tj-gemini-tip-step">
                        <span class="step-num">2</span>
                        <span>Click the Gemini link again to open the Gem.</span>
                    </div>
                </div>
                <label class="tj-gemini-tip-checkbox-label">
                    <input type="checkbox" id="tj-gemini-tip-dont-show" />
                    <span>Don't show this message again</span>
                </label>
            </div>
            <div class="tj-gemini-tip-footer">
                <button type="button" class="tj-gemini-tip-btn tj-gemini-tip-btn-secondary" id="tj-gemini-tip-cancel">Cancel</button>
                <button type="button" class="tj-gemini-tip-btn tj-gemini-tip-btn-primary" id="tj-gemini-tip-continue">Continue to Gemini ↗</button>
            </div>
        </div>
    `;

    document.body.appendChild(backdrop);

    // Event Bindings
    const btnClose = backdrop.querySelector('#tj-gemini-tip-close');
    const btnCancel = backdrop.querySelector('#tj-gemini-tip-cancel');
    const btnContinue = backdrop.querySelector('#tj-gemini-tip-continue');
    const chkDontShow = backdrop.querySelector('#tj-gemini-tip-dont-show');

    const handleDismiss = () => {
        if (chkDontShow.checked) {
            try {
                localStorage.setItem(STORAGE_KEY, 'true');
            } catch (e) {
                console.warn('TJ Gemini Tip: LocalStorage write failed', e);
            }
        }
        closeModal();
    };

    btnClose.addEventListener('click', handleDismiss);
    btnCancel.addEventListener('click', handleDismiss);

    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            handleDismiss();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && backdrop.classList.contains('open')) {
            handleDismiss();
        }
    });

    btnContinue.addEventListener('click', () => {
        if (chkDontShow.checked) {
            try {
                localStorage.setItem(STORAGE_KEY, 'true');
            } catch (e) {
                console.warn('TJ Gemini Tip: LocalStorage write failed', e);
            }
        }
        closeModal();
        if (targetGeminiUrl) {
            window.open(targetGeminiUrl, '_blank', 'noopener,noreferrer');
        }
    });

    modalElement = backdrop;
    return modalElement;
}

function showModal(url) {
    targetGeminiUrl = url;
    const modal = createModal();
    const chkDontShow = modal.querySelector('#tj-gemini-tip-dont-show');
    if (chkDontShow) chkDontShow.checked = false;
    modal.classList.add('open');
}

function closeModal() {
    if (modalElement) {
        modalElement.classList.remove('open');
    }
}

/**
 * Opens a Gemini URL. If user hasn't dismissed the login tip notice, shows tip modal first.
 * @param {string} url - The target Gemini URL
 */
export function openGeminiUrlWithTip(url) {
    if (!url) return;

    let isDismissed = false;
    try {
        isDismissed = localStorage.getItem(STORAGE_KEY) === 'true';
    } catch (e) {
        console.warn('TJ Gemini Tip: LocalStorage read failed', e);
    }

    if (isDismissed) {
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        showModal(url);
    }
}

// Auto-intercept any Gemini links clicked in the main document
if (typeof document !== 'undefined') {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href*="gemini.google.com"]');
        if (link) {
            e.preventDefault();
            openGeminiUrlWithTip(link.href);
        }
    });
}

