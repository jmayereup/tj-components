import { i as e, n as t, t as n } from "./chunks/audio-utils-ChLf1XGP.js";
import { t as r } from "./chunks/tj-config-D6N07Ou6.js";
//#region src/tj-quiz-element/template.html?raw
var i = "<div class=\"quiz-wrapper notranslate\" translate=\"no\">\n    <div id=\"tabAwayBanner\" class=\"tab-away-banner hidden\" role=\"alert\"></div>\n    <div class=\"container\" id=\"mainContainer\">\n        <div class=\"quiz-header\">\n            <span class=\"theme-toggle\" title=\"Toggle Light/Dark Mode\">\n                <span class=\"light-icon\">☀️</span>\n                <span class=\"dark-icon hidden\">🌙</span>\n            </span>\n            <button type=\"button\" id=\"voice-btn\" title=\"Choose Voice\">\n                <!-- Speaking Head Icon -->\n                <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                    <path\n                        d=\"M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z\" />\n                </svg>\n            </button>\n            <h1 id=\"quizTitle\">Interactive Reading</h1>\n            <p id=\"quizDescription\">Read the passage, then answer the questions below.</p>\n        </div>\n\n        <form id=\"quizForm\">\n            <div id=\"testModeLockSection\" class=\"section-card hidden\">\n                <div class=\"section-card-header\" id=\"lockSectionHeader\">Test Mode Locked / ล็อกโหมดทำข้อสอบ</div>\n                <p class=\"student-instructions instruction\" id=\"lockSectionInstruction\">This quiz is in Test Mode. Please enter the Start Quiz Code to unlock the questions. / แบบทดสอบนี้อยู่ในโหมดการสอบ กรุณากรอกรหัสเริ่มทำข้อสอบเพื่อปลดล็อก</p>\n                <div class=\"input-group\">\n                    <label for=\"lockTeacherCode\" class=\"input-label\" id=\"lockTeacherCodeLabel\">Start Quiz Code</label>\n                    <input type=\"password\" id=\"lockTeacherCode\" class=\"form-input\" placeholder=\"Enter Start Quiz Code\" autocomplete=\"off\">\n                </div>\n                <p id=\"lockErrorAlert\" style=\"color: var(--red-color, #ef4444); margin-top: 0.5rem; font-size: 0.9em; min-height: 1.5rem; font-weight: 500;\" class=\"hidden\"></p>\n                <div style=\"margin-top: 1rem;\">\n                    <button type=\"button\" id=\"unlockTestButton\" class=\"button button-primary\">Unlock Test / ปลดล็อกข้อสอบ</button>\n                </div>\n            </div>\n\n            <div id=\"quizContent\" class=\"hidden\">\n                <!-- Dynamic sections will be appended here as .section-card elements -->\n                <div id=\"dynamicContent\"></div>\n\n                <div id=\"studentInfoSection\" class=\"section-card\">\n                    <div class=\"section-card-header\">Student Information / ข้อมูลนักเรียน</div>\n                    <p class=\"student-instructions instruction\">Enter your details to generate your report. / กรุณากรอกข้อมูลเพื่อสร้างรายงานผลการเรียน\n                    </p>\n                    <div class=\"input-group\">\n                        <label for=\"nickname\" class=\"input-label\">Nickname</label>\n                        <input type=\"text\" id=\"nickname\" name=\"nickname\" class=\"form-input\" placeholder=\"Jake\">\n                    </div>\n                    <div class=\"grid-container\" style=\"margin-top: 1rem;\">\n                        <div>\n                            <label for=\"homeroom\" class=\"input-label\">Homeroom</label>\n                            <input type=\"text\" id=\"homeroom\" name=\"homeroom\" class=\"form-input\" placeholder=\"1/1\">\n                        </div>\n                        <div>\n                            <label for=\"studentId\" class=\"input-label\">Student ID</label>\n                            <input type=\"text\" id=\"studentId\" name=\"studentId\" class=\"form-input\" placeholder=\"01\">\n                        </div>\n                    </div>\n                    <div id=\"teacherCodeGroup\" class=\"input-group\" style=\"margin-top: 1rem;\">\n                        <label for=\"teacherCode\" class=\"input-label\">Teacher Code (Optional)</label>\n                        <input type=\"text\" id=\"teacherCode\" name=\"teacherCode\" class=\"form-input\" placeholder=\"Enter code for submission\">\n                    </div>\n                </div>\n\n                <div id=\"checkScoreContainer\" class=\"actions-container\">\n                    <button type=\"submit\" id=\"checkScoreButton\" class=\"button button-primary\">\n                        Check My Score\n                    </button>\n                    <p id=\"studentInfoAlert\"></p>\n                </div>\n\n                <div id=\"resultArea\" class=\"result-area section-card hidden\">\n                    <div id=\"resultScore\"></div>\n                </div>\n\n                <div id=\"postScoreActions\" class=\"post-score-section hidden\">\n                    <p id=\"validationMessage\"></p>\n                    \n                    <div id=\"retrySubmissionSection\" class=\"retry-section hidden\">\n                        <p class=\"retry-title\">Want to send this to your teacher?</p>\n                        <div class=\"retry-controls\">\n                            <input type=\"text\" id=\"retryTeacherCode\" class=\"form-input\" placeholder=\"Teacher Code\" title=\"Teacher Code\">\n                            <button type=\"button\" id=\"retrySendButton\" class=\"button button-green\">Send Now</button>\n                        </div>\n                    </div>\n\n                    <div id=\"teacherActionsSection\" class=\"teacher-actions-section hidden\">\n                        <p class=\"teacher-actions-title\">Reopen or Reset Quiz (Teacher Only)</p>\n                        <div class=\"teacher-actions-controls\">\n                            <input type=\"text\" id=\"teacherResetCode\" class=\"form-input\" placeholder=\"Reset Code\" title=\"Reset Code\">\n                            <button type=\"button\" id=\"reopenEditButton\" class=\"button button-slate\">Reopen & Edit</button>\n                            <button type=\"button\" id=\"resetTryAgainButton\" class=\"button button-red\">Reset & Try Again</button>\n                        </div>\n                        <p id=\"teacherResetCodeError\" class=\"hidden\"></p>\n                    </div>\n\n                    <div class=\"post-score-actions\">\n                        <button type=\"button\" id=\"sendButton\" class=\"button button-green hidden\">\n                            Resend Score to Teacher\n                        </button>\n                        <button type=\"button\" id=\"tryAgainButton\" class=\"button button-slate\">\n                            Try Again\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"voice-overlay hidden\">\n        <div class=\"voice-card\">\n            <div class=\"voice-card-header\">\n                <h3>Choose Voice</h3>\n                <button type=\"button\" class=\"close-voice-btn\">×</button>\n            </div>\n            <div class=\"voice-list\"></div>\n        </div>\n    </div>\n</div>\n\n<div class=\"browser-prompt-overlay\" id=\"browser-prompt-overlay\" style=\"display: none;\">\n    <div class=\"browser-prompt-card\">\n        <h2>Browser Support Needed</h2>\n        <p>This application works best in standard browsers like <strong>Chrome</strong> or <strong>Safari</strong> to enable high-quality audio features.</p>\n        <p>กรุณาเปิดใน Chrome หรือ Safari เพื่อใช้งานฟีเจอร์เสียงแบบเต็มรูปแบบ</p>\n        <a class=\"browser-action-btn\" id=\"browser-action-btn\">Open in Browser</a>\n        <button class=\"close-prompt\" style=\"display: block; width: 100%; margin-top: 1.5em; border: none; background: transparent; text-decoration: underline; cursor: pointer; color: #64748b; font-weight: 600; font-size: 0.95em;\" onclick=\"this.closest('.browser-prompt-overlay').style.display='none'\">Continue anyway / ใช้งานต่อ</button>\n    </div>\n</div>", a = ":host{-webkit-user-select:none;user-select:none;-webkit-translate:no;translate:no;--bg-light:#f1f5f9;--text-light:#1e293b;--card-bg-light:#fff;--card-shadow-light:0 10px 15px -3px #0000001a, 0 4px 6px -2px #0000000d;--border-light:#e2e8f0;--input-bg-light:#f8fafc;--input-border-light:#cbd5e1;--subtle-text-light:#475569;--primary-color:#4f46e5;--primary-hover:#4338ca;--primary-text:#fff;--green-color:#16a34a;--green-hover:#15803d;--green-light-bg:#dcfce7;--red-color:#ef4444;--red-hover:#dc2626;--red-light-bg:#fee2e2;--yellow-color:#eab308;--warning-color:#854d0e;--warning-light-bg:#fef9c3;--slate-color:#64748b;--slate-hover:#475569;--font-sans:\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;display:block}.quiz-wrapper,[translate=no],.notranslate{-webkit-user-select:none;user-select:none;-webkit-translate:no;translate:no}input,textarea{-webkit-user-select:text;user-select:text}:host(.dark){--bg-light:#0f172a;--text-light:#e2e8f0;--card-bg-light:#1e293b;--card-shadow-light:0 10px 15px -3px #0000004d, 0 4px 6px -2px #0003;--border-light:#334155;--input-bg-light:#334155;--input-border-light:#475569;--subtle-text-light:#87abdd;--green-light-bg:#14532d;--red-light-bg:#7f1d1d;--warning-color:#facc15;--warning-light-bg:#422006}.quiz-wrapper *{box-sizing:border-box}.quiz-wrapper{font-family:var(--font-sans);background-color:var(--bg-light);color:var(--text-light);padding:1rem 0;line-height:1.6;transition:background-color .3s,color .3s}.quiz-wrapper p{margin-bottom:1rem;font-size:1em}.container{max-width:800px;margin-left:auto;margin-right:auto;padding:0 1rem}.quiz-header{background-color:var(--primary-color);color:var(--primary-text);box-shadow:var(--card-shadow-light);border-radius:.75rem;margin-bottom:1.25rem;padding:1.5rem;position:relative}.quiz-header h1{margin:0;font-size:1.5em;font-weight:700}.quiz-header p{color:#e0e7ff;opacity:.9;margin-top:.5rem;font-size:.9375em}.theme-toggle{cursor:pointer;color:#fff;background-color:#ffffff1a;border:1px solid #0000;border-radius:9999px;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;padding:0;font-size:1.2rem;transition:background-color .2s,transform .2s;display:inline-flex;position:absolute;top:1rem;right:1rem}.theme-toggle:hover,#voice-btn:hover{background-color:#fff3;transform:scale(1.05)}form{padding:0}@media (width>=640px){form{padding:2rem}}fieldset{border:none;margin:0 0 2rem;padding:0}.legend-container{border-bottom:1px solid var(--border-light);justify-content:space-between;align-items:center;width:100%;margin-bottom:1rem;padding-bottom:.5rem;display:flex}legend{color:var(--text-light);border-bottom:none;width:auto;margin-bottom:0;padding-bottom:0;font-size:1.125em;font-weight:600}fieldset>legend{color:var(--text-light);border-bottom:1px solid var(--border-light);margin-bottom:.5rem;padding-bottom:.5rem;font-size:1.125em;font-weight:700;display:block}#vocabSection .vocab-grid-table,#clozeSection .cloze-word-bank,#clozeSection .cloze-text{margin-top:1rem}.reading-instructions{margin-top:1rem;margin-bottom:1rem;font-size:.9em;font-style:italic}.instruction{color:var(--subtle-text-light);margin-top:.25rem;margin-bottom:1rem;font-size:.9em;font-style:italic;line-height:1.45}.audio-toggle{cursor:pointer;background-color:var(--primary-color);color:var(--primary-text);border:1px solid #0000;border-radius:9999px;justify-content:center;align-items:center;padding:.75rem;transition:background-color .2s;display:inline-flex}.audio-toggle:hover{background-color:var(--primary-hover)}.audio-toggle svg{width:1.5em;height:1.5em}.passage-audio-toggle{cursor:pointer;border:1px solid var(--border-light);color:var(--text-light);background-color:#fff;border-radius:.5rem;justify-content:center;align-items:center;margin-left:.5rem;padding:.5rem .6rem;transition:transform .12s,box-shadow .12s;display:inline-flex;box-shadow:0 2px 6px #0000000f}.passage-audio-toggle:hover{transform:translateY(-2px);box-shadow:0 6px 16px #0000001f}.passage-audio-toggle .play-icon,.passage-audio-toggle .pause-icon{width:1.1rem;height:1.1rem}.passage-wrapper{background:0 0;border-radius:.5rem;margin-bottom:1rem;padding:1rem 1.25rem;position:relative}.passage-header{align-items:center;gap:.5rem;display:flex}.passage-text{margin-top:.75rem}.listening-hidden{clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;overflow:hidden;position:absolute!important}.passage-content{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.5rem;margin-bottom:1.5rem;padding:1.5rem;line-height:1.7}.section-card{background-color:var(--card-bg-light);border:1px solid var(--border-light);box-shadow:var(--card-shadow-light);border-radius:.75rem;margin-bottom:1.25rem;padding:1.5rem}.section-card-header{color:var(--text-light);border-bottom:1px solid var(--border-light);margin:0 0 .5rem;padding-bottom:.4rem;font-size:1.05em;font-weight:600}.section-card-description{color:var(--subtle-text-light);margin-bottom:.75rem;font-size:.95em;line-height:1.6}.section-card-content{display:block}.instruction-card .section-card-content{margin-top:.25rem}.instruction-questions{margin-top:.75rem}.question-block{border-top:1px solid var(--border-light);padding-top:1.5rem}.question-block:first-of-type{border-top:none;padding-top:0}.question-block p.question-text{margin-bottom:1rem;font-size:1em;font-weight:600}.options-group{flex-direction:column;gap:.5rem;display:flex}.option-label{background-color:var(--input-bg-light);cursor:pointer;border:1px solid #0000;border-radius:.5rem;align-items:center;padding:.5rem .75rem;font-size:.95em;transition:background-color .18s,border-color .18s;display:flex}.option-label:hover{background-color:#eef4ff}:host(.dark) .option-label:hover{background-color:#2b3440}.option-label.correct{background-color:var(--green-light-bg);border-color:var(--green-color)}.option-label.incorrect{background-color:var(--red-light-bg);border-color:var(--red-color)}.feedback-icon{margin-left:auto;font-size:1.25em}.explanation{background-color:var(--input-bg-light);border-left:4px solid var(--primary-color);border-radius:.5rem;margin-top:1rem;padding:1rem;font-size:.9em;line-height:1.5}.explanation-content strong{color:var(--primary-color)}.form-radio{width:1.125em;height:1.125em;accent-color:var(--primary-color);flex-shrink:0;margin-right:.75em}.form-radio:disabled{cursor:not-allowed}.form-input{background-color:var(--input-bg-light);border:1px solid var(--input-border-light);width:100%;color:var(--text-light);border-radius:.5rem;padding:.75rem;font-size:1em}.form-input.invalid{border-color:var(--red-color)}.form-input:disabled{cursor:not-allowed;background-color:#e2e8f0}:host(.dark) .form-input:disabled{background-color:#334155}.input-label{color:var(--subtle-text-light);margin-bottom:.25rem;font-size:.875em;font-weight:500;display:block}#teacherCode{letter-spacing:.1em;font-family:monospace}:host(.dark) #teacherCode{background-color:#1e293b}.grid-container{grid-template-columns:1fr;gap:1rem;display:grid}@media (width>=768px){.grid-container{grid-template-columns:repeat(2,1fr)}}.actions-container{border-top:1px solid var(--border-light);margin-top:2rem;padding-top:1.5rem}.button{cursor:pointer;border:none;border-radius:.5rem;width:100%;padding:.875rem 1.5rem;font-size:1em;font-weight:600;transition:all .2s ease-in-out}.button:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 4px 10px #0000001a}.button:disabled{cursor:not-allowed;box-shadow:none;background-color:#94a3b8;transform:none}.button-primary{background-color:var(--primary-color);color:var(--primary-text)}.button-primary:hover:not(:disabled){background-color:var(--primary-hover)}.button-green{background-color:var(--green-color);color:var(--primary-text)}.button-green:hover:not(:disabled){background-color:var(--green-hover)}.button-slate{background-color:var(--slate-color);color:var(--primary-text)}.button-slate:hover:not(:disabled){background-color:var(--slate-hover)}.button-red{background-color:var(--red-color);color:var(--primary-text)}.button-red:hover:not(:disabled){background-color:var(--red-hover)}.post-score-actions{flex-direction:column;gap:1rem;display:flex}@media (width>=768px){.post-score-actions{flex-direction:row-reverse}}.prequiz-actions{flex-direction:column;align-items:flex-start;gap:.75rem;margin-top:1.5rem;display:flex}#studentInfoAlert{min-height:1.5rem;font-size:.9em;font-weight:500}#studentInfoAlert.success{color:var(--green-color)}#studentInfoAlert.error{color:var(--red-color)}.result-area{text-align:center;border-bottom:1px solid var(--border-light);margin-bottom:2rem;padding:2rem}.result-area h2{margin:0;font-size:1.25em;font-weight:600}#resultScore{text-align:center;margin:1.5rem 0}.score-main{margin-bottom:.5rem;font-size:3em;font-weight:700;line-height:1}.score-percentage{opacity:.8;margin-bottom:1rem;font-size:1.5em;font-weight:600}.score-breakdown{justify-content:center;gap:2rem;margin-top:1rem;display:flex}.score-section{flex-direction:column;align-items:center;gap:.25rem;display:flex}.score-label{opacity:.7;text-transform:uppercase;letter-spacing:.05em;font-size:.9em;font-weight:500}.score-value{font-size:1.25em;font-weight:600}@media (width<=768px){.score-main{font-size:2.5em}.score-percentage{font-size:1.25em}.score-breakdown{flex-direction:column;gap:1rem}.score-section{background-color:var(--input-bg-light);border-radius:.5rem;flex-direction:row;justify-content:space-between;align-items:center;padding:.5rem 1rem}}#resultScore.high .score-main{color:var(--green-color)}#resultScore.medium .score-main{color:var(--yellow-color)}#resultScore.low .score-main{color:var(--red-color)}#validationMessage{text-align:center;min-height:1.5rem;margin-bottom:1rem;font-size:.9em;font-weight:500}#validationMessage.success{color:var(--green-color)}#validationMessage.error{color:var(--red-color)}#validationMessage.warning{color:var(--warning-color)}.hidden{display:none!important}.vocab-word-bank{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.5rem;margin-bottom:1.25rem;padding:1rem}:host(.dark) .vocab-word-bank{background-color:var(--input-bg-dark)}.vocab-bank-title{color:var(--subtle-text-light);text-transform:uppercase;letter-spacing:.05em;margin-bottom:.75rem;font-size:.9em;font-weight:600}.vocab-bank-items{flex-wrap:wrap;align-items:center;gap:.5rem;display:flex}.vocab-bank-item{background-color:var(--card-bg-light);color:var(--text-light);border:1px solid var(--border-light);cursor:default;-webkit-user-select:none;user-select:none;border-radius:.375rem;padding:.45rem .75rem;font-size:.9em;font-weight:600;box-shadow:0 1px 2px #0000000d}.vocab-matching-container{flex-direction:column;gap:.5rem;display:flex}.vocab-matching-row{border-radius:.5rem;align-items:center;gap:1rem;padding:.5rem .75rem;transition:background-color .2s;display:flex}.vocab-matching-input{text-align:center;border:2px solid var(--input-border-light);background-color:var(--card-bg-light);width:2.5rem;height:2.5rem;color:var(--text-light);text-transform:uppercase;box-sizing:border-box;border-radius:.4rem;flex-shrink:0;padding:0;font-size:1.125rem;font-weight:700;line-height:normal}:host(.dark) .vocab-matching-input{background-color:var(--input-bg-light)}.vocab-matching-input:focus{border-color:var(--primary-color);outline:none;box-shadow:0 0 0 3px #4f46e51a}.vocab-matching-input:disabled{cursor:not-allowed;background-color:#f1f5f9}:host(.dark) .vocab-matching-input:disabled{background-color:#1e293b}.vocab-definition-text{color:var(--text-light);flex:1;font-size:1em}.vocab-matching-row.correct{background-color:var(--green-light-bg)}.vocab-matching-row.incorrect{background-color:var(--red-light-bg)}.vocab-matching-row.correct .vocab-matching-input{border-color:var(--green-color)}.vocab-matching-row.incorrect .vocab-matching-input{border-color:var(--red-color)}.vocab-matching-row .feedback-icon{white-space:nowrap;font-size:.9em;font-weight:600}@media (width<=768px){.vocab-def-label{white-space:normal;max-width:60%;display:inline-block}}.cloze-word-bank{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.5rem;margin-bottom:1.25rem;padding:1rem}:host(.dark) .cloze-word-bank{background-color:var(--input-bg-dark)}.cloze-bank-title{color:var(--subtle-text-light);text-transform:uppercase;letter-spacing:.05em;margin-bottom:.75rem;font-size:.9em;font-weight:600}.cloze-bank-words{flex-wrap:wrap;align-items:center;gap:.5rem;display:flex}.cloze-bank-word{background-color:var(--card-bg-light);color:var(--text-light);border:1px solid var(--border-light);cursor:default;-webkit-user-select:none;user-select:none;border-radius:.375rem;padding:.45rem .75rem;font-size:.9em;font-weight:600;box-shadow:0 1px 2px #0000000d}.cloze-text{color:var(--text-light);font-size:1.05em;line-height:1.8}.cloze-blank{border:none;border-bottom:2px solid var(--border-light);min-width:6.5ch;max-width:12ch;font-size:inherit;color:var(--text-light);text-align:center;vertical-align:baseline;background:0 0;margin:0 .35rem;padding:.15rem .4rem;font-family:inherit;transition:border-color .18s,background-color .18s;display:inline-block}.cloze-blank:focus{border-bottom-color:var(--primary-color);background:#4f46e508;border-radius:.25rem;outline:none}.cloze-blank.correct{border-bottom-color:var(--green-color);background-color:var(--green-light-bg);border-bottom-color:var(--green-color);background-color:var(--green-light-bg);border-radius:.25rem}.cloze-blank.incorrect{border-bottom-color:var(--red-color);background-color:var(--red-light-bg);border-radius:.25rem}.cloze-score{text-align:center;margin-top:1rem;font-size:1.1em;font-weight:600}@media (width<=768px){.cloze-bank-words{gap:.375rem}.cloze-bank-word{padding:.375rem .5rem;font-size:.8em}.cloze-blank{min-width:5.5ch}.cloze-text{font-size:1em}.cloze-blank{min-width:80px;padding:.25em .375em}}.vocab-section-header,.cloze-section-header{color:var(--primary-color);border-bottom:2px solid var(--primary-color);margin:1.5rem 0 1rem;padding-bottom:.5rem;font-size:1.1em;font-weight:600}.cloze-section-wrapper{margin-bottom:2rem}.cloze-section-wrapper:last-child{margin-bottom:0}.score-report-card{background-color:var(--card-bg-light);border:2px solid var(--primary-color);text-align:center;border-radius:1rem;margin:1rem 0;padding:2rem;position:relative;overflow:hidden;box-shadow:0 4px 20px #4f46e526}.score-report-card:before{content:\"\";background:linear-gradient(90deg, var(--primary-color), var(--primary-hover));height:6px;position:absolute;top:0;left:0;right:0}.result-title{color:var(--primary-color);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.5rem;font-size:1.5em;font-weight:800}.result-subtitle{color:var(--subtle-text-light);text-transform:uppercase;letter-spacing:.05em;margin-bottom:1.5rem;font-size:1em;font-weight:600}.student-details{border:1px solid var(--border-light);background-color:var(--input-bg-light);text-align:left;border-radius:.5rem;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:2rem;padding:1.25rem;font-size:1.1em;display:grid}.student-details strong{color:var(--primary-color)}.score-summary{margin-bottom:2rem}.score-main-compact{color:var(--primary-color);margin-bottom:.25rem;font-size:2.5em;font-weight:800}.score-percentage{color:var(--slate-color);font-size:1.2em;font-weight:600}.score-breakdown-compact{border-top:1px dashed var(--border-light);flex-direction:column;gap:.75rem;max-width:300px;margin:0 auto;padding:1rem;display:flex}.score-section{justify-content:space-between;align-items:center;font-weight:600;display:flex}.score-label{color:var(--subtle-text-light)}.score-value{color:var(--text-light)}.post-score-section{text-align:center;margin:2rem 0}.post-score-actions{justify-content:center;gap:1rem;margin-top:1.5rem;display:flex}#validationMessage.success{background-color:var(--green-light-bg);color:var(--green-color);border-radius:2rem;align-items:center;gap:.5rem;margin-bottom:0;padding:.75rem 1.5rem;font-size:.95rem;font-weight:600;display:inline-flex}#validationMessage.error{color:var(--red-color);background-color:var(--red-light-bg);border-radius:2rem;margin-bottom:0;padding:.75rem 1.5rem;font-size:.95rem;font-weight:600;display:inline-flex}#validationMessage.warning{color:var(--warning-color);background-color:var(--warning-light-bg);border:1px solid var(--warning-color);border-radius:2rem;align-items:center;gap:.6rem;margin-bottom:0;padding:.9rem 1.8rem;font-size:1.1rem;font-weight:700;display:inline-flex;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.voice-overlay{-webkit-backdrop-filter:blur(4px);z-index:2000;background:#0f172ab3;justify-content:center;align-items:center;display:flex;position:fixed;inset:0}.voice-card{background:var(--card-bg-light);border:1px solid var(--border-light);border-radius:1.25rem;flex-direction:column;width:90%;max-width:400px;max-height:80vh;display:flex;overflow:hidden;box-shadow:0 25px 50px -12px #00000040}.voice-card-header{background:var(--primary-color);color:#fff;justify-content:space-between;align-items:center;padding:1.25rem;display:flex}.voice-card-header h3{margin:0;font-size:1.25em;font-weight:700}.close-voice-btn{color:#fff;cursor:pointer;background:#fff3;border:none;border-radius:50%;justify-content:center;align-items:center;width:2rem;height:2rem;font-size:1.5em;transition:background .2s;display:flex}.close-voice-btn:hover{background:#ffffff4d}.voice-list{flex-direction:column;flex:1;gap:.5rem;padding:1rem;display:flex;overflow-y:auto}.voice-option-btn{background:var(--input-bg-light);border:1px solid var(--border-light);cursor:pointer;color:var(--text-light);font-family:var(--font-sans);border-radius:.75rem;justify-content:space-between;align-items:center;padding:.875rem 1rem;transition:all .2s;display:flex}.voice-option-btn:hover{border-color:var(--primary-color);background:#eff6ff}:host(.dark) .voice-option-btn:hover{background:#1e293b}.voice-option-btn.active{border-color:var(--primary-color);color:var(--primary-color);box-shadow:0 0 0 1px var(--primary-color);background:#eff6ff;font-weight:600}:host(.dark) .voice-option-btn.active{background:#1e293b}.voice-option-btn .badge{background:var(--green-color);color:#fff;text-transform:uppercase;border-radius:2rem;padding:.2rem .5rem;font-size:.75em;font-weight:700}#voice-btn{cursor:pointer;color:#fff;background-color:#ffffff1a;border:1px solid #0000;border-radius:9999px;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;padding:0;transition:background-color .2s,transform .2s;display:inline-flex;position:absolute;top:1rem;right:4rem}#voice-btn svg{width:1.25rem;height:1.25rem}.retry-section{background-color:var(--input-bg-light);border:1px dashed var(--border-light);border-radius:.6rem;margin-top:1rem;margin-bottom:1rem;padding:1.25rem}.retry-title{color:var(--text-light);margin-top:0;margin-bottom:.75rem;font-size:.95em;font-weight:600}.retry-controls{align-items:center;gap:.75rem;display:flex}.retry-controls .form-input{flex:1;margin:0}.retry-controls .button{white-space:nowrap;width:auto;margin:0}.tab-away-banner{z-index:50;background-color:var(--red-light-bg);max-width:800px;color:var(--red-color);border:1px solid var(--red-color);text-align:center;border-radius:.5rem;margin:0 auto 1rem;padding:.875rem 1.25rem;font-size:.95em;font-weight:600;position:sticky;top:0;box-shadow:0 4px 12px #ef444440}:host(.tab-away) .container{border:3px solid var(--red-color);box-shadow:0 0 0 4px var(--red-light-bg);border-radius:.75rem;transition:border-color .15s,box-shadow .15s}.browser-prompt-overlay{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:10000;color:#fff;text-align:center;background:#0f172ae6;justify-content:center;align-items:center;padding:2em;display:none;position:fixed;inset:0}.browser-prompt-card{color:#1e293b;background:#fff;border-radius:1.5em;max-width:400px;padding:2.5em;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{color:#b45309;-webkit-text-fill-color:initial;background:0 0;margin-bottom:.5em;font-size:1.5em}.browser-prompt-card p{color:#475569;margin-bottom:1.5em;line-height:1.5}.browser-action-btn{color:#fff;cursor:pointer;background-color:#ca8a04;border-radius:9999px;padding:.75em 1.5em;font-weight:700;text-decoration:none;transition:background-color .2s;display:inline-block}.browser-action-btn:hover{background-color:#a16207}.short-answer-badge{color:var(--subtle-text-light);background-color:var(--input-bg-light);border:1px solid var(--border-light);vertical-align:middle;border-radius:.25rem;margin-left:.5rem;padding:.2rem .5rem;font-size:.8em;font-weight:500;display:inline-block}.short-answer-container{margin-top:.5rem}.short-answer-input.submitted{opacity:.7;cursor:not-allowed}textarea.short-answer-input{resize:none;font-family:inherit;line-height:1.5;overflow-y:hidden}.score-note-written{color:var(--subtle-text-light);text-align:center;margin-top:.75rem;font-size:.85em;font-style:italic}.written-answers-section{border-top:1px dashed var(--border-light);text-align:left;margin-top:1rem;padding-top:1rem}.written-answers-title{color:var(--text-light);margin-bottom:.5rem;font-size:.9em;font-weight:600}.written-qa{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.25rem;margin-bottom:.75rem;padding:.5rem;font-size:.85em}.written-question{color:var(--subtle-text-light);font-weight:600}.written-answer{color:var(--text-light);white-space:pre-wrap;word-break:break-word;margin-top:.25rem}.teacher-actions-section{background-color:var(--input-bg-light);border:1px dashed var(--border-light);border-radius:.6rem;margin-top:1rem;margin-bottom:1rem;padding:1.25rem}.teacher-actions-title{color:var(--text-light);margin-top:0;margin-bottom:.75rem;font-size:.95em;font-weight:600}.teacher-actions-controls{flex-wrap:wrap;align-items:center;gap:.75rem;display:flex}.teacher-actions-controls .form-input{flex:1;min-width:150px;margin:0}.teacher-actions-controls .button{white-space:nowrap;width:auto;margin:0}#teacherResetCodeError{color:var(--red-color);margin-top:.5rem;margin-bottom:0;font-size:.9em;font-weight:500}", o = class extends HTMLElement {
	static get observedAttributes() {
		return [
			"submission-url",
			"test-mode",
			"start-code",
			"start-quiz-code",
			"code",
			"teacher-code",
			"reset-code"
		];
	}
	get testMode() {
		return this.hasAttribute("test-mode");
	}
	set testMode(e) {
		e ? this.setAttribute("test-mode", "") : this.removeAttribute("test-mode");
	}
	get startCode() {
		return this.getAttribute("start-code") || this.getAttribute("start_code") || this.getAttribute("start-quiz-code") || this.getAttribute("code") || r(this).startCode || "1234";
	}
	set startCode(e) {
		e == null ? (this.removeAttribute("start-code"), this.removeAttribute("code")) : this.setAttribute("start-code", e);
	}
	get code() {
		return this.startCode;
	}
	set code(e) {
		this.startCode = e;
	}
	get teacherCode() {
		return this.getAttribute("teacher-code") || this.getAttribute("teacher_code") || this.getAttribute("reset-code") || this.getAttribute("reset_code") || r(this).resetCode || "7676";
	}
	set teacherCode(e) {
		e == null ? (this.removeAttribute("teacher-code"), this.removeAttribute("reset-code")) : this.setAttribute("teacher-code", e);
	}
	get resetCode() {
		return this.teacherCode;
	}
	set resetCode(e) {
		this.teacherCode = e;
	}
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this.questionBank = [], this.passages = [], this.selectedVoiceName = null, this.isPlayingAll = !1, this.instructions = [], this.questionGroups = [], this.orderedSections = [], this.currentQuestions = [], this.score = 0, this.questionsAnswered = 0, this.questionsToDisplay = 5, this.totalQuestions = 0, this.audioPlayer = null, this.utterance = null, this.audioSrc = "", this.currentAudioButton = null, this.submissionUrl = "", this.activityTitle = "", this.passage = "", this.vocabularySections = [], this.vocabUserChoices = {}, this.vocabScore = 0, this.vocabSubmitted = !1, this.clozeSections = [], this.clozeAnswers = {}, this.clozeScore = 0, this.clozeSubmitted = !1, this.userQuestionAnswers = {}, this.quizUnlocked = !0, this.autoSubmissionInProgress = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.ttsPaused = !1, this.tabAwayCount = 0, this.isVisibilityLocked = !1, this._visibilityHandler = null;
	}
	attributeChangedCallback(e, t) {
		e === "submission-url" ? this.submissionUrl = t : e === "test-mode" && this.isConnected && (t === null ? this.unlockQuizContent() : this.lockQuizContent(this.isVisibilityLocked));
	}
	_normalizeText(e) {
		return typeof e == "string" ? e.trim().toLowerCase().replace(/['’‘]/g, "'").replace(/["“”]/g, "\"").replace(/\s+/g, " ") : String(e || "");
	}
	connectedCallback() {
		this._visibilityHandler = () => this._handleVisibilityChange(), document.addEventListener("visibilitychange", this._visibilityHandler), requestAnimationFrame(async () => {
			let e = r(this);
			if (this.submissionUrl = e.submissionUrl, this.config) typeof this.config == "object" ? this.originalContent = JSON.stringify(this.config) : this.originalContent = String(this.config);
			else if (this.hasAttribute("config")) this.originalContent = this.getAttribute("config");
			else if (e.dataUrl) try {
				let t = await fetch(e.dataUrl);
				this.originalContent = await t.text();
			} catch (e) {
				console.error("Error loading quiz content from dataUrl:", e);
			}
			else this.querySelector("script[type=\"text/markdown\"]") ? this.originalContent = this.querySelector("script[type=\"text/markdown\"]").textContent : this.querySelector("script[type=\"application/json\"]") ? this.originalContent = this.querySelector("script[type=\"application/json\"]").textContent : this.originalContent = this.textContent;
			if (this.hasAttribute("submission-url") && (this.submissionUrl = this.getAttribute("submission-url")), this.loadTemplate(), this.setAttribute("translate", "no"), this.classList.add("notranslate"), !document.querySelector("meta[name=\"google\"][content=\"notranslate\"]")) {
				let e = document.createElement("meta");
				e.name = "google", e.content = "notranslate", document.head.appendChild(e);
			}
			if (!this._shouldShowAudioControls()) {
				let e = this.shadowRoot.getElementById("voice-btn");
				e && e.classList.add("hidden");
			}
			this.checkBrowserSupport(), window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = () => this._updateVoiceList(), this._updateVoiceList()), this.parseContent(), this.setupEventListeners(), this.generateQuiz();
			let t = this.loadFromLocalStorage();
			t ? this.restoreQuizState(t) : this.testMode ? this.lockQuizContent(!1) : this.unlockQuizContent();
		});
	}
	disconnectedCallback() {
		this._visibilityHandler &&= (document.removeEventListener("visibilitychange", this._visibilityHandler), null);
	}
	_handleVisibilityChange() {
		this.testMode && (document.hidden ? (this.tabAwayCount++, this.classList.add("tab-away"), this._updateTabAwayBanner(), this.quizUnlocked && this.lockQuizContent(!0), this.saveCurrentStateToLocalStorage()) : this.classList.remove("tab-away"));
	}
	_updateTabAwayBanner() {
		let e = this.shadowRoot.getElementById("tabAwayBanner");
		if (e) if (this.tabAwayCount > 0) {
			let t = this.tabAwayCount === 1 ? "time" : "times";
			e.textContent = `⚠️ Warning: You left the quiz ${this.tabAwayCount} ${t}. Please stay focused on the test.`, e.classList.remove("hidden");
		} else e.classList.add("hidden");
	}
	loadTemplate() {
		try {
			let e = document.createElement("template");
			e.innerHTML = `<style>${a}</style>${i}`, this.shadowRoot.firstChild && (this.shadowRoot.innerHTML = ""), this.shadowRoot.appendChild(e.content.cloneNode(!0)), console.log("Inlined template applied successfully");
		} catch (e) {
			console.error("Failed to apply inlined template:", e), this.shadowRoot.innerHTML = `
                <div style="padding: 2rem; text-align: center; font-family: Arial, sans-serif; background: #fee2e2; color: #dc2626; border-radius: 0.5rem; margin: 1rem;">
                    <h2>⚠️ Template Load Error</h2>
                    <p>Could not apply inlined template files.</p>
                    <details style="margin-top: 1rem; text-align: left;">
                        <summary style="cursor: pointer; font-weight: bold;">Error Details:</summary>
                        <pre style="background: white; padding: 1rem; border-radius: 0.25rem; margin-top: 0.5rem; overflow: auto;">${e.message}</pre>
                    </details>
                </div>
            `;
		}
	}
	_getBestVoice(e = "en-US") {
		return t(window.speechSynthesis, e);
	}
	_updateVoiceList() {
		if (!window.speechSynthesis) return;
		let e = window.speechSynthesis.getVoices(), t = this.shadowRoot.querySelector(".voice-list");
		if (!t) return;
		let n = "en-US", r = e.filter((e) => e.lang.split(/[-_]/)[0].toLowerCase() === n.split("-")[0]), i = this._getBestVoice(n);
		t.innerHTML = "", r.sort((e, t) => e.name.localeCompare(t.name)), r.forEach((e) => {
			let n = document.createElement("button");
			n.type = "button", n.classList.add("voice-option-btn"), this.selectedVoiceName === e.name && n.classList.add("active");
			let r = `<span>${e.name}</span>`;
			i && e.name === i.name && (r += "<span class=\"badge\">Best</span>"), n.innerHTML = r, n.onclick = () => {
				this.selectedVoiceName = e.name, this._updateVoiceList(), this._hideVoiceOverlay();
			}, t.appendChild(n);
		});
	}
	_showVoiceOverlay() {
		let e = this.shadowRoot.querySelector(".voice-overlay");
		e && (e.classList.remove("hidden"), this._updateVoiceList());
	}
	_hideVoiceOverlay() {
		let e = this.shadowRoot.querySelector(".voice-overlay");
		e && e.classList.add("hidden");
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
					e.preventDefault(), alert("Please open this page in Safari or Chrome for audio features.");
				}, n.textContent = "Use Safari / Chrome");
			}
		}
	}
	parseContent() {
		let e = this.originalContent || this.textContent;
		console.log("Parsing content:", e.substring(0, 200) + "...");
		let t = e.split("---").map((e) => e.trim());
		if (t.length >= 1) {
			let e = t[0].trim().split("\n").map((e) => e.trim()).filter((e) => e.length > 0);
			e.length > 0 && (this.activityTitle = e[0]);
		}
		let n = null, r = null;
		for (let e = 1; e < t.length; e++) {
			let i = t[e].split("\n");
			if (i.length === 0) continue;
			let a = (i[0] || "").trim().toLowerCase(), o = i.slice(1).join("\n");
			if (a.startsWith("vocab")) {
				let e = a.match(/vocab(?:-(\d+))?/), t = e && e[1] ? parseInt(e[1]) : null;
				this.parseVocabulary(o, t), this.orderedSections.push({
					type: "vocab",
					data: { vocabCount: t }
				}), n = "vocab";
			} else if (a.startsWith("cloze")) {
				let e = a.match(/cloze(?:-(\d+))?/), t = e && e[1] ? parseInt(e[1]) : null;
				this.parseCloze(o, t), this.orderedSections.push({
					type: "cloze",
					data: {
						clozeCount: t,
						text: o
					}
				}), n = "cloze";
			} else if (a.startsWith("instructions")) {
				let e = this.passages.length, { heading: t, body: i } = this.extractHeadingAndBody(o, `Instructions ${this.instructions.length + 1}`);
				this.instructions.push({
					sectionId: e,
					heading: t,
					body: i
				}), this.passages.push({
					text: i || t,
					sectionId: e,
					listening: !1,
					isInstruction: !0
				}), this.orderedSections.push({
					type: "instructions",
					sectionId: e,
					heading: t,
					body: i
				}), r = e, n = "instructions";
			} else if (a.startsWith("questions")) {
				let e = a.match(/questions(?:-(\d+))?/), t = e && e[1] ? parseInt(e[1]) : null, i = this.parseQuestions(o), s = n === "text" || n === "instructions" || n === "questions" && this.orderedSections.length > 0 && this.orderedSections[this.orderedSections.length - 1].tiedToPassage;
				r === null ? (this.questionGroups.push({
					sectionId: null,
					questions: i,
					maxQuestions: t
				}), this.orderedSections.push({
					type: "questions",
					sectionId: null,
					questions: i,
					maxQuestions: t,
					tiedToPassage: !1
				})) : (this.questionGroups.push({
					sectionId: r,
					questions: i,
					maxQuestions: t
				}), this.orderedSections.push({
					type: "questions",
					sectionId: r,
					questions: i,
					maxQuestions: t,
					tiedToPassage: s
				})), n = "questions";
			} else switch (a) {
				case "text":
				case "text-listening":
					let e = a === "text-listening", t = this.passages.length;
					this.passages.push({
						text: o,
						sectionId: t,
						listening: e
					}), this.passage = o, r = t, this.orderedSections.push({
						type: "text",
						sectionId: t,
						text: o,
						listening: e
					}), n = "text";
					break;
				case "audio":
					this.parseAudio(o), this.orderedSections.push({
						type: "audio",
						audioSrc: this.audioSrc
					}), n = "audio";
					break;
				default: n = null;
			}
		}
		this.activityTitle && (this.shadowRoot.getElementById("quizTitle").textContent = this.activityTitle);
		let i = this.questionGroups.reduce((e, t) => e + (t.questions ? t.questions.length : 0), 0);
		console.log("Parsed:", {
			title: this.activityTitle,
			passages: this.passages.length,
			passageLength: this.passage.length,
			vocabularySections: this.vocabularySections.length,
			clozeSections: this.clozeSections.length,
			audioSrc: this.audioSrc,
			questionsCount: i
		});
	}
	parseVocabulary(e, t = null) {
		if (!e) return;
		let n = e.split(/\r?\n/).map((e) => e.trim()).filter(Boolean), r = n.length > 0 ? n.slice() : [e.trim()], i = (e) => {
			let t = {};
			return e.forEach((e) => {
				let n = e.indexOf(":");
				if (n === -1) return;
				let r = e.slice(0, n).trim(), i = e.slice(n + 1).trim().replace(/,$/, "");
				r && i && (t[r] = i);
			}), t;
		}, a = i(r);
		Object.keys(a).length <= 1 && e.indexOf(",") !== -1 && (a = i(e.split(",").map((e) => e.trim()).filter(Boolean)));
		let o;
		if (t && Object.keys(a).length > t) {
			let e = Object.entries(a);
			this.shuffleArray(e);
			let n = e.slice(0, t);
			o = Object.fromEntries(n);
		} else o = a;
		this.vocabularySections.push({
			vocabulary: o,
			sectionId: this.vocabularySections.length
		}), console.log("Vocabulary section parsed. Words in this section:", Object.keys(o).length, "Max words:", t);
	}
	parseAudio(e) {
		if (!e) return;
		let t = e.match(/audio-src\s*=\s*(.+)/);
		t && (this.audioSrc = t[1].trim());
	}
	parseCloze(e, t = null) {
		if (!e) return;
		let n = e.match(/\*([^*]+)\*/g), r = [];
		n && (r = n.map((e) => e.replace(/\*/g, "")), t && r.length > t && (this.shuffleArray(r), r = r.slice(0, t))), this.clozeSections.push({
			text: e,
			words: r,
			sectionId: this.clozeSections.length
		}), console.log("Cloze section parsed. Total words available:", n ? n.length : 0, "Words to remove:", r.length, "Max blanks:", t);
	}
	parseQuestions(e, t = null) {
		if (!e) return [];
		let n = e.split("\n").map((e) => e.trim()).filter((e) => e.length > 0), r = null, i = [];
		for (let e of n) if (e.startsWith("Q:") || e.startsWith("Q.")) r && i.push(r), r = {
			q: e.substring(2).trim(),
			o: [],
			a: "",
			e: ""
		};
		else if (e.startsWith("A:") && r) {
			let t = e.substring(2).trim(), n = t.includes("[correct]"), i = t.replace("[correct]", "").trim();
			r.o.push(i), n && (r.a = i);
		} else e.startsWith("E:") && r && (r.e = e.substring(2).trim());
		return r && i.push(r), console.log("Questions parsed. Total questions parsed:", i.length, "Max questions (deferred):", t), i;
	}
	extractHeadingAndBody(e, t = "Instructions") {
		let n = (e || "").split("\n"), r = "", i = [];
		for (let e of n) !r && e.trim().length > 0 ? r = e.trim() : i.push(e);
		r ||= t;
		let a = i.join("\n").trim();
		return {
			heading: r,
			body: a
		};
	}
	generateVocabMatching() {
		let e = this.shadowRoot.getElementById("vocabSection"), t = this.shadowRoot.getElementById("vocabGrid");
		if (this.vocabularySections.length === 0) {
			e.classList.add("hidden");
			return;
		}
		e.classList.remove("hidden"), t.innerHTML = "", this.vocabScore = 0, this.vocabUserChoices = {}, this.vocabSubmitted = !1, this.vocabularySections.forEach((e, n) => {
			let { vocabulary: r, sectionId: i } = e;
			if (!r) return;
			if (this.vocabularySections.length > 1) {
				let e = document.createElement("div");
				e.className = "vocab-section-header", e.innerHTML = `<h4>Vocabulary Set ${n + 1}</h4>`, t.appendChild(e);
			}
			let a = Object.keys(r), o = Object.values(r);
			this.shuffleArray(o);
			let s = document.createElement("div");
			s.className = "vocab-grid-table";
			let c = document.createElement("div");
			c.className = "vocab-grid-header";
			let l = document.createElement("div");
			if (l.className = "vocab-grid-header-cell", l.textContent = "Word", c.appendChild(l), o.forEach((e) => {
				let t = document.createElement("div");
				t.className = "vocab-grid-header-cell", t.textContent = e, c.appendChild(t);
			}), s.appendChild(c), a.forEach((e, t) => {
				let n = document.createElement("div");
				n.className = "vocab-grid-row";
				let a = document.createElement("div");
				a.className = "vocab-grid-cell vocab-word-cell", a.textContent = e, n.appendChild(a);
				let c = r[e], l = o.filter((e) => e !== c);
				this.shuffleArray(l);
				let u = [c, ...l.slice(0, 3)];
				this.shuffleArray(u), u.forEach((e, r) => {
					let a = document.createElement("div");
					a.className = "vocab-grid-cell vocab-option-cell";
					let o = document.createElement("div");
					o.className = "vocab-radio-container";
					let s = document.createElement("input");
					s.type = "radio", s.name = `vocab-${i}-${t}`, s.value = e, s.id = `vocab-${i}-${t}-${r}`, o.appendChild(s), a.appendChild(o);
					let c = document.createElement("span");
					c.className = "vocab-def-label", c.textContent = e, a.appendChild(c), n.appendChild(a);
				}), s.appendChild(n);
			}), t.appendChild(s), n < this.vocabularySections.length - 1) {
				let e = document.createElement("div");
				e.style.marginBottom = "2rem", t.appendChild(e);
			}
		});
	}
	generateCloze() {
		let e = this.shadowRoot.getElementById("clozeSection"), t = this.shadowRoot.getElementById("clozeContainer");
		if (this.clozeSections.length === 0) {
			e.classList.add("hidden");
			return;
		}
		if (e.classList.remove("hidden"), this.clozeScore = 0, this.clozeAnswers = {}, this.clozeSubmitted = !1, !t) {
			let t = document.createElement("div");
			t.id = "clozeContainer", e.appendChild(t);
		}
		let n = this.shadowRoot.getElementById("clozeContainer");
		n.innerHTML = "", this.clozeSections.forEach((e, t) => {
			let { text: r, words: i, sectionId: a } = e, o = document.createElement("div");
			if (o.className = "cloze-section-wrapper", this.clozeSections.length > 1) {
				let e = document.createElement("h4");
				e.className = "cloze-section-header", e.textContent = `Fill in the Blanks - Section ${t + 1}`, o.appendChild(e);
			}
			let s = document.createElement("div");
			s.className = "cloze-word-bank", s.innerHTML = `
                <div class="cloze-bank-title">Word Bank</div>
                <div class="cloze-bank-words">
                    ${i.map((e) => `<span class="cloze-bank-word">${e}</span>`).join("")}
                </div>
            `, o.appendChild(s);
			let c = document.createElement("div");
			c.className = "cloze-text";
			let l = r, u = 0;
			i.forEach((e) => {
				let t = RegExp(`\\*${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\*`, "gi");
				l = l.replace(t, () => {
					let t = `<input type="text" class="cloze-blank" data-answer="${e.toLowerCase()}" data-section-id="${a}" data-blank-index="${u}" autocomplete="off" spellcheck="false" title="Fill in the blank">`;
					return u++, t;
				});
			}), l = l.replace(/\*([^*]+)\*/g, "$1"), l = this.addLineBreaksToHtml(l), c.innerHTML = l, o.appendChild(c), t < this.clozeSections.length - 1 && (o.style.marginBottom = "2rem"), n.appendChild(o);
		});
	}
	renderVocabInline(e, t, n) {
		let { vocabulary: r, sectionId: i } = e, a = this.vocabularySections.length > 1 ? `Vocabulary Set ${n + 1}` : "Vocabulary", { card: o, content: s } = this.createSectionCard(a, { cardClasses: ["vocab-card"] }), c = Object.keys(r).map((e, t) => ({
			letter: String.fromCharCode(65 + t),
			word: e,
			definition: r[e]
		})), l = document.createElement("div");
		l.className = "vocab-word-bank", l.innerHTML = `
            <div class="vocab-bank-title">Word Bank</div>
            <div class="vocab-bank-items">
                ${c.map((e) => `<span class="vocab-bank-item">${e.letter}: ${e.word.toUpperCase()}</span>`).join("")}
            </div>
        `, s.appendChild(l);
		let u = document.createElement("div");
		u.className = "vocab-matching-container";
		let d = [...c];
		this.shuffleArray(d), d.forEach((e) => {
			let t = document.createElement("div");
			t.className = "vocab-matching-row";
			let n = document.createElement("div");
			n.className = "vocab-matching-input-group";
			let r = document.createElement("input");
			r.type = "text", r.className = "vocab-matching-input", r.maxLength = 1, r.dataset.sectionId = i, r.dataset.word = e.word, r.dataset.correctLetter = e.letter, r.autocomplete = "off", r.setAttribute("autocapitalize", "characters"), r.setAttribute("autocorrect", "off"), r.setAttribute("spellcheck", "false"), r.inputMode = "text", r.title = "Enter the letter for this definition", n.appendChild(r), t.appendChild(n);
			let a = document.createElement("div");
			a.className = "vocab-definition-text", a.textContent = e.definition, t.appendChild(a), u.appendChild(t);
		}), s.appendChild(u), t.appendChild(o);
	}
	renderClozeInline(e, t, n) {
		let { text: r, words: i, sectionId: a } = e, o = this.clozeSections.length > 1 ? `Fill in the Blanks - Section ${n + 1}` : "Fill in the Blanks", { card: s, content: c } = this.createSectionCard(o, { cardClasses: ["cloze-card"] }), l = document.createElement("div");
		l.className = "cloze-word-bank", l.innerHTML = `
            <div class="cloze-bank-title">Word Bank</div>
            <div class="cloze-bank-words">
                ${i.map((e) => `<span class="cloze-bank-word">${e}</span>`).join("")}
            </div>
        `, c.appendChild(l);
		let u = r, d = 0;
		i.forEach((e) => {
			let t = RegExp(`\\*${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\*`, "gi");
			u = u.replace(t, () => {
				let t = `<input type="text" class="cloze-blank" data-answer="${e.toLowerCase()}" data-section-id="${a}" data-blank-index="${d}" autocomplete="off" spellcheck="false" inputmode="text" autocapitalize="none" autocorrect="off" title="Fill in the blank">`;
				return d++, t;
			});
		}), u = u.replace(/\*([^*]+)\*/g, "$1"), u = this.addLineBreaksToHtml(u);
		let f = document.createElement("div");
		f.className = "cloze-text", f.innerHTML = u, c.appendChild(f), t.appendChild(s);
	}
	handleVocabAnswer(e) {
		let t = e.target;
		if (t.type === "text" && t.classList.contains("vocab-matching-input")) {
			let e = t.value.trim().toUpperCase();
			t.value !== e && (t.value = e);
			let n = `${parseInt(t.dataset.sectionId)}-${t.dataset.word}`;
			e ? this.vocabUserChoices[n] = e : delete this.vocabUserChoices[n], this.updateCheckScoreButtonState();
		}
	}
	updateCheckScoreButtonState() {
		let e = this.vocabularySections.length === 0 || Object.keys(this.vocabUserChoices).length === this.getTotalVocabWords(), t = this.totalQuestions === 0 || this.checkAllQuestionsAnswered(), n = this.checkAllClozeAnswered();
		if (e && t && n) {
			let e = this.shadowRoot.getElementById("checkScoreButton");
			e && (e.disabled = !1);
		}
	}
	handleClozeAnswer(e) {
		if (e.target.type !== "text" || !e.target.classList.contains("cloze-blank")) return;
		let t = e.target, n = t.dataset.sectionId, r = t.dataset.blankIndex, i = t.value.trim().toLowerCase(), a = `${n}-${r}`;
		if (this.clozeAnswers[a] = i, this.checkAllClozeAnswered()) {
			let e = this.vocabularySections.length === 0 || Object.keys(this.vocabUserChoices).length === this.getTotalVocabWords(), t = this.totalQuestions === 0 || this.checkAllQuestionsAnswered();
			if (e && t) {
				let e = this.shadowRoot.getElementById("checkScoreButton");
				e.disabled = !1;
			}
		}
	}
	handleShortAnswer(e) {
		if (!e.target.classList.contains("short-answer-input")) return;
		let t = e.target, n = t.name, r = parseInt(n.substring(1)), i = t.value.trim();
		i ? (this.userQuestionAnswers[r] = i, t.dataset.answered = "true") : (delete this.userQuestionAnswers[r], delete t.dataset.answered);
		let a = Object.keys(this.userQuestionAnswers).length;
		this.questionsAnswered = a, this.updateCheckScoreButtonState();
	}
	autoExpandTextarea(e) {
		e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
	}
	checkAllClozeAnswered() {
		let e = this.clozeSections.reduce((e, t) => e + t.words.length, 0);
		return Object.keys(this.clozeAnswers).filter((e) => this.clozeAnswers[e].length > 0).length === e;
	}
	getTotalVocabWords() {
		return this.vocabularySections.reduce((e, t) => e + (t.vocabulary ? Object.keys(t.vocabulary).length : 0), 0);
	}
	formatTextWithLineBreaks(e) {
		return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>") : "";
	}
	addLineBreaksToHtml(e) {
		return e ? e.replace(/\n/g, "<br>") : "";
	}
	createSectionCard(e, t = {}) {
		let { descriptionHtml: n = "", cardClasses: r = [] } = t, i = document.createElement("div");
		i.className = ["section-card", ...r].filter(Boolean).join(" ");
		let a = document.createElement("div");
		if (a.className = "section-card-header", a.textContent = e, i.appendChild(a), n) {
			let e = document.createElement("div");
			e.className = "section-card-description", e.innerHTML = n, i.appendChild(e);
		}
		let o = document.createElement("div");
		return o.className = "section-card-content", i.appendChild(o), {
			card: i,
			content: o
		};
	}
	showVocabScore() {
		this.vocabScore = 0, this.getTotalVocabWords(), this.vocabularySections.forEach((e) => {
			let { vocabulary: t, sectionId: n } = e;
			t && Object.keys(t).forEach((e) => {
				let t = `${n}-${e}`, r = this.vocabUserChoices[t], i = this.shadowRoot.querySelector(`.vocab-matching-input[data-section-id="${n}"][data-word="${e}"]`);
				if (!i) return;
				let a = i.dataset.correctLetter, o = i.closest(".vocab-matching-row");
				if (i.disabled = !0, !this.testMode) {
					let e = o.querySelector(".feedback-icon");
					e || (e = document.createElement("span"), e.className = "feedback-icon", o.appendChild(e)), r === a ? (o.classList.add("correct"), e.textContent = " ✅") : (o.classList.add("incorrect"), e.textContent = " ❌");
				}
				r === a && this.vocabScore++;
			});
		}), this.vocabSubmitted = !0;
	}
	showClozeScore() {
		this.clozeScore = 0, this.clozeSections.reduce((e, t) => e + t.words.length, 0), this.shadowRoot.querySelectorAll(".cloze-blank").forEach((e) => {
			let t = this._normalizeText(e.dataset.answer), n = this._normalizeText(e.value) === t;
			n && this.clozeScore++, this.testMode || (n ? e.classList.add("correct") : e.classList.add("incorrect")), e.disabled = !0;
		}), this.clozeSubmitted = !0;
	}
	setupEventListeners() {
		[
			"copy",
			"cut",
			"paste",
			"contextmenu",
			"dragstart",
			"selectstart"
		].forEach((e) => {
			this.shadowRoot.addEventListener(e, (e) => e.preventDefault()), this.addEventListener(e, (e) => e.preventDefault());
		});
		let e = (e) => {
			(e.ctrlKey || e.metaKey) && [
				"c",
				"v",
				"x",
				"a",
				"C",
				"V",
				"X",
				"A"
			].includes(e.key) && e.preventDefault();
		};
		this.shadowRoot.addEventListener("keydown", e), this.addEventListener("keydown", e);
		let t = this.shadowRoot.getElementById("quizForm"), n = this.shadowRoot.getElementById("sendButton"), r = this.shadowRoot.getElementById("tryAgainButton"), i = this.shadowRoot.querySelector(".theme-toggle"), a = this.shadowRoot.getElementById("startQuizButton");
		t && t.addEventListener("keydown", (e) => {
			!this.quizUnlocked && e.key === "Enter" && e.preventDefault();
		});
		let o = this.shadowRoot.getElementById("retrySendButton");
		t && (t.addEventListener("change", (e) => {
			this.handleAnswer(e), this.saveCurrentStateToLocalStorage();
		}), t.addEventListener("input", (e) => {
			this.handleClozeAnswer(e), this.handleVocabAnswer(e), this.handleShortAnswer(e), e.target.classList.contains("short-answer-input") && e.target.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(e.target), this.saveCurrentStateToLocalStorage();
		}), t.addEventListener("submit", (e) => this.handleSubmit(e))), n && n.addEventListener("click", () => this.sendScore()), r && r.addEventListener("click", () => this.resetQuiz()), o && o.addEventListener("click", () => this.sendScore(!1, !0));
		let s = this.shadowRoot.getElementById("reopenEditButton"), c = this.shadowRoot.getElementById("resetTryAgainButton"), l = this.shadowRoot.getElementById("teacherResetCode");
		s && s.addEventListener("click", () => this.handleReopenEdit()), c && c.addEventListener("click", () => this.handleResetTryAgain()), l && l.addEventListener("keydown", (e) => {
			e.key === "Enter" && (e.preventDefault(), this.handleReopenEdit());
		}), i && i.addEventListener("click", () => this.toggleTheme()), a && a.addEventListener("click", () => this.handleStartQuiz());
		let u = this.shadowRoot.getElementById("unlockTestButton"), d = this.shadowRoot.getElementById("lockTeacherCode"), f = this.shadowRoot.getElementById("lockErrorAlert");
		u && u.addEventListener("click", () => {
			let e = d ? d.value.trim() : "";
			if (this.isVisibilityLocked) e === this.resetCode ? (f && f.classList.add("hidden"), d && (d.value = ""), this.unlockQuizContent(), this.saveCurrentStateToLocalStorage()) : e === this.code ? f && (f.textContent = "❌ Please enter the Teacher Code, not the Start Quiz Code / กรุณากรอกรหัสครูผู้สอน ไม่ใช่รหัสเริ่มทำข้อสอบ", f.classList.remove("hidden")) : f && (f.textContent = "❌ Invalid Teacher Code / รหัสผ่านไม่ถูกต้อง", f.classList.remove("hidden"));
			else if (e === this.code) {
				f && f.classList.add("hidden");
				let t = this.getTeacherCodeInput();
				t && (t.value = e), d && (d.value = ""), this.unlockQuizContent(), this.saveCurrentStateToLocalStorage();
			} else e === this.resetCode ? f && (f.textContent = "❌ Please enter the Start Quiz Code to start the test / กรุณากรอกรหัสเริ่มทำข้อสอบ", f.classList.remove("hidden")) : f && (f.textContent = "❌ Invalid Start Quiz Code / รหัสผ่านไม่ถูกต้อง", f.classList.remove("hidden"));
		}), d && d.addEventListener("keydown", (e) => {
			e.key === "Enter" && (e.preventDefault(), u && u.click());
		}), this.getStudentInputs().forEach((e) => {
			e.addEventListener("input", () => {
				e.value.trim() !== "" && e.classList.remove("invalid"), this.quizUnlocked || this.showStudentInfoAlert();
			});
		}), this.shadowRoot.addEventListener("click", (e) => {
			let t = e.target.closest(".passage-audio-toggle");
			if (t) {
				let e = t.closest(".section-card"), n = (e ? Array.from(e.querySelectorAll(".passage-text")) : []).map((e) => e.textContent).join("\n");
				this.handlePassageTTS(t, n);
				return;
			}
			e.target.closest(".audio-toggle") && this.handleAudioToggle(), e.target.closest("#voice-btn") && this._showVoiceOverlay(), e.target.closest(".close-voice-btn") && this._hideVoiceOverlay(), e.target.closest(".voice-overlay") && !e.target.closest(".voice-card") && this._hideVoiceOverlay();
		});
	}
	shuffleArray(e) {
		for (let t = e.length - 1; t > 0; t--) {
			let n = Math.floor(Math.random() * (t + 1));
			[e[t], e[n]] = [e[n], e[t]];
		}
	}
	setAudioIcon(e) {
		let t = this.shadowRoot.querySelector(".play-icon"), n = this.shadowRoot.querySelector(".pause-icon");
		e === "playing" ? (t.classList.add("hidden"), n.classList.remove("hidden")) : (t.classList.remove("hidden"), n.classList.add("hidden"));
	}
	setPassageAudioIcon(e, t) {
		if (!e) return;
		let n = e.querySelector(".play-icon"), r = e.querySelector(".pause-icon");
		!n || !r || (t === "playing" ? (n.classList.add("hidden"), r.classList.remove("hidden")) : (n.classList.remove("hidden"), r.classList.add("hidden")));
	}
	stopAllAudio() {
		window.speechSynthesis && window.speechSynthesis.cancel(), this.audioPlayer && (this.audioPlayer.pause(), this.audioPlayer.currentTime = 0), this.ttsPaused = !1, this.setAudioIcon("paused"), this.currentAudioButton &&= (this.setPassageAudioIcon(this.currentAudioButton, "paused"), null);
	}
	handleTTS() {
		if (this.audioPlayer && !this.audioPlayer.paused && this.audioPlayer.pause(), window.speechSynthesis.speaking && this.ttsPaused) window.speechSynthesis.resume(), this.ttsPaused = !1, this.setAudioIcon("playing");
		else if (window.speechSynthesis.speaking && !this.ttsPaused) window.speechSynthesis.pause(), this.ttsPaused = !0, this.setAudioIcon("paused");
		else {
			this.stopAllAudio(), this.utterance = new SpeechSynthesisUtterance(this.passage), this.utterance.lang = "en-US";
			let e = window.speechSynthesis.getVoices().find((e) => e.name === this.selectedVoiceName);
			e ||= this._getBestVoice("en-US"), e && (this.utterance.voice = e), this.utterance.onstart = () => {
				this.setAudioIcon("playing"), this.ttsPaused = !1;
			}, this.utterance.onend = () => {
				this.setAudioIcon("paused"), this.ttsPaused = !1;
			}, this.utterance.onerror = (e) => {
				console.error("TTS Error:", e), this.setAudioIcon("paused"), this.ttsPaused = !1;
			}, window.speechSynthesis.speak(this.utterance);
		}
	}
	handleAudioFile() {
		(window.speechSynthesis.speaking || window.speechSynthesis.paused) && window.speechSynthesis.cancel(), this.audioPlayer || (this.audioPlayer = new Audio(this.audioSrc), this.audioPlayer.onplaying = () => this.setAudioIcon("playing"), this.audioPlayer.onpause = () => this.setAudioIcon("paused"), this.audioPlayer.onended = () => this.setAudioIcon("paused"), this.audioPlayer.onerror = (e) => {
			console.error("Audio file error. Falling back to TTS.", e), this.audioPlayer = null, this.handleTTS();
		}), this.audioPlayer.paused ? this.audioPlayer.play() : this.audioPlayer.pause();
	}
	handleAudioToggle() {
		this.audioSrc && this.audioSrc.trim() !== "" ? this.handleAudioFile() : this.handleTTS();
	}
	handlePassageTTS(e, t) {
		if (e) {
			if (this.currentAudioButton && this.currentAudioButton !== e && this.stopAllAudio(), window.speechSynthesis && window.speechSynthesis.speaking && this.currentAudioButton === e) {
				this.ttsPaused ? (window.speechSynthesis.resume(), this.ttsPaused = !1, this.setPassageAudioIcon(e, "playing")) : (window.speechSynthesis.pause(), this.ttsPaused = !0, this.setPassageAudioIcon(e, "paused"));
				return;
			}
			this.stopAllAudio();
			try {
				this.utterance = new SpeechSynthesisUtterance(t || ""), this.utterance.lang = "en-US";
				let n = window.speechSynthesis.getVoices().find((e) => e.name === this.selectedVoiceName);
				n ||= this._getBestVoice("en-US"), n && (this.utterance.voice = n), this.utterance.onstart = () => {
					this.setPassageAudioIcon(e, "playing"), this.currentAudioButton = e, this.ttsPaused = !1;
				}, this.utterance.onend = () => {
					this.setPassageAudioIcon(e, "paused"), this.currentAudioButton === e && (this.currentAudioButton = null, this.ttsPaused = !1);
				}, this.utterance.onerror = (t) => {
					console.error("Passage TTS Error:", t), this.setPassageAudioIcon(e, "paused"), this.currentAudioButton === e && (this.currentAudioButton = null, this.ttsPaused = !1);
				}, window.speechSynthesis.speak(this.utterance);
			} catch (e) {
				console.error("TTS not available:", e);
			}
		}
	}
	createQuestionBlock(e, t) {
		let n = `q${t}`, r = !e.o || e.o.length === 0, i = "";
		if (r) i = `
                <div class="short-answer-container">
                    <textarea name="${n}" class="form-input short-answer-input" rows="3" placeholder="Type your answer here" required></textarea>
                </div>
            `;
		else {
			let t = [...e.o];
			this.shuffleArray(t), i = t.map((e) => `
                <label class="option-label">
                    <input type="radio" name="${n}" value="${e}" class="form-radio" required>
                    <span>${e}</span>
                </label>
            `).join("");
		}
		let a = e.e ? `<div class="explanation hidden" id="explanation-${n}">
            <div class="explanation-content">
                <strong>Explanation:</strong> ${e.e}
            </div>
        </div>` : "", o = document.createElement("div");
		return o.className = "question-block", o.innerHTML = `
            <p class="question-text">${e.q}</p>
            <div class="options-group">${i}</div>
            ${a}
        `, o;
	}
	generateQuiz() {
		let e = this.shadowRoot.getElementById("checkScoreButton"), t = this.shadowRoot.getElementById("dynamicContent");
		if (!t) {
			console.error("generateQuiz failed: dynamicContent element not found in shadow DOM");
			return;
		}
		console.log("generateQuiz called, questions total:", this.totalQuestions), t.innerHTML = "", this.score = 0, this.questionsAnswered = 0, this.userQuestionAnswers = {}, e.disabled = !0;
		let n = [], r = 0, i = 0;
		this.orderedSections.forEach((e) => {
			if (e.type === "audio") {
				if (!this._shouldShowAudioControls()) return;
				let e = this.shadowRoot.querySelector(".quiz-header");
				if (e && !e.querySelector(".audio-toggle-container")) {
					let t = document.createElement("div");
					t.className = "audio-toggle-container", t.style.marginTop = "1rem", t.innerHTML = "\n                        <button type=\"button\" class=\"audio-toggle\" title=\"Play Overall Audio\">\n                            <svg class=\"play-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"5 3 19 12 5 21 5 3\"></polygon></svg>\n                            <svg class=\"pause-icon hidden\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect></svg>\n                            <span style=\"margin-left: 0.5rem; font-weight: 600;\">Play Lesson Audio</span>\n                        </button>\n                    ", e.appendChild(t);
				}
			} else if (e.type === "text") {
				let { card: n, content: r } = this.createSectionCard(e.heading || "Reading Passage", { cardClasses: ["passage-card"] }), i = document.createElement("div");
				i.className = "passage-wrapper";
				let a = document.createElement("button");
				a.type = "button", a.className = "passage-audio-toggle", a.title = "Play Passage Audio", a.innerHTML = "\n                    <svg class=\"play-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"5 3 19 12 5 21 5 3\"></polygon></svg>\n                    <svg class=\"pause-icon hidden\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect></svg>\n                ";
				let o = n.querySelector(".section-card-header");
				o && o.appendChild(a), e.text.split(/\n\s*\n/).forEach((t) => {
					let n = document.createElement("p");
					n.className = "passage-text", e.listening && n.classList.add("listening-hidden"), n.textContent = t.trim(), i.appendChild(n);
				}), r.appendChild(i), t.appendChild(n);
			} else if (e.type === "instructions") {
				let n = e.heading || "Instructions", r = e.body ? this.formatTextWithLineBreaks(e.body) : "", { card: i } = this.createSectionCard(n, {
					descriptionHtml: r,
					cardClasses: ["instruction-card"]
				});
				t.appendChild(i);
			} else if (e.type === "vocab") {
				let e = this.vocabularySections[r++];
				e && this.renderVocabInline(e, t, r - 1);
			} else if (e.type === "cloze") {
				let e = this.clozeSections[i++];
				e && this.renderClozeInline(e, t, i - 1);
			} else if (e.type === "questions") {
				let { card: r, content: i } = this.createSectionCard("Comprehension Questions", { cardClasses: ["questions-card"] }), a = document.createElement("p");
				if (a.className = "reading-instructions instruction", a.textContent = "Read each question and select the best answer from the choices below.", i.appendChild(a), t.appendChild(r), e.questions && e.questions.length > 0) {
					let t = e.maxQuestions || null, r = [...e.questions];
					t && r.length > t && (this.shuffleArray(r), r = r.slice(0, t)), r.forEach((e) => n.push({
						question: e,
						container: i
					}));
				}
			}
		}), this.currentQuestions = n.map((e) => e.question), this.totalQuestions = this.currentQuestions.length, this.currentQuestions.forEach((e, r) => {
			let i = n[r];
			(i && i.container ? i.container : t).appendChild(this.createQuestionBlock(e, r));
		});
	}
	getStudentInputs() {
		return [
			this.shadowRoot.getElementById("nickname"),
			this.shadowRoot.getElementById("homeroom"),
			this.shadowRoot.getElementById("studentId")
		].filter(Boolean);
	}
	getTeacherCodeInput() {
		return this.shadowRoot.getElementById("teacherCode");
	}
	getStorageKey() {
		return `tj-quiz-result-${(this.activityTitle || "untitled-quiz").toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
	}
	saveToLocalStorage(e) {
		try {
			let t = this.getStorageKey();
			localStorage.setItem(t, JSON.stringify({
				...e,
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			}));
		} catch (e) {
			console.warn("Failed to save to localStorage:", e);
		}
	}
	loadFromLocalStorage() {
		try {
			let e = this.getStorageKey(), t = localStorage.getItem(e);
			return t ? JSON.parse(t) : null;
		} catch (e) {
			return console.warn("Failed to load from localStorage:", e), null;
		}
	}
	clearLocalStorage() {
		try {
			let e = this.getStorageKey();
			localStorage.removeItem(e);
		} catch (e) {
			console.warn("Failed to clear localStorage:", e);
		}
	}
	saveCurrentStateToLocalStorage() {
		let e = this.getTotalVocabWords(), t = this.clozeSections.reduce((e, t) => e + t.words.length, 0), n = this.currentQuestions.filter((e) => e.o && e.o.length > 0).length, r = this.vocabScore + this.clozeScore + this.score, i = this.getTeacherCodeInput();
		this.saveToLocalStorage({
			nickname: this.shadowRoot.getElementById("nickname") ? this.shadowRoot.getElementById("nickname").value : "",
			homeroom: this.shadowRoot.getElementById("homeroom") ? this.shadowRoot.getElementById("homeroom").value : "",
			studentId: this.shadowRoot.getElementById("studentId") ? this.shadowRoot.getElementById("studentId").value : "",
			teacherCode: i ? i.value : "",
			vocabScore: this.vocabScore,
			clozeScore: this.clozeScore,
			score: this.score,
			totalPossible: e + t + n,
			totalEarned: r,
			scoreSentToServer: this.scoreSentToServer,
			userQuestionAnswers: this.userQuestionAnswers,
			clozeAnswers: this.clozeAnswers,
			vocabUserChoices: this.vocabUserChoices,
			vocabSubmitted: this.vocabSubmitted,
			clozeSubmitted: this.clozeSubmitted,
			tabAwayCount: this.tabAwayCount,
			isVisibilityLocked: this.isVisibilityLocked,
			quizUnlocked: this.quizUnlocked
		});
	}
	restoreQuizState(e) {
		let t = this.shadowRoot.getElementById("nickname"), n = this.shadowRoot.getElementById("homeroom"), r = this.shadowRoot.getElementById("studentId"), i = this.getTeacherCodeInput();
		t && (t.value = e.nickname || ""), n && (n.value = e.homeroom || ""), r && (r.value = e.studentId || ""), i && (i.value = e.teacherCode || ""), this.vocabScore = e.vocabScore || 0, this.clozeScore = e.clozeScore || 0, this.score = e.score || 0, this.scoreSentToServer = e.scoreSentToServer || !1, this.tabAwayCount = e.tabAwayCount || 0, this._updateTabAwayBanner(), this.userQuestionAnswers = e.userQuestionAnswers || {}, this.clozeAnswers = e.clozeAnswers || {}, this.vocabUserChoices = e.vocabUserChoices || {};
		for (let e = 0; e < this.totalQuestions; e++) {
			let t = `q${e}`, n = this.userQuestionAnswers[e];
			if (n !== void 0) {
				let r = this.currentQuestions[e];
				if (r.o && r.o.length > 0) {
					let e = this.shadowRoot.querySelector(`input[name="${t}"][value="${n}"]`);
					e && (e.checked = !0, e.dataset.answered = "true");
				} else {
					let e = this.shadowRoot.querySelector(`.short-answer-input[name="${t}"]`);
					e && (e.value = n, e.dataset.answered = "true", e.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(e));
				}
			}
		}
		Object.keys(this.vocabUserChoices).forEach((e) => {
			let t = this.vocabUserChoices[e], n = e.split("-"), r = n[0], i = n.slice(1).join("-"), a = this.shadowRoot.querySelector(`.vocab-matching-input[data-section-id="${r}"][data-word="${i}"]`);
			a && (a.value = t);
		}), Object.keys(this.clozeAnswers).forEach((e) => {
			let t = this.clozeAnswers[e], n = e.split("-"), r = n[0], i = n[1], a = this.shadowRoot.querySelector(`.cloze-blank[data-section-id="${r}"][data-blank-index="${i}"]`);
			a && (a.value = t);
		}), this.vocabSubmitted = e.vocabSubmitted || !1, this.clozeSubmitted = e.clozeSubmitted || !1, this.testMode && (this.isVisibilityLocked = e.isVisibilityLocked || !1, e.isVisibilityLocked ? this.lockQuizContent(!0) : e.quizUnlocked && !this.scoreSubmitted ? (this.tabAwayCount++, this._updateTabAwayBanner(), this.lockQuizContent(!0)) : e.quizUnlocked ? this.unlockQuizContent() : this.lockQuizContent(!1)), this.showFinalScore(!1);
	}
	showStudentInfoAlert(e = "", t = "") {
		let n = this.shadowRoot.getElementById("studentInfoAlert");
		n && (n.textContent = e, n.className = t || "");
	}
	validateStudentInfoFields(e = {}) {
		let { showAlert: t = !0 } = e, n = this.getStudentInputs(), r = !0;
		return n.forEach((e) => {
			e.value.trim() === "" ? (r = !1, e.classList.add("invalid")) : e.classList.remove("invalid");
		}), t && (r ? this.showStudentInfoAlert() : this.showStudentInfoAlert("Please fill out all student information fields before continuing.", "error")), r;
	}
	lockQuizContent(e = !1) {
		let t = this.shadowRoot.getElementById("quizContent");
		t && t.classList.add("hidden");
		let n = this.shadowRoot.getElementById("testModeLockSection");
		n && n.classList.remove("hidden"), this.quizUnlocked = !1, this.isVisibilityLocked = e;
		let r = this.shadowRoot.getElementById("lockSectionHeader"), i = this.shadowRoot.getElementById("lockSectionInstruction"), a = this.shadowRoot.getElementById("lockTeacherCodeLabel"), o = this.shadowRoot.getElementById("lockTeacherCode");
		e ? (r && (r.textContent = "⚠️ Test Mode Locked (Visibility Change Detected) / ล็อกโหมดทำข้อสอบ (ตรวจพบการสลับหน้าจอ)"), i && (i.textContent = "Student left the quiz tab/window. Please enter the Teacher Code to unlock the questions. / ตรวจพบการออกจากหน้าต่างข้อสอบ กรุณากรอกรหัสครูผู้สอนเพื่อปลดล็อกข้อสอบ"), a && (a.textContent = "Teacher Code"), o && (o.placeholder = "Enter Teacher Code")) : (r && (r.textContent = "Test Mode Locked / ล็อกโหมดทำข้อสอบ"), i && (i.textContent = "This quiz is in Test Mode. Please enter the Start Quiz Code to unlock the questions. / แบบทดสอบนี้อยู่ในโหมดการสอบ กรุณากรอกรหัสเริ่มทำข้อสอบเพื่อปลดล็อก"), a && (a.textContent = "Start Quiz Code"), o && (o.placeholder = "Enter Start Quiz Code")), this.updateTeacherCodeInputVisibility();
	}
	unlockQuizContent() {
		let e = this.shadowRoot.getElementById("quizContent");
		e && e.classList.remove("hidden");
		let t = this.shadowRoot.getElementById("testModeLockSection");
		t && t.classList.add("hidden"), this.quizUnlocked = !0, this.isVisibilityLocked = !1, this.updateTeacherCodeInputVisibility();
	}
	updateTeacherCodeInputVisibility() {
		let e = this.shadowRoot.getElementById("teacherCodeGroup");
		e && (this.testMode ? e.classList.add("hidden") : e.classList.remove("hidden"));
	}
	handleStartQuiz() {
		this.unlockQuizContent();
	}
	checkInitialCompletion() {
		let e = this.vocabularySections.length > 0, t = this.totalQuestions > 0, n = this.clozeSections.length > 0;
		n && !e && !t || !n && !e && !t && this.shadowRoot.getElementById("checkScoreContainer").classList.add("hidden");
	}
	checkAllQuestionsAnswered() {
		return this.questionsAnswered === this.totalQuestions;
	}
	showQuestionFeedback() {
		this.score = 0;
		for (let e = 0; e < this.totalQuestions; e++) {
			let t = this.currentQuestions[e], n = `q${e}`, r = this.userQuestionAnswers[e];
			if (!t.o || t.o.length === 0) {
				let e = this.shadowRoot.querySelector(`.short-answer-input[name="${n}"]`);
				e && (e.disabled = !0, e.classList.add("submitted"));
			} else this.shadowRoot.querySelectorAll(`input[name="${n}"]`).forEach((e) => {
				let n = e.closest(".option-label");
				if (e.disabled = !0, !this.testMode) {
					let i = n.querySelector(".feedback-icon");
					i || (i = document.createElement("span"), i.className = "feedback-icon", n.appendChild(i)), r === e.value && (r === t.a ? (n.classList.add("correct"), i.textContent = "✅") : (n.classList.add("incorrect"), i.textContent = "❌"));
				}
			}), r === t.a && this.score++;
			let i = this.shadowRoot.getElementById(`explanation-q${e}`);
			i && i.classList.add("hidden");
		}
	}
	handleAnswer(e) {
		if (e.target.type !== "radio") return;
		let t = e.target, n = t.name;
		if (n.startsWith("vocab-")) return;
		let r = parseInt(n.substring(1));
		this.userQuestionAnswers[r] = t.value, t.dataset.answered = "true";
		let i = Object.keys(this.userQuestionAnswers).length;
		this.questionsAnswered = i;
		let a = this.vocabularySections.length === 0 || Object.keys(this.vocabUserChoices).length === this.getTotalVocabWords(), o = this.checkAllQuestionsAnswered(), s = this.checkAllClozeAnswered();
		a && o && s && (this.shadowRoot.getElementById("checkScoreButton").disabled = !1);
	}
	handleSubmit(e) {
		if (e.preventDefault(), !this.validateStudentInfoFields({ showAlert: !0 })) {
			let e = this.shadowRoot.getElementById("studentInfoSection");
			e && e.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
			return;
		}
		this.saveCurrentStateToLocalStorage(), this.showFinalScore();
	}
	showFinalScore(e = !0) {
		this.totalQuestions > 0 && this.showQuestionFeedback(), this.vocabularySections.length > 0 && !this.vocabSubmitted && this.showVocabScore(), this.clozeSections.length > 0 && !this.clozeSubmitted && this.showClozeScore();
		let t = this.shadowRoot.getElementById("resultScore"), n = this.shadowRoot.getElementById("checkScoreContainer"), r = this.shadowRoot.getElementById("resultArea"), i = this.shadowRoot.getElementById("postScoreActions"), a = this.shadowRoot.getElementById("sendButton"), o = this.shadowRoot.getElementById("tryAgainButton"), s = this.shadowRoot.getElementById("studentInfoSection"), c = this.getTotalVocabWords(), l = this.clozeSections.reduce((e, t) => e + t.words.length, 0), u = this.currentQuestions.filter((e) => e.o && e.o.length > 0).length, d = c + l + u, f = this.vocabScore + this.clozeScore + this.score, p = this.shadowRoot.getElementById("nickname").value || "-", m = this.shadowRoot.getElementById("homeroom").value || "-", h = this.shadowRoot.getElementById("studentId").value || "-", g = (/* @__PURE__ */ new Date()).toLocaleString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
		if (s) {
			let e = this.getStudentInputs(), t = this.getTeacherCodeInput();
			e.forEach((e) => {
				e && (e.disabled = !0);
			}), t && (t.disabled = !0);
		}
		i && i.classList.remove("hidden");
		let _ = this.shadowRoot.getElementById("retrySubmissionSection");
		_ && (!this.scoreSentToServer || this.testMode ? (_.classList.remove("hidden"), this.updateRetrySectionLabels()) : _.classList.add("hidden"));
		let v = this.shadowRoot.getElementById("teacherActionsSection");
		if (v) if (this.testMode) {
			v.classList.remove("hidden");
			let e = this.shadowRoot.getElementById("teacherResetCode");
			e && (e.value = "");
			let t = this.shadowRoot.getElementById("teacherResetCodeError");
			t && t.classList.add("hidden");
		} else v.classList.add("hidden");
		let y = this.currentQuestions.filter((e) => e.o && e.o.length === 0), b = y.length > 0, x = "", S = "";
		if (b && !this.testMode && (x = "\n                <div class=\"score-note-written\">\n                    *Written answers are not included in the score.\n                </div>", S = `
                <div class="written-answers-section">
                    <div class="written-answers-title">Written Answers (To Be Graded Manually)</div>
                    ${y.map((e, t) => {
			let n = this.currentQuestions.indexOf(e), r = this.userQuestionAnswers[n] || "-";
			return `
                    <div class="written-qa">
                        <div class="written-question">Q: ${e.q}</div>
                        <div class="written-answer">A: ${r}</div>
                    </div>
                `;
		}).join("")}
                </div>
            `), d > 0 || b) {
			let e = "";
			d > 0 && (e = this.testMode ? "\n                        <div class=\"score-summary\">\n                            <div class=\"score-main-compact\">Test Submitted</div>\n                            <div class=\"score-percentage\">Your responses have been recorded and sent to your teacher.</div>\n                        </div>\n                    " : `
                        <div class="score-summary">
                            <div class="score-main-compact">${f} / ${d}</div>
                            <div class="score-percentage">${Math.round(f / d * 100)}% Accuracy</div>
                        </div>
                    `);
			let n = "";
			this.testMode || (c > 0 && (n += `
                        <div class="score-section">
                            <span class="score-label">Vocabulary</span>
                            <span class="score-value">${this.vocabScore}/${c}</span>
                        </div>`), l > 0 && (n += `
                        <div class="score-section">
                            <span class="score-label">Fill-in-the-blank</span>
                            <span class="score-value">${this.clozeScore}/${l}</span>
                        </div>`), u > 0 && (n += `
                        <div class="score-section">
                            <span class="score-label">Questions</span>
                            <span class="score-value">${this.score}/${u}</span>
                        </div>`));
			let r = "";
			n && (r = `
                    <div class="score-breakdown-compact">
                        ${n}
                    </div>
                `), t.innerHTML = `
                <div class="score-report-card">
                    <div class="result-title">${this.activityTitle}</div>
                    <div class="result-subtitle">Performance Report</div>
                    <div class="student-details">
                        <div><strong>NAME:</strong> ${p}</div>
                        <div><strong>ID:</strong> ${h}</div>
                        <div><strong>CLASS:</strong> ${m}</div>
                        <div><strong>DATE:</strong> ${g}</div>
                    </div>
                    ${e}
                    ${r}
                    ${S}
                    ${x}
                </div>
            `;
		} else t.innerHTML = "<div class=\"score-report-card\"><div class=\"score-main-compact\">No score data available</div></div>";
		if (d > 0 && f / d, t.className = "", n && n.classList.add("hidden"), i && i.classList.remove("hidden"), r && r.classList.remove("hidden"), a && (a.disabled = !0, a.textContent = "Resend Score to Teacher", a.classList.add("hidden")), o && (o.disabled = !1, this.testMode ? o.classList.add("hidden") : o.classList.remove("hidden")), this.testMode) {
			let e = this.shadowRoot.getElementById("dynamicContent");
			e && e.classList.add("hidden");
		}
		if (r) try {
			r.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		} catch {
			this.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
		this.stopAllAudio(), e && this.sendScore(!0);
	}
	async sendScore(e = !1, t = !1) {
		if (this.scoreSentToServer && !t || this.autoSubmissionInProgress) return;
		let n = this.shadowRoot.getElementById("validationMessage"), r = this.shadowRoot.getElementById("sendButton"), i = this.shadowRoot.getElementById("tryAgainButton"), a = this.shadowRoot.getElementById("retrySubmissionSection");
		if (this.shadowRoot.getElementById("retrySendButton"), !this.validateStudentInfoFields({ showAlert: !0 })) {
			n && (n.textContent = "Please fill out all student information fields.", n.className = "error"), r && e && (r.classList.remove("hidden"), r.disabled = !1);
			return;
		}
		let o = "";
		if (t) {
			let e = this.shadowRoot.getElementById("retryTeacherCode");
			o = e ? e.value.trim() : "";
		} else {
			let e = this.getTeacherCodeInput();
			o = e ? e.value.trim() : "";
		}
		this.vocabScore;
		let s = this.getTotalVocabWords(), c = this.clozeSections.reduce((e, t) => e + t.words.length, 0), l = this.currentQuestions.filter((e) => e.o && e.o.length > 0).length, u = s + c + l, d = this.vocabScore + this.clozeScore + this.score, f = {
			quizName: this.activityTitle,
			nickname: this.shadowRoot.getElementById("nickname").value,
			homeroom: this.shadowRoot.getElementById("homeroom").value,
			studentId: this.shadowRoot.getElementById("studentId").value,
			score: d,
			total: u,
			teacherCode: o,
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			writtenAnswers: this.getWrittenAnswersString()
		};
		if (o !== this.code) {
			t ? n && (n.textContent = "❌ Invalid Teacher Code. Please try again.", n.className = "error") : (n && (n.innerHTML = "\n                        <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></svg>\n                        <span>Report card generated. Not sent to teacher (no valid code).</span>\n                    ", n.className = "warning"), a && a.classList.remove("hidden")), i && (i.disabled = !1), this.scoreSubmitted = !0, this.saveCurrentStateToLocalStorage(), this.autoSubmissionInProgress = !1;
			return;
		}
		if (!this.submissionUrl) {
			n && (n.textContent = "⚠️ No submission URL configured.", n.className = "error"), r && (r.textContent = "No Submission URL", r.disabled = !0, r.classList.remove("hidden")), i && (i.disabled = !1);
			return;
		}
		this.autoSubmissionInProgress = !0, r && (e ? r.classList.add("hidden") : (r.disabled = !0, r.textContent = "Sending...")), n && (n.innerHTML = e ? "<span>Submitting score to teacher...</span>" : "", n.className = ""), i && (i.disabled = !0);
		try {
			let t = await fetch(this.submissionUrl, {
				method: "POST",
				mode: "cors",
				body: JSON.stringify(f)
			});
			if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
			let o, s = t.headers.get("content-type");
			if (s && s.includes("application/json")) o = await t.json();
			else {
				let e = await t.text();
				console.warn("Non-JSON response received:", e), o = { message: "Submission received (non-JSON response)" };
			}
			this.scoreSentToServer = !0, a && (this.testMode ? (a.classList.remove("hidden"), this.updateRetrySectionLabels()) : a.classList.add("hidden")), n && (n.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${e ? "Score automatically submitted to your teacher" : o.message || "Submission successful!"}</span>
                `, n.className = "success"), r && (r.textContent = "Score Sent", r.disabled = !0, r.classList.add("hidden")), i && (i.disabled = !1), this.scoreSubmitted = !0, this.saveCurrentStateToLocalStorage();
		} catch (t) {
			console.error("Error:", t), n && (n.innerHTML = "\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line></svg>\n                    <span>Could not submit score. Please try again.</span>\n                ", n.className = "error"), r && (r.textContent = e ? "Send Score Again" : "Try Sending Again", r.disabled = !1, r.classList.remove("hidden")), i && (i.disabled = !1), this.saveCurrentStateToLocalStorage();
		} finally {
			this.autoSubmissionInProgress = !1;
		}
	}
	resetQuiz() {
		let e = this.shadowRoot.getElementById("quizForm"), t = this.shadowRoot.getElementById("resultArea"), n = this.shadowRoot.getElementById("postScoreActions"), r = this.shadowRoot.getElementById("checkScoreContainer"), i = this.shadowRoot.getElementById("validationMessage"), a = this.shadowRoot.getElementById("sendButton"), o = this.shadowRoot.getElementById("tryAgainButton"), s = this.getStudentInputs(), c = this.shadowRoot.getElementById("studentInfoSection");
		e.reset();
		let l = this.shadowRoot.getElementById("dynamicContent");
		if (l && l.classList.remove("hidden"), c) {
			c.style.display = "";
			let e = this.getStudentInputs(), t = this.getTeacherCodeInput();
			e.forEach((e) => {
				e && (e.disabled = !1);
			}), t && (t.disabled = !1);
		}
		t && t.classList.add("hidden"), n && n.classList.add("hidden"), r && r.classList.remove("hidden"), i && (i.textContent = "", i.className = ""), s.forEach((e) => {
			e.classList.remove("invalid"), e.disabled = !1;
		}), this.showStudentInfoAlert(), this.userQuestionAnswers = {}, this.questionsAnswered = 0, this.score = 0, this.vocabUserChoices = {}, this.vocabScore = 0, this.vocabSubmitted = !1, this.clozeAnswers = {}, this.clozeScore = 0, this.clozeSubmitted = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.autoSubmissionInProgress = !1, this.tabAwayCount = 0, this.classList.remove("tab-away"), this._updateTabAwayBanner(), this.clearLocalStorage();
		let u = this.shadowRoot.getElementById("retrySubmissionSection");
		u && u.classList.add("hidden");
		let d = this.shadowRoot.getElementById("retryTeacherCode");
		d && (d.value = ""), Array.from(this.shadowRoot.querySelectorAll("input[type=\"radio\"]")).forEach((e) => {
			e.disabled = !1;
			try {
				delete e.dataset.answered;
			} catch {}
		}), Array.from(this.shadowRoot.querySelectorAll(".short-answer-input")).forEach((e) => {
			e.disabled = !1, e.value = "";
			try {
				delete e.dataset.answered;
			} catch {}
			e.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(e);
		}), Array.from(this.shadowRoot.querySelectorAll(".option-label")).forEach((e) => {
			e.classList.remove("correct", "incorrect");
			let t = e.querySelector(".feedback-icon");
			t && t.remove(), e.style.cursor = "";
		}), Array.from(this.shadowRoot.querySelectorAll(".explanation")).forEach((e) => e.classList.add("hidden")), a && (a.disabled = !1, a.textContent = "Resend Score to Teacher", a.classList.add("hidden")), o && (o.disabled = !1), this.stopAllAudio(), this.generateQuiz();
		let f = this.shadowRoot.getElementById("checkScoreButton");
		if (f && (f.disabled = !0), this.testMode) {
			let e = this.shadowRoot.getElementById("lockTeacherCode");
			e && (e.value = "");
			let t = this.shadowRoot.getElementById("lockErrorAlert");
			t && t.classList.add("hidden"), this.lockQuizContent();
		} else this.unlockQuizContent();
	}
	getWrittenAnswersString() {
		let e = this.currentQuestions.filter((e) => e.o && e.o.length === 0).map((e, t) => {
			let n = this.currentQuestions.indexOf(e), r = this.userQuestionAnswers[n] || "";
			return `Q: ${e.q}\nA: ${r}`;
		}).join("\n\n"), t = this.testMode && this.tabAwayCount > 0 ? `[Tab Away Count: ${this.tabAwayCount}]` : "";
		return t ? e ? `${e}\n\n${t}` : t : e;
	}
	toggleTheme() {
		this.classList.toggle("dark");
		let e = this.classList.contains("dark");
		this.shadowRoot.querySelector(".light-icon").classList.toggle("hidden", e), this.shadowRoot.querySelector(".dark-icon").classList.toggle("hidden", !e);
	}
	updateRetrySectionLabels() {
		let e = this.shadowRoot.querySelector("#retrySubmissionSection .retry-title"), t = this.shadowRoot.getElementById("retrySendButton"), n = this.shadowRoot.getElementById("retryTeacherCode");
		if (this.testMode && n && !n.value) {
			let e = this.getTeacherCodeInput();
			n.value = e ? e.value : this.code;
		}
		this.scoreSentToServer ? (e && (e.textContent = "Submit score again?"), t && (t.textContent = "Submit Again")) : (e && (e.textContent = "Want to send this to your teacher?"), t && (t.textContent = "Send Now"));
	}
	handleReopenEdit() {
		let e = this.shadowRoot.getElementById("teacherResetCode"), t = e ? e.value.trim() : "", n = this.shadowRoot.getElementById("teacherResetCodeError");
		t === this.resetCode ? (n && n.classList.add("hidden"), e && (e.value = ""), this.reopenQuizForEditing()) : n && (n.textContent = "❌ Invalid Reset Code / รหัสผ่านไม่ถูกต้อง", n.classList.remove("hidden"));
	}
	handleResetTryAgain() {
		let e = this.shadowRoot.getElementById("teacherResetCode"), t = e ? e.value.trim() : "", n = this.shadowRoot.getElementById("teacherResetCodeError");
		t === this.resetCode ? (n && n.classList.add("hidden"), e && (e.value = ""), this.resetQuiz()) : n && (n.textContent = "❌ Invalid Reset Code / รหัสผ่านไม่ถูกต้อง", n.classList.remove("hidden"));
	}
	reopenQuizForEditing() {
		let e = this.shadowRoot.getElementById("dynamicContent");
		e && e.classList.remove("hidden");
		let t = this.shadowRoot.getElementById("studentInfoSection");
		if (t) {
			t.style.display = "", this.getStudentInputs().forEach((e) => {
				e && (e.disabled = !1);
			});
			let e = this.getTeacherCodeInput();
			e && (e.disabled = !1);
		}
		Array.from(this.shadowRoot.querySelectorAll(".short-answer-input")).forEach((e) => {
			e.disabled = !1, e.classList.remove("submitted");
		}), Array.from(this.shadowRoot.querySelectorAll("input[type=\"radio\"]")).forEach((e) => {
			e.disabled = !1;
		}), Array.from(this.shadowRoot.querySelectorAll(".vocab-matching-input")).forEach((e) => {
			e.disabled = !1;
		}), Array.from(this.shadowRoot.querySelectorAll(".vocab-matching-row")).forEach((e) => {
			e.classList.remove("correct", "incorrect");
			let t = e.querySelector(".feedback-icon");
			t && t.remove();
		}), Array.from(this.shadowRoot.querySelectorAll(".cloze-blank")).forEach((e) => {
			e.disabled = !1, e.classList.remove("correct", "incorrect");
		}), Array.from(this.shadowRoot.querySelectorAll(".option-label")).forEach((e) => {
			e.classList.remove("correct", "incorrect");
			let t = e.querySelector(".feedback-icon");
			t && t.remove(), e.style.cursor = "";
		}), Array.from(this.shadowRoot.querySelectorAll(".explanation")).forEach((e) => e.classList.add("hidden")), this.vocabSubmitted = !1, this.clozeSubmitted = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.autoSubmissionInProgress = !1;
		let n = this.shadowRoot.getElementById("resultArea");
		n && n.classList.add("hidden");
		let r = this.shadowRoot.getElementById("postScoreActions");
		r && r.classList.add("hidden");
		let i = this.shadowRoot.getElementById("checkScoreContainer");
		i && i.classList.remove("hidden");
		let a = this.shadowRoot.getElementById("checkScoreButton");
		a && (a.disabled = !1);
		let o = this.shadowRoot.getElementById("teacherResetCode");
		o && (o.value = "");
		let s = this.shadowRoot.getElementById("teacherResetCodeError");
		s && s.classList.add("hidden"), this.saveCurrentStateToLocalStorage();
	}
};
customElements.define("tj-quiz-element", o);
//#endregion
