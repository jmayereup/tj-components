import { c as R } from "./chunks/tj-config-JtFGQ6Kt.js";
import { a as z, b as P, s as T, g as I } from "./chunks/audio-utils-BwH2sOvH.js";
const M = ':host{display:block;font-family:inherit;max-width:80em;margin:0 auto;color:#1e293b;background-color:#f8fafc;position:relative;--tj-primary-color: #2563eb;--tj-primary-hover: #1d4ed8;--tj-primary-light: #eff6ff;--tj-primary-border: #bfdbfe;--tj-success-color: #16a34a;--tj-success-light: #f0fdf4;--tj-success-border: #bbf7d0;--tj-danger-color: #dc2626;--tj-danger-light: #fef2f2;--tj-danger-border: #fecaca;--tj-text-main: #1e293b;--tj-text-muted: #64748b;--tj-text-light: #94a3b8;--tj-bg-card: #ffffff;--tj-bg-alt: #f1f5f9;--tj-border-main: #e2e8f0;--tj-border-light: #f1f5f9;--tj-border-dark: #cbd5e1}.sticky-bar{position:sticky;top:0;background:#ffffffeb;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);padding:.75em 1em;border-radius:0;box-shadow:0 1px 0 var(--tj-border-main),0 4px 16px #0000000a;z-index:100;margin:.25rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--tj-border-main)}.playback-controls{display:flex;gap:1em;align-items:center}.autoplay-toggle-container{display:flex;align-items:center;gap:.8em;padding:.4em .8em;background:#f8fafc80;border-radius:2em;border:1px solid #e2e8f0;font-size:.85em;font-weight:600;color:#475569;-webkit-user-select:none;user-select:none}.switch{position:relative;display:inline-block;width:32px;height:18px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#cbd5e1;transition:.4s;border-radius:18px}.slider:before{position:absolute;content:"";height:14px;width:14px;left:2px;bottom:2px;background-color:#fff;transition:.4s;border-radius:50%}input:checked+.slider{background-color:#2563eb}input:checked+.slider:before{transform:translate(14px)}.control-btn{display:flex;align-items:center;gap:.5em;padding:.5em 1em;font-size:.9em;font-weight:600;border-radius:.6em;background:#f8fafc;border:1px solid #e2e8f0;color:#475569;cursor:pointer;transition:all .2s}.control-btn:hover{background:#f1f5f9;border-color:#cbd5e1;color:#2563eb}#play-pause-btn{background:#2563eb;color:#fff;border-color:#1d4ed8}#play-pause-btn:hover{background:#1d4ed8}#stop-btn{display:none}.progress-text{font-weight:700;color:#2563eb;font-size:1.1em;white-space:nowrap}.lang-selector-container{margin:2rem;text-align:center}.lang-selector-label{font-weight:700;color:#64748b;margin-bottom:.75em;font-size:1.5rem}.lang-selector-buttons{display:flex;justify-content:center;gap:1em;flex-wrap:wrap}.lang-btn{background:#fff;border:2px solid #e2e8f0;color:#475569;padding:.75em 1.5em;border-radius:9999px;font-size:1em;font-weight:600;cursor:pointer;transition:all .2s}.lang-btn:hover:not(.active){border-color:#2563eb;color:#2563eb;transform:none}.lang-btn.active{background:#2563eb;border-color:#2563eb;color:#fff}.story-container{display:flex;flex-direction:column;gap:1rem;padding:0 .5rem;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#cbd5e1 transparent}.story-container::-webkit-scrollbar{width:6px}.story-container::-webkit-scrollbar-thumb{background-color:#cbd5e1;border-radius:3px}.card{background:var(--tj-bg-card);border-radius:1.2em;padding:1rem .75rem;box-shadow:0 2px 8px #0000000f;text-align:left;transition:box-shadow .3s ease,background .3s ease;border:none;opacity:1}.card:hover{box-shadow:0 4px 16px #00000017}.card.completed{background:var(--tj-success-light);box-shadow:0 2px 12px #16a34a1a}.card.failed{background:var(--tj-danger-light);box-shadow:0 2px 12px #dc26261a}.card.playing{background:var(--tj-primary-light);box-shadow:0 4px 20px #2563eb24}.card-header{display:flex;align-items:flex-start;justify-content:center;gap:1em;margin-bottom:.5em}.original-text{font-size:1.15em;line-height:1.65;font-weight:500;flex:1;color:var(--tj-text-main)}.tts-word{cursor:pointer;transition:background .2s;border-radius:.2em;padding:0 .1em}.tts-word:hover{background:#f1f5f9}.voice-btn{background:#eef2ff;border:1px solid #c7d2fe;padding:0;font-size:1.1em;border-radius:50%;width:2.2em;height:2.2em;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);flex-shrink:0;color:var(--tj-primary-color);box-shadow:0 1px 3px #00000014}.voice-btn:hover{background:#c7d2fe;color:#000;transform:scale(1.1);box-shadow:0 2px 6px #00000026}.card-btn-group{display:flex;gap:.6em;align-items:center;padding:.4em;background:#fdfdfd;border-radius:2em;border:1px solid #f1f5f9}.record-btn,.play-recorded-btn{background:#f8fafc;border:1px solid #e2e8f0;padding:0;border-radius:50%;width:2.2em;height:2.2em;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#1a202c;transition:all .2s cubic-bezier(.4,0,.2,1);flex-shrink:0}.record-btn:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca;transform:scale(1.1)}.record-btn.recording{background:#ef4444;color:#fff;border-color:#dc2626;animation:pulse 1.5s infinite}.play-recorded-btn{background:#f0fdf4;color:#15803d;border-color:#bbf7d0}.play-recorded-btn.playing{background:#15803d;color:#fff;border-color:#14532d;animation:pulse-green 1.5s infinite}.play-recorded-btn:hover{background:#bbf7d0;color:#14532d;transform:scale(1.1)}@keyframes pulse-green{0%{transform:scale(1);box-shadow:0 0 #15803db3}70%{transform:scale(1.05);box-shadow:0 0 0 10px #15803d00}to{transform:scale(1);box-shadow:0 0 #15803d00}}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #ef4444b3}70%{transform:scale(1.05);box-shadow:0 0 0 10px #ef444400}to{transform:scale(1);box-shadow:0 0 #ef444400}}.full-translation{font-size:1em;color:var(--tj-text-muted);margin-bottom:.75em;font-style:italic;line-height:1.5}.highlight{color:#2563eb;font-weight:700;border-bottom:3px solid #bfdbfe;padding:0 .1em;transition:all .3s ease}.card.completed .highlight{color:#16a34a;border-bottom-color:#bbf7d0}.card.failed .highlight{color:#dc2626;border-bottom-color:#fecaca}.translation-options{display:flex;flex-wrap:wrap;gap:.8em;justify-content:center}button{font-family:inherit;font-size:1em;padding:.6em 1.2em;cursor:pointer;background:#fff;border:1px solid var(--tj-border-main);border-radius:.7em;transition:all .2s cubic-bezier(.4,0,.2,1);outline:none;color:var(--tj-text-muted)}button:hover:not(:disabled){background:var(--tj-bg-alt);border-color:var(--tj-border-dark);transform:translateY(-1px)}button.success{background:#22c55e!important;color:#fff;border-color:#16a34a;animation:bounce .4s ease}button.error{background:#ef4444!important;color:#fff;border-color:#dc2626;animation:shake .4s ease}.finish-container{padding:2em 0 5em;text-align:center}.finish-btn{background:#2563eb;color:#fff;border:none;padding:1.2em 2.5em;font-size:1.1em;font-weight:700;border-radius:.8em;cursor:pointer;box-shadow:0 4px 12px #2563eb26;transition:all .3s ease}.finish-btn:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 15px #2563eb33}.form-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#fffffff2;display:none;flex-direction:column;align-items:center;justify-content:center;border-radius:1.2em;z-index:20;animation:fadeIn .3s ease}.form-container{width:80%;max-width:300px;text-align:center}input{width:100%;padding:1em;margin-bottom:1em;border:1px solid #e2e8f0;border-radius:.5em;font-size:1em;box-sizing:border-box}.generate-btn,.try-again-btn{background:#2563eb;color:#fff;border:none;width:100%;padding:1em;font-weight:600;border-radius:.5em}.report-card{background:#fff;padding:2em;border-radius:1em;box-shadow:0 4px 20px #0000001a;text-align:left}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes bounce{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.browser-prompt-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ae6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;flex-direction:column;align-items:center;justify-content:center;z-index:1000;color:#fff;padding:2em;text-align:center}.browser-prompt-card{background:#fff;color:#1e293b;padding:2.5em;border-radius:1.5em;max-width:400px;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.browser-prompt-card h2{margin-top:0;color:#1e293b;font-size:1.5em}.browser-prompt-card p{color:#64748b;line-height:1.6;margin-bottom:2em}.browser-action-btn{display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:1em 2em;border-radius:.75em;font-weight:600;transition:background .2s;cursor:pointer;border:none;width:100%;box-sizing:border-box}.browser-action-btn:hover{background:#1d4ed8}.close-prompt{margin-top:1.5em;background:transparent;border:none;color:#94a3b8;cursor:pointer;font-size:.9em;text-decoration:underline}.activities-wrapper{display:flex;flex-direction:column;gap:3em;padding-bottom:2rem}.section-divider{border:none;border-top:2px dashed #e2e8f0;margin:2em 0;position:relative}.section-divider:after{content:attr(data-label);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:0 1em;color:#94a3b8;font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.1em}.form-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172acc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:1000;animation:fadeIn .3s ease}.form-container{background:#fff;width:90%;max-width:450px;padding:2.5em;border-radius:1.5em;box-shadow:0 25px 50px -12px #00000040;text-align:center;max-height:90vh;overflow-y:auto}.report-area{text-align:left}.rc-header{text-align:center;margin-bottom:24px}.rc-icon{font-size:2.5em;margin-bottom:8px}.rc-title{font-size:1.4em;font-weight:700;color:var(--tj-text-main);margin-bottom:4px}.rc-subtitle{color:var(--tj-text-muted);font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.rc-activity{display:inline-block;background:var(--tj-bg-alt);padding:4px 12px;border-radius:20px;font-size:.85em;font-weight:600;color:var(--tj-text-main);margin-top:12px}.rc-student{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:12px;padding:16px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center}.rc-label{color:var(--tj-text-muted);font-size:.9em;font-weight:600}.rc-value{font-weight:700;color:var(--tj-text-main);text-align:right}.rc-number{color:var(--tj-text-muted);font-weight:500;font-size:.9em;display:block}.rc-score-row{display:flex;align-items:center;gap:20px;margin-bottom:16px}.rc-score-circle{width:80px;height:80px;border-radius:50%;background:var(--tj-primary-light);color:var(--tj-primary-color);display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px solid var(--tj-primary-color);flex-shrink:0}.rc-score-val{font-size:1.5em;font-weight:800;line-height:1}.rc-score-pct{font-size:.85em;font-weight:700;margin-top:2px}.rc-score-label{font-size:1.1em;font-weight:700;color:var(--tj-text-main)}.rc-bar-track{height:8px;background:var(--tj-bg-alt);border-radius:4px;overflow:hidden}.rc-bar-fill{height:100%;background:var(--tj-primary-color);border-radius:4px}.rc-details{background:var(--tj-bg-alt);padding:16px;border-radius:12px;margin-bottom:24px;font-size:.9em}.rc-detail-row{display:flex;justify-content:space-between;margin-bottom:8px}.rc-detail-row:last-child{margin-bottom:0}.rc-detail-row span:first-child{color:var(--tj-text-muted);font-weight:500}.rc-detail-row span:last-child{font-weight:600;color:var(--tj-text-main)}.rc-close-btn:hover{background:var(--tj-bg-alt)}.rc-submission-box{margin-top:20px;padding:20px;background:var(--tj-bg-alt);border-radius:12px;border:1px solid var(--tj-border-main);text-align:left;box-shadow:inset 0 2px 4px #00000005}.rc-submission-header{margin:0 0 12px;font-size:.85em;color:var(--tj-text-muted);font-weight:700;text-transform:uppercase;letter-spacing:.05em}.rc-teacher-code-input{width:100%;box-sizing:border-box;padding:12px 16px;border-radius:10px;font-size:1em;margin-bottom:8px;background:var(--tj-bg-card);transition:all .2s ease;outline:none;font-family:inherit;color:var(--tj-text-main)}.rc-teacher-code-input:focus{border-color:var(--tj-primary-color);box-shadow:0 0 0 4px var(--tj-primary-light)}.rc-teacher-code-input::placeholder{color:var(--tj-text-light)}.rc-help-text{margin:4px 0 0;font-size:.85em;color:var(--tj-text-muted);line-height:1.4}.rc-submit-btn{width:100%;padding:16px;background:var(--tj-primary-color);color:#fff;border:none;border-radius:12px;font-size:1.1em;font-weight:700;cursor:pointer;transition:all .2s ease;box-shadow:0 4px 12px #2563eb40;margin-bottom:8px}.rc-submit-btn:hover:not(:disabled){background:var(--tj-primary-hover);transform:translateY(-1px);box-shadow:0 6px 16px #2563eb59}.rc-submit-btn:active:not(:disabled){transform:translateY(0)}.rc-submit-btn:disabled{opacity:.5;cursor:default;background:var(--tj-text-light);box-shadow:none}.rc-secondary-btn{width:100%;padding:14px;background:var(--tj-bg-alt);color:var(--tj-text-main);border:1.5px solid var(--tj-border-main);border-radius:12px;font-size:1em;font-weight:600;cursor:pointer;transition:all .2s ease}.rc-secondary-btn:hover{background:var(--tj-border-main);border-color:var(--tj-border-dark)}.reset-all-btn{background:#ef4444;color:#fff;border:none;width:100%;padding:1em;font-weight:600;border-radius:.5em;cursor:pointer;transition:background .2s;margin-top:1em;font-size:.85em;opacity:.9}.reset-all-btn:hover{background:#dc2626;opacity:1}.unscramble-card{max-width:600px;margin-left:auto;margin-right:auto;width:100%;box-sizing:border-box;background:var(--tj-bg-card);border-radius:1.2em;padding:1.25em;box-shadow:0 2px 8px #0000000f}.unscramble-card h3{margin-top:0;color:#2563eb}.unscramble-result{min-height:3em;border-bottom:2px dashed #e2e8f0;margin-bottom:1em;padding:.5em;display:flex;flex-wrap:wrap;gap:.5em;justify-content:center}.unscramble-pool{display:flex;flex-wrap:wrap;gap:.5em;justify-content:center;margin-bottom:2em}.unscramble-actions{display:flex;gap:1em;font-size:.9em;padding:.5em;justify-content:center;flex-wrap:wrap}.unscramble-result button{background:#f8fafc;border-color:#e2e8f0;color:#475569}.unscramble-pool button{background:#f8fafc}.memory-game-header{text-align:center;margin-bottom:2em}.memory-game-header h3{color:#2563eb;margin:0}.memory-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1em;width:100%;max-width:500px;margin:0 auto 2em;padding:1em;box-sizing:border-box}.memory-card{aspect-ratio:4/5;perspective:1000px;cursor:pointer;min-height:100px}.memory-card-inner{position:relative;width:100%;height:100%;text-align:center;transition:transform .6s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d;border-radius:.8em;box-shadow:0 4px 8px #0000001a}.memory-card.flipped .memory-card-inner{transform:rotateY(180deg)}.memory-card-front,.memory-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;border-radius:.8em;padding:.5em;font-weight:600;font-size:.9em;box-sizing:border-box;border:1px solid #e2e8f0}.memory-card-front{background-color:#2563eb;color:#fff;font-size:2em;box-shadow:inset 0 0 20px #fff3}.memory-card-back{background-color:#fff;color:#1e293b;transform:rotateY(180deg);word-break:break-word;font-size:1.1em;padding:.8em;line-height:1.2}.memory-card.matched .memory-card-inner{box-shadow:0 0 15px #22c55e66;border:2px solid #22c55e}.memory-game-actions{display:flex;gap:1em;justify-content:center;margin-top:2em}.recordings-section{margin-top:20px;text-align:left}.recordings-section h4{display:flex;align-items:center;gap:8px;margin:0 0 12px;color:var(--tj-text-main);font-size:1em;border-bottom:1px solid var(--tj-border-main);padding-bottom:.5em}.recordings-list{display:flex;flex-direction:column;gap:8px}.recording-item{display:flex;align-items:center;gap:12px;padding:8px;background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);border-radius:8px;transition:background .2s}.recording-item:hover{background:var(--tj-border-light)}.recording-play-btn{width:34px;height:34px;padding:0;display:flex;align-items:center;justify-content:center;background:#eef2ff;border:1px solid #c7d2fe;border-radius:50%;cursor:pointer;color:#2563eb;transition:all .2s;box-shadow:0 1px 3px #0000001a}.recording-play-btn:hover{background:#c7d2fe;transform:scale(1.1)}.recording-play-btn.playing{background:#2563eb;color:#fff}.recording-text{font-size:.9em;color:var(--tj-text-muted);line-height:1.4}@media (max-width: 600px){.sticky-bar{padding:.4rem .6rem;gap:.4em;flex-wrap:wrap}.playback-controls{gap:.35em;flex-wrap:wrap;flex:1;min-width:0}.control-btn{padding:.4em .6em}.control-btn span{display:none}.autoplay-toggle-container{padding:.3em .5em;font-size:.8em;gap:.4em}.tj-speed-control{padding:.25em .4em .25em .6em;height:2.2em;font-size:.85em}.tj-speed-control:after{right:.5em}.tj-speed-select{padding-right:.9em}.progress-text{font-size:.9em;white-space:nowrap;margin-left:auto}}@media (min-width: 601px){.memory-grid{grid-template-columns:repeat(4,1fr)}}.voice-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172ab3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;z-index:1000;animation:fadeIn .2s ease}.voice-card{background:#fff;width:90%;max-width:400px;max-height:80vh;border-radius:1.2em;display:flex;flex-direction:column;box-shadow:0 20px 25px -5px #0003}.voice-card-header{padding:1.25em;border-bottom:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:center}.voice-card-header h3{margin:0;font-size:1.1em;color:#1e293b}.close-voice-btn{background:none;border:none;padding:.5em;color:#94a3b8;cursor:pointer}.voice-list{padding:1em;overflow-y:auto;display:flex;flex-direction:column;gap:.5em}.voice-option-btn{width:100%;text-align:left!important;padding:.8em 1em!important;border:1px solid #f1f5f9!important;background:#f8fafc!important;border-radius:.6em!important;font-size:.9em!important;display:flex;justify-content:space-between;align-items:center;transition:all .2s;color:#475569!important}.voice-option-btn:hover{background:#f1f5f9!important;border-color:#e2e8f0!important}.voice-option-btn.active{background:#eff6ff!important;border-color:#3b82f6!important;color:#2563eb!important;font-weight:600!important}.voice-option-btn .badge{font-size:.75em;background:#dcfce7;color:#166534;padding:.2em .5em;border-radius:1em}.tj-speed-control{display:inline-flex;align-items:center;gap:.25em;background:var(--tj-bg-alt);border:1px solid var(--tj-border-main);border-radius:.6em;padding:.25em .5em .25em .75em;height:2.5em;transition:all .2s;color:#475569;position:relative;cursor:pointer}.tj-speed-control:hover{background:var(--tj-border-light);border-color:var(--tj-border-dark);color:var(--tj-primary-color)}.tj-speed-icon{flex-shrink:0;opacity:.85}.tj-speed-select{background:transparent;border:none;font-family:inherit;font-size:.9em;font-weight:700;color:inherit;cursor:pointer;outline:none;padding:0 1.2em 0 .2em;appearance:none;-webkit-appearance:none;-moz-appearance:none}.tj-speed-control:after{content:"";position:absolute;right:.8em;top:50%;transform:translateY(-50%);border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid currentColor;pointer-events:none}', A = `<div class="sticky-bar">
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
    <div class="tj-speed-control" title="Playback Speed">
      <svg class="tj-speed-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 12 6a7.89 7.89 0 0 1 6 2.73l1.42-1.42A9.91 9.91 0 0 0 12 4a10 10 0 0 0-7.68 16.4h15.36A10 10 0 0 0 20.38 8.57zM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3-6h-2v4h2V6z"/>
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
    var t;
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `
      <style>${M}</style>
      ${A}
    `, this.data = [], this.studentInfo = { nickname: "", number: "", homeroom: "", teacherCode: "" }, this.submissionUrl = (t = R) == null ? void 0 : t.submissionUrl, this.isSubmitting = !1, this.score = 0, this.answeredCount = 0, this.isPlayingAll = !1, this.playbackIndex = 0, this.isPaused = !1, this.playbackUtterance = null;
    const e = parseFloat(localStorage.getItem("tj-reader-speed"));
    this.playbackSpeed = isNaN(e) ? 0.7 : e, this.isAutoplay = !0, this.unscrambleData = [], this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], this.memoryGameData = [], this.flippedCards = [], this.matchedPairsCount = 0, this.matchingGamesCompleted = 0, this.isCheckingMatch = !1, this.isSwapped = !1, this.selectedVoiceName = null, this.recordedBlobs = /* @__PURE__ */ new Map(), this.recordedSentences = /* @__PURE__ */ new Set(), this.completedIndices = /* @__PURE__ */ new Set(), this.unscrambleCompleted = !1, this.memoryCompleted = !1, this.unscrambleTotal = 0, this.memoryTotal = 0, this.isRecordingLine = null, this.mediaRecorder = null, this.recordingStartTime = 0, this.isPlayingRecording = null, this.shadowRoot.querySelector(".generate-btn").onclick = () => this.generateReport(), this.shadowRoot.querySelector("#play-pause-btn").onclick = () => this.toggleFullPlayback(), this.shadowRoot.querySelector("#stop-btn").onclick = () => this.stopFullPlayback(), this.shadowRoot.querySelector("#voice-btn").onclick = () => this._showVoiceOverlay(), this.shadowRoot.querySelector(".close-voice-btn").onclick = () => this._hideVoiceOverlay(), this.shadowRoot.querySelector(".voice-overlay").onclick = (i) => {
      i.target.classList.contains("voice-overlay") && this._hideVoiceOverlay();
    }, this.shadowRoot.querySelector(".lang-btn-original").onclick = () => {
      this.isSwapped && this.swapLanguages();
    }, this.shadowRoot.querySelector(".lang-btn-translation").onclick = () => {
      this.isSwapped || this.swapLanguages();
    };
    const r = this.shadowRoot.querySelector("#autoplay-checkbox");
    r.onchange = (i) => {
      this.isAutoplay = i.target.checked;
    };
    const o = this.shadowRoot.querySelector("#speed-select");
    o && (o.value = this.playbackSpeed.toString(), o.onchange = (i) => {
      this.playbackSpeed = parseFloat(i.target.value), localStorage.setItem("tj-reader-speed", i.target.value);
    });
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
        const r = e.replace(/"((?:\\.|[^"\\])*)"/gs, (t, i) => '"' + i.replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'), o = JSON.parse(r);
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
      const i = r.original.split(/\s+/), n = r.highlightIndex, s = r.highlightIndexEnd !== void 0 ? r.highlightIndexEnd : n, c = i.slice(n, s + 1).join(" ").replace(/[.,!?;:]/g, "");
      return {
        ...r,
        highlightIndexEnd: s,
        shuffledOptions: o,
        newCorrectIndex: o.indexOf(t),
        originalWord: c,
        translationWord: t
      };
    }), this.matchingGamesCompleted = 0, this.render();
  }
  displayAllLines() {
    const e = this.shadowRoot.querySelector(".story-container");
    e.innerHTML = "", this.score = this.completedIndices.size, this.answeredCount = this.completedIndices.size;
    const r = this.getAttribute("lang-original") || "en", o = this.getAttribute("lang-translation") || "th";
    this.data.forEach((t, i) => {
      const n = document.createElement("div");
      n.classList.add("card"), n.dataset.index = i;
      const s = document.createElement("div");
      s.classList.add("card-header");
      const c = document.createElement("div");
      if (c.classList.add("original-text"), r.split(/[-_]/)[0].toLowerCase() === "th" && typeof Intl < "u" && Intl.Segmenter) {
        const p = new Intl.Segmenter("th", { granularity: "word" }).segment(t.original);
        for (const l of p)
          if (l.isWordLike) {
            const u = document.createElement("span");
            u.textContent = l.segment, u.classList.add("tts-word"), u.onclick = (g) => {
              g.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(l.segment, r);
            }, c.appendChild(u);
          } else
            c.appendChild(document.createTextNode(l.segment));
      } else
        t.original.split(" ").forEach((h, p) => {
          const l = document.createElement("span");
          l.textContent = h + " ", l.classList.add("tts-word"), !this.isSwapped && p >= t.highlightIndex && p <= t.highlightIndexEnd && l.classList.add("highlight"), l.onclick = (u) => {
            u.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(h.replace(/[.,!?;:]/g, ""), r);
          }, c.appendChild(l);
        });
      s.appendChild(c), n.appendChild(s), this.renderLineButtons(i, n);
      const d = document.createElement("div");
      if (d.classList.add("full-translation"), o.split(/[-_]/)[0].toLowerCase() === "th" && typeof Intl < "u" && Intl.Segmenter) {
        const p = new Intl.Segmenter("th", { granularity: "word" }).segment(t.fullTranslation);
        for (const l of p)
          if (l.isWordLike) {
            const u = document.createElement("span");
            u.textContent = l.segment, u.classList.add("tts-word"), u.onclick = (g) => {
              g.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(l.segment, o);
            }, d.appendChild(u);
          } else
            d.appendChild(document.createTextNode(l.segment));
      } else
        t.fullTranslation.split(" ").forEach((h, p) => {
          const l = document.createElement("span");
          l.textContent = h + " ", l.classList.add("tts-word"), this.isSwapped && p >= t.highlightIndex && p <= t.highlightIndexEnd && l.classList.add("highlight"), l.onclick = (u) => {
            u.stopPropagation(), this.isPlayingAll && this.stopFullPlayback(), this._speak(h.replace(/[.,!?;:]/g, ""), o);
          }, d.appendChild(l);
        });
      const m = document.createElement("div");
      m.classList.add("translation-options");
      const y = this.completedIndices.has(i);
      y && n.classList.add("completed", "answered"), t.shuffledOptions.forEach((h, p) => {
        const l = document.createElement("button");
        l.textContent = h, l.addEventListener("click", () => this.handleSelection(i, p, t.newCorrectIndex, l, n)), y && (l.disabled = !0, p !== t.newCorrectIndex ? l.style.opacity = "0.5" : l.classList.add("success")), m.appendChild(l);
      }), n.appendChild(d), n.appendChild(m), e.appendChild(n);
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
    const t = this.getAttribute("lang-original") || "en", i = t.split(/[-_]/)[0].toLowerCase();
    let n = e.filter((a) => a.lang.toLowerCase() === t.toLowerCase());
    n.length === 0 && (n = e.filter((a) => a.lang.split(/[-_]/)[0].toLowerCase() === i));
    const s = this.shadowRoot.querySelector(".tj-speed-control");
    if (n.length === 0 || !this._shouldShowAudioControls()) {
      o.style.display = "none", s && (s.style.display = "none");
      return;
    }
    o.style.display = "flex", s && (s.style.display = "inline-flex"), r.innerHTML = "";
    const c = this._getBestVoice(t);
    !this.selectedVoiceName && c && (this.selectedVoiceName = c.name), n.sort((a, d) => a.name.localeCompare(d.name)), n.forEach((a) => {
      const d = document.createElement("button");
      d.classList.add("voice-option-btn"), this.selectedVoiceName === a.name && d.classList.add("active");
      const b = document.createElement("span");
      if (b.textContent = a.name, d.appendChild(b), c && a.name === c.name) {
        const m = document.createElement("span");
        m.classList.add("badge"), m.textContent = "Best", d.appendChild(m);
      }
      d.onclick = () => {
        this.selectedVoiceName = a.name, this._updateVoiceList(), this._hideVoiceOverlay();
      }, r.appendChild(d);
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
    let i = null;
    const n = this.getAttribute("lang-original") || "en", s = r.split(/[-_]/)[0].toLowerCase(), c = n.split(/[-_]/)[0].toLowerCase();
    return this.selectedVoiceName && s === c && (i = window.speechSynthesis.getVoices().find((d) => d.name === this.selectedVoiceName)), i || (i = this._getBestVoice(r)), t.lang = r, i && (t.voice = i), t.rate = this.playbackSpeed, o && (t.onend = o), window.speechSynthesis.speak(t), t;
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
    const i = document.createElement("button");
    i.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', i.classList.add("voice-btn"), i.title = "Play TTS", i.onclick = () => {
      this.isPlayingAll && this.stopFullPlayback(), this.playLine(e, !1);
    }, t.appendChild(i);
    const n = document.createElement("button");
    if (n.classList.add("record-btn"), this.isRecordingLine === e ? (n.classList.add("recording"), n.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="6" y="6" width="12" height="12"/></svg>', n.onclick = () => this.stopRecording(), n.title = "Stop Recording") : (n.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>', n.onclick = () => this.startRecording(e), n.title = "Record Voice"), t.appendChild(n), this.recordedBlobs.has(e) && this.isRecordingLine !== e) {
      const s = document.createElement("button");
      this.isPlayingRecording === e ? (s.classList.add("play-recorded-btn", "playing"), s.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>') : (s.classList.add("play-recorded-btn"), s.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'), s.title = "Play Recording", s.onclick = () => this.playRecordedAudio(e), t.appendChild(s);
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
    return I();
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
  handleSelection(e, r, o, t, i) {
    if (i.classList.contains("answered")) return;
    if (r === o) {
      i.classList.add("answered"), this.answeredCount++, this.completedIndices.add(e), i.dataset.hadError || this.score++, t.classList.add("success"), i.classList.add("completed"), i.classList.remove("failed"), i.querySelectorAll(".translation-options button").forEach((a) => {
        a.disabled = !0, a !== t && (a.style.opacity = "0.5");
      }), this.updateProgress();
      const c = i.nextElementSibling;
      c && !c.classList.contains("finish-container") ? setTimeout(() => {
        c.scrollIntoView({ behavior: "smooth", block: "center" }), this.isAutoplay && this.playLine(e + 1, !1);
      }, 600) : setTimeout(() => {
        this.clearPlaybackHighlights();
        const a = this.shadowRoot.querySelector(".finish-btn");
        a && a.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 600);
    } else
      t.classList.add("error"), t.disabled = !0, i.classList.add("failed"), i.dataset.hadError = "true";
  }
  updateProgress() {
    const e = this.shadowRoot.querySelector(".progress-text");
    e && (e.textContent = `${this.score} / ${this.data.length}`);
  }
  startUnscrambleActivity(e = !0) {
    this.shadowRoot.querySelector("#scramble-section").style.display = "block", this.unscrambleData = [], this.currentUnscrambleIndex = 0, this.unscrambleScore = 0, this.userUnscrambledWords = [], this.unscrambleUsedSentences || (this.unscrambleUsedSentences = /* @__PURE__ */ new Set());
    let r = String.keys ? Object.keys(this.data) : Array.from(this.data.keys());
    r = r.map((n) => parseInt(n));
    const o = r.filter((n) => !this.unscrambleUsedSentences.has(n));
    let t = [];
    if (o.length >= 5)
      t = o.sort(() => 0.5 - Math.random()).slice(0, 5);
    else {
      t = [...o];
      const n = 5 - t.length, s = r.filter((c) => !o.includes(c)).sort(() => 0.5 - Math.random());
      t = t.concat(s.slice(0, n));
    }
    if (t.forEach((n) => this.unscrambleUsedSentences.add(n)), this.unscrambleUsedSentences.size >= this.data.length && (this.unscrambleUsedSentences.clear(), t.forEach((n) => this.unscrambleUsedSentences.add(n))), this.unscrambleData = t.map((n) => {
      const s = this.data[n], c = s.original.split(/\s+/).filter((d) => d.length > 0), a = [...c].sort(() => 0.5 - Math.random());
      return {
        ...s,
        correctWords: c,
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
    const i = document.createElement("h3");
    i.innerHTML = `Unscramble the Sentence <span style="font-size: 0.8em; color: #64748b; font-weight: normal; margin-left: 0.5em; white-space: nowrap;">(${this.currentUnscrambleIndex + 1} / ${this.unscrambleTotal})</span>`, t.appendChild(i);
    const n = this.getAttribute("lang-original") || "en", s = document.createElement("button");
    s.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', s.classList.add("voice-btn"), s.style.margin = "0 auto 1em auto", s.onclick = () => {
      this._speak(o.original, n);
    }, t.appendChild(s);
    const c = document.createElement("div");
    c.classList.add("full-translation"), c.style.fontSize = "1.2em", c.textContent = o.fullTranslation, c.setAttribute("lang", this.getAttribute("lang-translation") || "th"), t.appendChild(c);
    const a = document.createElement("div");
    a.classList.add("unscramble-result"), a.setAttribute("lang", n), t.appendChild(a);
    const d = document.createElement("div");
    d.classList.add("unscramble-pool"), d.setAttribute("lang", n), t.appendChild(d);
    const b = () => {
      a.innerHTML = "", this.userUnscrambledWords.forEach((l, u) => {
        const g = document.createElement("button");
        g.textContent = l, g.onclick = () => {
          this.userUnscrambledWords.splice(u, 1), b();
        }, a.appendChild(g);
      }), d.innerHTML = "", o.shuffledWords.forEach((l, u) => {
        const g = this.userUnscrambledWords.filter((x) => x === l).length, f = o.shuffledWords.filter((x) => x === l).length;
        if (g < f) {
          const x = document.createElement("button");
          x.textContent = l, x.onclick = () => {
            this.userUnscrambledWords.push(l), b();
          }, d.appendChild(x);
        }
      });
    };
    b();
    const m = document.createElement("div");
    m.classList.add("unscramble-actions");
    const y = document.createElement("button");
    y.textContent = "Skip", y.style.opacity = "0.7", y.onclick = () => {
      this.currentUnscrambleIndex++, this.userUnscrambledWords = [], this.currentUnscrambleIndex < this.unscrambleData.length ? (this.renderUnscrambleChallenge(), this.updateProgress()) : this.renderUnscrambleCompletion();
    };
    const h = document.createElement("button");
    h.textContent = "Check", h.classList.add("finish-btn"), h.style.padding = "0.8em 2em", h.onclick = () => {
      this.userUnscrambledWords.join(" ") === o.correctWords.join(" ") ? (this.unscrambleScore++, h.textContent = "Correct! Next", h.classList.add("success"), h.onclick = () => {
        this.currentUnscrambleIndex++, this.userUnscrambledWords = [], this.currentUnscrambleIndex < this.unscrambleData.length ? (this.renderUnscrambleChallenge(), this.updateProgress()) : this.renderUnscrambleCompletion();
      }) : (h.classList.add("error"), setTimeout(() => h.classList.remove("error"), 500));
    };
    const p = document.createElement("button");
    p.textContent = "Reset", p.onclick = () => {
      this.userUnscrambledWords = [], b();
    }, m.appendChild(p), m.appendChild(y), m.appendChild(h), t.appendChild(m), r.appendChild(t), e && t.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  startMemoryGame(e = !0) {
    this.shadowRoot.querySelector("#memory-section").style.display = "block", this.matchingGamesCompleted++, this.matchedPairsCount = 0, this.flippedCards = [], this.isCheckingMatch = !1;
    const r = this.data.map((n) => ({
      original: n.originalWord,
      translation: n.translationWord
    })), o = [], t = /* @__PURE__ */ new Set();
    for (; o.length < 6 && t.size < r.length; ) {
      const n = Math.floor(Math.random() * r.length);
      t.has(n) || (o.push(r[n]), t.add(n));
    }
    const i = [];
    o.forEach((n, s) => {
      i.push({ id: s, type: "original", text: n.original, lang: this.getAttribute("lang-original") || "en" }), i.push({ id: s, type: "translation", text: n.translation, lang: this.getAttribute("lang-translation") || "th" });
    }), this.memoryGameData = i.sort(() => 0.5 - Math.random()), this.memoryTotal = this.memoryGameData.length / 2, this.renderMemoryGameUI(), this.updateProgress();
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
    o.classList.add("memory-grid"), this.memoryGameData.forEach((s, c) => {
      const a = document.createElement("div");
      a.classList.add("memory-card"), a.dataset.index = c, a.innerHTML = `
        <div class="memory-card-inner">
          <div class="memory-card-front">?</div>
          <div class="memory-card-back" lang="${s.lang}">${s.text}</div>
        </div>
      `, a.onclick = () => this.handleMemoryCardFlip(a, s), o.appendChild(a);
    }), e.appendChild(o);
    const t = document.createElement("div");
    t.classList.add("memory-game-actions");
    const i = document.createElement("button");
    i.textContent = "Play Again (New Words)", i.onclick = () => this.startMemoryGame(), t.appendChild(i), e.appendChild(t);
    const n = this.shadowRoot.querySelector(".finish-container");
    n.style.display = "block", n.querySelector(".finish-btn").onclick = () => this.showFinalForm();
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
    const t = this.getAttribute("story-title") || "Story Practice", i = (/* @__PURE__ */ new Date()).toLocaleString(), n = this.data.length > 0 ? this.score / this.data.length : 0;
    this.data.length > 0 && this.recordedSentences.size / this.data.length;
    const s = this.unscrambleData.length || this.unscrambleTotal, c = s > 0 ? this.unscrambleScore / s : 0, a = this.memoryGameData.length / 2 || this.memoryTotal, d = a > 0 ? this.matchedPairsCount / a : 0;
    let b = 85, m = 10, y = 5;
    this.unscrambleData.length === 0 && (b += m, m = 0);
    const h = n * b + c * m + d * y, p = this.shadowRoot.querySelector(".report-area"), l = h >= 80 ? "🏆" : h >= 50 ? "⭐" : "💪", u = h >= 80 ? "Excellent!" : h >= 50 ? "Good effort!" : "Keep practicing!";
    if (p.innerHTML = `
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
              <div class="rc-score-val">${Math.round(h)}%</div>
              <div class="rc-score-pct">Overall</div>
          </div>
          <div class="rc-score-label">${l} ${u}</div>
      </div>
      <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${h}%"></div></div>
      <div class="rc-details">
          <div class="rc-detail-row"><span>Translation Score</span><span>${this.score} / ${this.data.length}</span></div>
          <div class="rc-detail-row"><span>Sentences Recorded</span><span>${this.recordedSentences.size} / ${this.data.length}</span></div>
          ${s > 0 ? `<div class="rc-detail-row"><span>Unscramble Score</span><span>${this.unscrambleScore} / ${s}</span></div>` : ""}
          <div class="rc-detail-row"><span>Matching Pairs</span><span>${this.matchedPairsCount} / ${a}</span></div>
          <div class="rc-detail-row"><span>Completed On</span><span>${i}</span></div>
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
      const f = document.createElement("div");
      f.classList.add("recordings-section");
      const x = document.createElement("h4");
      x.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="#2563eb"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg> Student Recordings', f.appendChild(x);
      const C = document.createElement("div");
      C.classList.add("recordings-list"), Array.from(this.recordedBlobs.keys()).sort((w, S) => w - S).forEach((w) => {
        const S = this.data[w], k = document.createElement("div");
        k.classList.add("recording-item");
        const v = document.createElement("button");
        v.classList.add("recording-play-btn"), v.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', v.title = "Play Recording", v.onclick = () => this.playRecordedAudio(w);
        const L = document.createElement("div");
        L.classList.add("recording-text"), L.textContent = S.original, k.appendChild(v), k.appendChild(L), C.appendChild(k);
      }), f.appendChild(C), p.appendChild(f);
    }
    this.shadowRoot.querySelector(".initial-form").style.display = "none", p.querySelector(".return-btn").onclick = () => {
      this.shadowRoot.querySelector(".form-overlay").style.display = "none";
      const f = this.shadowRoot.querySelector(".sticky-bar");
      f && (f.style.display = "flex");
    };
    const g = p.querySelector("#submit-score-btn");
    g && (g.onclick = () => this._submitScore()), p.querySelector(".reset-all-btn").onclick = () => {
      var f;
      confirm("Are you sure you want to reset all progress? This will delete all your scores and recordings.") && (this.completedIndices.clear(), this.recordedBlobs.clear(), this.recordedSentences.clear(), this.unscrambleScore = 0, this.matchedPairsCount = 0, this.unscrambleCompleted = !1, this.memoryCompleted = !1, this.score = 0, this.answeredCount = 0, (f = this.unscrambleUsedSentences) == null || f.clear(), this.shadowRoot.querySelector(".form-overlay").style.display = "none", this.shadowRoot.querySelector(".report-area").innerHTML = "", this.shadowRoot.querySelector(".initial-form").style.display = "block", this.loadData());
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
    const i = this.getAttribute("story-title") || "Story Practice", n = this.data.length > 0 ? this.score / this.data.length : 0, s = this.unscrambleData.length || this.unscrambleTotal, c = s > 0 ? this.unscrambleScore / s : 0, a = this.memoryGameData.length / 2 || this.memoryTotal, d = a > 0 ? this.matchedPairsCount / a : 0;
    let b = 85, m = 10, y = 5;
    this.unscrambleData.length === 0 && (b += m, m = 0);
    const h = n * b + c * m + d * y, p = {
      nickname: this.studentInfo.nickname,
      homeroom: this.studentInfo.homeroom || "",
      studentId: this.studentInfo.number,
      quizName: "Read- " + i,
      score: Math.round(h),
      total: 100
    };
    try {
      await fetch(this.submissionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(p)
      }), alert("Score successfully submitted!"), o.textContent = "Submitted ✓", o.style.background = "var(--tj-text-muted)";
    } catch (l) {
      console.error("Error submitting score:", l), alert("There was an error submitting your score. Please try again."), o.textContent = t, o.disabled = !1, this.isSubmitting = !1;
    }
  }
  swapLanguages() {
    const e = this.getAttribute("lang-original") || "en", r = this.getAttribute("lang-translation") || "th";
    this.setAttribute("lang-original", r), this.setAttribute("lang-translation", e), this.isSwapped = !this.isSwapped, this.selectedVoiceName = null, this._updateVoiceList();
    const o = this.shadowRoot.querySelector(".lang-btn-original"), t = this.shadowRoot.querySelector(".lang-btn-translation");
    o && o.classList.toggle("active", !this.isSwapped), t && t.classList.toggle("active", this.isSwapped), this.data = this.data.map((i) => {
      const n = i.fullTranslation, s = i.original, c = i.translationWord, a = i.originalWord;
      return {
        ...i,
        original: n,
        fullTranslation: s,
        originalWord: c,
        translationWord: a
        // Keep options as requested
      };
    }), this.displayAllLines();
  }
  render() {
    if (!this.data || this.data.length === 0) return;
    const e = this.getAttribute("lang-original") || "en", r = this.getAttribute("lang-translation") || "th", o = this.shadowRoot.querySelector(".lang-btn-original"), t = this.shadowRoot.querySelector(".lang-btn-translation");
    if (o && (o.textContent = this.getLanguageName(e)), t && (t.textContent = this.getLanguageName(r)), this.displayAllLines(), this.startUnscrambleActivity(!1), this.startMemoryGame(!1), this.updateProgress(), this._updateVoiceList(), !this._shouldShowAudioControls()) {
      const i = this.shadowRoot.querySelector("#autoplay-container");
      i && (i.style.display = "none");
    }
  }
}
customElements.get("tj-reader") || customElements.define("tj-reader", j);
customElements.get("lbl-reader") || customElements.define("lbl-reader", class extends j {
});
