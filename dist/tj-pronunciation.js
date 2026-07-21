import { a as e, i as t, n, r, t as i } from "./chunks/audio-utils-ChLf1XGP.js";
import { t as a } from "./chunks/tj-config-BQN38dTq.js";
//#region src/tj-shared.css?inline
var o = ":host{--tj-primary-color:#2563eb;--tj-primary-hover:#1d4ed8;--tj-primary-light:#eff6ff;--tj-primary-border:#bfdbfe;--tj-success-color:#22c55e;--tj-success-hover:#16a34a;--tj-success-light:#f0fdf4;--tj-success-border:#bbf7d0;--tj-error-color:#ef4444;--tj-error-hover:#dc2626;--tj-error-light:#fef2f2;--tj-error-border:#fecaca;--tj-text-main:#1e293b;--tj-text-muted:#64748b;--tj-text-light:#94a3b8;--tj-bg-main:transparent;--tj-bg-card:#fffffff2;--tj-bg-alt:#f8fafc;--tj-border-light:#f1f5f9;--tj-border-main:#e2e8f0;--tj-border-dark:#cbd5e1;--tj-font-family:inherit;--tj-font-size-base:16px;--tj-border-radius-sm:.5em;--tj-border-radius-md:.8em;--tj-border-radius-lg:1.2em;--tj-border-radius-full:50%;--tj-shadow-sm:0 1px 3px #0000001a;--tj-shadow-md:0 4px 12px #0000000d;--tj-shadow-lg:0 10px 25px -5px #0000001a;--tj-shadow-glass:0 4px 20px #0000000d;--tj-backdrop-blur:blur(10px);--tj-transition-fast:all .2s cubic-bezier(.4, 0, .2, 1);--tj-transition-normal:all .3s ease;font-family:var(--tj-font-family);color:var(--tj-text-main);box-sizing:border-box;background-color:#0000;display:block;position:relative}@media (prefers-color-scheme:dark){:host{--tj-primary-light:#1e3a8a;--tj-primary-border:#1e40af;--tj-success-light:#14532d;--tj-success-border:#166534;--tj-error-light:#7f1d1d;--tj-error-border:#991b1b;--tj-text-main:#f8fafc;--tj-text-muted:#94a3b8;--tj-text-light:#cbd5e1;--tj-bg-main:#0f172a;--tj-bg-card:#1e293bf2;--tj-bg-alt:#1e293b;--tj-border-light:#334155;--tj-border-main:#475569;--tj-border-dark:#64748b}}:host *{box-sizing:border-box}.tj-card{background:var(--tj-bg-card);-webkit-backdrop-filter:var(--tj-backdrop-blur);backdrop-filter:var(--tj-backdrop-blur);border-radius:var(--tj-border-radius-lg);box-shadow:var(--tj-shadow-md);border:1px solid var(--tj-border-main);transition:var(--tj-transition-normal);padding:1.5em}.tj-btn{cursor:pointer;border-radius:var(--tj-border-radius-md);transition:var(--tj-transition-fast);outline:none;justify-content:center;align-items:center;gap:.5em;padding:.6em 1.2em;font-family:inherit;font-size:1em;font-weight:600;display:inline-flex}.tj-btn-primary{background:var(--tj-primary-color);color:#fff;border:1px solid var(--tj-primary-hover);box-shadow:var(--tj-shadow-sm)}.tj-btn-primary:hover:not(:disabled){background:var(--tj-primary-hover);box-shadow:var(--tj-shadow-md);transform:translateY(-1px)}.tj-btn-secondary{background:var(--tj-bg-alt);color:#475569;border:1px solid var(--tj-border-main)}.tj-btn-secondary:hover:not(:disabled){background:var(--tj-border-light);border-color:var(--tj-border-dark);color:var(--tj-primary-color)}.tj-btn-success{background:var(--tj-success-color);color:#fff;border:1px solid var(--tj-success-hover)}.tj-btn-error{background:var(--tj-error-color);color:#fff;border:1px solid var(--tj-error-hover)}.tj-icon-btn{background:var(--tj-bg-alt);border:1px solid var(--tj-border-light);border-radius:var(--tj-border-radius-full);cursor:pointer;width:3.5em;height:3.5em;transition:var(--tj-transition-fast);color:var(--tj-text-muted);flex-shrink:0;justify-content:center;align-items:center;padding:.5em;display:inline-flex}.tj-icon-btn:hover{background:var(--tj-primary-light);color:var(--tj-primary-color);border-color:var(--tj-primary-border);transform:scale(1.1)}.tj-input{border:1px solid var(--tj-border-main);border-radius:var(--tj-border-radius-sm);width:100%;transition:var(--tj-transition-fast);outline:none;padding:1em;font-size:1em}.tj-input:focus{border-color:var(--tj-primary-color);box-shadow:0 0 0 3px var(--tj-primary-light)}.tj-sticky-bar{-webkit-backdrop-filter:var(--tj-backdrop-blur);backdrop-filter:var(--tj-backdrop-blur);border-radius:var(--tj-border-radius-md);box-shadow:var(--tj-shadow-glass);z-index:100;background:#ffffffe6;border:1px solid #e2e8f0cc;justify-content:space-between;align-items:center;max-height:8rem;padding:.8em 1.2em;display:flex;position:sticky;top:0;overflow-y:auto}.tj-h2{color:var(--tj-text-main);margin-top:0;margin-bottom:1em;font-size:1.5em}.tj-h3{color:var(--tj-primary-color);margin-top:0;margin-bottom:.5em;font-size:1.2em}.tj-text-muted{color:var(--tj-text-muted)}.tj-flex-center{justify-content:center;align-items:center;display:flex}.tj-flex-between{justify-content:space-between;align-items:center;display:flex}.tj-divider{border:none;border-top:2px dashed var(--tj-border-main);margin:2em 0;position:relative}.tj-divider:after{content:attr(data-label);color:var(--tj-text-light);text-transform:uppercase;letter-spacing:.1em;background:#fff;padding:0 1em;font-size:.9em;font-weight:600;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tj-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:1000;background:#0f172acc;justify-content:center;align-items:center;animation:.3s tj-fadeIn;display:none;position:fixed;inset:0}.tj-overlay.active{display:flex}@keyframes tj-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes tj-shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes tj-bounce{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}.tj-anim-shake{animation:.4s tj-shake}.tj-anim-bounce{animation:.4s tj-bounce}", s = "@import \"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap\";:host{max-width:80em;margin:1em auto;font-family:Outfit,sans-serif;display:block}.pronunciation-wrapper{padding-bottom:4rem}.activities-wrapper{flex-direction:column;gap:2em;padding:1em 1em 5em;display:flex}.header-main{flex:1}.progress-text{color:var(--tj-primary-color);white-space:nowrap;font-size:1.1em;font-weight:700}.play-audio-btn.playing{animation:1s infinite alternate pulse}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #2563eb66}to{transform:scale(1.05);box-shadow:0 0 0 10px #2563eb00}}.lr-container{flex-direction:column;align-items:center;gap:1.5rem;display:flex}.lr-target-word{text-align:center;color:var(--tj-text-main);margin-bottom:.5rem;font-family:Inter,sans-serif;font-size:2em;font-weight:500}.lr-phonetic{color:var(--tj-text-muted);margin-top:.2rem;font-family:monospace;font-size:1.25em}.lr-translation{color:var(--tj-text-muted);margin-top:.8rem;font-size:1.5em;font-style:italic}.translation-toggle{border-radius:var(--tj-border-radius-full);padding:.4em 1em;font-size:.8em}.lr-controls{justify-content:center;align-items:center;gap:2rem;width:100%;margin-top:1rem;display:flex}.lr-control-group{flex-direction:column;align-items:center;gap:.5rem;display:flex}.lr-label{color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em;font-size:.75em;font-weight:700}.record-btn{color:var(--tj-error-color)}.record-btn:hover{background:var(--tj-error-light);color:var(--tj-error-hover);border-color:var(--tj-error-border)}.record-btn.recording{background:var(--tj-error-color);color:#fff;border-color:var(--tj-error-hover);animation:1.5s infinite pulse-record}@keyframes pulse-record{0%{transform:scale(1);box-shadow:0 0 #ef444466}70%{transform:scale(1.05);box-shadow:0 0 0 15px #ef444400}to{transform:scale(1);box-shadow:0 0 #ef444400}}.playback-btn.ready{color:var(--tj-success-color)}.playback-btn.ready:hover{background:var(--tj-success-light);color:var(--tj-success-hover);border-color:var(--tj-success-border)}.playback-btn.playing{background:var(--tj-success-color);color:#fff;animation:1s infinite alternate pulse-success}@keyframes pulse-success{0%{transform:scale(1);box-shadow:0 0 #22c55e66}to{transform:scale(1.05);box-shadow:0 0 0 10px #22c55e00}}.mp-container{flex-direction:column;align-items:center;gap:1.5rem;display:flex}.mp-options{flex-wrap:wrap;justify-content:center;gap:1rem;width:100%;display:flex}.mp-option-btn{min-width:120px;padding:.8rem 1.5rem}.mp-option-btn.highlight{border-color:var(--tj-primary-color);background:var(--tj-primary-light);transform:translateY(-2px)}.mp-focus{color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em;font-size:1.2em;font-weight:700}.mp-instr{color:var(--tj-text-muted);font-size:1.2em;font-style:italic}.feedback-msg{min-height:1.2em;font-size:1.1em;font-weight:700}.feedback-msg.correct{color:var(--tj-success-color)}.feedback-msg.wrong{color:var(--tj-error-color)}.scramble-container{flex-direction:column;align-items:center;gap:1.5rem;width:100%;display:flex}.scramble-dropzone{border:2px dashed var(--tj-border-main);border-radius:var(--tj-border-radius-lg);background:var(--tj-bg-alt);width:100%;min-height:80px;transition:var(--tj-transition-fast);flex-wrap:wrap;justify-content:center;align-items:center;gap:.5rem;padding:1rem;display:flex}.scramble-dropzone.success{border-color:var(--tj-success-color);background:var(--tj-success-light)}.scramble-bank{flex-wrap:wrap;justify-content:center;gap:.75rem;width:100%;display:flex}.scramble-word{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:var(--tj-border-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none;box-shadow:var(--tj-shadow-sm);transition:var(--tj-transition-fast);padding:.6rem 1.2rem;font-weight:600}.scramble-word:hover{border-color:var(--tj-primary-color);box-shadow:var(--tj-shadow-md);color:var(--tj-primary-color);transform:translateY(-2px)}.scramble-word.in-dropzone{background:var(--tj-primary-light);border-color:var(--tj-primary-border);color:var(--tj-primary-color)}.scramble-controls{gap:1rem;display:flex}.voice-card{flex-direction:column;max-height:80vh;display:flex}.voice-list{flex:1;padding:.5rem;overflow-y:auto}.voice-option-btn{text-align:left;border:1px solid var(--tj-border-main);border-radius:var(--tj-border-radius-md);background:var(--tj-bg-card);width:100%;color:var(--tj-text-main);cursor:pointer;transition:var(--tj-transition-fast);justify-content:space-between;align-items:center;margin-bottom:.5rem;padding:.8rem 1.2rem;display:flex}.voice-option-btn:hover{background-color:var(--tj-bg-alt);border-color:var(--tj-primary-color);color:var(--tj-primary-color)}.voice-option-btn.active{background:var(--tj-primary-light);border-color:var(--tj-primary-color);color:var(--tj-primary-color);font-weight:700}.badge{background:var(--tj-primary-color);color:#fff;border-radius:var(--tj-border-radius-full);text-transform:uppercase;padding:.2rem .6rem;font-size:.7em;font-weight:800}.close-voice-btn{justify-content:center;align-items:center;width:2em;height:2em;padding:0;display:flex}.tj-card.completed{border-color:var(--tj-success-color);background:var(--tj-success-light);box-shadow:var(--tj-shadow-md), 0 0 0 1px var(--tj-success-border)}.report-btn{background:var(--tj-primary-color);color:#fff;border-radius:var(--tj-border-radius-md);cursor:pointer;border:none;align-self:center;align-items:center;gap:8px;margin-top:2em;padding:12px 28px;font-size:1.1em;font-weight:700;transition:background .2s;display:inline-flex}.report-btn:hover{filter:brightness(.9)}.report-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:1000;background:#0f172acc;justify-content:center;align-items:center;display:flex;position:fixed;inset:0}.report-modal{background:var(--tj-bg-card);color:var(--tj-text-main);border:1px solid var(--tj-border-main);text-align:center;border-radius:16px;width:92%;max-width:420px;max-height:90vh;padding:28px 24px;overflow-y:auto;box-shadow:0 25px 50px -12px #0000004d}.report-modal h2{color:var(--tj-text-main);margin:8px 0 4px}.report-modal p{color:var(--tj-text-muted);margin:0 0 16px;font-size:.95em}.report-icon{margin-bottom:4px;font-size:2.5em}.report-modal input{box-sizing:border-box;background:var(--tj-bg-main);width:100%;color:var(--tj-text-main);border:1px solid var(--tj-border-main);border-radius:8px;outline:none;margin-bottom:12px;padding:12px 14px;font-size:1em;transition:border-color .2s;display:block}.report-modal input:focus{border-color:var(--tj-primary-color)}.generate-btn{background:var(--tj-primary-color);color:#fff;cursor:pointer;border:none;border-radius:8px;width:100%;margin-top:8px;padding:14px;font-size:1.05em;font-weight:700;transition:background .2s;display:block}.generate-btn:hover{filter:brightness(.9)}.generate-btn:disabled{opacity:.7;cursor:not-allowed}.cancel-btn{width:100%;color:var(--tj-text-muted);cursor:pointer;background:0 0;border:none;margin-top:8px;padding:12px;font-size:.95em;font-weight:600;display:block}.cancel-btn:hover{color:var(--tj-text-main)}.report-area{text-align:left}.rc-header{text-align:center;margin-bottom:24px}.rc-icon{margin-bottom:8px;font-size:2.5em}.rc-title{color:var(--tj-text-main);margin-bottom:4px;font-size:1.4em;font-weight:700}.rc-subtitle{color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em;font-size:.9em;font-weight:600}.rc-activity{background:var(--tj-bg-alt);color:var(--tj-text-main);border-radius:20px;margin-top:12px;padding:4px 12px;font-size:.85em;font-weight:600;display:inline-block}.rc-student{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:12px;justify-content:space-between;align-items:center;margin-bottom:24px;padding:16px;display:flex}.rc-label{color:var(--tj-text-muted);font-size:.9em;font-weight:600}.rc-value{color:var(--tj-text-main);font-weight:700}.rc-number{color:var(--tj-text-muted);font-size:.9em;font-weight:500}.rc-score-row{align-items:center;gap:20px;margin-bottom:16px;display:flex}.rc-score-circle{background:var(--tj-primary-light);width:80px;height:80px;color:var(--tj-primary-color);border:3px solid var(--tj-primary-color);border-radius:50%;flex-direction:column;flex-shrink:0;justify-content:center;align-items:center;display:flex}.rc-score-val{font-size:1.5em;font-weight:800;line-height:1}.rc-score-pct{margin-top:2px;font-size:.85em;font-weight:700}.rc-score-label{color:var(--tj-text-main);font-size:1.1em;font-weight:700}.rc-bar-track{background:var(--tj-bg-alt);border-radius:4px;height:8px;overflow:hidden}.rc-bar-fill{background:var(--tj-primary-color);border-radius:4px;height:100%}.rc-details{background:var(--tj-bg-alt);border-radius:12px;margin-bottom:24px;padding:16px;font-size:.9em}.rc-detail-row{justify-content:space-between;margin-bottom:8px;display:flex}.rc-detail-row:last-child{margin-bottom:0}.rc-detail-row span:first-child{color:var(--tj-text-muted);font-weight:500}.rc-detail-row span:last-child{color:var(--tj-text-main);font-weight:600}.rc-actions{flex-direction:column;gap:8px;display:flex}.rc-close-btn{width:100%;color:var(--tj-text-main);border:2px solid var(--tj-border-main);cursor:pointer;background:0 0;border-radius:8px;padding:14px;font-size:1em;font-weight:700;transition:all .2s;display:block}.rc-close-btn:hover{background:var(--tj-bg-alt)}.tj-speed-control{background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);height:2.5em;transition:var(--tj-transition-fast);color:var(--tj-text-muted);cursor:pointer;border-radius:2em;align-items:center;gap:.25em;padding:.25em .5em .25em .75em;display:inline-flex;position:relative}.tj-speed-control:hover{background:var(--tj-primary-light);color:var(--tj-primary-color);border-color:var(--tj-primary-border)}.tj-speed-icon{opacity:.85;flex-shrink:0}.tj-speed-select{color:inherit;cursor:pointer;appearance:none;background:0 0;border:none;outline:none;padding:0 1.2em 0 .2em;font-family:inherit;font-size:.9em;font-weight:700}.tj-speed-control:after{content:\"\";pointer-events:none;border-top:5px solid;border-left:4px solid #0000;border-right:4px solid #0000;position:absolute;top:50%;right:.8em;transform:translateY(-50%)}@media (width<=600px){.tj-sticky-bar{flex-direction:column;align-items:flex-start;gap:.6em;padding:.6em .8em}.tj-sticky-bar .tj-flex-center{justify-content:space-between;gap:.5em;width:100%}.tj-speed-control{height:2.2em;padding:.25em .4em .25em .6em;font-size:.85em}.tj-speed-control:after{right:.5em}.tj-speed-select{padding-right:.9em}#voice-btn.tj-icon-btn{width:2.2em;height:2.2em;padding:.3em}}", c = "<div class=\"pronunciation-wrapper\" translate=\"no\">\n    <div class=\"tj-sticky-bar\">\n        <div class=\"header-main\">\n            <h1 class=\"tj-h3\" id=\"pronunciationTitle\" style=\"margin: 0;\">Pronunciation Practice</h1>\n            <p class=\"instructions tj-text-muted\" id=\"pronunciationInstructions\"\n                style=\"display: none; margin: 0; font-size: 0.9em;\">Please complete all activities to generate a report\n                card.</p>\n        </div>\n        <div class=\"tj-flex-center\" style=\"gap: 1em;\">\n            <div class=\"progress-text\">0 / 0</div>\n            <div class=\"tj-speed-control\" title=\"Playback Speed\">\n                <svg class=\"tj-speed-icon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\">\n                    <path\n                        d=\"M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 12 6a7.89 7.89 0 0 1 6 2.73l1.42-1.42A9.91 9.91 0 0 0 12 4a10 10 0 0 0-7.68 16.4h15.36A10 10 0 0 0 20.38 8.57zM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3-6h-2v4h2V6z\" />\n                </svg>\n                <select id=\"speed-select\" class=\"tj-speed-select\">\n                    <option value=\"0.5\">0.5x</option>\n                    <option value=\"0.6\">0.6x</option>\n                    <option value=\"0.7\">0.7x</option>\n                    <option value=\"0.8\">0.8x</option>\n                    <option value=\"0.9\">0.9x</option>\n                    <option value=\"1.0\">1.0x</option>\n                    <option value=\"1.2\">1.2x</option>\n                </select>\n            </div>\n            <button id=\"voice-btn\" class=\"tj-icon-btn\" title=\"Choose Voice\">\n                <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\">\n                    <path\n                        d=\"M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z\" />\n                </svg>\n            </button>\n        </div>\n    </div>\n    <div class=\"activities-wrapper\" id=\"activitiesContainer\">\n    </div>\n    <div style=\"text-align: center; width: 100%; margin-bottom: 2rem;\">\n        <button class=\"report-btn\" id=\"show-report-btn\" style=\"display: none;\">📄 See Report Card</button>\n    </div>\n\n\n    <!-- Report Card Overlay -->\n    <div class=\"report-overlay\" id=\"report-overlay\" style=\"display:none;\">\n        <div class=\"report-modal\">\n            <div class=\"initial-form\" id=\"initial-form\">\n                <div class=\"report-icon\">📄</div>\n                <h2>Report Card</h2>\n                <p>Enter your details to generate your report.</p>\n                <input type=\"text\" id=\"nickname-input\" placeholder=\"Jake\" autocomplete=\"off\">\n                <input type=\"text\" id=\"number-input\" placeholder=\"01\" autocomplete=\"off\" inputmode=\"numeric\">\n                <input type=\"text\" id=\"homeroom-input\" placeholder=\"1/1\" autocomplete=\"off\">\n                <input type=\"text\" id=\"teacher-code-input\" placeholder=\"Teacher Code\" autocomplete=\"off\"\n                    inputmode=\"numeric\">\n                <button class=\"generate-btn\" id=\"generate-btn\">Generate Report</button>\n                <button class=\"cancel-btn\" id=\"cancel-report-btn\">Cancel</button>\n            </div>\n            <div class=\"report-area\" id=\"report-area\" style=\"display:none;\"></div>\n            <div id=\"submit-actions\" style=\"display:none; margin-top: 1em;\">\n                <div\n                    style=\"padding: 12px; background: var(--tj-bg-alt); border-radius: 8px; border: 1px dashed var(--tj-border-main); text-align: left; margin-bottom: 1em;\">\n                    <p\n                        style=\"margin: 0 0 8px 0; font-size: 0.85em; color: var(--tj-text-muted); font-weight: 600; text-transform: uppercase;\">\n                        Submission (Optional)</p>\n                    <input type=\"text\" id=\"report-teacher-code\" placeholder=\"Enter Teacher Code\"\n                        style=\"width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid var(--tj-border-main); border-radius: 6px; font-size: 0.9em; margin-bottom: 4px; background: var(--tj-bg-main); color: var(--tj-text-main);\">\n                    <p style=\"margin: 4px 0 8px 0; font-size: 0.8em; color: var(--tj-text-muted);\">Enter the teacher\n                        code to submit, or take a screenshot of this page.</p>\n                    <button class=\"generate-btn\" id=\"submit-score-btn\"\n                        style=\"background: var(--tj-success-color); width: 100%; margin-top: 0.5em;\">Submit\n                        Score</button>\n                </div>\n                <div id=\"report-recordings-container\" style=\"display:none;\"></div>\n                <button class=\"cancel-btn\" id=\"rc-close-btn\" style=\"width: 100%; margin-top: 1em;\">↩ Return to\n                    Activity</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- Voice Selection Overlay -->\n    <div class=\"tj-overlay\" id=\"voice-overlay\">\n        <div class=\"tj-card voice-card\" style=\"width: 90%; max-width: 450px;\">\n            <div class=\"voice-card-header tj-flex-between\" style=\"margin-bottom: 1em;\">\n                <h3 class=\"tj-h3\" style=\"margin: 0;\">Choose Voice</h3>\n                <button class=\"tj-icon-btn close-voice-btn\" id=\"close-voice-btn\">\n                    <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"currentColor\">\n                        <path\n                            d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n                    </svg>\n                </button>\n            </div>\n            <div class=\"voice-list\" id=\"voice-list\"></div>\n        </div>\n    </div>\n\n    <div class=\"tj-overlay\" id=\"browser-prompt-overlay\" style=\"padding: 1rem;\">\n        <div class=\"tj-card\" style=\"max-width: 400px; text-align: center;\">\n            <h2 class=\"tj-h2\">Better in a Browser</h2>\n            <p class=\"tj-text-muted\" style=\"margin-bottom: 2em; line-height: 1.6;\">It looks like you're using an in-app\n                browser. For the best experience (including audio features), please open this page in <b>Chrome</b> or\n                <b>Safari</b>.</p>\n            <a id=\"browser-action-btn\" class=\"tj-btn tj-btn-primary\" style=\"width: 100%; text-decoration: none;\"\n                href=\"javascript:void(0)\">Open Browser</a>\n            <button class=\"tj-btn tj-btn-secondary\"\n                style=\"width: 100%; margin-top: 1em; border: none; background: transparent; text-decoration: underline;\"\n                onclick=\"this.closest('.tj-overlay').classList.remove('active')\">Continue anyway</button>\n        </div>\n    </div>\n</div>", l = {
	play: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>",
	stop: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\"></rect></svg>",
	mic: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z\"/><path d=\"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z\"/></svg>",
	headphones: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path></svg>"
}, u = class extends HTMLElement {
	get code() {
		return a(this).teacherCode;
	}
	set code(e) {
		e == null ? this.removeAttribute("code") : this.setAttribute("code", e);
	}
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this.synth = window.speechSynthesis, this.language = "en-US", this.mediaRecorder = null, this.audioChunks = [], this.recordings = /* @__PURE__ */ new Map(), this.lrState = /* @__PURE__ */ new Map(), this.selectedVoiceName = localStorage.getItem("tj-pronunciation-voice"), this.isPlaying = !1, this.submissionUrl = "", this.studentInfo = {
			nickname: "",
			number: "",
			homeroom: ""
		}, this.isSubmitting = !1;
		let e = parseFloat(localStorage.getItem("tj-pronunciation-speed"));
		this.playbackSpeed = isNaN(e) ? .7 : e, this.synth && (this.synth.onvoiceschanged = () => this._updateVoiceList());
	}
	connectedCallback() {
		let e = a(this);
		this.submissionUrl = e.submissionUrl;
		let t = e.dataUrl;
		requestAnimationFrame(() => {
			let e = "";
			if (this.config) if (typeof this.config == "object") {
				this.render(this.config);
				return;
			} else e = String(this.config);
			else this.hasAttribute("config") ? e = this.getAttribute("config") : this.querySelector("script[type=\"application/json\"]") ? e = this.querySelector("script[type=\"application/json\"]").textContent.trim() : t || (e = this.textContent.trim());
			if (e) try {
				let t = JSON.parse(e);
				this.render(t);
			} catch (e) {
				console.error("Error parsing inline JSON data", e), this.shadowRoot.innerHTML = "<p style=\"color: red;\">Error loading pronunciation data: Invalid JSON.</p>";
			}
			else t && this.loadData(t);
		});
	}
	async loadData(e) {
		try {
			let t = await (await fetch(e)).json();
			this.render(t);
		} catch (e) {
			console.error("Error loading pronunciation data:", e), this.shadowRoot.innerHTML = "<p style=\"color: red;\">Error loading pronunciation data.</p>";
		}
	}
	render(e) {
		e.language && (this.language = e.language);
		let t = document.createElement("template");
		t.innerHTML = `<style>${o}</style><style>${s}</style>${c}`, this.shadowRoot.firstChild && (this.shadowRoot.innerHTML = ""), this.shadowRoot.appendChild(t.content.cloneNode(!0)), e.title && (this.shadowRoot.getElementById("pronunciationTitle").textContent = e.title);
		let n = "";
		if (e.activities && Array.isArray(e.activities) && (n = e.activities.map((e, t) => this.renderActivity(e, t)).join("")), this.shadowRoot.getElementById("activitiesContainer").innerHTML = n, this.updateProgress(), this.attachEventListeners(), this._updateVoiceList(), !this._shouldShowAudioControls()) {
			let e = this.shadowRoot.getElementById("voice-btn");
			e && (e.style.display = "none");
			let t = this.shadowRoot.querySelector(".tj-speed-control");
			t && (t.style.display = "none"), this.checkBrowserSupport();
		}
	}
	renderActivity(e, t) {
		switch (e.type) {
			case "listen_record": return this.renderListenRecord(e, t);
			case "minimal_pair": return this.renderMinimalPair(e, t);
			case "stress_match": return "<div class=\"tj-card\"><h2 class=\"tj-h3\">Stress Match Activity (Coming Soon)</h2></div>";
			case "scramble": return this.renderScramble(e, t);
			case "odd_one_out": return "<div class=\"tj-card\"><h2 class=\"tj-h3\">Odd One Out Activity (Coming Soon)</h2></div>";
			default: return `<div class="tj-card"><p>Unknown activity type: ${e.type}</p></div>`;
		}
	}
	updateProgress() {
		let e = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']"), t = e.length, n = 0;
		e.forEach((e) => {
			e.classList.contains("completed") && n++;
		});
		let r = this.shadowRoot.querySelector(".progress-text");
		r && (r.textContent = `${n} / ${t}`);
		let i = this.shadowRoot.getElementById("show-report-btn");
		i && (t > 0 ? i.style.display = "inline-flex" : i.style.display = "none");
	}
	renderListenRecord(e, t) {
		return `
            <div class="tj-card" id="act-${t}">
                <div class="activity-title tj-h3">${l.headphones} Listen & Record</div>
                <div class="lr-container">
                    <div style="text-align: center;">
                        <div class="lr-target-word">${e.targetText}</div>
                        ${e.phoneticHint ? `<div class="lr-phonetic">/[${e.phoneticHint}]/</div>` : ""}
                        
                        ${e.translation ? `
                            <button class="tj-btn tj-btn-secondary translation-toggle" data-index="${t}" style="margin-top: 1em;">Show Translation</button>
                            <div class="lr-translation hidden" id="trans-${t}" style="display: none;">${e.translation}</div>
                        ` : ""}
                    </div>

                    <div class="lr-controls">
                        <div class="lr-control-group">
                            <span class="lr-label">Listen</span>
                            <button class="tj-icon-btn play-audio-btn" data-action="play" data-index="${t}" data-text="${e.targetText.replace(/"/g, "&quot;")}">
                                ${l.play}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Record</span>
                            <button class="tj-icon-btn record-btn" data-action="record" data-index="${t}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${l.mic}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Playback</span>
                            <button class="tj-icon-btn playback-btn" id="playback-${t}" data-action="playback" data-index="${t}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${l.play}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
	}
	renderMinimalPair(e, t) {
		return !e.options || !Array.isArray(e.options) ? "<div class=\"tj-card\"><p>Error: Minimal Pair requires 'options' array.</p></div>" : `
            <div class="tj-card" id="act-${t}">
                <div class="activity-title tj-h3">
                    <span style="display:inline-block; margin-right: 0.5rem;">⚖️</span> Minimal Pair
                </div>
                <div class="mp-container">
                    ${e.focus ? `<div class="mp-focus">Focus: ${e.focus}</div>` : ""}
                    <div class="mp-instr">Click on the last word that you hear.</div>
                    
                    <button class="tj-icon-btn play-audio-btn" data-action="play-mp" data-index="${t}" 
                            data-options="${e.options.join(",").replace(/"/g, "&quot;")}">
                        ${l.play}
                    </button>

                    <div class="mp-options">
                        ${e.options.map((e) => `
                            <button class="tj-btn tj-btn-secondary mp-option-btn" data-action="mp-guess" data-index="${t}">${e}</button>
                        `).join("")}
                    </div>
                    <div class="feedback-msg" id="feedback-${t}"></div>
                </div>
            </div>
        `;
	}
	renderScramble(e, t) {
		if (!e.words || !Array.isArray(e.words)) return "<div class=\"tj-card\"><p>Error: Scramble requires 'words' array.</p></div>";
		let n = [...e.words];
		e.distractors && Array.isArray(e.distractors) && (n = n.concat(e.distractors));
		for (let e = n.length - 1; e > 0; e--) {
			let t = Math.floor(Math.random() * (e + 1));
			[n[e], n[t]] = [n[t], n[e]];
		}
		return `
            <div class="tj-card" id="act-${t}">
                <div class="activity-title tj-h3">
                    <span style="display:inline-block; margin-right: 0.5rem;">🧩</span> Dictation Scramble
                </div>
                <div class="scramble-container">
                    <button class="tj-icon-btn play-audio-btn" data-action="play" data-text="${e.audioText.replace(/"/g, "&quot;")}">
                        ${l.play}
                    </button>

                    <!-- Hidden data store for correct answer -->
                    <div id="scramble-ans-${t}" style="display:none;" data-answer="${e.words.join(" ").replace(/"/g, "&quot;")}"></div>

                    <div class="scramble-dropzone" id="dropzone-${t}">
                        <!-- Words dropped here -->
                    </div>

                    <div class="scramble-bank" id="bank-${t}">
                        ${n.map((e, n) => `
                            <div class="scramble-word" data-action="scramble-move" data-index="${t}" data-word-id="${n}">${e}</div>
                        `).join("")}
                    </div>

                    <div class="scramble-controls">
                        <button class="tj-btn tj-btn-secondary scramble-btn" data-action="scramble-reset" data-index="${t}">Reset</button>
                        <button class="tj-btn tj-btn-primary scramble-btn" data-action="scramble-check" data-index="${t}">Check</button>
                    </div>
                    
                    <div class="feedback-msg" id="feedback-${t}"></div>
                </div>
            </div>
        `;
	}
	attachEventListeners() {
		let e = this.shadowRoot.getElementById("voice-btn"), t = this.shadowRoot.getElementById("close-voice-btn"), n = this.shadowRoot.getElementById("voice-overlay");
		e && (e.onclick = () => this._showVoiceOverlay()), t && (t.onclick = () => this._hideVoiceOverlay()), n && (n.onclick = (e) => {
			e.target === n && this._hideVoiceOverlay();
		});
		let r = this.shadowRoot.getElementById("speed-select");
		r && (r.value = this.playbackSpeed.toString(), r.addEventListener("change", (e) => {
			this.playbackSpeed = parseFloat(e.target.value), localStorage.setItem("tj-pronunciation-speed", e.target.value);
		}));
		let i = this.shadowRoot.getElementById("show-report-btn"), a = this.shadowRoot.getElementById("report-overlay"), o = this.shadowRoot.getElementById("cancel-report-btn"), s = this.shadowRoot.getElementById("generate-btn"), c = this.shadowRoot.getElementById("rc-close-btn"), l = this.shadowRoot.getElementById("submit-score-btn");
		i && (i.onclick = () => this._showReportOverlay()), o && (o.onclick = () => this._hideReportOverlay()), a && (a.onclick = (e) => {
			e.target === a && this._hideReportOverlay();
		}), c && (c.onclick = () => this._hideReportOverlay()), s && (s.onclick = () => this._generateReport()), l && (l.onclick = () => this._submitScore()), this.shadowRoot.querySelectorAll(".translation-toggle").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.dataset.index, n = this.shadowRoot.querySelector("#trans-" + t);
				n.style.display === "none" ? (n.style.display = "block", e.target.textContent = "Hide Translation") : (n.style.display = "none", e.target.textContent = "Show Translation");
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"play\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.closest("button"), n = t.dataset.text, r = t.dataset.index;
				this.playTTS(n, t).then(() => {
					if (r !== void 0) {
						let e = this.shadowRoot.querySelector(`button[data-action="record"][data-index="${r}"]`);
						e && this._shouldShowAudioControls() && (e.disabled = !1, e.style.opacity = "1", e.style.cursor = "pointer");
					}
				});
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"play-mp\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.closest("button"), n = t.dataset.options.split(","), r = t.dataset.index, i = n[Math.floor(Math.random() * n.length)], a = t.closest(".mp-container");
				a.dataset.currentAnswer = i, a.querySelectorAll("button[data-action='mp-guess']").forEach((e) => {
					e.disabled = !1, e.classList.remove("tj-btn-success", "tj-btn-error"), e.classList.add("tj-btn-secondary");
				});
				let o = this.shadowRoot.querySelector("#feedback-" + r);
				o && (o.textContent = "", o.className = "feedback-msg"), this.playMinimalPairSequence(n, i, t);
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"record\"]").forEach((e) => {
			e.addEventListener("click", async (e) => {
				let t = e.target.closest("button"), n = t.dataset.index;
				await this.toggleRecording(t, n);
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"playback\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.closest("button");
				if (t.classList.contains("ready")) {
					let e = t.dataset.index;
					this.playRecording(e, t);
				}
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"mp-guess\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.closest("button"), n = t.dataset.index, r = t.closest(".mp-container"), i = r.dataset.currentAnswer, a = this.shadowRoot.querySelector("#feedback-" + n);
				if (!i) {
					a.textContent = "Please listen to the audio first.", a.className = "feedback-msg";
					return;
				}
				let o = t.textContent.trim() === i.trim();
				if (r.querySelectorAll("button[data-action='mp-guess']").forEach((e) => e.disabled = !0), o) {
					t.classList.add("tj-btn-success"), t.classList.remove("tj-btn-secondary"), a.textContent = "Correct! 🎉", a.className = "feedback-msg correct";
					let e = t.closest(".tj-card");
					e && (e.classList.add("completed"), this.updateProgress());
				} else t.classList.add("tj-btn-error"), t.classList.remove("tj-btn-secondary"), a.textContent = "Incorrect.", a.className = "feedback-msg wrong", r.querySelectorAll("button[data-action='mp-guess']").forEach((e) => {
					e.textContent.trim() === i.trim() && (e.classList.add("tj-btn-success"), e.classList.remove("tj-btn-secondary"));
				});
			});
		}), this.shadowRoot.querySelectorAll(".scramble-word[data-action=\"scramble-move\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.dataset.index, n = this.shadowRoot.querySelector("#dropzone-" + t), r = this.shadowRoot.querySelector("#bank-" + t), i = this.shadowRoot.querySelector("#feedback-" + t);
				i && (i.textContent = "", i.className = "feedback-msg"), n.classList.remove("success"), e.target.parentElement === r ? (n.appendChild(e.target), e.target.classList.add("in-dropzone")) : (r.appendChild(e.target), e.target.classList.remove("in-dropzone"));
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"scramble-reset\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.dataset.index, n = this.shadowRoot.querySelector("#dropzone-" + t), r = this.shadowRoot.querySelector("#bank-" + t), i = this.shadowRoot.querySelector("#feedback-" + t);
				i && (i.textContent = "", i.className = "feedback-msg"), n.classList.remove("success"), n.querySelectorAll(".scramble-word").forEach((e) => {
					r.appendChild(e), e.classList.remove("in-dropzone");
				});
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"scramble-check\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.dataset.index, n = this.shadowRoot.querySelector("#dropzone-" + t), r = this.shadowRoot.querySelector("#feedback-" + t), i = this.shadowRoot.querySelector("#scramble-ans-" + t).dataset.answer, a = Array.from(n.querySelectorAll(".scramble-word")).map((e) => e.textContent), o = a.join(" ");
				if (a.length === 0) {
					r.textContent = "Please construct a sentence first.", r.className = "feedback-msg";
					return;
				}
				if (o === i) {
					r.textContent = "Correct! 🎉", r.className = "feedback-msg correct", n.classList.add("success");
					let i = e.target.closest(".scramble-container"), a = i.querySelector(".scramble-controls"), o = i.querySelector(".play-audio-btn");
					a && (a.style.display = "none"), o && (o.style.display = "none"), n && (n.style.display = "none");
					let s = e.target.closest(".tj-card");
					s && (s.classList.add("completed"), this.updateProgress()), setTimeout(() => {
						r.textContent = "Activity Completed ✓", n.querySelectorAll(".scramble-word").forEach((e) => e.style.display = "none");
						let e = this.shadowRoot.querySelector("#bank-" + t);
						e && e.querySelectorAll(".scramble-word").forEach((e) => e.style.display = "none");
					}, 3e3);
				} else r.textContent = "Incorrect. Try again!", r.className = "feedback-msg wrong";
			});
		});
	}
	_showReportOverlay() {
		let e = this.shadowRoot.getElementById("report-overlay");
		if (e && (e.style.display = "flex"), this.studentInfo.nickname) {
			let e = this.shadowRoot.getElementById("nickname-input"), t = this.shadowRoot.getElementById("number-input"), n = this.shadowRoot.getElementById("homeroom-input");
			e && (e.value = this.studentInfo.nickname), t && (t.value = this.studentInfo.number), n && (n.value = this.studentInfo.homeroom), this._generateReport();
		} else {
			let e = this.shadowRoot.getElementById("initial-form"), t = this.shadowRoot.getElementById("report-area"), n = this.shadowRoot.getElementById("submit-actions");
			e && (e.style.display = "block"), t && (t.style.display = "none"), n && (n.style.display = "none");
		}
	}
	_hideReportOverlay() {
		let e = this.shadowRoot.getElementById("report-overlay");
		e && (e.style.display = "none"), this._currentPlayingAudio &&= (this._currentPlayingAudio.pause(), null), this.shadowRoot.querySelectorAll(".recording-play-btn.playing").forEach((e) => {
			e.classList.remove("playing"), e.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>";
		});
	}
	_generateReport() {
		let e = this.shadowRoot.getElementById("nickname-input"), t = this.shadowRoot.getElementById("number-input"), n = this.shadowRoot.getElementById("homeroom-input"), r = this.shadowRoot.getElementById("teacher-code-input"), i = e ? e.value.trim() : this.studentInfo.nickname, a = t ? t.value.trim() : this.studentInfo.number, o = n ? n.value.trim() : this.studentInfo.homeroom, s = r ? r.value.trim() : "";
		if (!i || !a) {
			alert("Please enter both nickname and student number.");
			return;
		}
		this.studentInfo = {
			nickname: i,
			number: a,
			homeroom: o,
			teacherCode: s
		};
		let c = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length, l = this.shadowRoot.querySelectorAll(".tj-card.completed").length, u = Math.round(l / c * 100) || 0, d = (/* @__PURE__ */ new Date()).toLocaleString(), f = "🏆";
		u < 50 ? f = "💪" : u < 80 && (f = "⭐");
		let p = `
          <div class="rc-header">
              <div class="rc-icon">📄</div>
              <div class="rc-title">${this.shadowRoot.getElementById("pronunciationTitle").textContent || "Pronunciation Practice"}</div>
              <div class="rc-subtitle">Report Card</div>
          </div>
          <div class="rc-student">
              <span class="rc-label">Student</span>
              <span class="rc-value">${i} <span class="rc-number">(${a}) ${o ? `- ${o}` : ""}</span></span>
          </div>
          <div class="rc-score-row">
              <div class="rc-score-circle">
                  <div class="rc-score-val">${l}/${c}</div>
                  <div class="rc-score-pct">${u}%</div>
              </div>
              <div class="rc-score-label">${f} ${u >= 80 ? "Excellent!" : u >= 50 ? "Good effort!" : "Keep practicing!"}</div>
          </div>
          <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${u}%"></div></div>
          <div class="rc-details">
              <div class="rc-detail-row"><span>Total Completed</span><span>${l} / ${c} activities</span></div>
              <div class="rc-detail-row"><span>Completed On</span><span>${d}</span></div>
      `, m = this.shadowRoot.getElementById("initial-form"), h = this.shadowRoot.getElementById("report-area"), g = this.shadowRoot.getElementById("submit-actions"), _ = this.shadowRoot.getElementById("report-teacher-code");
		_ && (_.value = s), m && (m.style.display = "none"), h && (h.style.display = "block", h.innerHTML = p);
		let v = this.shadowRoot.getElementById("report-recordings-container");
		if (v && (v.innerHTML = "", v.style.display = "none", this.recordings.size > 0)) {
			v.style.display = "block";
			let e = document.createElement("div");
			e.classList.add("recordings-section"), e.style.marginTop = "20px", e.style.textAlign = "left";
			let t = document.createElement("h4");
			t.style.display = "flex", t.style.alignItems = "center", t.style.gap = "8px", t.style.margin = "0 0 12px 0", t.style.color = "var(--tj-text-main)", t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"var(--tj-primary)\"><path d=\"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z\"/><path d=\"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z\"/></svg> Student Recordings", e.appendChild(t);
			let n = document.createElement("div");
			n.classList.add("recordings-list"), n.style.display = "flex", n.style.flexDirection = "column", n.style.gap = "8px", Array.from(this.recordings.keys()).sort((e, t) => e - t).forEach((e) => {
				let t = this.shadowRoot.getElementById(`act-${e}`), r = "Recording " + (parseInt(e) + 1);
				if (t) {
					let e = t.querySelector(".lr-target-word");
					e && (r = e.textContent);
				}
				let i = document.createElement("div");
				i.classList.add("recording-item"), i.style.display = "flex", i.style.alignItems = "center", i.style.gap = "12px", i.style.padding = "8px", i.style.background = "var(--tj-bg-main)", i.style.border = "1px solid var(--tj-border-main)", i.style.borderRadius = "8px";
				let a = document.createElement("button");
				a.classList.add("tj-icon-btn", "recording-play-btn"), a.style.width = "32px", a.style.height = "32px", a.style.padding = "0", a.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>", a.title = "Play Recording", a.onclick = () => this._playReportRecording(e, a);
				let o = document.createElement("div");
				o.classList.add("recording-text"), o.style.fontSize = "0.9em", o.style.color = "var(--tj-text-main)", o.textContent = r, i.appendChild(a), i.appendChild(o), n.appendChild(i);
			}), e.appendChild(n), v.appendChild(e);
		}
		g && (g.style.display = "block");
	}
	_playReportRecording(e, t) {
		let n = this.recordings.get(e);
		if (!n) return;
		if (this._currentPlayingAudio && (this._currentPlayingAudio.pause(), this.shadowRoot.querySelectorAll(".recording-play-btn.playing").forEach((e) => {
			e.classList.remove("playing"), e.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>";
		}), this._currentPlayingBtn === t)) {
			this._currentPlayingAudio = null, this._currentPlayingBtn = null;
			return;
		}
		let r = new Audio(n);
		this._currentPlayingAudio = r, this._currentPlayingBtn = t, r.onplay = () => {
			t.classList.add("playing"), t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\"></rect></svg>";
		}, r.onended = () => {
			t.classList.remove("playing"), t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>", this._currentPlayingAudio = null, this._currentPlayingBtn = null;
		}, r.play().catch((e) => {
			console.error("Error playing recording:", e), t.classList.remove("playing"), t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>";
		});
	}
	async _submitScore() {
		let e = this.shadowRoot.getElementById("report-teacher-code"), t = e ? e.value.trim() : this.studentInfo.teacherCode;
		if (t !== this.code) {
			alert("Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.");
			return;
		}
		if (this.isSubmitting) return;
		let n = this.shadowRoot.getElementById("submit-score-btn"), r = n.textContent;
		this.isSubmitting = !0, n.textContent = "Submitting...", n.disabled = !0;
		let i = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length, a = this.shadowRoot.querySelectorAll(".tj-card.completed").length, o = this.shadowRoot.getElementById("pronunciationTitle").textContent || "Pronunciation Practice", s = {
			nickname: this.studentInfo.nickname,
			homeroom: this.studentInfo.homeroom || "",
			studentId: this.studentInfo.number,
			quizName: "Pron- " + o,
			score: a,
			total: i,
			teacherCode: t
		};
		try {
			await fetch(this.submissionUrl, {
				method: "POST",
				mode: "cors",
				body: JSON.stringify(s)
			}), alert("Score successfully submitted!"), n.textContent = "Submitted ✓", n.style.background = "var(--tj-text-muted)";
		} catch (e) {
			console.error("Error submitting score:", e), alert("There was an error submitting your score. Please try again."), n.textContent = r, n.disabled = !1, this.isSubmitting = !1;
		}
	}
	playTTS(e, t) {
		return !this.synth || !this._shouldShowAudioControls() ? Promise.resolve() : new Promise((n, i) => {
			this.synth.cancel();
			let a = new SpeechSynthesisUtterance(e);
			a.lang = this.language, a.rate = this.playbackSpeed;
			let o = this.synth.getVoices().find((e) => e.name === this.selectedVoiceName);
			o ||= this._getBestVoice(this.language), o && (a.voice = o);
			let s = !1, c = () => {
				s || (s = !0, clearTimeout(u), t.classList.remove("playing"), this.isPlaying = !1, n());
			};
			a.onstart = () => {
				t.classList.add("playing"), this.isPlaying = !0;
			}, a.onend = () => c(), a.onerror = (e) => {
				s || (s = !0, clearTimeout(u), t.classList.remove("playing"), this.isPlaying = !1, e.error === "interrupted" || e.error === "canceled" ? n() : i(e));
			};
			let l = Math.max(3e3, e.length * 120), u = r() ? setTimeout(() => c(), l) : setTimeout(() => c(), l + 5e3);
			this.synth.speak(a);
		});
	}
	_getBestVoice(e) {
		return n(this.synth, e);
	}
	_showVoiceOverlay() {
		let e = this.shadowRoot.getElementById("voice-overlay");
		e && (e.style.display = "flex", this._updateVoiceList());
	}
	_hideVoiceOverlay() {
		let e = this.shadowRoot.getElementById("voice-overlay");
		e && (e.style.display = "none");
	}
	_updateVoiceList() {
		let e = this.shadowRoot.getElementById("voice-list");
		if (!e) return;
		let t = this.synth.getVoices(), n = this.language.split(/[-_]/)[0].toLowerCase(), r = t.filter((e) => e.lang.split(/[-_]/)[0].toLowerCase() === n), i = this._getBestVoice(this.language);
		e.innerHTML = "", r.sort((e, t) => e.name.localeCompare(t.name)), r.forEach((t) => {
			let n = document.createElement("button");
			n.classList.add("voice-option-btn"), (this.selectedVoiceName === t.name || !this.selectedVoiceName && i && t.name === i.name) && n.classList.add("active"), n.innerHTML = `<span>${t.name}</span>`, i && t.name === i.name && (n.innerHTML += "<span class=\"badge\">Best</span>"), n.onclick = () => {
				this.selectedVoiceName = t.name, localStorage.setItem("tj-pronunciation-voice", t.name), this._updateVoiceList(), this._hideVoiceOverlay();
			}, e.appendChild(n);
		});
	}
	_shouldShowAudioControls() {
		return t(this.synth);
	}
	_getAndroidIntentLink() {
		return i();
	}
	checkBrowserSupport() {
		if (!this._shouldShowAudioControls()) {
			let e = this.shadowRoot.getElementById("browser-prompt-overlay");
			if (e) {
				e.classList.add("active");
				let t = this._getAndroidIntentLink(), n = this.shadowRoot.getElementById("browser-action-btn");
				t ? (n.href = t, n.textContent = "Open in Chrome") : (n.onclick = (e) => {
					(!n.href || n.href === "javascript:void(0)") && (e.preventDefault(), alert("Please open this page in Safari or Chrome for the best experience with audio features."));
				}, n.textContent = "Use Safari / Chrome");
			}
		}
	}
	async playMinimalPairSequence(e, t, n) {
		if (n.classList.contains("playing")) return;
		let r = n.closest(".mp-container").querySelectorAll(".mp-option-btn");
		try {
			for (let t = 0; t < 2; t++) {
				for (let t of e) {
					let e = Array.from(r).find((e) => e.textContent.trim() === t.trim());
					e && e.classList.add("highlight"), await this.playTTS(t, n), e && e.classList.remove("highlight"), await new Promise((e) => setTimeout(e, 600));
				}
				await new Promise((e) => setTimeout(e, 400));
			}
			await new Promise((e) => setTimeout(e, 500)), await this.playTTS(t, n);
		} catch (e) {
			console.error("Audio sequence error:", e), n.classList.remove("playing"), r.forEach((e) => e.classList.remove("highlight"));
		}
	}
	async toggleRecording(t, n) {
		if (t.classList.contains("recording")) this.mediaRecorder && this.mediaRecorder.state !== "inactive" && this.mediaRecorder.stop(), t.classList.remove("recording");
		else try {
			this.audioChunks = [], this.mediaRecorder = await e((e) => {
				e.data.size > 0 && this.audioChunks.push(e.data);
			}, (e) => {
				let t = new Blob(this.audioChunks, { type: e }), r = URL.createObjectURL(t);
				this.recordings.has(n) && URL.revokeObjectURL(this.recordings.get(n)), this.recordings.set(n, r);
				let i = this.shadowRoot.querySelector(`#playback-${n}`);
				i && (i.classList.add("ready"), i.disabled = !1, i.style.opacity = "1", i.style.cursor = "pointer"), this.audioChunks = null;
			}), t.classList.add("recording");
		} catch (e) {
			console.error("Error accessing microphone:", e), alert("Could not access microphone. Please ensure you have granted permission.");
		}
	}
	playRecording(e, t) {
		let n = this.recordings.get(e);
		if (!n) return;
		let r = new Audio();
		r.oncanplaythrough = () => {
			r.play().catch((e) => {
				console.error("Error playing recording:", e), t.classList.remove("playing");
			});
		}, r.onplay = () => {
			t.classList.add("playing");
		}, r.onended = () => {
			t.classList.remove("playing");
			let e = t.closest(".tj-card");
			e && !e.classList.contains("completed") && (e.classList.add("completed"), this.updateProgress());
		}, r.onerror = (e) => {
			console.error("Error loading recording for playback:", e), t.classList.remove("playing");
		}, r.src = n, r.load();
	}
};
customElements.define("tj-pronunciation", u);
//#endregion
