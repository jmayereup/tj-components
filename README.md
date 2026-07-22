# TJ Components

A collection of premium, interactive web components for language learning, designed to be easily embedded into blogs or websites.

## CDN & Quick Start

You can use these components directly without downloading them by linking to the GitHub Pages CDN:

```html
<!-- Components -->
<script src="https://scripts.teacherjake.com/tj-reader.js" defer></script>
<script src="https://scripts.teacherjake.com/tj-grammar-hearts.js" defer></script>
<script src="https://scripts.teacherjake.com/tj-info-gap.js" defer></script>
<script src="https://scripts.teacherjake.com/tj-listening.js" defer></script>
<script src="https://scripts.teacherjake.com/tj-speed-review.js" defer></script>
<script src="https://scripts.teacherjake.com/tj-quiz-element.js" defer></script>
<script src="https://scripts.teacherjake.com/tj-chapter-book.js" defer></script>
<script src="https://scripts.teacherjake.com/tj-pronunciation.js" defer></script>

<!-- Required Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

> **Note for Google Sites & iframe embeds:** When embedding into dynamic iframe sandboxes (e.g. Google Sites "Embed Code"), remove the `defer` attribute from `<script>` tags to ensure scripts execute immediately.


## Global Features

### 📄 Report Cards
Most components now include a "Report Card" feature. Students are prompted for their nickname and student number, generating a modal report card that they can screenshot and send to their teacher.

### 🎧 Unified Voice Selection
A consistent, icon-based voice selection overlay is available on components with Text-to-Speech. It automatically suggests the "Best" available voice for the target language while allowing students to choose alternatives.

### 🔗 Share as Quiz
By appending `?quiz=1` to the URL, components like `tj-listening` will hide transcripts and other "help" elements, turning the activity into a pure assessment mode.

### 📊 Custom Google Apps Script & URL Parameters
Teachers can configure automatic submissions to their own Google Sheets and supply activity data via URL parameters or element attributes across **all 8 components**:

- **Custom Submission Endpoint**: Pass `submission-url` (or `submission_url`) as an attribute or URL search parameter:
  - **HTML Attribute**: `<tj-quiz-element submission-url="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec">`
  - **URL Parameter**: `https://your-site.com/quiz.html?submission-url=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
- **Data / Content URL**: Pass `url` or `src` to load activity JSON/Markdown directly from a remote link:
  - **HTML Attribute**: `<tj-grammar-hearts src="https://example.com/lesson1.json">`
  - **URL Parameter**: `https://your-site.com/activity.html?url=https://example.com/lesson1.json`
- **Teacher Code**: Pass `code` or `teacher_code` attribute or URL parameter (default: `6767`):
  - **URL Parameter**: `https://your-site.com/quiz.html?code=1234`

For complete Google Apps Script code (`doPost`) and step-by-step setup instructions, see the [Google Sheets Submission Setup Guide](SUBMISSION_GUIDE.md).


---

## ✨ Gemini Gems (AI Content Generators)

You can use these custom Google Gemini Gems to automatically generate formatted JSON or Markdown content for components directly from your lesson plans, reading passages, or vocabulary lists:

