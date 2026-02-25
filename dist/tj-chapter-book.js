import { g as k } from "./chunks/audio-utils-BQ4R88Cf.js";
import { c as S } from "./chunks/tj-config-Co8tO1UZ.js";
const j = `
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

    tj-chapter-book {
        --tj-bg-color: #f8fafc;
        --tj-text-color: #1e293b;
        --tj-card-bg: #ffffff;
        --tj-accent-color: #b45309;
        --tj-subtitle-color: #64748b;
        --tj-card-border: #e2e8f0;
        --tj-btn-bg: #f1f5f9;
        --tj-btn-text: #475569;
        --tj-btn-hover: #e2e8f0;
        --tj-btn-slow-text: #2563eb;
        --tj-quiz-bg: #f8fafc;
        --tj-shadow: rgba(0, 0, 0, 0.05);
        --tj-input-bg: #ffffff;
        
        display: block;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        background-color: var(--tj-bg-color);
        color: var(--tj-text-color);
        overflow-anchor: auto;
        padding-bottom: 2em;
        transition: background-color 0.3s, color 0.3s;
    }

    tj-chapter-book *, tj-chapter-book *::before, tj-chapter-book *::after {
        box-sizing: inherit;
    }

    tj-chapter-book h1, tj-chapter-book h2, tj-chapter-book h3, tj-chapter-book p {
        margin: 0;
        padding: 0;
    }

    tj-chapter-book.dark-theme {
        --tj-bg-color: #0f172a;
        --tj-text-color: #e2e8f0;
        --tj-card-bg: #1e293b;
        --tj-card-border: #334155;
        --tj-accent-color: #fbbf24;
        --tj-subtitle-color: #94a3b8;
        --tj-btn-bg: #334155;
        --tj-btn-hover: #475569;
        --tj-btn-text: white;
        --tj-btn-slow-text: #93c5fd;
        --tj-quiz-bg: #334155;
        --tj-shadow: rgba(0, 0, 0, 0.5);
        --tj-input-bg: #1e293b;
    }

    tj-chapter-book h1, tj-chapter-book h2, tj-chapter-book h3 {
        font-family: 'Lato', sans-serif;
    }

    .book-header {
        max-width: 56em;
        margin: 0 auto;
        padding: 1.5em 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    .theme-toggle, .print-toggle, .lang-swap {
        background: none;
        border: none;
        color: var(--tj-text-color);
        cursor: pointer;
        padding: 0.5em;
        border-radius: 50%;
        transition: background-color 0.2s;
    }

    .theme-toggle:hover, .print-toggle:hover, .lang-swap:hover {
        background-color: var(--tj-btn-hover);
    }

    .header-actions {
        display: flex;
        gap: 0.5em;
        justify-content: flex-end;
        width: 100%;
        flex-wrap: wrap;
        margin-bottom: 0.5em;
    }

    @media (max-width: 640px) {
        .header-actions {
            justify-content: center;
        }
    }

    .book-title {
        font-size: 3em;
        line-height: 1;
        color: var(--tj-accent-color);
        margin-bottom: 0.5em;
    }

    .book-subtitle {
        font-size: 1.25em;
        color: var(--tj-subtitle-color);
    }

    @media (max-width: 640px) {
        .book-title {
            font-size: 2em;
        }
    }

    .chapters-container {
        margin: 0 auto;
        padding: 1em 1em;
    }

    .chapters-container > * + * {
        margin-top: 3em;
    }

    .chapter-card {
        background-color: var(--tj-card-bg);
        border: 1px solid var(--tj-card-border);
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px var(--tj-shadow);
        transition: transform 0.2s, background-color 0.3s, border-color 0.3s;
        padding: 1.5em;
    }

    @media (min-width: 768px) {
        .chapter-card {
            padding: 2em;
        }
    }

    .chapter-title {
        font-size: 1.875em;
        line-height: 2.25em;
        color: var(--tj-accent-color);
        margin-bottom: 1.5em;
    }

    .audio-controls {
        display: flex;
        gap: 0.75em;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 1em;
    }

    .audio-btn {
        display: flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.375em 0.75em;
        border-radius: 9999px;
        transition: all 0.2s;
        font-size: 0.875em;
        border-width: 1px;
        border-style: solid;
        cursor: pointer;
        font-weight: 600;
    }

    .audio-btn-normal {
        background-color: var(--tj-btn-bg);
        color: var(--tj-btn-text);
        border-color: var(--tj-card-border);
    }

    .audio-btn-normal:hover {
        background-color: var(--tj-btn-hover);
    }

    .audio-btn-slow {
        background-color: var(--tj-btn-bg);
        color: var(--tj-btn-slow-text);
        border-color: var(--tj-card-border);
    }

    .audio-btn-slow:hover {
        background-color: var(--tj-btn-hover);
    }

    .audio-btn-cancel {
        background-color: var(--tj-btn-bg);
        color: var(--tj-btn-text);
        border-color: var(--tj-card-border);
    }

    .audio-btn-cancel:hover {
        background-color: var(--tj-btn-hover);
    }

    .chapter-text {
        color: var(--tj-text-color);
        line-height: 1.625;
        margin-bottom: 1.5em;
        font-size: 1.125em;
    }

    .chapter-text p {
        margin-bottom: 1.25em;
    }

    .translation-details {
        margin-bottom: 2em;
    }

    .translation-summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        cursor: pointer;
        list-style: none;
        background-color: var(--tj-card-bg);
        padding: 0.75em;
        border-radius: 0.5em;
        color: var(--tj-accent-color);
        transition: background-color 0.2s;
        border: 1px solid var(--tj-card-border);
    }

    .translation-summary:hover {
        background-color: var(--tj-btn-hover);
    }

    .translation-content {
        color: var(--tj-subtitle-color);
        font-style: italic;
        font-size: 1em;
        margin-top: 0.75em;
        padding-left: 0.75em;
        padding-right: 0.75em;
    }

    .quiz-container {
        background-color: var(--tj-card-bg);
        padding: 1.5em;
        border-radius: 0.5em;
        border: 1px solid var(--tj-card-border);
    }

    .quiz-title {
        font-size: 1.25em;
        color: var(--tj-accent-color);
        margin-bottom: 1em;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .question-block {
        background: var(--tj-quiz-bg);
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 15px;
        border: 1px solid var(--tj-card-border);
    }

    .question-text {
        margin-bottom: 0.5em;
        font-weight: 600;
    }

    .option-label {
        display: block;
        margin-bottom: 0.25em;
    }

    input[type="radio"] {
        accent-color: var(--tj-accent-color);
        transform: scale(1.2);
        margin-right: 8px;
    }

    .feedback {
        margin-top: 8px;
        font-size: 0.9em;
        transition: all 0.3s;
    }

    .check-btn {
        margin-top: 0.5em;
        background-color: #ca8a04;
        color: white;
        padding: 0.5em 1em;
        border-radius: 0.25em;
        font-weight: 700;
        transition: background-color 0.2s;
        border: none;
        cursor: pointer;
    }

    .check-btn:hover {
        background-color: #a16207;
    }

    .lang-selector-container {
        margin: 1.5em 0;
        text-align: center;
        width: 100%;
    }

    .lang-selector-label {
        font-weight: bold;
        color: var(--tj-subtitle-color);
        margin-bottom: 0.75em;
        font-size: 1.1em;
    }

    .lang-selector-buttons {
        display: flex;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
    }

    .lang-btn {
        background: var(--tj-card-bg);
        border: 2px solid var(--tj-card-border);
        color: var(--tj-text-color);
        padding: 0.75em 1.5em;
        border-radius: 9999px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    .lang-btn:hover {
        border-color: var(--tj-accent-color);
    }

    .lang-btn.active {
        background: var(--tj-accent-color);
        border-color: var(--tj-accent-color);
        color: white;
    }

    .quiz-container.quiz-hidden-checked,
    .translation-details.translation-hidden-checked {
        display: none !important;
    }

    .quiz-lock-message.visible {
        display: block;
        animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    /* Accordion Styling */
    details > summary::-webkit-details-marker { display: none; }
    
    details[open] summary ~ * {
        animation: sweep .3s ease-in-out;
    }

    @keyframes sweep {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    .chevron { transition: transform 0.3s; display: flex; align-items: center; }
    details[open] .chevron { transform: rotate(180deg); }

    /* Dynamic Classes */
    .playing {
        box-shadow: 0 0 0 2px #60a5fa, 0 0 0 3px var(--tj-bg-color);
    }

    .feedback-correct {
        color: #4ade80;
        font-weight: 700;
    }

    .feedback-wrong {
        color: #f87171;
        font-weight: 700;
    }

    .feedback-neutral {
        color: #9ca3af;
    }

    .book-footer {
        max-width: 48em;
        margin: 2em auto 0;
        padding: 1.5em;
        text-align: left;
        font-size: 0.875em;
        color: var(--tj-subtitle-color);
        border-top: 1px solid var(--tj-card-border);
    }

    .book-footer p {
        margin: 0.5em 0;
        line-height: 1.5;
    }

    .report-card-section {
        max-width: 48em;
        margin: 2em auto;
        background-color: var(--tj-card-bg);
        border: 1px solid var(--tj-card-border);
        padding: 2em;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px var(--tj-shadow);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .report-tally {
        font-weight: bold;
        color: var(--tj-accent-color);
        text-align: center;
        font-size: 1.25em;
    }

    .student-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
    }

    @media (max-width: 640px) {
        .student-inputs {
            grid-template-columns: 1fr;
        }
    }

    .student-inputs input {
        padding: 8px 12px;
        border-radius: 6px;
        border: 1px solid var(--tj-card-border);
        background: var(--tj-input-bg);
        color: var(--tj-text-color);
        font-size: 0.9em;
    }

    .student-inputs input:disabled {
        opacity: 0.7;
        background: var(--tj-btn-bg);
        cursor: not-allowed;
    }

    .report-actions {
        display: flex;
        gap: 1em;
    }

    .generate-btn {
        flex: 3;
        background-color: var(--tj-accent-color);
        color: white;
        border: none;
        padding: 0.75em;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: opacity 0.2s;
        font-size: 1em;
    }

    .reset-btn {
        flex: 1;
        background-color: #ef4444;
        color: white;
        border: none;
        padding: 0.75em;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: opacity 0.2s;
        font-size: 1em;
    }

    .generate-btn:hover, .reset-btn:hover {
        opacity: 0.9;
    }

    .report-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(8px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 1.5em;
    }

    .report-overlay.visible {
        display: flex;
    }

    .report-modal {
        background: var(--tj-card-bg);
        width: 100%;
        max-width: 550px;
        max-height: 90vh;
        border-radius: 1.5em;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        overflow: auto;
        border: 1px solid var(--tj-card-border);
        position: relative;
    }

    /* Report Card Content */
    .rc-header { text-align: center; margin-bottom: 24px; }
    .rc-icon { font-size: 2.5em; margin-bottom: 8px; }
    .rc-title { font-size: 1.4em; font-weight: 700; color: var(--tj-accent-color); margin-bottom: 4px; }
    .rc-subtitle { color: var(--tj-subtitle-color); font-weight: 600; font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.05em; }
    .rc-student { background: var(--tj-card-bg); border: 1px solid var(--tj-card-border); border-radius: 12px; padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }
    .rc-label { color: var(--tj-subtitle-color); font-size: 0.9em; font-weight: 600; }
    .rc-value { font-weight: 700; color: var(--tj-text-color); text-align: right; }
    .rc-number { color: var(--tj-subtitle-color); font-weight: 500; font-size: 0.9em; display: block; }
    .rc-score-row { display: flex; align-items: center; gap: 20px; margin-bottom: 16px; }
    .rc-score-circle { width: 80px; height: 80px; border-radius: 50%; background: var(--tj-btn-bg); color: var(--tj-accent-color); display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid var(--tj-accent-color); flex-shrink: 0; }
    .rc-score-val { font-size: 1.5em; font-weight: 800; line-height: 1; }
    .rc-score-pct { font-size: 0.85em; font-weight: 700; margin-top: 2px; }
    .rc-score-label { font-size: 1.1em; font-weight: 700; color: var(--tj-text-color); }
    .rc-bar-track { height: 8px; background: var(--tj-btn-bg); border-radius: 4px; overflow: hidden; }
    .rc-bar-fill { height: 100%; background: var(--tj-accent-color); border-radius: 4px; }
    .rc-details { background: var(--tj-btn-bg); padding: 16px; border-radius: 12px; margin-bottom: 24px; font-size: 0.9em; }
    .rc-detail-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .rc-detail-row:last-child { margin-bottom: 0; }
    .rc-detail-row span:first-child { color: var(--tj-subtitle-color); font-weight: 500; }
    .rc-detail-row span:last-child { font-weight: 600; color: var(--tj-text-color); }
    .rc-close-btn:hover { background: var(--tj-btn-bg); }

    /* Official Submission Refinements */
    .rc-submission-box {
        margin-top: 20px;
        padding: 20px;
        background: var(--tj-btn-bg);
        border-radius: 12px;
        border: 1px solid var(--tj-card-border);
        text-align: left;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
    }

    .rc-submission-header {
        margin: 0 0 12px 0;
        font-size: 0.85em;
        color: var(--tj-subtitle-color);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .rc-teacher-code-input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px 16px;
        border: 2px solid var(--tj-card-border);
        border-radius: 10px;
        font-size: 1em;
        margin-bottom: 8px;
        background: var(--tj-card-bg);
        transition: all 0.2s ease;
        outline: none;
        font-family: inherit;
        color: var(--tj-text-color);
    }

    .rc-teacher-code-input:focus {
        border-color: var(--tj-accent-color);
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }

    .rc-help-text {
        margin: 4px 0 0 0;
        font-size: 0.85em;
        color: var(--tj-subtitle-color);
        line-height: 1.4;
    }

    .rc-submit-btn {
        width: 100%;
        padding: 16px;
        background: var(--tj-accent-color);
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 1.1em;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
        margin-bottom: 8px;
    }

    .rc-submit-btn:hover:not(:disabled) {
        opacity: 0.9;
        transform: translateY(-1px);
        box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
    }

    .rc-submit-btn:disabled {
        opacity: 0.6;
        cursor: default;
        background: var(--tj-subtitle-color);
        box-shadow: none;
    }

    .rc-secondary-btn {
        width: 100%;
        padding: 14px;
        background: lightgrey;
        color: var(--tj-text-color);
        border: 2px solid var(--tj-card-border);
        border-radius: 12px;
        font-size: 1em;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .rc-secondary-btn:hover {
        background: var(--tj-btn-bg);
        border-color: var(--tj-subtitle-color);
    }

    /* Print Styles */
    @media print {
        /*
         * Print scoping
         * - When printing from the component's Print button, JS sets:
         *   - html.tj-print-scope
         *   - tj-chapter-book[data-tj-print-target="true"]
         * - For Ctrl/Cmd+P, you can opt-in by adding: print-scope="component".
         */
        html.tj-print-scope body * {
            visibility: hidden !important;
        }

        html.tj-print-scope tj-chapter-book[data-tj-print-target="true"],
        html.tj-print-scope tj-chapter-book[data-tj-print-target="true"] * {
            visibility: visible !important;
        }

        html.tj-print-scope tj-chapter-book[data-tj-print-target="true"] {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
        }

        tj-chapter-book {
            background: white !important;
            color: black !important;
            padding: 0 !important;
        }

        .book-header {
            padding-top: 0.5em !important;
            padding-bottom: 0.5em !important;
            page-break-after: avoid;
        }

        .header-actions, .sticky-report, .book-footer, .audio-controls {
            display: none !important;
        }

        .book-title {
            font-size: 1.5em !important;
            color: black !important;
            margin-bottom: 0.25em !important;
        }

        .book-subtitle {
            font-size: 0.9em !important;
            margin-bottom: 0.5em !important;
            color: #666 !important;
        }

        .chapters-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        .chapters-container > * + * {
            margin-top: 0.75em !important;
        }

        .chapter-card {
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 0.25em 0 !important;
            page-break-inside: avoid;
            margin-bottom: 0.35em !important;
            display: block !important;
        }

        .chapter-title {
            font-size: 0.95em !important;
            color: black !important;
            margin-bottom: 0.2em !important;
            font-weight: bold !important;
            line-height: 1.15 !important;
        }

        .chapter-text {
            font-size: 0.75em !important;
            line-height: 1.3 !important;
            margin-bottom: 0.4em !important;
            color: black !important;
        }

        .chapter-text p {
            margin-bottom: 0.3em !important;
        }

        .translation-details {
            display: none !important;
        }

        .quiz-container {
            background: white !important;
            border: none !important;
            padding: 0 !important;
            margin-top: 0.2em !important;
        }

        .quiz-title {
            display: none !important;
        }

        .question-block {
            background: white !important;
            border: none !important;
            padding: 0 !important;
            margin-bottom: 0.5em !important;
            break-inside: avoid;
        }

        .question-text {
            font-size: 0.7em !important;
            margin-bottom: 0.1em !important;
            font-weight: 600 !important;
            color: black !important;
            line-height: 1.2 !important;
        }

        .question-text::after {
            content: none !important;
        }

        .option-label {
            display: none !important;
        }

        input[type="radio"] {
            display: none !important;
        }

        .check-btn, .feedback {
            display: none !important;
        }

        /* Force content to fit in 4 pages */
        @page {
            size: A4;
            margin: 1cm;
        }
    }

    .word {
        cursor: pointer;
        padding: 0 2px;
        transition: background-color 0.2s, color 0.2s;
        border-radius: 4px;
        display: inline-block;
    }

    .word:hover {
        background-color: var(--tj-btn-hover);
        color: var(--tj-accent-color);
    }

    #voice-btn {
        background: var(--tj-btn-bg);
        border: 1px solid var(--tj-card-border);
        border-radius: 6px;
        padding: 6px;
        color: var(--tj-btn-text);
        cursor: pointer;
        transition: background-color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #voice-btn:hover {
        background-color: var(--tj-btn-hover);
    }

    .voice-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(4px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1em;
    }

    .voice-overlay.visible {
        display: flex;
    }

    .voice-card {
        background: var(--tj-card-bg);
        width: 100%;
        max-width: 400px;
        max-height: 80vh;
        border-radius: 1.2em;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--tj-card-border);
    }

    .voice-card-header {
        padding: 1.25em 1.5em;
        border-bottom: 1px solid var(--tj-card-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .voice-card-header h3 {
        margin: 0;
        font-size: 1.25em;
        color: var(--tj-accent-color);
    }

    .close-voice-btn {
        background: none;
        border: none;
        color: var(--tj-text-color);
        font-size: 1.5em;
        cursor: pointer;
        padding: 0.25em;
        line-height: 1;
    }

    .voice-list {
        padding: 1em;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .voice-option-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75em 1em;
        border-radius: 0.75em;
        border: 1px solid var(--tj-card-border);
        background: var(--tj-btn-bg);
        color: var(--tj-btn-text);
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
        font-size: 0.95em;
    }

    .voice-option-btn:hover {
        background: var(--tj-btn-hover);
    }

    .voice-option-btn.active {
        background: var(--tj-accent-color);
        border-color: var(--tj-accent-color);
        color: white;
        font-weight: 600;
    }

    .voice-option-btn .badge {
        background: #fbbf24;
        color: #92400e;
        padding: 2px 8px;
        border-radius: 9999px;
        font-size: 0.75em;
        font-weight: bold;
        text-transform: uppercase;
    }

    @media (max-width: 640px) {
        #voice-btn {
            padding: 4px;
        }
    }

    .browser-prompt-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(8px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        color: white;
        padding: 2em;
        text-align: center;
    }

    .browser-prompt-card {
        background: white;
        color: #1e293b;
        padding: 2.5em;
        border-radius: 1.5em;
        max-width: 400px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .browser-prompt-card h2 {
        color: #b45309;
        margin-bottom: 0.5em;
        font-size: 1.5em;
    }

    .browser-prompt-card p {
        margin-bottom: 1.5em;
        line-height: 1.5;
    }

    .browser-action-btn {
        display: inline-block;
        background-color: #ca8a04;
        color: white;
        padding: 0.75em 1.5em;
        border-radius: 9999px;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    .browser-action-btn:hover {
        background-color: #a16207;
    }
`;
class m extends HTMLElement {
  getLanguageName(t) {
    if (!t) return "Unknown";
    try {
      return new Intl.DisplayNames(["en"], { type: "language" }).of(t.split(/[-_]/)[0]);
    } catch {
      return t;
    }
  }
  static chapterHasTranslation(t) {
    return !t || typeof t.translation != "string" ? !1 : t.translation.trim().length > 0;
  }
  static bookHasAnyTranslations(t) {
    return !t || !Array.isArray(t.chapters) ? !1 : t.chapters.some((o) => m.chapterHasTranslation(o));
  }
  static ensureGlobalPrintScoping() {
    m._globalPrintScopingReady || (m._globalPrintScopingReady = !0, window.addEventListener("beforeprint", () => {
      let t = document.querySelector('tj-chapter-book[data-tj-print-target="true"]');
      t || (t = document.querySelector('tj-chapter-book[print-scope="component"]'), t && t.setAttribute("data-tj-print-target", "true")), t && document.documentElement.classList.add("tj-print-scope");
    }), window.addEventListener("afterprint", () => {
      document.documentElement.classList.remove("tj-print-scope"), document.querySelectorAll('tj-chapter-book[data-tj-print-target="true"]').forEach((t) => {
        t.removeAttribute("data-tj-print-target");
      });
    }));
  }
  constructor() {
    var t;
    super(), this.synth = window.speechSynthesis, this.currentUtterance = null, this.currentButtonId = null, this.isTextSwapped = !1, this.studentInfo = { nickname: "", number: "", homeroom: "", teacherCode: "" }, this.submissionUrl = (t = S) == null ? void 0 : t.submissionUrl, this.isSubmitting = !1, this.ttsState = {
      status: "idle",
      activeButtonId: null,
      activeElementId: null,
      activeRate: 1,
      activeLang: null
    }, this._ttsActionSeq = 0, this._ttsUtteranceSeq = 0, this.language = "fr-FR", this.selectedVoiceName = null, this.totalScore = 0, this.totalQuestions = 0, this.absoluteTotalQuestions = 0, this.wrongQuestions = [], this.lockoutTimers = /* @__PURE__ */ new Map();
  }
  connectedCallback() {
    this.synth && this.synth.onvoiceschanged !== void 0 && (this.synth.onvoiceschanged = () => this._updateVoiceList()), this._initVisibilityObserver();
    const t = this.getAttribute("src");
    requestAnimationFrame(() => {
      this.config ? typeof this.config == "object" ? this.render(this.config) : this._parseAndRender(String(this.config)) : this.hasAttribute("config") ? this._parseAndRender(this.getAttribute("config")) : t ? this.loadData(t) : this.querySelector('script[type="application/json"]') ? this._parseAndRender(this.querySelector('script[type="application/json"]').textContent) : this._parseAndRender(this.textContent);
    });
  }
  _parseAndRender(t) {
    try {
      if (!t || !t.trim()) return;
      const o = JSON.parse(t.trim());
      this.render(o);
    } catch (o) {
      console.error("Error parsing inline JSON data", o), this.innerHTML = '<p style="color: red;">Error loading book data: Invalid JSON.</p>';
    }
  }
  async loadData(t) {
    try {
      const e = await (await fetch(t)).json();
      this.render(e);
    } catch (o) {
      console.error("Error loading chapter data:", o), this.innerHTML = '<p style="color: red;">Error loading book data.</p>';
    }
  }
  _getBestVoice(t) {
    return k(window.speechSynthesis, t);
  }
  _showVoiceOverlay() {
    const t = this.querySelector(".voice-overlay");
    t && (t.classList.add("visible"), document.body.style.overflow = "hidden", this._updateVoiceList());
  }
  _hideVoiceOverlay() {
    const t = this.querySelector(".voice-overlay");
    t && (t.classList.remove("visible"), document.body.style.overflow = "");
  }
  _updateVoiceList() {
    if (!this.synth) return;
    const t = this.synth.getVoices(), o = this.querySelector(".voice-list"), e = this.querySelector("#voice-btn");
    if (!o || !e || t.length === 0) return;
    const r = this.language, i = r.split(/[-_]/)[0].toLowerCase(), a = t.filter((s) => s.lang.split(/[-_]/)[0].toLowerCase() === i), c = this._getBestVoice(r);
    !this.selectedVoiceName && c && (this.selectedVoiceName = c.name), o.innerHTML = "", a.sort((s, n) => s.name.localeCompare(n.name)), a.forEach((s) => {
      const n = document.createElement("button");
      n.classList.add("voice-option-btn"), this.selectedVoiceName === s.name && n.classList.add("active");
      let p = `<span>${s.name}</span>`;
      c && s.name === c.name && (p += '<span class="badge">Best</span>'), n.innerHTML = p, n.onclick = () => {
        this.selectedVoiceName = s.name, this.cancelTTS(), this._updateVoiceList(), this._hideVoiceOverlay();
      }, o.appendChild(n);
    });
  }
  _initVisibilityObserver() {
    this._visibilityObserver = new IntersectionObserver((t) => {
      t.forEach((o) => {
        const e = o.target, r = e.id, i = e.querySelector(`#quiz-${r}`);
        !o.isIntersecting && o.boundingClientRect.bottom < 0 && i && i.dataset.checked === "true" && !i.classList.contains("quiz-hidden-checked") && this._hideCheckedQuiz(e, i);
      });
    }, {
      threshold: 0,
      rootMargin: "0px"
    });
  }
  _hideCheckedQuiz(t, o) {
    const e = t.querySelector(".translation-details"), r = t.querySelector(".quiz-lock-message");
    o.offsetHeight, o.classList.add("quiz-hidden-checked"), e && (e.classList.add("translation-hidden-checked"), e.open = !1), r && (r.innerHTML = "Results Hidden"), console.log(`Hidden checked quiz for chapter ${t.id}`);
  }
  render(t) {
    if (!t) return;
    if (this.hasAnyTranslations = m.bookHasAnyTranslations(t), this.absoluteTotalQuestions = 0, t.chapters && t.chapters.forEach((r) => {
      r.quiz && (this.absoluteTotalQuestions += r.quiz.length);
    }), t.language ? (this.language = t.language, this.originalLanguage = t.language) : this.originalLanguage = this.language, t.translationLanguage ? (this.translationLanguage = t.translationLanguage, this.originalTranslationLanguage = t.translationLanguage) : (this.translationLanguage = this.language.startsWith("en") ? "th-TH" : "en-US", this.originalTranslationLanguage = this.translationLanguage), !document.getElementById("tj-chapter-book-styles")) {
      const r = document.createElement("style");
      r.id = "tj-chapter-book-styles", r.textContent = j, document.head.appendChild(r);
    }
    const o = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>', e = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>';
    this.innerHTML = `
            <header class="book-header">
                <div class="header-actions">
                    ${this.shouldShowAudioControls() ? `
                    <button id="voice-btn" title="Choose Voice">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.77 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.17 0-7.27l-1.68 1.69zM18.42 3.7l-1.7 1.71c2.3 2 2.3 5.6 0 7.6l1.7 1.71c3.28-3.23 3.28-8.15 0-11.02z"/>
                        </svg>
                    </button>
                    ` : ""}
                    <button id="print-toggle" class="print-toggle" aria-label="Print" title="Print friendly version">
                        ${e}
                    </button>
                    <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
                        ${o}
                    </button>
                </div>
                <h1 class="book-title">${t.title}</h1>
                <p class="book-subtitle">${t.subtitle}</p>
                ${this.hasAnyTranslations ? `
                <div class="lang-selector-container">
                    <p class="lang-selector-label">I want to read in:</p>
                    <div class="lang-selector-buttons">
                        <button class="lang-btn ${this.isTextSwapped ? "" : "active"}" data-action="set-lang" data-swap="false">${this.getLanguageName(this.originalLanguage)}</button>
                        <button class="lang-btn ${this.isTextSwapped ? "active" : ""}" data-action="set-lang" data-swap="true">${this.getLanguageName(this.originalTranslationLanguage)}</button>
                    </div>
                </div>
                ` : ""}
            </header>

            <div class="chapters-container" translate="no">
                ${t.chapters ? t.chapters.map((r, i) => this.renderChapter(r, i)).join("") : "<p>No chapters found.</p>"}
            </div>

            <footer class="book-footer">
                <p>Note: I apologize for any cultural stereotypes or oversimplifications that may appear in these materials.
                My goal is to create accessible content for language learners, but I recognize this may sometimes result in generalizations.
                I welcome feedback to help me improve cultural sensitivity and accuracy.</p>
            </footer>

            <div class="report-card-section">
                <div class="report-tally">
                    Score: <span id="score-tally">0</span> / <span id="total-tally">${this.absoluteTotalQuestions}</span>
                </div>
                <div class="student-inputs">
                    <input type="text" id="student-name" placeholder="Jake" required>
                    <input type="text" id="student-id" placeholder="01" required>
                    <input type="text" id="student-homeroom" placeholder="1/1" required>
                </div>
                <div class="report-actions">
                    <button class="generate-btn" id="generate-report">Generate Report Card</button>
                    <button class="reset-btn" id="reset-book">Reset Quiz</button>
                </div>
            </div>

            <div class="report-overlay">
                <div class="report-modal" style="padding: 24px; border-radius: 16px;">
                    <div id="report-content" class="report-area"></div>
                </div>
            </div>

            <div class="voice-overlay">
                <div class="voice-card">
                    <div class="voice-card-header">
                        <h3>Choose Voice</h3>
                        <button class="close-voice-btn">×</button>
                    </div>
                    <div class="voice-list"></div>
                </div>
            </div>

            <div class="browser-prompt-overlay">
                <div class="browser-prompt-card">
                    <h2>Browser Support Needed</h2>
                    <p>This application works best in standard browsers like <strong>Chrome</strong> or <strong>Safari</strong> to enable high-quality text-to-speech features.</p>
                    <p>กรุณาเปิดใน Chrome หรือ Safari เพื่อใช้งานฟีเจอร์เสียงแบบเต็มรูปแบบ</p>
                    <a class="browser-action-btn">Open in Browser</a>
                </div>
            </div>

        `, this.attachEventListeners(), this._updateVoiceList(), this.checkBrowserSupport(), this.querySelectorAll(".chapter-card").forEach((r) => {
      this._visibilityObserver && this._visibilityObserver.observe(r);
    });
  }
  _getAndroidIntentLink() {
    if (!/android/i.test(navigator.userAgent)) return "";
    const e = new URL(window.location.href).toString().replace(/^https?:\/\//, ""), r = window.location.protocol.replace(":", "");
    return `intent://${e}#Intent;scheme=${r};package=com.android.chrome;end`;
  }
  checkBrowserSupport() {
    if (!this.shouldShowAudioControls()) {
      const t = this.querySelector(".browser-prompt-overlay");
      if (t) {
        t.style.display = "flex";
        const o = this._getAndroidIntentLink(), e = this.querySelector(".browser-action-btn");
        o ? (e.href = o, e.textContent = "Open in Chrome") : (e.innerHTML = 'Use Safari / Chrome<br><span style="font-size: 0.8em; font-weight: normal;">กรุณาเปิดใน Safari หรือ Chrome</span>', e.onclick = (r) => {
          r.preventDefault(), alert(`Please open this page in Safari or Chrome for audio features.

กรุณาเปิดหน้านี้ใน Safari หรือ Chrome เพื่อใช้งานฟีเจอร์เสียง`);
        });
      }
    }
  }
  shouldShowAudioControls() {
    if (!window.speechSynthesis) return !1;
    const t = navigator.userAgent.toLowerCase();
    return !(t.includes("wv") || t.includes("webview") || t.includes("instagram") || t.includes("facebook") || t.includes("line"));
  }
  renderChapter(t, o) {
    const e = `text-${t.id}`, r = `quiz-${t.id}`, i = `trans-${t.id}`, a = m.chapterHasTranslation(t), c = this.wrapWords(t.content ?? t.text), s = a ? this.wrapWords(t.translation) : "", n = s, p = t.quiz.map((b, f) => `
            <div class="question-block">
                <p class="question-text">${b.question}</p>
                ${b.options.map((y) => `
                    <label class="option-label">
                        <input type="radio" name="${t.id}-q${f}" value="${y.value}"> ${y.text}
                    </label>
                `).join("")}
                <p class="feedback"></p>
            </div>
        `).join(""), l = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2" ry="2"></rect></svg>', h = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>', u = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>', v = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>';
    let g;
    if (this.shouldShowAudioControls())
      g = `
                <div class="audio-controls">
                    <button data-action="play" data-rate="1.0" data-target="${e}" id="btn-${t.id}-normal" class="audio-btn audio-btn-normal">
                        <span class="icon-wrapper">${l}</span> Normal
                    </button>
                    <button data-action="play" data-rate="0.6" data-target="${e}" id="btn-${t.id}-slow" class="audio-btn audio-btn-slow">
                        <span class="icon-wrapper">${l}</span> Slow
                    </button>
                    <button data-action="cancel-tts" id="btn-${t.id}-cancel" class="audio-btn audio-btn-cancel" aria-label="Cancel audio" title="Stop audio">
                        <span class="icon-wrapper">${d}</span> Cancel
                    </button>
                </div>`;
    else {
      const b = /android/i.test(navigator.userAgent);
      let f = "";
      if (b) {
        const w = window.location.href.replace(/^https?:\/\//, ""), x = window.location.protocol.replace(":", "");
        f = `<div style="margin-top: 0.5em;"><a href="${`intent://${w}#Intent;scheme=${x};package=com.android.chrome;end`}" style="color: var(--tj-accent-color); text-decoration: underline; font-weight: bold;">Open in Chrome</a></div>`;
      }
      g = `
                <div style="background-color: var(--tj-btn-bg); color: var(--tj-subtitle-color); padding: 0.75em; border-radius: 0.5em; border: 1px dashed var(--tj-card-border); text-align: center; font-size: 0.9em; margin-bottom: 1em;">
                    <p style="margin-bottom: 0.25em;">🎧 Audio available in Chrome or Safari</p>
                    <p>เสียงบรรยายใช้ได้ใน Chrome หรือ Safari</p>
                    ${f}
                </div>`;
    }
    return `
            <section id="${t.id}" class="chapter-card">
                <h2 class="chapter-title">${t.title}</h2>
                
                ${g}

                <template data-tj-template="main-original">${c}</template>
                ${a ? `<template data-tj-template="main-translation">${s}</template>` : ""}
                <template data-tj-template="trans-original">${c}</template>
                ${a ? `<template data-tj-template="trans-translation">${s}</template>` : ""}

                <div id="${e}" class="chapter-text">
                    ${this.isTextSwapped && a ? n : c}
                </div>

                ${a ? `
                <aside id="trans-aside-${t.id}" style="display: none;">
                <details class="translation-details group">
                    <summary class="translation-summary">
                        <span style="display: flex; align-items: center; gap: 0.5rem;">${h} Translation</span>
                        <span class="chevron">${u}</span>
                    </summary>
                    <div style="padding: 0.5em 0.75em 0;">
                        <button data-action="play" data-rate="1.0" data-target="${i}" data-lang="${this.translationLanguage}" id="btn-trans-${t.id}" class="audio-btn audio-btn-normal" style="font-size: 0.8em; padding: 0.25em 0.5em;">
                            <span class="icon-wrapper">${l}</span> Play
                        </button>
                    </div>
                    <div id="${i}" class="translation-content">
                        ${this.isTextSwapped ? c : s}
                    </div>
                </details>
                </aside>
                ` : ""}

                <div class="quiz-container" id="${r}">
                    <h3 class="quiz-title">${v} Comprehension</h3>
                    ${p}
                    <button data-action="check-quiz" data-target="${r}" class="check-btn">Check</button>
                </div>
                <div id="lock-msg-${t.id}" class="quiz-lock-message" style="display: none;">
                    Answers will disappear when you scroll past.
                </div>
            </section>
        `;
  }
  attachEventListeners() {
    m.ensureGlobalPrintScoping();
    const t = this.querySelector("#print-toggle");
    t && t.addEventListener("click", () => {
      document.querySelectorAll('tj-chapter-book[data-tj-print-target="true"]').forEach((n) => {
        n.removeAttribute("data-tj-print-target");
      }), this.setAttribute("data-tj-print-target", "true"), document.documentElement.classList.add("tj-print-scope"), window.print();
    }), this.querySelectorAll(".lang-btn").forEach((n) => {
      n.addEventListener("click", (p) => {
        const l = n.dataset.swap === "true";
        if (this.isTextSwapped !== l) {
          this.cancelTTS();
          const d = this.language;
          this.language = this.translationLanguage, this.translationLanguage = d, this.isTextSwapped = l, this.applyLanguageTextSwap(), this.querySelectorAll('button[id^="btn-trans-"][data-action="play"]').forEach((h) => {
            h.dataset.lang = this.translationLanguage;
          }), this.selectedVoiceName = null, this._updateVoiceList(), this.querySelectorAll(".lang-btn").forEach((h) => {
            h.classList.toggle("active", h.dataset.swap === String(this.isTextSwapped));
          }), this.resetApp(!0);
        }
      });
    });
    const o = this.querySelector("#voice-btn");
    o && o.addEventListener("click", () => {
      this._showVoiceOverlay();
    });
    const e = this.querySelector(".close-voice-btn");
    e && e.addEventListener("click", () => {
      this._hideVoiceOverlay();
    });
    const r = this.querySelector(".voice-overlay");
    r && r.addEventListener("click", (n) => {
      n.target === r && this._hideVoiceOverlay();
    });
    const i = this.querySelector("#theme-toggle");
    i && i.addEventListener("click", () => {
      this.classList.toggle("dark-theme");
      const n = this.classList.contains("dark-theme"), p = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>', l = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
      i.innerHTML = n ? p : l;
    }), this.querySelectorAll('button[data-action="play"]').forEach((n) => {
      n.addEventListener("click", (p) => {
        const l = p.target.closest("button"), d = l.dataset.target, h = parseFloat(l.dataset.rate);
        this.playAudio(d, h, l.id);
      });
    }), this.querySelectorAll('button[data-action="cancel-tts"]').forEach((n) => {
      n.addEventListener("click", () => {
        this.cancelTTS();
      });
    }), this.querySelectorAll('button[data-action="check-quiz"]').forEach((n) => {
      n.addEventListener("click", (p) => {
        const l = p.target.closest("button"), d = l.dataset.target;
        this.checkRadioAnswers(d, l);
      });
    });
    const a = this.querySelector("#generate-report");
    a && a.addEventListener("click", () => this.showReportCard());
    const c = this.querySelector("#reset-book");
    c && c.addEventListener("click", () => this.resetApp());
    const s = this.querySelector(".close-report-btn");
    s && s.addEventListener("click", () => this.hideReportCard()), this.querySelectorAll(".chapter-text, .translation-content").forEach((n) => {
      n.addEventListener("click", (p) => {
        const l = p.target.closest(".word");
        if (l) {
          let d = this.language;
          n.classList.contains("translation-content") && !this.isTextSwapped ? d = this.translationLanguage : n.classList.contains("chapter-text") && this.isTextSwapped ? d = this.language : n.classList.contains("translation-content") && this.isTextSwapped && (d = this.translationLanguage), this.playWord(l.innerText, d);
        }
      });
    }), this.querySelectorAll(".translation-details").forEach((n) => {
      n.addEventListener("toggle", (p) => {
        const l = n.closest(".chapter-card");
        l && this.handleTranslationToggle(l.id, n.open);
      });
    });
  }
  wrapWords(t) {
    const o = (r) => /[\u0E00-\u0E7F]/.test(r);
    return (Array.isArray(t) ? t : [t]).map((r) => {
      if (r == null) return "";
      const i = r.replace(/<[^>]*>/g, "");
      return o(i) ? `<p>${r}</p>` : `<p>${i.split(/(\s+)/).map((s) => /\s+/.test(s) || s === "" ? s : `<span class="word">${s}</span>`).join("")}</p>`;
    }).join("");
  }
  updateIcon(t, o) {
    const e = this.querySelector(`#${t}`);
    if (!e) return;
    const r = e.querySelector(".icon-wrapper"), i = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>', a = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
    o === "play" ? (r.innerHTML = i, e.classList.remove("playing")) : o === "pause" && (r.innerHTML = a, e.classList.add("playing"));
  }
  resetAllButtons() {
    this.querySelectorAll('button[data-action="play"]').forEach((t) => {
      this.updateIcon(t.id, "play");
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
    this.querySelectorAll("section.chapter-card").forEach((t) => {
      const o = t.querySelector('.chapter-text[id^="text-"]'), e = t.querySelector('.translation-content[id^="trans-"]');
      if (!o || !e) return;
      const r = t.querySelector(this.isTextSwapped ? 'template[data-tj-template="main-translation"]' : 'template[data-tj-template="main-original"]'), i = t.querySelector(this.isTextSwapped ? 'template[data-tj-template="trans-original"]' : 'template[data-tj-template="trans-translation"]');
      r && (o.innerHTML = r.innerHTML), i && (e.innerHTML = i.innerHTML);
    });
  }
  handleTranslationToggle(t, o) {
  }
  playAudio(t, o, e) {
    if (!(this.ttsState.activeElementId === t && this.ttsState.status !== "idle")) {
      this.cancelTTS(), this.startNewSpeech(t, o, e);
      return;
    }
    if (this.ttsState.status === "playing") {
      const i = (() => {
        const c = this.querySelector(`#${e}`);
        return c && c.dataset.lang ? c.dataset.lang : this.language;
      })();
      if (this.ttsState.activeRate !== o || this.ttsState.activeLang !== i) {
        this.cancelTTS(), this.startNewSpeech(t, o, e);
        return;
      }
      this.pauseTTS(e);
      return;
    }
    if (this.ttsState.status === "paused") {
      const i = (() => {
        const c = this.querySelector(`#${e}`);
        return c && c.dataset.lang ? c.dataset.lang : this.language;
      })();
      if (this.ttsState.activeRate !== o || this.ttsState.activeLang !== i) {
        this.cancelTTS(), this.startNewSpeech(t, o, e);
        return;
      }
      this.resumeTTS(t, o, e);
      return;
    }
    this.startNewSpeech(t, o, e);
  }
  pauseTTS(t) {
    this._ttsActionSeq++;
    try {
      this.synth && this.synth.pause();
    } catch (o) {
      console.warn("Speech pause() failed:", o);
    }
    this.ttsState.status = "paused", this.ttsState.activeButtonId = t, this.resetAllButtons();
  }
  resumeTTS(t, o, e) {
    this._ttsActionSeq++;
    const r = this._ttsActionSeq;
    this.ttsState.status = "playing", this.ttsState.activeButtonId = e, this.ttsState.activeElementId = t, this.ttsState.activeRate = o, this.updateIcon(e, "pause");
    try {
      this.synth && this.synth.resume();
    } catch (i) {
      console.warn("Speech resume() failed:", i);
    }
    window.setTimeout(() => {
      if (this._ttsActionSeq !== r) return;
      const i = !!(this.synth && this.synth.paused), a = !!(this.synth && this.synth.speaking);
      this.ttsState.status === "playing" && (i || !a) && this.startNewSpeech(t, o, e);
    }, 650);
  }
  startNewSpeech(t, o, e) {
    const r = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
    if (r.includes("wv") || r.includes("webview") || r.includes("instagram") || r.includes("facebook") || r.includes("line")) {
      this.showTTSError(e);
      return;
    }
    const i = this.querySelector(`#${t}`);
    if (!i) return;
    const a = i.innerText, c = this.querySelector(`#${e}`), s = c && c.dataset.lang ? c.dataset.lang : this.language;
    this._ttsActionSeq++, this._ttsUtteranceSeq++;
    const n = this._ttsUtteranceSeq;
    this.ttsState.status = "playing", this.ttsState.activeButtonId = e, this.ttsState.activeElementId = t, this.ttsState.activeRate = o, this.ttsState.activeLang = s;
    try {
      this.currentUtterance = new SpeechSynthesisUtterance(a);
      let l = this.synth.getVoices().find((u) => u.name === this.selectedVoiceName);
      const d = l ? l.lang.split(/[-_]/)[0].toLowerCase() : null, h = s.split(/[-_]/)[0].toLowerCase();
      (!l || d !== h) && (l = this._getBestVoice(s)), l && (this.currentUtterance.voice = l), this.currentUtterance.lang = s, this.currentUtterance.rate = o, this.currentUtterance.onend = () => {
        this._ttsUtteranceSeq === n && (this.updateIcon(e, "play"), this._ttsActionSeq++, this.ttsState.status = "idle", this.ttsState.activeButtonId = null, this.ttsState.activeElementId = null, this.ttsState.activeRate = 1, this.ttsState.activeLang = null, this.currentButtonId = null, this.currentUtterance = null);
      }, this.currentUtterance.onerror = (u) => {
        this._ttsUtteranceSeq === n && (console.error("Speech error:", u), this.updateIcon(e, "play"), this._ttsActionSeq++, this.ttsState.status = "idle", this.ttsState.activeButtonId = null, this.ttsState.activeElementId = null, this.ttsState.activeRate = 1, this.ttsState.activeLang = null, this.currentButtonId = null, u.error !== "canceled" && u.error !== "interrupted" && this.showTTSError(e));
      }, this.currentButtonId = e, this.updateIcon(e, "pause"), this.synth.speak(this.currentUtterance);
    } catch (p) {
      console.error("Speech synthesis setup error", p), this.showTTSError(e), this.updateIcon(e, "play"), this._ttsActionSeq++, this.ttsState.status = "idle", this.ttsState.activeButtonId = null, this.ttsState.activeElementId = null, this.ttsState.activeRate = 1, this.ttsState.activeLang = null;
    }
  }
  playWord(t, o) {
    if (!this.synth) return;
    const e = t.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    if (!e) return;
    this.synth.cancel();
    const r = new SpeechSynthesisUtterance(e);
    let a = this.synth.getVoices().find((n) => n.name === this.selectedVoiceName);
    const c = a ? a.lang.split(/[-_]/)[0].toLowerCase() : null, s = (o || this.language).split(/[-_]/)[0].toLowerCase();
    (!a || c !== s) && (a = this._getBestVoice(o || this.language)), a && (r.voice = a), r.lang = o || this.language, r.rate = 0.8, this.synth.speak(r);
  }
  showTTSError(t) {
    const o = `
            <div class="tts-error-message" style="background-color: #fee2e2; color: #991b1b; padding: 0.75em; border-radius: 0.5em; border: 1px solid #f87171; text-align: center; font-weight: 500;">
                <p style="margin-bottom: 0.5em;">⚠️ Audio not supported in this browser</p>
                <p style="font-size: 0.9em;">Please open in Chrome or Safari</p>
                <p style="font-size: 0.9em;">กรุณาเปิดใน Chrome หรือ Safari</p>
            </div>
        `;
    if (t) {
      const a = this.querySelector(`#${t}`);
      if (a) {
        const c = a.closest(".audio-controls");
        if (c) {
          c.innerHTML = o;
          return;
        }
      }
    }
    if (this.querySelector(".tts-error-message")) return;
    const e = document.createElement("div");
    e.className = "tts-error-message", e.style.cssText = `
            background-color: #fee2e2;
            color: #991b1b;
            padding: 1em;
            margin: 1em auto;
            border-radius: 0.5em;
            border: 1px solid #f87171;
            max-width: 48em;
            text-align: center;
            font-weight: 500;
        `, e.innerHTML = `
            <p>Text-to-speech is not supported in this browser. Please try opening this page in a standard browser like Chrome or Safari.</p>
            <p style="margin-top: 0.5em;">เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง กรุณาลองเปิดหน้านี้ในเบราว์เซอร์มาตรฐาน เช่น Chrome หรือ Safari</p>
            <button style="margin-top: 0.5em; background: none; border: none; color: #991b1b; text-decoration: underline; cursor: pointer;">Dismiss / ปิด</button>
        `;
    const r = e.querySelector("button");
    r.onclick = () => e.remove();
    const i = this.querySelector(".book-header");
    i ? i.after(e) : this.prepend(e);
  }
  checkRadioAnswers(t, o) {
    const e = this.querySelector(`#${t}`), r = e.closest(".chapter-card"), i = e.querySelectorAll(".question-block");
    let a = 0, c = 0, s = !0;
    if (i.forEach((d) => {
      d.querySelector('input[type="radio"]:checked') || (s = !1);
    }), !s) {
      alert("Please answer all questions before checking.");
      return;
    }
    o && (o.disabled = !0, o.textContent = "Checked", o.style.opacity = "0.7", o.style.cursor = "not-allowed"), e.dataset.checked = "true", i.forEach((d) => {
      const h = d.querySelector('input[type="radio"]:checked'), u = d.querySelector(".feedback");
      if (d.querySelectorAll('input[type="radio"]').forEach((g) => g.disabled = !0), c++, u.classList.remove("feedback-correct", "feedback-wrong", "feedback-neutral"), h.value === "correct")
        u.textContent = "Correct !", u.classList.add("feedback-correct"), a++;
      else {
        u.textContent = "Incorrect.", u.classList.add("feedback-wrong");
        const g = r ? r.querySelector(".chapter-title").innerText : "Unknown Chapter", b = d.querySelector(".question-text").innerText;
        this.wrongQuestions.push({
          question: b,
          chapter: g
        });
      }
    }), this.updateScore(a, c);
    const n = t.replace("quiz-", ""), p = this.querySelector(`#lock-msg-${n}`), l = r.querySelector(`#trans-aside-${n}`);
    l && (l.style.display = "block"), p && (p.innerHTML = "Answers and translation will disappear when you scroll past.", p.classList.add("visible"), p.style.display = "block");
  }
  updateScore(t, o) {
    this.totalScore = (this.totalScore || 0) + t;
    const e = this.querySelector("#score-tally"), r = this.querySelector("#total-tally");
    e && r && (e.textContent = this.totalScore, r.textContent = this.absoluteTotalQuestions);
  }
  showReportCard() {
    const t = this.querySelector("#student-name"), o = this.querySelector("#student-id"), e = this.querySelector("#student-homeroom"), r = t.value.trim(), i = o.value.trim(), a = e.value.trim();
    if (!r || !i) {
      alert("Please enter both Student Name and Student ID before generating a report card."), r ? o.focus() : t.focus();
      return;
    }
    this.studentInfo = { ...this.studentInfo, nickname: r, number: i, homeroom: a }, t.disabled = !0, o.disabled = !0, e && (e.disabled = !0);
    const c = this.querySelector(".report-overlay"), s = this.querySelector("#report-content"), n = /* @__PURE__ */ new Date(), p = n.toLocaleDateString(), l = n.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), d = this.querySelector(".book-title").innerText, h = this.absoluteTotalQuestions > 0 ? Math.round(this.totalScore / this.absoluteTotalQuestions * 100) : 0, u = h >= 80 ? "🏆" : h >= 50 ? "⭐" : "💪", v = h >= 80 ? "Excellent!" : h >= 50 ? "Good effort!" : "Keep practicing!";
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
                    <div class="rc-score-val">${h}%</div>
                    <div class="rc-score-pct">Overall</div>
                </div>
                <div class="rc-score-label">${u} ${v}</div>
            </div>
            <div class="rc-bar-track" style="margin: 0 0 16px 0;"><div class="rc-bar-fill" style="width:${h}%"></div></div>
            <div class="rc-details">
                <div class="rc-detail-row"><span>Total Score</span><span>${this.totalScore} / ${this.absoluteTotalQuestions}</span></div>
                <div class="rc-detail-row"><span>Date</span><span>${p}</span></div>
                <div class="rc-detail-row"><span>Time</span><span>${l}</span></div>
            </div>

            ${this.wrongQuestions.length > 0 ? `
                <div class="report-wrong-list" style="margin-bottom: 20px;">
                    <h3 style="font-size: 1em; color: var(--tj-error-color); margin-bottom: 10px; font-weight: 700;">Needs Review:</h3>
                    <div style="max-height: 200px; overflow-y: auto; background: var(--tj-btn-bg); border-radius: 8px; border: 1px solid var(--tj-card-border);">
                    ${this.wrongQuestions.map((f) => `
                        <div class="report-wrong-item" style="padding: 10px; border-bottom: 1px solid var(--tj-card-border);">
                            <span class="report-wrong-chapter" style="font-size: 0.75em; color: var(--tj-subtitle-color); text-transform: uppercase;">${f.chapter}</span>
                            <div style="font-size: 0.9em;">${f.question}</div>
                        </div>
                    `).join("")}
                    </div>
                </div>
            ` : ""}

            <div class="rc-submission-box">
                <p class="rc-submission-header">Official Submission</p>
                <input type="text" id="report-teacher-code" class="rc-teacher-code-input" placeholder="Enter Teacher Code" value="${this.studentInfo.teacherCode || ""}">
                <p class="rc-help-text">Enter the teacher code to submit, or take a screenshot of this page.</p>
            </div>

            <div class="rc-actions" style="margin-top: 16px;">
                <button class="rc-submit-btn" id="submit-score-btn">Submit Score Online</button>
                <button class="rc-secondary-btn close-report-btn">Close Report</button>
            </div>
        `;
    const g = s.querySelector("#submit-score-btn");
    g && (g.onclick = () => this._submitScore());
    const b = s.querySelector(".close-report-btn");
    b && (b.onclick = () => this.hideReportCard()), c.classList.add("visible");
  }
  hideReportCard() {
    this.querySelector(".report-overlay").classList.remove("visible");
  }
  async _submitScore() {
    const t = this.querySelector("#report-teacher-code"), o = t ? t.value.trim() : this.studentInfo.teacherCode;
    if (this.studentInfo.teacherCode = o, o !== "6767") {
      alert("Invalid or missing Teacher Code. Please take a screenshot of this report and show it to your teacher instead.");
      return;
    }
    if (this.isSubmitting) return;
    const e = this.querySelector("#submit-score-btn");
    if (!e) return;
    const r = e.textContent;
    this.isSubmitting = !0, e.textContent = "Submitting...", e.disabled = !0;
    const i = this.querySelector(".book-title").innerText, a = this.absoluteTotalQuestions > 0 ? Math.round(this.totalScore / this.absoluteTotalQuestions * 100) : 0, c = {
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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(c)
      }), alert("Score successfully submitted!"), e.textContent = "Submitted ✓", e.style.background = "var(--tj-subtitle-color)";
    } catch (s) {
      console.error("Error submitting score:", s), alert("There was an error submitting your score. Please try again."), e.textContent = r, e.disabled = !1, this.isSubmitting = !1;
    }
  }
  resetApp(t = !1) {
    if (!t && !confirm("Are you sure you want to reset everything? Your scores and progress will be lost.")) return;
    this.totalScore = 0, this.wrongQuestions = [];
    const o = this.querySelector("#student-name"), e = this.querySelector("#student-id");
    o && (o.disabled = !1, o.value = ""), e && (e.disabled = !1, e.value = "");
    const r = this.querySelector("#score-tally"), i = this.querySelector("#total-tally");
    r && (r.textContent = "0"), i && (i.textContent = this.absoluteTotalQuestions), this.querySelectorAll(".chapter-card").forEach((a) => {
      const c = `quiz-${a.id}`, s = a.querySelector(`#${c}`);
      if (s) {
        s.classList.remove("quiz-hidden-checked", "locked-open", "locked-delay"), delete s.dataset.checked;
        const l = s.querySelector('button[data-action="check-quiz"]');
        l && (l.disabled = !1, l.textContent = "Check", l.style.opacity = "1", l.style.cursor = "pointer"), s.querySelectorAll('input[type="radio"]').forEach((d) => {
          d.disabled = !1, d.checked = !1;
        }), s.querySelectorAll(".feedback").forEach((d) => {
          d.textContent = "", d.className = "feedback";
        });
      }
      const n = a.querySelector(".translation-details");
      n && (n.classList.remove("translation-hidden-checked"), n.open = !1);
      const p = a.querySelector(".quiz-lock-message");
      p && (p.classList.remove("visible"), p.textContent = "");
    }), this.lockoutTimers.forEach((a) => clearInterval(a)), this.lockoutTimers.clear(), window.scrollTo({ top: 0, behavior: "smooth" });
  }
  disconnectedCallback() {
    this.synth && this.synth.cancel(), this._visibilityObserver && this._visibilityObserver.disconnect();
  }
}
customElements.define("tj-chapter-book", m);
