import { n as e } from "./chunks/audio-utils-ChLf1XGP.js";
import { t } from "./chunks/tj-config-HLDr154l.js";
//#region src/tj-chapter-book/styles.css?inline
var n = "@import \"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap\";:host{--tj-bg-color:#f8fafc;--tj-text-color:#1e293b;--tj-card-bg:#fff;--tj-accent-color:#b45309;--tj-subtitle-color:#64748b;--tj-card-border:#e2e8f0;--tj-btn-bg:#f1f5f9;--tj-btn-text:#475569;--tj-btn-hover:#e2e8f0;--tj-btn-slow-text:#2563eb;--tj-quiz-bg:#f8fafc;--tj-shadow:#0000000d;--tj-input-bg:#fff;box-sizing:border-box;background-color:var(--tj-bg-color);color:var(--tj-text-color);overflow-anchor:auto;padding-bottom:2em;font-family:Lato,sans-serif;transition:background-color .3s,color .3s;display:block}:host(.dark-theme){--tj-bg-color:#0f172a;--tj-text-color:#e2e8f0;--tj-card-bg:#1e293b;--tj-card-border:#334155;--tj-accent-color:#fbbf24;--tj-subtitle-color:#94a3b8;--tj-btn-bg:#334155;--tj-btn-hover:#475569;--tj-btn-text:white;--tj-btn-slow-text:#93c5fd;--tj-quiz-bg:#334155;--tj-shadow:#00000080;--tj-input-bg:#1e293b}*,:before,:after{box-sizing:inherit}h1,h2,h3,p{margin:0;padding:0}h1,h2,h3{font-family:Lato,sans-serif}.book-header{flex-direction:column;align-items:center;gap:1em;max-width:56em;margin:0 auto;padding:1.5em 1em;display:flex}.theme-toggle,.print-toggle,.lang-swap{color:var(--tj-text-color);cursor:pointer;background:0 0;border:none;border-radius:50%;padding:.5em;transition:background-color .2s}.theme-toggle:hover,.print-toggle:hover,.lang-swap:hover{background-color:var(--tj-btn-hover)}.header-actions{flex-wrap:wrap;justify-content:flex-end;gap:.5em;width:100%;margin-bottom:.5em;display:flex}@media (width<=640px){.header-actions{justify-content:center;gap:.4em}.tj-speed-control{height:30px;padding:.25em .4em .25em .6em;font-size:.85em}.tj-speed-control:after{right:.5em}.tj-speed-select{padding-right:.9em}}.book-title{color:var(--tj-accent-color);margin-bottom:.5em;font-size:3em;line-height:1}.book-subtitle{color:var(--tj-subtitle-color);font-size:1.25em}@media (width<=640px){.book-title{font-size:2em}.chapters-container{padding:1em 0}.chapter-card,.report-card-section{border-radius:12px;padding:.5rem;box-shadow:0 1px 4px #0000000f}}.chapters-container{margin:0 1rem;padding:.5rem .25rem}.chapters-container>*+*{margin-top:2rem}.chapter-card{background-color:var(--tj-card-bg);border:none;border-radius:16px;margin-bottom:2rem;padding:.75rem;transition:box-shadow .2s,background-color .3s;box-shadow:0 2px 8px #00000012,0 8px 24px #0000000a}.chapter-title{color:var(--tj-accent-color);margin-bottom:1rem;font-size:1.5em;line-height:1.3}.audio-controls{flex-wrap:wrap;justify-content:center;align-items:center;gap:.75em;margin-bottom:1em;display:flex}.audio-btn{cursor:pointer;touch-action:manipulation;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;border-style:solid;border-width:1px;border-radius:9999px;align-items:center;gap:.5em;padding:.45em .9em;font-size:.875em;font-weight:600;transition:all .2s;display:flex}.audio-btn:active{transform:scale(.96)}.audio-btn-normal{background-color:var(--tj-btn-bg);color:var(--tj-btn-text);border-color:var(--tj-card-border)}.audio-btn-normal:hover{background-color:var(--tj-btn-hover)}.audio-btn-slow{background-color:var(--tj-btn-bg);color:var(--tj-btn-slow-text);border-color:var(--tj-card-border)}.audio-btn-slow:hover{background-color:var(--tj-btn-hover)}.audio-btn-cancel{background-color:var(--tj-btn-bg);color:var(--tj-btn-text);border-color:var(--tj-card-border)}.audio-btn-cancel:hover{background-color:var(--tj-btn-hover)}.chapter-text{color:var(--tj-text-color);margin-bottom:1.5em;font-size:1.125em;line-height:1.625}.chapter-text p{margin-bottom:1.25em}.translation-details{margin-bottom:2em}.translation-summary{cursor:pointer;background-color:var(--tj-btn-bg);color:var(--tj-accent-color);border:none;border-radius:10px;justify-content:space-between;align-items:center;padding:.75em 1em;font-weight:500;list-style:none;transition:background-color .2s;display:flex}.translation-summary:hover{background-color:var(--tj-btn-hover)}.translation-content{color:var(--tj-subtitle-color);margin-top:.75em;padding-left:.75em;padding-right:.75em;font-size:1em;font-style:italic}.quiz-container{background-color:#0000;border:none;border-radius:0;margin-top:1.25rem;margin-bottom:.5rem;padding:0}.quiz-title{color:var(--tj-accent-color);align-items:center;gap:.5em;margin-bottom:1rem;font-size:1.25em;font-weight:700;display:flex}.question-block{background:var(--tj-btn-bg);border-radius:10px;margin-bottom:.5rem;padding:.75rem}.question-text{margin-bottom:.5em;font-weight:600}.option-label{margin-bottom:.25em;display:block}input[type=radio]{accent-color:var(--tj-accent-color);margin-right:8px;transform:scale(1.2)}.feedback{margin-top:8px;font-size:.9em;transition:all .3s}.check-btn{background-color:var(--tj-accent-color);color:#fff;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;border:none;border-radius:8px;margin-top:.75em;padding:.5em 1.25em;font-weight:700;transition:all .2s}.check-btn:hover{opacity:.88;transform:translateY(-1px)}.check-btn:active{opacity:1;transform:scale(.97)}.lang-selector-container{background:var(--tj-card-bg);border:1px solid var(--tj-card-border);text-align:center;box-sizing:border-box;border-radius:1.2em;flex-direction:column;justify-content:center;align-items:center;margin:1rem 0 1.25rem;padding:1.25rem 1.5rem;display:flex;box-shadow:0 2px 10px #0000000a}.lang-selector-label{color:var(--tj-text-color);letter-spacing:-.01em;margin-bottom:.85em;font-size:1.15rem;font-weight:700}.lang-selector-buttons{background:var(--tj-bg-alt,#f1f5f9);border:1px solid var(--tj-card-border);border-radius:9999px;flex-wrap:wrap;justify-content:center;align-items:center;gap:.35rem;padding:.35rem;display:inline-flex}.lang-btn{color:var(--tj-subtitle-color);cursor:pointer;background:0 0;border:1.5px solid #0000;border-radius:9999px;padding:.6em 1.5em;font-size:.95em;font-weight:600;transition:all .25s cubic-bezier(.4,0,.2,1)}.lang-btn:hover:not(.active){color:var(--tj-accent-color);background:#2563eb14;border-color:#0000;transform:none}.lang-btn.active{background:var(--tj-accent-color);border-color:var(--tj-accent-color);color:#fff;box-shadow:0 2px 8px #2563eb47}.quiz-container.quiz-hidden-checked,.translation-details.translation-hidden-checked{display:none!important}.quiz-lock-message.visible{animation:.3s ease-in-out fadeIn;display:block}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}details>summary::-webkit-details-marker{display:none}details[open] summary~*{animation:.3s ease-in-out sweep}@keyframes sweep{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.chevron{align-items:center;transition:transform .3s;display:flex}details[open] .chevron{transform:rotate(180deg)}.playing{box-shadow:0 0 0 2px #60a5fa, 0 0 0 3px var(--tj-bg-color)}.feedback-correct{color:#4ade80;font-weight:700}.feedback-wrong{color:#f87171;font-weight:700}.feedback-neutral{color:#9ca3af}.book-footer{text-align:left;max-width:48em;color:var(--tj-subtitle-color);margin:0 auto;padding:1rem;font-size:.875em}.book-footer p{margin:.5em 0;line-height:1.5}.report-card-section{background-color:var(--tj-card-bg);border:1px solid var(--tj-card-border);box-shadow:0 4px 6px -1px var(--tj-shadow);border-radius:12px;flex-direction:column;gap:1.5em;margin:0 1rem;padding:2em;display:flex}.report-tally{color:var(--tj-accent-color);text-align:center;font-size:1.25em;font-weight:700}.student-inputs{grid-template-columns:1fr 1fr;gap:1em;display:grid}@media (width<=640px){.student-inputs{grid-template-columns:1fr}}.student-inputs input{border:1px solid var(--tj-card-border);background:var(--tj-input-bg);color:var(--tj-text-color);border-radius:6px;padding:8px 12px;font-size:.9em}.student-inputs input:disabled{opacity:.7;background:var(--tj-btn-bg);cursor:not-allowed}.report-actions{gap:1em;display:flex}.generate-btn{background-color:var(--tj-accent-color);color:#fff;cursor:pointer;border:none;border-radius:8px;flex:3;padding:.75em;font-size:1em;font-weight:700;transition:opacity .2s}.reset-btn{color:#fff;cursor:pointer;background-color:#ef4444;border:none;border-radius:8px;flex:1;padding:.75em;font-size:1em;font-weight:700;transition:opacity .2s}.generate-btn:hover,.reset-btn:hover{opacity:.9}.report-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:2000;background:#0f172acc;justify-content:center;align-items:center;padding:1.5em;display:none;position:fixed;inset:0}.report-overlay.visible{display:flex}.report-modal{background:var(--tj-card-bg);border:1px solid var(--tj-card-border);border-radius:1.5em;flex-direction:column;width:100%;max-width:550px;max-height:90vh;display:flex;position:relative;overflow:auto;box-shadow:0 25px 50px -12px #00000040}.rc-header{text-align:center;margin-bottom:24px}.rc-icon{margin-bottom:8px;font-size:2.5em}.rc-title{color:var(--tj-accent-color);margin-bottom:4px;font-size:1.4em;font-weight:700}.rc-subtitle{color:var(--tj-subtitle-color);text-transform:uppercase;letter-spacing:.05em;font-size:.9em;font-weight:600}.rc-student{background:var(--tj-card-bg);border:1px solid var(--tj-card-border);border-radius:12px;justify-content:space-between;align-items:center;margin-bottom:24px;padding:16px;display:flex}.rc-label{color:var(--tj-subtitle-color);font-size:.9em;font-weight:600}.rc-value{color:var(--tj-text-color);text-align:right;font-weight:700}.rc-number{color:var(--tj-subtitle-color);font-size:.9em;font-weight:500;display:block}.rc-score-row{align-items:center;gap:20px;margin-bottom:16px;display:flex}.rc-score-circle{background:var(--tj-btn-bg);width:80px;height:80px;color:var(--tj-accent-color);border:3px solid var(--tj-accent-color);border-radius:50%;flex-direction:column;flex-shrink:0;justify-content:center;align-items:center;display:flex}.rc-score-val{font-size:1.5em;font-weight:800;line-height:1}.rc-score-pct{margin-top:2px;font-size:.85em;font-weight:700}.rc-score-label{color:var(--tj-text-color);font-size:1.1em;font-weight:700}.rc-bar-track{background:var(--tj-btn-bg);border-radius:4px;height:8px;overflow:hidden}.rc-bar-fill{background:var(--tj-accent-color);border-radius:4px;height:100%}.rc-details{background:var(--tj-btn-bg);border-radius:12px;margin-bottom:24px;padding:16px;font-size:.9em}.rc-detail-row{justify-content:space-between;margin-bottom:8px;display:flex}.rc-detail-row:last-child{margin-bottom:0}.rc-detail-row span:first-child{color:var(--tj-subtitle-color);font-weight:500}.rc-detail-row span:last-child{color:var(--tj-text-color);font-weight:600}.rc-close-btn:hover{background:var(--tj-btn-bg)}.rc-submission-box{background:var(--tj-btn-bg);border:1px solid var(--tj-card-border);text-align:left;border-radius:12px;margin-top:20px;padding:20px;box-shadow:inset 0 2px 4px #00000005}.rc-submission-header{color:var(--tj-subtitle-color);text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px;font-size:.85em;font-weight:700}.rc-teacher-code-input{box-sizing:border-box;border:2px solid var(--tj-card-border);background:var(--tj-card-bg);width:100%;color:var(--tj-text-color);border-radius:10px;outline:none;margin-bottom:8px;padding:12px 16px;font-family:inherit;font-size:1em;transition:all .2s}.rc-teacher-code-input:focus{border-color:var(--tj-accent-color);box-shadow:0 0 0 4px #2563eb1a}.rc-help-text{color:var(--tj-subtitle-color);margin:4px 0 0;font-size:.85em;line-height:1.4}.rc-submit-btn{background:var(--tj-accent-color);color:#fff;cursor:pointer;border:none;border-radius:12px;width:100%;margin-bottom:8px;padding:16px;font-size:1.1em;font-weight:700;transition:all .2s;box-shadow:0 4px 6px #2563eb33}.rc-submit-btn:hover:not(:disabled){opacity:.9;transform:translateY(-1px);box-shadow:0 6px 12px #2563eb4d}.rc-submit-btn:disabled{opacity:.6;cursor:default;background:var(--tj-subtitle-color);box-shadow:none}.rc-secondary-btn{background:var(--tj-btn-bg);width:100%;color:var(--tj-text-color);border:1.5px solid var(--tj-card-border);cursor:pointer;border-radius:12px;padding:14px;font-size:1em;font-weight:600;transition:all .2s}.rc-secondary-btn:hover{background:var(--tj-btn-hover);border-color:var(--tj-subtitle-color)}@media print{:host{color:#000!important;background:#fff!important;padding:0!important}.book-header{page-break-after:avoid;padding-top:.5em!important;padding-bottom:.5em!important}.header-actions,.sticky-report,.book-footer,.audio-controls{display:none!important}.book-title{color:#000!important;margin-bottom:.25em!important;font-size:1.5em!important}.book-subtitle{color:#666!important;margin-bottom:.5em!important;font-size:.9em!important}.chapters-container{max-width:100%!important;margin:0!important;padding:0!important}.chapters-container>*+*{margin-top:.75em!important}.chapter-card{page-break-inside:avoid;box-shadow:none!important;background:#fff!important;border:none!important;border-radius:0!important;margin-bottom:.35em!important;padding:.25em 0!important;display:block!important}.chapter-title{color:#000!important;margin-bottom:.2em!important;font-size:.95em!important;font-weight:700!important;line-height:1.15!important}.chapter-text{color:#000!important;margin-bottom:.4em!important;font-size:.75em!important;line-height:1.3!important}.chapter-text p{margin-bottom:.3em!important}.translation-details{display:none!important}.quiz-container{background:#fff!important;border:none!important;margin-top:.2em!important;padding:0!important}.quiz-title{display:none!important}.question-block{break-inside:avoid;background:#fff!important;border:none!important;margin-bottom:.5em!important;padding:0!important}.question-text{color:#000!important;margin-bottom:.1em!important;font-size:.7em!important;font-weight:600!important;line-height:1.2!important}.option-label,input[type=radio],.check-btn,.feedback{display:none!important}@page{size:A4;margin:1cm}}.word{cursor:pointer;border-radius:4px;padding:0 2px;transition:background-color .2s,color .2s;display:inline-block}.word:hover{background-color:var(--tj-btn-hover);color:var(--tj-accent-color)}#voice-btn{background:var(--tj-btn-bg);border:1px solid var(--tj-card-border);color:var(--tj-btn-text);cursor:pointer;border-radius:6px;justify-content:center;align-items:center;padding:6px;transition:background-color .2s;display:flex}#voice-btn:hover{background-color:var(--tj-btn-hover)}.voice-overlay{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1000;background:#0f172ab3;justify-content:center;align-items:center;padding:1em;display:none;position:fixed;inset:0}.voice-overlay.visible{display:flex}.voice-card{background:var(--tj-card-bg);border:1px solid var(--tj-card-border);border-radius:1.2em;flex-direction:column;width:100%;max-width:400px;max-height:80vh;display:flex;overflow:hidden;box-shadow:0 20px 25px -5px #0003}.voice-card-header{border-bottom:1px solid var(--tj-card-border);justify-content:space-between;align-items:center;padding:1.25em 1.5em;display:flex}.voice-card-header h3{color:var(--tj-accent-color);margin:0;font-size:1.25em}.close-voice-btn{color:var(--tj-text-color);cursor:pointer;background:0 0;border:none;padding:.25em;font-size:1.5em;line-height:1}.voice-list{flex-direction:column;gap:.5em;padding:1em;display:flex;overflow-y:auto}.voice-option-btn{border:1px solid var(--tj-card-border);background:var(--tj-btn-bg);color:var(--tj-btn-text);cursor:pointer;text-align:left;border-radius:.75em;justify-content:space-between;align-items:center;padding:.75em 1em;font-size:.95em;transition:all .2s;display:flex}.voice-option-btn:hover{background:var(--tj-btn-hover)}.voice-option-btn.active{background:var(--tj-accent-color);border-color:var(--tj-accent-color);color:#fff;font-weight:600}.voice-option-btn .badge{color:#92400e;text-transform:uppercase;background:#fbbf24;border-radius:9999px;padding:2px 8px;font-size:.75em;font-weight:700}@media (width<=640px){#voice-btn{padding:4px}}.browser-prompt-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:10000;color:#fff;text-align:center;background:#0f172ae6;justify-content:center;align-items:center;padding:2em;display:none;position:fixed;inset:0}.browser-prompt-card{color:#1e293b;background:#fff;border-radius:1.5em;max-width:400px;padding:2.5em;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{color:#b45309;margin-bottom:.5em;font-size:1.5em}.browser-prompt-card p{margin-bottom:1.5em;line-height:1.5}.browser-action-btn{color:#fff;cursor:pointer;background-color:#ca8a04;border-radius:9999px;padding:.75em 1.5em;font-weight:700;text-decoration:none;transition:background-color .2s;display:inline-block}.browser-action-btn:hover{background-color:#a16207}@media print{html.tj-print-scope body *{visibility:hidden!important}html.tj-print-scope tj-chapter-book[data-tj-print-target=true],html.tj-print-scope tj-chapter-book[data-tj-print-target=true] *{visibility:visible!important}html.tj-print-scope tj-chapter-book[data-tj-print-target=true]{width:100%!important;position:absolute!important;top:0!important;left:0!important}}.quiz-lock-message{color:var(--tj-subtitle-color);margin-top:.75em;padding:.5em 0;font-size:.8em}.chapter-card .quiz-container{margin-top:1.5em}.tj-toast-container{z-index:9999;pointer-events:none;flex-direction:column-reverse;align-items:center;gap:.6em;width:calc(100% - 2em);max-width:420px;display:flex;position:fixed;bottom:1.5em;left:50%;transform:translate(-50%)}.tj-toast{pointer-events:auto;box-sizing:border-box;border-radius:12px;align-items:center;gap:.75em;width:100%;padding:.85em 1.2em;font-size:.92em;font-weight:500;line-height:1.4;animation:.3s cubic-bezier(.34,1.56,.64,1) forwards tj-toast-in;display:flex;box-shadow:0 4px 24px #0000002e}.tj-toast.hiding{animation:.25s forwards tj-toast-out}.tj-toast-icon{flex-shrink:0;font-size:1.2em}.tj-toast.success{color:#f0fdf4;background:#166534}.tj-toast.error{color:#fef2f2;background:#991b1b}.tj-toast.warning{color:#fffbeb;background:#92400e}.tj-toast.info{color:#eff6ff;background:#1e3a8a}@keyframes tj-toast-in{0%{opacity:0;transform:translateY(16px)scale(.96)}to{opacity:1;transform:translateY(0)scale(1)}}@keyframes tj-toast-out{0%{opacity:1;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(8px)scale(.96)}}.tj-confirm-overlay{-webkit-backdrop-filter:blur(6px);z-index:9998;background:#0f172ab3;justify-content:center;align-items:center;padding:1.5em;animation:.2s fadeIn;display:flex;position:fixed;inset:0}.tj-confirm-card{background:var(--tj-card-bg);color:var(--tj-text-color);text-align:center;border:1px solid var(--tj-card-border);border-radius:20px;width:100%;max-width:360px;padding:2em 1.75em 1.5em;box-shadow:0 20px 40px #00000040}.tj-confirm-icon{margin-bottom:.4em;font-size:2.5em}.tj-confirm-title{color:var(--tj-text-color);margin-bottom:.5em;font-size:1.1em;font-weight:700}.tj-confirm-message{color:var(--tj-subtitle-color);margin-bottom:1.5em;font-size:.9em;line-height:1.5}.tj-confirm-actions{gap:.75em;display:flex}.tj-confirm-cancel{border:1.5px solid var(--tj-card-border);background:var(--tj-btn-bg);color:var(--tj-text-color);cursor:pointer;border-radius:10px;flex:1;padding:.75em;font-family:inherit;font-size:.95em;font-weight:600;transition:background .2s}.tj-confirm-cancel:hover{background:var(--tj-btn-hover)}.tj-confirm-ok{color:#fff;cursor:pointer;background:#ef4444;border:none;border-radius:10px;flex:1;padding:.75em;font-family:inherit;font-size:.95em;font-weight:700;transition:background .2s}.tj-confirm-ok:hover{background:#dc2626}.tj-toast.dictionary-lookup{background:var(--tj-card-bg);max-width:320px;color:var(--tj-text-color);border:1px solid var(--tj-card-border);flex-direction:column;align-items:stretch;padding:0;overflow:hidden}.tj-toast-content{flex-direction:column;display:flex}.tj-toast-header{background:var(--tj-btn-bg);border-bottom:1px solid var(--tj-card-border);align-items:center;gap:.75em;padding:.75em 1em;display:flex}.tj-toast-word{color:var(--tj-accent-color);font-size:1.1em;font-weight:700}.tj-toast-body{padding:1em}.tj-toast-action-btn{background:var(--tj-accent-color);color:#fff;cursor:pointer;border:none;border-radius:8px;width:100%;padding:.6em;font-weight:600;transition:opacity .2s}.tj-toast-action-btn:hover{opacity:.9}.tj-toast-action-btn:disabled{opacity:.6;cursor:wait}.tj-toast-close{color:var(--tj-subtitle-color);cursor:pointer;z-index:10;background:0 0;border:none;padding:4px;font-size:1.1em;line-height:1;position:absolute;top:.5em;right:.5em}.tj-definition-container,.tj-translation-container{flex-direction:column;gap:.5em;animation:.3s fadeIn;display:flex}.tj-pos-badge{background:var(--tj-btn-bg);color:var(--tj-accent-color);text-transform:uppercase;letter-spacing:.05em;border-radius:9999px;align-self:flex-start;padding:2px 8px;font-size:.75em;font-weight:700}.tj-definition-text{margin:0;font-size:.9em;line-height:1.5}.tj-toast-error{color:#ef4444;font-size:.85em;font-weight:500}.tj-google-btn{color:var(--tj-accent-color);border:1px solid var(--tj-card-border);background:var(--tj-btn-bg);text-align:center;border-radius:4px;margin-top:.5em;padding:4px 8px;font-size:.8em;font-weight:600;text-decoration:none;transition:all .2s;display:inline-block}.tj-google-btn:hover{background:var(--tj-btn-hover);border-color:var(--tj-accent-color)}#audio-controls-placeholder{align-items:center;gap:.5em;display:inline-flex}.tj-speed-control{background:var(--tj-btn-bg);border:1px solid var(--tj-card-border);height:32px;color:var(--tj-btn-text);cursor:pointer;border-radius:6px;align-items:center;gap:.25em;padding:.25em .5em .25em .75em;transition:background-color .2s,color .2s,border-color .2s;display:inline-flex;position:relative}.tj-speed-control:hover{background:var(--tj-btn-hover);border-color:var(--tj-accent-color);color:var(--tj-accent-color)}.tj-speed-icon{opacity:.85;flex-shrink:0}.tj-speed-select{color:inherit;cursor:pointer;appearance:none;background:0 0;border:none;outline:none;padding:0 1.2em 0 .2em;font-family:inherit;font-size:.9em;font-weight:700}.tj-speed-control:after{content:\"\";pointer-events:none;border-top:5px solid;border-left:4px solid #0000;border-right:4px solid #0000;position:absolute;top:50%;right:.8em;transform:translateY(-50%)}.audio-btn-play{background-color:var(--tj-btn-bg);color:var(--tj-btn-slow-text);border-color:var(--tj-card-border)}.audio-btn-play:hover{background-color:var(--tj-btn-hover)}", r = "<header class=\"book-header\">\n    <div class=\"header-actions\">\n        <div id=\"audio-controls-placeholder\"></div>\n        <button id=\"print-toggle\" class=\"print-toggle\" aria-label=\"Print\" title=\"Print friendly version\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect></svg>\n        </button>\n        <button id=\"theme-toggle\" class=\"theme-toggle\" aria-label=\"Toggle theme\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>\n        </button>\n    </div>\n    <h1 class=\"book-title\" id=\"book-title\"></h1>\n    <p class=\"book-subtitle\" id=\"book-subtitle\"></p>\n    <div id=\"lang-selector-placeholder\"></div>\n</header>\n\n<div class=\"chapters-container\" id=\"chapters-container\" translate=\"no\"></div>\n\n\n<div class=\"report-card-section\">\n    <div class=\"report-tally\">\n        Score: <span id=\"score-tally\">0</span> / <span id=\"total-tally\">0</span>\n    </div>\n    <div class=\"student-inputs\">\n        <input type=\"text\" id=\"student-name\" placeholder=\"Jake\" required>\n        <input type=\"text\" id=\"student-id\" placeholder=\"01\" required>\n        <input type=\"text\" id=\"student-homeroom\" placeholder=\"1/1\" required>\n    </div>\n    <div class=\"report-actions\">\n        <button class=\"generate-btn\" id=\"generate-report\">Generate Report Card</button>\n        <button class=\"reset-btn\" id=\"reset-book\">Reset Quiz</button>\n    </div>\n</div>\n\n<div class=\"report-overlay\" id=\"report-overlay\">\n    <div class=\"report-modal\" style=\"padding: 24px; border-radius: 16px;\">\n        <div id=\"report-content\" class=\"report-area\"></div>\n    </div>\n</div>\n<footer class=\"book-footer\">\n    <p>Note: Please let me know if you see any errors or have any suggestions. I'm always looking to improve these materials.</p>\n</footer>\n\n<div class=\"voice-overlay\" id=\"voice-overlay\">\n    <div class=\"voice-card\">\n        <div class=\"voice-card-header\">\n            <h3>Choose Voice</h3>\n            <button class=\"close-voice-btn\">×</button>\n        </div>\n        <div class=\"voice-list\"></div>\n    </div>\n</div>\n\n<div class=\"browser-prompt-overlay\" id=\"browser-prompt-overlay\">\n    <div class=\"browser-prompt-card\">\n        <h2>Browser Support Needed</h2>\n        <p>This application works best in standard browsers like <strong>Chrome</strong> or <strong>Safari</strong> to enable high-quality text-to-speech features.</p>\n        <p>กรุณาเปิดใน Chrome หรือ Safari เพื่อใช้งานฟีเจอร์เสียงแบบเต็มรูปแบบ</p>\n        <a class=\"browser-action-btn\">Open in Browser</a>\n        <button class=\"close-prompt\" style=\"display: block; width: 100%; margin-top: 1.5em; border: none; background: transparent; text-decoration: underline; cursor: pointer; color: #64748b; font-weight: 600; font-size: 0.95em;\" onclick=\"this.closest('.browser-prompt-overlay').style.display='none'\">Continue anyway / ใช้งานต่อ</button>\n    </div>\n</div>\n", i = class i extends HTMLElement {
	get code() {
		return t(this).teacherCode;
	}
	set code(e) {
		e == null ? this.removeAttribute("code") : this.setAttribute("code", e);
	}
	getLanguageName(e) {
		if (!e) return "Unknown";
		try {
			return new Intl.DisplayNames(["en"], { type: "language" }).of(e.split(/[-_]/)[0]);
		} catch {
			return e;
		}
	}
	static chapterHasTranslation(e) {
		return !e || typeof e.translation != "string" ? !1 : e.translation.trim().length > 0;
	}
	static bookHasAnyTranslations(e) {
		return !e || !Array.isArray(e.chapters) ? !1 : e.chapters.some((e) => i.chapterHasTranslation(e));
	}
	static ensureGlobalPrintScoping() {
		i._globalPrintScopingReady || (i._globalPrintScopingReady = !0, window.addEventListener("beforeprint", () => {
			let e = document.querySelector("tj-chapter-book[data-tj-print-target=\"true\"]");
			e || (e = document.querySelector("tj-chapter-book[print-scope=\"component\"]"), e && e.setAttribute("data-tj-print-target", "true")), e && document.documentElement.classList.add("tj-print-scope");
		}), window.addEventListener("afterprint", () => {
			document.documentElement.classList.remove("tj-print-scope"), document.querySelectorAll("tj-chapter-book[data-tj-print-target=\"true\"]").forEach((e) => {
				e.removeAttribute("data-tj-print-target");
			});
		}));
	}
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this.synth = window.speechSynthesis, this.currentUtterance = null, this.currentButtonId = null, this.isTextSwapped = !1, this.studentInfo = {
			nickname: "",
			number: "",
			homeroom: "",
			teacherCode: ""
		}, this.submissionUrl = "", this.isSubmitting = !1, this.ttsState = {
			status: "idle",
			activeButtonId: null,
			activeElementId: null,
			activeRate: 1,
			activeLang: null
		}, this._ttsActionSeq = 0, this._ttsUtteranceSeq = 0, this.language = "fr-FR", this.selectedVoiceName = null, this.totalScore = 0, this.totalQuestions = 0, this.absoluteTotalQuestions = 0, this.wrongQuestions = [], this.lockoutTimers = /* @__PURE__ */ new Map();
		let e = parseFloat(localStorage.getItem("tj-chapter-book-speed"));
		this.playbackSpeed = isNaN(e) ? .7 : e;
	}
	connectedCallback() {
		let e = t(this);
		this.submissionUrl = e.submissionUrl, this.synth && this.synth.onvoiceschanged !== void 0 && (this.synth.onvoiceschanged = () => this._updateVoiceList()), this._initVisibilityObserver();
		let n = e.dataUrl;
		requestAnimationFrame(() => {
			this.config ? typeof this.config == "object" ? this.render(this.config) : this._parseAndRender(String(this.config)) : this.hasAttribute("config") ? this._parseAndRender(this.getAttribute("config")) : n ? this.loadData(n) : this.shadowRoot.querySelector("script[type=\"application/json\"]") ? this._parseAndRender(this.shadowRoot.querySelector("script[type=\"application/json\"]").textContent) : this._parseAndRender(this.textContent);
		});
	}
	_parseAndRender(e) {
		try {
			if (!e || !e.trim()) return;
			let t = JSON.parse(e.trim());
			this.render(t);
		} catch (e) {
			console.error("Error parsing inline JSON data", e), this.shadowRoot.innerHTML = "<p style=\"color: red;\">Error loading book data: Invalid JSON.</p>";
		}
	}
	async loadData(e) {
		try {
			let t = await (await fetch(e)).json();
			this.render(t);
		} catch (e) {
			console.error("Error loading chapter data:", e), this.shadowRoot.innerHTML = "<p style=\"color: red;\">Error loading book data.</p>";
		}
	}
	_getBestVoice(t) {
		return e(window.speechSynthesis, t);
	}
	_showVoiceOverlay() {
		let e = this.shadowRoot.querySelector(".voice-overlay");
		e && (e.classList.add("visible"), document.body.style.overflow = "hidden", this._updateVoiceList());
	}
	_hideVoiceOverlay() {
		let e = this.shadowRoot.querySelector(".voice-overlay");
		e && (e.classList.remove("visible"), document.body.style.overflow = "");
	}
	_updateVoiceList() {
		if (!this.synth) return;
		let e = this.synth.getVoices(), t = this.shadowRoot.querySelector(".voice-list"), n = this.shadowRoot.querySelector("#voice-btn");
		if (!t || !n || e.length === 0) return;
		let r = this.language, i = r.split(/[-_]/)[0].toLowerCase(), a = e.filter((e) => e.lang.split(/[-_]/)[0].toLowerCase() === i), o = this._getBestVoice(r);
		!this.selectedVoiceName && o && (this.selectedVoiceName = o.name), t.innerHTML = "", a.sort((e, t) => e.name.localeCompare(t.name)), a.forEach((e) => {
			let n = document.createElement("button");
			n.classList.add("voice-option-btn"), this.selectedVoiceName === e.name && n.classList.add("active");
			let r = `<span>${e.name}</span>`;
			o && e.name === o.name && (r += "<span class=\"badge\">Best</span>"), n.innerHTML = r, n.onclick = () => {
				this.selectedVoiceName = e.name, this.cancelTTS(), this._updateVoiceList(), this._hideVoiceOverlay();
			}, t.appendChild(n);
		});
	}
	_initVisibilityObserver() {
		this._visibilityObserver = new IntersectionObserver((e) => {
			e.forEach((e) => {
				let t = e.target, n = t.id, r = t.querySelector(`#quiz-${n}`);
				!e.isIntersecting && e.boundingClientRect.bottom < 0 && r && r.dataset.checked === "true" && !r.classList.contains("quiz-hidden-checked") && this._hideCheckedQuiz(t, r);
			});
		}, {
			threshold: 0,
			rootMargin: "0px"
		});
	}
	_hideCheckedQuiz(e, t) {
		let n = e.querySelector(".translation-details"), r = e.querySelector(".quiz-lock-message");
		t.offsetHeight, t.classList.add("quiz-hidden-checked"), n && (n.classList.add("translation-hidden-checked"), n.open = !1), r && (r.innerHTML = "Results Hidden"), console.log(`Hidden checked quiz for chapter ${e.id}`);
	}
	render(e) {
		if (!e) return;
		this.hasAnyTranslations = i.bookHasAnyTranslations(e), this.absoluteTotalQuestions = 0, e.chapters && e.chapters.forEach((e) => {
			e.quiz && (this.absoluteTotalQuestions += e.quiz.length);
		}), e.language ? (this.language = e.language, this.originalLanguage = e.language) : this.originalLanguage = this.language, e.translationLanguage ? (this.translationLanguage = e.translationLanguage, this.originalTranslationLanguage = e.translationLanguage) : (this.translationLanguage = this.language.startsWith("en") ? "th-TH" : "en-US", this.originalTranslationLanguage = this.translationLanguage), this.shadowRoot.innerHTML = `
            <style>${n}</style>
            ${r}
        `;
		let t = this.shadowRoot.getElementById("book-title");
		t && (t.textContent = e.title);
		let a = this.shadowRoot.getElementById("book-subtitle");
		a && (a.textContent = e.subtitle);
		let o = this.shadowRoot.getElementById("audio-controls-placeholder");
		o && this.shouldShowAudioControls() && (o.innerHTML = "\n                <div class=\"tj-speed-control\" title=\"Playback Speed\">\n                    <svg class=\"tj-speed-icon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\">\n                        <path d=\"M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 12 6a7.89 7.89 0 0 1 6 2.73l1.42-1.42A9.91 9.91 0 0 0 12 4a10 10 0 0 0-7.68 16.4h15.36A10 10 0 0 0 20.38 8.57zM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3-6h-2v4h2V6z\"/>\n                    </svg>\n                    <select id=\"speed-select\" class=\"tj-speed-select\">\n                        <option value=\"0.5\">0.5x</option>\n                        <option value=\"0.6\">0.6x</option>\n                        <option value=\"0.7\">0.7x</option>\n                        <option value=\"0.8\">0.8x</option>\n                        <option value=\"0.9\">0.9x</option>\n                        <option value=\"1.0\">1.0x</option>\n                        <option value=\"1.2\">1.2x</option>\n                    </select>\n                </div>\n                <button id=\"voice-btn\" title=\"Choose Voice\">\n                    <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"currentColor\">\n                        <path d=\"M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z\"/>\n                    </svg>\n                </button>\n            ");
		let s = this.shadowRoot.getElementById("lang-selector-placeholder");
		s && this.hasAnyTranslations && (s.innerHTML = `
                <div class="lang-selector-container">
                    <p class="lang-selector-label">I want to read in:</p>
                    <div class="lang-selector-buttons">
                        <button class="lang-btn ${this.isTextSwapped ? "" : "active"}" data-action="set-lang" data-swap="false">${this.getLanguageName(this.originalLanguage)}</button>
                        <button class="lang-btn ${this.isTextSwapped ? "active" : ""}" data-action="set-lang" data-swap="true">${this.getLanguageName(this.originalTranslationLanguage)}</button>
                    </div>
                </div>
            `);
		let c = this.shadowRoot.getElementById("chapters-container");
		c && (c.innerHTML = e.chapters ? e.chapters.map((e, t) => this.renderChapter(e, t)).join("") : "<p>No chapters found.</p>");
		let l = this.shadowRoot.getElementById("total-tally");
		l && (l.textContent = this.absoluteTotalQuestions), this.attachEventListeners(), this._updateVoiceList(), this.checkBrowserSupport(), this.shadowRoot.querySelectorAll(".chapter-card").forEach((e) => {
			this._visibilityObserver && this._visibilityObserver.observe(e);
		});
	}
	_getAndroidIntentLink() {
		return /android/i.test(navigator.userAgent) ? `intent://${new URL(window.location.href).toString().replace(/^https?:\/\//, "")}#Intent;scheme=${window.location.protocol.replace(":", "")};package=com.android.chrome;end` : "";
	}
	checkBrowserSupport() {
		if (!this.shouldShowAudioControls()) {
			let e = this.shadowRoot.querySelector(".browser-prompt-overlay");
			if (e) {
				e.style.display = "flex";
				let t = this._getAndroidIntentLink(), n = this.shadowRoot.querySelector(".browser-action-btn");
				t ? (n.href = t, n.textContent = "Open in Chrome") : (n.innerHTML = "Use Safari / Chrome<br><span style=\"font-size: 0.8em; font-weight: normal;\">กรุณาเปิดใน Safari หรือ Chrome</span>", n.onclick = (e) => {
					e.preventDefault(), this._showToast("Please open this page in Safari or Chrome for audio features.", "info", 5e3);
				});
			}
		}
	}
	shouldShowAudioControls() {
		if (!window.speechSynthesis) return !1;
		let e = navigator.userAgent.toLowerCase();
		return !(e.includes("wv") || e.includes("webview") || e.includes("instagram") || e.includes("facebook") || e.includes("line"));
	}
	renderChapter(e, t) {
		let n = `text-${e.id}`, r = `quiz-${e.id}`, a = `trans-${e.id}`, o = i.chapterHasTranslation(e), s = this.wrapWords(e.content ?? e.text), c = o ? this.wrapWords(e.translation) : "", l = c, u = e.quiz.map((t, n) => `
            <div class="question-block">
                <p class="question-text">${t.question}</p>
                ${t.options.map((t) => `
                    <label class="option-label">
                        <input type="radio" name="${e.id}-q${n}" value="${t.value}"> ${t.text}
                    </label>
                `).join("")}
                <p class="feedback"></p>
            </div>
        `).join(""), d = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"5 3 19 12 5 21 5 3\"></polygon></svg>", f;
		if (this.shouldShowAudioControls()) f = `
                <div class="audio-controls">
                    <button data-action="play" data-target="${n}" id="btn-${e.id}-play" class="audio-btn audio-btn-play">
                        <span class="icon-wrapper">${d}</span> Play
                    </button>
                    <button data-action="cancel-tts" id="btn-${e.id}-cancel" class="audio-btn audio-btn-cancel" aria-label="Cancel audio" title="Stop audio">
                        <span class="icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2" ry="2"></rect></svg></span> Cancel
                    </button>
                </div>`;
		else {
			let e = /android/i.test(navigator.userAgent), t = "";
			e && (t = `<div style="margin-top: 0.5em;"><a href="${`intent://${window.location.href.replace(/^https?:\/\//, "")}#Intent;scheme=${window.location.protocol.replace(":", "")};package=com.android.chrome;end`}" style="color: var(--tj-accent-color); text-decoration: underline; font-weight: bold;">Open in Chrome</a></div>`), f = `
                <div style="background-color: var(--tj-btn-bg); color: var(--tj-subtitle-color); padding: 0.75em; border-radius: 0.5em; border: 1px dashed var(--tj-card-border); text-align: center; font-size: 0.9em; margin-bottom: 1em;">
                    <p style="margin-bottom: 0.25em;">🎧 Audio available in Chrome or Safari</p>
                    <p>เสียงบรรยายใช้ได้ใน Chrome หรือ Safari</p>
                    ${t}
                </div>`;
		}
		return `
            <section id="${e.id}" class="chapter-card">
                <h2 class="chapter-title">${e.title}</h2>
                
                ${f}

                <template data-tj-template="main-original">${s}</template>
                ${o ? `<template data-tj-template="main-translation">${c}</template>` : ""}
                <template data-tj-template="trans-original">${s}</template>
                ${o ? `<template data-tj-template="trans-translation">${c}</template>` : ""}

                <div id="${n}" class="chapter-text">
                    ${this.isTextSwapped && o ? l : s}
                </div>

                ${o ? `
                <aside id="trans-aside-${e.id}" style="display: none;">
                <details class="translation-details group">
                    <summary class="translation-summary">
                        <span style="display: flex; align-items: center; gap: 0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Translation</span>
                        <span class="chevron"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                    </summary>
                    <div style="padding: 0.5em 0.75em 0;">
                        <button data-action="play" data-target="${a}" data-lang="${this.translationLanguage}" id="btn-trans-${e.id}" class="audio-btn audio-btn-play" style="font-size: 0.8em; padding: 0.25em 0.5em;">
                            <span class="icon-wrapper">${d}</span> Play
                        </button>
                    </div>
                    <div id="${a}" class="translation-content">
                        ${this.isTextSwapped ? s : c}
                    </div>
                </details>
                </aside>
                ` : ""}

                <div class="quiz-container" id="${r}">
                    <h3 class="quiz-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Comprehension</h3>
                    ${u}
                    <button data-action="check-quiz" data-target="${r}" class="check-btn">Check</button>
                </div>
                <div id="lock-msg-${e.id}" class="quiz-lock-message" style="display: none;">
                    Answers will disappear when you scroll past.
                </div>
            </section>
        `;
	}
	attachEventListeners() {
		i.ensureGlobalPrintScoping();
		let e = this.shadowRoot.querySelector("#print-toggle");
		e && e.addEventListener("click", () => {
			document.querySelectorAll("tj-chapter-book[data-tj-print-target=\"true\"]").forEach((e) => {
				e.removeAttribute("data-tj-print-target");
			}), this.setAttribute("data-tj-print-target", "true"), document.documentElement.classList.add("tj-print-scope"), window.print();
		}), this.shadowRoot.querySelectorAll(".lang-btn").forEach((e) => {
			e.addEventListener("click", (t) => {
				let n = e.dataset.swap === "true";
				if (this.isTextSwapped !== n) {
					this.cancelTTS();
					let e = this.language;
					this.language = this.translationLanguage, this.translationLanguage = e, this.isTextSwapped = n, this.applyLanguageTextSwap(), this.shadowRoot.querySelectorAll("button[id^=\"btn-trans-\"][data-action=\"play\"]").forEach((e) => {
						e.dataset.lang = this.translationLanguage;
					}), this.selectedVoiceName = null, this._updateVoiceList(), this.shadowRoot.querySelectorAll(".lang-btn").forEach((e) => {
						e.classList.toggle("active", e.dataset.swap === String(this.isTextSwapped));
					}), this.resetApp(!0);
				}
			});
		});
		let t = this.shadowRoot.querySelector("#voice-btn");
		t && t.addEventListener("click", () => {
			this._showVoiceOverlay();
		});
		let n = this.shadowRoot.getElementById("speed-select");
		n && (n.value = this.playbackSpeed.toString(), n.addEventListener("change", (e) => {
			this.playbackSpeed = parseFloat(e.target.value), localStorage.setItem("tj-chapter-book-speed", e.target.value);
		}));
		let r = this.shadowRoot.querySelector(".close-voice-btn");
		r && r.addEventListener("click", () => {
			this._hideVoiceOverlay();
		});
		let a = this.shadowRoot.querySelector(".voice-overlay");
		a && a.addEventListener("click", (e) => {
			e.target === a && this._hideVoiceOverlay();
		});
		let o = this.shadowRoot.querySelector("#theme-toggle");
		o && o.addEventListener("click", () => {
			this.classList.toggle("dark-theme");
			let e = this.classList.contains("dark-theme");
			o.innerHTML = e ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>";
		}), this.shadowRoot.querySelectorAll("button[data-action=\"play\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.closest("button"), n = t.dataset.target, r = this.playbackSpeed;
				this.playAudio(n, r, t.id);
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"cancel-tts\"]").forEach((e) => {
			e.addEventListener("click", () => {
				this.cancelTTS();
			});
		}), this.shadowRoot.querySelectorAll("button[data-action=\"check-quiz\"]").forEach((e) => {
			e.addEventListener("click", (e) => {
				let t = e.target.closest("button"), n = t.dataset.target;
				this.checkRadioAnswers(n, t);
			});
		});
		let s = this.shadowRoot.querySelector("#generate-report");
		s && s.addEventListener("click", () => this.showReportCard());
		let c = this.shadowRoot.querySelector("#reset-book");
		c && c.addEventListener("click", () => this.resetApp());
		let l = this.shadowRoot.querySelector(".close-report-btn");
		l && l.addEventListener("click", () => this.hideReportCard()), this.shadowRoot.querySelectorAll(".chapter-text, .translation-content").forEach((e) => {
			e.addEventListener("click", (t) => {
				let n = t.target.closest(".word");
				if (n) {
					let t = this.language;
					e.classList.contains("translation-content") && !this.isTextSwapped ? t = this.translationLanguage : e.classList.contains("chapter-text") && this.isTextSwapped ? t = this.language : e.classList.contains("translation-content") && this.isTextSwapped && (t = this.translationLanguage), this.playWord(n.innerText, t), this._showDictionaryToast(n.innerText, t);
				}
			});
		}), this.shadowRoot.querySelectorAll(".translation-details").forEach((e) => {
			e.addEventListener("toggle", (t) => {
				let n = e.closest(".chapter-card");
				n && this.handleTranslationToggle(n.id, e.open);
			});
		});
	}
	wrapWords(e) {
		let t = (e) => /[\u0E00-\u0E7F]/.test(e);
		return (Array.isArray(e) ? e : [e]).map((e) => {
			if (e == null) return "";
			let n = e.replace(/<[^>]*>/g, "");
			if (t(n)) {
				if (typeof Intl < "u" && Intl.Segmenter) {
					let e = new Intl.Segmenter("th", { granularity: "word" }).segment(n), t = [];
					for (let n of e) n.isWordLike ? t.push(`<span class="word">${n.segment}</span>`) : t.push(n.segment);
					return `<p>${t.join("")}</p>`;
				}
				return `<p>${e}</p>`;
			} else return `<p>${n.split(/(\s+)/).map((e) => /\s+/.test(e) || e === "" ? e : `<span class="word">${e}</span>`).join("")}</p>`;
		}).join("");
	}
	updateIcon(e, t) {
		let n = this.shadowRoot.querySelector(`#${e}`);
		if (!n) return;
		let r = n.querySelector(".icon-wrapper");
		t === "play" ? (r.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"5 3 19 12 5 21 5 3\"></polygon></svg>", n.classList.remove("playing")) : t === "pause" && (r.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect></svg>", n.classList.add("playing"));
	}
	resetAllButtons() {
		this.shadowRoot.querySelectorAll("button[data-action=\"play\"]").forEach((e) => {
			this.updateIcon(e.id, "play");
		});
	}
	cancelTTS() {
		try {
			this.synth && this.synth.cancel();
		} finally {
			this._ttsActionSeq++, this._ttsUtteranceSeq++, this.ttsState.status = "idle", this.ttsState.activeButtonId = null, this.ttsState.activeElementId = null, this.ttsState.activeRate = 1, this.ttsState.activeLang = null, this.currentButtonId = null, this.currentUtterance = null, this.resetAllButtons();
		}
	}
	applyLanguageTextSwap() {
		this.shadowRoot.querySelectorAll("section.chapter-card").forEach((e) => {
			let t = e.querySelector(".chapter-text[id^=\"text-\"]"), n = e.querySelector(".translation-content[id^=\"trans-\"]");
			if (!t || !n) return;
			let r = e.querySelector(this.isTextSwapped ? "template[data-tj-template=\"main-translation\"]" : "template[data-tj-template=\"main-original\"]"), i = e.querySelector(this.isTextSwapped ? "template[data-tj-template=\"trans-original\"]" : "template[data-tj-template=\"trans-translation\"]");
			r && (t.innerHTML = r.innerHTML), i && (n.innerHTML = i.innerHTML);
		});
	}
	handleTranslationToggle(e, t) {}
	playAudio(e, t, n) {
		if (!(this.ttsState.activeElementId === e && this.ttsState.status !== "idle")) {
			this.cancelTTS(), this.startNewSpeech(e, t, n);
			return;
		}
		if (this.ttsState.status === "playing") {
			let r = (() => {
				let e = this.shadowRoot.querySelector(`#${n}`);
				return e && e.dataset.lang ? e.dataset.lang : this.language;
			})();
			if (this.ttsState.activeRate !== t || this.ttsState.activeLang !== r) {
				this.cancelTTS(), this.startNewSpeech(e, t, n);
				return;
			}
			this.pauseTTS(n);
			return;
		}
		if (this.ttsState.status === "paused") {
			let r = (() => {
				let e = this.shadowRoot.querySelector(`#${n}`);
				return e && e.dataset.lang ? e.dataset.lang : this.language;
			})();
			if (this.ttsState.activeRate !== t || this.ttsState.activeLang !== r) {
				this.cancelTTS(), this.startNewSpeech(e, t, n);
				return;
			}
			this.resumeTTS(e, t, n);
			return;
		}
		this.startNewSpeech(e, t, n);
	}
	pauseTTS(e) {
		this._ttsActionSeq++;
		try {
			this.synth && this.synth.pause();
		} catch (e) {
			console.warn("Speech pause() failed:", e);
		}
		this.ttsState.status = "paused", this.ttsState.activeButtonId = e, this.resetAllButtons();
	}
	resumeTTS(e, t, n) {
		this._ttsActionSeq++;
		let r = this._ttsActionSeq;
		this.ttsState.status = "playing", this.ttsState.activeButtonId = n, this.ttsState.activeElementId = e, this.ttsState.activeRate = t, this.updateIcon(n, "pause");
		try {
			this.synth && this.synth.resume();
		} catch (e) {
			console.warn("Speech resume() failed:", e);
		}
		window.setTimeout(() => {
			if (this._ttsActionSeq !== r) return;
			let i = !!(this.synth && this.synth.paused), a = !!(this.synth && this.synth.speaking);
			this.ttsState.status === "playing" && (i || !a) && this.startNewSpeech(e, t, n);
		}, 650);
	}
	startNewSpeech(e, t, n) {
		let r = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
		if (r.includes("wv") || r.includes("webview") || r.includes("instagram") || r.includes("facebook") || r.includes("line")) {
			this.showTTSError(n);
			return;
		}
		let i = this.shadowRoot.querySelector(`#${e}`);
		if (!i) return;
		let a = i.innerText, o = this.shadowRoot.querySelector(`#${n}`), s = o && o.dataset.lang ? o.dataset.lang : this.language;
		this._ttsActionSeq++, this._ttsUtteranceSeq++;
		let c = this._ttsUtteranceSeq;
		this.ttsState.status = "playing", this.ttsState.activeButtonId = n, this.ttsState.activeElementId = e, this.ttsState.activeRate = t, this.ttsState.activeLang = s;
		try {
			this.currentUtterance = new SpeechSynthesisUtterance(a);
			let e = this.synth.getVoices().find((e) => e.name === this.selectedVoiceName), r = e ? e.lang.split(/[-_]/)[0].toLowerCase() : null, i = s.split(/[-_]/)[0].toLowerCase();
			(!e || r !== i) && (e = this._getBestVoice(s)), this.currentUtterance.lang = s, e && (this.currentUtterance.voice = e), this.currentUtterance.rate = t, this.currentUtterance.onend = () => {
				this._ttsUtteranceSeq === c && (this.updateIcon(n, "play"), this._ttsActionSeq++, this.ttsState.status = "idle", this.ttsState.activeButtonId = null, this.ttsState.activeElementId = null, this.ttsState.activeRate = 1, this.ttsState.activeLang = null, this.currentButtonId = null, this.currentUtterance = null);
			}, this.currentUtterance.onerror = (e) => {
				this._ttsUtteranceSeq === c && (console.error("Speech error:", e), this.updateIcon(n, "play"), this._ttsActionSeq++, this.ttsState.status = "idle", this.ttsState.activeButtonId = null, this.ttsState.activeElementId = null, this.ttsState.activeRate = 1, this.ttsState.activeLang = null, this.currentButtonId = null, e.error !== "canceled" && e.error !== "interrupted" && this.showTTSError(n));
			}, this.currentButtonId = n, this.updateIcon(n, "pause"), this.synth.speak(this.currentUtterance);
		} catch (e) {
			console.error("Speech synthesis setup error", e), this.showTTSError(n), this.updateIcon(n, "play"), this._ttsActionSeq++, this.ttsState.status = "idle", this.ttsState.activeButtonId = null, this.ttsState.activeElementId = null, this.ttsState.activeRate = 1, this.ttsState.activeLang = null;
		}
	}
	playWord(e, t) {
		if (!this.synth) return;
		let n = e.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
		if (!n) return;
		this.synth.cancel();
		let r = new SpeechSynthesisUtterance(n), i = this.synth.getVoices().find((e) => e.name === this.selectedVoiceName), a = i ? i.lang.split(/[-_]/)[0].toLowerCase() : null, o = (t || this.language).split(/[-_]/)[0].toLowerCase();
		(!i || a !== o) && (i = this._getBestVoice(t || this.language)), r.lang = t || this.language, i && (r.voice = i), r.rate = .8, this.synth.speak(r);
	}
	showTTSError(e) {
		if (e) {
			let t = this.shadowRoot.querySelector(`#${e}`);
			if (t) {
				let e = t.closest(".audio-controls");
				if (e) {
					e.innerHTML = "\n            <div class=\"tts-error-message\" style=\"background-color: #fee2e2; color: #991b1b; padding: 0.75em; border-radius: 0.5em; border: 1px solid #f87171; text-align: center; font-weight: 500;\">\n                <p style=\"margin-bottom: 0.5em;\">⚠️ Audio not supported in this browser</p>\n                <p style=\"font-size: 0.9em;\">Please open in Chrome or Safari</p>\n                <p style=\"font-size: 0.9em;\">กรุณาเปิดใน Chrome หรือ Safari</p>\n            </div>\n        ";
					return;
				}
			}
		}
		if (this.shadowRoot.querySelector(".tts-error-message")) return;
		let t = document.createElement("div");
		t.className = "tts-error-message", t.style.cssText = "\n            background-color: #fee2e2;\n            color: #991b1b;\n            padding: 1em;\n            margin: 1em auto;\n            border-radius: 0.5em;\n            border: 1px solid #f87171;\n            max-width: 48em;\n            text-align: center;\n            font-weight: 500;\n        ", t.innerHTML = "\n            <p>Text-to-speech is not supported in this browser. Please try opening this page in a standard browser like Chrome or Safari.</p>\n            <p style=\"margin-top: 0.5em;\">เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง กรุณาลองเปิดหน้านี้ในเบราว์เซอร์มาตรฐาน เช่น Chrome หรือ Safari</p>\n            <button style=\"margin-top: 0.5em; background: none; border: none; color: #991b1b; text-decoration: underline; cursor: pointer;\">Dismiss / ปิด</button>\n        ";
		let n = t.querySelector("button");
		n.onclick = () => t.remove();
		let r = this.shadowRoot.querySelector(".book-header");
		r ? r.after(t) : this.prepend(t);
	}
	checkRadioAnswers(e, t) {
		let n = this.shadowRoot.querySelector(`#${e}`), r = n.closest(".chapter-card"), i = n.querySelectorAll(".question-block"), a = 0, o = 0, s = !0;
		if (i.forEach((e) => {
			e.querySelector("input[type=\"radio\"]:checked") || (s = !1);
		}), !s) {
			this._showToast("Please answer all questions before checking.", "warning");
			return;
		}
		t && (t.disabled = !0, t.textContent = "Checked", t.style.opacity = "0.7", t.style.cursor = "not-allowed"), n.dataset.checked = "true", i.forEach((e) => {
			let t = e.querySelector("input[type=\"radio\"]:checked"), n = e.querySelector(".feedback");
			if (e.querySelectorAll("input[type=\"radio\"]").forEach((e) => e.disabled = !0), o++, n.classList.remove("feedback-correct", "feedback-wrong", "feedback-neutral"), t.value === "correct") n.textContent = "Correct !", n.classList.add("feedback-correct"), a++;
			else {
				n.textContent = "Incorrect.", n.classList.add("feedback-wrong");
				let t = r ? r.querySelector(".chapter-title").innerText : "Unknown Chapter", i = e.querySelector(".question-text").innerText;
				this.wrongQuestions.push({
					question: i,
					chapter: t
				});
			}
		}), this.updateScore(a, o);
		let c = e.replace("quiz-", ""), l = this.shadowRoot.querySelector(`#lock-msg-${c}`), u = r.querySelector(`#trans-aside-${c}`);
		u && (u.style.display = "block"), l && (l.innerHTML = "Answers and translation will disappear when you scroll past.", l.classList.add("visible"), l.style.display = "block");
	}
	updateScore(e, t) {
		this.totalScore = (this.totalScore || 0) + e;
		let n = this.shadowRoot.querySelector("#score-tally"), r = this.shadowRoot.querySelector("#total-tally");
		n && r && (n.textContent = this.totalScore, r.textContent = this.absoluteTotalQuestions);
	}
	showReportCard() {
		let e = this.shadowRoot.querySelector("#student-name"), t = this.shadowRoot.querySelector("#student-id"), n = this.shadowRoot.querySelector("#student-homeroom"), r = e.value.trim(), i = t.value.trim(), a = n.value.trim();
		if (!r || !i) {
			this._showToast("Please enter both Student Name and Student ID before generating a report card.", "warning"), r ? t.focus() : e.focus();
			return;
		}
		this.studentInfo = {
			...this.studentInfo,
			nickname: r,
			number: i,
			homeroom: a
		}, e.disabled = !0, t.disabled = !0, n && (n.disabled = !0);
		let o = this.shadowRoot.querySelector(".report-overlay"), s = this.shadowRoot.querySelector("#report-content"), c = /* @__PURE__ */ new Date(), l = c.toLocaleDateString(), u = c.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}), d = this.shadowRoot.querySelector(".book-title").innerText, f = this.absoluteTotalQuestions > 0 ? Math.round(this.totalScore / this.absoluteTotalQuestions * 100) : 0, p = f >= 80 ? "🏆" : f >= 50 ? "⭐" : "💪", m = f >= 80 ? "Excellent!" : f >= 50 ? "Good effort!" : "Keep practicing!";
		s.innerHTML = `
            <div class="rc-header">
                <div class="rc-icon">📄</div>
                <div class="rc-title">${d}</div>
                <div class="rc-subtitle">Report Card</div>
            </div>
            <div class="rc-student">
                <span class="rc-label">Student</span>
                <span class="rc-value">${r} <span class="rc-number">(${i}) ${a ? `- ${a}` : ""}</span></span>
            </div>
            <div class="rc-score-row">
                <div class="rc-score-circle">
                    <div class="rc-score-val">${f}%</div>
                    <div class="rc-score-pct">Overall</div>
                </div>
                <div class="rc-score-label">${p} ${m}</div>
            </div>
            <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${f}%"></div></div>
            <div class="rc-details">
                <div class="rc-detail-row"><span>Total Score</span><span>${this.totalScore} / ${this.absoluteTotalQuestions}</span></div>
                <div class="rc-detail-row"><span>Date</span><span>${l}</span></div>
                <div class="rc-detail-row"><span>Time</span><span>${u}</span></div>
            </div>

            ${this.wrongQuestions.length > 0 ? `
                <div class="report-wrong-list" style="margin-bottom: 20px;">
                    <h3 style="font-size: 1em; color: var(--tj-error-color); margin-bottom: 10px; font-weight: 700;">Needs Review:</h3>
                    <div style="max-height: 200px; overflow-y: auto; background: var(--tj-btn-bg); border-radius: 8px; border: 1px solid var(--tj-card-border);">
                    ${this.wrongQuestions.map((e) => `
                        <div class="report-wrong-item" style="padding: 10px; border-bottom: 1px solid var(--tj-card-border);">
                            <span class="report-wrong-chapter" style="font-size: 0.75em; color: var(--tj-subtitle-color); text-transform: uppercase;">${e.chapter}</span>
                            <div style="font-size: 0.9em;">${e.question}</div>
                        </div>
                    `).join("")}
                    </div>
                </div>
            ` : ""}

            <div class="rc-submission-box">
                <p class="rc-submission-header">Submission (Optional)</p>
                <input type="text" id="report-teacher-code" class="rc-teacher-code-input" placeholder="Enter Teacher Code" value="${this.studentInfo.teacherCode || ""}">
                <p class="rc-help-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
            </div>

            <div class="rc-actions" style="margin-top: 16px;">
                <button class="rc-submit-btn" id="submit-score-btn">Submit Score Online</button>
                <button class="rc-secondary-btn close-report-btn">Close Report</button>
            </div>
        `;
		let h = s.querySelector("#submit-score-btn");
		h && (h.onclick = () => this._submitScore());
		let g = s.querySelector(".close-report-btn");
		g && (g.onclick = () => this.hideReportCard()), o.classList.add("visible");
	}
	hideReportCard() {
		this.shadowRoot.querySelector(".report-overlay").classList.remove("visible");
	}
	async _submitScore() {
		let e = this.shadowRoot.querySelector("#report-teacher-code"), t = e ? e.value.trim() : this.studentInfo.teacherCode;
		if (this.studentInfo.teacherCode = t, t !== this.code) {
			this._showToast("Invalid Teacher Code. Please show your report card screenshot to your teacher.", "error");
			return;
		}
		if (this.isSubmitting) return;
		let n = this.shadowRoot.querySelector("#submit-score-btn");
		if (!n) return;
		let r = n.textContent;
		this.isSubmitting = !0, n.textContent = "Submitting...", n.disabled = !0;
		let i = this.shadowRoot.querySelector(".book-title").innerText, a = this.absoluteTotalQuestions > 0 ? Math.round(this.totalScore / this.absoluteTotalQuestions * 100) : 0, o = {
			nickname: this.studentInfo.nickname,
			homeroom: this.studentInfo.homeroom || "",
			studentId: this.studentInfo.number,
			quizName: "Book- " + i,
			score: a,
			total: 100
		};
		try {
			await fetch(this.submissionUrl, {
				method: "POST",
				mode: "no-cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(o)
			}), this._showToast("Score successfully submitted! ✓", "success"), n.textContent = "Submitted ✓", n.style.background = "var(--tj-subtitle-color)";
		} catch (e) {
			console.error("Error submitting score:", e), this._showToast("There was an error submitting your score. Please try again.", "error"), n.textContent = r, n.disabled = !1, this.isSubmitting = !1;
		}
	}
	async resetApp(e = !1) {
		if (!e && !await this._showConfirmModal("⚠️ Reset Progress", "Are you sure you want to reset everything? Your scores and progress will be lost.")) return;
		this.totalScore = 0, this.wrongQuestions = [];
		let t = this.shadowRoot.querySelector("#student-name"), n = this.shadowRoot.querySelector("#student-id");
		t && (t.disabled = !1, t.value = ""), n && (n.disabled = !1, n.value = "");
		let r = this.shadowRoot.querySelector("#score-tally"), i = this.shadowRoot.querySelector("#total-tally");
		r && (r.textContent = "0"), i && (i.textContent = this.absoluteTotalQuestions), this.shadowRoot.querySelectorAll(".chapter-card").forEach((e) => {
			let t = `quiz-${e.id}`, n = e.querySelector(`#${t}`);
			if (n) {
				n.classList.remove("quiz-hidden-checked", "locked-open", "locked-delay"), delete n.dataset.checked;
				let e = n.querySelector("button[data-action=\"check-quiz\"]");
				e && (e.disabled = !1, e.textContent = "Check", e.style.opacity = "1", e.style.cursor = "pointer"), n.querySelectorAll("input[type=\"radio\"]").forEach((e) => {
					e.disabled = !1, e.checked = !1;
				}), n.querySelectorAll(".feedback").forEach((e) => {
					e.textContent = "", e.className = "feedback";
				});
			}
			let r = e.querySelector(".translation-details");
			r && (r.classList.remove("translation-hidden-checked"), r.open = !1);
			let i = e.querySelector(".quiz-lock-message");
			i && (i.classList.remove("visible"), i.textContent = "");
		}), this.lockoutTimers.forEach((e) => clearInterval(e)), this.lockoutTimers.clear(), window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	disconnectedCallback() {
		this.synth && this.synth.cancel(), this._visibilityObserver && this._visibilityObserver.disconnect();
	}
	_showToast(e, t = "info", n = 3500) {
		let r = this.shadowRoot.querySelector(".tj-toast-container");
		r || (r = document.createElement("div"), r.className = "tj-toast-container", this.shadowRoot.appendChild(r));
		let i = {
			success: "✓",
			error: "✕",
			warning: "⚠",
			info: "ℹ"
		}, a = document.createElement("div");
		a.className = `tj-toast ${t}`, a.innerHTML = `<span class="tj-toast-icon">${i[t] || "ℹ"}</span><span>${e}</span>`, r.appendChild(a), setTimeout(() => {
			a.classList.add("hiding"), a.addEventListener("animationend", () => a.remove(), { once: !0 });
		}, n);
	}
	_showConfirmModal(e, t) {
		return new Promise((n) => {
			let r = document.createElement("div");
			r.className = "tj-confirm-overlay", r.innerHTML = `
                <div class="tj-confirm-card">
                    <div class="tj-confirm-title">${e}</div>
                    <div class="tj-confirm-message">${t}</div>
                    <div class="tj-confirm-actions">
                        <button class="tj-confirm-cancel">Cancel</button>
                        <button class="tj-confirm-ok">Reset</button>
                    </div>
                </div>
            `, this.shadowRoot.appendChild(r);
			let i = (e) => {
				r.style.animation = "tj-toast-out 0.2s ease forwards", r.addEventListener("animationend", () => r.remove(), { once: !0 }), n(e);
			};
			r.querySelector(".tj-confirm-cancel").onclick = () => i(!1), r.querySelector(".tj-confirm-ok").onclick = () => i(!0), r.addEventListener("click", (e) => {
				e.target === r && i(!1);
			});
		});
	}
	async fetchWordData(e, t) {
		try {
			let n = ((e) => {
				let t = {
					english: "en",
					spanish: "es",
					french: "fr",
					german: "de",
					thai: "th",
					en: "en",
					es: "es",
					fr: "fr",
					de: "de",
					th: "th"
				}, n = e.split(/[-_]/)[0].toLowerCase();
				return t[n] || n || "en";
			})(t), r = `https://freedictionaryapi.com/api/v1/entries/${n}/${encodeURIComponent(e)}`, i = await fetch(r);
			if (i.ok) {
				let e = await i.json(), t = e && typeof e == "object" && e.entries && e.entries.length > 0, n = Array.isArray(e) && e[0]?.meanings?.length > 0;
				if (t || n) return {
					type: "dictionary",
					content: e
				};
			}
			let a = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${n}&tl=en&dt=t&q=${encodeURIComponent(e)}`, o = await (await fetch(a)).json();
			return o && o[0] && o[0][0] ? {
				type: "translation",
				content: o[0][0][0]
			} : null;
		} catch (e) {
			return console.error("Lookup failed", e), null;
		}
	}
	_showDictionaryToast(e, t) {
		let n = e.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
		if (!n) return;
		let r = this.shadowRoot.querySelector(".tj-toast-container");
		r || (r = document.createElement("div"), r.className = "tj-toast-container", this.shadowRoot.appendChild(r)), r.querySelectorAll(".tj-toast.dictionary-lookup").forEach((e) => e.remove());
		let i = document.createElement("div");
		i.className = "tj-toast info dictionary-lookup", i.innerHTML = `
            <div class="tj-toast-content">
                <div class="tj-toast-header">
                    <span class="tj-toast-icon">📖</span>
                    <span class="tj-toast-word">${n}</span>
                </div>
                <div class="tj-toast-body">
                    <button class="tj-toast-action-btn">Explore Word</button>
                </div>
            </div>
            <button class="tj-toast-close">✕</button>
        `, r.appendChild(i);
		let a = i.querySelector(".tj-toast-action-btn"), o = i.querySelector(".tj-toast-body"), s = i.querySelector(".tj-toast-close"), c = !1, l = setTimeout(() => {
			c || (i.classList.add("hiding"), i.addEventListener("animationend", () => i.remove(), { once: !0 }));
		}, 5e3);
		s.onclick = (e) => {
			e.stopPropagation(), clearTimeout(l), i.classList.add("hiding"), i.addEventListener("animationend", () => i.remove(), { once: !0 });
		}, a.onclick = async (e) => {
			if (e.stopPropagation(), c) return;
			c = !0, clearTimeout(l), a.disabled = !0, a.textContent = "Looking up...";
			let r = await this.fetchWordData(n, t);
			if (!r) o.innerHTML = "<span class=\"tj-toast-error\">Could not find definition.</span>";
			else if (r.type === "dictionary") {
				let e = Array.isArray(r.content), t = e ? r.content[0] : r.content.entries[0], i = (t.meanings ? t.meanings[0] : t.senses ? t.senses[0] : null)?.partOfSpeech || (e ? t.meanings[0].partOfSpeech : "word"), a = e ? t.meanings[0].definitions[0].definition : t.senses ? t.senses[0].definition : t.meanings[0].definitions[0].definition;
				o.innerHTML = `
                    <div class="tj-definition-container">
                        <span class="tj-pos-badge">${i}</span>
                        <p class="tj-definition-text">${a}</p>
                        <a href="https://www.google.com/search?q=define+${encodeURIComponent(n)}" target="_blank" class="tj-google-btn">Try Google</a>
                    </div>
                `;
			} else o.innerHTML = `
                    <div class="tj-translation-container">
                        <span class="tj-pos-badge">translation</span>
                        <p class="tj-definition-text">${r.content}</p>
                        <a href="https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(n)}&op=translate" target="_blank" class="tj-google-btn">Try Google</a>
                    </div>
                `;
			setTimeout(() => {
				i.isConnected && (i.classList.add("hiding"), i.addEventListener("animationend", () => i.remove(), { once: !0 }));
			}, 1e4);
		};
	}
};
customElements.define("tj-chapter-book", i);
//#endregion
