import { c as R } from "./chunks/tj-config-Co8tO1UZ.js";
import { a as z, b as P, s as T, g as M } from "./chunks/audio-utils-DV9LW5S-.js";
const I = ':host{display:block;font-family:inherit;max-width:80em;margin:0 auto;color:#1e293b;background-color:#f8fafc;position:relative;--tj-primary-color: #2563eb;--tj-primary-hover: #1d4ed8;--tj-primary-light: #eff6ff;--tj-primary-border: #bfdbfe;--tj-success-color: #16a34a;--tj-success-light: #f0fdf4;--tj-success-border: #bbf7d0;--tj-danger-color: #dc2626;--tj-danger-light: #fef2f2;--tj-danger-border: #fecaca;--tj-text-main: #1e293b;--tj-text-muted: #64748b;--tj-text-light: #94a3b8;--tj-bg-card: #ffffff;--tj-bg-alt: #f1f5f9;--tj-border-main: #e2e8f0;--tj-border-light: #f1f5f9;--tj-border-dark: #cbd5e1}.sticky-bar{position:sticky;top:0;background:#ffffffeb;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);padding:.75em 1em;border-radius:0;box-shadow:0 1px 0 var(--tj-border-main),0 4px 16px #0000000a;z-index:100;margin:.25rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--tj-border-main)}.playback-controls{display:flex;gap:1em;align-items:center}.autoplay-toggle-container{display:flex;align-items:center;gap:.8em;padding:.4em .8em;background:#f8fafc80;border-radius:2em;border:1px solid #e2e8f0;font-size:.85em;font-weight:600;color:#475569;-webkit-user-select:none;user-select:none}.switch{position:relative;display:inline-block;width:32px;height:18px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#cbd5e1;transition:.4s;border-radius:18px}.slider:before{position:absolute;content:"";height:14px;width:14px;left:2px;bottom:2px;background-color:#fff;transition:.4s;border-radius:50%}input:checked+.slider{background-color:#2563eb}input:checked+.slider:before{transform:translate(14px)}.control-btn{display:flex;align-items:center;gap:.5em;padding:.5em 1em;font-size:.9em;font-weight:600;border-radius:.6em;background:#f8fafc;border:1px solid #e2e8f0;color:#475569;cursor:pointer;transition:all .2s}.control-btn:hover{background:#f1f5f9;border-color:#cbd5e1;color:#2563eb}#play-pause-btn{background:#2563eb;color:#fff;border-color:#1d4ed8}#play-pause-btn:hover{background:#1d4ed8}#stop-btn{display:none}.progress-text{font-weight:700;color:#2563eb;font-size:1.1em;white-space:nowrap}.lang-selector-container{margin:2rem;text-align:center}.lang-selector-label{font-weight:700;color:#64748b;margin-bottom:.75em;font-size:1.5rem}.lang-selector-buttons{display:flex;justify-content:center;gap:1em;flex-wrap:wrap}.lang-btn{background:#fff;border:2px solid #e2e8f0;color:#475569;padding:.75em 1.5em;border-radius:9999px;font-size:1em;font-weight:600;cursor:pointer;transition:all .2s}.lang-btn:hover:not(.active){border-color:#2563eb;color:#2563eb;transform:none}.lang-btn.active{background:#2563eb;border-color:#2563eb;color:#fff}.story-container{display:flex;flex-direction:column;gap:1rem;padding:0 .5rem;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#cbd5e1 transparent}.story-container::-webkit-scrollbar{width:6px}.story-container::-webkit-scrollbar-thumb{background-color:#cbd5e1;border-radius:3px}.card{background:var(--tj-bg-card);border-radius:1.2em;padding:1rem .75rem;box-shadow:0 2px 8px #0000000f;text-align:left;transition:box-shadow .3s ease,background .3s ease;border:none;opacity:1}.card:hover{box-shadow:0 4px 16px #00000017}.card.completed{background:var(--tj-success-light);box-shadow:0 2px 12px #16a34a1a}.card.failed{background:var(--tj-danger-light);box-shadow:0 2px 12px #dc26261a}.card.playing{background:var(--tj-primary-light);box-shadow:0 4px 20px #2563eb24}.card-header{display:flex;align-items:flex-start;justify-content:center;gap:1em;margin-bottom:.5em}.original-text{font-size:1.15em;line-height:1.65;font-weight:500;flex:1;color:var(--tj-text-main)}.tts-word{cursor:pointer;transition:background .2s;border-radius:.2em;padding:0 .1em}.tts-word:hover{background:#f1f5f9}.voice-btn{background:#eef2ff;border:1px solid #c7d2fe;padding:0;font-size:1.1em;border-radius:50%;width:2.2em;height:2.2em;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);flex-shrink:0;color:var(--tj-primary-color);box-shadow:0 1px 3px #00000014}.voice-btn:hover{background:#c7d2fe;color:#000;transform:scale(1.1);box-shadow:0 2px 6px #00000026}.card-btn-group{display:flex;gap:.6em;align-items:center;padding:.4em;background:#fdfdfd;border-radius:2em;border:1px solid #f1f5f9}.record-btn,.play-recorded-btn{background:#f8fafc;border:1px solid #e2e8f0;padding:0;border-radius:50%;width:2.2em;height:2.2em;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#1a202c;transition:all .2s cubic-bezier(.4,0,.2,1);flex-shrink:0}.record-btn:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca;transform:scale(1.1)}.record-btn.recording{background:#ef4444;color:#fff;border-color:#dc2626;animation:pulse 1.5s infinite}.play-recorded-btn{background:#f0fdf4;color:#15803d;border-color:#bbf7d0}.play-recorded-btn.playing{background:#15803d;color:#fff;border-color:#14532d;animation:pulse-green 1.5s infinite}.play-recorded-btn:hover{background:#bbf7d0;color:#14532d;transform:scale(1.1)}@keyframes pulse-green{0%{transform:scale(1);box-shadow:0 0 #15803db3}70%{transform:scale(1.05);box-shadow:0 0 0 10px #15803d00}to{transform:scale(1);box-shadow:0 0 #15803d00}}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #ef4444b3}70%{transform:scale(1.05);box-shadow:0 0 0 10px #ef444400}to{transform:scale(1);box-shadow:0 0 #ef444400}}.full-translation{font-size:1em;color:var(--tj-text-muted);margin-bottom:.75em;font-style:italic;line-height:1.5}.highlight{color:#2563eb;font-weight:700;border-bottom:3px solid #bfdbfe;padding:0 .1em;transition:all .3s ease}.card.completed .highlight{color:#16a34a;border-bottom-color:#bbf7d0}.card.failed .highlight{color:#dc2626;border-bottom-color:#fecaca}.translation-options{display:flex;flex-wrap:wrap;gap:.8em;justify-content:center}button{font-family:inherit;font-size:1em;padding:.6em 1.2em;cursor:pointer;background:#fff;border:1px solid var(--tj-border-main);border-radius:.7em;transition:all .2s cubic-bezier(.4,0,.2,1);outline:none;color:var(--tj-text-muted)}button:hover:not(:disabled){background:var(--tj-bg-alt);border-color:var(--tj-border-dark);transform:translateY(-1px)}button.success{background:#22c55e!important;color:#fff;border-color:#16a34a;animation:bounce .4s ease}button.error{background:#ef4444!important;color:#fff;border-color:#dc2626;animation:shake .4s ease}.finish-container{padding:2em 0 5em;text-align:center}.finish-btn{background:#2563eb;color:#fff;border:none;padding:1.2em 2.5em;font-size:1.1em;font-weight:700;border-radius:.8em;cursor:pointer;box-shadow:0 4px 12px #2563eb26;transition:all .3s ease}.finish-btn:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 15px #2563eb33}.form-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#fffffff2;display:none;flex-direction:column;align-items:center;justify-content:center;border-radius:1.2em;z-index:20;animation:fadeIn .3s ease}.form-container{width:80%;max-width:300px;text-align:center}input{width:100%;padding:1em;margin-bottom:1em;border:1px solid #e2e8f0;border-radius:.5em;font-size:1em;box-sizing:border-box}.generate-btn,.try-again-btn{background:#2563eb;color:#fff;border:none;width:100%;padding:1em;font-weight:600;border-radius:.5em}.report-card{background:#fff;padding:2em;border-radius:1em;box-shadow:0 4px 20px #0000001a;text-align:left}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes bounce{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.browser-prompt-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ae6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;flex-direction:column;align-items:center;justify-content:center;z-index:1000;color:#fff;padding:2em;text-align:center}.browser-prompt-card{background:#fff;color:#1e293b;padding:2.5em;border-radius:1.5em;max-width:400px;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{margin-top:0;color:#1e293b;font-size:1.5em}.browser-prompt-card p{color:#64748b;line-height:1.6;margin-bottom:2em}.browser-action-btn{display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:1em 2em;border-radius:.75em;font-weight:600;transition:background .2s;cursor:pointer;border:none;width:100%;box-sizing:border-box}.browser-action-btn:hover{background:#1d4ed8}.close-prompt{margin-top:1.5em;background:transparent;border:none;color:#94a3b8;cursor:pointer;font-size:.9em;text-decoration:underline}.activities-wrapper{display:flex;flex-direction:column;gap:3em;padding-bottom:2rem}.section-divider{border:none;border-top:2px dashed #e2e8f0;margin:2em 0;position:relative}.section-divider:after{content:attr(data-label);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:0 1em;color:#94a3b8;font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.1em}.form-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172acc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:1000;animation:fadeIn .3s ease}.form-container{background:#fff;width:90%;max-width:450px;padding:2.5em;border-radius:1.5em;box-shadow:0 25px 50px -12px #00000040;text-align:center;max-height:90vh;overflow-y:auto}.report-area{text-align:left}.rc-header{text-align:center;margin-bottom:24px}.rc-icon{font-size:2.5em;margin-bottom:8px}.rc-title{font-size:1.4em;font-weight:700;color:var(--tj-text-main);margin-bottom:4px}.rc-subtitle{color:var(--tj-text-muted);font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.rc-activity{display:inline-block;background:var(--tj-bg-alt);padding:4px 12px;border-radius:20px;font-size:.85em;font-weight:600;color:var(--tj-text-main);margin-top:12px}.rc-student{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:12px;padding:16px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center}.rc-label{color:var(--tj-text-muted);font-size:.9em;font-weight:600}.rc-value{font-weight:700;color:var(--tj-text-main);text-align:right}.rc-number{color:var(--tj-text-muted);font-weight:500;font-size:.9em;display:block}.rc-score-row{display:flex;align-items:center;gap:20px;margin-bottom:16px}.rc-score-circle{width:80px;height:80px;border-radius:50%;background:var(--tj-primary-light);color:var(--tj-primary-color);display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px solid var(--tj-primary-color);flex-shrink:0}.rc-score-val{font-size:1.5em;font-weight:800;line-height:1}.rc-score-pct{font-size:.85em;font-weight:700;margin-top:2px}.rc-score-label{font-size:1.1em;font-weight:700;color:var(--tj-text-main)}.rc-bar-track{height:8px;background:var(--tj-bg-alt);border-radius:4px;overflow:hidden}.rc-bar-fill{height:100%;background:var(--tj-primary-color);border-radius:4px}.rc-details{background:var(--tj-bg-alt);padding:16px;border-radius:12px;margin-bottom:24px;font-size:.9em}.rc-detail-row{display:flex;justify-content:space-between;margin-bottom:8px}.rc-detail-row:last-child{margin-bottom:0}.rc-detail-row span:first-child{color:var(--tj-text-muted);font-weight:500}.rc-detail-row span:last-child{font-weight:600;color:var(--tj-text-main)}.rc-close-btn:hover{background:var(--tj-bg-alt)}.rc-submission-box{margin-top:20px;padding:20px;background:var(--tj-bg-alt);border-radius:12px;border:1px solid var(--tj-border-main);text-align:left;box-shadow:inset 0 2px 4px #00000005}.rc-submission-header{margin:0 0 12px;font-size:.85em;color:var(--tj-text-muted);font-weight:700;text-transform:uppercase;letter-spacing:.05em}.rc-teacher-code-input{width:100%;box-sizing:border-box;padding:12px 16px;border-radius:10px;font-size:1em;margin-bottom:8px;background:var(--tj-bg-card);transition:all .2s ease;outline:none;font-family:inherit;color:var(--tj-text-main)}.rc-teacher-code-input:focus{border-color:var(--tj-primary-color);box-shadow:0 0 0 4px var(--tj-primary-light)}.rc-teacher-code-input::placeholder{color:var(--tj-text-light)}.rc-help-text{margin:4px 0 0;font-size:.85em;color:var(--tj-text-muted);line-height:1.4}.rc-submit-btn{width:100%;padding:16px;background:var(--tj-primary-color);color:#fff;border:none;border-radius:12px;font-size:1.1em;font-weight:700;cursor:pointer;transition:all .2s ease;box-shadow:0 4px 12px #2563eb40;margin-bottom:8px}.rc-submit-btn:hover:not(:disabled){background:var(--tj-primary-hover);transform:translateY(-1px);box-shadow:0 6px 16px #2563eb59}.rc-submit-btn:active:not(:disabled){transform:translateY(0)}.rc-submit-btn:disabled{opacity:.5;cursor:default;background:var(--tj-text-light);box-shadow:none}.rc-secondary-btn{width:100%;padding:14px;background:var(--tj-bg-alt);color:var(--tj-text-main);border:1.5px solid var(--tj-border-main);border-radius:12px;font-size:1em;font-weight:600;cursor:pointer;transition:all .2s ease}.rc-secondary-btn:hover{background:var(--tj-border-main);border-color:var(--tj-border-dark)}.reset-all-btn{background:#ef4444;color:#fff;border:none;width:100%;padding:1em;font-weight:600;border-radius:.5em;cursor:pointer;transition:background .2s;margin-top:1em;font-size:.85em;opacity:.9}.reset-all-btn:hover{background:#dc2626;opacity:1}.unscramble-card{max-width:600px;margin-left:auto;margin-right:auto;width:100%;box-sizing:border-box;background:var(--tj-bg-card);border-radius:1.2em;padding:1.25em;box-shadow:0 2px 8px #0000000f}.unscramble-card h3{margin-top:0;color:#2563eb}.unscramble-result{min-height:3em;border-bottom:2px dashed #e2e8f0;margin-bottom:1em;padding:.5em;display:flex;flex-wrap:wrap;gap:.5em;justify-content:center}.unscramble-pool{display:flex;flex-wrap:wrap;gap:.5em;justify-content:center;margin-bottom:2em}.unscramble-actions{display:flex;gap:1em;font-size:.9em;padding:.5em;justify-content:center;flex-wrap:wrap}.unscramble-result button{background:#f8fafc;border-color:#e2e8f0;color:#475569}.unscramble-pool button{background:#f8fafc}.memory-game-header{text-align:center;margin-bottom:2em}.memory-game-header h3{color:#2563eb;margin:0}.memory-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1em;width:100%;max-width:500px;margin:0 auto 2em;padding:1em;box-sizing:border-box}.memory-card{aspect-ratio:4/5;perspective:1000px;cursor:pointer;min-height:100px}.memory-card-inner{position:relative;width:100%;height:100%;text-align:center;transition:transform .6s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d;border-radius:.8em;box-shadow:0 4px 8px #0000001a}.memory-card.flipped .memory-card-inner{transform:rotateY(180deg)}.memory-card-front,.memory-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;border-radius:.8em;padding:.5em;font-weight:600;font-size:.9em;box-sizing:border-box;border:1px solid #e2e8f0}.memory-card-front{background-color:#2563eb;color:#fff;font-size:2em;box-shadow:inset 0 0 20px #fff3}.memory-card-back{background-color:#fff;color:#1e293b;transform:rotateY(180deg);word-break:break-word;font-size:1.1em;padding:.8em;line-height:1.2}.memory-card.matched .memory-card-inner{box-shadow:0 0 15px #22c55e66;border:2px solid #22c55e}.memory-game-actions{display:flex;gap:1em;justify-content:center;margin-top:2em}.recordings-section{margin-top:20px;text-align:left}.recordings-section h4{display:flex;align-items:center;gap:8px;margin:0 0 12px;color:var(--tj-text-main);font-size:1em;border-bottom:1px solid var(--tj-border-main);padding-bottom:.5em}.recordings-list{display:flex;flex-direction:column;gap:8px}.recording-item{display:flex;align-items:center;gap:12px;padding:8px;background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);border-radius:8px;transition:background .2s}.recording-item:hover{background:var(--tj-border-light)}.recording-play-btn{width:34px;height:34px;padding:0;display:flex;align-items:center;justify-content:center;background:#eef2ff;border:1px solid #c7d2fe;border-radius:50%;cursor:pointer;color:#2563eb;transition:all .2s;box-shadow:0 1px 3px #0000001a}.recording-play-btn:hover{background:#c7d2fe;transform:scale(1.1)}.recording-play-btn.playing{background:#2563eb;color:#fff}.recording-text{font-size:.9em;color:var(--tj-text-muted);line-height:1.4}@media (max-width: 600px){.sticky-bar{padding:.5rem .8rem;gap:.5em}.playback-controls{gap:.5em}.control-btn span{display:none}.autoplay-toggle-container{padding:.4em .5em}.progress-text{font-size:.9em;white-space:nowrap}}@media (min-width: 601px){.memory-grid{grid-template-columns:repeat(4,1fr)}}.voice-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ab3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;z-index:1000;animation:fadeIn .2s ease}.voice-card{background:#fff;width:90%;max-width:400px;max-height:80vh;border-radius:1.2em;display:flex;flex-direction:column;box-shadow:0 20px 25px -5px #0003}.voice-card-header{padding:1.25em;border-bottom:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:center}.voice-card-header h3{margin:0;font-size:1.1em;color:#1e293b}.close-voice-btn{background:none;border:none;padding:.5em;color:#94a3b8;cursor:pointer}.voice-list{padding:1em;overflow-y:auto;display:flex;flex-direction:column;gap:.5em}.voice-option-btn{width:100%;text-align:left!important;padding:.8em 1em!important;border:1px solid #f1f5f9!important;background:#f8fafc!important;border-radius:.6em!important;font-size:.9em!important;display:flex;justify-content:space-between;align-items:center;transition:all .2s;color:#475569!important}.voice-option-btn:hover{background:#f1f5f9!important;border-color:#e2e8f0!important}.voice-option-btn.active{background:#eff6ff!important;border-color:#3b82f6!important;color:#2563eb!important;font-weight:600!important}.voice-option-btn .badge{font-size:.75em;background:#dcfce7;color:#166534;padding:.2em .5em;border-radius:1em}', A = `<div class="sticky-bar">
  <div class="playback-controls">
    <div class="autoplay-toggle-container" id="autoplay-container">
      <span>Auto-Play</span>
      <label class="switch">
        <input type="checkbox" id="autoplay-checkbox" checked>
        <span class="slider"></span>
      </label>
    </div>
    <button class="control-btn" id="play-pause-btn">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> 
      <span>All</span>
    </button>
    <button class="control-btn" id="stop-btn" title="Stop Playback">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 6h12v12H6z"/></svg>
      <span>Stop</span>
    </button>
    <button class="control-btn" id="voice-btn" title="Choose Voice">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z"/></svg>
    </button>
  </div>
  <div class="progress-text">0 / 0</div>
</div>
<div class="lang-selector-container">
  <p class="lang-selector-label">I want to read in:</p>
  <div class="lang-selector-buttons">
    <button class="lang-btn lang-btn-original active"></button>
    <button class="lang-btn lang-btn-translation"></button>
  </div>
</div>
<div class="activities-wrapper">
  <div id="reading-section">
    <div class="story-container"></div>
  </div>
  
  <div id="scramble-section">
    <hr class="section-divider" data-label="Unscramble">
    <div class="scramble-container"></div>
  </div>

  <div id="memory-section">
    <hr class="section-divider" data-label="Memory Game">
    <div class="memory-container"></div>
  </div>

  <div class="finish-container">
    <button class="finish-btn">Finish & See Report</button>
  </div>
</div>

<div class="form-overlay">
  <div class="form-container">
    <div class="initial-form">
      <h2>Great Job!</h2>
      <p>Please enter your details to generate your report card.</p>
      <input type="text" id="nickname" placeholder="Jake">
      <input type="text" id="student-number" placeholder="01" inputmode="numeric">
      <input type="text" id="homeroom" placeholder="1/1">
      <button class="generate-btn">Generate Report Card</button>
    </div>
    <div class="report-area"></div>
  </div>
</div>

<div class="browser-prompt-overlay">
  <div class="browser-prompt-card">
    <h2>Better in a Browser</h2>
    <p>It looks like you're using an in-app browser. For the best experience (including audio features), please open this page in <b>Chrome</b> or <b>Safari</b>.</p>
    <a class="browser-action-btn" href="javascript:void(0)">Open Browser</a>
    <button class="close-prompt" onclick="this.parentElement.parentElement.style.display='none'">Continue anyway</button>
  </div>
</div>
<div class="voice-overlay">
  <div class="voice-card">
    <div class="voice-card-header">
      <h3>Choose Voice</h3>
      <button class="close-voice-btn">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
    </div>
    <div class="voice-list"></div>
  </div>
</div>
`;
class j extends HTMLElement {
  getLanguageName(e) {
    if (!e) return e || "";
    try {
      return new Intl.DisplayNames(["en"], { type: "language" }).of(e.split(/[-_]/)[0]);
    } catch {
      return e;
    }
  }
  constructor() {
    var r;
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `
      <style>${I}</style>
      ${A}
    `, this.data = [], this.studentInfo = { nickname: "", number: "", homeroom: "", teacherCode: "" }, this.submissionUrl = (r = R) == null ? void 0 : r.submissionUrl, this.isSubmitting = !1, this.score = 0, this.answeredCount = 0, this.isPlayingAll = !1, this.playbackIndex = 0, this.isPaused = !1, this.playbackUtterance = null, this.isAutoplay = !0, this.unscrambleData = [], this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], this.memoryGameData = [], this.flippedCards = [], this.matchedPairsCount = 0, this.matchingGamesCompleted = 0, this.isCheckingMatch = !1, this.isSwapped = !1, this.selectedVoiceName = null, this.recordedBlobs = /* @__PURE__ */ new Map(), this.recordedSentences = /* @__PURE__ */ new Set(), this.completedIndices = /* @__PURE__ */ new Set(), this.unscrambleCompleted = !1, this.memoryCompleted = !1, this.unscrambleTotal = 0, this.memoryTotal = 0, this.isRecordingLine = null, this.mediaRecorder = null, this.recordingStartTime = 0, this.isPlayingRecording = null, this.shadowRoot.querySelector(".generate-btn").onclick = () => this.generateReport(), this.shadowRoot.querySelector("#play-pause-btn").onclick = () => this.toggleFullPlayback(), this.shadowRoot.querySelector("#stop-btn").onclick = () => this.stopFullPlayback(), this.shadowRoot.querySelector("#voice-btn").onclick = () => this._showVoiceOverlay(), this.shadowRoot.querySelector(".close-voice-btn").onclick = () => this._hideVoiceOverlay(), this.shadowRoot.querySelector(".voice-overlay").onclick = (o) => {
      o.target.classList.contains("voice-overlay") && this._hideVoiceOverlay();
    }, this.shadowRoot.querySelector(".lang-btn-original").onclick = () => {
      this.isSwapped && this.swapLanguages();
    }, this.shadowRoot.querySelector(".lang-btn-translation").onclick = () => {
      this.isSwapped || this.swapLanguages();
    };
    const e = this.shadowRoot.querySelector("#autoplay-checkbox");
    e.onchange = (o) => {
      this.isAutoplay = o.target.checked;
    };
  }
  connectedCallback() {
    requestAnimationFrame(() => {
      this.loadData(), this.checkBrowserSupport(), window.speechSynthesis.onvoiceschanged !== void 0 && (window.speechSynthesis.onvoiceschanged = () => {
        this._updateVoiceList();
      }), this._updateVoiceList(), setTimeout(() => this._updateVoiceList(), 500), setTimeout(() => this._updateVoiceList(), 1500);
    });
  }
  loadData() {
    try {
      let e = "";
      if (this.config)
        if (typeof this.config == "object") {
          this._processParsedData(this.config);
          return;
        } else
          e = String(this.config);
      else this.hasAttribute("config") ? e = this.getAttribute("config") : this.rawJson ? e = this.rawJson : (this.rawJson = this.innerHTML.trim(), this.innerHTML = "", e = this.rawJson);
      if (e) {
        const r = e.replace(/"((?:\\.|[^"\\])*)"/gs, (t, s) => '"' + s.replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'), o = JSON.parse(r);
        this._processParsedData(o);
      }
    } catch (e) {
      console.error("Failed to parse JSON data for lbl-reader", e), this.shadowRoot.innerHTML = '<div class="error">Error loading data. Check console.</div>';
    }
  }
  _processParsedData(e) {
    this.data = (Array.isArray(e) ? e : [e]).map((r) => {
      const o = [...r.translationOptions], t = r.translationOptions[r.correctTranslationIndex];
      for (let a = o.length - 1; a > 0; a--) {
        const d = Math.floor(Math.random() * (a + 1));
        [o[a], o[d]] = [o[d], o[a]];
      }
      const s = r.original.split(/\s+/), i = r.highlightIndex, n = r.highlightIndexEnd !== void 0 ? r.highlightIndexEnd : i, l = s.slice(i, n + 1).join(" ").replace(/[.,!?;:]/g, "");
      return {
        ...r,
        highlightIndexEnd: n,
        shuffledOptions: o,
        newCorrectIndex: o.indexOf(t),
        originalWord: l,
        translationWord: t
      };
    }), this.matchingGamesCompleted = 0, this.render();
  }
  displayAllLines() {
    const e = this.shadowRoot.querySelector(".story-container");
    e.innerHTML = "", this.score = this.completedIndices.size, this.answeredCount = this.completedIndices.size;
    const r = this.getAttribute("lang-original") || "en", o = this.getAttribute("lang-translation") || "th";
    this.data.forEach((t, s) => {
      const i = document.createElement("div");
      i.classList.add("card"), i.dataset.index = s;
      const n = document.createElement("div");
      n.classList.add("card-header");
      const l = document.createElement("div");
      l.classList.add("original-text"), t.original.split(" ").forEach((h, m) => {
        const c = document.createElement("span");
        c.textContent = h + " ", c.classList.add("tts-word"), !this.isSwapped && m >= t.highlightIndex && m <= t.highlightIndexEnd && c.classList.add("highlight"), c.onclick = (b) => {
          b.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(h.replace(/[.,!?;:]/g, ""), r);
        }, l.appendChild(c);
      }), n.appendChild(l), i.appendChild(n), this.renderLineButtons(s, i);
      const a = document.createElement("div");
      a.classList.add("full-translation"), t.fullTranslation.split(" ").forEach((h, m) => {
        const c = document.createElement("span");
        c.textContent = h + " ", c.classList.add("tts-word"), this.isSwapped && m >= t.highlightIndex && m <= t.highlightIndexEnd && c.classList.add("highlight"), c.onclick = (b) => {
          b.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(h.replace(/[.,!?;:]/g, ""), o);
        }, a.appendChild(c);
      });
      const d = document.createElement("div");
      d.classList.add("translation-options");
      const p = this.completedIndices.has(s);
      p && i.classList.add("completed", "answered"), t.shuffledOptions.forEach((h, m) => {
        const c = document.createElement("button");
        c.textContent = h, c.addEventListener("click", () => this.handleSelection(s, m, t.newCorrectIndex, c, i)), p && (c.disabled = !0, m !== t.newCorrectIndex ? c.style.opacity = "0.5" : c.classList.add("success")), d.appendChild(c);
      }), i.appendChild(a), i.appendChild(d), e.appendChild(i);
    }), this.updateProgress();
  }
  _getBestVoice(e) {
    return z(window.speechSynthesis, e);
  }
  _isMobile() {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }
  _updateVoiceList() {
    if (!window.speechSynthesis) return;
    const e = window.speechSynthesis.getVoices(), r = this.shadowRoot.querySelector(".voice-list"), o = this.shadowRoot.querySelector("#voice-btn");
    if (!r || !o) return;
    const t = this.getAttribute("lang-original") || "en", s = t.split(/[-_]/)[0].toLowerCase();
    let i = e.filter((l) => l.lang.toLowerCase() === t.toLowerCase());
    if (i.length === 0 && (i = e.filter((l) => l.lang.split(/[-_]/)[0].toLowerCase() === s)), i.length === 0) {
      o.style.display = "none";
      return;
    }
    o.style.display = "flex", r.innerHTML = "";
    const n = this._getBestVoice(t);
    !this.selectedVoiceName && n && (this.selectedVoiceName = n.name), i.sort((l, a) => l.name.localeCompare(a.name)), i.forEach((l) => {
      const a = document.createElement("button");
      a.classList.add("voice-option-btn"), this.selectedVoiceName === l.name && a.classList.add("active");
      const d = document.createElement("span");
      if (d.textContent = l.name, a.appendChild(d), n && l.name === n.name) {
        const p = document.createElement("span");
        p.classList.add("badge"), p.textContent = "Best", a.appendChild(p);
      }
      a.onclick = () => {
        this.selectedVoiceName = l.name, this._updateVoiceList(), this._hideVoiceOverlay();
      }, r.appendChild(a);
    });
  }
  _showVoiceOverlay() {
    const e = this.shadowRoot.querySelector(".voice-overlay");
    e && (e.style.display = "flex");
  }
  _hideVoiceOverlay() {
    const e = this.shadowRoot.querySelector(".voice-overlay");
    e && (e.style.display = "none");
  }
  _speak(e, r, o = null) {
    if (!window.speechSynthesis) {
      alert("Text-to-speech is not supported in this browser. Please try Chrome or Safari.");
      return;
    }
    window.speechSynthesis.cancel();
    const t = new SpeechSynthesisUtterance(e);
    let s = null;
    const i = this.getAttribute("lang-original") || "en", n = r.split(/[-_]/)[0].toLowerCase(), l = i.split(/[-_]/)[0].toLowerCase();
    return this.selectedVoiceName && n === l && (s = window.speechSynthesis.getVoices().find((d) => d.name === this.selectedVoiceName)), s || (s = this._getBestVoice(r)), s && (t.voice = s), t.lang = r, t.rate = 0.7, o && (t.onend = o), window.speechSynthesis.speak(t), t;
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
    if (this.isRecordingLine === null)
      try {
        this.mediaRecorder = await P(
          (r) => {
            r.data.size > 0 && (this._audioChunks || (this._audioChunks = []), this._audioChunks.push(r.data));
          },
          (r) => {
            const o = new Blob(this._audioChunks, { type: r });
            Date.now() - this.recordingStartTime > 600 ? (this.recordedBlobs.set(e, o), this.recordedSentences.add(e)) : console.warn("Recording too short to be counted."), this.isRecordingLine = null, this._audioChunks = null, this.renderLineButtons(e);
          },
          1e3
        ), this.recordingStartTime = Date.now(), this.isRecordingLine = e, this.renderLineButtons(e);
      } catch (r) {
        console.error("Error starting recording:", r), alert("Could not access microphone. Please check permissions.");
      }
  }
  stopRecording() {
    this.mediaRecorder && this.mediaRecorder.state === "recording" && this.mediaRecorder.stop();
  }
  playRecordedAudio(e) {
    const r = this.recordedBlobs.get(e);
    if (!r) return;
    this.isPlayingRecording;
    const o = URL.createObjectURL(r), t = new Audio(o);
    this.isPlayingRecording = e, this.renderLineButtons(e), t.play(), t.onended = () => {
      this.isPlayingRecording = null, this.renderLineButtons(e), URL.revokeObjectURL(o);
    };
  }
  renderLineButtons(e, r = null) {
    if (r || (r = this.shadowRoot.querySelector(`.card[data-index="${e}"]`)), !r) return;
    const o = r.querySelector(".card-header");
    let t = o.querySelector(".card-btn-group");
    t || (t = document.createElement("div"), t.classList.add("card-btn-group"), o.appendChild(t)), t.innerHTML = "";
    const s = document.createElement("button");
    s.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', s.classList.add("voice-btn"), s.title = "Play TTS", s.onclick = () => {
      this.isPlayingAll && this.stopFullPlayback(), this.playLine(e, !1);
    }, t.appendChild(s);
    const i = document.createElement("button");
    if (i.classList.add("record-btn"), this.isRecordingLine === e ? (i.classList.add("recording"), i.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="6" y="6" width="12" height="12"/></svg>', i.onclick = () => this.stopRecording(), i.title = "Stop Recording") : (i.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>', i.onclick = () => this.startRecording(e), i.title = "Record Voice"), t.appendChild(i), this.recordedBlobs.has(e) && this.isRecordingLine !== e) {
      const n = document.createElement("button");
      this.isPlayingRecording === e ? (n.classList.add("play-recorded-btn", "playing"), n.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>') : (n.classList.add("play-recorded-btn"), n.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'), n.title = "Play Recording", n.onclick = () => this.playRecordedAudio(e), t.appendChild(n);
    }
  }
  playLine(e, r = !1) {
    if (e >= this.data.length) {
      r && this.stopFullPlayback();
      return;
    }
    this.playbackIndex = e;
    const o = this.data[e], t = this.getAttribute("lang-original") || "en";
    this.highlightCard(e), this.playbackUtterance = this._speak(o.original, t, () => {
      r && this.isPlayingAll && !this.isPaused && this.playLine(e + 1, !0);
    });
  }
  highlightCard(e) {
    this.clearPlaybackHighlights();
    const o = this.shadowRoot.querySelectorAll(".card")[e];
    o && (o.classList.add("playing"), o.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
  clearPlaybackHighlights() {
    this.shadowRoot.querySelectorAll(".card").forEach((e) => e.classList.remove("playing"));
  }
  updatePlaybackUI() {
    const e = this.shadowRoot.querySelector("#play-pause-btn");
    if (!e) return;
    this.isPlayingAll ? this.isPaused ? e.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> <span>Resume</span>' : e.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> <span>Pause</span>' : e.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> <span>All</span>';
    const r = this.shadowRoot.querySelector("#stop-btn");
    r && (r.style.display = this.isPlayingAll ? "flex" : "none");
  }
  _shouldShowAudioControls() {
    return T(window.speechSynthesis);
  }
  _getAndroidIntentLink() {
    return M();
  }
  checkBrowserSupport() {
    if (!this._shouldShowAudioControls()) {
      const e = this.shadowRoot.querySelector(".browser-prompt-overlay");
      if (e) {
        e.style.display = "flex";
        const r = this._getAndroidIntentLink(), o = this.shadowRoot.querySelector(".browser-action-btn");
        r ? (o.href = r, o.textContent = "Open in Chrome") : (o.onclick = (t) => {
          (!o.href || o.href === "javascript:void(0)") && (t.preventDefault(), alert("Please open this page in Safari or Chrome for the best experience with audio features."));
        }, o.textContent = "Use Safari / Chrome");
      }
    }
  }
  handleSelection(e, r, o, t, s) {
    if (s.classList.contains("answered")) return;
    if (r === o) {
      s.classList.add("answered"), this.answeredCount++, this.completedIndices.add(e), s.dataset.hadError || this.score++, t.classList.add("success"), s.classList.add("completed"), s.classList.remove("failed"), s.querySelectorAll(".translation-options button").forEach((a) => {
        a.disabled = !0, a !== t && (a.style.opacity = "0.5");
      }), this.updateProgress();
      const l = s.nextElementSibling;
      l && !l.classList.contains("finish-container") ? setTimeout(() => {
        l.scrollIntoView({ behavior: "smooth", block: "center" }), this.isAutoplay && this.playLine(e + 1, !1);
      }, 600) : setTimeout(() => {
        this.clearPlaybackHighlights();
        const a = this.shadowRoot.querySelector(".finish-btn");
        a && a.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 600);
    } else
      t.classList.add("error"), t.disabled = !0, s.classList.add("failed"), s.dataset.hadError = "true";
  }
  updateProgress() {
    const e = this.shadowRoot.querySelector(".progress-text");
    e && (e.textContent = `${this.score} / ${this.data.length}`);
  }
  startUnscrambleActivity(e = !0) {
    this.shadowRoot.querySelector("#scramble-section").style.display = "block", this.unscrambleData = [], this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], this.unscrambleUsedSentences || (this.unscrambleUsedSentences = /* @__PURE__ */ new Set());
    let r = String.keys ? Object.keys(this.data) : Array.from(this.data.keys());
    r = r.map((i) => parseInt(i));
    const o = r.filter((i) => !this.unscrambleUsedSentences.has(i));
    let t = [];
    if (o.length >= 5)
      t = o.sort(() => 0.5 - Math.random()).slice(0, 5);
    else {
      t = [...o];
      const i = 5 - t.length, n = r.filter((l) => !o.includes(l)).sort(() => 0.5 - Math.random());
      t = t.concat(n.slice(0, i));
    }
    if (t.forEach((i) => this.unscrambleUsedSentences.add(i)), this.unscrambleUsedSentences.size >= this.data.length && (this.unscrambleUsedSentences.clear(), t.forEach((i) => this.unscrambleUsedSentences.add(i))), this.unscrambleData = t.map((i) => {
      const n = this.data[i], l = n.original.split(/\s+/).filter((d) => d.length > 0), a = [...l].sort(() => 0.5 - Math.random());
      return {
        ...n,
        correctWords: l,
        shuffledWords: a
      };
    }), this.unscrambleTotal = this.unscrambleData.length, this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], (this.getAttribute("lang-original") || "en") === "th") {
      this.startMemoryGame();
      return;
    }
    this.renderUnscrambleChallenge(e), this.updateProgress();
  }
  renderUnscrambleChallenge(e = !0) {
    const r = this.shadowRoot.querySelector(".scramble-container");
    r.innerHTML = "";
    const o = this.unscrambleData[this.currentUnscrambleIndex], t = document.createElement("div");
    t.classList.add("card", "unscramble-card");
    const s = document.createElement("h3");
    s.innerHTML = `Unscramble the Sentence <span style="font-size: 0.8em; color: #64748b; font-weight: normal; margin-left: 0.5em; white-space: nowrap;">(${this.currentUnscrambleIndex + 1} / ${this.unscrambleTotal})</span>`, t.appendChild(s);
    const i = this.getAttribute("lang-original") || "en", n = document.createElement("button");
    n.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', n.classList.add("voice-btn"), n.style.margin = "0 auto 1em auto", n.onclick = () => {
      this._speak(o.original, i);
    }, t.appendChild(n);
    const l = document.createElement("div");
    l.classList.add("full-translation"), l.style.fontSize = "1.2em", l.textContent = o.fullTranslation, l.setAttribute("lang", this.getAttribute("lang-translation") || "th"), t.appendChild(l);
    const a = document.createElement("div");
    a.classList.add("unscramble-result"), a.setAttribute("lang", i), t.appendChild(a);
    const d = document.createElement("div");
    d.classList.add("unscramble-pool"), d.setAttribute("lang", i), t.appendChild(d);
    const p = () => {
      a.innerHTML = "", this.userUnscrambledWords.forEach((g, v) => {
        const y = document.createElement("button");
        y.textContent = g, y.onclick = () => {
          this.userUnscrambledWords.splice(v, 1), p();
        }, a.appendChild(y);
      }), d.innerHTML = "", o.shuffledWords.forEach((g, v) => {
        const y = this.userUnscrambledWords.filter((f) => f === g).length, u = o.shuffledWords.filter((f) => f === g).length;
        if (y < u) {
          const f = document.createElement("button");
          f.textContent = g, f.onclick = () => {
            this.userUnscrambledWords.push(g), p();
          }, d.appendChild(f);
        }
      });
    };
    p();
    const h = document.createElement("div");
    h.classList.add("unscramble-actions");
    const m = document.createElement("button");
    m.textContent = "Skip", m.style.opacity = "0.7", m.onclick = () => {
      this.currentUnscrambleIndex++, this.userUnscrambledWords = [], this.currentUnscrambleIndex < this.unscrambleData.length ? (this.renderUnscrambleChallenge(), this.updateProgress()) : this.renderUnscrambleCompletion();
    };
    const c = document.createElement("button");
    c.textContent = "Check", c.classList.add("finish-btn"), c.style.padding = "0.8em 2em", c.onclick = () => {
      this.userUnscrambledWords.join(" ") === o.correctWords.join(" ") ? (this.unscrambleScore++, c.textContent = "Correct! Next", c.classList.add("success"), c.onclick = () => {
        this.currentUnscrambleIndex++, this.userUnscrambledWords = [], this.currentUnscrambleIndex < this.unscrambleData.length ? (this.renderUnscrambleChallenge(), this.updateProgress()) : this.renderUnscrambleCompletion();
      }) : (c.classList.add("error"), setTimeout(() => c.classList.remove("error"), 500));
    };
    const b = document.createElement("button");
    b.textContent = "Reset", b.onclick = () => {
      this.userUnscrambledWords = [], p();
    }, h.appendChild(b), h.appendChild(m), h.appendChild(c), t.appendChild(h), r.appendChild(t), e && t.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  startMemoryGame(e = !0) {
    this.shadowRoot.querySelector("#memory-section").style.display = "block", this.matchingGamesCompleted++, this.matchedPairsCount = 0, this.flippedCards = [], this.isCheckingMatch = !1;
    const r = this.data.map((i) => ({
      original: i.originalWord,
      translation: i.translationWord
    })), o = [], t = /* @__PURE__ */ new Set();
    for (; o.length < 6 && t.size < r.length; ) {
      const i = Math.floor(Math.random() * r.length);
      t.has(i) || (o.push(r[i]), t.add(i));
    }
    const s = [];
    o.forEach((i, n) => {
      s.push({ id: n, type: "original", text: i.original, lang: this.getAttribute("lang-original") || "en" }), s.push({ id: n, type: "translation", text: i.translation, lang: this.getAttribute("lang-translation") || "th" });
    }), this.memoryGameData = s.sort(() => 0.5 - Math.random()), this.memoryTotal = this.memoryGameData.length / 2, this.renderMemoryGameUI(), this.updateProgress();
  }
  renderUnscrambleCompletion() {
    const e = this.shadowRoot.querySelector(".scramble-container");
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
    const e = this.shadowRoot.querySelector(".memory-container");
    e.innerHTML = "";
    const r = document.createElement("div");
    r.classList.add("memory-game-header"), r.innerHTML = `
      <h3>Memory Matching Game</h3>
      <p>Match the word with its translation!</p>
    `, e.appendChild(r);
    const o = document.createElement("div");
    o.classList.add("memory-grid"), this.memoryGameData.forEach((n, l) => {
      const a = document.createElement("div");
      a.classList.add("memory-card"), a.dataset.index = l, a.innerHTML = `
        <div class="memory-card-inner">
          <div class="memory-card-front">?</div>
          <div class="memory-card-back" lang="${n.lang}">${n.text}</div>
        </div>
      `, a.onclick = () => this.handleMemoryCardFlip(a, n), o.appendChild(a);
    }), e.appendChild(o);
    const t = document.createElement("div");
    t.classList.add("memory-game-actions");
    const s = document.createElement("button");
    s.textContent = "Play Again (New Words)", s.onclick = () => this.startMemoryGame(), t.appendChild(s), e.appendChild(t);
    const i = this.shadowRoot.querySelector(".finish-container");
    i.style.display = "block", i.querySelector(".finish-btn").onclick = () => this.showFinalForm();
  }
  handleMemoryCardFlip(e, r) {
    if (!(this.isCheckingMatch || e.classList.contains("flipped") || e.classList.contains("matched")) && (this._speak(r.text, r.lang), e.classList.add("flipped"), this.flippedCards.push({ element: e, data: r }), this.flippedCards.length === 2)) {
      this.isCheckingMatch = !0;
      const [o, t] = this.flippedCards;
      o.data.id === t.data.id ? setTimeout(() => {
        o.element.classList.add("matched"), t.element.classList.add("matched"), this.matchedPairsCount++, this.flippedCards = [], this.isCheckingMatch = !1, this.updateProgress(), this.matchedPairsCount === this.memoryGameData.length / 2 && (this.memoryCompleted = !0);
      }, 600) : setTimeout(() => {
        o.element.classList.remove("flipped"), t.element.classList.remove("flipped"), this.flippedCards = [], this.isCheckingMatch = !1;
      }, 1200);
    }
  }
  showFinalForm() {
    const e = this.shadowRoot.querySelector(".sticky-bar");
    e && (e.style.display = "none");
    const r = this.shadowRoot.querySelector(".form-overlay");
    r.style.display = "flex";
    const o = this.shadowRoot.querySelector("#nickname"), t = this.shadowRoot.querySelector("#student-number");
    this.studentInfo.nickname ? (o.value = this.studentInfo.nickname, o.disabled = !0, t.value = this.studentInfo.number, t.disabled = !0, this.generateReport()) : (this.shadowRoot.querySelector(".initial-form").style.display = "block", this.shadowRoot.querySelector(".report-area").innerHTML = "");
  }
  generateReport() {
    const e = this.shadowRoot.querySelector("#nickname").value.trim(), r = this.shadowRoot.querySelector("#student-number").value.trim(), o = this.shadowRoot.querySelector("#homeroom").value.trim();
    if (!e || !r) {
      alert("Please enter both nickname and student number.");
      return;
    }
    this.studentInfo = { ...this.studentInfo, nickname: e, number: r, homeroom: o };
    const t = this.getAttribute("story-title") || "Story Practice", s = (/* @__PURE__ */ new Date()).toLocaleString(), i = this.data.length > 0 ? this.score / this.data.length : 0;
    this.data.length > 0 && this.recordedSentences.size / this.data.length;
    const n = this.unscrambleData.length || this.unscrambleTotal, l = n > 0 ? this.unscrambleScore / n : 0, a = this.memoryGameData.length / 2 || this.memoryTotal, d = a > 0 ? this.matchedPairsCount / a : 0;
    let p = 85, h = 10, m = 5;
    this.unscrambleData.length === 0 && (p += h, h = 0);
    const c = i * p + l * h + d * m, b = this.shadowRoot.querySelector(".report-area"), g = c >= 80 ? "🏆" : c >= 50 ? "⭐" : "💪", v = c >= 80 ? "Excellent!" : c >= 50 ? "Good effort!" : "Keep practicing!";
    if (b.innerHTML = `
      <div class="rc-header">
          <div class="rc-icon">📄</div>
          <div class="rc-title">${t}</div>
          <div class="rc-subtitle">Report Card</div>
      </div>
      <div class="rc-student">
          <span class="rc-label">Student</span>
          <span class="rc-value">${e} <span class="rc-number">(${r}) ${o ? `- ${o}` : ""}</span></span>
      </div>
      <div class="rc-score-row">
          <div class="rc-score-circle">
              <div class="rc-score-val">${Math.round(c)}%</div>
              <div class="rc-score-pct">Overall</div>
          </div>
          <div class="rc-score-label">${g} ${v}</div>
      </div>
      <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${c}%"></div></div>
      <div class="rc-details">
          <div class="rc-detail-row"><span>Translation Score</span><span>${this.score} / ${this.data.length}</span></div>
          <div class="rc-detail-row"><span>Sentences Recorded</span><span>${this.recordedSentences.size} / ${this.data.length}</span></div>
          ${n > 0 ? `<div class="rc-detail-row"><span>Unscramble Score</span><span>${this.unscrambleScore} / ${n}</span></div>` : ""}
          <div class="rc-detail-row"><span>Matching Pairs</span><span>${this.matchedPairsCount} / ${a}</span></div>
          <div class="rc-detail-row"><span>Completed On</span><span>${s}</span></div>
      </div>
      <div class="rc-submission-box">
          <p class="rc-submission-header">Submission (Optional)</p>
          <input type="text" id="report-teacher-code" class="rc-teacher-code-input" placeholder="Enter Teacher Code" value="${this.studentInfo.teacherCode || ""}">
          <p class="rc-help-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
      </div>
      <div class="rc-actions" style="margin-top: 16px;">
          <button class="rc-submit-btn" id="submit-score-btn">Submit Score Online</button>
          <button class="rc-secondary-btn return-btn">Return to Story</button>
          <button class="reset-all-btn" style="background: var(--tj-error-color); color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-size: 0.85em; margin-top: 8px;">Reset All Progress</button>
      </div>
    `, this.recordedBlobs.size > 0) {
      const u = document.createElement("div");
      u.classList.add("recordings-section");
      const f = document.createElement("h4");
      f.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="#2563eb"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg> Student Recordings', u.appendChild(f);
      const C = document.createElement("div");
      C.classList.add("recordings-list"), Array.from(this.recordedBlobs.keys()).sort((w, S) => w - S).forEach((w) => {
        const S = this.data[w], k = document.createElement("div");
        k.classList.add("recording-item");
        const x = document.createElement("button");
        x.classList.add("recording-play-btn"), x.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', x.title = "Play Recording", x.onclick = () => this.playRecordedAudio(w);
        const L = document.createElement("div");
        L.classList.add("recording-text"), L.textContent = S.original, k.appendChild(x), k.appendChild(L), C.appendChild(k);
      }), u.appendChild(C), b.appendChild(u);
    }
    this.shadowRoot.querySelector(".initial-form").style.display = "none", b.querySelector(".return-btn").onclick = () => {
      this.shadowRoot.querySelector(".form-overlay").style.display = "none";
      const u = this.shadowRoot.querySelector(".sticky-bar");
      u && (u.style.display = "flex");
    };
    const y = b.querySelector("#submit-score-btn");
    y && (y.onclick = () => this._submitScore()), b.querySelector(".reset-all-btn").onclick = () => {
      var u;
      confirm("Are you sure you want to reset all progress? This will delete all your scores and recordings.") && (this.completedIndices.clear(), this.recordedBlobs.clear(), this.recordedSentences.clear(), this.unscrambleScore = 0, this.matchedPairsCount = 0, this.unscrambleCompleted = !1, this.memoryCompleted = !1, this.score = 0, this.answeredCount = 0, (u = this.unscrambleUsedSentences) == null || u.clear(), this.shadowRoot.querySelector(".form-overlay").style.display = "none", this.shadowRoot.querySelector(".report-area").innerHTML = "", this.shadowRoot.querySelector(".initial-form").style.display = "block", this.loadData());
    };
  }
  async _submitScore() {
    const e = this.shadowRoot.getElementById("report-teacher-code"), r = e ? e.value.trim() : this.studentInfo.teacherCode;
    if (this.studentInfo.teacherCode = r, r !== "6767") {
      alert("Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.");
      return;
    }
    if (this.isSubmitting) return;
    const o = this.shadowRoot.getElementById("submit-score-btn"), t = o.textContent;
    this.isSubmitting = !0, o.textContent = "Submitting...", o.disabled = !0;
    const s = this.getAttribute("story-title") || "Story Practice", i = this.data.length > 0 ? this.score / this.data.length : 0, n = this.unscrambleData.length || this.unscrambleTotal, l = n > 0 ? this.unscrambleScore / n : 0, a = this.memoryGameData.length / 2 || this.memoryTotal, d = a > 0 ? this.matchedPairsCount / a : 0;
    let p = 85, h = 10, m = 5;
    this.unscrambleData.length === 0 && (p += h, h = 0);
    const c = i * p + l * h + d * m, b = {
      nickname: this.studentInfo.nickname,
      homeroom: this.studentInfo.homeroom || "",
      studentId: this.studentInfo.number,
      quizName: "Read- " + s,
      score: Math.round(c),
      total: 100
    };
    try {
      await fetch(this.submissionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(b)
      }), alert("Score successfully submitted!"), o.textContent = "Submitted ✓", o.style.background = "var(--tj-text-muted)";
    } catch (g) {
      console.error("Error submitting score:", g), alert("There was an error submitting your score. Please try again."), o.textContent = t, o.disabled = !1, this.isSubmitting = !1;
    }
  }
  swapLanguages() {
    const e = this.getAttribute("lang-original") || "en", r = this.getAttribute("lang-translation") || "th";
    this.setAttribute("lang-original", r), this.setAttribute("lang-translation", e), this.isSwapped = !this.isSwapped, this.selectedVoiceName = null, this._updateVoiceList();
    const o = this.shadowRoot.querySelector(".lang-btn-original"), t = this.shadowRoot.querySelector(".lang-btn-translation");
    o && o.classList.toggle("active", !this.isSwapped), t && t.classList.toggle("active", this.isSwapped), this.data = this.data.map((s) => {
      const i = s.fullTranslation, n = s.original, l = s.translationWord, a = s.originalWord;
      return {
        ...s,
        original: i,
        fullTranslation: n,
        originalWord: l,
        translationWord: a
        // Keep options as requested
      };
    }), this.displayAllLines();
  }
  render() {
    if (!this.data || this.data.length === 0) return;
    const e = this.getAttribute("lang-original") || "en", r = this.getAttribute("lang-translation") || "th", o = this.shadowRoot.querySelector(".lang-btn-original"), t = this.shadowRoot.querySelector(".lang-btn-translation");
    if (o && (o.textContent = this.getLanguageName(e)), t && (t.textContent = this.getLanguageName(r)), this.displayAllLines(), this.startUnscrambleActivity(!1), this.startMemoryGame(!1), this.updateProgress(), this._updateVoiceList(), !this._shouldShowAudioControls()) {
      const s = this.shadowRoot.querySelector("#autoplay-container");
      s && (s.style.display = "none");
    }
  }
}
customElements.get("tj-reader") || customElements.define("tj-reader", j);
customElements.get("lbl-reader") || customElements.define("lbl-reader", class extends j {
});
