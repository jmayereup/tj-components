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

## Global Features

### 📄 Report Cards
Most components now include a "Report Card" feature. Students are prompted for their nickname and student number, generating a modal report card that they can screenshot and send to their teacher.

### 🎧 Unified Voice Selection
A consistent, icon-based voice selection overlay is available on components with Text-to-Speech. It automatically suggests the "Best" available voice for the target language while allowing students to choose alternatives.

### 🔗 Share as Quiz
By appending `?quiz=1` to the URL, components like `tj-listening` will hide transcripts and other "help" elements, turning the activity into a pure assessment mode.

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

#### Usage
```html
<tj-quiz-element submission-url="YOUR_GAS_URL">
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

## How to use in a Blog (WordPress, Blogger, etc.)

1.  **Add Script Tags**: Add the CDN script tags to your blog post (Custom HTML block).
2.  **Embed Component**: Paste the component tag and your JSON data directly into the post.
3.  **Fonts**: Ensure the Google Fonts link is included.

---

## 🛠️ Developer Guide: Updating the CDN

To update the components served via the GitHub Pages CDN:

1.  **Build**: Run `npm run build` to generate the production files in the `dist/` directory.
2.  **Commit**: Ensure the `dist/` folder is committed to your repository.
3.  **Push**: Push your changes to GitHub. The new versions will be available via the CDN URLs.
