import { c as I } from "./chunks/tj-config-Daa3Dzp2.js";
import { i as T, a as $, s as q, g as _, b as M } from "./chunks/audio-utils-BwH2sOvH.js";
const P = ":host{--tj-primary-color: #2563eb;--tj-primary-hover: #1d4ed8;--tj-primary-light: #eff6ff;--tj-primary-border: #bfdbfe;--tj-success-color: #22c55e;--tj-success-hover: #16a34a;--tj-success-light: #f0fdf4;--tj-success-border: #bbf7d0;--tj-error-color: #ef4444;--tj-error-hover: #dc2626;--tj-error-light: #fef2f2;--tj-error-border: #fecaca;--tj-text-main: #1e293b;--tj-text-muted: #64748b;--tj-text-light: #94a3b8;--tj-bg-main: transparent;--tj-bg-card: rgba(255, 255, 255, .95);--tj-bg-alt: #f8fafc;--tj-border-light: #f1f5f9;--tj-border-main: #e2e8f0;--tj-border-dark: #cbd5e1;--tj-font-family: inherit;--tj-font-size-base: 16px;--tj-border-radius-sm: .5em;--tj-border-radius-md: .8em;--tj-border-radius-lg: 1.2em;--tj-border-radius-full: 50%;--tj-shadow-sm: 0 1px 3px rgba(0,0,0,.1);--tj-shadow-md: 0 4px 12px rgba(0,0,0,.05);--tj-shadow-lg: 0 10px 25px -5px rgba(0, 0, 0, .1);--tj-shadow-glass: 0 4px 20px rgba(0,0,0,.05);--tj-backdrop-blur: blur(10px);--tj-transition-fast: all .2s cubic-bezier(.4, 0, .2, 1);--tj-transition-normal: all .3s ease;display:block;font-family:var(--tj-font-family);color:var(--tj-text-main);background-color:transparent;position:relative;box-sizing:border-box}@media (prefers-color-scheme: dark){:host{--tj-primary-light: #1e3a8a;--tj-primary-border: #1e40af;--tj-success-light: #14532d;--tj-success-border: #166534;--tj-error-light: #7f1d1d;--tj-error-border: #991b1b;--tj-text-main: #f8fafc;--tj-text-muted: #94a3b8;--tj-text-light: #cbd5e1;--tj-bg-main: #0f172a;--tj-bg-card: rgba(30, 41, 59, .95);--tj-bg-alt: #1e293b;--tj-border-light: #334155;--tj-border-main: #475569;--tj-border-dark: #64748b}}:host *{box-sizing:border-box}.tj-card{background:var(--tj-bg-card);-webkit-backdrop-filter:var(--tj-backdrop-blur);backdrop-filter:var(--tj-backdrop-blur);border-radius:var(--tj-border-radius-lg);padding:1.5em;box-shadow:var(--tj-shadow-md);border:1px solid var(--tj-border-main);transition:var(--tj-transition-normal)}.tj-btn{font-family:inherit;font-size:1em;padding:.6em 1.2em;font-weight:600;cursor:pointer;border-radius:var(--tj-border-radius-md);transition:var(--tj-transition-fast);outline:none;display:inline-flex;align-items:center;justify-content:center;gap:.5em}.tj-btn-primary{background:var(--tj-primary-color);color:#fff;border:1px solid var(--tj-primary-hover);box-shadow:var(--tj-shadow-sm)}.tj-btn-primary:hover:not(:disabled){background:var(--tj-primary-hover);transform:translateY(-1px);box-shadow:var(--tj-shadow-md)}.tj-btn-secondary{background:var(--tj-bg-alt);color:#475569;border:1px solid var(--tj-border-main)}.tj-btn-secondary:hover:not(:disabled){background:var(--tj-border-light);border-color:var(--tj-border-dark);color:var(--tj-primary-color)}.tj-btn-success{background:var(--tj-success-color);color:#fff;border:1px solid var(--tj-success-hover)}.tj-btn-error{background:var(--tj-error-color);color:#fff;border:1px solid var(--tj-error-hover)}.tj-icon-btn{background:var(--tj-bg-alt);border:1px solid var(--tj-border-light);padding:.5em;border-radius:var(--tj-border-radius-full);width:3.5em;height:3.5em;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:var(--tj-transition-fast);color:var(--tj-text-muted);flex-shrink:0}.tj-icon-btn:hover{background:var(--tj-primary-light);color:var(--tj-primary-color);border-color:var(--tj-primary-border);transform:scale(1.1)}.tj-input{width:100%;padding:1em;border:1px solid var(--tj-border-main);border-radius:var(--tj-border-radius-sm);font-size:1em;outline:none;transition:var(--tj-transition-fast)}.tj-input:focus{border-color:var(--tj-primary-color);box-shadow:0 0 0 3px var(--tj-primary-light)}.tj-sticky-bar{position:sticky;top:0;background:#ffffffe6;-webkit-backdrop-filter:var(--tj-backdrop-blur);backdrop-filter:var(--tj-backdrop-blur);padding:.8em 1.2em;border-radius:var(--tj-border-radius-md);box-shadow:var(--tj-shadow-glass);z-index:100;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(226,232,240,.8);max-height:8rem;overflow-y:auto}.tj-h2{font-size:1.5em;color:var(--tj-text-main);margin-top:0;margin-bottom:1em}.tj-h3{font-size:1.2em;color:var(--tj-primary-color);margin-top:0;margin-bottom:.5em}.tj-text-muted{color:var(--tj-text-muted)}.tj-flex-center{display:flex;align-items:center;justify-content:center}.tj-flex-between{display:flex;align-items:center;justify-content:space-between}.tj-divider{border:none;border-top:2px dashed var(--tj-border-main);margin:2em 0;position:relative}.tj-divider:after{content:attr(data-label);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:0 1em;color:var(--tj-text-light);font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.1em}.tj-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172acc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:1000;animation:tj-fadeIn .3s ease}.tj-overlay.active{display:flex}@keyframes tj-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes tj-shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes tj-bounce{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}.tj-anim-shake{animation:tj-shake .4s ease}.tj-anim-bounce{animation:tj-bounce .4s ease}", V = '@import"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap";:host{display:block;max-width:80em;margin:1em auto;font-family:Outfit,sans-serif}.pronunciation-wrapper{padding-bottom:4rem}.activities-wrapper{display:flex;flex-direction:column;gap:2em;padding:1em 1em 5em}.header-main{flex:1}.progress-text{font-weight:700;color:var(--tj-primary-color);font-size:1.1em;white-space:nowrap}.play-audio-btn.playing{animation:pulse 1s infinite alternate}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #2563eb66}to{transform:scale(1.05);box-shadow:0 0 0 10px #2563eb00}}.lr-container{display:flex;flex-direction:column;align-items:center;gap:1.5rem}.lr-target-word{font-size:2em;font-family:Inter,sans-serif;font-weight:500;text-align:center;margin-bottom:.5rem;color:var(--tj-text-main)}.lr-phonetic{font-size:1.25em;color:var(--tj-text-muted);font-family:monospace;margin-top:.2rem}.lr-translation{color:var(--tj-text-muted);font-style:italic;margin-top:.8rem;font-size:1.5em}.translation-toggle{font-size:.8em;padding:.4em 1em;border-radius:var(--tj-border-radius-full)}.lr-controls{display:flex;gap:2rem;align-items:center;justify-content:center;width:100%;margin-top:1rem}.lr-control-group{display:flex;flex-direction:column;align-items:center;gap:.5rem}.lr-label{font-size:.75em;font-weight:700;color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em}.record-btn{color:var(--tj-error-color)}.record-btn:hover{background:var(--tj-error-light);color:var(--tj-error-hover);border-color:var(--tj-error-border)}.record-btn.recording{background:var(--tj-error-color);color:#fff;border-color:var(--tj-error-hover);animation:pulse-record 1.5s infinite}@keyframes pulse-record{0%{box-shadow:0 0 #ef444466;transform:scale(1)}70%{box-shadow:0 0 0 15px #ef444400;transform:scale(1.05)}to{box-shadow:0 0 #ef444400;transform:scale(1)}}.playback-btn.ready{color:var(--tj-success-color)}.playback-btn.ready:hover{background:var(--tj-success-light);color:var(--tj-success-hover);border-color:var(--tj-success-border)}.playback-btn.playing{background:var(--tj-success-color);color:#fff;animation:pulse-success 1s infinite alternate}@keyframes pulse-success{0%{transform:scale(1);box-shadow:0 0 #22c55e66}to{transform:scale(1.05);box-shadow:0 0 0 10px #22c55e00}}.mp-container{display:flex;flex-direction:column;align-items:center;gap:1.5rem}.mp-options{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;width:100%}.mp-option-btn{padding:.8rem 1.5rem;min-width:120px}.mp-option-btn.highlight{border-color:var(--tj-primary-color);background:var(--tj-primary-light);transform:translateY(-2px)}.mp-focus{font-size:1.2em;color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em;font-weight:700}.mp-instr{font-size:1.2em;color:var(--tj-text-muted);font-style:italic}.feedback-msg{min-height:1.2em;font-weight:700;font-size:1.1em}.feedback-msg.correct{color:var(--tj-success-color)}.feedback-msg.wrong{color:var(--tj-error-color)}.scramble-container{display:flex;flex-direction:column;align-items:center;gap:1.5rem;width:100%}.scramble-dropzone{min-height:80px;width:100%;border:2px dashed var(--tj-border-main);border-radius:var(--tj-border-radius-lg);padding:1rem;display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:center;background:var(--tj-bg-alt);transition:var(--tj-transition-fast)}.scramble-dropzone.success{border-color:var(--tj-success-color);background:var(--tj-success-light)}.scramble-bank{display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center;width:100%}.scramble-word{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);padding:.6rem 1.2rem;border-radius:var(--tj-border-radius-md);font-weight:600;cursor:pointer;-webkit-user-select:none;user-select:none;box-shadow:var(--tj-shadow-sm);transition:var(--tj-transition-fast)}.scramble-word:hover{border-color:var(--tj-primary-color);transform:translateY(-2px);box-shadow:var(--tj-shadow-md);color:var(--tj-primary-color)}.scramble-word.in-dropzone{background:var(--tj-primary-light);border-color:var(--tj-primary-border);color:var(--tj-primary-color)}.scramble-controls{display:flex;gap:1rem}.voice-card{max-height:80vh;display:flex;flex-direction:column}.voice-list{padding:.5rem;overflow-y:auto;flex:1}.voice-option-btn{width:100%;text-align:left;padding:.8rem 1.2rem;margin-bottom:.5rem;border:1px solid var(--tj-border-main);border-radius:var(--tj-border-radius-md);background:var(--tj-bg-card);color:var(--tj-text-main);cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:var(--tj-transition-fast)}.voice-option-btn:hover{background-color:var(--tj-bg-alt);border-color:var(--tj-primary-color);color:var(--tj-primary-color)}.voice-option-btn.active{background:var(--tj-primary-light);border-color:var(--tj-primary-color);color:var(--tj-primary-color);font-weight:700}.badge{background:var(--tj-primary-color);color:#fff;font-size:.7em;padding:.2rem .6rem;border-radius:var(--tj-border-radius-full);font-weight:800;text-transform:uppercase}.close-voice-btn{padding:0;width:2em;height:2em;display:flex;align-items:center;justify-content:center}.tj-card.completed{border-color:var(--tj-success-color);background:var(--tj-success-light);box-shadow:var(--tj-shadow-md),0 0 0 1px var(--tj-success-border)}.report-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:var(--tj-primary-color);color:#fff;border:none;border-radius:var(--tj-border-radius-md);font-size:1.1em;font-weight:700;cursor:pointer;transition:background .2s;margin-top:2em;align-self:center}.report-btn:hover{filter:brightness(.9)}.report-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172acc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:1000}.report-modal{background:var(--tj-bg-card);color:var(--tj-text-main);border:1px solid var(--tj-border-main);width:92%;max-width:420px;padding:28px 24px;border-radius:16px;box-shadow:0 25px 50px -12px #0000004d;text-align:center;max-height:90vh;overflow-y:auto}.report-modal h2{margin:8px 0 4px;color:var(--tj-text-main)}.report-modal p{color:var(--tj-text-muted);margin:0 0 16px;font-size:.95em}.report-icon{font-size:2.5em;margin-bottom:4px}.report-modal input{display:block;width:100%;box-sizing:border-box;padding:12px 14px;margin-bottom:12px;background:var(--tj-bg-main);color:var(--tj-text-main);border:1px solid var(--tj-border-main);border-radius:8px;font-size:1em;outline:none;transition:border-color .2s}.report-modal input:focus{border-color:var(--tj-primary-color)}.generate-btn{display:block;width:100%;padding:14px;background:var(--tj-primary-color);color:#fff;border:none;border-radius:8px;font-size:1.05em;font-weight:700;cursor:pointer;margin-top:8px;transition:background .2s}.generate-btn:hover{filter:brightness(.9)}.generate-btn:disabled{opacity:.7;cursor:not-allowed}.cancel-btn{display:block;width:100%;padding:12px;background:transparent;color:var(--tj-text-muted);border:none;font-size:.95em;font-weight:600;cursor:pointer;margin-top:8px}.cancel-btn:hover{color:var(--tj-text-main)}.report-area{text-align:left}.rc-header{text-align:center;margin-bottom:24px}.rc-icon{font-size:2.5em;margin-bottom:8px}.rc-title{font-size:1.4em;font-weight:700;color:var(--tj-text-main);margin-bottom:4px}.rc-subtitle{color:var(--tj-text-muted);font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.rc-activity{display:inline-block;background:var(--tj-bg-alt);padding:4px 12px;border-radius:20px;font-size:.85em;font-weight:600;color:var(--tj-text-main);margin-top:12px}.rc-student{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:12px;padding:16px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center}.rc-label{color:var(--tj-text-muted);font-size:.9em;font-weight:600}.rc-value{font-weight:700;color:var(--tj-text-main)}.rc-number{color:var(--tj-text-muted);font-weight:500;font-size:.9em}.rc-score-row{display:flex;align-items:center;gap:20px;margin-bottom:16px}.rc-score-circle{width:80px;height:80px;border-radius:50%;background:var(--tj-primary-light);color:var(--tj-primary-color);display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px solid var(--tj-primary-color);flex-shrink:0}.rc-score-val{font-size:1.5em;font-weight:800;line-height:1}.rc-score-pct{font-size:.85em;font-weight:700;margin-top:2px}.rc-score-label{font-size:1.1em;font-weight:700;color:var(--tj-text-main)}.rc-bar-track{height:8px;background:var(--tj-bg-alt);border-radius:4px;overflow:hidden}.rc-bar-fill{height:100%;background:var(--tj-primary-color);border-radius:4px}.rc-details{background:var(--tj-bg-alt);padding:16px;border-radius:12px;margin-bottom:24px;font-size:.9em}.rc-detail-row{display:flex;justify-content:space-between;margin-bottom:8px}.rc-detail-row:last-child{margin-bottom:0}.rc-detail-row span:first-child{color:var(--tj-text-muted);font-weight:500}.rc-detail-row span:last-child{font-weight:600;color:var(--tj-text-main)}.rc-actions{display:flex;flex-direction:column;gap:8px}.rc-close-btn{display:block;width:100%;padding:14px;background:transparent;color:var(--tj-text-main);border:2px solid var(--tj-border-main);border-radius:8px;font-size:1em;font-weight:700;cursor:pointer;transition:all .2s}.rc-close-btn:hover{background:var(--tj-bg-alt)}.tj-speed-control{display:inline-flex;align-items:center;gap:.25em;background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);border-radius:2em;padding:.25em .5em .25em .75em;height:2.5em;transition:var(--tj-transition-fast);color:var(--tj-text-muted);position:relative;cursor:pointer}.tj-speed-control:hover{background:var(--tj-primary-light);color:var(--tj-primary-color);border-color:var(--tj-primary-border)}.tj-speed-icon{flex-shrink:0;opacity:.85}.tj-speed-select{background:transparent;border:none;font-family:inherit;font-size:.9em;font-weight:700;color:inherit;cursor:pointer;outline:none;padding:0 1.2em 0 .2em;appearance:none;-webkit-appearance:none;-moz-appearance:none}.tj-speed-control:after{content:"";position:absolute;right:.8em;top:50%;transform:translateY(-50%);border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid currentColor;pointer-events:none}@media (max-width: 600px){.tj-sticky-bar{flex-direction:column;align-items:flex-start;gap:.6em;padding:.6em .8em}.tj-sticky-bar .tj-flex-center{width:100%;justify-content:space-between;gap:.5em}.tj-speed-control{padding:.25em .4em .25em .6em;height:2.2em;font-size:.85em}.tj-speed-control:after{right:.5em}.tj-speed-select{padding-right:.9em}#voice-btn.tj-icon-btn{width:2.2em;height:2.2em;padding:.3em}}', O = `<div class="pronunciation-wrapper" translate="no">
    <div class="tj-sticky-bar">
        <div class="header-main">
            <h1 class="tj-h3" id="pronunciationTitle" style="margin: 0;">Pronunciation Practice</h1>
            <p class="instructions tj-text-muted" id="pronunciationInstructions"
                style="display: none; margin: 0; font-size: 0.9em;">Please complete all activities to generate a report
                card.</p>
        </div>
        <div class="tj-flex-center" style="gap: 1em;">
            <div class="progress-text">0 / 0</div>
            <div class="tj-speed-control" title="Playback Speed">
                <svg class="tj-speed-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path
                        d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 12 6a7.89 7.89 0 0 1 6 2.73l1.42-1.42A9.91 9.91 0 0 0 12 4a10 10 0 0 0-7.68 16.4h15.36A10 10 0 0 0 20.38 8.57zM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3-6h-2v4h2V6z" />
                </svg>
                <select id="speed-select" class="tj-speed-select">
                    <option value="0.5">0.5x</option>
                    <option value="0.6">0.6x</option>
                    <option value="0.7">0.7x</option>
                    <option value="0.8">0.8x</option>
                    <option value="0.9">0.9x</option>
                    <option value="1.0">1.0x</option>
                    <option value="1.2">1.2x</option>
                </select>
            </div>
            <button id="voice-btn" class="tj-icon-btn" title="Choose Voice">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path
                        d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z" />
                </svg>
            </button>
        </div>
    </div>
    <div class="activities-wrapper" id="activitiesContainer">
    </div>
    <div style="text-align: center; width: 100%; margin-bottom: 2rem;">
        <button class="report-btn" id="show-report-btn" style="display: none;">📄 See Report Card</button>
    </div>


    <!-- Report Card Overlay -->
    <div class="report-overlay" id="report-overlay" style="display:none;">
        <div class="report-modal">
            <div class="initial-form" id="initial-form">
                <div class="report-icon">📄</div>
                <h2>Report Card</h2>
                <p>Enter your details to generate your report.</p>
                <input type="text" id="nickname-input" placeholder="Jake" autocomplete="off">
                <input type="text" id="number-input" placeholder="01" autocomplete="off" inputmode="numeric">
                <input type="text" id="homeroom-input" placeholder="1/1" autocomplete="off">
                <input type="text" id="teacher-code-input" placeholder="Teacher Code" autocomplete="off"
                    inputmode="numeric">
                <button class="generate-btn" id="generate-btn">Generate Report</button>
                <button class="cancel-btn" id="cancel-report-btn">Cancel</button>
            </div>
            <div class="report-area" id="report-area" style="display:none;"></div>
            <div id="submit-actions" style="display:none; margin-top: 1em;">
                <div
                    style="padding: 12px; background: var(--tj-bg-alt); border-radius: 8px; border: 1px dashed var(--tj-border-main); text-align: left; margin-bottom: 1em;">
                    <p
                        style="margin: 0 0 8px 0; font-size: 0.85em; color: var(--tj-text-muted); font-weight: 600; text-transform: uppercase;">
                        Submission (Optional)</p>
                    <input type="text" id="report-teacher-code" placeholder="Enter Teacher Code"
                        style="width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid var(--tj-border-main); border-radius: 6px; font-size: 0.9em; margin-bottom: 4px; background: var(--tj-bg-main); color: var(--tj-text-main);">
                    <p style="margin: 4px 0 8px 0; font-size: 0.8em; color: var(--tj-text-muted);">Enter the teacher
                        code to submit, or take a screenshot of this page.</p>
                    <button class="generate-btn" id="submit-score-btn"
                        style="background: var(--tj-success-color); width: 100%; margin-top: 0.5em;">Submit
                        Score</button>
                </div>
                <div id="report-recordings-container" style="display:none;"></div>
                <button class="cancel-btn" id="rc-close-btn" style="width: 100%; margin-top: 1em;">↩ Return to
                    Activity</button>
            </div>
        </div>
    </div>

    <!-- Voice Selection Overlay -->
    <div class="tj-overlay" id="voice-overlay">
        <div class="tj-card voice-card" style="width: 90%; max-width: 450px;">
            <div class="voice-card-header tj-flex-between" style="margin-bottom: 1em;">
                <h3 class="tj-h3" style="margin: 0;">Choose Voice</h3>
                <button class="tj-icon-btn close-voice-btn" id="close-voice-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>
            </div>
            <div class="voice-list" id="voice-list"></div>
        </div>
    </div>

    <div class="tj-overlay" id="browser-prompt-overlay" style="padding: 1rem;">
        <div class="tj-card" style="max-width: 400px; text-align: center;">
            <h2 class="tj-h2">Better in a Browser</h2>
            <p class="tj-text-muted" style="margin-bottom: 2em; line-height: 1.6;">It looks like you're using an in-app
                browser. For the best experience (including audio features), please open this page in <b>Chrome</b> or
                <b>Safari</b>.</p>
            <a id="browser-action-btn" class="tj-btn tj-btn-primary" style="width: 100%; text-decoration: none;"
                href="javascript:void(0)">Open Browser</a>
            <button class="tj-btn tj-btn-secondary"
                style="width: 100%; margin-top: 1em; border: none; background: transparent; text-decoration: underline;"
                onclick="this.closest('.tj-overlay').classList.remove('active')">Continue anyway</button>
        </div>
    </div>
</div>`, L = {
  play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  mic: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>',
  headphones: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>'
};
class H extends HTMLElement {
  get code() {
    return this.getAttribute("code") !== null ? this.getAttribute("code") : I.teacherCode;
  }
  set code(t) {
    t != null ? this.setAttribute("code", t) : this.removeAttribute("code");
  }
  constructor() {
    var e;
    super(), this.attachShadow({ mode: "open" }), this.synth = window.speechSynthesis, this.language = "en-US", this.mediaRecorder = null, this.audioChunks = [], this.recordings = /* @__PURE__ */ new Map(), this.lrState = /* @__PURE__ */ new Map(), this.selectedVoiceName = localStorage.getItem("tj-pronunciation-voice"), this.isPlaying = !1, this.submissionUrl = ((e = I) == null ? void 0 : e.submissionUrl) || "https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec", this.studentInfo = { nickname: "", number: "", homeroom: "" }, this.isSubmitting = !1;
    const t = parseFloat(localStorage.getItem("tj-pronunciation-speed"));
    this.playbackSpeed = isNaN(t) ? 0.7 : t, this.synth && (this.synth.onvoiceschanged = () => this._updateVoiceList());
  }
  connectedCallback() {
    const t = this.getAttribute("src");
    requestAnimationFrame(() => {
      let e = "";
      if (this.config)
        if (typeof this.config == "object") {
          this.render(this.config);
          return;
        } else
          e = String(this.config);
      else this.hasAttribute("config") ? e = this.getAttribute("config") : this.querySelector('script[type="application/json"]') ? e = this.querySelector('script[type="application/json"]').textContent.trim() : t || (e = this.textContent.trim());
      if (e)
        try {
          const o = JSON.parse(e);
          this.render(o);
        } catch (o) {
          console.error("Error parsing inline JSON data", o), this.shadowRoot.innerHTML = '<p style="color: red;">Error loading pronunciation data: Invalid JSON.</p>';
        }
      else t && this.loadData(t);
    });
  }
  async loadData(t) {
    try {
      const o = await (await fetch(t)).json();
      this.render(o);
    } catch (e) {
      console.error("Error loading pronunciation data:", e), this.shadowRoot.innerHTML = '<p style="color: red;">Error loading pronunciation data.</p>';
    }
  }
  render(t) {
    t.language && (this.language = t.language);
    const e = document.createElement("template");
    e.innerHTML = `<style>${P}</style><style>${V}</style>${O}`, this.shadowRoot.firstChild && (this.shadowRoot.innerHTML = ""), this.shadowRoot.appendChild(e.content.cloneNode(!0)), t.title && (this.shadowRoot.getElementById("pronunciationTitle").textContent = t.title);
    let o = "";
    if (t.activities && Array.isArray(t.activities) && (o = t.activities.map((r, a) => this.renderActivity(r, a)).join("")), this.shadowRoot.getElementById("activitiesContainer").innerHTML = o, this.updateProgress(), this.attachEventListeners(), this._updateVoiceList(), !this._shouldShowAudioControls()) {
      const r = this.shadowRoot.getElementById("voice-btn");
      r && (r.style.display = "none");
      const a = this.shadowRoot.querySelector(".tj-speed-control");
      a && (a.style.display = "none"), this.checkBrowserSupport();
    }
  }
  renderActivity(t, e) {
    switch (t.type) {
      case "listen_record":
        return this.renderListenRecord(t, e);
      case "minimal_pair":
        return this.renderMinimalPair(t, e);
      case "stress_match":
        return '<div class="tj-card"><h2 class="tj-h3">Stress Match Activity (Coming Soon)</h2></div>';
      case "scramble":
        return this.renderScramble(t, e);
      case "odd_one_out":
        return '<div class="tj-card"><h2 class="tj-h3">Odd One Out Activity (Coming Soon)</h2></div>';
      default:
        return `<div class="tj-card"><p>Unknown activity type: ${t.type}</p></div>`;
    }
  }
  updateProgress() {
    const t = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']"), e = t.length;
    let o = 0;
    t.forEach((i) => {
      i.classList.contains("completed") && o++;
    });
    const r = this.shadowRoot.querySelector(".progress-text");
    r && (r.textContent = `${o} / ${e}`);
    const a = this.shadowRoot.getElementById("show-report-btn");
    a && (e > 0 ? a.style.display = "inline-flex" : a.style.display = "none");
  }
  renderListenRecord(t, e) {
    return `
            <div class="tj-card" id="act-${e}">
                <div class="activity-title tj-h3">${L.headphones} Listen & Record</div>
                <div class="lr-container">
                    <div style="text-align: center;">
                        <div class="lr-target-word">${t.targetText}</div>
                        ${t.phoneticHint ? `<div class="lr-phonetic">/[${t.phoneticHint}]/</div>` : ""}
                        
                        ${t.translation ? `
                            <button class="tj-btn tj-btn-secondary translation-toggle" data-index="${e}" style="margin-top: 1em;">Show Translation</button>
                            <div class="lr-translation hidden" id="trans-${e}" style="display: none;">${t.translation}</div>
                        ` : ""}
                    </div>

                    <div class="lr-controls">
                        <div class="lr-control-group">
                            <span class="lr-label">Listen</span>
                            <button class="tj-icon-btn play-audio-btn" data-action="play" data-index="${e}" data-text="${t.targetText.replace(/"/g, "&quot;")}">
                                ${L.play}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Record</span>
                            <button class="tj-icon-btn record-btn" data-action="record" data-index="${e}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${L.mic}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Playback</span>
                            <button class="tj-icon-btn playback-btn" id="playback-${e}" data-action="playback" data-index="${e}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${L.play}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
  renderMinimalPair(t, e) {
    return !t.options || !Array.isArray(t.options) ? `<div class="tj-card"><p>Error: Minimal Pair requires 'options' array.</p></div>` : `
            <div class="tj-card" id="act-${e}">
                <div class="activity-title tj-h3">
                    <span style="display:inline-block; margin-right: 0.5rem;">⚖️</span> Minimal Pair
                </div>
                <div class="mp-container">
                    ${t.focus ? `<div class="mp-focus">Focus: ${t.focus}</div>` : ""}
                    <div class="mp-instr">Click on the last word that you hear.</div>
                    
                    <button class="tj-icon-btn play-audio-btn" data-action="play-mp" data-index="${e}" 
                            data-options="${t.options.join(",").replace(/"/g, "&quot;")}">
                        ${L.play}
                    </button>

                    <div class="mp-options">
                        ${t.options.map(
      (o) => `
                            <button class="tj-btn tj-btn-secondary mp-option-btn" data-action="mp-guess" data-index="${e}">${o}</button>
                        `
    ).join("")}
                    </div>
                    <div class="feedback-msg" id="feedback-${e}"></div>
                </div>
            </div>
        `;
  }
  renderScramble(t, e) {
    if (!t.words || !Array.isArray(t.words))
      return `<div class="tj-card"><p>Error: Scramble requires 'words' array.</p></div>`;
    let o = [...t.words];
    t.distractors && Array.isArray(t.distractors) && (o = o.concat(t.distractors));
    for (let r = o.length - 1; r > 0; r--) {
      const a = Math.floor(Math.random() * (r + 1));
      [o[r], o[a]] = [o[a], o[r]];
    }
    return `
            <div class="tj-card" id="act-${e}">
                <div class="activity-title tj-h3">
                    <span style="display:inline-block; margin-right: 0.5rem;">🧩</span> Dictation Scramble
                </div>
                <div class="scramble-container">
                    <button class="tj-icon-btn play-audio-btn" data-action="play" data-text="${t.audioText.replace(/"/g, "&quot;")}">
                        ${L.play}
                    </button>

                    <!-- Hidden data store for correct answer -->
                    <div id="scramble-ans-${e}" style="display:none;" data-answer="${t.words.join(" ").replace(/"/g, "&quot;")}"></div>

                    <div class="scramble-dropzone" id="dropzone-${e}">
                        <!-- Words dropped here -->
                    </div>

                    <div class="scramble-bank" id="bank-${e}">
                        ${o.map(
      (r, a) => `
                            <div class="scramble-word" data-action="scramble-move" data-index="${e}" data-word-id="${a}">${r}</div>
                        `
    ).join("")}
                    </div>

                    <div class="scramble-controls">
                        <button class="tj-btn tj-btn-secondary scramble-btn" data-action="scramble-reset" data-index="${e}">Reset</button>
                        <button class="tj-btn tj-btn-primary scramble-btn" data-action="scramble-check" data-index="${e}">Check</button>
                    </div>
                    
                    <div class="feedback-msg" id="feedback-${e}"></div>
                </div>
            </div>
        `;
  }
  attachEventListeners() {
    const t = this.shadowRoot.getElementById("voice-btn"), e = this.shadowRoot.getElementById("close-voice-btn"), o = this.shadowRoot.getElementById("voice-overlay");
    t && (t.onclick = () => this._showVoiceOverlay()), e && (e.onclick = () => this._hideVoiceOverlay()), o && (o.onclick = (s) => {
      s.target === o && this._hideVoiceOverlay();
    });
    const r = this.shadowRoot.getElementById("speed-select");
    r && (r.value = this.playbackSpeed.toString(), r.addEventListener("change", (s) => {
      this.playbackSpeed = parseFloat(s.target.value), localStorage.setItem("tj-pronunciation-speed", s.target.value);
    }));
    const a = this.shadowRoot.getElementById("show-report-btn"), i = this.shadowRoot.getElementById("report-overlay"), l = this.shadowRoot.getElementById("cancel-report-btn"), h = this.shadowRoot.getElementById("generate-btn"), g = this.shadowRoot.getElementById("rc-close-btn"), y = this.shadowRoot.getElementById("submit-score-btn");
    a && (a.onclick = () => this._showReportOverlay()), l && (l.onclick = () => this._hideReportOverlay()), i && (i.onclick = (s) => {
      s.target === i && this._hideReportOverlay();
    }), g && (g.onclick = () => this._hideReportOverlay()), h && (h.onclick = () => this._generateReport()), y && (y.onclick = () => this._submitScore()), this.shadowRoot.querySelectorAll(".translation-toggle").forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.dataset.index, d = this.shadowRoot.querySelector("#trans-" + n);
        d.style.display === "none" ? (d.style.display = "block", c.target.textContent = "Hide Translation") : (d.style.display = "none", c.target.textContent = "Show Translation");
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="play"]').forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.closest("button"), d = n.dataset.text, p = n.dataset.index;
        this.playTTS(d, n).then(() => {
          if (p !== void 0) {
            const m = this.shadowRoot.querySelector(`button[data-action="record"][data-index="${p}"]`);
            m && this._shouldShowAudioControls() && (m.disabled = !1, m.style.opacity = "1", m.style.cursor = "pointer");
          }
        });
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="play-mp"]').forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.closest("button"), d = n.dataset.options.split(","), p = n.dataset.index, m = d[Math.floor(Math.random() * d.length)], b = n.closest(".mp-container");
        b.dataset.currentAnswer = m, b.querySelectorAll("button[data-action='mp-guess']").forEach((u) => {
          u.disabled = !1, u.classList.remove("tj-btn-success", "tj-btn-error"), u.classList.add("tj-btn-secondary");
        });
        const f = this.shadowRoot.querySelector("#feedback-" + p);
        f && (f.textContent = "", f.className = "feedback-msg"), this.playMinimalPairSequence(d, m, n);
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="record"]').forEach((s) => {
      s.addEventListener("click", async (c) => {
        const n = c.target.closest("button"), d = n.dataset.index;
        await this.toggleRecording(n, d);
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="playback"]').forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.closest("button");
        if (n.classList.contains("ready")) {
          const d = n.dataset.index;
          this.playRecording(d, n);
        }
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="mp-guess"]').forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.closest("button"), d = n.dataset.index, p = n.closest(".mp-container"), m = p.dataset.currentAnswer, b = this.shadowRoot.querySelector("#feedback-" + d);
        if (!m) {
          b.textContent = "Please listen to the audio first.", b.className = "feedback-msg";
          return;
        }
        const f = n.textContent.trim() === m.trim();
        if (p.querySelectorAll("button[data-action='mp-guess']").forEach((u) => u.disabled = !0), f) {
          n.classList.add("tj-btn-success"), n.classList.remove("tj-btn-secondary"), b.textContent = "Correct! 🎉", b.className = "feedback-msg correct";
          const u = n.closest(".tj-card");
          u && (u.classList.add("completed"), this.updateProgress());
        } else
          n.classList.add("tj-btn-error"), n.classList.remove("tj-btn-secondary"), b.textContent = "Incorrect.", b.className = "feedback-msg wrong", p.querySelectorAll("button[data-action='mp-guess']").forEach((u) => {
            u.textContent.trim() === m.trim() && (u.classList.add("tj-btn-success"), u.classList.remove("tj-btn-secondary"));
          });
      });
    }), this.shadowRoot.querySelectorAll('.scramble-word[data-action="scramble-move"]').forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.dataset.index, d = this.shadowRoot.querySelector("#dropzone-" + n), p = this.shadowRoot.querySelector("#bank-" + n), m = this.shadowRoot.querySelector(
          "#feedback-" + n
        );
        m && (m.textContent = "", m.className = "feedback-msg"), d.classList.remove("success"), c.target.parentElement === p ? (d.appendChild(c.target), c.target.classList.add("in-dropzone")) : (p.appendChild(c.target), c.target.classList.remove("in-dropzone"));
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="scramble-reset"]').forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.dataset.index, d = this.shadowRoot.querySelector("#dropzone-" + n), p = this.shadowRoot.querySelector("#bank-" + n), m = this.shadowRoot.querySelector(
          "#feedback-" + n
        );
        m && (m.textContent = "", m.className = "feedback-msg"), d.classList.remove("success"), d.querySelectorAll(".scramble-word").forEach((f) => {
          p.appendChild(f), f.classList.remove("in-dropzone");
        });
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="scramble-check"]').forEach((s) => {
      s.addEventListener("click", (c) => {
        const n = c.target.dataset.index, d = this.shadowRoot.querySelector("#dropzone-" + n), p = this.shadowRoot.querySelector(
          "#feedback-" + n
        ), b = this.shadowRoot.querySelector(
          "#scramble-ans-" + n
        ).dataset.answer, f = Array.from(
          d.querySelectorAll(".scramble-word")
        ).map((x) => x.textContent), u = f.join(" ");
        if (f.length === 0) {
          p.textContent = "Please construct a sentence first.", p.className = "feedback-msg";
          return;
        }
        if (u === b) {
          p.textContent = "Correct! 🎉", p.className = "feedback-msg correct", d.classList.add("success");
          const x = c.target.closest(".scramble-container"), w = x.querySelector(".scramble-controls"), j = x.querySelector(".play-audio-btn");
          w && (w.style.display = "none"), j && (j.style.display = "none"), d && (d.style.display = "none");
          const k = c.target.closest(".tj-card");
          k && (k.classList.add("completed"), this.updateProgress()), setTimeout(() => {
            p.textContent = "Activity Completed ✓", d.querySelectorAll(".scramble-word").forEach((C) => C.style.display = "none");
            const S = this.shadowRoot.querySelector("#bank-" + n);
            S && S.querySelectorAll(".scramble-word").forEach((z) => z.style.display = "none");
          }, 3e3);
        } else
          p.textContent = "Incorrect. Try again!", p.className = "feedback-msg wrong";
      });
    });
  }
  _showReportOverlay() {
    const t = this.shadowRoot.getElementById("report-overlay");
    if (t && (t.style.display = "flex"), this.studentInfo.nickname) {
      const e = this.shadowRoot.getElementById("nickname-input"), o = this.shadowRoot.getElementById("number-input"), r = this.shadowRoot.getElementById("homeroom-input");
      e && (e.value = this.studentInfo.nickname), o && (o.value = this.studentInfo.number), r && (r.value = this.studentInfo.homeroom), this._generateReport();
    } else {
      const e = this.shadowRoot.getElementById("initial-form"), o = this.shadowRoot.getElementById("report-area"), r = this.shadowRoot.getElementById("submit-actions");
      e && (e.style.display = "block"), o && (o.style.display = "none"), r && (r.style.display = "none");
    }
  }
  _hideReportOverlay() {
    const t = this.shadowRoot.getElementById("report-overlay");
    t && (t.style.display = "none"), this._currentPlayingAudio && (this._currentPlayingAudio.pause(), this._currentPlayingAudio = null), this.shadowRoot.querySelectorAll(".recording-play-btn.playing").forEach((e) => {
      e.classList.remove("playing"), e.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    });
  }
  _generateReport() {
    const t = this.shadowRoot.getElementById("nickname-input"), e = this.shadowRoot.getElementById("number-input"), o = this.shadowRoot.getElementById("homeroom-input"), r = this.shadowRoot.getElementById("teacher-code-input"), a = t ? t.value.trim() : this.studentInfo.nickname, i = e ? e.value.trim() : this.studentInfo.number, l = o ? o.value.trim() : this.studentInfo.homeroom, h = r ? r.value.trim() : "";
    if (!a || !i) {
      alert("Please enter both nickname and student number.");
      return;
    }
    this.studentInfo = { nickname: a, number: i, homeroom: l, teacherCode: h };
    const g = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length, y = this.shadowRoot.querySelectorAll(".tj-card.completed").length, s = Math.round(y / g * 100) || 0, c = (/* @__PURE__ */ new Date()).toLocaleString();
    let n = "🏆";
    s < 50 ? n = "💪" : s < 80 && (n = "⭐");
    const p = `
          <div class="rc-header">
              <div class="rc-icon">📄</div>
              <div class="rc-title">${this.shadowRoot.getElementById("pronunciationTitle").textContent || "Pronunciation Practice"}</div>
              <div class="rc-subtitle">Report Card</div>
          </div>
          <div class="rc-student">
              <span class="rc-label">Student</span>
              <span class="rc-value">${a} <span class="rc-number">(${i}) ${l ? `- ${l}` : ""}</span></span>
          </div>
          <div class="rc-score-row">
              <div class="rc-score-circle">
                  <div class="rc-score-val">${y}/${g}</div>
                  <div class="rc-score-pct">${s}%</div>
              </div>
              <div class="rc-score-label">${n} ${s >= 80 ? "Excellent!" : s >= 50 ? "Good effort!" : "Keep practicing!"}</div>
          </div>
          <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${s}%"></div></div>
          <div class="rc-details">
              <div class="rc-detail-row"><span>Total Completed</span><span>${y} / ${g} activities</span></div>
              <div class="rc-detail-row"><span>Completed On</span><span>${c}</span></div>
      `, m = this.shadowRoot.getElementById("initial-form"), b = this.shadowRoot.getElementById("report-area"), f = this.shadowRoot.getElementById("submit-actions"), u = this.shadowRoot.getElementById("report-teacher-code");
    u && (u.value = h), m && (m.style.display = "none"), b && (b.style.display = "block", b.innerHTML = p);
    const x = this.shadowRoot.getElementById("report-recordings-container");
    if (x && (x.innerHTML = "", x.style.display = "none", this.recordings.size > 0)) {
      x.style.display = "block";
      const w = document.createElement("div");
      w.classList.add("recordings-section"), w.style.marginTop = "20px", w.style.textAlign = "left";
      const j = document.createElement("h4");
      j.style.display = "flex", j.style.alignItems = "center", j.style.gap = "8px", j.style.margin = "0 0 12px 0", j.style.color = "var(--tj-text-main)", j.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--tj-primary)"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg> Student Recordings', w.appendChild(j);
      const k = document.createElement("div");
      k.classList.add("recordings-list"), k.style.display = "flex", k.style.flexDirection = "column", k.style.gap = "8px", Array.from(this.recordings.keys()).sort((S, C) => S - C).forEach((S) => {
        const C = this.shadowRoot.getElementById(`act-${S}`);
        let z = "Recording " + (parseInt(S) + 1);
        if (C) {
          const B = C.querySelector(".lr-target-word");
          B && (z = B.textContent);
        }
        const v = document.createElement("div");
        v.classList.add("recording-item"), v.style.display = "flex", v.style.alignItems = "center", v.style.gap = "12px", v.style.padding = "8px", v.style.background = "var(--tj-bg-main)", v.style.border = "1px solid var(--tj-border-main)", v.style.borderRadius = "8px";
        const R = document.createElement("button");
        R.classList.add("tj-icon-btn", "recording-play-btn"), R.style.width = "32px", R.style.height = "32px", R.style.padding = "0", R.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', R.title = "Play Recording", R.onclick = () => this._playReportRecording(S, R);
        const E = document.createElement("div");
        E.classList.add("recording-text"), E.style.fontSize = "0.9em", E.style.color = "var(--tj-text-main)", E.textContent = z, v.appendChild(R), v.appendChild(E), k.appendChild(v);
      }), w.appendChild(k), x.appendChild(w);
    }
    f && (f.style.display = "block");
  }
  _playReportRecording(t, e) {
    const o = this.recordings.get(t);
    if (!o) return;
    if (this._currentPlayingAudio && (this._currentPlayingAudio.pause(), this.shadowRoot.querySelectorAll(".recording-play-btn.playing").forEach((a) => {
      a.classList.remove("playing"), a.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    }), this._currentPlayingBtn === e)) {
      this._currentPlayingAudio = null, this._currentPlayingBtn = null;
      return;
    }
    const r = new Audio(o);
    this._currentPlayingAudio = r, this._currentPlayingBtn = e, r.onplay = () => {
      e.classList.add("playing"), e.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="6" width="12" height="12"></rect></svg>';
    }, r.onended = () => {
      e.classList.remove("playing"), e.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', this._currentPlayingAudio = null, this._currentPlayingBtn = null;
    }, r.play().catch((a) => {
      console.error("Error playing recording:", a), e.classList.remove("playing"), e.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    });
  }
  async _submitScore() {
    const t = this.shadowRoot.getElementById("report-teacher-code"), e = t ? t.value.trim() : this.studentInfo.teacherCode;
    if (!(e === this.code)) {
      alert("Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.");
      return;
    }
    if (this.isSubmitting) return;
    const r = this.shadowRoot.getElementById("submit-score-btn"), a = r.textContent;
    this.isSubmitting = !0, r.textContent = "Submitting...", r.disabled = !0;
    const i = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length, l = this.shadowRoot.querySelectorAll(".tj-card.completed").length, h = this.shadowRoot.getElementById("pronunciationTitle").textContent || "Pronunciation Practice", g = {
      nickname: this.studentInfo.nickname,
      homeroom: this.studentInfo.homeroom || "",
      studentId: this.studentInfo.number,
      quizName: "Pron- " + h,
      score: l,
      total: i,
      teacherCode: e
    };
    try {
      await fetch(this.submissionUrl, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(g)
      }), alert("Score successfully submitted!"), r.textContent = "Submitted ✓", r.style.background = "var(--tj-text-muted)";
    } catch (y) {
      console.error("Error submitting score:", y), alert("There was an error submitting your score. Please try again."), r.textContent = a, r.disabled = !1, this.isSubmitting = !1;
    }
  }
  playTTS(t, e) {
    return !this.synth || !this._shouldShowAudioControls() ? Promise.resolve() : new Promise((o, r) => {
      this.synth.cancel();
      const a = new SpeechSynthesisUtterance(t);
      a.lang = this.language, a.rate = this.playbackSpeed;
      let l = this.synth.getVoices().find((c) => c.name === this.selectedVoiceName);
      l || (l = this._getBestVoice(this.language)), l && (a.voice = l);
      let h = !1;
      const g = () => {
        h || (h = !0, clearTimeout(s), e.classList.remove("playing"), this.isPlaying = !1, o());
      };
      a.onstart = () => {
        e.classList.add("playing"), this.isPlaying = !0;
      }, a.onend = () => g(), a.onerror = (c) => {
        h || (h = !0, clearTimeout(s), e.classList.remove("playing"), this.isPlaying = !1, c.error === "interrupted" || c.error === "canceled" ? o() : r(c));
      };
      const y = Math.max(3e3, t.length * 120), s = T() ? setTimeout(() => g(), y) : setTimeout(() => g(), y + 5e3);
      this.synth.speak(a);
    });
  }
  // TTS Guide 1.3 Methods
  _getBestVoice(t) {
    return $(this.synth, t);
  }
  _showVoiceOverlay() {
    const t = this.shadowRoot.getElementById("voice-overlay");
    t && (t.style.display = "flex", this._updateVoiceList());
  }
  _hideVoiceOverlay() {
    const t = this.shadowRoot.getElementById("voice-overlay");
    t && (t.style.display = "none");
  }
  _updateVoiceList() {
    const t = this.shadowRoot.getElementById("voice-list");
    if (!t) return;
    const e = this.synth.getVoices(), o = this.language.split(/[-_]/)[0].toLowerCase(), r = e.filter(
      (i) => i.lang.split(/[-_]/)[0].toLowerCase() === o
    ), a = this._getBestVoice(this.language);
    t.innerHTML = "", r.sort((i, l) => i.name.localeCompare(l.name)), r.forEach((i) => {
      const l = document.createElement("button");
      l.classList.add("voice-option-btn"), (this.selectedVoiceName === i.name || !this.selectedVoiceName && a && i.name === a.name) && l.classList.add("active"), l.innerHTML = `<span>${i.name}</span>`, a && i.name === a.name && (l.innerHTML += '<span class="badge">Best</span>'), l.onclick = () => {
        this.selectedVoiceName = i.name, localStorage.setItem("tj-pronunciation-voice", i.name), this._updateVoiceList(), this._hideVoiceOverlay();
      }, t.appendChild(l);
    });
  }
  _shouldShowAudioControls() {
    return q(this.synth);
  }
  _getAndroidIntentLink() {
    return _();
  }
  checkBrowserSupport() {
    if (!this._shouldShowAudioControls()) {
      const t = this.shadowRoot.getElementById("browser-prompt-overlay");
      if (t) {
        t.classList.add("active");
        const e = this._getAndroidIntentLink(), o = this.shadowRoot.getElementById("browser-action-btn");
        e ? (o.href = e, o.textContent = "Open in Chrome") : (o.onclick = (r) => {
          (!o.href || o.href === "javascript:void(0)") && (r.preventDefault(), alert(
            "Please open this page in Safari or Chrome for the best experience with audio features."
          ));
        }, o.textContent = "Use Safari / Chrome");
      }
    }
  }
  async playMinimalPairSequence(t, e, o) {
    if (o.classList.contains("playing")) return;
    const a = o.closest(".mp-container").querySelectorAll(".mp-option-btn");
    try {
      for (let i = 0; i < 2; i++) {
        for (const l of t) {
          const h = Array.from(a).find(
            (g) => g.textContent.trim() === l.trim()
          );
          h && h.classList.add("highlight"), await this.playTTS(l, o), h && h.classList.remove("highlight"), await new Promise((g) => setTimeout(g, 600));
        }
        await new Promise((l) => setTimeout(l, 400));
      }
      await new Promise((i) => setTimeout(i, 500)), await this.playTTS(e, o);
    } catch (i) {
      console.error("Audio sequence error:", i), o.classList.remove("playing"), a.forEach((l) => l.classList.remove("highlight"));
    }
  }
  async toggleRecording(t, e) {
    if (t.classList.contains("recording"))
      this.mediaRecorder && this.mediaRecorder.state !== "inactive" && this.mediaRecorder.stop(), t.classList.remove("recording");
    else
      try {
        this.audioChunks = [], this.mediaRecorder = await M(
          (o) => {
            o.data.size > 0 && this.audioChunks.push(o.data);
          },
          (o) => {
            const r = new Blob(this.audioChunks, { type: o }), a = URL.createObjectURL(r);
            this.recordings.has(e) && URL.revokeObjectURL(this.recordings.get(e)), this.recordings.set(e, a);
            const i = this.shadowRoot.querySelector(
              `#playback-${e}`
            );
            i && (i.classList.add("ready"), i.disabled = !1, i.style.opacity = "1", i.style.cursor = "pointer"), this.audioChunks = null;
          }
        ), t.classList.add("recording");
      } catch (o) {
        console.error("Error accessing microphone:", o), alert(
          "Could not access microphone. Please ensure you have granted permission."
        );
      }
  }
  playRecording(t, e) {
    const o = this.recordings.get(t);
    if (!o) return;
    const r = new Audio();
    r.oncanplaythrough = () => {
      r.play().catch((a) => {
        console.error("Error playing recording:", a), e.classList.remove("playing");
      });
    }, r.onplay = () => {
      e.classList.add("playing");
    }, r.onended = () => {
      e.classList.remove("playing");
      const a = e.closest(".tj-card");
      a && !a.classList.contains("completed") && (a.classList.add("completed"), this.updateProgress());
    }, r.onerror = (a) => {
      console.error("Error loading recording for playback:", a), e.classList.remove("playing");
    }, r.src = o, r.load();
  }
}
customElements.define("tj-pronunciation", H);
