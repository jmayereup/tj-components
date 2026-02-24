import { c as d } from "./chunks/tj-config-Co8tO1UZ.js";
class l extends HTMLElement {
  constructor() {
    var e;
    super(), this.attachShadow({ mode: "open" }), this.questions = [], this.currentPool = [], this.currentIndex = 0, this.hearts = 0, this.maxHearts = 3, this.questionsPerRound = 5, this.score = 0, this.bestScore = 0, this.grammarHint = { summary: "", content: "" }, this.studentInfo = { nickname: "", number: "", homeroom: "" }, this.title = "Grammar Practice", this.gameState = "hint", this.isHintOpen = !1, this.isAnswered = !1, this.isCorrect = !1, this.answerFeedback = "", this.answerExplanation = "", this.userAnswer = "", this.scrambledWords = [], this.selectedScrambleIndices = [], this.submissionUrl = (e = d) == null ? void 0 : e.submissionUrl, this.isSubmitting = !1;
  }
  connectedCallback() {
    if (this.maxHearts = parseInt(this.getAttribute("hearts")) || 3, this.questionsPerRound = parseInt(this.getAttribute("round-size")) || 5, this.hearts = this.maxHearts, typeof window.marked > "u") {
      const e = document.createElement("script");
      e.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js", e.async = !0, document.head.appendChild(e);
    }
    requestAnimationFrame(() => {
      this.loadData(), this.ensureMarked(), this.render();
    });
  }
  ensureMarked() {
    if (!window.marked) {
      const e = document.createElement("script");
      e.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js", e.onload = () => this.render(), document.head.appendChild(e);
    }
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
      else this.hasAttribute("config") ? e = this.getAttribute("config") : this.querySelector('script[type="application/json"]') ? e = this.querySelector('script[type="application/json"]').textContent.trim() : e = this.textContent.trim();
      if (!e) return;
      const r = e.replace(/"((?:\\.|[^"\\])*)"]/gs, (s, i) => '"' + i.replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"');
      let t = JSON.parse(r);
      this._processParsedData(t), this.innerHTML = "";
    } catch (e) {
      console.error("Failed to parse JSON for grammar-hearts", e), this.shadowRoot.innerHTML = '<div class="error-msg">Error loading grammar data. Please ensure your JSON is correctly formatted.</div>';
    }
  }
  _processParsedData(e) {
    Array.isArray(e) && (e = e[0]), e.title && (this.title = e.title), e.hint && (this.grammarHint = e.hint), e.questions && Array.isArray(e.questions) && (this.questions = e.questions), this.prepRound();
  }
  // Simple Markdown-to-HTML helper
  parseMD(e) {
    return typeof window.marked < "u" ? window.marked.parse(e) : e.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>");
  }
  prepRound() {
    const e = [...this.questions].sort(() => 0.5 - Math.random());
    this.currentPool = e.slice(0, Math.min(this.questionsPerRound, this.questions.length)), this.currentIndex = 0, this.hearts = this.maxHearts, this.score = 0, this.gameState = "hint", this.resetQuestionState();
  }
  resetQuestionState() {
    this.isAnswered = !1, this.isCorrect = !1, this.answerFeedback = "", this.answerExplanation = "", this.userAnswer = "", this.selectedScrambleIndices = [], this.scrambledWords = [];
  }
  _normalizeText(e) {
    return typeof e != "string" ? String(e || "") : e.trim().toLowerCase().replace(/['']/g, "'").replace(/[""]/g, '"').replace(/\s+/g, " ");
  }
  handleAnswer(e) {
    if (this.isAnswered) return;
    const r = this.currentPool[this.currentIndex];
    let t = !1;
    if (r.type === "multiple-choice")
      t = e === r.correctIndex;
    else if (r.type === "fill-in-the-blank") {
      const s = this._normalizeText(e);
      Array.isArray(r.answer) ? t = r.answer.some((i) => this._normalizeText(i) === s) : typeof r.answer == "string" && (t = s === this._normalizeText(r.answer));
    } else if (r.type === "scramble") {
      const s = this._normalizeText(r.sentence);
      t = this._normalizeText(e) === s;
    }
    if (this.isAnswered = !0, this.isCorrect = t, t)
      this.score++, this.answerFeedback = "Correct!", this.answerExplanation = r.explanation || "Great job!";
    else {
      this.hearts--, this.answerFeedback = "Oops!", this.answerExplanation = r.explanation || "Not quite right.";
      const s = this.shadowRoot.querySelector(".card");
      s && (s.classList.add("shake"), setTimeout(() => s.classList.remove("shake"), 500));
    }
    this.render();
  }
  nextQuestion() {
    if (this.hearts <= 0) {
      this.gameState = "gameover", this.render();
      return;
    }
    this.currentIndex++, this.currentIndex >= this.currentPool.length ? this.gameState = "form" : this.resetQuestionState(), this.render();
  }
  startPlaying() {
    this.gameState = "playing", this.render();
  }
  restart() {
    this.prepRound(), this.gameState = "playing", this.render();
  }
  showReport() {
    var s, i, o, n, a, c;
    const e = ((i = (s = this.shadowRoot.querySelector("#nickname")) == null ? void 0 : s.value) == null ? void 0 : i.trim()) || "", r = ((n = (o = this.shadowRoot.querySelector("#student-number")) == null ? void 0 : o.value) == null ? void 0 : n.trim()) || "", t = ((c = (a = this.shadowRoot.querySelector("#homeroom")) == null ? void 0 : a.value) == null ? void 0 : c.trim()) || "";
    if (!e || !r) {
      alert("Please enter both nickname and student number.");
      return;
    }
    this.studentInfo = { nickname: e, number: r, homeroom: t }, this.score > this.bestScore && (this.bestScore = this.score), this.gameState = "report", this.render();
  }
  async _submitScore() {
    const e = this.shadowRoot.getElementById("report-teacher-code");
    if ((e ? e.value.trim() : "") !== "6767") {
      alert("Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.");
      return;
    }
    if (this.isSubmitting) return;
    const t = this.shadowRoot.getElementById("submit-score-btn"), s = t ? t.textContent : "Submit";
    this.isSubmitting = !0, t && (t.textContent = "Submitting...", t.disabled = !0);
    const i = {
      nickname: this.studentInfo.nickname,
      homeroom: this.studentInfo.homeroom || "",
      studentId: this.studentInfo.number,
      quizName: "Grammar- " + this.title,
      score: this.bestScore,
      total: this.questionsPerRound
    };
    try {
      await fetch(this.submissionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(i)
      }), alert("Score successfully submitted!"), t && (t.textContent = "Submitted ✓", t.style.background = "#64748b");
    } catch (o) {
      console.error("Error submitting score:", o), alert("There was an error submitting your score. Please try again."), t && (t.textContent = s, t.disabled = !1), this.isSubmitting = !1;
    }
  }
  getInstruction(e) {
    if (e.instruction) return e.instruction;
    switch (e.type) {
      case "multiple-choice":
        return "Choose the correct form:";
      case "fill-in-the-blank":
        return "Fill in the blank:";
      case "scramble":
        return "Unscramble the sentence:";
      default:
        return "Practice:";
    }
  }
  render() {
    const e = `
      <style>
        :host {
          display: block;
          font-family: 'Outfit', 'Inter', sans-serif;
          margin: 2em auto;
          color: #1e293b;
        }

        .container {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 2em;
          padding: 2em;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2em;
        }

        .hearts {
          display: flex;
          gap: 0.3em;
        }

        .heart {
          font-size: 1.5em;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .heart.lost {
          filter: grayscale(1) opacity(0.3);
          transform: scale(0.8);
        }

        .progress-dots {
          display: flex;
          gap: 0.5em;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e2e8f0;
        }

        .dot.active {
          background: #3b82f6;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .dot.completed {
          background: #10b981;
        }

        .card {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }

        h2 {
          margin: 0 0 0.5em 0;
          font-size: 1.5em;
          background: linear-gradient(135deg, #1e293b, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .instruction {
          font-size: 0.9em;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 0.5em;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hint-content {
          line-height: 1.6;
          color: #475569;
          margin-bottom: 2em;
        }

        .btn {
          padding: 1em 2em;
          border-radius: 1em;
          border: none;
          background: #3b82f6;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2);
        }

        .btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
        }

        .btn:active {
          transform: translateY(0);
        }

        .option-btn {
          display: block;
          width: 100%;
          padding: 1em;
          margin-bottom: 0.8em;
          text-align: left;
          background: white;
          border: 2px solid #f1f5f9;
          border-radius: 1em;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 1em;
          color: #334155;
        }

        .option-btn:hover:not(:disabled) {
          border-color: #3b82f6;
          background: #f8fafc;
        }

        .option-btn:disabled {
          cursor: default;
          opacity: 0.7;
        }

        .option-btn.success {
          background: #ecfdf5;
          border-color: #10b981;
          color: #065f46;
        }

        .option-btn.error {
          background: #fef2f2;
          border-color: #ef4444;
          color: #991b1b;
        }

        .scramble-pool, .scramble-target {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em;
          min-height: 3em;
          padding: 1em;
          background: #f8fafc;
          border-radius: 1em;
          margin-bottom: 1em;
          border: 2px dashed #e2e8f0;
        }

        .scramble-token {
          padding: 0.5em 1em;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.6em;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .scramble-token:hover {
          transform: scale(1.05);
          border-color: #3b82f6;
        }

        .input-field {
          width: 100%;
          padding: 1em;
          border: 2px solid #e2e8f0;
          border-radius: 1em;
          font-size: 1em;
          margin-bottom: 1.5em;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.2s;
        }

        .input-field:focus {
          border-color: #3b82f6;
        }

        .error-msg {
          color: #ef4444;
          font-weight: 600;
          text-align: center;
          margin-top: 1em;
        }

        .hint-collapsible {
          margin-top: 1.5em;
          border: 1px solid #e2e8f0;
          border-radius: 1em;
          overflow: hidden;
          background: rgba(248, 250, 252, 0.5);
          transition: all 0.3s ease;
        }

        .hint-toggle {
          width: 100%;
          padding: 1em;
          background: #f1f5f9;
          border: none;
          text-align: left;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.2s;
        }

        .hint-toggle:hover {
          background: #e2e8f0;
        }

        .hint-toggle-icon {
          transition: transform 0.3s;
        }

        .hint-toggle.open .hint-toggle-icon {
          transform: rotate(180deg);
        }

        .hint-drawer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s;
          padding: 0 1em;
        }

        .hint-drawer.open {
          max-height: 500px;
          padding: 1em;
          border-top: 1px solid #e2e8f0;
        }
        .feedback-box {
          margin-top: 1.5em;
          padding: 1.25em;
          border-radius: 1em;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .feedback-box.success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .feedback-box.error {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .feedback-title {
          font-weight: 800;
          font-size: 1.1em;
          margin-bottom: 0.25em;
        }

        .success .feedback-title { color: #166534; }
        .error .feedback-title { color: #991b1b; }

        .feedback-explanation {
          font-size: 0.95em;
          line-height: 1.5;
          color: #475569;
        }

        .next-btn {
          margin-top: 1.5em;
          width: 100%;
        }

        .score-display {
          font-weight: 700;
          color: #3b82f6;
        }

        /* Form/Report styles */
        .form-card {
          text-align: center;
          padding: 1em 0;
        }
        .form-card h2 {
          margin-bottom: 0.5em;
        }
        .form-input-group {
          margin-bottom: 1em;
          text-align: left;
        }
        .form-label {
          display: block;
          font-size: 0.8em;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.4em;
        }
        .form-field {
          width: 100%;
          padding: 0.9em;
          border: 2px solid #e2e8f0;
          border-radius: 0.8em;
          font-size: 1em;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-field:focus { border-color: #3b82f6; }

        /* Report card */
        .report-card {
          text-align: center;
        }
        .rc-header { margin-bottom: 1.5em; }
        .rc-icon { font-size: 2.5em; margin-bottom: 0.25em; }
        .rc-title {
          font-size: 1.2em;
          font-weight: 700;
          color: #1e293b;
          background: none;
          -webkit-text-fill-color: initial;
        }
        .rc-subtitle {
          font-size: 0.85em;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .rc-student {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8fafc;
          border-radius: 0.8em;
          padding: 0.8em 1em;
          margin-bottom: 1em;
          font-size: 0.9em;
          border: 1px solid #e2e8f0;
        }
        .rc-label { color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 0.8em; }
        .rc-value { color: #1e293b; font-weight: 600; }
        .rc-number { color: #94a3b8; font-size: 0.9em; }
        .best-score-highlight {
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.4);
          border-radius: 0.7em;
          padding: 0.6em 1em;
          font-size: 0.9em;
          color: #d97706;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1em;
        }
        .rc-score-row {
          display: flex;
          align-items: center;
          gap: 1.5em;
          margin-bottom: 1em;
          justify-content: center;
        }
        .rc-score-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 20px rgba(59,130,246,0.3);
        }
        .rc-score-val {
          font-size: 1.6em;
          font-weight: 900;
          color: white;
          line-height: 1;
        }
        .rc-score-denom {
          font-size: 0.75em;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
        }
        .rc-score-label {
          font-size: 1em;
          font-weight: 700;
          color: #1e293b;
          text-align: left;
        }
        .rc-bar-track {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 1em;
        }
        .rc-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          border-radius: 4px;
          transition: width 0.5s ease;
        }
        .rc-details {
          background: #f8fafc;
          border-radius: 0.8em;
          padding: 1em;
          margin-bottom: 1em;
          border: 1px solid #e2e8f0;
        }
        .rc-detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85em;
          color: #64748b;
          padding: 0.3em 0;
        }
        .rc-detail-row span:last-child { color: #1e293b; font-weight: 600; }
        .rc-submission-box {
          margin-top: 1em;
          padding: 1em;
          background: #f8fafc;
          border-radius: 0.8em;
          border: 1px dashed #cbd5e1;
          text-align: left;
        }
        .rc-submission-box p {
          margin: 0 0 8px 0;
          font-size: 0.8em;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .rc-teacher-input {
          width: 100%;
          box-sizing: border-box;
          padding: 0.7em;
          border: 1px solid #cbd5e1;
          border-radius: 0.5em;
          font-size: 0.9em;
          margin-bottom: 4px;
          outline: none;
          transition: border-color 0.2s;
        }
        .rc-teacher-input:focus { border-color: #3b82f6; }
        .rc-helper-text {
          margin: 4px 0 0 0;
          font-size: 0.75em;
          color: #94a3b8;
        }
        .rc-submit-btn {
          margin-top: 1em;
          width: 100%;
          padding: 0.9em;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 0.8em;
          font-weight: 800;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.2s;
        }
        .rc-submit-btn:hover { background: #2563eb; }
        .rc-submit-btn:disabled { opacity: 0.6; cursor: default; }
        .btn-outline {
          display: inline-block;
          margin-top: 1em;
          padding: 0.8em 1.5em;
          background: transparent;
          border: 2px solid #3b82f6;
          color: #3b82f6;
          border-radius: 0.8em;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-outline:hover { background: #f0f7ff; }
      </style>
    `;
    let r = "";
    if (this.gameState === "hint")
      r = `
        <div class="card">
          <h2>Grammar Focus: ${this.grammarHint.summary}</h2>
          <div class="hint-content">${this.parseMD(this.grammarHint.content)}</div>
          <button class="btn" onclick="this.getRootNode().host.startPlaying()">Start Game!</button>
        </div>
      `;
    else if (this.gameState === "playing") {
      const t = this.currentPool[this.currentIndex];
      r = `
        <div class="header">
          <div style="font-weight: 600; color: #64748b;">
            Question: ${this.currentIndex + 1} / ${this.currentPool.length}
          </div>
          <div class="score-display">Score: ${this.score}</div>
          <div class="hearts">
            ${Array.from({ length: this.maxHearts }).map((s, i) => `
              <span class="heart ${i < this.maxHearts - this.hearts ? "lost" : ""}">❤️</span>
            `).join("")}
          </div>
        </div>

        <div class="card ${this.isAnswered ? "answered" : ""}">
          <div class="instruction">${this.getInstruction(t)}</div>
          ${this.renderMainText(t)}
          ${this.renderQuestion(t)}
          
          ${this.isAnswered ? `
            <div class="feedback-box ${this.isCorrect ? "success" : "error"}">
              <div class="feedback-title">${this.answerFeedback}</div>
              <div class="feedback-explanation">${this.parseMD(this.answerExplanation)}</div>
            </div>
            <button class="btn next-btn" onclick="this.getRootNode().host.nextQuestion()">
              ${this.currentIndex === this.currentPool.length - 1 ? "Finish" : "Next Question"}
            </button>
          ` : ""}
        </div>
        
        <div class="hint-collapsible">
          <button class="hint-toggle ${this.isHintOpen ? "open" : ""}" onclick="this.getRootNode().host.toggleHint()">
            <span>💡 Grammar Guide</span>
            <span class="hint-toggle-icon">▼</span>
          </button>
          <div class="hint-drawer ${this.isHintOpen ? "open" : ""}">
            <div class="hint-content" style="margin-bottom: 0;">
              ${this.parseMD(this.grammarHint.content)}
            </div>
          </div>
        </div>
      `;
    } else if (this.gameState === "gameover")
      r = `
        <div class="card" style="text-align: center;">
          <h2 style="color: #ef4444; background: none; -webkit-text-fill-color: initial;">Out of Hearts!</h2>
          <p>Don't worry! Practice makes perfect. Try again with new questions.</p>
          <button class="btn" onclick="this.getRootNode().host.restart()">Try Again</button>
        </div>
      `;
    else if (this.gameState === "form")
      r = `
        <div class="form-card">
          <h2>Great Job! 🎉</h2>
          <p>You've finished the round with a score of <strong>${this.score} / ${this.currentPool.length}</strong>.</p>
          <p>Enter your details to generate your report card.</p>
          <div class="form-input-group">
            <label class="form-label" for="nickname">Nickname</label>
            <input type="text" id="nickname" class="form-field" placeholder="e.g. Jake" value="${this.studentInfo.nickname}">
          </div>
          <div class="form-input-group">
            <label class="form-label" for="student-number">Student Number</label>
            <input type="text" id="student-number" class="form-field" placeholder="e.g. 01" value="${this.studentInfo.number}">
          </div>
          <div class="form-input-group">
            <label class="form-label" for="homeroom">Homeroom</label>
            <input type="text" id="homeroom" class="form-field" placeholder="e.g. 5A" value="${this.studentInfo.homeroom}">
          </div>
          <button class="btn" onclick="this.getRootNode().host.showReport()">Generate Report</button>
        </div>
      `;
    else if (this.gameState === "report") {
      const t = this.currentPool.length, s = Math.round(this.bestScore / t * 100) || 0, i = (/* @__PURE__ */ new Date()).toLocaleString();
      let o = "🏆";
      s < 50 ? o = "💪" : s < 80 && (o = "⭐"), r = `
        <div class="report-card">
          <div class="rc-header">
            <div class="rc-icon">📄</div>
            <div class="rc-title">${this.title}</div>
            <div class="rc-subtitle">Report Card</div>
          </div>
          <div class="rc-student">
            <span class="rc-label">Student</span>
            <span class="rc-value">${this.studentInfo.nickname} <span class="rc-number">(${this.studentInfo.number})${this.studentInfo.homeroom ? ` — ${this.studentInfo.homeroom}` : ""}</span></span>
          </div>
          <div class="best-score-highlight">🏆 Best Score: ${this.bestScore} / ${t}</div>
          <div class="rc-score-row">
            <div class="rc-score-circle">
              <div class="rc-score-val">${this.bestScore}</div>
              <div class="rc-score-denom">/ ${t}</div>
            </div>
            <div class="rc-score-label">
              ${o} ${s >= 80 ? "Excellent!" : s >= 50 ? "Good effort!" : "Keep practicing!"}
            </div>
          </div>
          <div class="rc-bar-track"><div class="rc-bar-fill" style="width:${s}%"></div></div>
          <div class="rc-details">
            <div class="rc-detail-row"><span>Score</span><span>${this.bestScore} / ${t} (${s}%)</span></div>
            <div class="rc-detail-row"><span>Completed On</span><span>${i}</span></div>
          </div>
          <div class="rc-submission-box">
            <p>Official Submission</p>
            <input type="text" id="report-teacher-code" class="rc-teacher-input" placeholder="Enter Teacher Code">
            <p class="rc-helper-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
          </div>
          <button class="rc-submit-btn" id="submit-score-btn" onclick="this.getRootNode().host._submitScore()">Submit Score</button>
          <br>
          <button class="btn-outline" onclick="this.getRootNode().host.restart()">Play Again</button>
        </div>
      `;
    }
    this.shadowRoot.innerHTML = `
      ${e}
      <div class="container">
        ${r}
      </div>
    `, setTimeout(() => {
      const t = this.shadowRoot.querySelector("#fib-answer");
      t && t.focus();
    }, 0);
  }
  renderMainText(e) {
    let r = e.question || (e.type === "multiple-choice" || e.type === "scramble" ? "" : "___");
    if (e.type === "scramble" && this.isAnswered ? r = e.sentence : e.type !== "scramble" && (r = e.question || e.sentence || (e.type === "multiple-choice" ? "" : "___")), !r) return "";
    const t = e.type === "fill-in-the-blank" ? r.replace("___", '<span style="text-decoration: underline; font-weight: 700;">' + (this.isAnswered ? Array.isArray(e.answer) ? e.answer.join(" / ") : e.answer : "______") + "</span>") : r;
    return `<h2>${this.parseMD(t)}</h2>`;
  }
  renderQuestion(e) {
    if (!e) return '<div class="error-msg">Missing question data.</div>';
    if (e.type === "multiple-choice")
      return e.options.map((r, t) => {
        let s = "option-btn";
        return this.isAnswered && (t === e.correctIndex ? s += " success" : this.userAnswer === t && !this.isCorrect && (s += " error")), `<button class="${s}" ${this.isAnswered ? "disabled" : ""} onclick="this.getRootNode().host.handleMultipleChoice(${t})">${r}</button>`;
      }).join("");
    if (e.type === "fill-in-the-blank")
      return `
        <input type="text" class="input-field" id="fib-answer" placeholder="Type your answer here..." 
          ${this.isAnswered ? "readonly" : ""} 
          value="${this.isAnswered ? this.userAnswer : ""}"
          onkeydown="if(event.key === 'Enter') { 
            const host = this.getRootNode().host;
            if (host.isAnswered) host.nextQuestion();
            else host.handleAnswer(this.value);
          }">
        ${this.isAnswered ? "" : `<button class="btn" onclick="this.getRootNode().host.handleAnswer(this.parentElement.querySelector('#fib-answer').value)">Submit</button>`}
      `;
    if (e.type === "scramble") {
      const t = (e.sentence || e.question || "").trim().split(/\s+/);
      return this.scrambledWords.length === 0 && (this.scrambledWords = [...t].sort(() => 0.5 - Math.random())), `
        <div class="scramble-target" style="${this.isAnswered ? "border-style: solid; border-color: " + (this.isCorrect ? "#10b981" : "#ef4444") : ""}">
          ${this.selectedScrambleIndices.map((s, i) => `
            <button class="scramble-token" ${this.isAnswered ? "disabled" : ""} onclick="this.getRootNode().host.unpickWord(${i})">${this.scrambledWords[s]}</button>
          `).join("")}
        </div>
        ${this.isAnswered ? "" : `
          <div class="scramble-pool">
            ${this.scrambledWords.map((s, i) => this.selectedScrambleIndices.includes(i) ? "" : `<button class="scramble-token" onclick="this.getRootNode().host.pickWord(${i})">${s}</button>`).join("")}
          </div>
          <div style="display: flex; gap: 0.5em;">
              <button class="btn" style="flex: 1; background: #64748b;" onclick="this.getRootNode().host.resetScramble()">Reset</button>
              <button class="btn" style="flex: 2;" onclick="this.getRootNode().host.handleScrambleSubmit()">Check Answer</button>
          </div>
        `}
      `;
    }
    return "Unknown question type";
  }
  handleMultipleChoice(e) {
    this.userAnswer = e, this.handleAnswer(e);
  }
  handleScrambleSubmit() {
    const e = this.selectedScrambleIndices.map((r) => this.scrambledWords[r]).join(" ");
    this.userAnswer = e, this.handleAnswer(e);
  }
  pickWord(e) {
    this.selectedScrambleIndices.push(e), this.render();
  }
  unpickWord(e) {
    this.selectedScrambleIndices.splice(e, 1), this.render();
  }
  resetScramble() {
    this.selectedScrambleIndices = [], this.render();
  }
  toggleHint() {
    this.isHintOpen = !this.isHintOpen, this.render();
  }
}
customElements.get("tj-grammar-hearts") || customElements.define("tj-grammar-hearts", l);
customElements.get("grammar-hearts") || customElements.define("grammar-hearts", class extends l {
});