| Component | Component Tag | Gemini Gem AI Generator Link |
| :--- | :--- | :--- |
| **LBL Reader** | `<lbl-reader>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/9dfd58f9fc59) |
| **Grammar Hearts** | `<grammar-hearts>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/d8664c27f003) |
| **Info Gap** | `<tj-info-gap>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/c4ce1f63dfd9) |
| **Listening** | `<tj-listening>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/a282ff7b4b26) |
| **Speed Review** | `<tj-speed-review>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/5a7412981b90) |
| **Quiz Element** | `<tj-quiz-element>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/4bbfe190f849) |
| **Chapter Book** | `<tj-chapter-book>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/209dda1b768d) |
| **Pronunciation** | `<tj-pronunciation>` | [Open Gemini Gem ↗](https://gemini.google.com/gem/d45e00c6dcb5) |

---

## Components

### 1. LBL Reader (`<lbl-reader>`)
An interactive story reader with word highlighting, TTS, and automatic memory matching activities.

#### Usage
```html
<lbl-reader lang-original="en" lang-translation="th" story-title="My Daily Routine">
[
  {
    "original": "I wake up at 7 AM every day.",
    "fullTranslation": "ฉันตื่นนอนตอน 7 โมงเช้าทุกวัน",
    "translationOptions": ["ตื่นนอน", "นอนหลับ", "แปรงฟัน"],
    "correctTranslationIndex": 0,
    "highlightIndex": 1
  }
]
</lbl-reader>
```

---

### 2. Grammar Hearts (`<grammar-hearts>`)
A gamified grammar practice component with multiple-choice, fill-in-the-blank, and sentence scrambling.

#### Usage
```html
<grammar-hearts hearts="3" round-size="10">
{
  "title": "Daily Routines Quiz",
  "hint": {
    "summary": "Present Simple vs Continuous",
    "content": "Use **Present Simple** for habits."
  },
  "questions": [
    {
      "type": "multiple-choice",
      "question": "She ___ (work) every day.",
      "options": ["works", "is working"],
      "correctIndex": 0
    }
  ]
}
</grammar-hearts>
```

---

### 3. Info Gap (`<tj-info-gap>`)
A communication-focused component for paired or single-player practice.

#### Attributes
- `player_count`: (Optional) Defaults to 2.

#### JSON Example
```json
{
  "topic": "Ordering Delivery",
  "scenario_description": "Ask your partner the questions.",
  "player_count": 2,
  "blocks": [
    {
      "text_holder_id": 1,
      "text": "Wanchai wants pad thai.",
      "questions": [
        { "asker_id": 2, "question": "What does he want?", "options": ["Pad Thai", "Rice"], "correct_answer": "Pad Thai" }
      ]
    }
  ]
}
```

---

### 4. Listening (`<tj-listening>`)
A comprehensive listening lesson including vocabulary preview, dialogue playback, and comprehension quiz.

#### Attributes
- `audio-listening`: (Optional) URL to an MP3 for the main dialogue.

#### JSON Example
```json
{
  "title": "Ordering Food",
  "lang": "en-US",
  "intro": { "text": "Listen to the waiter..." },
  "vocab": [
    { "word": "bill", "definition": "Charges for food.", "example": "Bill please." }
  ],
  "listening": {
    "transcript": "Waiter: Hello...",
    "questions": [
      { "question": "What did they order?", "options": ["Food", "Drink"], "correct": "Food" }
    ]
  }
}
```

---

### 5. Speed Review (`<tj-speed-review>` / `<speed-review>`)
A fast-paced review activity with a countdown timer where students earn points based on how quickly they can answer questions.

#### Attributes
- `time-limit`: Seconds per question (default: 15).
- `round-size`: Number of questions selected randomly from the pool (default: 10).
- `config`: (Optional) Inline JSON string configuration.

#### Usage
Pass a JSON array containing a deck object with a title and questions list. You can set it as the text content of the element:

```html
<tj-speed-review time-limit="15" round-size="3">
[
  {
    "title": "Suffix Speed Run: Noun Builder",
    "questions": [
      {
        "category": "Verb → Noun",
        "question": "The act of **defining** a word is its ____.",
        "options": ["definition", "definement", "wisdom", "arrival"],
        "answer": "definition",
        "explanation": "To turn the verb **define** into a noun, we add the suffix **-tion**."
      },
      {
        "category": "Verb → Noun",
        "question": "Please provide a ____ of the stolen item.",
        "options": ["description", "describement", "freedom", "artist"],
        "answer": "description",
        "explanation": "The noun form of the verb **describe** is 'description'."
      }
    ]
  }
]
</tj-speed-review>
```

#### JSON Question Schema
- `category`: (Optional) Category tag displayed above the question.
- `question`: The question text (supports markdown bold `**text**` and blank underscores `____`).
- `options`: Array of strings representing choices.
- `answer`: String matching the correct choice exactly.
- `explanation`: (Optional) Sentence explaining the correct answer, shown during results review.

---

### 6. Quiz Element (`<tj-quiz-element>`)
A flexible quiz component supporting reading passages, vocabulary matching, and cloze (fill-in-the-blank) sections. Optimized for Google Apps Script integration.

#### Attributes
- `submission-url`: (Optional) Google Apps Script deployment URL to send scored answers to.
- `test-mode`: (Optional) Boolean attribute. If present, disables immediate answers checking, hides visual correctness feedback (green/red ticks and correct/incorrect classes), hides the detailed score breakdown (percentage and section breakdown), and hides the "Try Again" button to prevent retakes. The dynamic quiz content is also hidden after submission so students cannot review or change answers.
- `start-code`: (Optional) Start Quiz Code required to unlock the quiz initially when in test mode (e.g. `start-code="1234"`). Backward compatible with `code`.
- `teacher-code`: (Optional) Teacher Code required to unlock the quiz if a tab switch or page refresh occurs, or to reset/reopen submitted tests (e.g. `teacher-code="7676"`, default `'7676'`). Backward compatible with `reset-code`.

#### Usage
```html
<tj-quiz-element test-mode start-code="1234" teacher-code="7676" submission-url="YOUR_GAS_URL">
<script type="text/markdown">
  My Quiz Title
  ---text
  This is a reading passage...
  ---instructions
  Choose the best answer for each question.
  ---questions-3
  Q: What happened?
  A: Nothing
  A: Everything [correct]
  ---vocab-5
  Word: Definition
  Concept: Explanation
  ---cloze-2
  The [cat] sat on the [mat].
