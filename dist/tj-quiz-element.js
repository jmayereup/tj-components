import { c as E } from "./chunks/tj-config-BapMvaer.js";
import { a as B, s as L, g as T } from "./chunks/audio-utils-BwH2sOvH.js";
const q = `<div class="quiz-wrapper" translate="no">
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
                    <div class="input-group" style="margin-top: 1rem;">
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
</div>`, R = ':host{display:block;--bg-light: #f1f5f9;--text-light: #1e293b;--card-bg-light: #ffffff;--card-shadow-light: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--border-light: #e2e8f0;--input-bg-light: #f8fafc;--input-border-light: #cbd5e1;--subtle-text-light: #475569;--primary-color: #4f46e5;--primary-hover: #4338ca;--primary-text: #ffffff;--green-color: #16a34a;--green-hover: #15803d;--green-light-bg: #dcfce7;--red-color: #ef4444;--red-light-bg: #fee2e2;--yellow-color: #eab308;--warning-color: #854d0e;--warning-light-bg: #fef9c3;--slate-color: #64748b;--slate-hover: #475569;--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif}:host(.dark){--bg-light: #0f172a;--text-light: #e2e8f0;--card-bg-light: #1e293b;--card-shadow-light: 0 10px 15px -3px rgba(0, 0, 0, .3), 0 4px 6px -2px rgba(0, 0, 0, .2);--border-light: #334155;--input-bg-light: #334155;--input-border-light: #475569;--subtle-text-light: #87abdd;--green-light-bg: #14532d;--red-light-bg: #7f1d1d;--warning-color: #facc15;--warning-light-bg: #422006}.quiz-wrapper *{box-sizing:border-box}.quiz-wrapper{font-family:var(--font-sans);background-color:var(--bg-light);color:var(--text-light);line-height:1.6;transition:background-color .3s,color .3s;padding:1rem 0}.quiz-wrapper p{font-size:1em;margin-bottom:1rem}.container{max-width:800px;margin-left:auto;margin-right:auto;padding:0 1rem}.quiz-header{background-color:var(--primary-color);color:var(--primary-text);padding:1.5rem;position:relative;border-radius:.75rem;margin-bottom:1.25rem;box-shadow:var(--card-shadow-light)}.quiz-header h1{font-size:1.5em;font-weight:700;margin:0}.quiz-header p{margin-top:.5rem;color:#e0e7ff;opacity:.9;font-size:.9375em}.theme-toggle{position:absolute;top:1rem;right:1rem;cursor:pointer;width:2.5rem;height:2.5rem;padding:0;border-radius:9999px;background-color:#ffffff1a;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:1.2rem;transition:background-color .2s,transform .2s}.theme-toggle:hover,#voice-btn:hover{background-color:#fff3;transform:scale(1.05)}form{padding:0}@media (min-width: 640px){form{padding:2rem}}fieldset{border:none;padding:0;margin:0;margin-bottom:2rem}.legend-container{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-light);padding-bottom:.5rem;margin-bottom:1rem;width:100%}legend{font-size:1.125em;font-weight:600;color:var(--text-light);border-bottom:none;padding-bottom:0;margin-bottom:0;width:auto}fieldset>legend{display:block;font-size:1.125em;font-weight:700;margin-bottom:.5rem;padding-bottom:.5rem;color:var(--text-light);border-bottom:1px solid var(--border-light)}#vocabSection .vocab-grid-table,#clozeSection .cloze-word-bank,#clozeSection .cloze-text{margin-top:1rem}.reading-instructions{font-size:.9em;font-style:italic;margin-bottom:1rem;margin-top:1rem}.instruction{font-size:.9em;color:var(--subtle-text-light);font-style:italic;margin-top:.25rem;margin-bottom:1rem;line-height:1.45}.audio-toggle{cursor:pointer;padding:.75rem;border-radius:9999px;background-color:var(--primary-color);border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;color:var(--primary-text);transition:background-color .2s}.audio-toggle:hover{background-color:var(--primary-hover)}.audio-toggle svg{width:1.5em;height:1.5em}.passage-audio-toggle{cursor:pointer;padding:.5rem .6rem;border-radius:.5rem;background-color:#fff;border:1px solid var(--border-light);color:var(--text-light);display:inline-flex;align-items:center;justify-content:center;margin-left:.5rem;box-shadow:0 2px 6px #0000000f;transition:transform .12s,box-shadow .12s}.passage-audio-toggle:hover{transform:translateY(-2px);box-shadow:0 6px 16px #0000001f}.passage-audio-toggle .play-icon,.passage-audio-toggle .pause-icon{width:1.1rem;height:1.1rem}.passage-wrapper{padding:1rem 1.25rem;border-radius:.5rem;background:transparent;margin-bottom:1rem}.passage-wrapper{position:relative}.passage-header{display:flex;align-items:center;gap:.5rem}.passage-text{margin-top:.75rem}.listening-hidden{position:absolute!important;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;overflow:hidden;white-space:nowrap}.passage-content{background-color:var(--input-bg-light);border-radius:.5rem;padding:1.5rem;margin-bottom:1.5rem;border:1px solid var(--border-light);line-height:1.7}.section-card{background-color:var(--card-bg-light);border:1px solid var(--border-light);border-radius:.75rem;padding:1.5rem;margin-bottom:1.25rem;box-shadow:var(--card-shadow-light)}.section-card-header{font-size:1.05em;font-weight:600;color:var(--text-light);margin:0 0 .5rem;border-bottom:1px solid var(--border-light);padding-bottom:.4rem}.section-card-description{font-size:.95em;color:var(--subtle-text-light);line-height:1.6;margin-bottom:.75rem}.section-card-content{display:block}.instruction-card .section-card-content{margin-top:.25rem}.instruction-questions{margin-top:.75rem}.question-block{padding-top:1.5rem;border-top:1px solid var(--border-light)}.question-block:first-of-type{border-top:none;padding-top:0}.question-block p.question-text{font-weight:600;margin-bottom:1rem;font-size:1em}.options-group{display:flex;flex-direction:column;gap:.5rem}.option-label{display:flex;align-items:center;padding:.5rem .75rem;background-color:var(--input-bg-light);border-radius:.5rem;cursor:pointer;transition:background-color .18s,border-color .18s;border:1px solid transparent;font-size:.95em}.option-label:hover{background-color:#eef4ff}:host(.dark) .option-label:hover{background-color:#2b3440}.option-label.correct{background-color:var(--green-light-bg);border-color:var(--green-color)}.option-label.incorrect{background-color:var(--red-light-bg);border-color:var(--red-color)}.feedback-icon{margin-left:auto;font-size:1.25em}.explanation{margin-top:1rem;padding:1rem;background-color:var(--input-bg-light);border-radius:.5rem;border-left:4px solid var(--primary-color);font-size:.9em;line-height:1.5}.explanation-content strong{color:var(--primary-color)}.form-radio{width:1.125em;height:1.125em;margin-right:.75em;accent-color:var(--primary-color);flex-shrink:0}.form-radio:disabled{cursor:not-allowed}.form-input{width:100%;padding:.75rem;background-color:var(--input-bg-light);border:1px solid var(--input-border-light);border-radius:.5rem;color:var(--text-light);font-size:1em}.form-input.invalid{border-color:var(--red-color)}.form-input:disabled{background-color:#e2e8f0;cursor:not-allowed}:host(.dark) .form-input:disabled{background-color:#334155}.input-label{display:block;font-size:.875em;font-weight:500;color:var(--subtle-text-light);margin-bottom:.25rem}#teacherCode{letter-spacing:.1em;font-family:monospace}:host(.dark) #teacherCode{background-color:#1e293b}.grid-container{display:grid;grid-template-columns:1fr;gap:1rem}@media (min-width: 768px){.grid-container{grid-template-columns:repeat(2,1fr)}}.actions-container{padding-top:1.5rem;border-top:1px solid var(--border-light);margin-top:2rem}.button{width:100%;font-weight:600;padding:.875rem 1.5rem;border-radius:.5rem;font-size:1em;transition:all .2s ease-in-out;border:none;cursor:pointer}.button:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 4px 10px #0000001a}.button:disabled{background-color:#94a3b8;cursor:not-allowed;transform:none;box-shadow:none}.button-primary{background-color:var(--primary-color);color:var(--primary-text)}.button-primary:hover:not(:disabled){background-color:var(--primary-hover)}.button-green{background-color:var(--green-color);color:var(--primary-text)}.button-green:hover:not(:disabled){background-color:var(--green-hover)}.button-slate{background-color:var(--slate-color);color:var(--primary-text)}.button-slate:hover:not(:disabled){background-color:var(--slate-hover)}.post-score-actions{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.post-score-actions{flex-direction:row-reverse}}.prequiz-actions{margin-top:1.5rem;display:flex;flex-direction:column;gap:.75rem;align-items:flex-start}#studentInfoAlert{font-size:.9em;font-weight:500;min-height:1.5rem}#studentInfoAlert.success{color:var(--green-color)}#studentInfoAlert.error{color:var(--red-color)}.result-area{padding:2rem;text-align:center;border-bottom:1px solid var(--border-light);margin-bottom:2rem}.result-area h2{font-size:1.25em;font-weight:600;margin:0}#resultScore{text-align:center;margin:1.5rem 0}.score-main{font-size:3em;font-weight:700;line-height:1;margin-bottom:.5rem}.score-percentage{font-size:1.5em;font-weight:600;opacity:.8;margin-bottom:1rem}.score-breakdown{display:flex;justify-content:center;gap:2rem;margin-top:1rem}.score-section{display:flex;flex-direction:column;align-items:center;gap:.25rem}.score-label{font-size:.9em;font-weight:500;opacity:.7;text-transform:uppercase;letter-spacing:.05em}.score-value{font-size:1.25em;font-weight:600}@media (max-width: 768px){.score-main{font-size:2.5em}.score-percentage{font-size:1.25em}.score-breakdown{flex-direction:column;gap:1rem}.score-section{flex-direction:row;justify-content:space-between;align-items:center;padding:.5rem 1rem;background-color:var(--input-bg-light);border-radius:.5rem}}#resultScore.high .score-main{color:var(--green-color)}#resultScore.medium .score-main{color:var(--yellow-color)}#resultScore.low .score-main{color:var(--red-color)}#validationMessage{text-align:center;margin-bottom:1rem;font-weight:500;min-height:1.5rem;font-size:.9em}#validationMessage.success{color:var(--green-color)}#validationMessage.error{color:var(--red-color)}#validationMessage.warning{color:var(--warning-color)}.hidden{display:none!important}.vocab-word-bank{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.5rem;padding:1rem;margin-bottom:1.25rem}:host(.dark) .vocab-word-bank{background-color:var(--input-bg-dark)}.vocab-bank-title{font-weight:600;margin-bottom:.75rem;color:var(--subtle-text-light);font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.vocab-bank-items{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.vocab-bank-item{background-color:var(--card-bg-light);color:var(--text-light);padding:.45rem .75rem;border-radius:.375rem;border:1px solid var(--border-light);font-size:.9em;font-weight:600;cursor:default;-webkit-user-select:none;user-select:none;box-shadow:0 1px 2px #0000000d}.vocab-matching-container{display:flex;flex-direction:column;gap:.5rem}.vocab-matching-row{display:flex;align-items:center;gap:1rem;padding:.5rem .75rem;border-radius:.5rem;transition:background-color .2s}.vocab-matching-input{width:2.5rem;height:2.5rem;padding:0;text-align:center;font-weight:700;font-size:1.125rem;line-height:normal;border:2px solid var(--input-border-light);border-radius:.4rem;background-color:var(--card-bg-light);color:var(--text-light);text-transform:uppercase;flex-shrink:0;box-sizing:border-box}:host(.dark) .vocab-matching-input{background-color:var(--input-bg-light)}.vocab-matching-input:focus{border-color:var(--primary-color);outline:none;box-shadow:0 0 0 3px #4f46e51a}.vocab-matching-input:disabled{background-color:#f1f5f9;cursor:not-allowed}:host(.dark) .vocab-matching-input:disabled{background-color:#1e293b}.vocab-definition-text{flex:1;font-size:1em;color:var(--text-light)}.vocab-matching-row.correct{background-color:var(--green-light-bg)}.vocab-matching-row.incorrect{background-color:var(--red-light-bg)}.vocab-matching-row.correct .vocab-matching-input{border-color:var(--green-color)}.vocab-matching-row.incorrect .vocab-matching-input{border-color:var(--red-color)}.vocab-matching-row .feedback-icon{font-weight:600;font-size:.9em;white-space:nowrap}@media (max-width: 768px){.vocab-def-label{display:inline-block;white-space:normal;max-width:60%}}.cloze-word-bank{background-color:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.5rem;padding:1rem;margin-bottom:1.25rem}:host(.dark) .cloze-word-bank{background-color:var(--input-bg-dark)}.cloze-bank-title{font-weight:600;margin-bottom:.75rem;color:var(--subtle-text-light);font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.cloze-bank-words{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.cloze-bank-word{background-color:var(--card-bg-light);color:var(--text-light);padding:.45rem .75rem;border-radius:.375rem;border:1px solid var(--border-light);font-size:.9em;font-weight:600;cursor:default;-webkit-user-select:none;user-select:none;box-shadow:0 1px 2px #0000000d}.cloze-text{line-height:1.8;font-size:1.05em;color:var(--text-light)}.cloze-blank{display:inline-block;min-width:6.5ch;max-width:12ch;margin:0 .35rem;padding:.15rem .4rem;border:none;border-bottom:2px solid var(--border-light);background:transparent;font-size:inherit;font-family:inherit;color:var(--text-light);text-align:center;vertical-align:baseline;transition:border-color .18s,background-color .18s}.cloze-blank:focus{outline:none;border-bottom-color:var(--primary-color);background:#4f46e508;border-radius:.25rem}.cloze-blank.correct{border-bottom-color:var(--green-color);background-color:var(--green-light-bg)}.cloze-blank.correct{border-bottom-color:var(--green-color);background-color:var(--green-light-bg);border-radius:.25rem}.cloze-blank.incorrect{border-bottom-color:var(--red-color);background-color:var(--red-light-bg);border-radius:.25rem}.cloze-score{text-align:center;font-weight:600;margin-top:1rem;font-size:1.1em}@media (max-width: 768px){.cloze-bank-words{gap:.375rem}.cloze-bank-word{padding:.375rem .5rem;font-size:.8em}.cloze-blank{min-width:5.5ch}.cloze-text{font-size:1em}.cloze-blank{min-width:80px;padding:.25em .375em}}.vocab-section-header,.cloze-section-header{margin:1.5rem 0 1rem;font-size:1.1em;font-weight:600;color:var(--primary-color);border-bottom:2px solid var(--primary-color);padding-bottom:.5rem}.cloze-section-wrapper{margin-bottom:2rem}.cloze-section-wrapper:last-child{margin-bottom:0}.score-report-card{background-color:var(--card-bg-light);border:2px solid var(--primary-color);border-radius:1rem;padding:2rem;margin:1rem 0;text-align:center;box-shadow:0 4px 20px #4f46e526;position:relative;overflow:hidden}.score-report-card:before{content:"";position:absolute;top:0;left:0;right:0;height:6px;background:linear-gradient(90deg,var(--primary-color),var(--primary-hover))}.result-title{font-size:1.5em;font-weight:800;color:var(--primary-color);margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.1em}.result-subtitle{font-size:1em;font-weight:600;color:var(--subtle-text-light);margin-bottom:1.5rem;text-transform:uppercase;letter-spacing:.05em}.student-details{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:2rem;font-size:1.1em;border:1px solid var(--border-light);padding:1.25rem;border-radius:.5rem;background-color:var(--input-bg-light);text-align:left}.student-details strong{color:var(--primary-color)}.score-summary{margin-bottom:2rem}.score-main-compact{font-size:2.5em;font-weight:800;color:var(--primary-color);margin-bottom:.25rem}.score-percentage{font-size:1.2em;color:var(--slate-color);font-weight:600}.score-breakdown-compact{display:flex;flex-direction:column;gap:.75rem;max-width:300px;margin:0 auto;padding:1rem;border-top:1px dashed var(--border-light)}.score-section{display:flex;justify-content:space-between;align-items:center;font-weight:600}.score-label{color:var(--subtle-text-light)}.score-value{color:var(--text-light)}.post-score-section{text-align:center;margin:2rem 0}.post-score-actions{display:flex;justify-content:center;gap:1rem;margin-top:1.5rem}#validationMessage.success{display:inline-flex;align-items:center;gap:.5rem;background-color:var(--green-light-bg);color:var(--green-color);padding:.75rem 1.5rem;border-radius:2rem;font-weight:600;font-size:.95rem;margin-bottom:0}#validationMessage.error{color:var(--red-color);background-color:var(--red-light-bg);padding:.75rem 1.5rem;border-radius:2rem;font-weight:600;font-size:.95rem;display:inline-flex;margin-bottom:0}#validationMessage.warning{color:var(--warning-color);background-color:var(--warning-light-bg);border:1px solid var(--warning-color);padding:.9rem 1.8rem;border-radius:2rem;font-weight:700;font-size:1.1rem;display:inline-flex;align-items:center;gap:.6rem;margin-bottom:0;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.voice-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ab3;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:2000}.voice-card{background:var(--card-bg-light);width:90%;max-width:400px;max-height:80vh;border-radius:1.25rem;box-shadow:0 25px 50px -12px #00000040;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border-light)}.voice-card-header{padding:1.25rem;background:var(--primary-color);color:#fff;display:flex;justify-content:space-between;align-items:center}.voice-card-header h3{margin:0;font-size:1.25em;font-weight:700}.close-voice-btn{background:#fff3;border:none;color:#fff;width:2rem;height:2rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.5em;transition:background .2s}.close-voice-btn:hover{background:#ffffff4d}.voice-list{padding:1rem;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:.5rem}.voice-option-btn{padding:.875rem 1rem;background:var(--input-bg-light);border:1px solid var(--border-light);border-radius:.75rem;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:all .2s;color:var(--text-light);font-family:var(--font-sans)}.voice-option-btn:hover{border-color:var(--primary-color);background:#eff6ff}:host(.dark) .voice-option-btn:hover{background:#1e293b}.voice-option-btn.active{background:#eff6ff;border-color:var(--primary-color);color:var(--primary-color);font-weight:600;box-shadow:0 0 0 1px var(--primary-color)}:host(.dark) .voice-option-btn.active{background:#1e293b}.voice-option-btn .badge{background:var(--green-color);color:#fff;padding:.2rem .5rem;border-radius:2rem;font-size:.75em;font-weight:700;text-transform:uppercase}#voice-btn{position:absolute;top:1rem;right:4rem;cursor:pointer;width:2.5rem;height:2.5rem;padding:0;border-radius:9999px;background-color:#ffffff1a;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;color:#fff;transition:background-color .2s,transform .2s}#voice-btn svg{width:1.25rem;height:1.25rem}.retry-section{margin-top:1rem;margin-bottom:1rem;padding:1.25rem;background-color:var(--input-bg-light);border-radius:.6rem;border:1px dashed var(--border-light)}.retry-title{margin-top:0;margin-bottom:.75rem;font-size:.95em;font-weight:600;color:var(--text-light)}.retry-controls{display:flex;gap:.75rem;align-items:center}.retry-controls .form-input{flex:1;margin:0}.retry-controls .button{width:auto;margin:0;white-space:nowrap}.browser-prompt-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ae6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:10000;color:#fff;padding:2em;text-align:center}.browser-prompt-card{background:#fff;color:#1e293b;padding:2.5em;border-radius:1.5em;max-width:400px;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{color:#b45309;margin-bottom:.5em;font-size:1.5em;background:none;-webkit-text-fill-color:initial}.browser-prompt-card p{margin-bottom:1.5em;line-height:1.5;color:#475569}.browser-action-btn{display:inline-block;background-color:#ca8a04;color:#fff;padding:.75em 1.5em;border-radius:9999px;text-decoration:none;font-weight:700;transition:background-color .2s;cursor:pointer}.browser-action-btn:hover{background-color:#a16207}.short-answer-badge{font-size:.8em;font-weight:500;color:var(--subtle-text-light);background-color:var(--input-bg-light);border:1px solid var(--border-light);padding:.2rem .5rem;border-radius:.25rem;margin-left:.5rem;display:inline-block;vertical-align:middle}.short-answer-container{margin-top:.5rem}.short-answer-input.submitted{opacity:.7;cursor:not-allowed}textarea.short-answer-input{resize:none;overflow-y:hidden;font-family:inherit;line-height:1.5}.score-note-written{font-size:.85em;color:var(--subtle-text-light);margin-top:.75rem;text-align:center;font-style:italic}.written-answers-section{margin-top:1rem;padding-top:1rem;border-top:1px dashed var(--border-light);text-align:left}.written-answers-title{font-weight:600;font-size:.9em;color:var(--text-light);margin-bottom:.5rem}.written-qa{margin-bottom:.75rem;font-size:.85em;background-color:var(--input-bg-light);padding:.5rem;border-radius:.25rem;border:1px solid var(--border-light)}.written-question{font-weight:600;color:var(--subtle-text-light)}.written-answer{margin-top:.25rem;color:var(--text-light);white-space:pre-wrap;word-break:break-word}';
class $ extends HTMLElement {
  static get observedAttributes() {
    return ["submission-url", "test-mode"];
  }
  get testMode() {
    return this.hasAttribute("test-mode");
  }
  set testMode(e) {
    e ? this.setAttribute("test-mode", "") : this.removeAttribute("test-mode");
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.questionBank = [], this.passages = [], this.selectedVoiceName = null, this.isPlayingAll = !1, this.instructions = [], this.questionGroups = [], this.orderedSections = [], this.currentQuestions = [], this.score = 0, this.questionsAnswered = 0, this.questionsToDisplay = 5, this.totalQuestions = 0, this.audioPlayer = null, this.utterance = null, this.audioSrc = "", this.currentAudioButton = null, this.submissionUrl = E.submissionUrl || "", this.title = "", this.passage = "", this.vocabularySections = [], this.vocabUserChoices = {}, this.vocabScore = 0, this.vocabSubmitted = !1, this.clozeSections = [], this.clozeAnswers = {}, this.clozeScore = 0, this.clozeSubmitted = !1, this.userQuestionAnswers = {}, this.quizUnlocked = !0, this.autoSubmissionInProgress = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.ttsPaused = !1;
  }
  attributeChangedCallback(e, t) {
    e === "submission-url" && (this.submissionUrl = t);
  }
  _normalizeText(e) {
    return typeof e != "string" ? String(e || "") : e.trim().toLowerCase().replace(/['’‘]/g, "'").replace(/["“”]/g, '"').replace(/\s+/g, " ");
  }
  connectedCallback() {
    requestAnimationFrame(() => {
      if (this.config ? typeof this.config == "object" ? this.originalContent = JSON.stringify(this.config) : this.originalContent = String(this.config) : this.hasAttribute("config") ? this.originalContent = this.getAttribute("config") : this.querySelector('script[type="text/markdown"]') ? this.originalContent = this.querySelector('script[type="text/markdown"]').textContent : this.querySelector('script[type="application/json"]') ? this.originalContent = this.querySelector('script[type="application/json"]').textContent : this.originalContent = this.textContent, this.hasAttribute("submission-url") && (this.submissionUrl = this.getAttribute("submission-url")), this.loadTemplate(), this.setAttribute("translate", "no"), !this._shouldShowAudioControls()) {
        const t = this.shadowRoot.getElementById("voice-btn");
        t && t.classList.add("hidden");
      }
      this.checkBrowserSupport(), window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = () => this._updateVoiceList(), this._updateVoiceList()), this.parseContent(), this.setupEventListeners(), this.generateQuiz(), this.unlockQuizContent();
      const e = this.loadFromLocalStorage();
      e && this.restoreQuizState(e);
    });
  }
  loadTemplate() {
    try {
      const e = document.createElement("template");
      e.innerHTML = `<style>${R}</style>${q}`, this.shadowRoot.firstChild && (this.shadowRoot.innerHTML = ""), this.shadowRoot.appendChild(e.content.cloneNode(!0)), console.log("Inlined template applied successfully");
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
    return B(window.speechSynthesis, e);
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
    return L(window.speechSynthesis);
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
      const c = (a[0] || "").trim().toLowerCase(), d = a.slice(1).join(`
`);
      if (c.startsWith("vocab")) {
        const h = c.match(/vocab(?:-(\d+))?/), u = h && h[1] ? parseInt(h[1]) : null;
        this.parseVocabulary(d, u), this.orderedSections.push({ type: "vocab", data: { vocabCount: u } }), o = "vocab";
      } else if (c.startsWith("cloze")) {
        const h = c.match(/cloze(?:-(\d+))?/), u = h && h[1] ? parseInt(h[1]) : null;
        this.parseCloze(d, u), this.orderedSections.push({ type: "cloze", data: { clozeCount: u, text: d } }), o = "cloze";
      } else if (c.startsWith("instructions")) {
        const h = this.passages.length, { heading: u, body: m } = this.extractHeadingAndBody(d, `Instructions ${this.instructions.length + 1}`);
        this.instructions.push({ sectionId: h, heading: u, body: m }), this.passages.push({ text: m || u, sectionId: h, listening: !1, isInstruction: !0 }), this.orderedSections.push({ type: "instructions", sectionId: h, heading: u, body: m }), s = h, o = "instructions";
      } else if (c.startsWith("questions")) {
        const h = c.match(/questions(?:-(\d+))?/), u = h && h[1] ? parseInt(h[1]) : null, m = this.parseQuestions(d), b = o === "text" || o === "instructions" || o === "questions" && this.orderedSections.length > 0 && this.orderedSections[this.orderedSections.length - 1].tiedToPassage;
        s !== null ? (this.questionGroups.push({ sectionId: s, questions: m, maxQuestions: u }), this.orderedSections.push({ type: "questions", sectionId: s, questions: m, maxQuestions: u, tiedToPassage: b })) : (this.questionGroups.push({ sectionId: null, questions: m, maxQuestions: u }), this.orderedSections.push({ type: "questions", sectionId: null, questions: m, maxQuestions: u, tiedToPassage: !1 })), o = "questions";
      } else
        switch (c) {
          case "text":
          case "text-listening":
            const h = c === "text-listening", u = this.passages.length;
            this.passages.push({ text: d, sectionId: u, listening: h }), this.passage = d, s = u, this.orderedSections.push({ type: "text", sectionId: u, text: d, listening: h }), o = "text";
            break;
          case "audio":
            this.parseAudio(d), this.orderedSections.push({ type: "audio", audioSrc: this.audioSrc }), o = "audio";
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
      const l = {};
      return a.forEach((c) => {
        const d = c.indexOf(":");
        if (d === -1) return;
        const h = c.slice(0, d).trim(), u = c.slice(d + 1).trim().replace(/,$/, "");
        h && u && (l[h] = u);
      }), l;
    };
    let i = r(s);
    if (Object.keys(i).length <= 1 && e.indexOf(",") !== -1) {
      const a = e.split(",").map((l) => l.trim()).filter(Boolean);
      i = r(a);
    }
    let n;
    if (t && Object.keys(i).length > t) {
      const a = Object.entries(i);
      this.shuffleArray(a);
      const l = a.slice(0, t);
      n = Object.fromEntries(l);
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
        const n = i.substring(2).trim(), a = n.includes("[correct]"), l = n.replace("[correct]", "").trim();
        s.o.push(l), a && (s.a = l);
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
        const h = document.createElement("div");
        h.className = "vocab-section-header", h.innerHTML = `<h4>Vocabulary Set ${s + 1}</h4>`, t.appendChild(h);
      }
      const n = Object.keys(r), a = Object.values(r);
      this.shuffleArray(a);
      const l = document.createElement("div");
      l.className = "vocab-grid-table";
      const c = document.createElement("div");
      c.className = "vocab-grid-header";
      const d = document.createElement("div");
      if (d.className = "vocab-grid-header-cell", d.textContent = "Word", c.appendChild(d), a.forEach((h) => {
        const u = document.createElement("div");
        u.className = "vocab-grid-header-cell", u.textContent = h, c.appendChild(u);
      }), l.appendChild(c), n.forEach((h, u) => {
        const m = document.createElement("div");
        m.className = "vocab-grid-row";
        const b = document.createElement("div");
        b.className = "vocab-grid-cell vocab-word-cell", b.textContent = h, m.appendChild(b);
        const p = r[h], w = a.filter((f) => f !== p);
        this.shuffleArray(w);
        const g = [p, ...w.slice(0, 3)];
        this.shuffleArray(g), g.forEach((f, S) => {
          const k = document.createElement("div");
          k.className = "vocab-grid-cell vocab-option-cell";
          const C = document.createElement("div");
          C.className = "vocab-radio-container";
          const x = document.createElement("input");
          x.type = "radio", x.name = `vocab-${i}-${u}`, x.value = f, x.id = `vocab-${i}-${u}-${S}`, C.appendChild(x), k.appendChild(C);
          const v = document.createElement("span");
          v.className = "vocab-def-label", v.textContent = f, k.appendChild(v), m.appendChild(k);
        }), l.appendChild(m);
      }), t.appendChild(l), s < this.vocabularySections.length - 1) {
        const h = document.createElement("div");
        h.style.marginBottom = "2rem", t.appendChild(h);
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
      const { text: i, words: n, sectionId: a } = s, l = document.createElement("div");
      if (l.className = "cloze-section-wrapper", this.clozeSections.length > 1) {
        const m = document.createElement("h4");
        m.className = "cloze-section-header", m.textContent = `Fill in the Blanks - Section ${r + 1}`, l.appendChild(m);
      }
      const c = document.createElement("div");
      c.className = "cloze-word-bank", c.innerHTML = `
                <div class="cloze-bank-title">Word Bank</div>
                <div class="cloze-bank-words">
                    ${n.map((m) => `<span class="cloze-bank-word">${m}</span>`).join("")}
                </div>
            `, l.appendChild(c);
      const d = document.createElement("div");
      d.className = "cloze-text";
      let h = i, u = 0;
      n.forEach((m) => {
        const b = new RegExp(`\\*${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\*`, "gi");
        h = h.replace(b, () => {
          const p = `<input type="text" class="cloze-blank" data-answer="${m.toLowerCase()}" data-section-id="${a}" data-blank-index="${u}" autocomplete="off" spellcheck="false" title="Fill in the blank">`;
          return u++, p;
        });
      }), h = h.replace(/\*([^*]+)\*/g, "$1"), h = this.addLineBreaksToHtml(h), d.innerHTML = h, l.appendChild(d), r < this.clozeSections.length - 1 && (l.style.marginBottom = "2rem"), o.appendChild(l);
    });
  }
  // Render a single vocabulary section inline into the target container
  renderVocabInline(e, t, o) {
    const { vocabulary: s, sectionId: r } = e, n = this.vocabularySections.length > 1 ? `Vocabulary Set ${o + 1}` : "Vocabulary", { card: a, content: l } = this.createSectionCard(n, {
      cardClasses: ["vocab-card"]
    }), d = Object.keys(s).map((b, p) => ({
      letter: String.fromCharCode(65 + p),
      // A, B, C...
      word: b,
      definition: s[b]
    })), h = document.createElement("div");
    h.className = "vocab-word-bank", h.innerHTML = `
            <div class="vocab-bank-title">Word Bank</div>
            <div class="vocab-bank-items">
                ${d.map((b) => `<span class="vocab-bank-item">${b.letter}: ${b.word.toUpperCase()}</span>`).join("")}
            </div>
        `, l.appendChild(h);
    const u = document.createElement("div");
    u.className = "vocab-matching-container";
    const m = [...d];
    this.shuffleArray(m), m.forEach((b) => {
      const p = document.createElement("div");
      p.className = "vocab-matching-row";
      const w = document.createElement("div");
      w.className = "vocab-matching-input-group";
      const g = document.createElement("input");
      g.type = "text", g.className = "vocab-matching-input", g.maxLength = 1, g.dataset.sectionId = r, g.dataset.word = b.word, g.dataset.correctLetter = b.letter, g.autocomplete = "off", g.setAttribute("autocapitalize", "characters"), g.setAttribute("autocorrect", "off"), g.setAttribute("spellcheck", "false"), g.inputMode = "text", g.title = "Enter the letter for this definition", w.appendChild(g), p.appendChild(w);
      const f = document.createElement("div");
      f.className = "vocab-definition-text", f.textContent = b.definition, p.appendChild(f), u.appendChild(p);
    }), l.appendChild(u), t.appendChild(a);
  }
  // Render a single cloze section inline into the target container
  renderClozeInline(e, t, o) {
    const { text: s, words: r, sectionId: i } = e, n = this.clozeSections.length > 1 ? `Fill in the Blanks - Section ${o + 1}` : "Fill in the Blanks", { card: a, content: l } = this.createSectionCard(n, {
      cardClasses: ["cloze-card"]
    }), c = document.createElement("div");
    c.className = "cloze-word-bank", c.innerHTML = `
            <div class="cloze-bank-title">Word Bank</div>
            <div class="cloze-bank-words">
                ${r.map((m) => `<span class="cloze-bank-word">${m}</span>`).join("")}
            </div>
        `, l.appendChild(c);
    let d = s, h = 0;
    r.forEach((m) => {
      const b = new RegExp(`\\*${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\*`, "gi");
      d = d.replace(b, () => {
        const p = `<input type="text" class="cloze-blank" data-answer="${m.toLowerCase()}" data-section-id="${i}" data-blank-index="${h}" autocomplete="off" spellcheck="false" inputmode="text" autocapitalize="none" autocorrect="off" title="Fill in the blank">`;
        return h++, p;
      });
    }), d = d.replace(/\*([^*]+)\*/g, "$1"), d = this.addLineBreaksToHtml(d);
    const u = document.createElement("div");
    u.className = "cloze-text", u.innerHTML = d, l.appendChild(u), t.appendChild(a);
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
        const l = this.shadowRoot.getElementById("checkScoreButton");
        l.disabled = !1;
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
      const l = document.createElement("div");
      l.className = "section-card-description", l.innerHTML = o, r.appendChild(l);
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
        const l = a.dataset.correctLetter, c = a.closest(".vocab-matching-row");
        if (a.disabled = !0, !this.testMode) {
          let d = c.querySelector(".feedback-icon");
          d || (d = document.createElement("span"), d.className = "feedback-icon", c.appendChild(d)), n === l ? (c.classList.add("correct"), d.textContent = " ✅") : (c.classList.add("incorrect"), d.textContent = " ❌");
        }
        n === l && this.vocabScore++;
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
    e && e.addEventListener("keydown", (n) => {
      !this.quizUnlocked && n.key === "Enter" && n.preventDefault();
    });
    const i = this.shadowRoot.getElementById("retrySendButton");
    e && (e.addEventListener("change", (n) => {
      this.handleAnswer(n);
    }), e.addEventListener("input", (n) => {
      this.handleClozeAnswer(n), this.handleVocabAnswer(n), this.handleShortAnswer(n), n.target.classList.contains("short-answer-input") && n.target.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(n.target);
    }), e.addEventListener("submit", (n) => this.handleSubmit(n))), t && t.addEventListener("click", () => this.sendScore()), o && o.addEventListener("click", () => this.resetQuiz()), i && i.addEventListener("click", () => this.sendScore(!1, !0)), s && s.addEventListener("click", () => this.toggleTheme()), r && r.addEventListener("click", () => this.handleStartQuiz()), this.getStudentInputs().forEach((n) => {
      n.addEventListener("input", () => {
        n.value.trim() !== "" && n.classList.remove("invalid"), this.quizUnlocked || this.showStudentInfoAlert();
      });
    }), this.shadowRoot.addEventListener("click", (n) => {
      const a = n.target.closest(".passage-audio-toggle");
      if (a) {
        const u = a.closest(".section-card"), b = (u ? Array.from(u.querySelectorAll(".passage-text")) : []).map((p) => p.textContent).join(`
`);
        this.handlePassageTTS(a, b);
        return;
      }
      n.target.closest(".audio-toggle") && this.handleAudioToggle(), n.target.closest("#voice-btn") && this._showVoiceOverlay(), n.target.closest(".close-voice-btn") && this._hideVoiceOverlay(), n.target.closest(".voice-overlay") && !n.target.closest(".voice-card") && this._hideVoiceOverlay();
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
      this.shuffleArray(a), r = a.map((l) => `
                <label class="option-label">
                    <input type="radio" name="${o}" value="${l}" class="form-radio" required>
                    <span>${l}</span>
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
        }), l = document.createElement("div");
        l.className = "passage-wrapper";
        const c = document.createElement("button");
        c.type = "button", c.className = "passage-audio-toggle", c.title = "Play Passage Audio", c.innerHTML = `
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <svg class="pause-icon hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                `;
        const d = n.querySelector(".section-card-header");
        d && d.appendChild(c), i.text.split(/\n\s*\n/).forEach((u) => {
          const m = document.createElement("p");
          m.className = "passage-text", i.listening && m.classList.add("listening-hidden"), m.textContent = u.trim(), l.appendChild(m);
        }), a.appendChild(l), t.appendChild(n);
      } else if (i.type === "instructions") {
        const n = i.heading || "Instructions", a = i.body ? this.formatTextWithLineBreaks(i.body) : "", { card: l } = this.createSectionCard(n, {
          descriptionHtml: a,
          cardClasses: ["instruction-card"]
        });
        t.appendChild(l);
      } else if (i.type === "vocab") {
        const n = this.vocabularySections[s++];
        n && this.renderVocabInline(n, t, s - 1);
      } else if (i.type === "cloze") {
        const n = this.clozeSections[r++];
        n && this.renderClozeInline(n, t, r - 1);
      } else if (i.type === "questions") {
        const { card: n, content: a } = this.createSectionCard("Comprehension Questions", {
          cardClasses: ["questions-card"]
        }), l = document.createElement("p");
        if (l.className = "reading-instructions instruction", l.textContent = "Read each question and select the best answer from the choices below.", a.appendChild(l), t.appendChild(n), i.questions && i.questions.length > 0) {
          const c = i.maxQuestions || null;
          let d = [...i.questions];
          c && d.length > c && (this.shuffleArray(d), d = d.slice(0, c)), d.forEach((h) => o.push({ question: h, container: a }));
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
        const l = this.currentQuestions[i];
        if (l.o && l.o.length > 0) {
          const c = this.shadowRoot.querySelector(`input[name="${n}"][value="${a}"]`);
          c && (c.checked = !0, c.dataset.answered = "true");
        } else {
          const c = this.shadowRoot.querySelector(`.short-answer-input[name="${n}"]`);
          c && (c.value = a, c.dataset.answered = "true", c.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(c));
        }
      }
    }
    Object.keys(this.vocabUserChoices).forEach((i) => {
      const n = this.vocabUserChoices[i], a = i.split("-"), l = a[0], c = a.slice(1).join("-"), d = this.shadowRoot.querySelector(`.vocab-matching-input[data-section-id="${l}"][data-word="${c}"]`);
      d && (d.value = n);
    }), Object.keys(this.clozeAnswers).forEach((i) => {
      const n = this.clozeAnswers[i], a = i.split("-"), l = a[0], c = a[1], d = this.shadowRoot.querySelector(`.cloze-blank[data-section-id="${l}"][data-blank-index="${c}"]`);
      d && (d.value = n);
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
    e && e.classList.remove("hidden"), this.quizUnlocked = !0;
  }
  unlockQuizContent() {
    const e = this.shadowRoot.getElementById("quizContent");
    e && e.classList.remove("hidden"), this.quizUnlocked = !0;
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
          const l = a.closest(".option-label");
          if (a.disabled = !0, !this.testMode) {
            let c = l.querySelector(".feedback-icon");
            c || (c = document.createElement("span"), c.className = "feedback-icon", l.appendChild(c)), s === a.value && (s === t.a ? (l.classList.add("correct"), c.textContent = "✅") : (l.classList.add("incorrect"), c.textContent = "❌"));
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
    const t = this.shadowRoot.getElementById("resultScore"), o = this.shadowRoot.getElementById("checkScoreContainer"), s = this.shadowRoot.getElementById("resultArea"), r = this.shadowRoot.getElementById("postScoreActions"), i = this.shadowRoot.getElementById("sendButton"), n = this.shadowRoot.getElementById("tryAgainButton"), a = this.shadowRoot.getElementById("studentInfoSection"), l = this.getTotalVocabWords(), c = this.clozeSections.reduce((v, y) => v + y.words.length, 0), d = this.currentQuestions.filter((v) => v.o && v.o.length > 0).length, h = l + c + d, u = this.vocabScore + this.clozeScore + this.score, m = this.shadowRoot.getElementById("nickname").value || "-", b = this.shadowRoot.getElementById("homeroom").value || "-", p = this.shadowRoot.getElementById("studentId").value || "-", g = (/* @__PURE__ */ new Date()).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
    if (a) {
      const v = this.getStudentInputs(), y = this.getTeacherCodeInput();
      v.forEach((z) => {
        z && (z.disabled = !0);
      }), y && (y.disabled = !0);
    }
    r && r.classList.remove("hidden");
    const f = this.shadowRoot.getElementById("retrySubmissionSection");
    f && (this.scoreSentToServer ? f.classList.add("hidden") : f.classList.remove("hidden"));
    const S = this.currentQuestions.filter((v) => v.o && v.o.length === 0), k = S.length > 0;
    let C = "", x = "";
    if (k && !this.testMode && (C = `
                <div class="score-note-written">
                    *Written answers are not included in the score.
                </div>`, x = `
                <div class="written-answers-section">
                    <div class="written-answers-title">Written Answers (To Be Graded Manually)</div>
                    ${S.map((y, z) => {
      const I = this.currentQuestions.indexOf(y), A = this.userQuestionAnswers[I] || "-";
      return `
                    <div class="written-qa">
                        <div class="written-question">Q: ${y.q}</div>
                        <div class="written-answer">A: ${A}</div>
                    </div>
                `;
    }).join("")}
                </div>
            `), h > 0 || k) {
      let v = "";
      if (h > 0)
        if (this.testMode)
          v = `
                        <div class="score-summary">
                            <div class="score-main-compact">Test Submitted</div>
                            <div class="score-percentage">Your responses have been recorded and sent to your teacher.</div>
                        </div>
                    `;
        else {
          const I = Math.round(u / h * 100);
          v = `
                        <div class="score-summary">
                            <div class="score-main-compact">${u} / ${h}</div>
                            <div class="score-percentage">${I}% Accuracy</div>
                        </div>
                    `;
        }
      let y = "";
      this.testMode || (l > 0 && (y += `
                        <div class="score-section">
                            <span class="score-label">Vocabulary</span>
                            <span class="score-value">${this.vocabScore}/${l}</span>
                        </div>`), c > 0 && (y += `
                        <div class="score-section">
                            <span class="score-label">Fill-in-the-blank</span>
                            <span class="score-value">${this.clozeScore}/${c}</span>
                        </div>`), d > 0 && (y += `
                        <div class="score-section">
                            <span class="score-label">Questions</span>
                            <span class="score-value">${this.score}/${d}</span>
                        </div>`));
      let z = "";
      y && (z = `
                    <div class="score-breakdown-compact">
                        ${y}
                    </div>
                `), t.innerHTML = `
                <div class="score-report-card">
                    <div class="result-title">${this.title}</div>
                    <div class="result-subtitle">Performance Report</div>
                    <div class="student-details">
                        <div><strong>NAME:</strong> ${m}</div>
                        <div><strong>ID:</strong> ${p}</div>
                        <div><strong>CLASS:</strong> ${b}</div>
                        <div><strong>DATE:</strong> ${g}</div>
                    </div>
                    ${v}
                    ${z}
                    ${x}
                    ${C}
                </div>
            `;
    } else
      t.innerHTML = '<div class="score-report-card"><div class="score-main-compact">No score data available</div></div>';
    if (t.className = "", o && o.classList.add("hidden"), r && r.classList.remove("hidden"), s && s.classList.remove("hidden"), i && (i.disabled = !0, i.textContent = "Resend Score to Teacher", i.classList.add("hidden")), n && (n.disabled = !1, this.testMode ? n.classList.add("hidden") : n.classList.remove("hidden")), this.testMode) {
      const v = this.shadowRoot.getElementById("dynamicContent");
      v && v.classList.add("hidden");
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
      const p = this.shadowRoot.getElementById("retryTeacherCode");
      a = p ? p.value.trim() : "";
    } else {
      const p = this.getTeacherCodeInput();
      a = p ? p.value.trim() : "";
    }
    this.vocabScore;
    const c = this.getTotalVocabWords(), d = this.clozeSections.reduce((p, w) => p + w.words.length, 0), h = this.currentQuestions.filter((p) => p.o && p.o.length > 0).length, u = c + d + h, m = this.vocabScore + this.clozeScore + this.score, b = {
      quizName: this.title,
      nickname: this.shadowRoot.getElementById("nickname").value,
      homeroom: this.shadowRoot.getElementById("homeroom").value,
      studentId: this.shadowRoot.getElementById("studentId").value,
      score: m,
      total: u,
      teacherCode: a,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      writtenAnswers: this.getWrittenAnswersString()
    };
    if (a !== "6767") {
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
      const p = await fetch(this.submissionUrl, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(b)
      });
      if (!p.ok)
        throw new Error(`HTTP error! status: ${p.status}`);
      let w;
      const g = p.headers.get("content-type");
      if (g && g.includes("application/json"))
        w = await p.json();
      else {
        const f = await p.text();
        console.warn("Non-JSON response received:", f), w = { message: "Submission received (non-JSON response)" };
      }
      if (this.scoreSentToServer = !0, i && i.classList.add("hidden"), o) {
        const f = e ? "Score automatically submitted to your teacher" : w.message || "Submission successful!";
        o.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${f}</span>
                `, o.className = "success";
      }
      s && (s.textContent = "Score Sent", s.disabled = !0, s.classList.add("hidden")), r && (r.disabled = !1), this.scoreSubmitted = !0, this.saveCurrentStateToLocalStorage();
    } catch (p) {
      console.error("Error:", p), o && (o.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <span>Could not submit score. Please try again.</span>
                `, o.className = "error"), s && (s.textContent = e ? "Send Score Again" : "Try Sending Again", s.disabled = !1, s.classList.remove("hidden")), r && (r.disabled = !1), this.saveCurrentStateToLocalStorage();
    } finally {
      this.autoSubmissionInProgress = !1;
    }
  }
  resetQuiz() {
    const e = this.shadowRoot.getElementById("quizForm"), t = this.shadowRoot.getElementById("resultArea"), o = this.shadowRoot.getElementById("postScoreActions"), s = this.shadowRoot.getElementById("checkScoreContainer"), r = this.shadowRoot.getElementById("validationMessage"), i = this.shadowRoot.getElementById("sendButton"), n = this.shadowRoot.getElementById("tryAgainButton"), a = this.getStudentInputs(), l = this.shadowRoot.getElementById("studentInfoSection");
    e.reset();
    const c = this.shadowRoot.getElementById("dynamicContent");
    if (c && c.classList.remove("hidden"), l) {
      l.style.display = "";
      const g = this.getStudentInputs(), f = this.getTeacherCodeInput();
      g.forEach((S) => {
        S && (S.disabled = !1);
      }), f && (f.disabled = !1);
    }
    t && t.classList.add("hidden"), o && o.classList.add("hidden"), s && s.classList.remove("hidden"), r && (r.textContent = "", r.className = ""), a.forEach((g) => {
      g.classList.remove("invalid"), g.disabled = !1;
    }), this.showStudentInfoAlert(), this.userQuestionAnswers = {}, this.questionsAnswered = 0, this.score = 0, this.vocabUserChoices = {}, this.vocabScore = 0, this.vocabSubmitted = !1, this.clozeAnswers = {}, this.clozeScore = 0, this.clozeSubmitted = !1, this.scoreSubmitted = !1, this.scoreSentToServer = !1, this.autoSubmissionInProgress = !1, this.clearLocalStorage();
    const d = this.shadowRoot.getElementById("retrySubmissionSection");
    d && d.classList.add("hidden");
    const h = this.shadowRoot.getElementById("retryTeacherCode");
    h && (h.value = ""), Array.from(this.shadowRoot.querySelectorAll('input[type="radio"]')).forEach((g) => {
      g.disabled = !1;
      try {
        delete g.dataset.answered;
      } catch {
      }
    }), Array.from(this.shadowRoot.querySelectorAll(".short-answer-input")).forEach((g) => {
      g.disabled = !1, g.value = "";
      try {
        delete g.dataset.answered;
      } catch {
      }
      g.tagName.toLowerCase() === "textarea" && this.autoExpandTextarea(g);
    }), Array.from(this.shadowRoot.querySelectorAll(".option-label")).forEach((g) => {
      g.classList.remove("correct", "incorrect");
      const f = g.querySelector(".feedback-icon");
      f && f.remove(), g.style.cursor = "";
    }), Array.from(this.shadowRoot.querySelectorAll(".explanation")).forEach((g) => g.classList.add("hidden")), i && (i.disabled = !1, i.textContent = "Resend Score to Teacher", i.classList.add("hidden")), n && (n.disabled = !1), this.stopAllAudio(), this.generateQuiz();
    const w = this.shadowRoot.getElementById("checkScoreButton");
    w && (w.disabled = !0), this.lockQuizContent();
  }
  getWrittenAnswersString() {
    const e = this.currentQuestions.filter((t) => t.o && t.o.length === 0);
    return e.length === 0 ? "" : e.map((t, o) => {
      const s = this.currentQuestions.indexOf(t), r = this.userQuestionAnswers[s] || "";
      return `Q: ${t.q}
A: ${r}`;
    }).join(`

`);
  }
  toggleTheme() {
    this.classList.toggle("dark");
    const e = this.classList.contains("dark");
    this.shadowRoot.querySelector(".light-icon").classList.toggle("hidden", e), this.shadowRoot.querySelector(".dark-icon").classList.toggle("hidden", !e);
  }
}
customElements.define("tj-quiz-element", $);
