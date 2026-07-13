import { c as E } from "./chunks/tj-config-Daa3Dzp2.js";
import { a as L, s as R, g as T } from "./chunks/audio-utils-BwH2sOvH.js";
const q = `<div class="quiz-wrapper" translate="no">
    <div id="tabAwayBanner" class="tab-away-banner hidden" role="alert"></div>
    <div class="container" id="mainContainer">
        <div class="quiz-header">
            <span class="theme-toggle" title="Toggle Light/Dark Mode">
                <span class="light-icon">☀️</span>
                <span class="dark-icon hidden">🌙</span>
            </span>
            <button type="button" id="voice-btn" title="Choose Voice">
                <!-- Speaking Head Icon -->
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z" />
                </svg>
            </button>
            <h1 id="quizTitle">Interactive Reading</h1>
            <p id="quizDescription">Read the passage, then answer the questions below.</p>
        </div>

        <form id="quizForm">
            <div id="testModeLockSection" class="section-card hidden">
                <div class="section-card-header">Test Mode Locked / ล็อกโหมดทำข้อสอบ</div>
                <p class="student-instructions instruction">This quiz is in Test Mode. Please enter the Teacher Code to unlock the questions. / แบบทดสอบนี้อยู่ในโหมดการสอบ กรุณาใส่รหัสผ่านครูผู้สอนเพื่อเริ่มทำข้อสอบ</p>
                <div class="input-group">
                    <label for="lockTeacherCode" class="input-label">Teacher Code</label>
                    <input type="text" id="lockTeacherCode" class="form-input" placeholder="Enter code to unlock test">
                </div>
                <p id="lockErrorAlert" style="color: var(--red-color, #ef4444); margin-top: 0.5rem; font-size: 0.9em; min-height: 1.5rem; font-weight: 500;" class="hidden"></p>
                <div style="margin-top: 1rem;">
                    <button type="button" id="unlockTestButton" class="button button-primary">Unlock Test / เริ่มทำข้อสอบ</button>
                </div>
            </div>

            <div id="quizContent" class="hidden">
                <!-- Dynamic sections will be appended here as .section-card elements -->
                <div id="dynamicContent"></div>

                <div id="studentInfoSection" class="section-card">
                    <div class="section-card-header">Student Information / ข้อมูลนักเรียน</div>
                    <p class="student-instructions instruction">Enter your details to generate your report. / กรุณากรอกข้อมูลเพื่อสร้างรายงานผลการเรียน
                    </p>
                    <div class="input-group">
                        <label for="nickname" class="input-label">Nickname</label>
                        <input type="text" id="nickname" name="nickname" class="form-input" placeholder="Jake">
                    </div>
                    <div class="grid-container" style="margin-top: 1rem;">
                        <div>
                            <label for="homeroom" class="input-label">Homeroom</label>
                            <input type="text" id="homeroom" name="homeroom" class="form-input" placeholder="1/1">
                        </div>
                        <div>
                            <label for="studentId" class="input-label">Student ID</label>
                            <input type="text" id="studentId" name="studentId" class="form-input" placeholder="01">
                        </div>
                    </div>
                    <div id="teacherCodeGroup" class="input-group" style="margin-top: 1rem;">
                        <label for="teacherCode" class="input-label">Teacher Code (Optional)</label>
                        <input type="text" id="teacherCode" name="teacherCode" class="form-input" placeholder="Enter code for submission">
                    </div>
                </div>

                <div id="checkScoreContainer" class="actions-container">
                    <button type="submit" id="checkScoreButton" class="button button-primary">
                        Check My Score
                    </button>
                    <p id="studentInfoAlert"></p>
                </div>

                <div id="resultArea" class="result-area section-card hidden">
                    <div id="resultScore"></div>
                </div>

                <div id="postScoreActions" class="post-score-section hidden">
                    <p id="validationMessage"></p>
                    
                    <div id="retrySubmissionSection" class="retry-section hidden">
                        <p class="retry-title">Want to send this to your teacher?</p>
                        <div class="retry-controls">
                            <input type="text" id="retryTeacherCode" class="form-input" placeholder="Teacher Code" title="Teacher Code">
                            <button type="button" id="retrySendButton" class="button button-green">Send Now</button>
                        </div>
                    </div>

                    <div id="teacherActionsSection" class="teacher-actions-section hidden">
                        <p class="teacher-actions-title">Reopen or Reset Quiz (Teacher Only)</p>
                        <div class="teacher-actions-controls">
                            <input type="text" id="teacherResetCode" class="form-input" placeholder="Reset Code" title="Reset Code">
                            <button type="button" id="reopenEditButton" class="button button-slate">Reopen & Edit</button>
                            <button type="button" id="resetTryAgainButton" class="button button-red">Reset & Try Again</button>
                        </div>
                        <p id="teacherResetCodeError" class="hidden"></p>
                    </div>

                    <div class="post-score-actions">
                        <button type="button" id="sendButton" class="button button-green hidden">
                            Resend Score to Teacher
                        </button>
                        <button type="button" id="tryAgainButton" class="button button-slate">
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="voice-overlay hidden">
        <div class="voice-card">
            <div class="voice-card-header">
                <h3>Choose Voice</h3>
                <button type="button" class="close-voice-btn">×</button>
            </div>
            <div class="voice-list"></div>
        </div>
    </div>
</div>

<div class="browser-prompt-overlay" id="browser-prompt-overlay" style="display: none;">
    <div class="browser-prompt-card">
        <h2>Browser Support Needed</h2>
        <p>This application works best in standard browsers like <strong>Chrome</strong> or <strong>Safari</strong> to enable high-quality audio features.</p>
        <p>กรุณาเปิดใน Chrome หรือ Safari เพื่อใช้งานฟีเจอร์เสียงแบบเต็มรูปแบบ</p>
        <a class="browser-action-btn" id="browser-action-btn">Open in Browser</a>
        <button class="close-prompt" style="display: block; width: 100%; margin-top: 1.5em; border: none; background: transparent; text-decoration: underline; cursor: pointer; color: #64748b; font-weight: 600; font-size: 0.95em;" onclick="this.closest('.browser-prompt-overlay').style.display='none'">Continue anyway / ใช้งานต่อ</button>
    </div>
</div>`, Q = ':host{display:block;--bg-light: #f1f5f9;--text-light: #1e293b;--card-bg-light: #ffffff;--card-shadow-light: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--border-light: #e2e8f0;--input-bg-light: #f8fafc;--input-border-light: #cbd5e1;--subtle-text-light: #475569;--primary-color: #4f46e5;--primary-hover: #4338ca;--primary-text: #ffffff;--green-color: #16a34a;--green-hover: #15803d;--green-light-bg: #dcfce7;--red-color: #ef4444;--red-hover: #dc2626;--red-light-bg: #fee2e2;--yellow-color: #eab308;--warning-color: #854d0e;--warning-light-bg: #fef9c3;--slate-color: #64748b;--slate-hover: #475569;--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif}:host(.dark){--bg-light: #0f172a;--text-light: #e2e8f0;--card-bg-light: #1e293b;--card-shadow-light: 0 10px 15px -3px rgba(0, 0, 0, .3), 0 4px 6px -2px rgba(0, 0, 0, .2);--border-light: #334155;--input-bg-light: #334155;--input-border-light: #475569;--subtle-text-light: #87abdd;--green-light-bg: #14532d;--red-light-bg: #7f1d1d;--warning-color: #facc15;--warning-light-bg: #422006}.quiz-wrapper *{box-sizing:border-box}.quiz-wrapper{font-family:var(--font-sans);background-color:var(--bg-light);color:var(--text-light);line-height:1.6;transition:background-color .3s,color .3s;padding:1rem 0}.quiz-wrapper p{font-size:1em;margin-bottom:1rem}.container{max-width:800px;margin-left:auto;margin-right:auto;padding:0 1rem}.quiz-header{background-color:var(--primary-color);color:var(--primary-text);padding:1.5rem;position:relative;border-radius:.75rem;margin-bottom:1.25rem;box-shadow:var(--card-shadow-light)}.quiz-header h1{font-size:1.5em;font-weight:700;margin:0}.quiz-header p{margin-top:.5rem;color:#e0e7ff;opacity:.9;font-size:.9375em}.theme-toggle{position:absolute;top:1rem;right:1rem;cursor:pointer;width:2.5rem;height:2.5rem;padding:0;border-radius:9999px;background-color:#ffffff1a;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:1.2rem;transition:background-color .2s,transform .2s}.theme-toggle:hover,#voice-btn:hover{background-color:#fff3;transform:scale(1.05)}form{padding:0}@media (min-width: 640px){form{padding:2rem}}fieldset{border:none;padding:0;margin:0;margin-bottom:2rem}.legend-container{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-light);padding-bottom:.5rem;margin-bottom:1rem;width:100%}legend{font-size:1.125em;font-weight:600;color:var(--text-light);border-bottom:none;padding-bottom:0;margin-bottom:0;width:auto}fieldset>legend{display:block;font-size:1.125em;font-weight:700;margin-bottom:.5rem;padding-bottom:.5rem;color:var(--text-light);border-bottom:1px solid var(--border-light)}#vocabSection .vocab-grid-table,#clozeSection .cloze-word-bank,#clozeSection .cloze-text{margin-top:1rem}.reading-instructions{font-size:.9em;font-style:italic;margin-bottom:1rem;margin-top:1rem}.instruction{font-size:.9em;color:var(--subtle-text-light);font-style:italic;margin-top:.25rem;margin-bottom:1rem;line-height:1.45}.audio-toggle{cursor:pointer;padding:.75rem;border-radius:9999px;background-color:var(--primary-color);border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;color:var(--primary-text);transition:background-color .2s}.audio-toggle:hover{background-color:var(--primary-hover)}.audio-toggle svg{width:1.5em;height:1.5em}.passage-audio-toggle{cursor:pointer;padding:.5rem .6rem;border-radius:.5rem;background-color:#fff;border:1px solid var(--border-light);color:var(--text-light);display:inline-flex;align-items:center;justify-content:center;margin-left:.5rem;box-shadow:0 2px 6px #0000000f;transition:transform .12s,box-shadow .12s}.passage-audio-toggle:hover{transform:translateY(-2px);box-shadow:0 6px 16px #0000001f}.passage-audio-toggle .play-icon,.passage-audio-toggle .pause-icon{width:1.1rem;height:1.1rem}.passage-wrapper{padding:1rem 1.25rem;border-radius:.5rem;background:transparent;margin-bottom:1rem}.passage-wrapper{position:relative}.passage-header{display:flex;align-items:center;gap:.5rem}.passage-text{margin-top:.75rem}.listening-hidden{position:absolute!important;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;overflow:hidden;white-space:nowrap}.passage-content{background-color:var(--input-bg-light);border-radius:.5rem;padding:1.5rem;margin-bottom:1.5rem;border:1px solid var(--border-light);line-height:1.7}.section-card{background-color:var(--card-bg-light);border:1px solid var(--border-light);border-radius:.75rem;padding:1.5rem;margin-bottom:1.25rem;box-shadow:var(--card-shadow-light)}.section-card-header{font-size:1.05em;font-weight:600;color:var(--text-light);margin:0 0 .5rem;border-bottom:1px solid var(--border-light);padding-bottom:.4rem}.section-card-description{font-size:.95em;color:var(--subtle-text-light);line-height:1.6;margin-bottom:.75rem}.section-card-content{display:block}.instruction-card .section-card-content{margin-top:.25rem}.instruction-questions{margin-top:.75rem}.question-block{padding-top:1.5rem;border-top:1px solid var(--border-light)}.question-block:first-of-type{border-top:none;padding-top:0}.question-block p.question-text{font-weight:600;margin-bottom:1rem;font-size:1em}.options-group{display:flex;flex-direction:column;gap:.5rem}.option-label{display:flex;align-items:center;padding:.5rem .75rem;background-color:var(--input-bg-light);border-radius:.5rem;cursor:pointer;transition:background-color .18s,border-color .18s;border:1px solid transparent;font-size:.95em}.option-label:hover{background-color:#eef4ff}:host(.dark) .option-label:hover{background-color:#2b3440}.option-label.correct{background-color:var(--green-light-bg);border-color:var(--green-color)}.option-label.incorrect{background-color:var(--red-light-bg);border-color:var(--red-color)}.feedback-icon{margin-left:auto;font-size:1.25em}.explanation{margin-top:1rem;padding:1rem;background-color:var(--input-bg-light);border-radius:.5rem;border-left:4px solid var(--primary-color);font-size:.9em;line-height:1.5}.explanation-content strong{color:var(--primary-color)}.form-radio{width:1.125em;height:1.125em;margin-right:.75em;accent-color:var(--primary-color);flex-shrink:0}.form-radio:disabled{cursor:not-allowed}.form-input{width:100%;padding:.75rem;background-color:var(--input-bg-light);border:1px solid var(--input-border-light);border-radius:.5rem;color:var(--text-light);font-size:1em}.form-input.invalid{border-color:var(--red-color)}.form-input:disabled{background-color:#e2e8f0;cursor:not-allowed}:host(.dark) .form-input:disabled{background-color:#334155}.input-label{display:block;font-size:.875em;font-weight:500;color:var(--subtle-text-light);margin-bottom:.25rem}#teacherCode{letter-spacing:.1em;font-family:monospace}:host(.dark) #teacherCode{background-color:#1e293b}.grid-container{display:grid;grid-template-columns:1fr;gap:1rem}@media (min-width: 768px){.grid-container{grid-template-columns:repeat(2,1fr)}}.actions-container{padding-top:1.5rem;border-top:1px solid var(--border-light);margin-top:2rem}.button{width:100%;font-weight:600;padding:.875rem 1.5rem;border-radius:.5rem;font-size:1em;transition:all .2s ease-in-out;border:none;cursor:pointer}.button:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 4px 10px #0000001a}.button:disabled{background-color:#94a3b8;cursor:not-allowed;transform:none;box-shadow:none}.button-primary{background-color:var(--primary-color);color:var(--primary-text)}.button-primary:hover:not(:disabled){background-color:var(--primary-hover)}.button-green{background-color:var(--green-color);color:var(--primary-text)}.button-green:hover:not(:disabled){background-color:var(--green-hover)}.button-slate{background-color:var(--slate-color);color:var(--primary-text)}.button-slate:hover:not(:disabled){background-color:var(--slate-hover)}.button-red{background-color:var(--red-color);color:var(--primary-text)}.button-red:hover:not(:disabled){background-color:var(--red-hover)}.post-score-actions{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.post-score-actions{flex-direction:row-reverse}}.prequiz-actions{margin-top:1.5rem;display:flex;flex-direction:column;gap:.75rem;align-items:flex-start}#studentInfoAlert{font-size:.9em;font-weight:500;min-height:1.5rem}#studentInfoAlert.success{color:var(--green-color)}#studentInfoAlert.error{color:var(--red-color)}.result-area{padding:2rem;text-align:center;border-bottom:1px solid var(--border-light);margin-bottom:2rem}.result-area h2{font-size:1.25em;font-weight:600;margin:0}#resultScore{text-align:center;margin:1.5rem 0}.score-main{font-size:3em;font-weight:700;line-height:1;margin-bottom:.5rem}.score-percentage{font-size:1.5em;font-weight:600;opacity:.8;margin-bottom:1rem}.score-breakdown{display:flex;justify-content:center;gap:2rem;margin-top:1rem}.score-section{display:flex;flex-direction:column;align-items:center;gap:.25rem}.score-label{font-size:.9em;font-weight:500;opacity:.7;text-transform:uppercase;letter-spacing:.05em}.score-value{font-size:1.25em;font-weight:600}@media (max-width: 768px){.score-main{font-size:2.5em}.score-percentage{font-size:1.25em}.score-breakdown{flex-direction:column;gap:1rem}.score-section{flex-direction:row;justify-content:space-between;align-items:center;padding:.5rem 1rem;background-color:var(--input-bg-light);border-radius:.5rem}}#resultScore.high .score-main{color:var(--green-color)}#resultScore.medium .score-main{color:var(--yellow-color)}#resultScore.low .score-main{color:var(--red-color)}#validationMessage{text-align:center;margin-bottom:1rem;font-weight:500;min-height:1.5rem;font-size:.9em}#validationMessage.success{color:var(--green-color)}#validationMessage.error{color:var(--red-color)}#validationMessage.warning{color:var(--warning-color)}.hidden{display:none!important}.vocab-word-bank{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.5rem;padding:1rem;margin-bottom:1.25rem}:host(.dark) .vocab-word-bank{background-color:var(--input-bg-dark)}.vocab-bank-title{font-weight:600;margin-bottom:.75rem;color:var(--subtle-text-light);font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.vocab-bank-items{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.vocab-bank-item{background-color:var(--card-bg-light);color:var(--text-light);padding:.45rem .75rem;border-radius:.375rem;border:1px solid var(--border-light);font-size:.9em;font-weight:600;cursor:default;-webkit-user-select:none;user-select:none;box-shadow:0 1px 2px #0000000d}.vocab-matching-container{display:flex;flex-direction:column;gap:.5rem}.vocab-matching-row{display:flex;align-items:center;gap:1rem;padding:.5rem .75rem;border-radius:.5rem;transition:background-color .2s}.vocab-matching-input{width:2.5rem;height:2.5rem;padding:0;text-align:center;font-weight:700;font-size:1.125rem;line-height:normal;border:2px solid var(--input-border-light);border-radius:.4rem;background-color:var(--card-bg-light);color:var(--text-light);text-transform:uppercase;flex-shrink:0;box-sizing:border-box}:host(.dark) .vocab-matching-input{background-color:var(--input-bg-light)}.vocab-matching-input:focus{border-color:var(--primary-color);outline:none;box-shadow:0 0 0 3px #4f46e51a}.vocab-matching-input:disabled{background-color:#f1f5f9;cursor:not-allowed}:host(.dark) .vocab-matching-input:disabled{background-color:#1e293b}.vocab-definition-text{flex:1;font-size:1em;color:var(--text-light)}.vocab-matching-row.correct{background-color:var(--green-light-bg)}.vocab-matching-row.incorrect{background-color:var(--red-light-bg)}.vocab-matching-row.correct .vocab-matching-input{border-color:var(--green-color)}.vocab-matching-row.incorrect .vocab-matching-input{border-color:var(--red-color)}.vocab-matching-row .feedback-icon{font-weight:600;font-size:.9em;white-space:nowrap}@media (max-width: 768px){.vocab-def-label{display:inline-block;white-space:normal;max-width:60%}}.cloze-word-bank{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.5rem;padding:1rem;margin-bottom:1.25rem}:host(.dark) .cloze-word-bank{background-color:var(--input-bg-dark)}.cloze-bank-title{font-weight:600;margin-bottom:.75rem;color:var(--subtle-text-light);font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.cloze-bank-words{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.cloze-bank-word{background-color:var(--card-bg-light);color:var(--text-light);padding:.45rem .75rem;border-radius:.375rem;border:1px solid var(--border-light);font-size:.9em;font-weight:600;cursor:default;-webkit-user-select:none;user-select:none;box-shadow:0 1px 2px #0000000d}.cloze-text{line-height:1.8;font-size:1.05em;color:var(--text-light)}.cloze-blank{display:inline-block;min-width:6.5ch;max-width:12ch;margin:0 .35rem;padding:.15rem .4rem;border:none;border-bottom:2px solid var(--border-light);background:transparent;font-size:inherit;font-family:inherit;color:var(--text-light);text-align:center;vertical-align:baseline;transition:border-color .18s,background-color .18s}.cloze-blank:focus{outline:none;border-bottom-color:var(--primary-color);background:#4f46e508;border-radius:.25rem}.cloze-blank.correct{border-bottom-color:var(--green-color);background-color:var(--green-light-bg)}.cloze-blank.correct{border-bottom-color:var(--green-color);background-color:var(--green-light-bg);border-radius:.25rem}.cloze-blank.incorrect{border-bottom-color:var(--red-color);background-color:var(--red-light-bg);border-radius:.25rem}.cloze-score{text-align:center;font-weight:600;margin-top:1rem;font-size:1.1em}@media (max-width: 768px){.cloze-bank-words{gap:.375rem}.cloze-bank-word{padding:.375rem .5rem;font-size:.8em}.cloze-blank{min-width:5.5ch}.cloze-text{font-size:1em}.cloze-blank{min-width:80px;padding:.25em .375em}}.vocab-section-header,.cloze-section-header{margin:1.5rem 0 1rem;font-size:1.1em;font-weight:600;color:var(--primary-color);border-bottom:2px solid var(--primary-color);padding-bottom:.5rem}.cloze-section-wrapper{margin-bottom:2rem}.cloze-section-wrapper:last-child{margin-bottom:0}.score-report-card{background-color:var(--card-bg-light);border:2px solid var(--primary-color);border-radius:1rem;padding:2rem;margin:1rem 0;text-align:center;box-shadow:0 4px 20px #4f46e526;position:relative;overflow:hidden}.score-report-card:before{content:"";position:absolute;top:0;left:0;right:0;height:6px;background:linear-gradient(90deg,var(--primary-color),var(--primary-hover))}.result-title{font-size:1.5em;font-weight:800;color:var(--primary-color);margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.1em}.result-subtitle{font-size:1em;font-weight:600;color:var(--subtle-text-light);margin-bottom:1.5rem;text-transform:uppercase;letter-spacing:.05em}.student-details{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:2rem;font-size:1.1em;border:1px solid var(--border-light);padding:1.25rem;border-radius:.5rem;background-color:var(--input-bg-light);text-align:left}.student-details strong{color:var(--primary-color)}.score-summary{margin-bottom:2rem}.score-main-compact{font-size:2.5em;font-weight:800;color:var(--primary-color);margin-bottom:.25rem}.score-percentage{font-size:1.2em;color:var(--slate-color);font-weight:600}.score-breakdown-compact{display:flex;flex-direction:column;gap:.75rem;max-width:300px;margin:0 auto;padding:1rem;border-top:1px dashed var(--border-light)}.score-section{display:flex;justify-content:space-between;align-items:center;font-weight:600}.score-label{color:var(--subtle-text-light)}.score-value{color:var(--text-light)}.post-score-section{text-align:center;margin:2rem 0}.post-score-actions{display:flex;justify-content:center;gap:1rem;margin-top:1.5rem}#validationMessage.success{display:inline-flex;align-items:center;gap:.5rem;background-color:var(--green-light-bg);color:var(--green-color);padding:.75rem 1.5rem;border-radius:2rem;font-weight:600;font-size:.95rem;margin-bottom:0}#validationMessage.error{color:var(--red-color);background-color:var(--red-light-bg);padding:.75rem 1.5rem;border-radius:2rem;font-weight:600;font-size:.95rem;display:inline-flex;margin-bottom:0}#validationMessage.warning{color:var(--warning-color);background-color:var(--warning-light-bg);border:1px solid var(--warning-color);padding:.9rem 1.8rem;border-radius:2rem;font-weight:700;font-size:1.1rem;display:inline-flex;align-items:center;gap:.6rem;margin-bottom:0;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.voice-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ab3;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:2000}.voice-card{background:var(--card-bg-light);width:90%;max-width:400px;max-height:80vh;border-radius:1.25rem;box-shadow:0 25px 50px -12px #00000040;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border-light)}.voice-card-header{padding:1.25rem;background:var(--primary-color);color:#fff;display:flex;justify-content:space-between;align-items:center}.voice-card-header h3{margin:0;font-size:1.25em;font-weight:700}.close-voice-btn{background:#fff3;border:none;color:#fff;width:2rem;height:2rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.5em;transition:background .2s}.close-voice-btn:hover{background:#ffffff4d}.voice-list{padding:1rem;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:.5rem}.voice-option-btn{padding:.875rem 1rem;background:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.75rem;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:all .2s;color:var(--text-light);font-family:var(--font-sans)}.voice-option-btn:hover{border-color:var(--primary-color);background:#eff6ff}:host(.dark) .voice-option-btn:hover{background:#1e293b}.voice-option-btn.active{background:#eff6ff;border-color:var(--primary-color);color:var(--primary-color);font-weight:600;box-shadow:0 0 0 1px var(--primary-color)}:host(.dark) .voice-option-btn.active{background:#1e293b}.voice-option-btn .badge{background:var(--green-color);color:#fff;padding:.2rem .5rem;border-radius:2rem;font-size:.75em;font-weight:700;text-transform:uppercase}#voice-btn{position:absolute;top:1rem;right:4rem;cursor:pointer;width:2.5rem;height:2.5rem;padding:0;border-radius:9999px;background-color:#ffffff1a;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;color:#fff;transition:background-color .2s,transform .2s}#voice-btn svg{width:1.25rem;height:1.25rem}.retry-section{margin-top:1rem;margin-bottom:1rem;padding:1.25rem;background-color:var(--input-bg-light);border-radius:.6rem;border:1px dashed var(--border-light)}.retry-title{margin-top:0;margin-bottom:.75rem;font-size:.95em;font-weight:600;color:var(--text-light)}.retry-controls{display:flex;gap:.75rem;align-items:center}.retry-controls .form-input{flex:1;margin:0}.retry-controls .button{width:auto;margin:0;white-space:nowrap}.tab-away-banner{position:sticky;top:0;z-index:50;max-width:800px;margin:0 auto 1rem;padding:.875rem 1.25rem;background-color:var(--red-light-bg);color:var(--red-color);border:1px solid var(--red-color);border-radius:.5rem;font-weight:600;font-size:.95em;text-align:center;box-shadow:0 4px 12px #ef444440}:host(.tab-away) .container{border:3px solid var(--red-color);border-radius:.75rem;box-shadow:0 0 0 4px var(--red-light-bg);transition:border-color .15s,box-shadow .15s}.browser-prompt-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ae6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:10000;color:#fff;padding:2em;text-align:center}.browser-prompt-card{background:#fff;color:#1e293b;padding:2.5em;border-radius:1.5em;max-width:400px;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{color:#b45309;margin-bottom:.5em;font-size:1.5em;background:none;-webkit-text-fill-color:initial}.browser-prompt-card p{margin-bottom:1.5em;line-height:1.5;color:#475569}.browser-action-btn{display:inline-block;background-color:#ca8a04;color:#fff;padding:.75em 1.5em;border-radius:9999px;text-decoration:none;font-weight:700;transition:background-color .2s;cursor:pointer}.browser-action-btn:hover{background-color:#a16207}.short-answer-badge{font-size:.8em;font-weight:500;color:var(--subtle-text-light);background-color:var(--input-bg-light);border:1px solid var(--border-light);padding:.2rem .5rem;border-radius:.25rem;margin-left:.5rem;display:inline-block;vertical-align:middle}.short-answer-container{margin-top:.5rem}.short-answer-input.submitted{opacity:.7;cursor:not-allowed}textarea.short-answer-input{resize:none;overflow-y:hidden;font-family:inherit;line-height:1.5}.score-note-written{font-size:.85em;color:var(--subtle-text-light);margin-top:.75rem;text-align:center;font-style:italic}.written-answers-section{margin-top:1rem;padding-top:1rem;border-top:1px dashed var(--border-light);text-align:left}.written-answers-title{font-weight:600;font-size:.9em;color:var(--text-light);margin-bottom:.5rem}.written-qa{margin-bottom:.75rem;font-size:.85em;background-color:var(--input-bg-light);padding:.5rem;border-radius:.25rem;border:1px solid var(--border-light)}.written-question{font-weight:600;color:var(--subtle-text-light)}.written-answer{margin-top:.25rem;color:var(--text-light);white-space:pre-wrap;word-break:break-word}.teacher-actions-section{margin-top:1rem;margin-bottom:1rem;padding:1.25rem;background-color:var(--input-bg-light);border-radius:.6rem;border:1px dashed var(--border-light)}.teacher-actions-title{margin-top:0;margin-bottom:.75rem;font-size:.95em;font-weight:600;color:var(--text-light)}.teacher-actions-controls{display:flex;gap:.75rem;align-items:center;flex-wrap:wrap}.teacher-actions-controls .form-input{flex:1;margin:0;min-width:150px}.teacher-actions-controls .button{width:auto;margin:0;white-space:nowrap}#teacherResetCodeError{color:var(--red-color);margin-top:.5rem;margin-bottom:0;font-size:.9em;font-weight:500}';
class $ extends HTMLElement {
  static get observedAttributes() {
    return ["submission-url", "test-mode", "code", "reset-code"];
  }
  get testMode() {
    return this.hasAttribute("test-mode");
  }
  set testMode(e) {
    e ? this.setAttribute("test-mode", "") : this.removeAttribute("test-mode");
  }
  get code() {
    return this.getAttribute("code") !== null ? this.getAttribute("code") : E.teacherCode;
  }
  set code(e) {
    e != null ? this.setAttribute("code", e) : this.removeAttribute("code");
  }
  get resetCode() {
    return this.getAttribute("reset-code") !== null ? this.getAttribute("reset-code") : "7676";
  }
  set resetCode(e) {
    e != null ? this.setAttribute("reset-code", e) : this.removeAttribute("reset-code");
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.questionBank = [], this.passages = [], this.selectedVoiceName = null, this.isPlayingAll = !1, this.instructions = [], this.questionGroups = [], this.orderedSections = [], this.currentQuestions = [], this.score = 0, this.questionsAnswered = 0, this.questionsToDisplay = 5, this.totalQuestions = 0, this.audioPlayer = null, this.utterance = null, this.audioSrc = "", this.currentAudioButton = null, this.submissionUrl = E.submissionUrl || "", this.title = "", this.passage = "", this.vocabularySections = [], this.vocabUserChoices = {}, this.vocabScore = 0, this.vocabSubmitted = !1, this.clozeSections = [], this.clozeAnswers = {}, this.clozeScore = 0, this.clozeSubmitted = !1, this.userQuestionAnswers = {}, this.quizUnlocked = !0, this.autoSubmissionInProgress = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.ttsPaused = !1, this.tabAwayCount = 0, this._visibilityHandler = null;
  }
  attributeChangedCallback(e, t) {
    e === "submission-url" ? this.submissionUrl = t : e === "test-mode" && this.isConnected && (t !== null ? this.lockQuizContent() : this.unlockQuizContent());
  }
  _normalizeText(e) {
    return typeof e != "string" ? String(e || "") : e.trim().toLowerCase().replace(/['’‘]/g, "'").replace(/["“”]/g, '"').replace(/\s+/g, " ");
  }
  connectedCallback() {
    this._visibilityHandler = () => this._handleVisibilityChange(), document.addEventListener("visibilitychange", this._visibilityHandler), requestAnimationFrame(() => {
      if (this.config ? typeof this.config == "object" ? this.originalContent = JSON.stringify(this.config) : this.originalContent = String(this.config) : this.hasAttribute("config") ? this.originalContent = this.getAttribute("config") : this.querySelector('script[type="text/markdown"]') ? this.originalContent = this.querySelector('script[type="text/markdown"]').textContent : this.querySelector('script[type="application/json"]') ? this.originalContent = this.querySelector('script[type="application/json"]').textContent : this.originalContent = this.textContent, this.hasAttribute("submission-url") && (this.submissionUrl = this.getAttribute("submission-url")), this.loadTemplate(), this.setAttribute("translate", "no"), !this._shouldShowAudioControls()) {
        const t = this.shadowRoot.getElementById("voice-btn");
        t && t.classList.add("hidden");
      }
      this.checkBrowserSupport(), window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = () => this._updateVoiceList(), this._updateVoiceList()), this.parseContent(), this.setupEventListeners(), this.generateQuiz(), this.testMode ? this.lockQuizContent() : this.unlockQuizContent();
      const e = this.loadFromLocalStorage();
      e && this.restoreQuizState(e);
    });
  }
  disconnectedCallback() {
    this._visibilityHandler && (document.removeEventListener("visibilitychange", this._visibilityHandler), this._visibilityHandler = null);
  }
  _handleVisibilityChange() {
    this.testMode && (document.hidden ? (this.tabAwayCount++, this.classList.add("tab-away"), this._updateTabAwayBanner()) : this.classList.remove("tab-away"));
  }
  _updateTabAwayBanner() {
    const e = this.shadowRoot.getElementById("tabAwayBanner");
    if (e)
      if (this.tabAwayCount > 0) {
        const t = this.tabAwayCount === 1 ? "time" : "times";
        e.textContent = `⚠️ Warning: You left the quiz ${this.tabAwayCount} ${t}. Please stay focused on the test.`, e.classList.remove("hidden");
      } else
        e.classList.add("hidden");
  }
  loadTemplate() {
    try {
      const e = document.createElement("template");
      e.innerHTML = `<style>${Q}</style>${q}`, this.shadowRoot.firstChild && (this.shadowRoot.innerHTML = ""), this.shadowRoot.appendChild(e.content.cloneNode(!0)), console.log("Inlined template applied successfully");
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
    return L(window.speechSynthesis, e);
  }
  _updateVoiceList() {
    if (!window.speechSynthesis) return;
    const e = window.speechSynthesis.getVoices(), t = this.shadowRoot.querySelector(".voice-list");
    if (!t) return;
    const o = "en-US", s = e.filter((i) => i.lang.split(/[-_]/)[0].toLowerCase() === o.split("-")[0]), r = this._getBestVoice(o);
    t.innerHTML = "", s.sort((i, n) => i.name.localeCompare(n.name)), s.forEach((i) => {
      const n = document.createElement("button");
      n.type = "button", n.classList.add("voice-option-btn"), this.selectedVoiceName === i.name && n.classList.add("active");
      let a = `<span>${i.name}</span>`;
      r && i.name === r.name && (a += '<span class="badge">Best</span>'), n.innerHTML = a, n.onclick = () => {
        this.selectedVoiceName = i.name, this._updateVoiceList(), this._hideVoiceOverlay();
      }, t.appendChild(n);
    });
  }
  _showVoiceOverlay() {
    const e = this.shadowRoot.querySelector(".voice-overlay");
    e && (e.classList.remove("hidden"), this._updateVoiceList());
  }
  _hideVoiceOverlay() {
    const e = this.shadowRoot.querySelector(".voice-overlay");
    e && e.classList.add("hidden");
  }
  _shouldShowAudioControls() {
    return R(window.speechSynthesis);
  }
  _getAndroidIntentLink() {
    return T();
  }
  checkBrowserSupport() {
    if (!this._shouldShowAudioControls()) {
      const e = this.shadowRoot.getElementById("browser-prompt-overlay");
      if (e) {
        e.style.display = "flex";
        const t = this._getAndroidIntentLink(), o = this.shadowRoot.getElementById("browser-action-btn");
        t ? (o.href = t, o.textContent = "Open in Chrome") : (o.onclick = (s) => {
          s.preventDefault(), alert("Please open this page in Safari or Chrome for audio features.");
        }, o.textContent = "Use Safari / Chrome");
      }
    }
  }
  parseContent() {
    const e = this.originalContent || this.textContent;
    console.log("Parsing content:", e.substring(0, 200) + "...");
    const t = e.split("---").map((i) => i.trim());
    if (t.length >= 1) {
      const n = t[0].trim().split(`
`).map((a) => a.trim()).filter((a) => a.length > 0);
      n.length > 0 && (this.title = n[0]);
    }
    let o = null, s = null;
    for (let i = 1; i < t.length; i++) {
      const a = t[i].split(`
`);
      if (a.length === 0) continue;
      const l = (a[0] || "").trim().toLowerCase(), h = a.slice(1).join(`
`);
      if (l.startsWith("vocab")) {
        const u = l.match(/vocab(?:-(\d+))?/), c = u && u[1] ? parseInt(u[1]) : null;
        this.parseVocabulary(h, c), this.orderedSections.push({ type: "vocab", data: { vocabCount: c } }), o = "vocab";
      } else if (l.startsWith("cloze")) {
        const u = l.match(/cloze(?:-(\d+))?/), c = u && u[1] ? parseInt(u[1]) : null;
        this.parseCloze(h, c), this.orderedSections.push({ type: "cloze", data: { clozeCount: c, text: h } }), o = "cloze";
      } else if (l.startsWith("instructions")) {
        const u = this.passages.length, { heading: c, body: g } = this.extractHeadingAndBody(h, `Instructions ${this.instructions.length + 1}`);
        this.instructions.push({ sectionId: u, heading: c, body: g }), this.passages.push({ text: g || c, sectionId: u, listening: !1, isInstruction: !0 }), this.orderedSections.push({ type: "instructions", sectionId: u, heading: c, body: g }), s = u, o = "instructions";
      } else if (l.startsWith("questions")) {
        const u = l.match(/questions(?:-(\d+))?/), c = u && u[1] ? parseInt(u[1]) : null, g = this.parseQuestions(h), f = o === "text" || o === "instructions" || o === "questions" && this.orderedSections.length > 0 && this.orderedSections[this.orderedSections.length - 1].tiedToPassage;
        s !== null ? (this.questionGroups.push({ sectionId: s, questions: g, maxQuestions: c }), this.orderedSections.push({ type: "questions", sectionId: s, questions: g, maxQuestions: c, tiedToPassage: f })) : (this.questionGroups.push({ sectionId: null, questions: g, maxQuestions: c }), this.orderedSections.push({ type: "questions", sectionId: null, questions: g, maxQuestions: c, tiedToPassage: !1 })), o = "questions";
      } else
        switch (l) {
          case "text":
          case "text-listening":
            const u = l === "text-listening", c = this.passages.length;
            this.passages.push({ text: h, sectionId: c, listening: u }), this.passage = h, s = c, this.orderedSections.push({ type: "text", sectionId: c, text: h, listening: u }), o = "text";
            break;
          case "audio":
            this.parseAudio(h), this.orderedSections.push({ type: "audio", audioSrc: this.audioSrc }), o = "audio";
            break;
          default:
            o = null;
        }
    }
    this.title && (this.shadowRoot.getElementById("quizTitle").textContent = this.title);
    const r = this.questionGroups.reduce((i, n) => i + (n.questions ? n.questions.length : 0), 0);
    console.log("Parsed:", {
      title: this.title,
      passages: this.passages.length,
      passageLength: this.passage.length,
      vocabularySections: this.vocabularySections.length,
      clozeSections: this.clozeSections.length,
      audioSrc: this.audioSrc,
      questionsCount: r
    });
  }
  parseVocabulary(e, t = null) {
    if (!e) return;
    const o = e.split(/\r?\n/).map((a) => a.trim()).filter(Boolean), s = o.length > 0 ? o.slice() : [e.trim()], r = (a) => {
      const d = {};
      return a.forEach((l) => {
        const h = l.indexOf(":");
        if (h === -1) return;
        const u = l.slice(0, h).trim(), c = l.slice(h + 1).trim().replace(/,$/, "");
        u && c && (d[u] = c);
      }), d;
    };
    let i = r(s);
    if (Object.keys(i).length <= 1 && e.indexOf(",") !== -1) {
      const a = e.split(",").map((d) => d.trim()).filter(Boolean);
      i = r(a);
    }
    let n;
    if (t && Object.keys(i).length > t) {
      const a = Object.entries(i);
      this.shuffleArray(a);
      const d = a.slice(0, t);
      n = Object.fromEntries(d);
    } else
      n = i;
    this.vocabularySections.push({
      vocabulary: n,
      sectionId: this.vocabularySections.length
    }), console.log("Vocabulary section parsed. Words in this section:", Object.keys(n).length, "Max words:", t);
  }
  parseAudio(e) {
    if (!e) return;
    const t = e.match(/audio-src\s*=\s*(.+)/);
    t && (this.audioSrc = t[1].trim());
  }
  parseCloze(e, t = null) {
    if (!e) return;
    const o = e.match(/\*([^*]+)\*/g);
    let s = [];
    o && (s = o.map((r) => r.replace(/\*/g, "")), t && s.length > t && (this.shuffleArray(s), s = s.slice(0, t))), this.clozeSections.push({
      text: e,
      words: s,
      sectionId: this.clozeSections.length
    }), console.log("Cloze section parsed. Total words available:", o ? o.length : 0, "Words to remove:", s.length, "Max blanks:", t);
  }
  parseQuestions(e, t = null) {
    if (!e) return [];
    const o = e.split(`
`).map((i) => i.trim()).filter((i) => i.length > 0);
    let s = null;
    const r = [];
    for (const i of o)
      if (i.startsWith("Q:") || i.startsWith("Q."))
        s && r.push(s), s = {
          q: i.substring(2).trim(),
          o: [],
          a: "",
          e: ""
          // explanation
        };
      else if (i.startsWith("A:") && s) {
        const n = i.substring(2).trim(), a = n.includes("[correct]"), d = n.replace("[correct]", "").trim();
        s.o.push(d), a && (s.a = d);
      } else i.startsWith("E:") && s && (s.e = i.substring(2).trim());
    return s && r.push(s), console.log("Questions parsed. Total questions parsed:", r.length, "Max questions (deferred):", t), r;
  }
  extractHeadingAndBody(e, t = "Instructions") {
    const o = (e || "").split(`
`);
    let s = "";
    const r = [];
    for (const n of o)
      !s && n.trim().length > 0 ? s = n.trim() : r.push(n);
    s || (s = t);
    const i = r.join(`
`).trim();
    return { heading: s, body: i };
  }
  generateVocabMatching() {
    const e = this.shadowRoot.getElementById("vocabSection"), t = this.shadowRoot.getElementById("vocabGrid");
    if (this.vocabularySections.length === 0) {
      e.classList.add("hidden");
      return;
    }
    e.classList.remove("hidden"), t.innerHTML = "", this.vocabScore = 0, this.vocabUserChoices = {}, this.vocabSubmitted = !1, this.vocabularySections.forEach((o, s) => {
      const { vocabulary: r, sectionId: i } = o;
      if (!r) return;
      if (this.vocabularySections.length > 1) {
        const u = document.createElement("div");
        u.className = "vocab-section-header", u.innerHTML = `<h4>Vocabulary Set ${s + 1}</h4>`, t.appendChild(u);
      }
      const n = Object.keys(r), a = Object.values(r);
      this.shuffleArray(a);
      const d = document.createElement("div");
      d.className = "vocab-grid-table";
      const l = document.createElement("div");
      l.className = "vocab-grid-header";
      const h = document.createElement("div");
      if (h.className = "vocab-grid-header-cell", h.textContent = "Word", l.appendChild(h), a.forEach((u) => {
        const c = document.createElement("div");
        c.className = "vocab-grid-header-cell", c.textContent = u, l.appendChild(c);
      }), d.appendChild(l), n.forEach((u, c) => {
        const g = document.createElement("div");
        g.className = "vocab-grid-row";
        const f = document.createElement("div");
        f.className = "vocab-grid-cell vocab-word-cell", f.textContent = u, g.appendChild(f);
        const m = r[u], v = a.filter((b) => b !== m);
        this.shuffleArray(v);
        const p = [m, ...v.slice(0, 3)];
        this.shuffleArray(p), p.forEach((b, S) => {
          const x = document.createElement("div");
          x.className = "vocab-grid-cell vocab-option-cell";
          const k = document.createElement("div");
          k.className = "vocab-radio-container";
          const C = document.createElement("input");
          C.type = "radio", C.name = `vocab-${i}-${c}`, C.value = b, C.id = `vocab-${i}-${c}-${S}`, k.appendChild(C), x.appendChild(k);
          const I = document.createElement("span");
          I.className = "vocab-def-label", I.textContent = b, x.appendChild(I), g.appendChild(x);
        }), d.appendChild(g);
      }), t.appendChild(d), s < this.vocabularySections.length - 1) {
        const u = document.createElement("div");
        u.style.marginBottom = "2rem", t.appendChild(u);
      }
    });
  }
  generateCloze() {
    const e = this.shadowRoot.getElementById("clozeSection"), t = this.shadowRoot.getElementById("clozeContainer");
    if (this.clozeSections.length === 0) {
      e.classList.add("hidden");
      return;
    }
    if (e.classList.remove("hidden"), this.clozeScore = 0, this.clozeAnswers = {}, this.clozeSubmitted = !1, !t) {
      const s = document.createElement("div");
      s.id = "clozeContainer", e.appendChild(s);
    }
    const o = this.shadowRoot.getElementById("clozeContainer");
    o.innerHTML = "", this.clozeSections.forEach((s, r) => {
      const { text: i, words: n, sectionId: a } = s, d = document.createElement("div");
      if (d.className = "cloze-section-wrapper", this.clozeSections.length > 1) {
        const g = document.createElement("h4");
        g.className = "cloze-section-header", g.textContent = `Fill in the Blanks - Section ${r + 1}`, d.appendChild(g);
      }
      const l = document.createElement("div");
      l.className = "cloze-word-bank", l.innerHTML = `
                <div class="cloze-bank-title">Word Bank</div>
                <div class="cloze-bank-words">
                    ${n.map((g) => `<span class="cloze-bank-word">${g}</span>`).join("")}
                </div>
            `, d.appendChild(l);
      const h = document.createElement("div");
      h.className = "cloze-text";
      let u = i, c = 0;
      n.forEach((g) => {
        const f = new RegExp(`\\*${g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\*`, "gi");
        u = u.replace(f, () => {
          const m = `<input type="text" class="cloze-blank" data-answer="${g.toLowerCase()}" data-section-id="${a}" data-blank-index="${c}" autocomplete="off" spellcheck="false" title="Fill in the blank">`;
          return c++, m;
        });
      }), u = u.replace(/\*([^*]+)\*/g, "$1"), u = this.addLineBreaksToHtml(u), h.innerHTML = u, d.appendChild(h), r < this.clozeSections.length - 1 && (d.style.marginBottom = "2rem"), o.appendChild(d);
    });
  }
  // Render a single vocabulary section inline into the target container
  renderVocabInline(e, t, o) {
    const { vocabulary: s, sectionId: r } = e, n = this.vocabularySections.length > 1 ? `Vocabulary Set ${o + 1}` : "Vocabulary", { card: a, content: d } = this.createSectionCard(n, {
      cardClasses: ["vocab-card"]
    }), h = Object.keys(s).map((f, m) => ({
      letter: String.fromCharCode(65 + m),
      // A, B, C...
      word: f,
      definition: s[f]
    })), u = document.createElement("div");
    u.className = "vocab-word-bank", u.innerHTML = `
            <div class="vocab-bank-title">Word Bank</div>
            <div class="vocab-bank-items">
                ${h.map((f) => `<span class="vocab-bank-item">${f.letter}: ${f.word.toUpperCase()}</span>`).join("")}
            </div>
        `, d.appendChild(u);
    const c = document.createElement("div");
    c.className = "vocab-matching-container";
    const g = [...h];
    this.shuffleArray(g), g.forEach((f) => {
      const m = document.createElement("div");
      m.className = "vocab-matching-row";
      const v = document.createElement("div");
      v.className = "vocab-matching-input-group";
      const p = document.createElement("input");
      p.type = "text", p.className = "vocab-matching-input", p.maxLength = 1, p.dataset.sectionId = r, p.dataset.word = f.word, p.dataset.correctLetter = f.letter, p.autocomplete = "off", p.setAttribute("autocapitalize", "characters"), p.setAttribute("autocorrect", "off"), p.setAttribute("spellcheck", "false"), p.inputMode = "text", p.title = "Enter the letter for this definition", v.appendChild(p), m.appendChild(v);
      const b = document.createElement("div");
      b.className = "vocab-definition-text", b.textContent = f.definition, m.appendChild(b), c.appendChild(m);
    }), d.appendChild(c), t.appendChild(a);
  }
  // Render a single cloze section inline into the target container
  renderClozeInline(e, t, o) {
    const { text: s, words: r, sectionId: i } = e, n = this.clozeSections.length > 1 ? `Fill in the Blanks - Section ${o + 1}` : "Fill in the Blanks", { card: a, content: d } = this.createSectionCard(n, {
      cardClasses: ["cloze-card"]
    }), l = document.createElement("div");
    l.className = "cloze-word-bank", l.innerHTML = `
            <div class="cloze-bank-title">Word Bank</div>
            <div class="cloze-bank-words">
                ${r.map((g) => `<span class="cloze-bank-word">${g}</span>`).join("")}
            </div>
        `, d.appendChild(l);
    let h = s, u = 0;
    r.forEach((g) => {
      const f = new RegExp(`\\*${g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\*`, "gi");
      h = h.replace(f, () => {
        const m = `<input type="text" class="cloze-blank" data-answer="${g.toLowerCase()}" data-section-id="${i}" data-blank-index="${u}" autocomplete="off" spellcheck="false" inputmode="text" autocapitalize="none" autocorrect="off" title="Fill in the blank">`;
        return u++, m;
      });
    }), h = h.replace(/\*([^*]+)\*/g, "$1"), h = this.addLineBreaksToHtml(h);
    const c = document.createElement("div");
    c.className = "cloze-text", c.innerHTML = h, d.appendChild(c), t.appendChild(a);
  }
  handleVocabAnswer(e) {
    const t = e.target;
    if (t.type === "text" && t.classList.contains("vocab-matching-input")) {
      const o = t.value.trim().toUpperCase();
      t.value !== o && (t.value = o);
      const s = parseInt(t.dataset.sectionId), r = t.dataset.word, i = `${s}-${r}`;
      o ? this.vocabUserChoices[i] = o : delete this.vocabUserChoices[i], this.updateCheckScoreButtonState();
    }
  }
  updateCheckScoreButtonState() {
    const e = this.vocabularySections.length === 0 || Object.keys(this.vocabUserChoices).length === this.getTotalVocabWords(), t = this.totalQuestions === 0 || this.checkAllQuestionsAnswered(), o = this.checkAllClozeAnswered();
    if (e && t && o) {
      const s = this.shadowRoot.getElementById("checkScoreButton");
      s && (s.disabled = !1);
    }
  }
  handleClozeAnswer(e) {
    if (e.target.type !== "text" || !e.target.classList.contains("cloze-blank")) return;
    const t = e.target, o = t.dataset.sectionId, s = t.dataset.blankIndex, r = t.value.trim().toLowerCase(), i = `${o}-${s}`;
    if (this.clozeAnswers[i] = r, this.checkAllClozeAnswered()) {
      const n = this.vocabularySections.length === 0 || Object.keys(this.vocabUserChoices).length === this.getTotalVocabWords(), a = this.totalQuestions === 0 || this.checkAllQuestionsAnswered();
      if (n && a) {
        const d = this.shadowRoot.getElementById("checkScoreButton");
        d.disabled = !1;
      }
    }
  }
  handleShortAnswer(e) {
    if (!e.target.classList.contains("short-answer-input")) return;
    const t = e.target, o = t.name, s = parseInt(o.substring(1)), r = t.value.trim();
    r ? (this.userQuestionAnswers[s] = r, t.dataset.answered = "true") : (delete this.userQuestionAnswers[s], delete t.dataset.answered);
    const i = Object.keys(this.userQuestionAnswers).length;
    this.questionsAnswered = i, this.updateCheckScoreButtonState();
  }
  autoExpandTextarea(e) {
    e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
  }
  checkAllClozeAnswered() {
    const e = this.clozeSections.reduce((o, s) => o + s.words.length, 0);
    return Object.keys(this.clozeAnswers).filter((o) => this.clozeAnswers[o].length > 0).length === e;
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
    const { descriptionHtml: o = "", cardClasses: s = [] } = t, r = document.createElement("div"), i = ["section-card", ...s].filter(Boolean);
    r.className = i.join(" ");
    const n = document.createElement("div");
    if (n.className = "section-card-header", n.textContent = e, r.appendChild(n), o) {
      const d = document.createElement("div");
      d.className = "section-card-description", d.innerHTML = o, r.appendChild(d);
    }
    const a = document.createElement("div");
    return a.className = "section-card-content", r.appendChild(a), { card: r, content: a };
  }
  showVocabScore() {
    this.vocabScore = 0, this.getTotalVocabWords(), this.vocabularySections.forEach((e) => {
      const { vocabulary: t, sectionId: o } = e;
      if (!t) return;
      Object.keys(t).forEach((r) => {
        const i = `${o}-${r}`, n = this.vocabUserChoices[i], a = this.shadowRoot.querySelector(`.vocab-matching-input[data-section-id="${o}"][data-word="${r}"]`);
        if (!a) return;
        const d = a.dataset.correctLetter, l = a.closest(".vocab-matching-row");
        if (a.disabled = !0, !this.testMode) {
          let h = l.querySelector(".feedback-icon");
          h || (h = document.createElement("span"), h.className = "feedback-icon", l.appendChild(h)), n === d ? (l.classList.add("correct"), h.textContent = " ✅") : (l.classList.add("incorrect"), h.textContent = " ❌");
        }
        n === d && this.vocabScore++;
      });
    }), this.vocabSubmitted = !0;
  }
  showClozeScore() {
    this.clozeScore = 0, this.clozeSections.reduce((t, o) => t + o.words.length, 0), this.shadowRoot.querySelectorAll(".cloze-blank").forEach((t) => {
      const o = this._normalizeText(t.dataset.answer), r = this._normalizeText(t.value) === o;
      r && this.clozeScore++, this.testMode || (r ? t.classList.add("correct") : t.classList.add("incorrect")), t.disabled = !0;
    }), this.clozeSubmitted = !0;
  }
  setupEventListeners() {
    const e = this.shadowRoot.getElementById("quizForm"), t = this.shadowRoot.getElementById("sendButton"), o = this.shadowRoot.getElementById("tryAgainButton"), s = this.shadowRoot.querySelector(".theme-toggle"), r = this.shadowRoot.getElementById("startQuizButton");
    e && e.addEventListener("keydown", (c) => {
      !this.quizUnlocked && c.key === "Enter" && c.preventDefault();
    });
    const i = this.shadowRoot.getElementById("retrySendButton");
    e && (e.addEventListener("change", (c) => {
      this.handleAnswer(c);
    }), e.addEventListener("input", (c) => {
      this.handleClozeAnswer(c), this.handleVocabAnswer(c), this.handleShortAnswer(c), c.target.classList.contains("short-answer-input") && c.target.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(c.target);
    }), e.addEventListener("submit", (c) => this.handleSubmit(c))), t && t.addEventListener("click", () => this.sendScore()), o && o.addEventListener("click", () => this.resetQuiz()), i && i.addEventListener("click", () => this.sendScore(!1, !0));
    const n = this.shadowRoot.getElementById("reopenEditButton"), a = this.shadowRoot.getElementById("resetTryAgainButton"), d = this.shadowRoot.getElementById("teacherResetCode");
    n && n.addEventListener("click", () => this.handleReopenEdit()), a && a.addEventListener("click", () => this.handleResetTryAgain()), d && d.addEventListener("keydown", (c) => {
      c.key === "Enter" && (c.preventDefault(), this.handleReopenEdit());
    }), s && s.addEventListener("click", () => this.toggleTheme()), r && r.addEventListener("click", () => this.handleStartQuiz());
    const l = this.shadowRoot.getElementById("unlockTestButton"), h = this.shadowRoot.getElementById("lockTeacherCode"), u = this.shadowRoot.getElementById("lockErrorAlert");
    l && l.addEventListener("click", () => {
      const c = h ? h.value.trim() : "";
      if (c === this.code) {
        u && u.classList.add("hidden");
        const g = this.getTeacherCodeInput();
        g && (g.value = c), this.unlockQuizContent();
      } else
        u && (u.textContent = "❌ Invalid Teacher Code / รหัสผ่านไม่ถูกต้อง", u.classList.remove("hidden"));
    }), h && h.addEventListener("keydown", (c) => {
      c.key === "Enter" && (c.preventDefault(), l && l.click());
    }), this.getStudentInputs().forEach((c) => {
      c.addEventListener("input", () => {
        c.value.trim() !== "" && c.classList.remove("invalid"), this.quizUnlocked || this.showStudentInfoAlert();
      });
    }), this.shadowRoot.addEventListener("click", (c) => {
      const g = c.target.closest(".passage-audio-toggle");
      if (g) {
        const b = g.closest(".section-card"), x = (b ? Array.from(b.querySelectorAll(".passage-text")) : []).map((k) => k.textContent).join(`
`);
        this.handlePassageTTS(g, x);
        return;
      }
      c.target.closest(".audio-toggle") && this.handleAudioToggle(), c.target.closest("#voice-btn") && this._showVoiceOverlay(), c.target.closest(".close-voice-btn") && this._hideVoiceOverlay(), c.target.closest(".voice-overlay") && !c.target.closest(".voice-card") && this._hideVoiceOverlay();
    });
  }
  shuffleArray(e) {
    for (let t = e.length - 1; t > 0; t--) {
      const o = Math.floor(Math.random() * (t + 1));
      [e[t], e[o]] = [e[o], e[t]];
    }
  }
  setAudioIcon(e) {
    const t = this.shadowRoot.querySelector(".play-icon"), o = this.shadowRoot.querySelector(".pause-icon");
    e === "playing" ? (t.classList.add("hidden"), o.classList.remove("hidden")) : (t.classList.remove("hidden"), o.classList.add("hidden"));
  }
  // Set play/pause icon state for a specific passage audio button
  setPassageAudioIcon(e, t) {
    if (!e) return;
    const o = e.querySelector(".play-icon"), s = e.querySelector(".pause-icon");
    !o || !s || (t === "playing" ? (o.classList.add("hidden"), s.classList.remove("hidden")) : (o.classList.remove("hidden"), s.classList.add("hidden")));
  }
  stopAllAudio() {
    window.speechSynthesis && window.speechSynthesis.cancel(), this.audioPlayer && (this.audioPlayer.pause(), this.audioPlayer.currentTime = 0), this.ttsPaused = !1, this.setAudioIcon("paused"), this.currentAudioButton && (this.setPassageAudioIcon(this.currentAudioButton, "paused"), this.currentAudioButton = null);
  }
  handleTTS() {
    if (this.audioPlayer && !this.audioPlayer.paused && this.audioPlayer.pause(), window.speechSynthesis.speaking && this.ttsPaused)
      window.speechSynthesis.resume(), this.ttsPaused = !1, this.setAudioIcon("playing");
    else if (window.speechSynthesis.speaking && !this.ttsPaused)
      window.speechSynthesis.pause(), this.ttsPaused = !0, this.setAudioIcon("paused");
    else {
      this.stopAllAudio(), this.utterance = new SpeechSynthesisUtterance(this.passage), this.utterance.lang = "en-US";
      let t = window.speechSynthesis.getVoices().find((o) => o.name === this.selectedVoiceName);
      t || (t = this._getBestVoice("en-US")), t && (this.utterance.voice = t), this.utterance.onstart = () => {
        this.setAudioIcon("playing"), this.ttsPaused = !1;
      }, this.utterance.onend = () => {
        this.setAudioIcon("paused"), this.ttsPaused = !1;
      }, this.utterance.onerror = (o) => {
        console.error("TTS Error:", o), this.setAudioIcon("paused"), this.ttsPaused = !1;
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
  // Play/pause TTS for a specific passage button and text
  handlePassageTTS(e, t) {
    if (e) {
      if (this.currentAudioButton && this.currentAudioButton !== e && this.stopAllAudio(), window.speechSynthesis && window.speechSynthesis.speaking && this.currentAudioButton === e) {
        this.ttsPaused ? (window.speechSynthesis.resume(), this.ttsPaused = !1, this.setPassageAudioIcon(e, "playing")) : (window.speechSynthesis.pause(), this.ttsPaused = !0, this.setPassageAudioIcon(e, "paused"));
        return;
      }
      this.stopAllAudio();
      try {
        this.utterance = new SpeechSynthesisUtterance(t || ""), this.utterance.lang = "en-US";
        let s = window.speechSynthesis.getVoices().find((r) => r.name === this.selectedVoiceName);
        s || (s = this._getBestVoice("en-US")), s && (this.utterance.voice = s), this.utterance.onstart = () => {
          this.setPassageAudioIcon(e, "playing"), this.currentAudioButton = e, this.ttsPaused = !1;
        }, this.utterance.onend = () => {
          this.setPassageAudioIcon(e, "paused"), this.currentAudioButton === e && (this.currentAudioButton = null, this.ttsPaused = !1);
        }, this.utterance.onerror = (r) => {
          console.error("Passage TTS Error:", r), this.setPassageAudioIcon(e, "paused"), this.currentAudioButton === e && (this.currentAudioButton = null, this.ttsPaused = !1);
        }, window.speechSynthesis.speak(this.utterance);
      } catch (o) {
        console.error("TTS not available:", o);
      }
    }
  }
  createQuestionBlock(e, t) {
    const o = `q${t}`, s = !e.o || e.o.length === 0;
    let r = "";
    if (s)
      r = `
                <div class="short-answer-container">
                    <textarea name="${o}" class="form-input short-answer-input" rows="3" placeholder="Type your answer here" required></textarea>
                </div>
            `;
    else {
      const a = [...e.o];
      this.shuffleArray(a), r = a.map((d) => `
                <label class="option-label">
                    <input type="radio" name="${o}" value="${d}" class="form-radio" required>
                    <span>${d}</span>
                </label>
            `).join("");
    }
    const i = e.e ? `<div class="explanation hidden" id="explanation-${o}">
            <div class="explanation-content">
                <strong>Explanation:</strong> ${e.e}
            </div>
        </div>` : "", n = document.createElement("div");
    return n.className = "question-block", n.innerHTML = `
            <p class="question-text">${e.q}</p>
            <div class="options-group">${r}</div>
            ${i}
        `, n;
  }
  generateQuiz() {
    const e = this.shadowRoot.getElementById("checkScoreButton"), t = this.shadowRoot.getElementById("dynamicContent");
    if (!t) {
      console.error("generateQuiz failed: dynamicContent element not found in shadow DOM");
      return;
    }
    console.log("generateQuiz called, questions total:", this.totalQuestions), t.innerHTML = "", this.score = 0, this.questionsAnswered = 0, this.userQuestionAnswers = {}, e.disabled = !0;
    const o = [];
    let s = 0, r = 0;
    this.orderedSections.forEach((i) => {
      if (i.type === "audio") {
        if (!this._shouldShowAudioControls()) return;
        const n = this.shadowRoot.querySelector(".quiz-header");
        if (n && !n.querySelector(".audio-toggle-container")) {
          const a = document.createElement("div");
          a.className = "audio-toggle-container", a.style.marginTop = "1rem", a.innerHTML = `
                        <button type="button" class="audio-toggle" title="Play Overall Audio">
                            <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            <svg class="pause-icon hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                            <span style="margin-left: 0.5rem; font-weight: 600;">Play Lesson Audio</span>
                        </button>
                    `, n.appendChild(a);
        }
      } else if (i.type === "text") {
        const { card: n, content: a } = this.createSectionCard(i.heading || "Reading Passage", {
          cardClasses: ["passage-card"]
        }), d = document.createElement("div");
        d.className = "passage-wrapper";
        const l = document.createElement("button");
        l.type = "button", l.className = "passage-audio-toggle", l.title = "Play Passage Audio", l.innerHTML = `
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <svg class="pause-icon hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                `;
        const h = n.querySelector(".section-card-header");
        h && h.appendChild(l), i.text.split(/\n\s*\n/).forEach((c) => {
          const g = document.createElement("p");
          g.className = "passage-text", i.listening && g.classList.add("listening-hidden"), g.textContent = c.trim(), d.appendChild(g);
        }), a.appendChild(d), t.appendChild(n);
      } else if (i.type === "instructions") {
        const n = i.heading || "Instructions", a = i.body ? this.formatTextWithLineBreaks(i.body) : "", { card: d } = this.createSectionCard(n, {
          descriptionHtml: a,
          cardClasses: ["instruction-card"]
        });
        t.appendChild(d);
      } else if (i.type === "vocab") {
        const n = this.vocabularySections[s++];
        n && this.renderVocabInline(n, t, s - 1);
      } else if (i.type === "cloze") {
        const n = this.clozeSections[r++];
        n && this.renderClozeInline(n, t, r - 1);
      } else if (i.type === "questions") {
        const { card: n, content: a } = this.createSectionCard("Comprehension Questions", {
          cardClasses: ["questions-card"]
        }), d = document.createElement("p");
        if (d.className = "reading-instructions instruction", d.textContent = "Read each question and select the best answer from the choices below.", a.appendChild(d), t.appendChild(n), i.questions && i.questions.length > 0) {
          const l = i.maxQuestions || null;
          let h = [...i.questions];
          l && h.length > l && (this.shuffleArray(h), h = h.slice(0, l)), h.forEach((u) => o.push({ question: u, container: a }));
        }
      }
    }), this.currentQuestions = o.map((i) => i.question), this.totalQuestions = this.currentQuestions.length, this.currentQuestions.forEach((i, n) => {
      const a = o[n];
      (a && a.container ? a.container : t).appendChild(this.createQuestionBlock(i, n));
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
    return `tj-quiz-result-${(this.title || "untitled-quiz").toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
  }
  saveToLocalStorage(e) {
    try {
      const t = this.getStorageKey();
      localStorage.setItem(t, JSON.stringify({
        ...e,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }));
    } catch (t) {
      console.warn("Failed to save to localStorage:", t);
    }
  }
  loadFromLocalStorage() {
    try {
      const e = this.getStorageKey(), t = localStorage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (e) {
      return console.warn("Failed to load from localStorage:", e), null;
    }
  }
  clearLocalStorage() {
    try {
      const e = this.getStorageKey();
      localStorage.removeItem(e);
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
  saveCurrentStateToLocalStorage() {
    const e = this.getTotalVocabWords(), t = this.clozeSections.reduce((i, n) => i + n.words.length, 0), o = this.currentQuestions.filter((i) => i.o && i.o.length > 0).length, s = this.vocabScore + this.clozeScore + this.score, r = this.getTeacherCodeInput();
    this.saveToLocalStorage({
      nickname: this.shadowRoot.getElementById("nickname") ? this.shadowRoot.getElementById("nickname").value : "",
      homeroom: this.shadowRoot.getElementById("homeroom") ? this.shadowRoot.getElementById("homeroom").value : "",
      studentId: this.shadowRoot.getElementById("studentId") ? this.shadowRoot.getElementById("studentId").value : "",
      teacherCode: r ? r.value : "",
      vocabScore: this.vocabScore,
      clozeScore: this.clozeScore,
      score: this.score,
      totalPossible: e + t + o,
      totalEarned: s,
      scoreSentToServer: this.scoreSentToServer,
      userQuestionAnswers: this.userQuestionAnswers,
      clozeAnswers: this.clozeAnswers,
      vocabUserChoices: this.vocabUserChoices,
      vocabSubmitted: this.vocabSubmitted,
      clozeSubmitted: this.clozeSubmitted
    });
  }
  restoreQuizState(e) {
    const t = this.shadowRoot.getElementById("nickname"), o = this.shadowRoot.getElementById("homeroom"), s = this.shadowRoot.getElementById("studentId"), r = this.getTeacherCodeInput();
    t && (t.value = e.nickname || ""), o && (o.value = e.homeroom || ""), s && (s.value = e.studentId || ""), r && (r.value = e.teacherCode || ""), this.vocabScore = e.vocabScore || 0, this.clozeScore = e.clozeScore || 0, this.score = e.score || 0, this.scoreSentToServer = e.scoreSentToServer || !1, this.userQuestionAnswers = e.userQuestionAnswers || {}, this.clozeAnswers = e.clozeAnswers || {}, this.vocabUserChoices = e.vocabUserChoices || {};
    for (let i = 0; i < this.totalQuestions; i++) {
      const n = `q${i}`, a = this.userQuestionAnswers[i];
      if (a !== void 0) {
        const d = this.currentQuestions[i];
        if (d.o && d.o.length > 0) {
          const l = this.shadowRoot.querySelector(`input[name="${n}"][value="${a}"]`);
          l && (l.checked = !0, l.dataset.answered = "true");
        } else {
          const l = this.shadowRoot.querySelector(`.short-answer-input[name="${n}"]`);
          l && (l.value = a, l.dataset.answered = "true", l.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(l));
        }
      }
    }
    Object.keys(this.vocabUserChoices).forEach((i) => {
      const n = this.vocabUserChoices[i], a = i.split("-"), d = a[0], l = a.slice(1).join("-"), h = this.shadowRoot.querySelector(`.vocab-matching-input[data-section-id="${d}"][data-word="${l}"]`);
      h && (h.value = n);
    }), Object.keys(this.clozeAnswers).forEach((i) => {
      const n = this.clozeAnswers[i], a = i.split("-"), d = a[0], l = a[1], h = this.shadowRoot.querySelector(`.cloze-blank[data-section-id="${d}"][data-blank-index="${l}"]`);
      h && (h.value = n);
    }), this.vocabSubmitted = e.vocabSubmitted || !1, this.clozeSubmitted = e.clozeSubmitted || !1, this.showFinalScore(!1);
  }
  showStudentInfoAlert(e = "", t = "") {
    const o = this.shadowRoot.getElementById("studentInfoAlert");
    o && (o.textContent = e, o.className = t || "");
  }
  validateStudentInfoFields(e = {}) {
    const { showAlert: t = !0 } = e, o = this.getStudentInputs();
    let s = !0;
    return o.forEach((r) => {
      r.value.trim() === "" ? (s = !1, r.classList.add("invalid")) : r.classList.remove("invalid");
    }), t && (s ? this.showStudentInfoAlert() : this.showStudentInfoAlert("Please fill out all student information fields before continuing.", "error")), s;
  }
  lockQuizContent() {
    const e = this.shadowRoot.getElementById("quizContent");
    e && e.classList.add("hidden");
    const t = this.shadowRoot.getElementById("testModeLockSection");
    t && t.classList.remove("hidden"), this.quizUnlocked = !1, this.updateTeacherCodeInputVisibility();
  }
  unlockQuizContent() {
    const e = this.shadowRoot.getElementById("quizContent");
    e && e.classList.remove("hidden");
    const t = this.shadowRoot.getElementById("testModeLockSection");
    t && t.classList.add("hidden"), this.quizUnlocked = !0, this.updateTeacherCodeInputVisibility();
  }
  updateTeacherCodeInputVisibility() {
    const e = this.shadowRoot.getElementById("teacherCodeGroup");
    e && (this.testMode ? e.classList.add("hidden") : e.classList.remove("hidden"));
  }
  handleStartQuiz() {
    this.unlockQuizContent();
  }
  checkInitialCompletion() {
    const e = this.vocabularySections.length > 0, t = this.totalQuestions > 0, o = this.clozeSections.length > 0;
    o && !e && !t || !o && !e && !t && this.shadowRoot.getElementById("checkScoreContainer").classList.add("hidden");
  }
  checkAllQuestionsAnswered() {
    return this.questionsAnswered === this.totalQuestions;
  }
  showQuestionFeedback() {
    this.score = 0;
    for (let e = 0; e < this.totalQuestions; e++) {
      const t = this.currentQuestions[e], o = `q${e}`, s = this.userQuestionAnswers[e];
      if (!t.o || t.o.length === 0) {
        const n = this.shadowRoot.querySelector(`.short-answer-input[name="${o}"]`);
        n && (n.disabled = !0, n.classList.add("submitted"));
      } else
        this.shadowRoot.querySelectorAll(`input[name="${o}"]`).forEach((a) => {
          const d = a.closest(".option-label");
          if (a.disabled = !0, !this.testMode) {
            let l = d.querySelector(".feedback-icon");
            l || (l = document.createElement("span"), l.className = "feedback-icon", d.appendChild(l)), s === a.value && (s === t.a ? (d.classList.add("correct"), l.textContent = "✅") : (d.classList.add("incorrect"), l.textContent = "❌"));
          }
        }), s === t.a && this.score++;
      const i = this.shadowRoot.getElementById(`explanation-q${e}`);
      i && i.classList.add("hidden");
    }
  }
  handleAnswer(e) {
    if (e.target.type !== "radio") return;
    const t = e.target, o = t.name;
    if (o.startsWith("vocab-")) return;
    const s = parseInt(o.substring(1));
    this.userQuestionAnswers[s] = t.value, t.dataset.answered = "true";
    const r = Object.keys(this.userQuestionAnswers).length;
    this.questionsAnswered = r;
    const i = this.vocabularySections.length === 0 || Object.keys(this.vocabUserChoices).length === this.getTotalVocabWords(), n = this.checkAllQuestionsAnswered(), a = this.checkAllClozeAnswered();
    i && n && a && (this.shadowRoot.getElementById("checkScoreButton").disabled = !1);
  }
  handleSubmit(e) {
    if (e.preventDefault(), !this.validateStudentInfoFields({ showAlert: !0 })) {
      const t = this.shadowRoot.getElementById("studentInfoSection");
      t && t.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    this.saveCurrentStateToLocalStorage(), this.showFinalScore();
  }
  showFinalScore(e = !0) {
    this.totalQuestions > 0 && this.showQuestionFeedback(), this.vocabularySections.length > 0 && !this.vocabSubmitted && this.showVocabScore(), this.clozeSections.length > 0 && !this.clozeSubmitted && this.showClozeScore();
    const t = this.shadowRoot.getElementById("resultScore"), o = this.shadowRoot.getElementById("checkScoreContainer"), s = this.shadowRoot.getElementById("resultArea"), r = this.shadowRoot.getElementById("postScoreActions"), i = this.shadowRoot.getElementById("sendButton"), n = this.shadowRoot.getElementById("tryAgainButton"), a = this.shadowRoot.getElementById("studentInfoSection"), d = this.getTotalVocabWords(), l = this.clozeSections.reduce((w, y) => w + y.words.length, 0), h = this.currentQuestions.filter((w) => w.o && w.o.length > 0).length, u = d + l + h, c = this.vocabScore + this.clozeScore + this.score, g = this.shadowRoot.getElementById("nickname").value || "-", f = this.shadowRoot.getElementById("homeroom").value || "-", m = this.shadowRoot.getElementById("studentId").value || "-", p = (/* @__PURE__ */ new Date()).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
    if (a) {
      const w = this.getStudentInputs(), y = this.getTeacherCodeInput();
      w.forEach((A) => {
        A && (A.disabled = !0);
      }), y && (y.disabled = !0);
    }
    r && r.classList.remove("hidden");
    const b = this.shadowRoot.getElementById("retrySubmissionSection");
    b && (!this.scoreSentToServer || this.testMode ? (b.classList.remove("hidden"), this.updateRetrySectionLabels()) : b.classList.add("hidden"));
    const S = this.shadowRoot.getElementById("teacherActionsSection");
    if (S)
      if (this.testMode) {
        S.classList.remove("hidden");
        const w = this.shadowRoot.getElementById("teacherResetCode");
        w && (w.value = "");
        const y = this.shadowRoot.getElementById("teacherResetCodeError");
        y && y.classList.add("hidden");
      } else
        S.classList.add("hidden");
    const x = this.currentQuestions.filter((w) => w.o && w.o.length === 0), k = x.length > 0;
    let C = "", I = "";
    if (k && !this.testMode && (C = `
                <div class="score-note-written">
                    *Written answers are not included in the score.
                </div>`, I = `
                <div class="written-answers-section">
                    <div class="written-answers-title">Written Answers (To Be Graded Manually)</div>
                    ${x.map((y, A) => {
      const z = this.currentQuestions.indexOf(y), B = this.userQuestionAnswers[z] || "-";
      return `
                    <div class="written-qa">
                        <div class="written-question">Q: ${y.q}</div>
                        <div class="written-answer">A: ${B}</div>
                    </div>
                `;
    }).join("")}
                </div>
            `), u > 0 || k) {
      let w = "";
      if (u > 0)
        if (this.testMode)
          w = `
                        <div class="score-summary">
                            <div class="score-main-compact">Test Submitted</div>
                            <div class="score-percentage">Your responses have been recorded and sent to your teacher.</div>
                        </div>
                    `;
        else {
          const z = Math.round(c / u * 100);
          w = `
                        <div class="score-summary">
                            <div class="score-main-compact">${c} / ${u}</div>
                            <div class="score-percentage">${z}% Accuracy</div>
                        </div>
                    `;
        }
      let y = "";
      this.testMode || (d > 0 && (y += `
                        <div class="score-section">
                            <span class="score-label">Vocabulary</span>
                            <span class="score-value">${this.vocabScore}/${d}</span>
                        </div>`), l > 0 && (y += `
                        <div class="score-section">
                            <span class="score-label">Fill-in-the-blank</span>
                            <span class="score-value">${this.clozeScore}/${l}</span>
                        </div>`), h > 0 && (y += `
                        <div class="score-section">
                            <span class="score-label">Questions</span>
                            <span class="score-value">${this.score}/${h}</span>
                        </div>`));
      let A = "";
      y && (A = `
                    <div class="score-breakdown-compact">
                        ${y}
                    </div>
                `), t.innerHTML = `
                <div class="score-report-card">
                    <div class="result-title">${this.title}</div>
                    <div class="result-subtitle">Performance Report</div>
                    <div class="student-details">
                        <div><strong>NAME:</strong> ${g}</div>
                        <div><strong>ID:</strong> ${m}</div>
                        <div><strong>CLASS:</strong> ${f}</div>
                        <div><strong>DATE:</strong> ${p}</div>
                    </div>
                    ${w}
                    ${A}
                    ${I}
                    ${C}
                </div>
            `;
    } else
      t.innerHTML = '<div class="score-report-card"><div class="score-main-compact">No score data available</div></div>';
    if (t.className = "", o && o.classList.add("hidden"), r && r.classList.remove("hidden"), s && s.classList.remove("hidden"), i && (i.disabled = !0, i.textContent = "Resend Score to Teacher", i.classList.add("hidden")), n && (n.disabled = !1, this.testMode ? n.classList.add("hidden") : n.classList.remove("hidden")), this.testMode) {
      const w = this.shadowRoot.getElementById("dynamicContent");
      w && w.classList.add("hidden");
    }
    if (s)
      try {
        s.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch {
        this.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    this.stopAllAudio(), e && this.sendScore(!0);
  }
  async sendScore(e = !1, t = !1) {
    if (this.scoreSentToServer && !t || this.autoSubmissionInProgress)
      return;
    const o = this.shadowRoot.getElementById("validationMessage"), s = this.shadowRoot.getElementById("sendButton"), r = this.shadowRoot.getElementById("tryAgainButton"), i = this.shadowRoot.getElementById("retrySubmissionSection");
    if (this.shadowRoot.getElementById("retrySendButton"), !this.validateStudentInfoFields({ showAlert: !0 })) {
      o && (o.textContent = "Please fill out all student information fields.", o.className = "error"), s && e && (s.classList.remove("hidden"), s.disabled = !1);
      return;
    }
    let a = "";
    if (t) {
      const m = this.shadowRoot.getElementById("retryTeacherCode");
      a = m ? m.value.trim() : "";
    } else {
      const m = this.getTeacherCodeInput();
      a = m ? m.value.trim() : "";
    }
    this.vocabScore;
    const l = this.getTotalVocabWords(), h = this.clozeSections.reduce((m, v) => m + v.words.length, 0), u = this.currentQuestions.filter((m) => m.o && m.o.length > 0).length, c = l + h + u, g = this.vocabScore + this.clozeScore + this.score, f = {
      quizName: this.title,
      nickname: this.shadowRoot.getElementById("nickname").value,
      homeroom: this.shadowRoot.getElementById("homeroom").value,
      studentId: this.shadowRoot.getElementById("studentId").value,
      score: g,
      total: c,
      teacherCode: a,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      writtenAnswers: this.getWrittenAnswersString()
    };
    if (a !== this.code) {
      t ? o && (o.textContent = "❌ Invalid Teacher Code. Please try again.", o.className = "error") : (o && (o.innerHTML = `
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        <span>Report card generated. Not sent to teacher (no valid code).</span>
                    `, o.className = "warning"), i && i.classList.remove("hidden")), r && (r.disabled = !1), this.scoreSubmitted = !0, this.saveCurrentStateToLocalStorage(), this.autoSubmissionInProgress = !1;
      return;
    }
    if (!this.submissionUrl) {
      o && (o.textContent = "⚠️ No submission URL configured.", o.className = "error"), s && (s.textContent = "No Submission URL", s.disabled = !0, s.classList.remove("hidden")), r && (r.disabled = !1);
      return;
    }
    this.autoSubmissionInProgress = !0, s && (e ? s.classList.add("hidden") : (s.disabled = !0, s.textContent = "Sending...")), o && (o.innerHTML = e ? "<span>Submitting score to teacher...</span>" : "", o.className = ""), r && (r.disabled = !0);
    try {
      const m = await fetch(this.submissionUrl, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(f)
      });
      if (!m.ok)
        throw new Error(`HTTP error! status: ${m.status}`);
      let v;
      const p = m.headers.get("content-type");
      if (p && p.includes("application/json"))
        v = await m.json();
      else {
        const b = await m.text();
        console.warn("Non-JSON response received:", b), v = { message: "Submission received (non-JSON response)" };
      }
      if (this.scoreSentToServer = !0, i && (this.testMode ? (i.classList.remove("hidden"), this.updateRetrySectionLabels()) : i.classList.add("hidden")), o) {
        const b = e ? "Score automatically submitted to your teacher" : v.message || "Submission successful!";
        o.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${b}</span>
                `, o.className = "success";
      }
      s && (s.textContent = "Score Sent", s.disabled = !0, s.classList.add("hidden")), r && (r.disabled = !1), this.scoreSubmitted = !0, this.saveCurrentStateToLocalStorage();
    } catch (m) {
      console.error("Error:", m), o && (o.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <span>Could not submit score. Please try again.</span>
                `, o.className = "error"), s && (s.textContent = e ? "Send Score Again" : "Try Sending Again", s.disabled = !1, s.classList.remove("hidden")), r && (r.disabled = !1), this.saveCurrentStateToLocalStorage();
    } finally {
      this.autoSubmissionInProgress = !1;
    }
  }
  resetQuiz() {
    const e = this.shadowRoot.getElementById("quizForm"), t = this.shadowRoot.getElementById("resultArea"), o = this.shadowRoot.getElementById("postScoreActions"), s = this.shadowRoot.getElementById("checkScoreContainer"), r = this.shadowRoot.getElementById("validationMessage"), i = this.shadowRoot.getElementById("sendButton"), n = this.shadowRoot.getElementById("tryAgainButton"), a = this.getStudentInputs(), d = this.shadowRoot.getElementById("studentInfoSection");
    e.reset();
    const l = this.shadowRoot.getElementById("dynamicContent");
    if (l && l.classList.remove("hidden"), d) {
      d.style.display = "";
      const p = this.getStudentInputs(), b = this.getTeacherCodeInput();
      p.forEach((S) => {
        S && (S.disabled = !1);
      }), b && (b.disabled = !1);
    }
    t && t.classList.add("hidden"), o && o.classList.add("hidden"), s && s.classList.remove("hidden"), r && (r.textContent = "", r.className = ""), a.forEach((p) => {
      p.classList.remove("invalid"), p.disabled = !1;
    }), this.showStudentInfoAlert(), this.userQuestionAnswers = {}, this.questionsAnswered = 0, this.score = 0, this.vocabUserChoices = {}, this.vocabScore = 0, this.vocabSubmitted = !1, this.clozeAnswers = {}, this.clozeScore = 0, this.clozeSubmitted = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.autoSubmissionInProgress = !1, this.tabAwayCount = 0, this.classList.remove("tab-away"), this._updateTabAwayBanner(), this.clearLocalStorage();
    const h = this.shadowRoot.getElementById("retrySubmissionSection");
    h && h.classList.add("hidden");
    const u = this.shadowRoot.getElementById("retryTeacherCode");
    u && (u.value = ""), Array.from(this.shadowRoot.querySelectorAll('input[type="radio"]')).forEach((p) => {
      p.disabled = !1;
      try {
        delete p.dataset.answered;
      } catch {
      }
    }), Array.from(this.shadowRoot.querySelectorAll(".short-answer-input")).forEach((p) => {
      p.disabled = !1, p.value = "";
      try {
        delete p.dataset.answered;
      } catch {
      }
      p.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(p);
    }), Array.from(this.shadowRoot.querySelectorAll(".option-label")).forEach((p) => {
      p.classList.remove("correct", "incorrect");
      const b = p.querySelector(".feedback-icon");
      b && b.remove(), p.style.cursor = "";
    }), Array.from(this.shadowRoot.querySelectorAll(".explanation")).forEach((p) => p.classList.add("hidden")), i && (i.disabled = !1, i.textContent = "Resend Score to Teacher", i.classList.add("hidden")), n && (n.disabled = !1), this.stopAllAudio(), this.generateQuiz();
    const v = this.shadowRoot.getElementById("checkScoreButton");
    if (v && (v.disabled = !0), this.testMode) {
      const p = this.shadowRoot.getElementById("lockTeacherCode");
      p && (p.value = "");
      const b = this.shadowRoot.getElementById("lockErrorAlert");
      b && b.classList.add("hidden"), this.lockQuizContent();
    } else
      this.unlockQuizContent();
  }
  getWrittenAnswersString() {
    const t = this.currentQuestions.filter((s) => s.o && s.o.length === 0).map((s, r) => {
      const i = this.currentQuestions.indexOf(s), n = this.userQuestionAnswers[i] || "";
      return `Q: ${s.q}
A: ${n}`;
    }).join(`

`), o = this.testMode && this.tabAwayCount > 0 ? `[Tab Away Count: ${this.tabAwayCount}]` : "";
    return o ? t ? `${t}

${o}` : o : t;
  }
  toggleTheme() {
    this.classList.toggle("dark");
    const e = this.classList.contains("dark");
    this.shadowRoot.querySelector(".light-icon").classList.toggle("hidden", e), this.shadowRoot.querySelector(".dark-icon").classList.toggle("hidden", !e);
  }
  updateRetrySectionLabels() {
    const e = this.shadowRoot.querySelector("#retrySubmissionSection .retry-title"), t = this.shadowRoot.getElementById("retrySendButton"), o = this.shadowRoot.getElementById("retryTeacherCode");
    if (this.testMode && o && !o.value) {
      const s = this.getTeacherCodeInput();
      o.value = s ? s.value : this.code;
    }
    this.scoreSentToServer ? (e && (e.textContent = "Submit score again?"), t && (t.textContent = "Submit Again")) : (e && (e.textContent = "Want to send this to your teacher?"), t && (t.textContent = "Send Now"));
  }
  handleReopenEdit() {
    const e = this.shadowRoot.getElementById("teacherResetCode"), t = e ? e.value.trim() : "", o = this.shadowRoot.getElementById("teacherResetCodeError");
    t === this.resetCode ? (o && o.classList.add("hidden"), e && (e.value = ""), this.reopenQuizForEditing()) : o && (o.textContent = "❌ Invalid Reset Code / รหัสผ่านไม่ถูกต้อง", o.classList.remove("hidden"));
  }
  handleResetTryAgain() {
    const e = this.shadowRoot.getElementById("teacherResetCode"), t = e ? e.value.trim() : "", o = this.shadowRoot.getElementById("teacherResetCodeError");
    t === this.resetCode ? (o && o.classList.add("hidden"), e && (e.value = ""), this.resetQuiz()) : o && (o.textContent = "❌ Invalid Reset Code / รหัสผ่านไม่ถูกต้อง", o.classList.remove("hidden"));
  }
  reopenQuizForEditing() {
    const e = this.shadowRoot.getElementById("dynamicContent");
    e && e.classList.remove("hidden");
    const t = this.shadowRoot.getElementById("studentInfoSection");
    if (t) {
      t.style.display = "", this.getStudentInputs().forEach((p) => {
        p && (p.disabled = !1);
      });
      const v = this.getTeacherCodeInput();
      v && (v.disabled = !1);
    }
    Array.from(this.shadowRoot.querySelectorAll(".short-answer-input")).forEach((m) => {
      m.disabled = !1, m.classList.remove("submitted");
    }), Array.from(this.shadowRoot.querySelectorAll('input[type="radio"]')).forEach((m) => {
      m.disabled = !1;
    }), Array.from(this.shadowRoot.querySelectorAll(".vocab-matching-input")).forEach((m) => {
      m.disabled = !1;
    }), Array.from(this.shadowRoot.querySelectorAll(".vocab-matching-row")).forEach((m) => {
      m.classList.remove("correct", "incorrect");
      const v = m.querySelector(".feedback-icon");
      v && v.remove();
    }), Array.from(this.shadowRoot.querySelectorAll(".cloze-blank")).forEach((m) => {
      m.disabled = !1, m.classList.remove("correct", "incorrect");
    }), Array.from(this.shadowRoot.querySelectorAll(".option-label")).forEach((m) => {
      m.classList.remove("correct", "incorrect");
      const v = m.querySelector(".feedback-icon");
      v && v.remove(), m.style.cursor = "";
    }), Array.from(this.shadowRoot.querySelectorAll(".explanation")).forEach((m) => m.classList.add("hidden")), this.vocabSubmitted = !1, this.clozeSubmitted = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.autoSubmissionInProgress = !1;
    const l = this.shadowRoot.getElementById("resultArea");
    l && l.classList.add("hidden");
    const h = this.shadowRoot.getElementById("postScoreActions");
    h && h.classList.add("hidden");
    const u = this.shadowRoot.getElementById("checkScoreContainer");
    u && u.classList.remove("hidden");
    const c = this.shadowRoot.getElementById("checkScoreButton");
    c && (c.disabled = !1);
    const g = this.shadowRoot.getElementById("teacherResetCode");
    g && (g.value = "");
    const f = this.shadowRoot.getElementById("teacherResetCodeError");
    f && f.classList.add("hidden"), this.saveCurrentStateToLocalStorage();
  }
}
customElements.define("tj-quiz-element", $);