</script>
</tj-quiz-element>
```

#### Key Features
- **Limiters**: Append `-N` to any section header (e.g., `---questions-3`) to display exactly N random items from that section.
- **Instructions**: Use `---instructions` to add a header and body text between activities.
- **Vocab Syntax**: Use `Word: Definition` (one per line) for vocabulary matching sections.
- **Short Answer Questions**: Omit the `A:` rows under a question (e.g., just `Q: Question text`) to render a text input field instead of multiple-choice radio buttons. These written answers are displayed on the report card and sent to the teacher but are not included in the graded score.

---

### 7. Chapter Book (`<tj-chapter-book>`)
A multi-chapter reading companion with built-in TTS, translation toggles, and per-chapter comprehension quizzes.

#### Usage
```html
<tj-chapter-book>
{
  "title": "My Adventure",
  "chapters": [
    {
      "title": "Chapter 1",
      "text": "Once upon a time...",
      "translation": "กาลครั้งหนึ่ง...",
      "quiz": [
        { "question": "Who was there?", "options": ["Hero", "Villain"], "answer": 0 }
      ]
    }
  ]
}
</tj-chapter-book>
```

### 8. Pronunciation (`<tj-pronunciation>`)
A speaking practice component featuring native audio comparison, minimal pair sound discrimination, and drag-and-drop dictation word scrambles.

#### Attributes
- `src`: (Optional) URL to fetch a JSON config file.
- `config`: (Optional) Inline JSON string configuration.
- (If neither is specified, the element parses the JSON text content directly from within its tags).

#### Usage
```html
<tj-pronunciation>
{
  "title": "Unit 1: Basic Listening & Recording",
  "instructions": "Listen carefully to the audio sequences. For Minimal Pair activities, choose the final word spoken.",
  "language": "en-US",
  "activities": [
    {
      "type": "listen_record",
      "targetText": "The ship is leaving the port.",
      "phoneticHint": "ðə ʃɪp ɪz ˈliːvɪŋ ðə pɔːt",
      "translation": "เรือกำลังออกจากท่าเรือ"
    },
    {
      "type": "minimal_pair",
      "focus": "Vowel /ɪ/ vs /iː/",
      "options": ["ship", "sheep"],
      "correctAnswer": "ship"
    },
    {
      "type": "scramble",
      "audioText": "Where are you going tonight?",
      "words": ["Where", "are", "you", "going", "tonight?"],
      "distractors": ["wear", "your", "go"]
    }
  ]
}
</tj-pronunciation>
```

#### Activity Types

##### A. Listen & Record (`listen_record`)
Allows students to hear native text-to-speech pronunciation and record themselves, playback their recording, and compare.
- `targetText`: The exact sentence or word to practice.
- `phoneticHint`: (Optional) Phonetic IPA spelling of the text.
- `translation`: (Optional) Native language translation.

##### B. Minimal Pair (`minimal_pair`)
Forces students to distinguish between two close phonemes by playing the correct word and selecting it.
- `options`: Array of exactly two words.
- `correctAnswer`: The word that the audio will speak. Must match one of the two options.
- `focus`: (Optional) Explanatory focus string (e.g. `Vowel /ɪ/ vs /iː/`).

##### C. Dictation Scramble (`scramble`)
Plays a sentence that the student must rebuild by sorting scrambled words.
- `audioText`: The complete sentence spoken.
- `words`: List of words in the correct order.
- `distractors`: (Optional) Similar-sounding words to add as incorrect choices.

---

## How to use in a Blog or Website (WordPress, Blogger, Google Sites)

1. **Add Script Tags**: Add the CDN script tags to your blog post or site builder (Custom HTML block).
2. **Embed Component**: Paste the component tag and your JSON or Markdown data directly into the post.
3. **Fonts**: Ensure the Google Fonts link (`Outfit` and `Inter`) is included.

### 🌐 Google Sites & Iframe Embed Guide

When embedding components (especially `<tj-quiz-element>`) inside **Google Sites** via `Embed -> Embed code`, keep the following rules in mind:

1. **Remove `defer` & Use `type="module"`**: Do not use `defer` on script tags in embedded iframes. Adding `type="module"` ensures the browser parses ES module JavaScript without throwing `SyntaxError: Cannot use import statement outside a module`.
2. **Wrap Quiz Content in `<script type="text/markdown">`**: Always wrap raw text content inside `<script type="text/markdown">...</script>` inside `<tj-quiz-element>`. This prevents Google Sites' HTML parser from escaping characters (like `&`, `<`, `>`) or stripping newlines needed for `---` section headers.
3. **Include Fonts**: Include the Google Fonts `<link>` tag inside the Embed code block so the isolated iframe renders typography correctly.
4. **Adjust Frame Height**: In the Google Sites editor, drag the bottom handle of the embedded frame to expand its height so the component doesn't get clipped.

#### Complete Google Sites Embed Example (`tj-quiz-element`):
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<script type="module" src="https://scripts.teacherjake.com/tj-quiz-element.js"></script>

<tj-quiz-element test-mode start-code="1234" teacher-code="7676" submission-url="YOUR_GAS_URL">
<script type="text/markdown">
  My Quiz Title
  ---text
  Reading passage here...
  ---questions-3
  Q: Question text?
  A: Answer 1
  A: Answer 2 [correct]
</script>
</tj-quiz-element>
```

---

## 🛠️ Developer Guide: Updating the CDN

To update the components served via the GitHub Pages CDN:

1.  **Build**: Run `npm run build` to generate the production files in the `dist/` directory.
2.  **Commit**: Ensure the `dist/` folder is committed to your repository.
3.  **Push**: Push your changes to GitHub. The new versions will be available via the CDN URLs.
