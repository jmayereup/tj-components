import { config } from "../tj-config.js";
import sharedStyles from "../tj-shared.css?inline";
import stylesText from "./styles.css?inline";
import templateHtml from "./template.html?raw";
import { getBestVoice, shouldShowAudioControls, startAudioRecording, getAndroidIntentLink } from "../audio-utils.js";

const icons = {
  play: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  stop: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12"></rect></svg>`,
  mic: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>`,
  headphones: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`,
};

class TjPronunciation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.synth = window.speechSynthesis;
    this.language = "en-US";
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.recordings = new Map(); // Store blob URLs by activity index
    this.lrState = new Map(); // Track listen/record/playback state per activity
    this.selectedVoiceName = localStorage.getItem("tj-pronunciation-voice");
    this.isPlaying = false;
    this.submissionUrl = config?.submissionUrl || "https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec"; // Use config or fallback
    this.studentInfo = { nickname: '', number: '', homeroom: '' };
    this.isSubmitting = false;

    // Listen for voice loading
    if (this.synth) {
      this.synth.onvoiceschanged = () => this._updateVoiceList();
    }
  }

  connectedCallback() {
    const src = this.getAttribute("src");

    requestAnimationFrame(() => {
        let jsonText = '';

        // 1. Property
        if (this.config) {
            if (typeof this.config === 'object') {
                this.render(this.config);
                return;
            } else {
                jsonText = String(this.config);
            }
        }
        // 2. Attribute
        else if (this.hasAttribute('config')) {
            jsonText = this.getAttribute('config');
        }
        // 3. Script tag
        else if (this.querySelector('script[type="application/json"]')) {
            jsonText = this.querySelector('script[type="application/json"]').textContent.trim();
        }
        // 4. Default: Text Content
        else if (!src) {
            jsonText = this.textContent.trim();
        }

        if (jsonText) {
            try {
                const data = JSON.parse(jsonText);
                this.render(data);
            } catch (e) {
                console.error("Error parsing inline JSON data", e);
                this.shadowRoot.innerHTML = `<p style="color: red;">Error loading pronunciation data: Invalid JSON.</p>`;
            }
        } else if (src) {
            this.loadData(src);
        }
    });
  }

  async loadData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.render(data);
    } catch (error) {
      console.error("Error loading pronunciation data:", error);
      this.shadowRoot.innerHTML = `<p style="color: red;">Error loading pronunciation data.</p>`;
    }
  }

  render(data) {
    if (data.language) {
      this.language = data.language;
    }

    const template = document.createElement("template");
    template.innerHTML = `<style>${sharedStyles}</style><style>${stylesText}</style>${templateHtml}`;

    if (this.shadowRoot.firstChild) {
      this.shadowRoot.innerHTML = "";
    }

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    if (data.title) {
      this.shadowRoot.getElementById("pronunciationTitle").textContent =
        data.title;
    }

    let activitiesHtml = "";
    if (data.activities && Array.isArray(data.activities)) {
      activitiesHtml = data.activities
        .map((act, index) => this.renderActivity(act, index))
        .join("");
    }

    this.shadowRoot.getElementById("activitiesContainer").innerHTML = activitiesHtml;

    this.updateProgress();
    this.attachEventListeners();

    // Reset voice list after render in case overlay is opened
    this._updateVoiceList();

    // Check if audio controls should be shown (in-app browser check)
    if (!this._shouldShowAudioControls()) {
      const voiceBtn = this.shadowRoot.getElementById("voice-btn");
      if (voiceBtn) voiceBtn.style.display = "none";
      this.checkBrowserSupport();
    }
  }

  renderActivity(activity, index) {
    switch (activity.type) {
      case "listen_record":
        return this.renderListenRecord(activity, index);
      case "minimal_pair":
        return this.renderMinimalPair(activity, index);
      case "stress_match":
        return `<div class="tj-card"><h2 class="tj-h3">Stress Match Activity (Coming Soon)</h2></div>`;
      case "scramble":
        return this.renderScramble(activity, index);
      case "odd_one_out":
        return `<div class="tj-card"><h2 class="tj-h3">Odd One Out Activity (Coming Soon)</h2></div>`;
      default:
        return `<div class="tj-card"><p>Unknown activity type: ${activity.type}</p></div>`;
    }
  }

  updateProgress() {
    const totalCards = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']");
    const total = totalCards.length;
    let completed = 0;
    
    totalCards.forEach(card => {
        if (card.classList.contains("completed")) {
            completed++;
        }
    });

    const progressText = this.shadowRoot.querySelector(".progress-text");
    if (progressText) {
      progressText.textContent = `${completed} / ${total}`;
    }

    const showReportBtn = this.shadowRoot.getElementById('show-report-btn');
    if (showReportBtn) {
       if (total > 0) {
           showReportBtn.style.display = 'inline-flex';
       } else {
           showReportBtn.style.display = 'none';
       }
    }
  }

  renderListenRecord(activity, index) {
    return `
            <div class="tj-card" id="act-${index}">
                <div class="activity-title tj-h3">${icons.headphones} Listen & Record</div>
                <div class="lr-container">
                    <div style="text-align: center;">
                        <div class="lr-target-word">${activity.targetText}</div>
                        ${activity.phoneticHint ? `<div class="lr-phonetic">/[${activity.phoneticHint}]/</div>` : ""}
                        
                        ${
                          activity.translation
                            ? `
                            <button class="tj-btn tj-btn-secondary translation-toggle" data-index="${index}" style="margin-top: 1em;">Show Translation</button>
                            <div class="lr-translation hidden" id="trans-${index}" style="display: none;">${activity.translation}</div>
                        `
                            : ""
                        }
                    </div>

                    <div class="lr-controls">
                        <div class="lr-control-group">
                            <span class="lr-label">Listen</span>
                            <button class="tj-icon-btn play-audio-btn" data-action="play" data-index="${index}" data-text="${activity.targetText.replace(/"/g, "&quot;")}">
                                ${icons.play}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Record</span>
                            <button class="tj-icon-btn record-btn" data-action="record" data-index="${index}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${icons.mic}
                            </button>
                        </div>

                        <div class="lr-control-group">
                            <span class="lr-label">Playback</span>
                            <button class="tj-icon-btn playback-btn" id="playback-${index}" data-action="playback" data-index="${index}" disabled style="opacity: 0.5; cursor: not-allowed;">
                                ${icons.play}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  renderMinimalPair(activity, index) {
    if (!activity.options || !Array.isArray(activity.options)) {
        return `<div class="tj-card"><p>Error: Minimal Pair requires 'options' array.</p></div>`;
      }
      return `
            <div class="tj-card" id="act-${index}">
                <div class="activity-title tj-h3">
                    <span style="display:inline-block; margin-right: 0.5rem;">⚖️</span> Minimal Pair
                </div>
                <div class="mp-container">
                    ${activity.focus ? `<div class="mp-focus">Focus: ${activity.focus}</div>` : ""}
                    <div class="mp-instr">Click on the last word that you hear.</div>
                    
                    <button class="tj-icon-btn play-audio-btn" data-action="play-mp" data-index="${index}" 
                            data-options="${activity.options.join(",").replace(/"/g, "&quot;")}">
                        ${icons.play}
                    </button>

                    <div class="mp-options">
                        ${activity.options
                          .map(
                            (opt) => `
                            <button class="tj-btn tj-btn-secondary mp-option-btn" data-action="mp-guess" data-index="${index}">${opt}</button>
                        `,
                          )
                          .join("")}
                    </div>
                    <div class="feedback-msg" id="feedback-${index}"></div>
                </div>
            </div>
        `;
  }

  renderScramble(activity, index) {
    if (!activity.words || !Array.isArray(activity.words)) {
        return `<div class="tj-card"><p>Error: Scramble requires 'words' array.</p></div>`;
      }

      let allWords = [...activity.words];
      if (activity.distractors && Array.isArray(activity.distractors)) {
        allWords = allWords.concat(activity.distractors);
      }

      // Shuffle the words
      for (let i = allWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
      }

      return `
            <div class="tj-card" id="act-${index}">
                <div class="activity-title tj-h3">
                    <span style="display:inline-block; margin-right: 0.5rem;">🧩</span> Dictation Scramble
                </div>
                <div class="scramble-container">
                    <button class="tj-icon-btn play-audio-btn" data-action="play" data-text="${activity.audioText.replace(/"/g, "&quot;")}">
                        ${icons.play}
                    </button>

                    <!-- Hidden data store for correct answer -->
                    <div id="scramble-ans-${index}" style="display:none;" data-answer="${activity.words.join(" ").replace(/"/g, "&quot;")}"></div>

                    <div class="scramble-dropzone" id="dropzone-${index}">
                        <!-- Words dropped here -->
                    </div>

                    <div class="scramble-bank" id="bank-${index}">
                        ${allWords
                          .map(
                            (word, wIdx) => `
                            <div class="scramble-word" data-action="scramble-move" data-index="${index}" data-word-id="${wIdx}">${word}</div>
                        `,
                          )
                          .join("")}
                    </div>

                    <div class="scramble-controls">
                        <button class="tj-btn tj-btn-secondary scramble-btn" data-action="scramble-reset" data-index="${index}">Reset</button>
                        <button class="tj-btn tj-btn-primary scramble-btn" data-action="scramble-check" data-index="${index}">Check</button>
                    </div>
                    
                    <div class="feedback-msg" id="feedback-${index}"></div>
                </div>
            </div>
        `;
  }

  attachEventListeners() {
    // Voice selection
    const voiceBtn = this.shadowRoot.getElementById("voice-btn");
    const closeVoiceBtn = this.shadowRoot.getElementById("close-voice-btn");
    const voiceOverlay = this.shadowRoot.getElementById("voice-overlay");

    if (voiceBtn) voiceBtn.onclick = () => this._showVoiceOverlay();
    if (closeVoiceBtn) closeVoiceBtn.onclick = () => this._hideVoiceOverlay();
    if (voiceOverlay) {
      voiceOverlay.onclick = (e) => {
        if (e.target === voiceOverlay) this._hideVoiceOverlay();
      };
    }

    // Report Card and Submit
    const showReportBtn = this.shadowRoot.getElementById('show-report-btn');
    const reportOverlay = this.shadowRoot.getElementById('report-overlay');
    const cancelReportBtn = this.shadowRoot.getElementById('cancel-report-btn');
    const generateBtn = this.shadowRoot.getElementById('generate-btn');
    const rcCloseBtn = this.shadowRoot.getElementById('rc-close-btn');
    const submitBtn = this.shadowRoot.getElementById('submit-score-btn');

    if (showReportBtn) showReportBtn.onclick = () => this._showReportOverlay();
    if (cancelReportBtn) cancelReportBtn.onclick = () => this._hideReportOverlay();
    if (reportOverlay) {
        reportOverlay.onclick = (e) => {
            if (e.target === reportOverlay) this._hideReportOverlay();
        };
    }
    if (rcCloseBtn) rcCloseBtn.onclick = () => this._hideReportOverlay();
    if (generateBtn) generateBtn.onclick = () => this._generateReport();
    if (submitBtn) submitBtn.onclick = () => this._submitScore();

    // Translation toggles
    this.shadowRoot.querySelectorAll(".translation-toggle").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const transDiv = this.shadowRoot.querySelector("#trans-" + index);
        if (transDiv.style.display === "none") {
          transDiv.style.display = "block";
          e.target.textContent = "Hide Translation";
        } else {
          transDiv.style.display = "none";
          e.target.textContent = "Show Translation";
        }
      });
    });

    // Play native audio (TTS for now, could be extended to real audio files later if needed)
    this.shadowRoot
      .querySelectorAll('button[data-action="play"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const button = e.target.closest("button");
          const text = button.dataset.text;
          const index = button.dataset.index;
            this.playTTS(text, button).then(() => {
                if (index !== undefined) {
                    const recordBtn = this.shadowRoot.querySelector(`button[data-action="record"][data-index="${index}"]`);
                    // Only enable record button if we're not in a limited browser environments that block getUserMedia
                    if (recordBtn && this._shouldShowAudioControls()) {
                        recordBtn.disabled = false;
                        recordBtn.style.opacity = "1";
                        recordBtn.style.cursor = "pointer";
                    }
                }
            });
        });
      });

    // Minimal Pair sequence play
    this.shadowRoot
      .querySelectorAll('button[data-action="play-mp"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const button = e.target.closest("button");
          const options = button.dataset.options.split(",");
          const index = button.dataset.index;
          
          // Randomly select answer
          const answer = options[Math.floor(Math.random() * options.length)];
          const container = button.closest(".mp-container");
          container.dataset.currentAnswer = answer;

          // Reset options if playing again
          container.querySelectorAll("button[data-action='mp-guess']").forEach(b => {
             b.disabled = false;
             b.classList.remove('tj-btn-success', 'tj-btn-error');
             b.classList.add('tj-btn-secondary');
          });
          const feedbackDiv = this.shadowRoot.querySelector("#feedback-" + index);
          if (feedbackDiv) {
              feedbackDiv.textContent = "";
              feedbackDiv.className = "feedback-msg";
          }

          this.playMinimalPairSequence(options, answer, button);
        });
      });

    // Record buttons
    this.shadowRoot
      .querySelectorAll('button[data-action="record"]')
      .forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const button = e.target.closest("button");
          const index = button.dataset.index;
          await this.toggleRecording(button, index);
        });
      });

    // Playback buttons
    this.shadowRoot
      .querySelectorAll('button[data-action="playback"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const button = e.target.closest("button");
          if (button.classList.contains("ready")) {
            const index = button.dataset.index;
            this.playRecording(index, button);
          }
        });
      });

    // Minimal Pair guesses
    this.shadowRoot
      .querySelectorAll('button[data-action="mp-guess"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const button = e.target.closest("button");
          const index = button.dataset.index;
          const container = button.closest(".mp-container");
          const correctAnswer = container.dataset.currentAnswer;
          const feedbackDiv = this.shadowRoot.querySelector("#feedback-" + index);

          if (!correctAnswer) {
              feedbackDiv.textContent = "Please listen to the audio first.";
              feedbackDiv.className = "feedback-msg";
              return;
          }

          const isCorrect = button.textContent.trim() === correctAnswer.trim();

          // Disable all buttons in this container
          container
            .querySelectorAll("button[data-action='mp-guess']")
            .forEach((b) => (b.disabled = true));

          if (isCorrect) {
            button.classList.add("tj-btn-success");
            button.classList.remove("tj-btn-secondary");
            feedbackDiv.textContent = "Correct! 🎉";
            feedbackDiv.className = "feedback-msg correct";
            const card = button.closest(".tj-card");
            if (card) {
                card.classList.add("completed");
                this.updateProgress();
            }
          } else {
            button.classList.add("tj-btn-error");
            button.classList.remove("tj-btn-secondary");
            feedbackDiv.textContent = "Incorrect.";
            feedbackDiv.className = "feedback-msg wrong";

            // Highlight the correct one
            container.querySelectorAll("button[data-action='mp-guess']").forEach((b) => {
              if (b.textContent.trim() === correctAnswer.trim()) {
                b.classList.add("tj-btn-success");
                b.classList.remove("tj-btn-secondary");
              }
            });
          }
        });
      });

    // Scramble logic
    this.shadowRoot
      .querySelectorAll('.scramble-word[data-action="scramble-move"]')
      .forEach((wordBtn) => {
        wordBtn.addEventListener("click", (e) => {
          const index = e.target.dataset.index;
          const dropzone = this.shadowRoot.querySelector("#dropzone-" + index);
          const bank = this.shadowRoot.querySelector("#bank-" + index);
          const feedbackDiv = this.shadowRoot.querySelector(
            "#feedback-" + index,
          );
          if (feedbackDiv) {
            feedbackDiv.textContent = "";
            feedbackDiv.className = "feedback-msg";
          }

          // Reset dropzone styling if it was correct
          dropzone.classList.remove("success");

          if (e.target.parentElement === bank) {
            // Move to dropzone
            dropzone.appendChild(e.target);
            e.target.classList.add("in-dropzone");
          } else {
            // Move back to bank
            bank.appendChild(e.target);
            e.target.classList.remove("in-dropzone");
          }
        });
      });

    this.shadowRoot
      .querySelectorAll('button[data-action="scramble-reset"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = e.target.dataset.index;
          const dropzone = this.shadowRoot.querySelector("#dropzone-" + index);
          const bank = this.shadowRoot.querySelector("#bank-" + index);
          const feedbackDiv = this.shadowRoot.querySelector(
            "#feedback-" + index,
          );
          if (feedbackDiv) {
            feedbackDiv.textContent = "";
            feedbackDiv.className = "feedback-msg";
          }

          dropzone.classList.remove("success");

          // Move all words back to bank
          const words = dropzone.querySelectorAll(".scramble-word");
          words.forEach((word) => {
            bank.appendChild(word);
            word.classList.remove("in-dropzone");
          });
        });
      });

    this.shadowRoot
      .querySelectorAll('button[data-action="scramble-check"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = e.target.dataset.index;
          const dropzone = this.shadowRoot.querySelector("#dropzone-" + index);
          const feedbackDiv = this.shadowRoot.querySelector(
            "#feedback-" + index,
          );
          const answerNode = this.shadowRoot.querySelector(
            "#scramble-ans-" + index,
          );

          const correctAnswer = answerNode.dataset.answer;

          // Get words currently in dropzone in order
          const currentWords = Array.from(
            dropzone.querySelectorAll(".scramble-word"),
          ).map((w) => w.textContent);
          const currentSentence = currentWords.join(" ");

          if (currentWords.length === 0) {
            feedbackDiv.textContent = "Please construct a sentence first.";
            feedbackDiv.className = "feedback-msg";
            return;
          }

          if (currentSentence === correctAnswer) {
            feedbackDiv.textContent = "Correct! 🎉";
            feedbackDiv.className = "feedback-msg correct";
            dropzone.classList.add("success");

            // Hide controls and play button immediately
            const scrambleContainer = e.target.closest(".scramble-container");
            const controls = scrambleContainer.querySelector(".scramble-controls");
            const playBtn = scrambleContainer.querySelector(".play-audio-btn");
            if (controls) controls.style.display = 'none';
            if (playBtn) playBtn.style.display = 'none';
            if (dropzone) dropzone.style.display = 'none';

            const card = e.target.closest(".tj-card");
            if (card) {
                card.classList.add("completed");
                this.updateProgress();
            }

            // Hide results after a short delay to reduce copying
            setTimeout(() => {
                feedbackDiv.textContent = "Activity Completed ✓";
                // Hide words in the dropzone
                const words = dropzone.querySelectorAll(".scramble-word");
                words.forEach(w => w.style.display = 'none');
                
                // Hide any remaining words in the bank
                const bank = this.shadowRoot.querySelector("#bank-" + index);
                if (bank) {
                    const bankWords = bank.querySelectorAll(".scramble-word");
                    bankWords.forEach(w => w.style.display = 'none');
                }
            }, 3000);

          } else {
            feedbackDiv.textContent = "Incorrect. Try again!";
            feedbackDiv.className = "feedback-msg wrong";
          }
        });
      });
  }

  _showReportOverlay() {
      const overlay = this.shadowRoot.getElementById('report-overlay');
      if (overlay) overlay.style.display = 'flex';

      // Pre-fill if already entered
      if (this.studentInfo.nickname) {
          const nicknameInput = this.shadowRoot.getElementById('nickname-input');
          const numberInput = this.shadowRoot.getElementById('number-input');
          const homeroomInput = this.shadowRoot.getElementById('homeroom-input');
          if (nicknameInput) nicknameInput.value = this.studentInfo.nickname;
          if (numberInput) numberInput.value = this.studentInfo.number;
          if (homeroomInput) homeroomInput.value = this.studentInfo.homeroom;
          this._generateReport();
      } else {
          const initialForm = this.shadowRoot.getElementById('initial-form');
          const reportArea = this.shadowRoot.getElementById('report-area');
          const submitActions = this.shadowRoot.getElementById('submit-actions');
          if (initialForm) initialForm.style.display = 'block';
          if (reportArea) reportArea.style.display = 'none';
          if (submitActions) submitActions.style.display = 'none';
      }
  }

  _hideReportOverlay() {
      const overlay = this.shadowRoot.getElementById('report-overlay');
      if (overlay) overlay.style.display = 'none';
      
      // Stop any playing recordings when closing report
      if (this._currentPlayingAudio) {
        this._currentPlayingAudio.pause();
        this._currentPlayingAudio = null;
      }
      this.shadowRoot.querySelectorAll('.recording-play-btn.playing').forEach(btn => {
        btn.classList.remove('playing');
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      });
  }

  _generateReport() {
      const nicknameInput = this.shadowRoot.getElementById('nickname-input');
      const numberInput = this.shadowRoot.getElementById('number-input');
      const homeroomInput = this.shadowRoot.getElementById('homeroom-input');
      const teacherCodeInput = this.shadowRoot.getElementById('teacher-code-input');
      
      const nickname = nicknameInput ? nicknameInput.value.trim() : this.studentInfo.nickname;
      const number = numberInput ? numberInput.value.trim() : this.studentInfo.number;
      const homeroom = homeroomInput ? homeroomInput.value.trim() : this.studentInfo.homeroom;
      const teacherCode = teacherCodeInput ? teacherCodeInput.value.trim() : '';

      if (!nickname || !number) {
          alert('Please enter both nickname and student number.');
          return;
      }

      this.studentInfo = { nickname, number, homeroom, teacherCode };

      const total = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length;
      const completed = this.shadowRoot.querySelectorAll(".tj-card.completed").length;
      const pct = Math.round((completed / total) * 100) || 0;
      const timestamp = new Date().toLocaleString();

      let emoji = '🏆';
      if (pct < 50) emoji = '💪';
      else if (pct < 80) emoji = '⭐';

      const titleText = this.shadowRoot.getElementById("pronunciationTitle").textContent || 'Pronunciation Practice';

      const reportHtml = `
          <div class="rc-header">
              <div class="rc-icon">📄</div>
              <div class="rc-title">${titleText}</div>
              <div class="rc-subtitle">Report Card</div>
          </div>
          <div class="rc-student">
              <span class="rc-label">Student</span>
              <span class="rc-value">${nickname} <span class="rc-number">(${number}) ${homeroom ? `- ${homeroom}` : ''}</span></span>
          </div>
          <div class="rc-score-row">
              <div class="rc-score-circle">
                  <div class="rc-score-val">${completed}/${total}</div>
                  <div class="rc-score-pct">${pct}%</div>
              </div>
              <div class="rc-score-label">${emoji} ${pct >= 80 ? 'Excellent!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!'}</div>
          </div>
          <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${pct}%"></div></div>
          <div class="rc-details">
              <div class="rc-detail-row"><span>Total Completed</span><span>${completed} / ${total} activities</span></div>
              <div class="rc-detail-row"><span>Completed On</span><span>${timestamp}</span></div>
          </div>
          <div style="margin-top: 16px; padding: 12px; background: var(--tj-bg-alt); border-radius: 8px; border: 1px dashed var(--tj-border-main); text-align: left;">
              <p style="margin: 0 0 8px 0; font-size: 0.85em; color: var(--tj-text-muted); font-weight: 600; text-transform: uppercase;">Official Submission</p>
              <input type="text" id="report-teacher-code" placeholder="Enter Teacher Code" style="width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid var(--tj-border-main); border-radius: 6px; font-size: 0.9em; margin-bottom: 4px;" value="${teacherCode}">
              <p style="margin: 4px 0 0 0; font-size: 0.8em; color: var(--tj-text-muted);">Enter the teacher code to submit, or take a screenshot of this page.</p>
          </div>
      `;

      const initialForm = this.shadowRoot.getElementById('initial-form');
      const reportArea = this.shadowRoot.getElementById('report-area');
      const submitActions = this.shadowRoot.getElementById('submit-actions');
      
      if (initialForm) initialForm.style.display = 'none';
      if (reportArea) {
          reportArea.style.display = 'block';
          reportArea.innerHTML = reportHtml;

          // Display individual recordings for spot checking
          if (this.recordings.size > 0) {
            const recordingsSection = document.createElement('div');
            recordingsSection.classList.add('recordings-section');
            recordingsSection.style.marginTop = '20px';
            recordingsSection.style.textAlign = 'left';

            const sectionTitle = document.createElement('h4');
            sectionTitle.style.display = 'flex';
            sectionTitle.style.alignItems = 'center';
            sectionTitle.style.gap = '8px';
            sectionTitle.style.margin = '0 0 12px 0';
            sectionTitle.style.color = 'var(--tj-text-main)';
            sectionTitle.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--tj-primary)"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg> Student Recordings`;
            recordingsSection.appendChild(sectionTitle);

            const recordingsList = document.createElement('div');
            recordingsList.classList.add('recordings-list');
            recordingsList.style.display = 'flex';
            recordingsList.style.flexDirection = 'column';
            recordingsList.style.gap = '8px';

            // Sort recordings by index
            const sortedIndices = Array.from(this.recordings.keys()).sort((a, b) => a - b);

            sortedIndices.forEach(idx => {
              // Find the target word for this activity
              const actCard = this.shadowRoot.getElementById(`act-${idx}`);
              let targetText = "Recording " + (parseInt(idx) + 1);
              if (actCard) {
                  const targetWordEl = actCard.querySelector('.lr-target-word');
                  if (targetWordEl) targetText = targetWordEl.textContent;
              }

              const item = document.createElement('div');
              item.classList.add('recording-item');
              item.style.display = 'flex';
              item.style.alignItems = 'center';
              item.style.gap = '12px';
              item.style.padding = '8px';
              item.style.background = 'var(--tj-bg-main)';
              item.style.border = '1px solid var(--tj-border-main)';
              item.style.borderRadius = '8px';

              const playBtn = document.createElement('button');
              playBtn.classList.add('tj-icon-btn', 'recording-play-btn');
              playBtn.style.width = '32px';
              playBtn.style.height = '32px';
              playBtn.style.padding = '0';
              playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
              playBtn.title = "Play Recording";
              playBtn.onclick = () => this._playReportRecording(idx, playBtn);

              const text = document.createElement('div');
              text.classList.add('recording-text');
              text.style.fontSize = '0.9em';
              text.style.color = 'var(--tj-text-main)';
              text.textContent = targetText;

              item.appendChild(playBtn);
              item.appendChild(text);
              recordingsList.appendChild(item);
            });

            recordingsSection.appendChild(recordingsList);
            reportArea.appendChild(recordingsSection);
          }
      }
      if (submitActions) submitActions.style.display = 'block';
  }

  _playReportRecording(index, btn) {
    const audioUrl = this.recordings.get(index);
    if (!audioUrl) return;

    // Stop currently playing audio if any
    if (this._currentPlayingAudio) {
      this._currentPlayingAudio.pause();
      this.shadowRoot.querySelectorAll('.recording-play-btn.playing').forEach(b => {
        b.classList.remove('playing');
        b.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      });
      // If clicking the same button that's playing, just stop it
      if (this._currentPlayingBtn === btn) {
        this._currentPlayingAudio = null;
        this._currentPlayingBtn = null;
        return;
      }
    }

    const audio = new Audio(audioUrl);
    this._currentPlayingAudio = audio;
    this._currentPlayingBtn = btn;

    audio.onplay = () => {
      btn.classList.add("playing");
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="6" width="12" height="12"></rect></svg>`;
    };

    audio.onended = () => {
      btn.classList.remove("playing");
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      this._currentPlayingAudio = null;
      this._currentPlayingBtn = null;
    };

    audio.play().catch((e) => {
      console.error("Error playing recording:", e);
      btn.classList.remove("playing");
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    });
  }

  async _submitScore() {
      const reportTeacherCodeInput = this.shadowRoot.getElementById('report-teacher-code');
      const currentTeacherCode = reportTeacherCodeInput ? reportTeacherCodeInput.value.trim() : this.studentInfo.teacherCode;
      
      const isTeacherCodeCorrect = currentTeacherCode === '6767';

      if (!isTeacherCodeCorrect) {
          alert('Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.');
          return;
      }

      if (this.isSubmitting) return;

      const submitBtn = this.shadowRoot.getElementById('submit-score-btn');
      const originalText = submitBtn.textContent;
      
      this.isSubmitting = true;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      const total = this.shadowRoot.querySelectorAll(".tj-card[id^='act-']").length;
      const completed = this.shadowRoot.querySelectorAll(".tj-card.completed").length;
      const titleText = this.shadowRoot.getElementById("pronunciationTitle").textContent || 'Pronunciation Practice';

      const payload = {
          nickname: this.studentInfo.nickname,
          homeroom: this.studentInfo.homeroom || '',
          studentId: this.studentInfo.number,
          quizName: 'Pron- ' + titleText,
          score: completed,
          total: total
      };

      try {
          // Send request with no-cors to avoid CORS issues from Google Apps Script if not properly configured on their end
          await fetch(this.submissionUrl, {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload)
          });
          
          alert('Score successfully submitted!');
          submitBtn.textContent = 'Submitted ✓';
          submitBtn.style.background = 'var(--tj-text-muted)';
      } catch (err) {
          console.error('Error submitting score:', err);
          alert('There was an error submitting your score. Please try again.');
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          this.isSubmitting = false;
      }
  }

  playTTS(text, button) {
    if (!this.synth || !this._shouldShowAudioControls()) return Promise.resolve();

    return new Promise((resolve, reject) => {
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = this.language;
      utterance.rate = 0.9; // Slightly slower for better pronunciation clarity

      // Try to find selected voice or best fallback
      const voices = this.synth.getVoices();
      let voice = voices.find((v) => v.name === this.selectedVoiceName);
      if (!voice) {
        voice = this._getBestVoice(this.language);
      }
      if (voice) utterance.voice = voice;

      utterance.onstart = () => {
        button.classList.add("playing");
        this.isPlaying = true;
      };

      utterance.onend = () => {
        button.classList.remove("playing");
        this.isPlaying = false;
        resolve();
      };

      utterance.onerror = (e) => {
        button.classList.remove("playing");
        this.isPlaying = false;
        reject(e);
      };

      this.synth.speak(utterance);
    });
  }

  // TTS Guide 1.3 Methods
  _getBestVoice(lang) {
    return getBestVoice(this.synth, lang);
  }

  _showVoiceOverlay() {
    const overlay = this.shadowRoot.getElementById("voice-overlay");
    if (overlay) {
      overlay.style.display = "flex";
      this._updateVoiceList();
    }
  }

  _hideVoiceOverlay() {
    const overlay = this.shadowRoot.getElementById("voice-overlay");
    if (overlay) overlay.style.display = "none";
  }

  _updateVoiceList() {
    const voiceList = this.shadowRoot.getElementById("voice-list");
    if (!voiceList) return;

    const voices = this.synth.getVoices();
    const langPrefix = this.language.split(/[-_]/)[0].toLowerCase();
    const langVoices = voices.filter(
      (v) => v.lang.split(/[-_]/)[0].toLowerCase() === langPrefix,
    );
    const bestVoice = this._getBestVoice(this.language);

    voiceList.innerHTML = "";
    langVoices.sort((a, b) => a.name.localeCompare(b.name));

    langVoices.forEach((voice) => {
      const btn = document.createElement("button");
      btn.classList.add("voice-option-btn");
      if (
        this.selectedVoiceName === voice.name ||
        (!this.selectedVoiceName && bestVoice && voice.name === bestVoice.name)
      ) {
        btn.classList.add("active");
      }

      btn.innerHTML = `<span>${voice.name}</span>`;
      if (bestVoice && voice.name === bestVoice.name) {
        btn.innerHTML += `<span class="badge">Best</span>`;
      }

      btn.onclick = () => {
        this.selectedVoiceName = voice.name;
        localStorage.setItem("tj-pronunciation-voice", voice.name);
        this._updateVoiceList();
        this._hideVoiceOverlay();
      };
      voiceList.appendChild(btn);
    });
  }

  _shouldShowAudioControls() {
    return shouldShowAudioControls(this.synth);
  }

  _getAndroidIntentLink() {
    return getAndroidIntentLink();
  }

  checkBrowserSupport() {
    if (!this._shouldShowAudioControls()) {
      const overlay = this.shadowRoot.getElementById("browser-prompt-overlay");
      if (overlay) {
        overlay.classList.add("active");

        const androidLink = this._getAndroidIntentLink();
        const actionBtn = this.shadowRoot.getElementById("browser-action-btn");

        if (androidLink) {
          actionBtn.href = androidLink;
          actionBtn.textContent = "Open in Chrome";
        } else {
          // Likely iOS in-app browser or no TTS support
          actionBtn.onclick = (e) => {
            if (!actionBtn.href || actionBtn.href === "javascript:void(0)") {
              e.preventDefault();
              alert(
                "Please open this page in Safari or Chrome for the best experience with audio features.",
              );
            }
          };
          actionBtn.textContent = "Use Safari / Chrome";
        }
      }
    }
  }

  async playMinimalPairSequence(options, answer, button) {
    if (button.classList.contains("playing")) return;

    const mpContainer = button.closest(".mp-container");
    const optionBtns = mpContainer.querySelectorAll(".mp-option-btn");

    try {
      // Step 1: Read words 2 times with short pauses and highlighting
      for (let i = 0; i < 2; i++) {
        for (const opt of options) {
          // Highlight the button for the current option
          const targetBtn = Array.from(optionBtns).find(
            (b) => b.textContent.trim() === opt.trim(),
          );
          if (targetBtn) targetBtn.classList.add("highlight");

          await this.playTTS(opt, button);

          if (targetBtn) targetBtn.classList.remove("highlight");
          await new Promise((r) => setTimeout(r, 600)); // Pause between words
        }
        await new Promise((r) => setTimeout(r, 400)); // Extra pause between cycles
      }

      // Step 2: Read one of the words (the answer) - NO highlighting
      await new Promise((r) => setTimeout(r, 500)); // Pause before final word
      await this.playTTS(answer, button);
    } catch (err) {
      console.error("Audio sequence error:", err);
      button.classList.remove("playing");
      // Cleanup highlights on error
      optionBtns.forEach((b) => b.classList.remove("highlight"));
    }
  }

  async toggleRecording(btn, index) {
    if (btn.classList.contains("recording")) {
      // Stop recording
      if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
        this.mediaRecorder.stop();
      }
      btn.classList.remove("recording");
    } else {
      // Start recording
      try {
        this.audioChunks = [];
        this.mediaRecorder = await startAudioRecording(
          (event) => {
            if (event.data.size > 0) {
              this.audioChunks.push(event.data);
            }
          },
          (recordingMimeType) => {
            const audioBlob = new Blob(this.audioChunks, { type: recordingMimeType });
            const audioUrl = URL.createObjectURL(audioBlob);

            // Revoke old URL if it exists
            if (this.recordings.has(index)) {
              URL.revokeObjectURL(this.recordings.get(index));
            }

            this.recordings.set(index, audioUrl);

            // Enable playback button
            const playbackBtn = this.shadowRoot.querySelector(
              `#playback-${index}`,
            );
            if (playbackBtn) {
              playbackBtn.classList.add("ready");
              playbackBtn.disabled = false;
              playbackBtn.style.opacity = "1";
              playbackBtn.style.cursor = "pointer";
            }
            this.audioChunks = null;
          }
        );

        btn.classList.add("recording");
      } catch (err) {
        console.error("Error accessing microphone:", err);
        alert(
          "Could not access microphone. Please ensure you have granted permission.",
        );
      }
    }
  }

  playRecording(index, btn) {
    const audioUrl = this.recordings.get(index);
    if (!audioUrl) return;

    const audio = new Audio(audioUrl);

    audio.onplay = () => {
      btn.classList.add("playing");
    };

    audio.onended = () => {
      btn.classList.remove("playing");
      // Mark activity as completed when fully played back
      const card = btn.closest(".tj-card");
      if (card && !card.classList.contains("completed")) {
          card.classList.add("completed");
          this.updateProgress();
      }
    };

    audio.play().catch((e) => {
      console.error("Error playing recording:", e);
      btn.classList.remove("playing");
    });
  }
}

customElements.define("tj-pronunciation", TjPronunciation);
