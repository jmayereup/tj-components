import { c as z } from "./chunks/tj-config-Co8tO1UZ.js";
import { g as I, a as A, b as $, s as T } from "./chunks/audio-utils-BQ4R88Cf.js";
const q = ":host{--tj-primary-color: #2563eb;--tj-primary-hover: #1d4ed8;--tj-primary-light: #eff6ff;--tj-primary-border: #bfdbfe;--tj-success-color: #22c55e;--tj-success-hover: #16a34a;--tj-success-light: #f0fdf4;--tj-success-border: #bbf7d0;--tj-error-color: #ef4444;--tj-error-hover: #dc2626;--tj-error-light: #fef2f2;--tj-error-border: #fecaca;--tj-text-main: #1e293b;--tj-text-muted: #64748b;--tj-text-light: #94a3b8;--tj-bg-main: ghostwhite;--tj-bg-card: rgba(255, 255, 255, .95);--tj-bg-alt: #f8fafc;--tj-border-light: #f1f5f9;--tj-border-main: #e2e8f0;--tj-border-dark: #cbd5e1;--tj-font-family: inherit;--tj-font-size-base: 16px;--tj-border-radius-sm: .5em;--tj-border-radius-md: .8em;--tj-border-radius-lg: 1.2em;--tj-border-radius-full: 50%;--tj-shadow-sm: 0 1px 3px rgba(0,0,0,.1);--tj-shadow-md: 0 4px 12px rgba(0,0,0,.05);--tj-shadow-lg: 0 10px 25px -5px rgba(0, 0, 0, .1);--tj-shadow-glass: 0 4px 20px rgba(0,0,0,.05);--tj-backdrop-blur: blur(10px);--tj-transition-fast: all .2s cubic-bezier(.4, 0, .2, 1);--tj-transition-normal: all .3s ease;display:block;font-family:var(--tj-font-family);color:var(--tj-text-main);background-color:var(--tj-bg-main);position:relative;box-sizing:border-box}@media (prefers-color-scheme: dark){:host{--tj-primary-light: #1e3a8a;--tj-primary-border: #1e40af;--tj-success-light: #14532d;--tj-success-border: #166534;--tj-error-light: #7f1d1d;--tj-error-border: #991b1b;--tj-text-main: #f8fafc;--tj-text-muted: #94a3b8;--tj-text-light: #cbd5e1;--tj-bg-main: #0f172a;--tj-bg-card: rgba(30, 41, 59, .95);--tj-bg-alt: #1e293b;--tj-border-light: #334155;--tj-border-main: #475569;--tj-border-dark: #64748b}}:host *{box-sizing:border-box}.tj-card{background:var(--tj-bg-card);-webkit-backdrop-filter:var(--tj-backdrop-blur);backdrop-filter:var(--tj-backdrop-blur);border-radius:var(--tj-border-radius-lg);padding:1.5em;box-shadow:var(--tj-shadow-md);border:1px solid var(--tj-border-main);transition:var(--tj-transition-normal)}.tj-btn{font-family:inherit;font-size:1em;padding:.6em 1.2em;font-weight:600;cursor:pointer;border-radius:var(--tj-border-radius-md);transition:var(--tj-transition-fast);outline:none;display:inline-flex;align-items:center;justify-content:center;gap:.5em}.tj-btn-primary{background:var(--tj-primary-color);color:#fff;border:1px solid var(--tj-primary-hover);box-shadow:var(--tj-shadow-sm)}.tj-btn-primary:hover:not(:disabled){background:var(--tj-primary-hover);transform:translateY(-1px);box-shadow:var(--tj-shadow-md)}.tj-btn-secondary{background:var(--tj-bg-alt);color:#475569;border:1px solid var(--tj-border-main)}.tj-btn-secondary:hover:not(:disabled){background:var(--tj-border-light);border-color:var(--tj-border-dark);color:var(--tj-primary-color)}.tj-btn-success{background:var(--tj-success-color);color:#fff;border:1px solid var(--tj-success-hover)}.tj-btn-error{background:var(--tj-error-color);color:#fff;border:1px solid var(--tj-error-hover)}.tj-icon-btn{background:var(--tj-bg-alt);border:1px solid var(--tj-border-light);padding:.5em;border-radius:var(--tj-border-radius-full);width:3.5em;height:3.5em;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:var(--tj-transition-fast);color:var(--tj-text-muted);flex-shrink:0}.tj-icon-btn:hover{background:var(--tj-primary-light);color:var(--tj-primary-color);border-color:var(--tj-primary-border);transform:scale(1.1)}.tj-input{width:100%;padding:1em;border:1px solid var(--tj-border-main);border-radius:var(--tj-border-radius-sm);font-size:1em;outline:none;transition:var(--tj-transition-fast)}.tj-input:focus{border-color:var(--tj-primary-color);box-shadow:0 0 0 3px var(--tj-primary-light)}.tj-sticky-bar{position:sticky;top:0;background:#ffffffe6;-webkit-backdrop-filter:var(--tj-backdrop-blur);backdrop-filter:var(--tj-backdrop-blur);padding:.8em 1.2em;border-radius:var(--tj-border-radius-md);box-shadow:var(--tj-shadow-glass);z-index:100;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(226,232,240,.8);max-height:8rem;overflow-y:auto}.tj-h2{font-size:1.5em;color:var(--tj-text-main);margin-top:0;margin-bottom:1em}.tj-h3{font-size:1.2em;color:var(--tj-primary-color);margin-top:0;margin-bottom:.5em}.tj-text-muted{color:var(--tj-text-muted)}.tj-flex-center{display:flex;align-items:center;justify-content:center}.tj-flex-between{display:flex;align-items:center;justify-content:space-between}.tj-divider{border:none;border-top:2px dashed var(--tj-border-main);margin:2em 0;position:relative}.tj-divider:after{content:attr(data-label);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:0 1em;color:var(--tj-text-light);font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.1em}.tj-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172acc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:1000;animation:tj-fadeIn .3s ease}.tj-overlay.active{display:flex}@keyframes tj-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes tj-shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes tj-bounce{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}.tj-anim-shake{animation:tj-shake .4s ease}.tj-anim-bounce{animation:tj-bounce .4s ease}", _ = '@import"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap";:host{display:block;max-width:80em;margin:1em auto;font-family:Outfit,sans-serif}.activities-wrapper{display:flex;flex-direction:column;gap:2em;padding:1em 1em 5em}.header-main{flex:1}.progress-text{font-weight:700;color:var(--tj-primary-color);font-size:1.1em;white-space:nowrap}.play-audio-btn.playing{animation:pulse 1s infinite alternate}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 #2563eb66}to{transform:scale(1.05);box-shadow:0 0 0 10px #2563eb00}}.lr-container{display:flex;flex-direction:column;align-items:center;gap:1.5rem}.lr-target-word{font-size:2em;font-family:Inter,sans-serif;font-weight:500;text-align:center;margin-bottom:.5rem;color:var(--tj-text-main)}.lr-phonetic{font-size:1.25em;color:var(--tj-text-muted);font-family:monospace;margin-top:.2rem}.lr-translation{color:var(--tj-text-muted);font-style:italic;margin-top:.8rem;font-size:1.5em}.translation-toggle{font-size:.8em;padding:.4em 1em;border-radius:var(--tj-border-radius-full)}.lr-controls{display:flex;gap:2rem;align-items:center;justify-content:center;width:100%;margin-top:1rem}.lr-control-group{display:flex;flex-direction:column;align-items:center;gap:.5rem}.lr-label{font-size:.75em;font-weight:700;color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em}.record-btn{color:var(--tj-error-color)}.record-btn:hover{background:var(--tj-error-light);color:var(--tj-error-hover);border-color:var(--tj-error-border)}.record-btn.recording{background:var(--tj-error-color);color:#fff;border-color:var(--tj-error-hover);animation:pulse-record 1.5s infinite}@keyframes pulse-record{0%{box-shadow:0 0 #ef444466;transform:scale(1)}70%{box-shadow:0 0 0 15px #ef444400;transform:scale(1.05)}to{box-shadow:0 0 #ef444400;transform:scale(1)}}.playback-btn.ready{color:var(--tj-success-color)}.playback-btn.ready:hover{background:var(--tj-success-light);color:var(--tj-success-hover);border-color:var(--tj-success-border)}.playback-btn.playing{background:var(--tj-success-color);color:#fff;animation:pulse-success 1s infinite alternate}@keyframes pulse-success{0%{transform:scale(1);box-shadow:0 0 #22c55e66}to{transform:scale(1.05);box-shadow:0 0 0 10px #22c55e00}}.mp-container{display:flex;flex-direction:column;align-items:center;gap:1.5rem}.mp-options{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;width:100%}.mp-option-btn{padding:.8rem 1.5rem;min-width:120px}.mp-option-btn.highlight{border-color:var(--tj-primary-color);background:var(--tj-primary-light);transform:translateY(-2px)}.mp-focus{font-size:1.2em;color:var(--tj-text-muted);text-transform:uppercase;letter-spacing:.05em;font-weight:700}.mp-instr{font-size:1.2em;color:var(--tj-text-muted);font-style:italic}.feedback-msg{min-height:1.2em;font-weight:700;font-size:1.1em}.feedback-msg.correct{color:var(--tj-success-color)}.feedback-msg.wrong{color:var(--tj-error-color)}.scramble-container{display:flex;flex-direction:column;align-items:center;gap:1.5rem;width:100%}.scramble-dropzone{min-height:80px;width:100%;border:2px dashed var(--tj-border-main);border-radius:var(--tj-border-radius-lg);padding:1rem;display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:center;background:var(--tj-bg-alt);transition:var(--tj-transition-fast)}.scramble-dropzone.success{border-color:var(--tj-success-color);background:var(--tj-success-light)}.scramble-bank{display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center;width:100%}.scramble-word{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);padding:.6rem 1.2rem;border-radius:var(--tj-border-radius-md);font-weight:600;cursor:pointer;-webkit-user-select:none;user-select:none;box-shadow:var(--tj-shadow-sm);transition:var(--tj-transition-fast)}.scramble-word:hover{border-color:var(--tj-primary-color);transform:translateY(-2px);box-shadow:var(--tj-shadow-md);color:var(--tj-primary-color)}.scramble-word.in-dropzone{background:var(--tj-primary-light);border-color:var(--tj-primary-border);color:var(--tj-primary-color)}.scramble-controls{display:flex;gap:1rem}.voice-card{max-height:80vh;display:flex;flex-direction:column}.voice-list{padding:.5rem;overflow-y:auto;flex:1}.voice-option-btn{width:100%;text-align:left;padding:.8rem 1.2rem;margin-bottom:.5rem;border:1px solid var(--tj-border-main);border-radius:var(--tj-border-radius-md);background:var(--tj-bg-card);color:var(--tj-text-main);cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:var(--tj-transition-fast)}.voice-option-btn:hover{background-color:var(--tj-bg-alt);border-color:var(--tj-primary-color);color:var(--tj-primary-color)}.voice-option-btn.active{background:var(--tj-primary-light);border-color:var(--tj-primary-color);color:var(--tj-primary-color);font-weight:700}.badge{background:var(--tj-primary-color);color:#fff;font-size:.7em;padding:.2rem .6rem;border-radius:var(--tj-border-radius-full);font-weight:800;text-transform:uppercase}.close-voice-btn{padding:0;width:2em;height:2em;display:flex;align-items:center;justify-content:center}.tj-card.completed{border-color:var(--tj-success-color);background:var(--tj-success-light);box-shadow:var(--tj-shadow-md),0 0 0 1px var(--tj-success-border)}.report-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:var(--tj-primary-color);color:#fff;border:none;border-radius:var(--tj-border-radius-md);font-size:1.1em;font-weight:700;cursor:pointer;transition:background .2s;margin-top:2em;align-self:center}.report-btn:hover{filter:brightness(.9)}.report-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#0f172acc;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:1000}.report-modal{background:#fff;width:92%;max-width:420px;padding:28px 24px;border-radius:16px;box-shadow:0 25px 50px -12px #0000004d;text-align:center;max-height:90vh;overflow-y:auto}.report-modal h2{margin:8px 0 4px;color:var(--tj-text-main)}.report-modal p{color:var(--tj-text-muted);margin:0 0 16px;font-size:.95em}.report-icon{font-size:2.5em;margin-bottom:4px}.report-modal input{display:block;width:100%;box-sizing:border-box;padding:12px 14px;margin-bottom:12px;border:1px solid var(--tj-border-main);border-radius:8px;font-size:1em;outline:none;transition:border-color .2s}.report-modal input:focus{border-color:var(--tj-primary-color)}.generate-btn{display:block;width:100%;padding:14px;background:var(--tj-primary-color);color:#fff;border:none;border-radius:8px;font-size:1.05em;font-weight:700;cursor:pointer;margin-top:8px;transition:background .2s}.generate-btn:hover{filter:brightness(.9)}.generate-btn:disabled{opacity:.7;cursor:not-allowed}.cancel-btn{display:block;width:100%;padding:12px;background:transparent;color:var(--tj-text-muted);border:none;font-size:.95em;font-weight:600;cursor:pointer;margin-top:8px}.cancel-btn:hover{color:var(--tj-text-main)}.report-area{text-align:left}.rc-header{text-align:center;margin-bottom:24px}.rc-icon{font-size:2.5em;margin-bottom:8px}.rc-title{font-size:1.4em;font-weight:700;color:var(--tj-text-main);margin-bottom:4px}.rc-subtitle{color:var(--tj-text-muted);font-weight:600;font-size:.9em;text-transform:uppercase;letter-spacing:.05em}.rc-activity{display:inline-block;background:var(--tj-bg-alt);padding:4px 12px;border-radius:20px;font-size:.85em;font-weight:600;color:var(--tj-text-main);margin-top:12px}.rc-student{background:var(--tj-bg-card);border:1px solid var(--tj-border-main);border-radius:12px;padding:16px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center}.rc-label{color:var(--tj-text-muted);font-size:.9em;font-weight:600}.rc-value{font-weight:700;color:var(--tj-text-main)}.rc-number{color:var(--tj-text-muted);font-weight:500;font-size:.9em}.rc-score-row{display:flex;align-items:center;gap:20px;margin-bottom:16px}.rc-score-circle{width:80px;height:80px;border-radius:50%;background:var(--tj-primary-light);color:var(--tj-primary-color);display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px solid var(--tj-primary-color);flex-shrink:0}.rc-score-val{font-size:1.5em;font-weight:800;line-height:1}.rc-score-pct{font-size:.85em;font-weight:700;margin-top:2px}.rc-score-label{font-size:1.1em;font-weight:700;color:var(--tj-text-main)}.rc-bar-track{height:8px;background:var(--tj-bg-alt);border-radius:4px;overflow:hidden}.rc-bar-fill{height:100%;background:var(--tj-primary-color);border-radius:4px}.rc-details{background:var(--tj-bg-alt);padding:16px;border-radius:12px;margin-bottom:24px;font-size:.9em}.rc-detail-row{display:flex;justify-content:space-between;margin-bottom:8px}.rc-detail-row:last-child{margin-bottom:0}.rc-detail-row span:first-child{color:var(--tj-text-muted);font-weight:500}.rc-detail-row span:last-child{font-weight:600;color:var(--tj-text-main)}.rc-actions{display:flex;flex-direction:column;gap:8px}.rc-close-btn{display:block;width:100%;padding:14px;background:transparent;color:var(--tj-text-main);border:2px solid var(--tj-border-main);border-radius:8px;font-size:1em;font-weight:700;cursor:pointer;transition:all .2s}.rc-close-btn:hover{background:var(--tj-bg-alt)}', P = `<div class="pronunciation-wrapper" translate="no">
    <div class="tj-sticky-bar">
        <div class="header-main">
            <h1 class="tj-h3" id="pronunciationTitle" style="margin: 0;">Pronunciation Practice</h1>
            <p class="instructions tj-text-muted" id="pronunciationInstructions" style="display: none; margin: 0; font-size: 0.9em;"></p>
        </div>
        <div class="tj-flex-center" style="gap: 1em;">
            <div class="progress-text">0 / 0</div>
            <button id="voice-btn" class="tj-icon-btn" title="Choose Voice">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z"/>
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
                <input type="text" id="teacher-code-input" placeholder="Teacher Code" autocomplete="off" inputmode="numeric">
                <button class="generate-btn" id="generate-btn">Generate Report</button>
                <button class="cancel-btn" id="cancel-report-btn">Cancel</button>
            </div>
            <div class="report-area" id="report-area" style="display:none;"></div>
            <div id="submit-actions" style="display:none; margin-top: 1em;">
                <button class="generate-btn" id="submit-score-btn" style="background: var(--tj-success-color);">Submit Score</button>
                <button class="cancel-btn" id="rc-close-btn">↩ Return to Activity</button>
            </div>
        </div>
    </div>

    <!-- Voice Selection Overlay -->
    <div class="tj-overlay" id="voice-overlay">
        <div class="tj-card voice-card" style="width: 90%; max-width: 450px;">
            <div class="voice-card-header tj-flex-between" style="margin-bottom: 1em;">
                <h3 class="tj-h3" style="margin: 0;">Choose Voice</h3>
                <button class="tj-icon-btn close-voice-btn" id="close-voice-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>
            <div class="voice-list" id="voice-list"></div>
        </div>
    </div>

    <div class="tj-overlay" id="browser-prompt-overlay" style="padding: 1rem;">
        <div class="tj-card" style="max-width: 400px; text-align: center;">
            <h2 class="tj-h2">Better in a Browser</h2>
            <p class="tj-text-muted" style="margin-bottom: 2em; line-height: 1.6;">It looks like you're using an in-app browser. For the best experience (including audio features), please open this page in <b>Chrome</b> or <b>Safari</b>.</p>
            <a id="browser-action-btn" class="tj-btn tj-btn-primary" style="width: 100%; text-decoration: none;" href="javascript:void(0)">Open Browser</a>
            <button class="tj-btn tj-btn-secondary" style="width: 100%; margin-top: 1em; border: none; background: transparent; text-decoration: underline;" onclick="this.closest('.tj-overlay').classList.remove('active')">Continue anyway</button>
        </div>
    </div>
</div>
`, C = {
  play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  mic: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>',
  headphones: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>'
};
class M extends HTMLElement {
  constructor() {
    var t;
    super(), this.attachShadow({ mode: "open" }), this.synth = window.speechSynthesis, this.language = "en-US", this.mediaRecorder = null, this.audioChunks = [], this.recordings = /* @__PURE__ */ new Map(), this.lrState = /* @__PURE__ */ new Map(), this.selectedVoiceName = localStorage.getItem("tj-pronunciation-voice"), this.isPlaying = !1, this.submissionUrl = (t = z) == null ? void 0 : t.submissionUrl, this.studentInfo = { nickname: "", number: "", homeroom: "" }, this.isSubmitting = !1, this.synth && (this.synth.onvoiceschanged = () => this._updateVoiceList());
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
    if (e.innerHTML = `<style>${q}</style><style>${_}</style>${P}`, this.shadowRoot.firstChild && (this.shadowRoot.innerHTML = ""), this.shadowRoot.appendChild(e.content.cloneNode(!0)), t.title && (this.shadowRoot.getElementById("pronunciationTitle").textContent = t.title), t.instructions) {
      const r = this.shadowRoot.getElementById(
        "pronunciationInstructions"
      );
      r.textContent = t.instructions, r.style.display = "block";
    }
    let o = "";
    if (t.activities && Array.isArray(t.activities) && (o = t.activities.map((r, a) => this.renderActivity(r, a)).join("")), this.shadowRoot.getElementById("activitiesContainer").innerHTML = o, this.updateProgress(), this.attachEventListeners(), this._updateVoiceList(), !this._shouldShowAudioControls()) {
      const r = this.shadowRoot.getElementById("voice-btn");
      r && (r.style.display = "none"), this.checkBrowserSupport();
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
    t.forEach((s) => {
      s.classList.contains("completed") && o++;
    });
    const r = this.shadowRoot.querySelector(".progress-text");
    r && (r.textContent = `${o} / ${e}`);
    const a = this.shadowRoot.getElementById("show-report-btn");
    a && (e > 0 ? a.style.display = "inline-flex" : a.style.display = "none");
  }
  renderListenRecord(t, e) {
    return `
            <div class="tj-card" id="act-${e}">
                <div class="activity-title tj-h3">${C.headphones} Listen & Record</div>
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
                                ${C.play}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Record</span>
                            <button class="tj-icon-btn record-btn" data-action="record" data-index="${e}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${C.mic}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Playback</span>
                            <button class="tj-icon-btn playback-btn" id="playback-${e}" data-action="playback" data-index="${e}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${C.play}
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
                        ${C.play}
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
                        ${C.play}
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
    t && (t.onclick = () => this._showVoiceOverlay()), e && (e.onclick = () => this._hideVoiceOverlay()), o && (o.onclick = (d) => {
      d.target === o && this._hideVoiceOverlay();
    });
    const r = this.shadowRoot.getElementById("show-report-btn"), a = this.shadowRoot.getElementById("report-overlay"), s = this.shadowRoot.getElementById("cancel-report-btn"), l = this.shadowRoot.getElementById("generate-btn"), u = this.shadowRoot.getElementById("rc-close-btn"), y = this.shadowRoot.getElementById("submit-score-btn");
    r && (r.onclick = () => this._showReportOverlay()), s && (s.onclick = () => this._hideReportOverlay()), a && (a.onclick = (d) => {
      d.target === a && this._hideReportOverlay();
    }), u && (u.onclick = () => this._hideReportOverlay()), l && (l.onclick = () => this._generateReport()), y && (y.onclick = () => this._submitScore()), this.shadowRoot.querySelectorAll(".translation-toggle").forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.dataset.index, c = this.shadowRoot.querySelector("#trans-" + i);
        c.style.display === "none" ? (c.style.display = "block", n.target.textContent = "Hide Translation") : (c.style.display = "none", n.target.textContent = "Show Translation");
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="play"]').forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.closest("button"), c = i.dataset.text, p = i.dataset.index;
        this.playTTS(c, i).then(() => {
          if (p !== void 0) {
            const h = this.shadowRoot.querySelector(`button[data-action="record"][data-index="${p}"]`);
            h && this._shouldShowAudioControls() && (h.disabled = !1, h.style.opacity = "1", h.style.cursor = "pointer");
          }
        });
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="play-mp"]').forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.closest("button"), c = i.dataset.options.split(","), p = i.dataset.index, h = c[Math.floor(Math.random() * c.length)], g = i.closest(".mp-container");
        g.dataset.currentAnswer = h, g.querySelectorAll("button[data-action='mp-guess']").forEach((m) => {
          m.disabled = !1, m.classList.remove("tj-btn-success", "tj-btn-error"), m.classList.add("tj-btn-secondary");
        });
        const b = this.shadowRoot.querySelector("#feedback-" + p);
        b && (b.textContent = "", b.className = "feedback-msg"), this.playMinimalPairSequence(c, h, i);
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="record"]').forEach((d) => {
      d.addEventListener("click", async (n) => {
        const i = n.target.closest("button"), c = i.dataset.index;
        await this.toggleRecording(i, c);
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="playback"]').forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.closest("button");
        if (i.classList.contains("ready")) {
          const c = i.dataset.index;
          this.playRecording(c, i);
        }
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="mp-guess"]').forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.closest("button"), c = i.dataset.index, p = i.closest(".mp-container"), h = p.dataset.currentAnswer, g = this.shadowRoot.querySelector("#feedback-" + c);
        if (!h) {
          g.textContent = "Please listen to the audio first.", g.className = "feedback-msg";
          return;
        }
        const b = i.textContent.trim() === h.trim();
        if (p.querySelectorAll("button[data-action='mp-guess']").forEach((m) => m.disabled = !0), b) {
          i.classList.add("tj-btn-success"), i.classList.remove("tj-btn-secondary"), g.textContent = "Correct! 🎉", g.className = "feedback-msg correct";
          const m = i.closest(".tj-card");
          m && (m.classList.add("completed"), this.updateProgress());
        } else
          i.classList.add("tj-btn-error"), i.classList.remove("tj-btn-secondary"), g.textContent = "Incorrect.", g.className = "feedback-msg wrong", p.querySelectorAll("button[data-action='mp-guess']").forEach((m) => {
            m.textContent.trim() === h.trim() && (m.classList.add("tj-btn-success"), m.classList.remove("tj-btn-secondary"));
          });
      });
    }), this.shadowRoot.querySelectorAll('.scramble-word[data-action="scramble-move"]').forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.dataset.index, c = this.shadowRoot.querySelector("#dropzone-" + i), p = this.shadowRoot.querySelector("#bank-" + i), h = this.shadowRoot.querySelector(
          "#feedback-" + i
        );
        h && (h.textContent = "", h.className = "feedback-msg"), c.classList.remove("success"), n.target.parentElement === p ? (c.appendChild(n.target), n.target.classList.add("in-dropzone")) : (p.appendChild(n.target), n.target.classList.remove("in-dropzone"));
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="scramble-reset"]').forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.dataset.index, c = this.shadowRoot.querySelector("#dropzone-" + i), p = this.shadowRoot.querySelector("#bank-" + i), h = this.shadowRoot.querySelector(
          "#feedback-" + i
        );
        h && (h.textContent = "", h.className = "feedback-msg"), c.classList.remove("success"), c.querySelectorAll(".scramble-word").forEach((b) => {
          p.appendChild(b), b.classList.remove("in-dropzone");
        });
      });
    }), this.shadowRoot.querySelectorAll('button[data-action="scramble-check"]').forEach((d) => {
      d.addEventListener("click", (n) => {
        const i = n.target.dataset.index, c = this.shadowRoot.querySelector("#dropzone-" + i), p = this.shadowRoot.querySelector(
          "#feedback-" + i
        ), g = this.shadowRoot.querySelector(
          "#scramble-ans-" + i
        ).dataset.answer, b = Array.from(
          c.querySelectorAll(".scramble-word")
        ).map((v) => v.textContent), m = b.join(" ");
        if (b.length === 0) {
          p.textContent = "Please construct a sentence first.", p.className = "feedback-msg";
          return;
        }
        if (m === g) {
          p.textContent = "Correct! 🎉", p.className = "feedback-msg correct", c.classList.add("success");
          const v = n.target.closest(".scramble-container"), x = v.querySelector(".scramble-controls"), j = v.querySelector(".play-audio-btn");
          x && (x.style.display = "none"), j && (j.style.display = "none"), c && (c.style.display = "none");
          const E = n.target.closest(".tj-card");
          E && (E.classList.add("completed"), this.updateProgress()), setTimeout(() => {
            p.textContent = "Activity Completed ✓", c.querySelectorAll(".scramble-word").forEach((S) => S.style.display = "none");
            const k = this.shadowRoot.querySelector("#bank-" + i);
            k && k.querySelectorAll(".scramble-word").forEach((f) => f.style.display = "none");
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
    const t = this.shadowRoot.getElementById("nickname-input"), e = this.shadowRoot.getElementById("number-input"), o = this.shadowRoot.getElementById("homeroom-input"), r = this.shadowRoot.getElementById("teacher-code-input"), a = t ? t.value.trim() : this.studentInfo.nickname, s = e ? e.value.trim() : this.studentInfo.number, l = o ? o.value.trim() : this.studentInfo.homeroom, u = r ? r.value.trim() : "";
    if (!a || !s) {
      alert("Please enter both nickname and student number.");
      return;
    }
    this.studentInfo = { nickname: a, number: s, homeroom: l, teacherCode: u };
    const y = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length, d = this.shadowRoot.querySelectorAll(".tj-card.completed").length, n = Math.round(d / y * 100) || 0, i = (/* @__PURE__ */ new Date()).toLocaleString();
    let c = "🏆";
    n < 50 ? c = "💪" : n < 80 && (c = "⭐");
    const h = `
          <div class="rc-header">
              <div class="rc-icon">📄</div>
              <div class="rc-title">${this.shadowRoot.getElementById("pronunciationTitle").textContent || "Pronunciation Practice"}</div>
              <div class="rc-subtitle">Report Card</div>
          </div>
          <div class="rc-student">
              <span class="rc-label">Student</span>
              <span class="rc-value">${a} <span class="rc-number">(${s}) ${l ? `- ${l}` : ""}</span></span>
          </div>
          <div class="rc-score-row">
              <div class="rc-score-circle">
                  <div class="rc-score-val">${d}/${y}</div>
                  <div class="rc-score-pct">${n}%</div>
              </div>
              <div class="rc-score-label">${c} ${n >= 80 ? "Excellent!" : n >= 50 ? "Good effort!" : "Keep practicing!"}</div>
          </div>
          <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${n}%"></div></div>
          <div class="rc-details">
              <div class="rc-detail-row"><span>Total Completed</span><span>${d} / ${y} activities</span></div>
              <div class="rc-detail-row"><span>Completed On</span><span>${i}</span></div>
          </div>
          <div style="margin-top: 16px; padding: 12px; background: var(--tj-bg-alt); border-radius: 8px; border: 1px dashed var(--tj-border-main); text-align: left;">
              <p style="margin: 0 0 8px 0; font-size: 0.85em; color: var(--tj-text-muted); font-weight: 600; text-transform: uppercase;">Official Submission</p>
              <input type="text" id="report-teacher-code" placeholder="Enter Teacher Code" style="width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid var(--tj-border-main); border-radius: 6px; font-size: 0.9em; margin-bottom: 4px;" value="${u}">
              <p style="margin: 4px 0 0 0; font-size: 0.8em; color: var(--tj-text-muted);">Enter the teacher code to submit, or take a screenshot of this page.</p>
          </div>
      `, g = this.shadowRoot.getElementById("initial-form"), b = this.shadowRoot.getElementById("report-area"), m = this.shadowRoot.getElementById("submit-actions");
    if (g && (g.style.display = "none"), b && (b.style.display = "block", b.innerHTML = h, this.recordings.size > 0)) {
      const v = document.createElement("div");
      v.classList.add("recordings-section"), v.style.marginTop = "20px", v.style.textAlign = "left";
      const x = document.createElement("h4");
      x.style.display = "flex", x.style.alignItems = "center", x.style.gap = "8px", x.style.margin = "0 0 12px 0", x.style.color = "var(--tj-text-main)", x.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--tj-primary)"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg> Student Recordings', v.appendChild(x);
      const j = document.createElement("div");
      j.classList.add("recordings-list"), j.style.display = "flex", j.style.flexDirection = "column", j.style.gap = "8px", Array.from(this.recordings.keys()).sort((R, k) => R - k).forEach((R) => {
        const k = this.shadowRoot.getElementById(`act-${R}`);
        let S = "Recording " + (parseInt(R) + 1);
        if (k) {
          const B = k.querySelector(".lr-target-word");
          B && (S = B.textContent);
        }
        const f = document.createElement("div");
        f.classList.add("recording-item"), f.style.display = "flex", f.style.alignItems = "center", f.style.gap = "12px", f.style.padding = "8px", f.style.background = "var(--tj-bg-main)", f.style.border = "1px solid var(--tj-border-main)", f.style.borderRadius = "8px";
        const w = document.createElement("button");
        w.classList.add("tj-icon-btn", "recording-play-btn"), w.style.width = "32px", w.style.height = "32px", w.style.padding = "0", w.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>', w.title = "Play Recording", w.onclick = () => this._playReportRecording(R, w);
        const L = document.createElement("div");
        L.classList.add("recording-text"), L.style.fontSize = "0.9em", L.style.color = "var(--tj-text-main)", L.textContent = S, f.appendChild(w), f.appendChild(L), j.appendChild(f);
      }), v.appendChild(j), b.appendChild(v);
    }
    m && (m.style.display = "block");
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
    const t = this.shadowRoot.getElementById("report-teacher-code");
    if (!((t ? t.value.trim() : this.studentInfo.teacherCode) === "6767")) {
      alert("Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.");
      return;
    }
    if (this.isSubmitting) return;
    const r = this.shadowRoot.getElementById("submit-score-btn"), a = r.textContent;
    this.isSubmitting = !0, r.textContent = "Submitting...", r.disabled = !0;
    const s = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length, l = this.shadowRoot.querySelectorAll(".tj-card.completed").length, u = this.shadowRoot.getElementById("pronunciationTitle").textContent || "Pronunciation Practice", y = {
      nickname: this.studentInfo.nickname,
      homeroom: this.studentInfo.homeroom || "",
      studentId: this.studentInfo.number,
      quizName: "Pron- " + u,
      score: l,
      total: s
    };
    try {
      await fetch(this.submissionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(y)
      }), alert("Score successfully submitted!"), r.textContent = "Submitted ✓", r.style.background = "var(--tj-text-muted)";
    } catch (d) {
      console.error("Error submitting score:", d), alert("There was an error submitting your score. Please try again."), r.textContent = a, r.disabled = !1, this.isSubmitting = !1;
    }
  }
  playTTS(t, e) {
    return !this.synth || !this._shouldShowAudioControls() ? Promise.resolve() : new Promise((o, r) => {
      this.synth.cancel();
      const a = new SpeechSynthesisUtterance(t);
      a.lang = this.language, a.rate = 0.9;
      let l = this.synth.getVoices().find((u) => u.name === this.selectedVoiceName);
      l || (l = this._getBestVoice(this.language)), l && (a.voice = l), a.onstart = () => {
        e.classList.add("playing"), this.isPlaying = !0;
      }, a.onend = () => {
        e.classList.remove("playing"), this.isPlaying = !1, o();
      }, a.onerror = (u) => {
        e.classList.remove("playing"), this.isPlaying = !1, r(u);
      }, this.synth.speak(a);
    });
  }
  // TTS Guide 1.3 Methods
  _getBestVoice(t) {
    return I(this.synth, t);
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
      (s) => s.lang.split(/[-_]/)[0].toLowerCase() === o
    ), a = this._getBestVoice(this.language);
    t.innerHTML = "", r.sort((s, l) => s.name.localeCompare(l.name)), r.forEach((s) => {
      const l = document.createElement("button");
      l.classList.add("voice-option-btn"), (this.selectedVoiceName === s.name || !this.selectedVoiceName && a && s.name === a.name) && l.classList.add("active"), l.innerHTML = `<span>${s.name}</span>`, a && s.name === a.name && (l.innerHTML += '<span class="badge">Best</span>'), l.onclick = () => {
        this.selectedVoiceName = s.name, localStorage.setItem("tj-pronunciation-voice", s.name), this._updateVoiceList(), this._hideVoiceOverlay();
      }, t.appendChild(l);
    });
  }
  _shouldShowAudioControls() {
    return A(this.synth);
  }
  _getAndroidIntentLink() {
    return $();
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
      for (let s = 0; s < 2; s++) {
        for (const l of t) {
          const u = Array.from(a).find(
            (y) => y.textContent.trim() === l.trim()
          );
          u && u.classList.add("highlight"), await this.playTTS(l, o), u && u.classList.remove("highlight"), await new Promise((y) => setTimeout(y, 600));
        }
        await new Promise((l) => setTimeout(l, 400));
      }
      await new Promise((s) => setTimeout(s, 500)), await this.playTTS(e, o);
    } catch (s) {
      console.error("Audio sequence error:", s), o.classList.remove("playing"), a.forEach((l) => l.classList.remove("highlight"));
    }
  }
  async toggleRecording(t, e) {
    if (t.classList.contains("recording"))
      this.mediaRecorder && this.mediaRecorder.state !== "inactive" && this.mediaRecorder.stop(), t.classList.remove("recording");
    else
      try {
        this.audioChunks = [], this.mediaRecorder = await T(
          (o) => {
            o.data.size > 0 && this.audioChunks.push(o.data);
          },
          (o) => {
            const r = new Blob(this.audioChunks, { type: o }), a = URL.createObjectURL(r);
            this.recordings.has(e) && URL.revokeObjectURL(this.recordings.get(e)), this.recordings.set(e, a);
            const s = this.shadowRoot.querySelector(
              `#playback-${e}`
            );
            s && (s.classList.add("ready"), s.disabled = !1, s.style.opacity = "1", s.style.cursor = "pointer"), this.audioChunks = null;
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
    const r = new Audio(o);
    r.onplay = () => {
      e.classList.add("playing");
    }, r.onended = () => {
      e.classList.remove("playing");
      const a = e.closest(".tj-card");
      a && !a.classList.contains("completed") && (a.classList.add("completed"), this.updateProgress());
    }, r.play().catch((a) => {
      console.error("Error playing recording:", a), e.classList.remove("playing");
    });
  }
}
customElements.define("tj-pronunciation", M);
