import { getAndroidIntentLink as e, getBestVoice as t, shouldShowAudioControls as n, startAudioRecording as r } from "./audio-utils.js";
import { resolveComponentParams as i } from "./tj-config.js";
//#region src/tj-reader/styles.css?inline
var a = ":host{color:#1e293b;--tj-primary-color:#2563eb;--tj-primary-hover:#1d4ed8;--tj-primary-light:#eff6ff;--tj-primary-border:#bfdbfe;--tj-success-color:#16a34a;--tj-success-light:#f0fdf4;--tj-success-border:#bbf7d0;--tj-danger-color:#dc2626;--tj-danger-light:#fef2f2;--tj-danger-border:#fecaca;--tj-text-main:#1e293b;--tj-text-muted:#64748b;--tj-text-light:#94a3b8;--tj-bg-card:#fff;--tj-bg-alt:#f1f5f9;--tj-border-main:#e2e8f0;--tj-border-light:#f1f5f9;--tj-border-dark:#cbd5e1;background-color:#0000;max-width:80em;margin:0 auto;font-family:inherit;display:block;position:relative}@media (prefers-color-scheme:dark){:host{color:#e2e8f0;--tj-primary-light:#1e3a8a;--tj-primary-border:#1e40af;--tj-success-light:#14532d;--tj-success-border:#166534;--tj-danger-light:#7f1d1d;--tj-danger-border:#991b1b;--tj-text-main:#f1f5f9;--tj-text-muted:#94a3b8;--tj-text-light:#cbd5e1;--tj-bg-card:#1e293b;--tj-bg-alt:#0f172a;--tj-border-main:#475569;--tj-border-light:#334155;--tj-border-dark:#64748b}}.sticky-bar{background:var(--tj-bg-card);-webkit-backdrop-filter:blur(12px);box-shadow:0 1px 0 var(--tj-border-main), 0 4px 16px #0000000a;z-index:100;border-bottom:1px solid var(--tj-border-main);border-radius:0;justify-content:space-between;align-items:center;margin:.25rem;padding:.75em 1em;display:flex;position:sticky;top:0}.playback-controls{align-items:center;gap:1em;display:flex}.autoplay-toggle-container{color:#475569;-webkit-user-select:none;user-select:none;background:#f8fafc80;border:1px solid #e2e8f0;border-radius:2em;align-items:center;gap:.8em;padding:.4em .8em;font-size:.85em;font-weight:600;display:flex}.switch{width:32px;height:18px;display:inline-block;position:relative}.switch input{opacity:0;width:0;height:0}.slider{cursor:pointer;background-color:#cbd5e1;border-radius:18px;transition:all .4s;position:absolute;inset:0}.slider:before{content:\"\";background-color:#fff;border-radius:50%;width:14px;height:14px;transition:all .4s;position:absolute;bottom:2px;left:2px}input:checked+.slider{background-color:#2563eb}input:checked+.slider:before{transform:translate(14px)}.control-btn{color:#475569;cursor:pointer;background:#f8fafc;border:1px solid #e2e8f0;border-radius:.6em;align-items:center;gap:.5em;padding:.5em 1em;font-size:.9em;font-weight:600;transition:all .2s;display:flex}.control-btn:hover{color:#2563eb;background:#f1f5f9;border-color:#cbd5e1}#play-pause-btn{color:#fff;background:#2563eb;border-color:#1d4ed8}#play-pause-btn:hover{background:#1d4ed8}#stop-btn{display:none}.progress-text{color:#2563eb;white-space:nowrap;font-size:1.1em;font-weight:700}.lang-selector-container{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);text-align:center;border-radius:1.2em;flex-direction:column;justify-content:center;align-items:center;margin:1rem .25rem 1.25rem;padding:1.25rem 1.5rem;display:flex;box-shadow:0 2px 10px #0000000a}.lang-selector-label{color:var(--tj-text-main);letter-spacing:-.01em;margin-bottom:.85em;font-size:1.15rem;font-weight:700}.lang-selector-buttons{background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);border-radius:9999px;flex-wrap:wrap;justify-content:center;align-items:center;gap:.35rem;padding:.35rem;display:inline-flex}.lang-btn{color:var(--tj-text-muted);cursor:pointer;background:0 0;border:1.5px solid #0000;border-radius:9999px;padding:.6em 1.5em;font-size:.95em;font-weight:600;transition:all .25s cubic-bezier(.4,0,.2,1)}.lang-btn:hover:not(.active){color:#2563eb;background:#2563eb14;border-color:#0000;transform:none}.lang-btn.active{color:#fff;background:#2563eb;border-color:#2563eb;box-shadow:0 2px 8px #2563eb47}.story-container{scrollbar-width:thin;scrollbar-color:#cbd5e1 transparent;flex-direction:column;gap:1rem;padding:0 .5rem;display:flex;overflow:hidden auto}.story-container::-webkit-scrollbar{width:6px}.story-container::-webkit-scrollbar-thumb{background-color:#cbd5e1;border-radius:3px}.card{background:var(--tj-bg-card);text-align:left;opacity:1;border:none;border-radius:1.2em;padding:1rem .75rem;transition:box-shadow .3s,background .3s;box-shadow:0 2px 8px #0000000f}.card:hover{box-shadow:0 4px 16px #00000017}.card.completed{background:var(--tj-success-light);box-shadow:0 2px 12px #16a34a1a}.card.failed{background:var(--tj-danger-light);box-shadow:0 2px 12px #dc26261a}.card.playing{background:var(--tj-primary-light);box-shadow:0 4px 20px #2563eb24}.card-header{justify-content:center;align-items:flex-start;gap:1em;margin-bottom:.5em;display:flex}.original-text{color:var(--tj-text-main);flex:1;font-size:1.15em;font-weight:500;line-height:1.65}.tts-word{cursor:pointer;border-radius:.2em;padding:0 .1em;transition:background .2s}.tts-word:hover{background:#f1f5f9}.voice-btn{cursor:pointer;width:2.2em;height:2.2em;color:var(--tj-primary-color);background:#eef2ff;border:1px solid #c7d2fe;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;padding:0;font-size:1.1em;transition:all .2s cubic-bezier(.4,0,.2,1);display:flex;box-shadow:0 1px 3px #00000014}.voice-btn:hover{color:#000;background:#c7d2fe;transform:scale(1.1);box-shadow:0 2px 6px #00000026}.card-btn-group{background:#fdfdfd;border:1px solid #f1f5f9;border-radius:2em;align-items:center;gap:.6em;padding:.4em;display:flex}.record-btn,.play-recorded-btn{cursor:pointer;color:#1a202c;background:#f8fafc;border:1px solid #e2e8f0;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:2.2em;height:2.2em;padding:0;transition:all .2s cubic-bezier(.4,0,.2,1);display:flex}.record-btn:hover{color:#b91c1c;background:#fee2e2;border-color:#fecaca;transform:scale(1.1)}.record-btn.recording{color:#fff;background:#ef4444;border-color:#dc2626;animation:1.5s infinite pulse}.play-recorded-btn{color:#15803d;background:#f0fdf4;border-color:#bbf7d0}.play-recorded-btn.playing{color:#fff;background:#15803d;border-color:#14532d;animation:1.5s infinite pulse-green}.play-recorded-btn:hover{color:#14532d;background:#bbf7d0;transform:scale(1.1)}@keyframes pulse-green{0%{transform:scale(1);box-shadow:0 0 #15803db3}70%{transform:scale(1.05);box-shadow:0 0 0 10px #15803d00}to{transform:scale(1);box-shadow:0 0 #15803d00}}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #ef4444b3}70%{transform:scale(1.05);box-shadow:0 0 0 10px #ef444400}to{transform:scale(1);box-shadow:0 0 #ef444400}}.full-translation{color:var(--tj-text-muted);margin-bottom:.75em;font-size:1em;font-style:italic;line-height:1.5}.highlight{color:#2563eb;border-bottom:3px solid #bfdbfe;padding:0 .1em;font-weight:700;transition:all .3s}.card.completed .highlight{color:#16a34a;border-bottom-color:#bbf7d0}.card.failed .highlight{color:#dc2626;border-bottom-color:#fecaca}.translation-options{flex-wrap:wrap;justify-content:center;gap:.8em;display:flex}button{cursor:pointer;background:var(--tj-bg-card);border:1px solid var(--tj-border-main);color:var(--tj-text-muted);border-radius:.7em;outline:none;padding:.6em 1.2em;font-family:inherit;font-size:1em;transition:all .2s cubic-bezier(.4,0,.2,1)}button:hover:not(:disabled){background:var(--tj-bg-alt);border-color:var(--tj-border-dark);transform:translateY(-1px)}button.success{color:#fff;border-color:#16a34a;animation:.4s bounce;background:#22c55e!important}button.error{color:#fff;border-color:#dc2626;animation:.4s shake;background:#ef4444!important}.finish-container{text-align:center;padding:2em 0 5em}.finish-btn{color:#fff;cursor:pointer;background:#2563eb;border:none;border-radius:.8em;padding:1.2em 2.5em;font-size:1.1em;font-weight:700;transition:all .3s;box-shadow:0 4px 12px #2563eb26}.finish-btn:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 15px #2563eb33}.form-overlay{background:var(--tj-bg-card);z-index:20;border-radius:1.2em;flex-direction:column;justify-content:center;align-items:center;animation:.3s fadeIn;display:none;position:absolute;inset:0}.form-container{text-align:center;width:80%;max-width:300px}input{box-sizing:border-box;border:1px solid #e2e8f0;border-radius:.5em;width:100%;margin-bottom:1em;padding:1em;font-size:1em}.generate-btn,.try-again-btn{color:#fff;background:#2563eb;border:none;border-radius:.5em;width:100%;padding:1em;font-weight:600}.report-card{background:var(--tj-bg-card);text-align:left;color:var(--tj-text-main);border-radius:1em;padding:2em;box-shadow:0 4px 20px #0000001a}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes bounce{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.browser-prompt-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:1000;color:#fff;text-align:center;background:#0f172ae6;flex-direction:column;justify-content:center;align-items:center;padding:2em;display:none;position:fixed;inset:0}.browser-prompt-card{background:var(--tj-bg-card);color:var(--tj-text-main);border-radius:1.5em;max-width:400px;padding:2.5em;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{color:var(--tj-text-main);margin-top:0;font-size:1.5em}.browser-prompt-card p{color:var(--tj-text-muted);margin-bottom:2em;line-height:1.6}.browser-action-btn{color:#fff;cursor:pointer;box-sizing:border-box;background:#2563eb;border:none;border-radius:.75em;width:100%;padding:1em 2em;font-weight:600;text-decoration:none;transition:background .2s;display:inline-block}.browser-action-btn:hover{background:#1d4ed8}.close-prompt{color:#94a3b8;cursor:pointer;background:0 0;border:none;margin-top:1.5em;font-size:.9em;text-decoration:underline}.activities-wrapper{flex-direction:column;gap:3em;padding-bottom:2rem;display:flex}.section-divider{border:none;border-top:2px dashed var(--tj-border-dark,#cbd5e1);margin:2.5em 0;position:relative}.section-divider:after{content:attr(data-label);background:var(--tj-bg-card);border:1px solid var(--tj-border-main);color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.08em;border-radius:9999px;padding:.35em 1.2em;font-size:.85em;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 2px 6px #0000000a}.form-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:1000;background:#0f172acc;justify-content:center;align-items:center;animation:.3s fadeIn;display:none;position:fixed;inset:0}.form-container{background:var(--tj-bg-card);text-align:center;width:90%;max-width:450px;max-height:90vh;color:var(--tj-text-main);border-radius:1.5em;padding:2.5em;overflow-y:auto;box-shadow:0 25px 50px -12px #00000040}.report-area{text-align:left}.rc-header{text-align:center;margin-bottom:24px}.rc-icon{margin-bottom:8px;font-size:2.5em}.rc-title{color:var(--tj-text-main);margin-bottom:4px;font-size:1.4em;font-weight:700}.rc-subtitle{color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em;font-size:.9em;font-weight:600}.rc-activity{background:var(--tj-bg-alt);color:var(--tj-text-main);border-radius:20px;margin-top:12px;padding:4px 12px;font-size:.85em;font-weight:600;display:inline-block}.rc-student{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:12px;justify-content:space-between;align-items:center;margin-bottom:24px;padding:16px;display:flex}.rc-label{color:var(--tj-text-muted);font-size:.9em;font-weight:600}.rc-value{color:var(--tj-text-main);text-align:right;font-weight:700}.rc-number{color:var(--tj-text-muted);font-size:.9em;font-weight:500;display:block}.rc-score-row{align-items:center;gap:20px;margin-bottom:16px;display:flex}.rc-score-circle{background:var(--tj-primary-light);width:80px;height:80px;color:var(--tj-primary-color);border:3px solid var(--tj-primary-color);border-radius:50%;flex-direction:column;flex-shrink:0;justify-content:center;align-items:center;display:flex}.rc-score-val{font-size:1.5em;font-weight:800;line-height:1}.rc-score-pct{margin-top:2px;font-size:.85em;font-weight:700}.rc-score-label{color:var(--tj-text-main);font-size:1.1em;font-weight:700}.rc-bar-track{background:var(--tj-bg-alt);border-radius:4px;height:8px;overflow:hidden}.rc-bar-fill{background:var(--tj-primary-color);border-radius:4px;height:100%}.rc-details{background:var(--tj-bg-alt);border-radius:12px;margin-bottom:24px;padding:16px;font-size:.9em}.rc-detail-row{justify-content:space-between;margin-bottom:8px;display:flex}.rc-detail-row:last-child{margin-bottom:0}.rc-detail-row span:first-child{color:var(--tj-text-muted);font-weight:500}.rc-detail-row span:last-child{color:var(--tj-text-main);font-weight:600}.rc-close-btn:hover{background:var(--tj-bg-alt)}.rc-submission-box{background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);text-align:left;border-radius:12px;margin-top:20px;padding:20px;box-shadow:inset 0 2px 4px #00000005}.rc-submission-header{color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px;font-size:.85em;font-weight:700}.rc-teacher-code-input{box-sizing:border-box;background:var(--tj-bg-card);width:100%;color:var(--tj-text-main);border-radius:10px;outline:none;margin-bottom:8px;padding:12px 16px;font-family:inherit;font-size:1em;transition:all .2s}.rc-teacher-code-input:focus{border-color:var(--tj-primary-color);box-shadow:0 0 0 4px var(--tj-primary-light)}.rc-teacher-code-input::placeholder{color:var(--tj-text-light)}.rc-help-text{color:var(--tj-text-muted);margin:4px 0 0;font-size:.85em;line-height:1.4}.rc-submit-btn{background:var(--tj-primary-color);color:#fff;cursor:pointer;border:none;border-radius:12px;width:100%;margin-bottom:8px;padding:16px;font-size:1.1em;font-weight:700;transition:all .2s;box-shadow:0 4px 12px #2563eb40}.rc-submit-btn:hover:not(:disabled){background:var(--tj-primary-hover);transform:translateY(-1px);box-shadow:0 6px 16px #2563eb59}.rc-submit-btn:active:not(:disabled){transform:translateY(0)}.rc-submit-btn:disabled{opacity:.5;cursor:default;background:var(--tj-text-light);box-shadow:none}.rc-secondary-btn{background:var(--tj-bg-alt);width:100%;color:var(--tj-text-main);border:1.5px solid var(--tj-border-main);cursor:pointer;border-radius:12px;padding:14px;font-size:1em;font-weight:600;transition:all .2s}.rc-secondary-btn:hover{background:var(--tj-border-main);border-color:var(--tj-border-dark)}.reset-all-btn{color:#fff;cursor:pointer;opacity:.9;background:#ef4444;border:none;border-radius:.5em;width:100%;margin-top:1em;padding:1em;font-size:.85em;font-weight:600;transition:background .2s}.reset-all-btn:hover{opacity:1;background:#dc2626}.unscramble-card{box-sizing:border-box;background:var(--tj-bg-card);border-radius:1.2em;width:100%;max-width:600px;margin-left:auto;margin-right:auto;padding:1.25em;box-shadow:0 2px 8px #0000000f}.unscramble-card h3{color:#2563eb;margin-top:0}.unscramble-result{border-bottom:2px dashed #e2e8f0;flex-wrap:wrap;justify-content:center;gap:.5em;min-height:3em;margin-bottom:1em;padding:.5em;display:flex}.unscramble-pool{flex-wrap:wrap;justify-content:center;gap:.5em;margin-bottom:2em;display:flex}.unscramble-actions{flex-wrap:wrap;justify-content:center;gap:1em;padding:.5em;font-size:.9em;display:flex}.unscramble-result button{color:#475569;background:#f8fafc;border-color:#e2e8f0}.unscramble-pool button{background:#f8fafc}.memory-container{box-sizing:border-box;background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:1.2em;width:100%;max-width:600px;margin:0 auto;padding:1.5em;box-shadow:0 2px 10px #0000000a}.memory-game-header{text-align:center;margin-bottom:1.5em}.memory-game-header h3{color:#2563eb;margin:0 0 .35rem;font-size:1.35rem;font-weight:700}.memory-game-header p{color:var(--tj-text-muted);margin:0;font-size:.95rem}.memory-grid{box-sizing:border-box;grid-template-columns:repeat(3,1fr);gap:.85em;width:100%;max-width:480px;margin:0 auto 1.5em;padding:0;display:grid}.memory-card{aspect-ratio:4/5;perspective:1000px;cursor:pointer;min-height:90px}.memory-card-inner{text-align:center;width:100%;height:100%;transform-style:preserve-3d;border-radius:.8em;transition:transform .6s cubic-bezier(.4,0,.2,1);position:relative;box-shadow:0 4px 10px #00000014}.memory-card.flipped .memory-card-inner{transform:rotateY(180deg)}.memory-card-front,.memory-card-back{backface-visibility:hidden;box-sizing:border-box;border:1px solid var(--tj-border-main);border-radius:.8em;justify-content:center;align-items:center;width:100%;height:100%;padding:.5em;font-size:.9em;font-weight:600;display:flex;position:absolute}.memory-card-front{color:#fff;background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%);border-color:#2563eb80;font-size:2em;box-shadow:inset 0 0 20px #ffffff26}.memory-card-back{background-color:var(--tj-bg-card);color:var(--tj-text-main);word-break:break-word;border-color:var(--tj-border-main);padding:.75em;font-size:1.05em;line-height:1.25;transform:rotateY(180deg)}.memory-card.matched .memory-card-inner{border:2px solid #22c55e;box-shadow:0 0 16px #22c55e66}.memory-game-actions{justify-content:center;gap:1em;margin-top:1.25em;display:flex}.memory-game-actions button{background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);color:var(--tj-text-main);cursor:pointer;border-radius:.75em;padding:.65em 1.4em;font-size:.95em;font-weight:600;transition:all .2s cubic-bezier(.4,0,.2,1)}.memory-game-actions button:hover{background:var(--tj-primary-light);border-color:var(--tj-primary-border);color:#2563eb;transform:translateY(-1px)}.recordings-section{text-align:left;margin-top:20px}.recordings-section h4{color:var(--tj-text-main);border-bottom:1px solid var(--tj-border-main);align-items:center;gap:8px;margin:0 0 12px;padding-bottom:.5em;font-size:1em;display:flex}.recordings-list{flex-direction:column;gap:8px;display:flex}.recording-item{background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);border-radius:8px;align-items:center;gap:12px;padding:8px;transition:background .2s;display:flex}.recording-item:hover{background:var(--tj-border-light)}.recording-play-btn{cursor:pointer;color:#2563eb;background:#eef2ff;border:1px solid #c7d2fe;border-radius:50%;justify-content:center;align-items:center;width:34px;height:34px;padding:0;transition:all .2s;display:flex;box-shadow:0 1px 3px #0000001a}.recording-play-btn:hover{background:#c7d2fe;transform:scale(1.1)}.recording-play-btn.playing{color:#fff;background:#2563eb}.recording-text{color:var(--tj-text-muted);font-size:.9em;line-height:1.4}@media (width<=600px){.sticky-bar{flex-wrap:wrap;gap:.4em;padding:.4rem .6rem}.playback-controls{flex-wrap:wrap;flex:1;gap:.35em;min-width:0}.control-btn{padding:.4em .6em}.control-btn span{display:none}.autoplay-toggle-container{gap:.4em;padding:.3em .5em;font-size:.8em}.tj-speed-control{height:2.2em;padding:.25em .4em .25em .6em;font-size:.85em}.tj-speed-control:after{right:.5em}.tj-speed-select{padding-right:.9em}.progress-text{white-space:nowrap;margin-left:auto;font-size:.9em}}@media (width>=601px){.memory-grid{grid-template-columns:repeat(4,1fr)}}.voice-overlay{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1000;background:#0f172ab3;justify-content:center;align-items:center;animation:.2s fadeIn;display:none;position:fixed;inset:0}.voice-card{background:#fff;border-radius:1.2em;flex-direction:column;width:90%;max-width:400px;max-height:80vh;display:flex;box-shadow:0 20px 25px -5px #0003}.voice-card-header{border-bottom:1px solid #f1f5f9;justify-content:space-between;align-items:center;padding:1.25em;display:flex}.voice-card-header h3{color:#1e293b;margin:0;font-size:1.1em}.close-voice-btn{color:#94a3b8;cursor:pointer;background:0 0;border:none;padding:.5em}.voice-list{flex-direction:column;gap:.5em;padding:1em;display:flex;overflow-y:auto}.voice-option-btn{justify-content:space-between;align-items:center;width:100%;transition:all .2s;display:flex;text-align:left!important;color:#475569!important;background:#f8fafc!important;border:1px solid #f1f5f9!important;border-radius:.6em!important;padding:.8em 1em!important;font-size:.9em!important}.voice-option-btn:hover{background:#f1f5f9!important;border-color:#e2e8f0!important}.voice-option-btn.active{color:#2563eb!important;background:#eff6ff!important;border-color:#3b82f6!important;font-weight:600!important}.voice-option-btn .badge{color:#166534;background:#dcfce7;border-radius:1em;padding:.2em .5em;font-size:.75em}.tj-speed-control{background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);color:#475569;cursor:pointer;border-radius:.6em;align-items:center;gap:.25em;height:2.5em;padding:.25em .5em .25em .75em;transition:all .2s;display:inline-flex;position:relative}.tj-speed-control:hover{background:var(--tj-border-light);border-color:var(--tj-border-dark);color:var(--tj-primary-color)}.tj-speed-icon{opacity:.85;flex-shrink:0}.tj-speed-select{color:inherit;cursor:pointer;appearance:none;background:0 0;border:none;outline:none;padding:0 1.2em 0 .2em;font-family:inherit;font-size:.9em;font-weight:700}.tj-speed-control:after{content:\"\";pointer-events:none;border-top:5px solid;border-left:4px solid #0000;border-right:4px solid #0000;position:absolute;top:50%;right:.8em;transform:translateY(-50%)}", o = "<div class=\"sticky-bar\">\n  <div class=\"playback-controls\">\n    <div class=\"autoplay-toggle-container\" id=\"autoplay-container\">\n      <span>Auto-Play</span>\n      <label class=\"switch\">\n        <input type=\"checkbox\" id=\"autoplay-checkbox\" checked>\n        <span class=\"slider\"></span>\n      </label>\n    </div>\n    <button class=\"control-btn\" id=\"play-pause-btn\">\n      <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg> \n      <span>All</span>\n    </button>\n    <button class=\"control-btn\" id=\"stop-btn\" title=\"Stop Playback\">\n      <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M6 6h12v12H6z\"/></svg>\n      <span>Stop</span>\n    </button>\n    <button class=\"control-btn\" id=\"voice-btn\" title=\"Choose Voice\">\n      <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z\"/></svg>\n    </button>\n    <div class=\"tj-speed-control\" title=\"Playback Speed\">\n      <svg class=\"tj-speed-icon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\">\n        <path d=\"M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 12 6a7.89 7.89 0 0 1 6 2.73l1.42-1.42A9.91 9.91 0 0 0 12 4a10 10 0 0 0-7.68 16.4h15.36A10 10 0 0 0 20.38 8.57zM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3-6h-2v4h2V6z\"/>\n      </svg>\n      <select id=\"speed-select\" class=\"tj-speed-select\">\n        <option value=\"0.5\">0.5x</option>\n        <option value=\"0.6\">0.6x</option>\n        <option value=\"0.7\">0.7x</option>\n        <option value=\"0.8\">0.8x</option>\n        <option value=\"0.9\">0.9x</option>\n        <option value=\"1.0\">1.0x</option>\n        <option value=\"1.2\">1.2x</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"progress-text\">0 / 0</div>\n</div>\n<div class=\"lang-selector-container\">\n  <p class=\"lang-selector-label\">I want to read in:</p>\n  <div class=\"lang-selector-buttons\">\n    <button class=\"lang-btn lang-btn-original active\"></button>\n    <button class=\"lang-btn lang-btn-translation\"></button>\n  </div>\n</div>\n<div class=\"activities-wrapper\">\n  <div id=\"reading-section\">\n    <div class=\"story-container\"></div>\n  </div>\n  \n  <div id=\"scramble-section\">\n    <hr class=\"section-divider\" data-label=\"Unscramble\">\n    <div class=\"scramble-container\"></div>\n  </div>\n\n  <div id=\"memory-section\">\n    <hr class=\"section-divider\" data-label=\"Memory Game\">\n    <div class=\"memory-container\"></div>\n  </div>\n\n  <div class=\"finish-container\">\n    <button class=\"finish-btn\">Finish & See Report</button>\n  </div>\n</div>\n\n<div class=\"form-overlay\">\n  <div class=\"form-container\">\n    <div class=\"initial-form\">\n      <h2>Great Job!</h2>\n      <p>Please enter your details to generate your report card.</p>\n      <input type=\"text\" id=\"nickname\" placeholder=\"Jake\">\n      <input type=\"text\" id=\"student-number\" placeholder=\"01\" inputmode=\"numeric\">\n      <input type=\"text\" id=\"homeroom\" placeholder=\"1/1\">\n      <button class=\"generate-btn\">Generate Report Card</button>\n    </div>\n    <div class=\"report-area\"></div>\n  </div>\n</div>\n\n<div class=\"browser-prompt-overlay\">\n  <div class=\"browser-prompt-card\">\n    <h2>Better in a Browser</h2>\n    <p>It looks like you're using an in-app browser. For the best experience (including audio features), please open this page in <b>Chrome</b> or <b>Safari</b>.</p>\n    <a class=\"browser-action-btn\" href=\"javascript:void(0)\">Open Browser</a>\n    <button class=\"close-prompt\" onclick=\"this.parentElement.parentElement.style.display='none'\">Continue anyway</button>\n  </div>\n</div>\n<div class=\"voice-overlay\">\n  <div class=\"voice-card\">\n    <div class=\"voice-card-header\">\n      <h3>Choose Voice</h3>\n      <button class=\"close-voice-btn\">\n        <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"currentColor\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>\n      </button>\n    </div>\n    <div class=\"voice-list\"></div>\n  </div>\n</div>\n", s = class extends HTMLElement {
	get code() {
		return i(this).teacherCode;
	}
	set code(e) {
		e == null ? this.removeAttribute("code") : this.setAttribute("code", e);
	}
	getLanguageName(e) {
		if (!e) return e || "";
		try {
			return new Intl.DisplayNames(["en"], { type: "language" }).of(e.split(/[-_]/)[0]);
		} catch {
			return e;
		}
	}
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `
      <style>${a}</style>
      ${o}
    `, this.data = [], this.studentInfo = {
			nickname: "",
			number: "",
			homeroom: "",
			teacherCode: ""
		}, this.submissionUrl = "", this.isSubmitting = !1, this.score = 0, this.answeredCount = 0, this.isPlayingAll = !1, this.playbackIndex = 0, this.isPaused = !1, this.playbackUtterance = null;
		let e = parseFloat(localStorage.getItem("tj-reader-speed"));
		this.playbackSpeed = isNaN(e) ? .7 : e, this.isAutoplay = !0, this.unscrambleData = [], this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], this.memoryGameData = [], this.flippedCards = [], this.matchedPairsCount = 0, this.matchingGamesCompleted = 0, this.isCheckingMatch = !1, this.isSwapped = !1, this.selectedVoiceName = null, this.recordedBlobs = /* @__PURE__ */ new Map(), this.recordedSentences = /* @__PURE__ */ new Set(), this.completedIndices = /* @__PURE__ */ new Set(), this.unscrambleCompleted = !1, this.memoryCompleted = !1, this.unscrambleTotal = 0, this.memoryTotal = 0, this.isRecordingLine = null, this.mediaRecorder = null, this.recordingStartTime = 0, this.isPlayingRecording = null, this.shadowRoot.querySelector(".generate-btn").onclick = () => this.generateReport(), this.shadowRoot.querySelector("#play-pause-btn").onclick = () => this.toggleFullPlayback(), this.shadowRoot.querySelector("#stop-btn").onclick = () => this.stopFullPlayback(), this.shadowRoot.querySelector("#voice-btn").onclick = () => this._showVoiceOverlay(), this.shadowRoot.querySelector(".close-voice-btn").onclick = () => this._hideVoiceOverlay(), this.shadowRoot.querySelector(".voice-overlay").onclick = (e) => {
			e.target.classList.contains("voice-overlay") && this._hideVoiceOverlay();
		}, this.shadowRoot.querySelector(".lang-btn-original").onclick = () => {
			this.isSwapped && this.swapLanguages();
		}, this.shadowRoot.querySelector(".lang-btn-translation").onclick = () => {
			this.isSwapped || this.swapLanguages();
		};
		let t = this.shadowRoot.querySelector("#autoplay-checkbox");
		t.onchange = (e) => {
			this.isAutoplay = e.target.checked;
		};
		let n = this.shadowRoot.querySelector("#speed-select");
		n && (n.value = this.playbackSpeed.toString(), n.onchange = (e) => {
			this.playbackSpeed = parseFloat(e.target.value), localStorage.setItem("tj-reader-speed", e.target.value);
		});
	}
	connectedCallback() {
		let e = i(this);
		this.submissionUrl = e.submissionUrl, requestAnimationFrame(async () => {
			await this.loadData(), this.checkBrowserSupport(), window.speechSynthesis.onvoiceschanged !== void 0 && (window.speechSynthesis.onvoiceschanged = () => {
				this._updateVoiceList();
			}), this._updateVoiceList(), setTimeout(() => this._updateVoiceList(), 500), setTimeout(() => this._updateVoiceList(), 1500);
		});
	}
	async loadData() {
		try {
			let e = i(this);
			this.submissionUrl = e.submissionUrl;
			let t = "";
			if (this.config) if (typeof this.config == "object") {
				this._processParsedData(this.config);
				return;
			} else t = String(this.config);
			else if (this.hasAttribute("config")) t = this.getAttribute("config");
			else if (e.dataUrl) try {
				let t = await (await fetch(e.dataUrl)).json();
				this._processParsedData(t);
				return;
			} catch (e) {
				console.error("Failed to fetch data from dataUrl for tj-reader", e);
			}
			else this.rawJson ? t = this.rawJson : (this.rawJson = this.innerHTML.trim(), this.innerHTML = "", t = this.rawJson);
			if (t) {
				let e = t.replace(/"((?:\\.|[^"\\])*)"/gs, (e, t) => "\"" + t.replace(/\n/g, "\\n").replace(/\r/g, "\\r") + "\""), n = JSON.parse(e);
				this._processParsedData(n);
			}
		} catch (e) {
			console.error("Failed to parse JSON data for lbl-reader", e), this.shadowRoot.innerHTML = "<div class=\"error\">Error loading data. Check console.</div>";
		}
	}
	_processParsedData(e) {
		this.data = (Array.isArray(e) ? e : [e]).map((e) => {
			let t = [...e.translationOptions], n = e.translationOptions[e.correctTranslationIndex];
			for (let e = t.length - 1; e > 0; e--) {
				let n = Math.floor(Math.random() * (e + 1));
				[t[e], t[n]] = [t[n], t[e]];
			}
			let r = e.original.split(/\s+/), i = e.highlightIndex, a = e.highlightIndexEnd === void 0 ? i : e.highlightIndexEnd, o = r.slice(i, a + 1).join(" ").replace(/[.,!?;:]/g, "");
			return {
				...e,
				highlightIndexEnd: a,
				shuffledOptions: t,
				newCorrectIndex: t.indexOf(n),
				originalWord: o,
				translationWord: n
			};
		}), this.matchingGamesCompleted = 0, this.render();
	}
	displayAllLines() {
		let e = this.shadowRoot.querySelector(".story-container");
		e.innerHTML = "", this.score = this.completedIndices.size, this.answeredCount = this.completedIndices.size;
		let t = this.getAttribute("lang-original") || "en", n = this.getAttribute("lang-translation") || "th";
		this.data.forEach((r, i) => {
			let a = document.createElement("div");
			a.classList.add("card"), a.dataset.index = i;
			let o = document.createElement("div");
			o.classList.add("card-header");
			let s = document.createElement("div");
			if (s.classList.add("original-text"), t.split(/[-_]/)[0].toLowerCase() === "th" && typeof Intl < "u" && Intl.Segmenter) {
				let e = new Intl.Segmenter("th", { granularity: "word" }).segment(r.original);
				for (let n of e) if (n.isWordLike) {
					let e = document.createElement("span");
					e.textContent = n.segment, e.classList.add("tts-word"), e.onclick = (e) => {
						e.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(n.segment, t);
					}, s.appendChild(e);
				} else s.appendChild(document.createTextNode(n.segment));
			} else r.original.split(" ").forEach((e, n) => {
				let i = document.createElement("span");
				i.textContent = e + " ", i.classList.add("tts-word"), !this.isSwapped && n >= r.highlightIndex && n <= r.highlightIndexEnd && i.classList.add("highlight"), i.onclick = (n) => {
					n.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(e.replace(/[.,!?;:]/g, ""), t);
				}, s.appendChild(i);
			});
			o.appendChild(s), a.appendChild(o), this.renderLineButtons(i, a);
			let c = document.createElement("div");
			if (c.classList.add("full-translation"), n.split(/[-_]/)[0].toLowerCase() === "th" && typeof Intl < "u" && Intl.Segmenter) {
				let e = new Intl.Segmenter("th", { granularity: "word" }).segment(r.fullTranslation);
				for (let t of e) if (t.isWordLike) {
					let e = document.createElement("span");
					e.textContent = t.segment, e.classList.add("tts-word"), e.onclick = (e) => {
						e.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(t.segment, n);
					}, c.appendChild(e);
				} else c.appendChild(document.createTextNode(t.segment));
			} else r.fullTranslation.split(" ").forEach((e, t) => {
				let i = document.createElement("span");
				i.textContent = e + " ", i.classList.add("tts-word"), this.isSwapped && t >= r.highlightIndex && t <= r.highlightIndexEnd && i.classList.add("highlight"), i.onclick = (t) => {
					t.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(e.replace(/[.,!?;:]/g, ""), n);
				}, c.appendChild(i);
			});
			let l = document.createElement("div");
			l.classList.add("translation-options");
			let u = this.completedIndices.has(i);
			u && a.classList.add("completed", "answered"), r.shuffledOptions.forEach((e, t) => {
				let n = document.createElement("button");
				n.textContent = e, n.addEventListener("click", () => this.handleSelection(i, t, r.newCorrectIndex, n, a)), u && (n.disabled = !0, t === r.newCorrectIndex ? n.classList.add("success") : n.style.opacity = "0.5"), l.appendChild(n);
			}), a.appendChild(c), a.appendChild(l), e.appendChild(a);
		}), this.updateProgress();
	}
	_getBestVoice(e) {
		return t(window.speechSynthesis, e);
	}
	_isMobile() {
		return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
	}
	_updateVoiceList() {
		if (!window.speechSynthesis) return;
		let e = window.speechSynthesis.getVoices(), t = this.shadowRoot.querySelector(".voice-list"), n = this.shadowRoot.querySelector("#voice-btn");
		if (!t || !n) return;
		let r = this.getAttribute("lang-original") || "en", i = r.split(/[-_]/)[0].toLowerCase(), a = e.filter((e) => e.lang.toLowerCase() === r.toLowerCase());
		a.length === 0 && (a = e.filter((e) => e.lang.split(/[-_]/)[0].toLowerCase() === i));
		let o = this.shadowRoot.querySelector(".tj-speed-control");
		if (a.length === 0 || !this._shouldShowAudioControls()) {
			n.style.display = "none", o && (o.style.display = "none");
			return;
		}
		n.style.display = "flex", o && (o.style.display = "inline-flex"), t.innerHTML = "";
		let s = this._getBestVoice(r);
		!this.selectedVoiceName && s && (this.selectedVoiceName = s.name), a.sort((e, t) => e.name.localeCompare(t.name)), a.forEach((e) => {
			let n = document.createElement("button");
			n.classList.add("voice-option-btn"), this.selectedVoiceName === e.name && n.classList.add("active");
			let r = document.createElement("span");
			if (r.textContent = e.name, n.appendChild(r), s && e.name === s.name) {
				let e = document.createElement("span");
				e.classList.add("badge"), e.textContent = "Best", n.appendChild(e);
			}
			n.onclick = () => {
				this.selectedVoiceName = e.name, this._updateVoiceList(), this._hideVoiceOverlay();
			}, t.appendChild(n);
		});
	}
	_showVoiceOverlay() {
		let e = this.shadowRoot.querySelector(".voice-overlay");
		e && (e.style.display = "flex");
	}
	_hideVoiceOverlay() {
		let e = this.shadowRoot.querySelector(".voice-overlay");
		e && (e.style.display = "none");
	}
	_speak(e, t, n = null) {
		if (!window.speechSynthesis) {
			alert("Text-to-speech is not supported in this browser. Please try Chrome or Safari.");
			return;
		}
		window.speechSynthesis.cancel();
		let r = new SpeechSynthesisUtterance(e), i = null, a = this.getAttribute("lang-original") || "en", o = t.split(/[-_]/)[0].toLowerCase(), s = a.split(/[-_]/)[0].toLowerCase();
		return this.selectedVoiceName && o === s && (i = window.speechSynthesis.getVoices().find((e) => e.name === this.selectedVoiceName)), i ||= this._getBestVoice(t), r.lang = t, i && (r.voice = i), r.rate = this.playbackSpeed, n && (r.onend = n), window.speechSynthesis.speak(r), r;
	}
	toggleFullPlayback() {
		this.isPlayingAll ? this.isPaused ? this.resumeFullPlayback() : this.pauseFullPlayback() : this.startFullPlayback();
	}
	startFullPlayback() {
		this.isPlayingAll = !0, this.isPaused = !1, this.updatePlaybackUI(), this.playLine(this.playbackIndex, !0);
	}
	pauseFullPlayback() {
		this.isPaused = !0, window.speechSynthesis.pause(), this.updatePlaybackUI();
	}
	resumeFullPlayback() {
		this.isPaused = !1, window.speechSynthesis.resume(), this.updatePlaybackUI();
	}
	stopFullPlayback() {
		window.speechSynthesis.cancel(), this.isPlayingAll = !1, this.isPaused = !1, this.playbackIndex = 0, this.clearPlaybackHighlights(), this.updatePlaybackUI();
	}
	async startRecording(e) {
		if (this.isRecordingLine === null) try {
			this.mediaRecorder = await r((e) => {
				e.data.size > 0 && (this._audioChunks ||= [], this._audioChunks.push(e.data));
			}, (t) => {
				let n = new Blob(this._audioChunks, { type: t });
				Date.now() - this.recordingStartTime > 600 ? (this.recordedBlobs.set(e, n), this.recordedSentences.add(e)) : console.warn("Recording too short to be counted."), this.isRecordingLine = null, this._audioChunks = null, this.renderLineButtons(e);
			}, 1e3), this.recordingStartTime = Date.now(), this.isRecordingLine = e, this.renderLineButtons(e);
		} catch (e) {
			console.error("Error starting recording:", e), alert("Could not access microphone. Please check permissions.");
		}
	}
	stopRecording() {
		this.mediaRecorder && this.mediaRecorder.state === "recording" && this.mediaRecorder.stop();
	}
	playRecordedAudio(e) {
		let t = this.recordedBlobs.get(e);
		if (!t) return;
		this.isPlayingRecording;
		let n = URL.createObjectURL(t), r = new Audio(n);
		this.isPlayingRecording = e, this.renderLineButtons(e), r.play(), r.onended = () => {
			this.isPlayingRecording = null, this.renderLineButtons(e), URL.revokeObjectURL(n);
		};
	}
	renderLineButtons(e, t = null) {
		if (t ||= this.shadowRoot.querySelector(`.card[data-index="${e}"]`), !t) return;
		let n = t.querySelector(".card-header"), r = n.querySelector(".card-btn-group");
		r || (r = document.createElement("div"), r.classList.add("card-btn-group"), n.appendChild(r)), r.innerHTML = "";
		let i = document.createElement("button");
		i.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>", i.classList.add("voice-btn"), i.title = "Play TTS", i.onclick = () => {
			this.isPlayingAll && this.stopFullPlayback(), this.playLine(e, !1);
		}, r.appendChild(i);
		let a = document.createElement("button");
		if (a.classList.add("record-btn"), this.isRecordingLine === e ? (a.classList.add("recording"), a.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\"/></svg>", a.onclick = () => this.stopRecording(), a.title = "Stop Recording") : (a.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z\"/><path d=\"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z\"/></svg>", a.onclick = () => this.startRecording(e), a.title = "Record Voice"), r.appendChild(a), this.recordedBlobs.has(e) && this.isRecordingLine !== e) {
			let t = document.createElement("button");
			this.isPlayingRecording === e ? (t.classList.add("play-recorded-btn", "playing"), t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z\"/></svg>") : (t.classList.add("play-recorded-btn"), t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/></svg>"), t.title = "Play Recording", t.onclick = () => this.playRecordedAudio(e), r.appendChild(t);
		}
	}
	playLine(e, t = !1) {
		if (e >= this.data.length) {
			t && this.stopFullPlayback();
			return;
		}
		this.playbackIndex = e;
		let n = this.data[e], r = this.getAttribute("lang-original") || "en";
		this.highlightCard(e), this.playbackUtterance = this._speak(n.original, r, () => {
			t && this.isPlayingAll && !this.isPaused && this.playLine(e + 1, !0);
		});
	}
	highlightCard(e) {
		this.clearPlaybackHighlights();
		let t = this.shadowRoot.querySelectorAll(".card")[e];
		t && (t.classList.add("playing"), t.scrollIntoView({
			behavior: "smooth",
			block: "center"
		}));
	}
	clearPlaybackHighlights() {
		this.shadowRoot.querySelectorAll(".card").forEach((e) => e.classList.remove("playing"));
	}
	updatePlaybackUI() {
		let e = this.shadowRoot.querySelector("#play-pause-btn");
		if (!e) return;
		this.isPlayingAll ? this.isPaused ? e.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg> <span>Resume</span>" : e.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/></svg> <span>Pause</span>" : e.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg> <span>All</span>";
		let t = this.shadowRoot.querySelector("#stop-btn");
		t && (t.style.display = this.isPlayingAll ? "flex" : "none");
	}
	_shouldShowAudioControls() {
		return n(window.speechSynthesis);
	}
	_getAndroidIntentLink() {
		return e();
	}
	checkBrowserSupport() {
		if (!this._shouldShowAudioControls()) {
			let e = this.shadowRoot.querySelector(".browser-prompt-overlay");
			if (e) {
				e.style.display = "flex";
				let t = this._getAndroidIntentLink(), n = this.shadowRoot.querySelector(".browser-action-btn");
				t ? (n.href = t, n.textContent = "Open in Chrome") : (n.onclick = (e) => {
					(!n.href || n.href === "javascript:void(0)") && (e.preventDefault(), alert("Please open this page in Safari or Chrome for the best experience with audio features."));
				}, n.textContent = "Use Safari / Chrome");
			}
		}
	}
	handleSelection(e, t, n, r, i) {
		if (!i.classList.contains("answered")) if (t === n) {
			i.classList.add("answered"), this.answeredCount++, this.completedIndices.add(e), i.dataset.hadError || this.score++, r.classList.add("success"), i.classList.add("completed"), i.classList.remove("failed"), i.querySelectorAll(".translation-options button").forEach((e) => {
				e.disabled = !0, e !== r && (e.style.opacity = "0.5");
			}), this.updateProgress();
			let t = i.nextElementSibling;
			t && !t.classList.contains("finish-container") ? setTimeout(() => {
				t.scrollIntoView({
					behavior: "smooth",
					block: "center"
				}), this.isAutoplay && this.playLine(e + 1, !1);
			}, 600) : setTimeout(() => {
				this.clearPlaybackHighlights();
				let e = this.shadowRoot.querySelector(".finish-btn");
				e && e.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			}, 600);
		} else r.classList.add("error"), r.disabled = !0, i.classList.add("failed"), i.dataset.hadError = "true";
	}
	updateProgress() {
		let e = this.shadowRoot.querySelector(".progress-text");
		e && (e.textContent = `${this.score} / ${this.data.length}`);
	}
	startUnscrambleActivity(e = !0) {
		this.shadowRoot.querySelector("#scramble-section").style.display = "block", this.unscrambleData = [], this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], this.unscrambleUsedSentences ||= /* @__PURE__ */ new Set();
		let t = String.keys ? Object.keys(this.data) : Array.from(this.data.keys());
		t = t.map((e) => parseInt(e));
		let n = t.filter((e) => !this.unscrambleUsedSentences.has(e)), r = [];
		if (n.length >= 5) r = n.sort(() => .5 - Math.random()).slice(0, 5);
		else {
			r = [...n];
			let e = 5 - r.length, i = t.filter((e) => !n.includes(e)).sort(() => .5 - Math.random());
			r = r.concat(i.slice(0, e));
		}
		if (r.forEach((e) => this.unscrambleUsedSentences.add(e)), this.unscrambleUsedSentences.size >= this.data.length && (this.unscrambleUsedSentences.clear(), r.forEach((e) => this.unscrambleUsedSentences.add(e))), this.unscrambleData = r.map((e) => {
			let t = this.data[e], n = t.original.split(/\s+/).filter((e) => e.length > 0), r = [...n].sort(() => .5 - Math.random());
			return {
				...t,
				correctWords: n,
				shuffledWords: r
			};
		}), this.unscrambleTotal = this.unscrambleData.length, this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], (this.getAttribute("lang-original") || "en") === "th") {
			this.startMemoryGame();
			return;
		}
		this.renderUnscrambleChallenge(e), this.updateProgress();
	}
	renderUnscrambleChallenge(e = !0) {
		let t = this.shadowRoot.querySelector(".scramble-container");
		t.innerHTML = "";
		let n = this.unscrambleData[this.currentUnscrambleIndex], r = document.createElement("div");
		r.classList.add("card", "unscramble-card");
		let i = document.createElement("h3");
		i.innerHTML = `Unscramble the Sentence <span style="font-size: 0.8em; color: #64748b; font-weight: normal; margin-left: 0.5em; white-space: nowrap;">(${this.currentUnscrambleIndex + 1} / ${this.unscrambleTotal})</span>`, r.appendChild(i);
		let a = this.getAttribute("lang-original") || "en", o = document.createElement("button");
		o.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>", o.classList.add("voice-btn"), o.style.margin = "0 auto 1em auto", o.onclick = () => {
			this._speak(n.original, a);
		}, r.appendChild(o);
		let s = document.createElement("div");
		s.classList.add("full-translation"), s.style.fontSize = "1.2em", s.textContent = n.fullTranslation, s.setAttribute("lang", this.getAttribute("lang-translation") || "th"), r.appendChild(s);
		let c = document.createElement("div");
		c.classList.add("unscramble-result"), c.setAttribute("lang", a), r.appendChild(c);
		let l = document.createElement("div");
		l.classList.add("unscramble-pool"), l.setAttribute("lang", a), r.appendChild(l);
		let u = () => {
			c.innerHTML = "", this.userUnscrambledWords.forEach((e, t) => {
				let n = document.createElement("button");
				n.textContent = e, n.onclick = () => {
					this.userUnscrambledWords.splice(t, 1), u();
				}, c.appendChild(n);
			}), l.innerHTML = "", n.shuffledWords.forEach((e, t) => {
				if (this.userUnscrambledWords.filter((t) => t === e).length < n.shuffledWords.filter((t) => t === e).length) {
					let t = document.createElement("button");
					t.textContent = e, t.onclick = () => {
						this.userUnscrambledWords.push(e), u();
					}, l.appendChild(t);
				}
			});
		};
		u();
		let d = document.createElement("div");
		d.classList.add("unscramble-actions");
		let f = document.createElement("button");
		f.textContent = "Skip", f.style.opacity = "0.7", f.onclick = () => {
			this.currentUnscrambleIndex++, this.userUnscrambledWords = [], this.currentUnscrambleIndex < this.unscrambleData.length ? (this.renderUnscrambleChallenge(), this.updateProgress()) : this.renderUnscrambleCompletion();
		};
		let p = document.createElement("button");
		p.textContent = "Check", p.classList.add("finish-btn"), p.style.padding = "0.8em 2em", p.onclick = () => {
			this.userUnscrambledWords.join(" ") === n.correctWords.join(" ") ? (this.unscrambleScore++, p.textContent = "Correct! Next", p.classList.add("success"), p.onclick = () => {
				this.currentUnscrambleIndex++, this.userUnscrambledWords = [], this.currentUnscrambleIndex < this.unscrambleData.length ? (this.renderUnscrambleChallenge(), this.updateProgress()) : this.renderUnscrambleCompletion();
			}) : (p.classList.add("error"), setTimeout(() => p.classList.remove("error"), 500));
		};
		let m = document.createElement("button");
		m.textContent = "Reset", m.onclick = () => {
			this.userUnscrambledWords = [], u();
		}, d.appendChild(m), d.appendChild(f), d.appendChild(p), r.appendChild(d), t.appendChild(r), e && r.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	}
	startMemoryGame(e = !0) {
		this.shadowRoot.querySelector("#memory-section").style.display = "block", this.matchingGamesCompleted++, this.matchedPairsCount = 0, this.flippedCards = [], this.isCheckingMatch = !1;
		let t = this.data.map((e) => ({
			original: e.originalWord,
			translation: e.translationWord
		})), n = [], r = /* @__PURE__ */ new Set();
		for (; n.length < 6 && r.size < t.length;) {
			let e = Math.floor(Math.random() * t.length);
			r.has(e) || (n.push(t[e]), r.add(e));
		}
		let i = [];
		n.forEach((e, t) => {
			i.push({
				id: t,
				type: "original",
				text: e.original,
				lang: this.getAttribute("lang-original") || "en"
			}), i.push({
				id: t,
				type: "translation",
				text: e.translation,
				lang: this.getAttribute("lang-translation") || "th"
			});
		}), this.memoryGameData = i.sort(() => .5 - Math.random()), this.memoryTotal = this.memoryGameData.length / 2, this.renderMemoryGameUI(), this.updateProgress();
	}
	renderUnscrambleCompletion() {
		let e = this.shadowRoot.querySelector(".scramble-container");
		e && (e.innerHTML = `
        <div class="card unscramble-card" style="text-align: center; border-color: #22c55e; background: #f0fdf4;">
          <h3 style="color: #16a34a;">Unscramble Complete!</h3>
          <p>You scored ${this.unscrambleScore} / ${this.unscrambleTotal}</p>
          <div style="display: flex; gap: 1em; justify-content: center; margin-top: 1em;">
            <button class="control-btn" id="scramble-again-btn">Try Again (Different Sentences)</button>
          </div>
        </div>
      `, e.querySelector("#scramble-again-btn").onclick = () => {
			this.startUnscrambleActivity();
		}), this.unscrambleCompleted = !0;
	}
	renderMemoryGameUI() {
		let e = this.shadowRoot.querySelector(".memory-container");
		e.innerHTML = "";
		let t = document.createElement("div");
		t.classList.add("memory-game-header"), t.innerHTML = "\n      <h3>Memory Matching Game</h3>\n      <p>Match the word with its translation!</p>\n    ", e.appendChild(t);
		let n = document.createElement("div");
		n.classList.add("memory-grid"), this.memoryGameData.forEach((e, t) => {
			let r = document.createElement("div");
			r.classList.add("memory-card"), r.dataset.index = t, r.innerHTML = `
        <div class="memory-card-inner">
          <div class="memory-card-front">?</div>
          <div class="memory-card-back" lang="${e.lang}">${e.text}</div>
        </div>
      `, r.onclick = () => this.handleMemoryCardFlip(r, e), n.appendChild(r);
		}), e.appendChild(n);
		let r = document.createElement("div");
		r.classList.add("memory-game-actions");
		let i = document.createElement("button");
		i.textContent = "Play Again (New Words)", i.onclick = () => this.startMemoryGame(), r.appendChild(i), e.appendChild(r);
		let a = this.shadowRoot.querySelector(".finish-container");
		a.style.display = "block", a.querySelector(".finish-btn").onclick = () => this.showFinalForm();
	}
	handleMemoryCardFlip(e, t) {
		if (!(this.isCheckingMatch || e.classList.contains("flipped") || e.classList.contains("matched")) && (this._speak(t.text, t.lang), e.classList.add("flipped"), this.flippedCards.push({
			element: e,
			data: t
		}), this.flippedCards.length === 2)) {
			this.isCheckingMatch = !0;
			let [e, t] = this.flippedCards;
			e.data.id === t.data.id ? setTimeout(() => {
				e.element.classList.add("matched"), t.element.classList.add("matched"), this.matchedPairsCount++, this.flippedCards = [], this.isCheckingMatch = !1, this.updateProgress(), this.matchedPairsCount === this.memoryGameData.length / 2 && (this.memoryCompleted = !0);
			}, 600) : setTimeout(() => {
				e.element.classList.remove("flipped"), t.element.classList.remove("flipped"), this.flippedCards = [], this.isCheckingMatch = !1;
			}, 1200);
		}
	}
	showFinalForm() {
		let e = this.shadowRoot.querySelector(".sticky-bar");
		e && (e.style.display = "none");
		let t = this.shadowRoot.querySelector(".form-overlay");
		t.style.display = "flex";
		let n = this.shadowRoot.querySelector("#nickname"), r = this.shadowRoot.querySelector("#student-number");
		this.studentInfo.nickname ? (n.value = this.studentInfo.nickname, n.disabled = !0, r.value = this.studentInfo.number, r.disabled = !0, this.generateReport()) : (this.shadowRoot.querySelector(".initial-form").style.display = "block", this.shadowRoot.querySelector(".report-area").innerHTML = "");
	}
	generateReport() {
		let e = this.shadowRoot.querySelector("#nickname").value.trim(), t = this.shadowRoot.querySelector("#student-number").value.trim(), n = this.shadowRoot.querySelector("#homeroom").value.trim();
		if (!e || !t) {
			alert("Please enter both nickname and student number.");
			return;
		}
		this.studentInfo = {
			...this.studentInfo,
			nickname: e,
			number: t,
			homeroom: n
		};
		let r = this.getAttribute("story-title") || "Story Practice", i = (/* @__PURE__ */ new Date()).toLocaleString(), a = this.data.length > 0 ? this.score / this.data.length : 0, o = this.data.length > 0 ? this.recordedSentences.size / this.data.length : 0, s = this.unscrambleData.length || this.unscrambleTotal, c = s > 0 ? this.unscrambleScore / s : 0, l = this.memoryGameData.length / 2 || this.memoryTotal, u = l > 0 ? this.matchedPairsCount / l : 0, d = 85, f = 10;
		this.unscrambleData.length === 0 && (d += f, f = 0);
		let p = a * d + c * f + u * 5;
		d / 2 * a + d / 2 * o + c * f + u * 5;
		let m = this.shadowRoot.querySelector(".report-area"), h = p >= 80 ? "🏆" : p >= 50 ? "⭐" : "💪", g = p >= 80 ? "Excellent!" : p >= 50 ? "Good effort!" : "Keep practicing!";
		if (m.innerHTML = `
      <div class="rc-header">
          <div class="rc-icon">📄</div>
          <div class="rc-title">${r}</div>
          <div class="rc-subtitle">Report Card</div>
      </div>
      <div class="rc-student">
          <span class="rc-label">Student</span>
          <span class="rc-value">${e} <span class="rc-number">(${t}) ${n ? `- ${n}` : ""}</span></span>
      </div>
      <div class="rc-score-row">
          <div class="rc-score-circle">
              <div class="rc-score-val">${Math.round(p)}%</div>
              <div class="rc-score-pct">Overall</div>
          </div>
          <div class="rc-score-label">${h} ${g}</div>
      </div>
      <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${p}%"></div></div>
      <div class="rc-details">
          <div class="rc-detail-row"><span>Translation Score</span><span>${this.score} / ${this.data.length}</span></div>
          <div class="rc-detail-row"><span>Sentences Recorded</span><span>${this.recordedSentences.size} / ${this.data.length}</span></div>
          ${s > 0 ? `<div class="rc-detail-row"><span>Unscramble Score</span><span>${this.unscrambleScore} / ${s}</span></div>` : ""}
          <div class="rc-detail-row"><span>Matching Pairs</span><span>${this.matchedPairsCount} / ${l}</span></div>
          <div class="rc-detail-row"><span>Completed On</span><span>${i}</span></div>
      </div>
        ${this.submissionUrl ? `
      <div class="rc-submission-box">
          <p class="rc-submission-header">Submission (Optional)</p>
          <input type="text" id="report-teacher-code" class="rc-teacher-code-input" placeholder="Enter Submit Code" value="${this.studentInfo.teacherCode || ""}">
          <p class="rc-help-text">Enter the submit code to submit, or take a screenshot of this page.</p>
      </div>
      ` : "\n      <div class=\"rc-submission-box\" style=\"background: rgba(37, 99, 235, 0.05); border: 1px dashed var(--tj-card-border); text-align: center; padding: 12px; border-radius: 8px;\">\n          <p style=\"margin: 0; font-weight: 600; font-size: 0.9em; color: var(--tj-text-main);\">📸 Take a screenshot of this page to show your teacher. / แคปหน้าจอนี้ส่งให้ครูผู้สอน</p>\n      </div>\n      "}
      <div class="rc-actions" style="margin-top: 16px;">
          ${this.submissionUrl ? "<button class=\"rc-submit-btn\" id=\"submit-score-btn\">Submit Score Online</button>" : ""}
          <button class="rc-secondary-btn return-btn">Return to Story</button>
          <button class="reset-all-btn" style="background: var(--tj-error-color); color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-size: 0.85em; margin-top: 8px;">Reset All Progress</button>
      </div>
    `, this.recordedBlobs.size > 0) {
			let e = document.createElement("div");
			e.classList.add("recordings-section");
			let t = document.createElement("h4");
			t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"#2563eb\"><path d=\"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z\"/><path d=\"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z\"/></svg> Student Recordings", e.appendChild(t);
			let n = document.createElement("div");
			n.classList.add("recordings-list"), Array.from(this.recordedBlobs.keys()).sort((e, t) => e - t).forEach((e) => {
				let t = this.data[e], r = document.createElement("div");
				r.classList.add("recording-item");
				let i = document.createElement("button");
				i.classList.add("recording-play-btn"), i.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg>", i.title = "Play Recording", i.onclick = () => this.playRecordedAudio(e);
				let a = document.createElement("div");
				a.classList.add("recording-text"), a.textContent = t.original, r.appendChild(i), r.appendChild(a), n.appendChild(r);
			}), e.appendChild(n), m.appendChild(e);
		}
		this.shadowRoot.querySelector(".initial-form").style.display = "none", m.querySelector(".return-btn").onclick = () => {
			this.shadowRoot.querySelector(".form-overlay").style.display = "none";
			let e = this.shadowRoot.querySelector(".sticky-bar");
			e && (e.style.display = "flex");
		};
		let _ = m.querySelector("#submit-score-btn");
		_ && (_.onclick = () => this._submitScore()), m.querySelector(".reset-all-btn").onclick = () => {
			confirm("Are you sure you want to reset all progress? This will delete all your scores and recordings.") && (this.completedIndices.clear(), this.recordedBlobs.clear(), this.recordedSentences.clear(), this.unscrambleScore = 0, this.matchedPairsCount = 0, this.unscrambleCompleted = !1, this.memoryCompleted = !1, this.score = 0, this.answeredCount = 0, this.unscrambleUsedSentences?.clear(), this.shadowRoot.querySelector(".form-overlay").style.display = "none", this.shadowRoot.querySelector(".report-area").innerHTML = "", this.shadowRoot.querySelector(".initial-form").style.display = "block", this.loadData());
		};
	}
	async _submitScore() {
		let e = this.shadowRoot.getElementById("report-teacher-code"), t = e ? e.value.trim() : this.studentInfo.teacherCode;
		if (this.studentInfo.teacherCode = t, t !== this.code) {
			alert("Invalid or missing Submit Code. Please take a screenshot of this report and show it to your teacher instead.");
			return;
		}
		if (this.isSubmitting) return;
		let n = this.shadowRoot.getElementById("submit-score-btn"), r = n.textContent;
		this.isSubmitting = !0, n.textContent = "Submitting...", n.disabled = !0;
		let i = this.getAttribute("story-title") || "Story Practice", a = this.data.length > 0 ? this.score / this.data.length : 0, o = this.unscrambleData.length || this.unscrambleTotal, s = o > 0 ? this.unscrambleScore / o : 0, c = this.memoryGameData.length / 2 || this.memoryTotal, l = c > 0 ? this.matchedPairsCount / c : 0, u = 85, d = 10;
		this.unscrambleData.length === 0 && (u += d, d = 0);
		let f = a * u + s * d + l * 5, p = {
			nickname: this.studentInfo.nickname,
			homeroom: this.studentInfo.homeroom || "",
			studentId: this.studentInfo.number,
			quizName: "Read- " + i,
			score: Math.round(f),
			total: 100
		};
		try {
			await fetch(this.submissionUrl, {
				method: "POST",
				mode: "no-cors",
				body: JSON.stringify(p)
			}), alert("Score successfully submitted!"), n.textContent = "Submitted ✓", n.style.background = "var(--tj-text-muted)";
		} catch (e) {
			console.error("Error submitting score:", e), alert("There was an error submitting your score. Please try again."), n.textContent = r, n.disabled = !1, this.isSubmitting = !1;
		}
	}
	swapLanguages() {
		let e = this.getAttribute("lang-original") || "en", t = this.getAttribute("lang-translation") || "th";
		this.setAttribute("lang-original", t), this.setAttribute("lang-translation", e), this.isSwapped = !this.isSwapped, this.selectedVoiceName = null, this._updateVoiceList();
		let n = this.shadowRoot.querySelector(".lang-btn-original"), r = this.shadowRoot.querySelector(".lang-btn-translation");
		n && n.classList.toggle("active", !this.isSwapped), r && r.classList.toggle("active", this.isSwapped), this.data = this.data.map((e) => {
			let t = e.fullTranslation, n = e.original, r = e.translationWord, i = e.originalWord;
			return {
				...e,
				original: t,
				fullTranslation: n,
				originalWord: r,
				translationWord: i
			};
		}), this.displayAllLines();
	}
	render() {
		if (!this.data || this.data.length === 0) return;
		let e = this.getAttribute("lang-original") || "en", t = this.getAttribute("lang-translation") || "th", n = this.shadowRoot.querySelector(".lang-btn-original"), r = this.shadowRoot.querySelector(".lang-btn-translation");
		if (n && (n.textContent = this.getLanguageName(e)), r && (r.textContent = this.getLanguageName(t)), this.displayAllLines(), this.startUnscrambleActivity(!1), this.startMemoryGame(!1), this.updateProgress(), this._updateVoiceList(), !this._shouldShowAudioControls()) {
			let e = this.shadowRoot.querySelector("#autoplay-container");
			e && (e.style.display = "none");
		}
	}
};
customElements.get("tj-reader") || customElements.define("tj-reader", s), customElements.get("lbl-reader") || customElements.define("lbl-reader", class extends s {});
//#endregion
