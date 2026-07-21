import { t as e } from "./chunks/tj-config-C6oNQvLF.js";
//#region src/tj-grammar-hearts/index.js
var t = class extends HTMLElement {
	get code() {
		return this.getAttribute("code") === null ? e.teacherCode || "6767" : this.getAttribute("code");
	}
	set code(e) {
		e == null ? this.removeAttribute("code") : this.setAttribute("code", e);
	}
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this.questions = [], this.currentPool = [], this.currentIndex = 0, this.hearts = 0, this.maxHearts = 3, this.questionsPerRound = 5, this.score = 0, this.bestScore = 0, this.grammarHint = {
			summary: "",
			content: ""
		}, this.studentInfo = {
			nickname: "",
			number: "",
			homeroom: "",
			teacherCode: ""
		}, this.title = "Grammar Practice", this.formError = "", this.submissionError = "", this.gameState = "hint", this.isHintOpen = !1, this.isAnswered = !1, this.isCorrect = !1, this.answerFeedback = "", this.answerExplanation = "", this.userAnswer = "", this.scrambledWords = [], this.selectedScrambleIndices = [], this.submissionUrl = e?.submissionUrl || "https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec", this.isSubmitting = !1, this.continuesCount = 0, this.missedQuestions = [], this.isRetryPhase = !1, this.totalQuestionsInRound = 0;
	}
	connectedCallback() {
		if (this.maxHearts = parseInt(this.getAttribute("hearts")) || 3, this.questionsPerRound = parseInt(this.getAttribute("round-size")) || 5, this.hearts = this.maxHearts, window.marked === void 0) {
			let e = document.createElement("script");
			e.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js", e.async = !0, document.head.appendChild(e);
		}
		requestAnimationFrame(() => {
			this.loadData(), this.ensureMarked(), this.render();
		});
	}
	ensureMarked() {
		if (!window.marked) {
			let e = document.createElement("script");
			e.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js", e.onload = () => this.render(), document.head.appendChild(e);
		}
	}
	loadData() {
		try {
			let e = "";
			if (this.config) if (typeof this.config == "object") {
				this._processParsedData(this.config);
				return;
			} else e = String(this.config);
			else e = this.hasAttribute("config") ? this.getAttribute("config") : this.querySelector("script[type=\"application/json\"]") ? this.querySelector("script[type=\"application/json\"]").textContent.trim() : this.textContent.trim();
			if (!e) return;
			let t = e.replace(/"((?:\\.|[^"\\])*)"/gs, (e, t) => "\"" + t.replace(/\n/g, "\\n").replace(/\r/g, "\\r") + "\""), n = JSON.parse(t);
			this._processParsedData(n), this.innerHTML = "";
		} catch (e) {
			console.error("Failed to parse JSON for grammar-hearts", e), this.shadowRoot.innerHTML = "<div class=\"error-msg\">Error loading grammar data. Please ensure your JSON is correctly formatted.</div>";
		}
	}
	_processParsedData(e) {
		Array.isArray(e) && (e = e[0]), e.title && (this.title = e.title), e.hint && (this.grammarHint = e.hint), e.questions && Array.isArray(e.questions) && (this.questions = e.questions), this.prepRound();
	}
	parseMD(e) {
		return window.marked === void 0 ? e.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>") : window.marked.parse(e);
	}
	_getShuffleScore(e) {
		if (e.length === 0) return 0;
		let t = 1, n = 1, r = 0;
		for (let i = 1; i < e.length; i++) e[i].type === e[i - 1].type ? (n++, r++) : (n > t && (t = n), n = 1);
		return n > t && (t = n), t * 1e3 + r;
	}
	prepRound() {
		if (this.continuesCount = 0, this.missedQuestions = [], this.isRetryPhase = !1, this.totalQuestionsInRound = 0, !this.questions || this.questions.length === 0) {
			this.currentPool = [], this.currentIndex = 0, this.hearts = this.maxHearts, this.score = 0, this.gameState = "hint", this.resetQuestionState();
			return;
		}
		let e = {};
		for (let t of this.questions) e[t.type] || (e[t.type] = []), e[t.type].push(t);
		for (let t in e) e[t].sort(() => .5 - Math.random());
		let t = [], n = Object.keys(e), r = Math.min(this.questionsPerRound, this.questions.length), i = [...n].sort(() => .5 - Math.random()), a = {};
		for (let e of n) a[e] = 0;
		for (; t.length < r;) {
			let n = !1;
			for (let o of i) {
				if (t.length >= r) break;
				a[o] < e[o].length && (t.push(e[o][a[o]]), a[o]++, n = !0);
			}
			if (!n) break;
		}
		let o = [...t], s = this._getShuffleScore(o);
		for (let e = 0; e < 200; e++) {
			let e = [...t].sort(() => .5 - Math.random()), n = this._getShuffleScore(e);
			n < s && (s = n, o = e);
		}
		this.currentPool = o, this.totalQuestionsInRound = o ? o.length : 0, this.currentIndex = 0, this.hearts = this.maxHearts, this.score = 0, this.gameState = "hint", this.formError = "", this.submissionError = "", this.resetQuestionState();
	}
	resetQuestionState() {
		this.isAnswered = !1, this.isCorrect = !1, this.answerFeedback = "", this.answerExplanation = "", this.userAnswer = "", this.selectedScrambleIndices = [], this.scrambledWords = [];
	}
	_normalizeText(e) {
		return typeof e == "string" ? e.trim().toLowerCase().replace(/['’‘]/g, "'").replace(/["“”]/g, "\"").replace(/\s+/g, " ") : String(e || "");
	}
	handleAnswer(e) {
		if (this.isAnswered) return;
		this.userAnswer = e;
		let t = this.currentPool[this.currentIndex], n = !1;
		if (t.type === "multiple-choice") n = e === t.correctIndex;
		else if (t.type === "fill-in-the-blank") {
			let r = this._normalizeText(e);
			Array.isArray(t.answer) ? n = t.answer.some((e) => this._normalizeText(e) === r) : typeof t.answer == "string" && (n = r === this._normalizeText(t.answer));
		} else if (t.type === "scramble") {
			let r = this._normalizeText(t.sentence);
			n = this._normalizeText(e) === r;
		}
		if (this.isAnswered = !0, this.isCorrect = n, n) this.score++, this.answerFeedback = "Correct!", this.answerExplanation = t.explanation || "Great job!";
		else {
			this.hearts--, this.answerFeedback = "Oops!", this.answerExplanation = t.explanation || "Not quite right.", this.isRetryPhase || this.missedQuestions.some((e) => e === t) || this.missedQuestions.push(t);
			let e = this.shadowRoot.querySelector(".card");
			e && (e.classList.add("shake"), setTimeout(() => e.classList.remove("shake"), 500));
		}
		this.render();
	}
	nextQuestion() {
		if (this.hearts <= 0) {
			this.gameState = "gameover", this.render();
			return;
		}
		this.currentIndex++, this.currentIndex >= this.currentPool.length ? !this.isRetryPhase && this.missedQuestions.length > 0 ? (this.currentPool = [...this.missedQuestions], this.missedQuestions = [], this.currentIndex = 0, this.isRetryPhase = !0, this.resetQuestionState()) : this.gameState = "form" : this.resetQuestionState(), this.render();
	}
	startPlaying() {
		this.gameState = "playing", this.render();
	}
	restart() {
		this.prepRound(), this.gameState = "playing", this.render();
	}
	continuePlaying() {
		this.continuesCount = (this.continuesCount || 0) + 1, this.hearts = this.maxHearts, this.gameState = "playing", this.currentIndex++, this.currentIndex >= this.currentPool.length ? !this.isRetryPhase && this.missedQuestions.length > 0 ? (this.currentPool = [...this.missedQuestions], this.missedQuestions = [], this.currentIndex = 0, this.isRetryPhase = !0, this.resetQuestionState()) : this.gameState = "form" : this.resetQuestionState(), this.render();
	}
	getAdjustedScore() {
		let e = (this.continuesCount || 0) * this.maxHearts;
		return Math.max(0, this.score - e);
	}
	showReport() {
		let e = this.shadowRoot.querySelector("#nickname")?.value?.trim() || "", t = this.shadowRoot.querySelector("#student-number")?.value?.trim() || "", n = this.shadowRoot.querySelector("#homeroom")?.value?.trim() || "", r = this.shadowRoot.querySelector("#teacher-code")?.value?.trim() || "";
		if (!e || !t) {
			this.formError = "Please enter both nickname and student number.", this.render();
			return;
		}
		this.formError = "", this.studentInfo = {
			nickname: e,
			number: t,
			homeroom: n,
			teacherCode: r
		};
		let i = this.getAdjustedScore();
		i > this.bestScore && (this.bestScore = i), this.gameState = "report", this.render();
	}
	async _submitScore() {
		let e = this.shadowRoot.getElementById("report-teacher-code"), t = e ? e.value.trim() : this.studentInfo.teacherCode;
		if (this.studentInfo.teacherCode = t, t !== this.code) {
			this.submissionError = "Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.", this.render();
			return;
		}
		if (this.submissionError = "", this.render(), this.isSubmitting) return;
		let n = this.shadowRoot.getElementById("submit-score-btn"), r = n ? n.textContent : "Submit";
		this.isSubmitting = !0, n && (n.textContent = "Submitting...", n.disabled = !0);
		let i = {
			nickname: this.studentInfo.nickname,
			homeroom: this.studentInfo.homeroom || "",
			studentId: this.studentInfo.number,
			quizName: "Grammar- " + this.title,
			score: this.bestScore,
			total: this.totalQuestionsInRound,
			teacherCode: t
		};
		try {
			await fetch(this.submissionUrl, {
				method: "POST",
				mode: "no-cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(i)
			}), n && (n.textContent = "Submitted ✓", n.style.background = "green");
		} catch (e) {
			console.error("Error submitting score:", e), this.submissionError = "There was an error submitting your score. Please try again.", n && (n.textContent = r, n.disabled = !1), this.isSubmitting = !1, this.render();
		}
	}
	getInstruction(e) {
		if (!e) return "Practice:";
		if (e.instruction) return e.instruction;
		switch (e.type) {
			case "multiple-choice": return "Choose the correct form:";
			case "fill-in-the-blank": return "Fill in the blank:";
			case "scramble": return "Unscramble the sentence:";
			default: return "Practice:";
		}
	}
	render() {
		let e = "";
		if (this.gameState === "hint") e = `
        <div class="card">
          <h2>Grammar Focus: ${this.grammarHint.summary}</h2>
          <div class="hint-content">${this.parseMD(this.grammarHint.content)}</div>
          <button class="btn" onclick="this.getRootNode().host.startPlaying()">Start Game!</button>
        </div>
        <div class="version-text">v1.1</div>
      `;
		else if (this.gameState === "playing") {
			let t = this.currentPool[this.currentIndex], n = (this.currentIndex + 1) / this.currentPool.length * 100;
			e = `
        <div class="header">
          <div class="header-top-row">
            <div class="question-indicator">
              ${this.isRetryPhase ? "Retry Question" : "Question"}: <span>${this.currentIndex + 1} / ${this.currentPool.length}</span>
            </div>
            <div class="score-pill">
              Score: <span>${this.score} / ${this.totalQuestionsInRound}</span>
            </div>
            <div class="hearts">
              ${Array.from({ length: this.maxHearts }).map((e, t) => `
                <span class="heart ${t < this.maxHearts - this.hearts ? "lost" : ""}">❤️</span>
              `).join("")}
            </div>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${n}%"></div>
            </div>
          </div>
        </div>

        <div class="card ${this.isAnswered ? "answered" : ""}">
          <div class="instruction">
            ${this.getInstruction(t)}
            ${this.isRetryPhase ? "<span class=\"badge retry-badge\">⚠️ Prior Mistake</span>" : ""}
          </div>
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
        <div class="version-text">v1.1</div>
      `;
		} else if (this.gameState === "gameover") e = "\n        <div class=\"card\" style=\"text-align: center;\">\n          <h2 style=\"color: #ef4444; background: none; -webkit-text-fill-color: initial;\">Out of Hearts!</h2>\n          <p>Don't worry! Practice makes perfect. Try again with new questions, or continue playing this round for a lower score.</p>\n          <div style=\"display: flex; flex-direction: column; gap: 0.8em; align-items: center; margin-top: 1.5em;\">\n            <button class=\"btn\" style=\"width: 100%; max-width: 300px;\" onclick=\"this.getRootNode().host.continuePlaying()\">Continue Playing</button>\n            <button class=\"btn-outline\" style=\"width: 100%; max-width: 300px; margin-top: 0;\" onclick=\"this.getRootNode().host.restart()\">Try Again (New Round)</button>\n          </div>\n        </div>\n      ";
		else if (this.gameState === "form") e = `
        <div class="form-card">
          <h2>Great Job! 🎉</h2>
          <p>You've finished the round with a score of <strong>${this.getAdjustedScore()} / ${this.totalQuestionsInRound}</strong>.</p>
          ${this.continuesCount > 0 ? `
            <p style="font-size: 0.9em; color: #64748b; margin-top: -0.5em; margin-bottom: 1.5em;">
              ⚠️ Score includes a penalty of ${this.continuesCount * this.maxHearts} points for continuing after running out of hearts (Raw score: ${this.score}).
            </p>
          ` : ""}
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
            <input type="text" id="homeroom" class="form-field" placeholder="e.g. 6/1" value="${this.studentInfo.homeroom}">
          </div>
          <div class="form-input-group">
            <label class="form-label" for="teacher-code">Teacher Code (Optional)</label>
            <input type="text" id="teacher-code" class="form-field" placeholder="e.g. 1234" value="${this.studentInfo.teacherCode || ""}">
          </div>
          ${this.formError ? `<div class="error-msg" style="margin-bottom: 1em;">⚠️ ${this.formError}</div>` : ""}
          <button class="btn" onclick="this.getRootNode().host.showReport()">Generate Report</button>
        </div>
      `;
		else if (this.gameState === "report") {
			let t = this.totalQuestionsInRound, n = Math.round(this.bestScore / t * 100) || 0, r = (/* @__PURE__ */ new Date()).toLocaleString(), i = "🏆";
			n < 50 ? i = "💪" : n < 80 && (i = "⭐"), e = `
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
          ${this.continuesCount > 0 ? `
            <div class="best-score-highlight" style="background: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.2); color: #ef4444; margin-top: -0.5em;">
              ⚠️ Completed with continues (${this.continuesCount * this.maxHearts}-point penalty applied)
            </div>
          ` : ""}
          <div class="rc-score-row">
            <div class="rc-score-circle">
              <div class="rc-score-val">${this.bestScore}</div>
              <div class="rc-score-denom">/ ${t}</div>
            </div>
            <div class="rc-score-label">
              ${i} ${n >= 80 ? "Excellent!" : n >= 50 ? "Good effort!" : "Keep practicing!"}
            </div>
          </div>
          <div class="rc-bar-track"><div class="rc-bar-fill" style="width:${n}%"></div></div>
          <div class="rc-details">
            <div class="rc-detail-row"><span>Score</span><span>${this.bestScore} / ${t} (${n}%)</span></div>
            <div class="rc-detail-row"><span>Completed On</span><span>${r}</span></div>
          </div>
          <div class="rc-submission-box">
            <p>Official Submission</p>
            <input type="text" id="report-teacher-code" class="rc-teacher-input" placeholder="Enter Teacher Code" value="${this.studentInfo.teacherCode || ""}">
            <p class="rc-helper-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
            ${this.submissionError ? `<div class="error-msg" style="margin-top: 8px; text-align: left; font-size: 0.9em;">⚠️ ${this.submissionError}</div>` : ""}
          </div>
          <button class="rc-submit-btn" id="submit-score-btn" onclick="this.getRootNode().host._submitScore()">Submit Score</button>
          <br>
          <button class="btn-outline" onclick="this.getRootNode().host.restart()">Play Again</button>
        </div>
      `;
		}
		this.shadowRoot.innerHTML = `
      
      <style>
        :host {
          display: block;
          font-family: 'Outfit', 'Inter', sans-serif;
          margin: 2em auto;
          color: #1e293b;
          background: whitesmoke;
        }

        .container {
          background: white;
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
          flex-direction: column;
          gap: 1em;
          margin-bottom: 2em;
        }

        .header-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .question-indicator {
          font-weight: 700;
          color: #64748b;
          font-size: 0.95em;
          display: flex;
          align-items: center;
          gap: 0.4em;
        }

        .question-indicator span {
          color: #1e293b;
        }

        .score-pill {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.35em 0.8em;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.85em;
          border: 1px solid rgba(59, 130, 246, 0.2);
          display: flex;
          align-items: center;
          gap: 0.3em;
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.05);
        }

        .score-pill span {
          color: #1d4ed8;
        }

        .progress-bar-container {
          width: 100%;
          margin-top: 0.2em;
        }

        .progress-bar-track {
          height: 8px;
          background: #e2e8f0;
          border-radius: 9999px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          border-radius: 9999px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .badge {
          display: inline-block;
          padding: 0.2em 0.6em;
          font-size: 0.75em;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          border-radius: 0.5em;
          margin-left: 0.5em;
        }

        .retry-badge {
          background-color: #fef3c7;
          color: #d97706;
          border: 1px solid #fcd34d;
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

        .input-field.success {
          background: #ecfdf5;
          border-color: #10b981;
          color: #065f46;
        }

        .input-field.error {
          background: #fef2f2;
          border-color: #ef4444;
          color: #991b1b;
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

        .version-text {
          text-align: center;
          font-size: 0.75em;
          color: #64748b;
          margin-top: 1em;
          opacity: 0.9;
        }
      </style>
    
      <div class="container">
        ${e}
      </div>
    `, setTimeout(() => {
			let e = this.shadowRoot.querySelector("#fib-answer");
			e && e.focus();
		}, 0);
	}
	renderMainText(e) {
		let t = e.question || (e.type === "multiple-choice" || e.type === "scramble" ? "" : "___");
		if (e.type === "scramble" && this.isAnswered ? t = e.sentence : e.type !== "scramble" && (t = e.question || e.sentence || (e.type === "multiple-choice" ? "" : "___")), !t) return "";
		let n = e.type === "fill-in-the-blank" ? t.replace("___", "<span style=\"text-decoration: underline; font-weight: 700;\">" + (this.isAnswered ? Array.isArray(e.answer) ? e.answer.join(" / ") : e.answer : "______") + "</span>") : t;
		return `<h2>${this.parseMD(n)}</h2>`;
	}
	renderQuestion(e) {
		if (!e) return "<div class=\"error-msg\">Missing question data.</div>";
		if (e.type === "multiple-choice") return e.options.map((t, n) => {
			let r = "option-btn";
			return this.isAnswered && (n === e.correctIndex ? r += " success" : this.userAnswer === n && !this.isCorrect && (r += " error")), `<button class="${r}" ${this.isAnswered ? "disabled" : ""} onclick="this.getRootNode().host.handleMultipleChoice(${n})">${t}</button>`;
		}).join("");
		if (e.type === "fill-in-the-blank") return `
        <input type="text" class="input-field${this.isAnswered ? this.isCorrect ? " success" : " error" : ""}" id="fib-answer" placeholder="Type your answer here..." 
          ${this.isAnswered ? "readonly" : ""} 
          value="${this.isAnswered ? this.userAnswer : ""}"
          onkeydown="if(event.key === 'Enter') { 
            const host = this.getRootNode().host;
            if (host.isAnswered) host.nextQuestion();
            else host.handleAnswer(this.value);
          }">
        ${this.isAnswered ? "" : "<button class=\"btn\" onclick=\"this.getRootNode().host.handleAnswer(this.parentElement.querySelector('#fib-answer').value)\">Submit</button>"}
      `;
		if (e.type === "scramble") {
			let t = (e.sentence || e.question || "").trim().split(/\s+/);
			return this.scrambledWords.length === 0 && (this.scrambledWords = [...t].sort(() => .5 - Math.random())), `
        <div class="scramble-target" style="${this.isAnswered ? "border-style: solid; border-color: " + (this.isCorrect ? "#10b981" : "#ef4444") : ""}">
          ${this.selectedScrambleIndices.map((e, t) => `
            <button class="scramble-token" ${this.isAnswered ? "disabled" : ""} onclick="this.getRootNode().host.unpickWord(${t})">${this.scrambledWords[e]}</button>
          `).join("")}
        </div>
        ${this.isAnswered ? "" : `
          <div class="scramble-pool">
            ${this.scrambledWords.map((e, t) => this.selectedScrambleIndices.includes(t) ? "" : `<button class="scramble-token" onclick="this.getRootNode().host.pickWord(${t})">${e}</button>`).join("")}
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
		let e = this.selectedScrambleIndices.map((e) => this.scrambledWords[e]).join(" ");
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
};
customElements.get("tj-grammar-hearts") || customElements.define("tj-grammar-hearts", t), customElements.get("grammar-hearts") || customElements.define("grammar-hearts", class extends t {});
//#endregion
