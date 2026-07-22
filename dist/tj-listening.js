import { i as e, n as t, t as n } from "./chunks/audio-utils-ChLf1XGP.js";
import { t as r } from "./chunks/tj-config-HLDr154l.js";
//#region src/tj-listening/styles.css?inline
var i = ":host{color:#1e293b;--ls-bg:#fff;--ls-container-bg:#fff;--ls-border:#e2e8f0;--ls-border-light:#f1f5f9;--ls-text:#1e293b;--ls-text-muted:#64748b;--ls-text-sub:#334155;--ls-alt-bg:#f8fafc;--ls-progress-bg:#f1f5f9;--ls-nav-btn-bg:white;--ls-mc-option-bg:white;--ls-transcript-bg:#f8fafc;--ls-vocab-card-bg:#f8fafc;--ls-score-circle-bg:#f1f5f9;--ls-report-modal-bg:white;--ls-voice-card-bg:white;--ls-voice-btn-bg:white;--ls-browser-prompt-bg:white;--ls-rc-student-bg:#f8fafc;--ls-rc-detail-border:#f1f5f9;--ls-combined-bg:linear-gradient(135deg, #f0f9ff 0%, #eff6ff 100%);--ls-combined-border:#bae6fd;--ls-combined-title:#0c4a6e;--ls-combined-val:#1e293b;--ls-rc-sub-bg:#f8fafc;--ls-rc-sub-border:#e2e8f0;--ls-submit-bg:lightgreen;--ls-submit-color:#1e293b;--ls-secondary-bg:lightgrey;--ls-secondary-color:#1e293b;background-color:#0000;max-width:800px;margin:0 auto 2rem;font-family:system-ui,-apple-system,sans-serif;display:block}@media (prefers-color-scheme:dark){:host{color:#e2e8f0;--ls-bg:#0f172a;--ls-container-bg:#1e293b;--ls-border:#475569;--ls-border-light:#334155;--ls-text:#e2e8f0;--ls-text-muted:#94a3b8;--ls-text-sub:#cbd5e1;--ls-alt-bg:#0f172a;--ls-progress-bg:#334155;--ls-nav-btn-bg:#1e293b;--ls-mc-option-bg:#1e293b;--ls-transcript-bg:#0f172a;--ls-vocab-card-bg:#0f172a;--ls-score-circle-bg:#0f172a;--ls-report-modal-bg:#1e293b;--ls-voice-card-bg:#1e293b;--ls-voice-btn-bg:#1e293b;--ls-browser-prompt-bg:#1e293b;--ls-rc-student-bg:#0f172a;--ls-rc-detail-border:#334155;--ls-combined-bg:linear-gradient(135deg, #0c2340 0%, #1e1b4b 100%);--ls-combined-border:#1e40af;--ls-combined-title:#93c5fd;--ls-combined-val:#e2e8f0;--ls-rc-sub-bg:#0f172a;--ls-rc-sub-border:#475569;--ls-submit-bg:#16a34a;--ls-submit-color:white;--ls-secondary-bg:#334155;--ls-secondary-color:#e2e8f0}}.container{border:1px solid var(--ls-border);background-color:var(--ls-container-bg);border-radius:8px;padding:24px;box-shadow:0 4px 6px -1px #0000001a}.header-row{border-bottom:2px solid #f1f5f9;justify-content:space-between;align-items:flex-start;margin-bottom:10px;padding-bottom:10px;display:flex}.header-info h2{color:var(--ls-text);margin:0}.phase-badge{color:#64748b;text-transform:uppercase;margin-top:4px;font-size:.8em;font-weight:600}.header-controls{align-items:center;gap:12px;display:flex}.progress-info{background:var(--ls-progress-bg);color:var(--ls-text-muted);white-space:nowrap;border-radius:12px;padding:6px 14px;font-size:.9em;font-weight:600}.icon-btn{border:1px solid var(--ls-border);cursor:pointer;color:var(--ls-text-muted);background:0 0;border-radius:8px;padding:8px;transition:all .2s}.icon-btn:hover{color:#2563eb;background-color:#f1f5f9;border-color:#2563eb}.phase-dots{justify-content:center;align-items:center;gap:0;margin:20px 0;display:flex}.phase-dot-group{flex-direction:column;align-items:center;gap:6px;display:flex}.phase-dot{color:#94a3b8;background:#f1f5f9;border:2px solid #cbd5e1;border-radius:50%;justify-content:center;align-items:center;width:32px;height:32px;font-size:.85em;font-weight:700;transition:all .3s;display:flex}.phase-dot-group.active .phase-dot{color:#fff;background:#2563eb;border-color:#2563eb;box-shadow:0 0 0 4px #2563eb26}.phase-dot-group.completed .phase-dot{color:#166534;background:#dcfce7;border-color:#22c55e}.phase-dot-label{color:#94a3b8;text-transform:uppercase;font-size:.7em;font-weight:600}.phase-dot-group.active .phase-dot-label{color:#2563eb}.phase-dot-group.completed .phase-dot-label{color:#22c55e}.phase-dot-line{background:#e2e8f0;width:48px;height:2px;margin:0 4px 20px}.phase-nav{border-top:1px solid #f1f5f9;justify-content:space-between;margin-top:24px;padding-top:16px;display:flex}.nav-btn{border:1px solid var(--ls-border);background:var(--ls-nav-btn-bg);cursor:pointer;color:var(--ls-text-muted);border-radius:8px;align-items:center;gap:6px;padding:10px 20px;font-size:.95em;font-weight:600;transition:all .2s;display:flex}.nav-btn:hover:not([disabled]){background-color:#f1f5f9;border-color:#cbd5e1}.nav-btn:disabled{opacity:.4;cursor:default}.nav-btn-primary{color:#fff;background:#2563eb;border-color:#2563eb}.nav-btn-primary:hover{background:#1d4ed8}.intro-section{text-align:center}.context-card{color:#0369a1;text-align:left;background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;align-items:center;gap:10px;margin-bottom:20px;padding:12px 16px;font-size:.95em;display:flex}.context-card svg{color:#0284c7;flex-shrink:0}.intro-text{color:#334155;margin-bottom:24px;padding:0 8px;font-size:1.1em;line-height:1.7}.intro-text p{margin:0}.tts-play-btn{color:#fff;cursor:pointer;background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%);border:none;border-radius:12px;align-items:center;gap:10px;padding:14px 28px;font-size:1em;font-weight:700;transition:all .2s;display:inline-flex;box-shadow:0 4px 12px #2563eb4d}.tts-play-btn:hover{transform:translateY(-1px);box-shadow:0 6px 16px #2563eb66}.tts-play-btn:active{transform:translateY(0)}.audio-player{justify-content:center;margin:16px 0;display:flex}.audio-el{border-radius:8px;width:100%;max-width:500px}.vocab-grid{grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;display:grid}.vocab-card{background:var(--ls-vocab-card-bg);border:1px solid var(--ls-border);border-radius:8px;padding:16px;transition:all .2s}.vocab-card:hover{border-color:#cbd5e1;box-shadow:0 2px 8px #0000000f}.vocab-header{justify-content:space-between;align-items:center;margin-bottom:8px;display:flex}.vocab-word{color:var(--ls-text);margin:0;font-size:1.15em}.vocab-definition{color:var(--ls-text-muted);margin:0 0 8px;line-height:1.5}.vocab-example{color:var(--ls-text-muted);margin:0;font-size:.9em;font-style:italic;line-height:1.5}.transcript-box{background:var(--ls-transcript-bg);border:1px solid var(--ls-border);border-radius:8px;margin:16px 0;overflow:hidden}.transcript-header{justify-content:space-between;align-items:center;padding:12px 16px;display:flex}.transcript-label{color:var(--ls-text-muted);font-size:.9em;font-weight:600}.transcript-toggle{border:1px solid var(--ls-border);color:var(--ls-text-muted);cursor:pointer;background:0 0;border-radius:6px;padding:4px 12px;font-size:.85em;font-weight:600;transition:all .2s}.transcript-toggle:hover{background:var(--ls-progress-bg)}.transcript-body{border-top:1px solid var(--ls-border);padding:12px 16px 16px}.transcript-line{color:var(--ls-text-sub);margin:0 0 8px;font-size:.95em;line-height:1.6}.transcript-line:last-child{margin-bottom:0}.instruction-banner{color:#5b21b6;background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;align-items:center;gap:8px;margin-bottom:16px;padding:10px 14px;font-size:.9em;font-weight:500;display:flex}.instruction-banner svg{flex-shrink:0}.section-title{color:#0f172a;border-bottom:1px solid #e2e8f0;margin:24px 0 12px;padding-bottom:8px;font-size:1.1em;font-weight:700}.tts-btn{color:#fff;cursor:pointer;white-space:nowrap;background:#2563eb;border:none;border-radius:6px;flex-shrink:0;align-items:center;gap:6px;padding:6px 12px;font-size:.85em;font-weight:600;transition:background .2s;display:flex}.tts-btn:hover{background:#1d4ed8}.tts-btn svg{width:16px;height:16px}.question-card{background-color:var(--ls-alt-bg);border:1px solid var(--ls-border);border-radius:6px;margin-bottom:16px;padding:16px}.question-header{justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:12px;display:flex}.question-text{color:var(--ls-text);margin:0;line-height:1.4}.options-group{flex-direction:column;gap:8px;display:flex}.mc-option{border:1px solid var(--ls-border);cursor:pointer;background-color:var(--ls-mc-option-bg);color:var(--ls-text);border-radius:4px;align-items:center;padding:10px 12px;transition:all .2s;display:flex}.mc-option:hover:not(.correct):not(.incorrect):not(.correct-highlight){background-color:var(--ls-progress-bg)}.mc-option input{cursor:pointer;margin-right:12px}.mc-option.correct{color:#166534;background-color:#dcfce7;border-color:#22c55e;font-weight:700}.mc-option.correct-highlight{background-color:#f0fdf4;border:2px dashed #22c55e}.mc-option.incorrect{color:#991b1b;background-color:#fee2e2;border-color:#ef4444}.score-screen{text-align:center;padding:40px 24px}.score-circle{background:var(--ls-score-circle-bg);border:8px solid #2563eb;border-radius:50%;flex-direction:column;justify-content:center;align-items:center;width:150px;height:150px;margin:0 auto 24px;display:flex}.score-value{color:var(--ls-text);font-size:2em;font-weight:800}.score-percent{color:#2563eb;font-size:1.2em;font-weight:600}.score-actions{flex-direction:column;align-items:center;gap:12px;margin-top:8px;display:flex}.role-btn{cursor:pointer;background-color:#f1f5f9;border:2px solid #cbd5e1;border-radius:8px;padding:12px 28px;font-size:1em;font-weight:700;transition:all .2s}.role-btn:hover{background-color:#e2e8f0;border-color:#94a3b8}.report-btn{color:#fff;cursor:pointer;background:#2563eb;border:none;border-radius:8px;align-items:center;gap:8px;padding:12px 28px;font-size:1em;font-weight:700;transition:background .2s;display:inline-flex}.report-btn:hover{background:#1d4ed8}.share-btn{border:1px solid var(--ls-border);cursor:pointer;color:var(--ls-text-muted);white-space:nowrap;box-sizing:border-box;background:0 0;border-radius:8px;align-items:center;gap:8px;height:42px;padding:8px 16px;font-size:.9em;font-weight:600;transition:all .2s;display:inline-flex}.share-btn:hover{color:#2563eb;background-color:#f1f5f9;border-color:#2563eb}.share-btn svg{color:#475569}.share-btn:hover svg{color:#2563eb}.report-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:1000;background:#0f172acc;justify-content:center;align-items:center;display:none;position:fixed;inset:0}.report-modal{background:var(--ls-report-modal-bg);text-align:center;border-radius:16px;width:92%;max-width:420px;max-height:90vh;padding:28px 24px;overflow-y:auto;box-shadow:0 25px 50px -12px #0000004d}.report-modal h2{color:var(--ls-text);margin:8px 0 4px}.report-modal p{color:var(--ls-text-muted);margin:0 0 16px;font-size:.95em}.report-icon{margin-bottom:4px;font-size:2.5em}.report-modal input{box-sizing:border-box;border:1px solid var(--ls-border);background:var(--ls-container-bg);width:100%;color:var(--ls-text);border-radius:8px;outline:none;margin-bottom:12px;padding:12px 14px;font-size:1em;transition:border-color .2s;display:block}.report-modal input:focus{border-color:#2563eb}.generate-btn{color:#fff;cursor:pointer;background:#2563eb;border:none;border-radius:8px;width:100%;margin-bottom:8px;padding:13px;font-size:1em;font-weight:700;transition:background .2s}.generate-btn:hover{background:#1d4ed8}.cancel-btn{color:#94a3b8;cursor:pointer;background:0 0;border:none;font-size:.9em;text-decoration:underline}.rc-header{text-align:center;margin-bottom:16px}.rc-icon{font-size:2em}.rc-title{color:var(--ls-text);margin:4px 0 2px;font-size:1.3em;font-weight:800}.rc-subtitle{color:var(--ls-text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;font-size:.9em;font-weight:600}.rc-activity{color:#94a3b8;font-size:.85em}.rc-student{background:var(--ls-rc-student-bg);border:1px solid var(--ls-border);border-radius:8px;justify-content:space-between;align-items:center;margin-bottom:16px;padding:10px 14px;display:flex}.rc-label{color:var(--ls-text-muted);text-transform:uppercase;font-size:.8em;font-weight:700}.rc-value{color:var(--ls-text);font-weight:700}.rc-number{color:var(--ls-text-muted);font-weight:400}.rc-score-row{align-items:center;gap:16px;margin-bottom:10px;display:flex}.rc-score-circle{background:var(--ls-score-circle-bg);border:6px solid #2563eb;border-radius:50%;flex-direction:column;flex-shrink:0;justify-content:center;align-items:center;width:80px;height:80px;display:flex}.rc-score-val{color:var(--ls-text);font-size:1.1em;font-weight:800;line-height:1.1}.rc-score-pct{color:#2563eb;font-size:.85em;font-weight:700}.rc-score-label{color:var(--ls-text);font-size:1.1em;font-weight:700}.rc-bar-track{background:var(--ls-border);border-radius:4px;height:8px;overflow:hidden}.rc-bar-fill{background:linear-gradient(90deg,#2563eb,#22c55e);border-radius:4px;height:100%;transition:width .6s}.rc-details{border:1px solid var(--ls-border);border-radius:8px;margin-bottom:16px;overflow:hidden}.rc-detail-row{border-bottom:1px solid var(--ls-rc-detail-border);justify-content:space-between;padding:9px 14px;font-size:.9em;display:flex}.rc-detail-row:last-child{border-bottom:none}.rc-detail-row span:first-child{color:var(--ls-text-muted)}.rc-detail-row span:last-child{color:var(--ls-text);font-weight:600}.rc-combined{background:var(--ls-combined-bg);border:1px solid var(--ls-combined-border);text-align:center;border-radius:10px;margin-bottom:16px;padding:14px 16px}.rc-combined-title{color:var(--ls-combined-title);margin-bottom:8px;font-size:.95em;font-weight:700}.rc-combined-score{color:var(--ls-combined-val);margin-bottom:8px;font-size:1.4em;font-weight:800}.rc-combined-pct{color:#2563eb}.rc-actions{margin-top:16px}.rc-close-btn{color:#fff;cursor:pointer;background:#22c55e;border:none;border-radius:8px;width:100%;padding:12px;font-size:1em;font-weight:700;transition:background .2s}.rc-close-btn:hover{background:#16a34a}.rc-submission-box{text-align:left;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-top:20px;padding:20px;box-shadow:inset 0 2px 4px #00000005}.rc-submission-header{color:#64748b;text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px;font-size:.85em;font-weight:700}.rc-teacher-code-input{box-sizing:border-box;border:2px solid var(--ls-border);background:var(--ls-container-bg);width:100%;color:var(--ls-text);border-radius:10px;outline:none;margin-bottom:8px;padding:12px 16px;font-family:inherit;font-size:1em;transition:all .2s}.rc-teacher-code-input:focus{border-color:#2563eb;box-shadow:0 0 0 4px #2563eb1a}.rc-teacher-code-input::placeholder{color:#94a3b8}.rc-help-text{color:#64748b;margin:4px 0 0;font-size:.85em;line-height:1.4}.rc-submit-btn{background:var(--ls-submit-bg);width:100%;color:var(--ls-submit-color);cursor:pointer;border:none;border-radius:12px;margin-bottom:8px;padding:16px;font-size:1.1em;font-weight:700;transition:all .2s;box-shadow:0 4px 6px #0000001a}.rc-submit-btn:hover:not(:disabled){background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 12px #2563eb4d}.rc-submit-btn:active:not(:disabled){transform:translateY(0)}.rc-submit-btn:disabled{opacity:.6;cursor:default;box-shadow:none;background:#94a3b8}.rc-secondary-btn{background:var(--ls-secondary-bg);width:100%;color:var(--ls-secondary-color);border:2px solid var(--ls-border);cursor:pointer;border-radius:12px;padding:14px;font-size:1em;font-weight:700;transition:all .2s}.rc-secondary-btn:hover{background:var(--ls-progress-bg);border-color:var(--ls-text-muted)}.footer-actions{border-top:1px solid #f1f5f9;justify-content:center;margin-top:30px;padding-top:20px;display:none}.complete-btn{color:#fff;cursor:pointer;background-color:#2563eb;border:none;border-radius:6px;padding:12px 32px;font-size:1.1em;font-weight:700;transition:background .2s}.complete-btn:hover{background-color:#1d4ed8}.combined-score{background:var(--ls-combined-bg);border:1px solid var(--ls-combined-border);text-align:center;border-radius:12px;margin-top:30px;padding:20px 24px}.combined-header{color:var(--ls-combined-title);margin-bottom:12px;font-size:1.1em;font-weight:700}.combined-stats{justify-content:center;gap:24px;margin-bottom:12px;display:flex}.combined-value{color:var(--ls-combined-val);font-size:1.8em;font-weight:800}.combined-percent{color:#2563eb;font-size:1.8em;font-weight:800}.combined-bar-track{background:var(--ls-border);border-radius:5px;height:10px;overflow:hidden}.combined-bar-fill{background:linear-gradient(90deg,#2563eb,#22c55e);border-radius:5px;height:100%;transition:width .6s}.combined-pending{background:#f8fafc;border-color:#e2e8f0}.combined-note{color:#64748b;margin:0;font-size:.9em}.toast{color:#fff;z-index:2000;background:#1e293b;border-radius:10px;align-items:center;gap:8px;padding:12px 20px;font-size:.9em;font-weight:600;animation:.3s toastIn;display:flex;position:fixed;bottom:24px;left:50%;transform:translate(-50%);box-shadow:0 8px 24px #00000040}.toast-url{color:#fff;background:#334155;border:none;border-radius:6px;width:260px;max-width:60vw;padding:6px 10px;font-size:.85em}@keyframes toastIn{0%{opacity:0;transform:translate(-50%)translateY(12px)}to{opacity:1;transform:translate(-50%)translateY(0)}}.empty-state{color:#94a3b8;font-style:italic}.voice-overlay{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1000;background:#0f172ab3;justify-content:center;align-items:center;display:none;position:fixed;inset:0}.voice-card{background:var(--ls-voice-card-bg);border:1px solid var(--ls-border);border-radius:1.2em;flex-direction:column;width:90%;max-width:400px;max-height:80vh;display:flex;overflow:hidden;box-shadow:0 20px 25px -5px #0003}.voice-card-header{border-bottom:1px solid var(--ls-border);justify-content:space-between;align-items:center;padding:16px 20px;display:flex}.voice-card-header h3{color:var(--ls-text);margin:0;font-size:1.2em}.close-voice-btn{cursor:pointer;color:var(--ls-text-muted);background:0 0;border:none;font-size:24px}.voice-list{flex:1;padding:10px;overflow-y:auto}.voice-option-btn{text-align:left;border:1px solid var(--ls-border);background:var(--ls-voice-btn-bg);cursor:pointer;width:100%;color:var(--ls-text);border-radius:8px;justify-content:space-between;align-items:center;margin-bottom:6px;padding:12px 16px;transition:all .2s;display:flex}.voice-option-btn:hover{background-color:var(--ls-alt-bg);border-color:var(--ls-text-muted)}.voice-option-btn.active{color:#2563eb;background:#eff6ff;border-color:#3b82f6;font-weight:600}.badge{color:#166534;background:#dcfce7;border-radius:10px;padding:2px 8px;font-size:.7em;font-weight:700}@media (width<=600px){.container{padding:16px}.vocab-grid{grid-template-columns:1fr}.phase-dots{gap:0}.phase-dot-line{width:24px}.phase-dot-label{font-size:.6em}.nav-btn{padding:8px 14px;font-size:.85em}}.browser-prompt-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:10000;color:#fff;text-align:center;background:#0f172ae6;justify-content:center;align-items:center;padding:2em;display:none;position:fixed;inset:0}.browser-prompt-card{background:var(--ls-browser-prompt-bg);color:var(--ls-text);border-radius:1.5em;max-width:400px;padding:2.5em;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{color:#b45309;-webkit-text-fill-color:initial;background:0 0;margin-bottom:.5em;font-size:1.5em}.browser-prompt-card p{color:var(--ls-text-muted);margin-bottom:1.5em;line-height:1.5}.browser-action-btn{color:#fff;cursor:pointer;background-color:#ca8a04;border-radius:9999px;padding:.75em 1.5em;font-weight:700;text-decoration:none;transition:background-color .2s;display:inline-block}.browser-action-btn:hover{background-color:#a16207}", a = "<div id=\"lesson-container\" class=\"container\">\n    <div class=\"header-row\">\n        <div class=\"header-info\">\n            <h2 id=\"lesson-title\">Listening Lesson</h2>\n            <div id=\"phase-badge\" class=\"phase-badge\">Introduction</div>\n        </div>\n        <div class=\"header-controls\">\n            <button id=\"share-quiz-btn\" class=\"share-btn\" title=\"Share as Quiz (no transcript)\">\n                <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\">\n                    <path d=\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z\"/>\n                </svg>\n                <span>Share Quiz</span>\n            </button>\n            <button id=\"voice-btn\" class=\"icon-btn\" title=\"Choose Voice\">\n                <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"currentColor\">\n                    <path d=\"M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z\"/>\n                </svg>\n            </button>\n            <div id=\"progress-info\" class=\"progress-info\"></div>\n        </div>\n    </div>\n\n    <!-- Phase Progress Dots -->\n    <div id=\"phase-dots\" class=\"phase-dots\"></div>\n\n    <div id=\"phase-content\" class=\"phase-content\"></div>\n\n    <div id=\"phase-nav\" class=\"phase-nav\">\n        <button class=\"nav-btn\" id=\"prev-btn\">\n            <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>\n            Back\n        </button>\n        <button class=\"nav-btn nav-btn-primary\" id=\"next-btn\">\n            Next\n            <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n        </button>\n    </div>\n</div>\n\n<div id=\"score-screen\" class=\"container score-screen\" style=\"display: none;\">\n</div>\n\n<div class=\"voice-overlay\" id=\"voice-overlay\" style=\"display: none;\">\n    <div class=\"voice-card\">\n        <div class=\"voice-card-header\">\n            <h3>Choose Voice</h3>\n            <button class=\"close-voice-btn\" id=\"close-voice-btn\">×</button>\n        </div>\n        <div class=\"voice-list\" id=\"voice-list\"></div>\n    </div>\n</div>\n\n<div class=\"report-overlay\" id=\"report-overlay\" style=\"display:none;\">\n    <div class=\"report-modal\">\n      <div class=\"initial-form\" id=\"initial-form\">\n        <div class=\"report-icon\">📄</div>\n        <h2>Report Card</h2>\n        <p>Enter your details to generate your report.</p>\n        <input type=\"text\" id=\"nickname-input\" placeholder=\"Jake\" autocomplete=\"off\">\n        <input type=\"text\" id=\"number-input\" placeholder=\"01\" autocomplete=\"off\" inputmode=\"numeric\">\n        <input type=\"text\" id=\"homeroom-input\" placeholder=\"1/1\" autocomplete=\"off\">\n        <button class=\"generate-btn\" id=\"generate-btn\">Generate Report Card</button>\n        <button class=\"cancel-btn\" id=\"cancel-btn\">Cancel</button>\n      </div>\n      <div id=\"report-area\" style=\"display:none;\"></div>\n    </div>\n</div>\n\n<div class=\"browser-prompt-overlay\" id=\"browser-prompt-overlay\" style=\"display: none;\">\n    <div class=\"browser-prompt-card\">\n        <h2>Browser Support Needed</h2>\n        <p>This application works best in standard browsers like <strong>Chrome</strong> or <strong>Safari</strong> to enable high-quality text-to-speech features.</p>\n        <p>กรุณาเปิดใน Chrome หรือ Safari เพื่อใช้งานฟีเจอร์เสียงแบบเต็มรูปแบบ</p>\n        <a class=\"browser-action-btn\" id=\"browser-action-btn\">Open in Browser</a>\n        <button class=\"close-prompt\" style=\"display: block; width: 100%; margin-top: 1.5em; border: none; background: transparent; text-decoration: underline; cursor: pointer; color: #64748b; font-weight: 600; font-size: 0.95em;\" onclick=\"this.closest('.browser-prompt-overlay').style.display='none'\">Continue anyway / ใช้งานต่อ</button>\n    </div>\n</div>\n", o = class o extends HTMLElement {
	static _instances = [];
	get code() {
		return r(this).teacherCode;
	}
	set code(e) {
		e == null ? this.removeAttribute("code") : this.setAttribute("code", e);
	}
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this.lessonData = null, this.currentPhase = 0, this.score = 0, this.answeredCount = 0, this.totalQuestions = 0, this.isCompleted = !1, this.studentInfo = {
			nickname: "",
			number: "",
			homeroom: "",
			teacherCode: ""
		}, this.submissionUrl = "", this.isSubmitting = !1, this.selectedVoiceName = null, this.isPlaying = !1, this._currentAudioEl = null;
		let e = typeof window < "u" && window.location ? new URLSearchParams(window.location.search) : new URLSearchParams();
		this.isQuizMode = e.get("quiz") === "1", o._instances.push(this), window.speechSynthesis && window.speechSynthesis.addEventListener("voiceschanged", () => this._updateVoiceList());
	}
	connectedCallback() {
		let e = r(this);
		this.submissionUrl = e.submissionUrl, requestAnimationFrame(() => {
			let t = "";
			if (this.config) if (typeof this.config == "object") {
				this.lessonData = this.config, this._initDataAndRender();
				return;
			} else t = String(this.config);
			else if (this.hasAttribute("config")) t = this.getAttribute("config");
			else if (e.dataUrl) {
				fetch(e.dataUrl).then((e) => e.json()).then((e) => {
					this.lessonData = e, this._initDataAndRender();
				}).catch((e) => {
					this.shadowRoot.innerHTML = `<p style="color: red;">Error loading data from URL: ${e.message}</p>`;
				});
				return;
			} else this.querySelector("script[type=\"application/json\"]") ? t = this.querySelector("script[type=\"application/json\"]").textContent.trim() : (t = this.textContent.trim(), this.textContent = "");
			try {
				t && (this.lessonData = JSON.parse(t), this._initDataAndRender());
			} catch (e) {
				this.shadowRoot.innerHTML = `<p style="color: red;">Error parsing JSON: ${e.message}</p>`;
			}
		});
	}
	_initDataAndRender() {
		this.totalQuestions = this.lessonData.listening?.questions?.length || 0, this.render(), this.checkBrowserSupport(), this._updateVoiceList(), setTimeout(() => this._updateVoiceList(), 500), setTimeout(() => this._updateVoiceList(), 1500);
	}
	_shouldShowAudioControls() {
		return e(window.speechSynthesis);
	}
	_getAndroidIntentLink() {
		return n();
	}
	checkBrowserSupport() {
		if (!this._shouldShowAudioControls()) {
			let e = this.shadowRoot.getElementById("browser-prompt-overlay");
			if (e) {
				e.style.display = "flex";
				let t = this._getAndroidIntentLink(), n = this.shadowRoot.getElementById("browser-action-btn");
				t ? (n.href = t, n.textContent = "Open in Chrome") : (n.onclick = (e) => {
					e.preventDefault(), this._showToast("Please open this page in Safari or Chrome for audio features.");
				}, n.textContent = "Use Safari / Chrome");
			}
		}
	}
	_getLang() {
		return this.lessonData?.lang || "en-US";
	}
	render() {
		if (!this.shadowRoot.querySelector("#lesson-container")) {
			let e = document.createElement("template");
			if (e.innerHTML = `<style>${i}</style>${a}`, this.shadowRoot.appendChild(e.content.cloneNode(!0)), this._attachBaseListeners(), !this._shouldShowAudioControls()) {
				let e = this.shadowRoot.getElementById("voice-btn");
				e && (e.style.display = "none");
			}
		}
		this.isCompleted ? this.renderScoreScreen() : this.renderLesson();
	}
	renderLesson() {
		let e = this.lessonData, t = [
			"Introduction",
			"Vocabulary",
			"Listening"
		];
		this.shadowRoot.getElementById("lesson-container").style.display = "block";
		let n = this.shadowRoot.getElementById("score-screen");
		n && (n.style.display = "none"), this.shadowRoot.getElementById("lesson-title").textContent = e.title || "Listening Lesson", this.shadowRoot.getElementById("phase-badge").textContent = t[this.currentPhase];
		let r = this.shadowRoot.getElementById("progress-info");
		this.currentPhase === 2 ? (r.style.display = "block", r.textContent = `${this.answeredCount} / ${this.totalQuestions} Answered`) : r.style.display = "none";
		let i = this.shadowRoot.getElementById("phase-dots");
		i.innerHTML = t.map((e, n) => `
            <div class="phase-dot-group ${n === this.currentPhase ? "active" : ""} ${n < this.currentPhase ? "completed" : ""}">
                <div class="phase-dot">${n < this.currentPhase ? "✓" : n + 1}</div>
                <span class="phase-dot-label">${e}</span>
            </div>
            ${n < t.length - 1 ? "<div class=\"phase-dot-line\"></div>" : ""}
        `).join("");
		let a = this.shadowRoot.getElementById("phase-content");
		this.currentPhase === 0 ? a.innerHTML = this._renderIntroPhase() : this.currentPhase === 1 ? a.innerHTML = this._renderVocabPhase() : a.innerHTML = this._renderListeningPhase();
		let o = this.shadowRoot.getElementById("prev-btn"), s = this.shadowRoot.getElementById("next-btn");
		o && (o.disabled = this.currentPhase === 0), s && (this.currentPhase < 2 ? s.style.display = "flex" : s.style.display = "none"), this._attachPhaseListeners();
	}
	_renderIntroPhase() {
		let e = this.lessonData.intro || {};
		return `
            <div class="intro-section">
                ${e.context ? `<div class="context-card">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    <span>${e.context}</span>
                </div>` : ""}
                <div class="intro-text">
                    <p>${e.text || "Welcome to this listening lesson."}</p>
                </div>
            </div>
        `;
	}
	_renderVocabPhase() {
		let e = this.lessonData.vocab || [];
		return e.length === 0 ? "<p class=\"empty-state\">No vocabulary items for this lesson.</p>" : `
            <div class="instruction-banner">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                Review the vocabulary before listening. Tap the speaker to hear each word.
            </div>
            <div class="vocab-grid">
                ${e.map((e, t) => `
            <div class="vocab-card">
                <div class="vocab-header">
                    <h3 class="vocab-word">${e.word}</h3>
                    <button class="tts-btn vocab-play-btn" data-text="${e.word}. ${e.example || ""}" title="Listen">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
                <p class="vocab-definition">${e.definition}</p>
                ${e.example ? `<p class="vocab-example">"${e.example}"</p>` : ""}
            </div>
        `).join("")}
            </div>
        `;
	}
	_renderListeningPhase() {
		let e = this.lessonData.listening || {}, t = this.getAttribute("audio-listening"), n = "";
		n = t ? `
                <div class="audio-player">
                    <audio controls preload="metadata" class="audio-el">
                        <source src="${t}" type="audio/mpeg">
                        Your browser does not support audio playback.
                    </audio>
                </div>
            ` : "\n                <button class=\"tts-play-btn\" id=\"listening-play-btn\" title=\"Listen to dialogue\">\n                    <svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>\n                    <span>Play Dialogue</span>\n                </button>\n            ";
		let r = "";
		e.transcript && !this.isQuizMode && (r = `
                <div class="transcript-box">
                    <div class="transcript-header">
                        <span class="transcript-label">Transcript</span>
                        <button class="transcript-toggle" id="transcript-toggle">Show</button>
                    </div>
                    <div class="transcript-body" id="transcript-body" style="display: none;">
                        ${e.transcript.split("\n").filter((e) => e.trim()).map((e) => `<p class="transcript-line">${e}</p>`).join("")}
                    </div>
                </div>
            `);
		let i = "";
		return e.questions && e.questions.length > 0 && (i = e.questions.map((e, t) => {
			let n = `q_${t}`, r = e.options.map((t, r) => `
                    <label class="mc-option" id="label_${n}_${r}">
                        <input type="radio" name="${n}" value="${t}" data-correct="${e.correct}" data-label-id="label_${n}_${r}">
                        ${t}
                    </label>
                `).join("");
			return `
                    <div class="question-card">
                        <div class="question-header">
                            <p class="question-text"><strong>Q${t + 1}.</strong> ${e.question}</p>
                            <button class="tts-btn" data-text="${e.question}" title="Listen to question">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="options-group">
                            ${r}
                        </div>
                    </div>
                `;
		}).join("")), `
            <div class="listening-section">
                <div class="instruction-banner">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                    Listen to the dialogue, then answer the comprehension questions below.
                </div>
                ${n}
                ${r}
                <div class="section-title">Comprehension Questions</div>
                ${i}
                <div id="footer-actions" class="footer-actions" style="display: ${this.answeredCount === this.totalQuestions && this.totalQuestions > 0 ? "flex" : "none"}">
                    <button id="complete-btn" class="complete-btn">See My Score</button>
                </div>
            </div>
        `;
	}
	_attachBaseListeners() {
		let e = this.shadowRoot.getElementById("prev-btn"), t = this.shadowRoot.getElementById("next-btn");
		e && (e.onclick = () => this._navigatePhase(-1)), t && (t.onclick = () => this._navigatePhase(1));
		let n = this.shadowRoot.getElementById("share-quiz-btn");
		n && (n.onclick = () => this._shareAsQuiz()), this.shadowRoot.getElementById("voice-btn").onclick = () => this._showVoiceOverlay(), this.shadowRoot.getElementById("close-voice-btn").onclick = () => this._hideVoiceOverlay(), this.shadowRoot.getElementById("voice-overlay").onclick = (e) => {
			e.target.id === "voice-overlay" && this._hideVoiceOverlay();
		};
	}
	_attachPhaseListeners() {
		this.shadowRoot.querySelectorAll(".tts-btn, .vocab-play-btn").forEach((e) => {
			e.onclick = () => this._playTTS(e.getAttribute("data-text"));
		});
		let e = this.shadowRoot.getElementById("listening-play-btn");
		e && (e.onclick = () => {
			let e = this.lessonData.listening?.transcript || "";
			this._playTTS(e);
		});
		let t = this.shadowRoot.getElementById("transcript-toggle");
		t && (t.onclick = () => {
			let e = this.shadowRoot.getElementById("transcript-body");
			e.style.display === "none" ? (e.style.display = "block", t.textContent = "Hide") : (e.style.display = "none", t.textContent = "Show");
		}), this._attachValidationListeners();
		let n = this.shadowRoot.getElementById("complete-btn");
		n && (n.onclick = () => {
			this.isCompleted = !0, this.render();
		});
	}
	_navigatePhase(e) {
		let t = this.currentPhase + e;
		t >= 0 && t <= 2 && (window.speechSynthesis && window.speechSynthesis.cancel(), this.currentPhase = t, this.render(), this.scrollIntoView({
			behavior: "smooth",
			block: "start"
		}));
	}
	_attachValidationListeners() {
		this.shadowRoot.querySelectorAll("input[type=\"radio\"]").forEach((e) => {
			e.addEventListener("change", (e) => {
				let t = e.target.value, n = e.target.getAttribute("data-correct"), r = e.target.getAttribute("data-label-id"), i = this.shadowRoot.getElementById(r), a = e.target.name, o = this.shadowRoot.querySelectorAll(`input[name="${a}"]`);
				o.forEach((e) => {
					e.disabled = !0;
				}), t === n ? (i.classList.add("correct"), this.score++) : (i.classList.add("incorrect"), o.forEach((e) => {
					if (e.value === e.getAttribute("data-correct")) {
						let t = e.getAttribute("data-label-id");
						this.shadowRoot.getElementById(t).classList.add("correct-highlight");
					}
				})), this.answeredCount++, this._updateProgress(), this._checkCompletion();
			});
		});
	}
	_updateProgress() {
		let e = this.shadowRoot.querySelector(".progress-info");
		e && (e.textContent = `${this.answeredCount} / ${this.totalQuestions} Answered`);
	}
	_checkCompletion() {
		if (this.answeredCount === this.totalQuestions && this.totalQuestions > 0) {
			let e = this.shadowRoot.getElementById("footer-actions");
			e && (e.style.display = "flex");
		}
	}
	_isLastInstance() {
		let e = o._instances;
		return e.length > 1 && e[e.length - 1] === this;
	}
	_getCombinedScore() {
		let e = o._instances, t = 0, n = 0, r = !0;
		return e.forEach((e) => {
			t += e.score, n += e.totalQuestions, e.isCompleted || (r = !1);
		}), {
			totalScore: t,
			totalQuestions: n,
			allDone: r,
			count: e.length
		};
	}
	renderScoreScreen() {
		let e = Math.round(this.score / this.totalQuestions * 100) || 0, t = "🎉";
		e < 50 ? t = "💪" : e < 80 && (t = "👍");
		let n = "";
		if (this._isLastInstance()) {
			let e = this._getCombinedScore();
			if (e.allDone) {
				let t = Math.round(e.totalScore / e.totalQuestions * 100) || 0, r = "🏆";
				t < 50 ? r = "💪" : t < 80 && (r = "⭐"), n = `
                    <div class="combined-score">
                        <div class="combined-header">${r} Combined Score — All ${e.count} Lessons</div>
                        <div class="combined-stats">
                            <div class="combined-value">${e.totalScore} / ${e.totalQuestions}</div>
                            <div class="combined-percent">${t}%</div>
                        </div>
                        <div class="combined-bar-track">
                            <div class="combined-bar-fill" style="width: ${t}%"></div>
                        </div>
                    </div>
                `;
			} else n = `
                    <div class="combined-score combined-pending">
                        <div class="combined-header">📋 Lesson Progress</div>
                        <p class="combined-note">${o._instances.filter((e) => e.isCompleted).length} of ${e.count} lessons completed. Finish all to see your combined score.</p>
                    </div>
                `;
		}
		let r = this._isLastInstance();
		this.shadowRoot.getElementById("lesson-container").style.display = "none";
		let i = this.shadowRoot.getElementById("score-screen");
		i.style.display = "block", i.innerHTML = `
            <div class="score-circle">
                <div class="score-value">${this.score}/${this.totalQuestions}</div>
                <div class="score-percent">${e}%</div>
            </div>
            <h2>${t} ${e >= 80 ? "Excellent!" : e >= 50 ? "Good effort!" : "Keep practicing!"}</h2>
            <p>You completed the "${this.lessonData.title || "Listening Lesson"}" activity.</p>
            <div class="score-actions">
                <button class="role-btn" id="restart-btn">Try Again</button>
                ${r ? "<button class=\"report-btn\" id=\"report-btn\">📄 See Report Card</button>" : ""}
            </div>
            ${n}
        `, this.scrollIntoView({
			behavior: "smooth",
			block: "start"
		}), this.shadowRoot.getElementById("restart-btn").addEventListener("click", () => {
			this.score = 0, this.answeredCount = 0, this.isCompleted = !1, this.currentPhase = 0, this.render();
		}), r && (this.shadowRoot.getElementById("report-btn").addEventListener("click", () => {
			this._showReportOverlay();
		}), this.shadowRoot.getElementById("generate-btn").addEventListener("click", () => {
			this._generateReport();
		}), this.shadowRoot.getElementById("cancel-btn").addEventListener("click", () => {
			this.shadowRoot.getElementById("report-overlay").style.display = "none";
		}), this.shadowRoot.getElementById("report-overlay").addEventListener("click", (e) => {
			e.target.id === "report-overlay" && (this.shadowRoot.getElementById("report-overlay").style.display = "none");
		}));
	}
	_showReportOverlay() {
		let e = this.shadowRoot.getElementById("report-overlay");
		if (e.style.display = "flex", this.studentInfo.nickname) {
			let e = this.shadowRoot.getElementById("nickname-input"), t = this.shadowRoot.getElementById("number-input");
			e && (e.value = this.studentInfo.nickname), t && (t.value = this.studentInfo.number), this._generateReport();
		} else {
			let e = this.shadowRoot.getElementById("initial-form"), t = this.shadowRoot.getElementById("report-area");
			e && (e.style.display = "block"), t && (t.style.display = "none");
		}
	}
	_generateReport() {
		let e = this.shadowRoot.getElementById("nickname-input"), t = this.shadowRoot.getElementById("number-input"), n = this.shadowRoot.getElementById("homeroom-input"), r = e ? e.value.trim() : this.studentInfo.nickname, i = t ? t.value.trim() : this.studentInfo.number, a = n ? n.value.trim() : this.studentInfo.homeroom;
		if (!r || !i) {
			alert("Please enter both nickname and student number.");
			return;
		}
		this.studentInfo = {
			...this.studentInfo,
			nickname: r,
			number: i,
			homeroom: a
		};
		let o = this._getCombinedScore(), s = Math.round(o.totalScore / o.totalQuestions * 100) || 0, c = (/* @__PURE__ */ new Date()).toLocaleString(), l = "🏆";
		s < 50 ? l = "💪" : s < 80 && (l = "⭐");
		let u = `
            <div class="rc-header">
                <div class="rc-icon">📄</div>
                <div class="rc-title">${this.lessonData.title || "Listening Practice"}</div>
                <div class="rc-subtitle">Report Card</div>
                <div class="rc-activity">All ${o.count} Lessons</div>
            </div>
            <div class="rc-student">
                <span class="rc-label">Student</span>
                <span class="rc-value">${r} <span class="rc-number">(${i}) ${a ? `- ${a}` : ""}</span></span>
            </div>
            <div class="rc-score-row">
                <div class="rc-score-circle">
                    <div class="rc-score-val">${o.totalScore}/${o.totalQuestions}</div>
                    <div class="rc-score-pct">${s}%</div>
                </div>
                <div class="rc-score-label">${l} ${s >= 80 ? "Excellent!" : s >= 50 ? "Good effort!" : "Keep practicing!"}</div>
            </div>
            <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${s}%"></div></div>
            <div class="rc-details">
                <div class="rc-detail-row"><span>Total Correct</span><span>${o.totalScore} / ${o.totalQuestions}</span></div>
                <div class="rc-detail-row"><span>Completed On</span><span>${c}</span></div>
            </div>

            <div class="rc-submission-box">
                <p class="rc-submission-header">Submission (Optional)</p>
                <input type="text" id="report-teacher-code" class="rc-teacher-code-input" placeholder="Enter Teacher Code" value="${this.studentInfo.teacherCode || ""}">
                <p class="rc-help-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
            </div>

            <div class="rc-actions" style="margin-top: 16px;">
                <button class="rc-submit-btn" id="submit-score-btn">Submit Score Online</button>
                <button class="rc-secondary-btn" id="rc-close-btn" style="margin-top: 8px;">↩ Return to Activity</button>
            </div>
        `, d = this.shadowRoot.getElementById("initial-form"), f = this.shadowRoot.getElementById("report-area");
		d && (d.style.display = "none"), f && (f.style.display = "block", f.innerHTML = u);
		let p = this.shadowRoot.getElementById("submit-score-btn");
		p && (p.onclick = () => this._submitScore()), this.shadowRoot.getElementById("rc-close-btn").addEventListener("click", () => {
			this.shadowRoot.getElementById("report-overlay").style.display = "none";
		});
	}
	async _submitScore() {
		let e = this.shadowRoot.getElementById("report-teacher-code"), t = e ? e.value.trim() : this.studentInfo.teacherCode;
		if (this.studentInfo.teacherCode = t, t !== this.code) {
			alert("Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.");
			return;
		}
		if (this.isSubmitting) return;
		let n = this.shadowRoot.getElementById("submit-score-btn");
		if (!n) return;
		let r = n.textContent;
		this.isSubmitting = !0, n.textContent = "Submitting...", n.disabled = !0;
		let i = this._getCombinedScore(), a = Math.round(i.totalScore / i.totalQuestions * 100) || 0, o = {
			nickname: this.studentInfo.nickname,
			homeroom: this.studentInfo.homeroom || "",
			studentId: this.studentInfo.number,
			quizName: "Listening- " + (this.lessonData.title || "Lesson"),
			score: a,
			total: 100
		};
		try {
			await fetch(this.submissionUrl, {
				method: "POST",
				mode: "no-cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(o)
			}), alert("Score successfully submitted!"), n.textContent = "Submitted ✓", n.style.background = "#64748b";
		} catch (e) {
			console.error("Error submitting score:", e), alert("There was an error submitting your score. Please try again."), n.textContent = r, n.disabled = !1, this.isSubmitting = !1;
		}
	}
	_getBestVoice(e) {
		return t(window.speechSynthesis, e);
	}
	_playTTS(e) {
		if (!window.speechSynthesis) return;
		window.speechSynthesis.cancel();
		let t = new SpeechSynthesisUtterance(e), n = this._getLang();
		t.lang = n, t.rate = .85;
		let r = window.speechSynthesis.getVoices().find((e) => e.name === this.selectedVoiceName);
		r ||= this._getBestVoice(n), r && (t.voice = r), t.onstart = () => {
			this.isPlaying = !0;
		}, t.onend = () => {
			this.isPlaying = !1;
		}, window.speechSynthesis.speak(t);
	}
	_shareAsQuiz() {
		let e = new URL(window.location.href);
		e.searchParams.set("quiz", "1");
		let t = e.toString();
		navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(t).then(() => {
			this._showToast("Quiz link copied!");
		}).catch(() => {
			this._showToast(t, !0);
		}) : this._showToast(t, !0);
	}
	_showToast(e, t = !1) {
		let n = this.shadowRoot.querySelector(".toast");
		n && n.remove();
		let r = document.createElement("div");
		r.className = "toast", t ? (r.innerHTML = `<span>Quiz link:</span><input type="text" value="${e}" readonly class="toast-url" />`, r.querySelector(".toast-url").onclick = function() {
			this.select();
		}) : r.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg><span>${e}</span>`, this.shadowRoot.appendChild(r), setTimeout(() => {
			r.parentNode && r.remove();
		}, 3e3);
	}
	_showVoiceOverlay() {
		let e = this.shadowRoot.getElementById("voice-overlay");
		e.style.display = "flex", this._updateVoiceList();
	}
	_hideVoiceOverlay() {
		let e = this.shadowRoot.getElementById("voice-overlay");
		e.style.display = "none";
	}
	_updateVoiceList() {
		let e = this.shadowRoot.getElementById("voice-list");
		if (!e) return;
		let t = window.speechSynthesis.getVoices(), n = this._getLang(), r = n.split(/[-_]/)[0].toLowerCase(), i = t.filter((e) => e.lang.split(/[-_]/)[0].toLowerCase() === r), a = this._getBestVoice(n);
		e.innerHTML = "", i.sort((e, t) => e.name.localeCompare(t.name)), i.forEach((t) => {
			let n = document.createElement("button");
			n.classList.add("voice-option-btn"), (this.selectedVoiceName === t.name || !this.selectedVoiceName && a && t.name === a.name) && n.classList.add("active"), n.innerHTML = `<span>${t.name}</span>`, a && t.name === a.name && (n.innerHTML += "<span class=\"badge\">Best</span>"), n.onclick = () => {
				this.selectedVoiceName = t.name, this._updateVoiceList(), this._hideVoiceOverlay();
			}, e.appendChild(n);
		});
	}
};
customElements.define("tj-listening", o);
//#endregion
