// Centralized Component Catalog & Gemini Gem Registry

export const SAMPLE_QUIZ_MD = `---
text
title = The Magic of Photosynthesis
audio-src = https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Plants generally involve the green pigment chlorophyll and generate oxygen as a byproduct.

---
questions-1
1. What do green plants use to synthesize food during photosynthesis?
* A. Sunlight, carbon dioxide, and water
B. Oxygen and nitrogen
C. Soil and fertilizer only
D. Darkness and rain

2. What green pigment is involved in photosynthesis?
A. Hemoglobin
* B. Chlorophyll
C. Carotene
D. Melanin

---
vocab-1
chlorophyll = Green pigment found in plants
photosynthesis = Process of converting light energy into chemical energy
byproduct = An incidental or secondary product made in a manufacture or synthesis
`;

export const SAMPLE_INFOGAP_JSON = JSON.stringify({
    title: "Weekend Plans Information Gap",
    image: "https://placehold.co/400x200?text=Weekend+Plans",
    gaps: [
        { text: "Where are you going this Saturday?", answer: "to the park", type: "text" },
        { text: "Who will you go with?", answer: "my brother", type: "text" },
        { text: "What time will you leave?", answer: "at 10 am", type: "text" }
    ]
}, null, 2);

export const SAMPLE_SPEED_JSON = JSON.stringify({
    title: "Essential Vocabulary Speed Match",
    deck: [
        { term: "Enthusiastic", definition: "Having or showing intense and eager enjoyment" },
        { term: "Resilient", definition: "Able to withstand or recover quickly from difficult conditions" },
        { term: "Meticulous", definition: "Showing great attention to detail; very careful and precise" },
        { term: "Pragmatic", definition: "Dealing with things sensibly and realistically" }
    ]
}, null, 2);

export const SAMPLES = [
    {
        id: 'quiz',
        name: 'Sample Quiz (tj-quiz-element)',
        componentType: 'tj-quiz-element',
        content: SAMPLE_QUIZ_MD
    },
    {
        id: 'infogap',
        name: 'Sample Info-Gap (tj-info-gap)',
        componentType: 'tj-info-gap',
        content: SAMPLE_INFOGAP_JSON
    },
    {
        id: 'speed',
        name: 'Sample Speed Review (tj-speed-review)',
        componentType: 'tj-speed-review',
        content: SAMPLE_SPEED_JSON
    }
];

export const COMPONENT_CATALOG = [
    {
        id: 'lbl-reader',
        tagName: 'lbl-reader',
        name: 'LBL Reader',
        icon: '📖',
        geminiUrl: 'https://gemini.google.com/gem/9dfd58f9fc59',
        demoUrl: 'src/tj-reader/test-lbl-reader.html',
        description: 'Interactive story reader with word highlighting, text-to-speech, and memory matching activities.',
        demoContent: `<lbl-reader lang-original="en" lang-translation="th" story-title="My Daily Routine">
[
  {
    "original": "I wake up at 7 AM every day.",
    "fullTranslation": "ฉันตื่นนอนตอน 7 โมงเช้าทุกวัน",
    "translationOptions": ["ตื่นนอน", "นอนหลับ", "แปรงฟัน"],
    "correctTranslationIndex": 0,
    "highlightIndex": 1
  }
]
</lbl-reader>`
    },
    {
        id: 'grammar-hearts',
        tagName: 'grammar-hearts',
        name: 'Grammar Hearts',
        icon: '❤️',
        geminiUrl: 'https://gemini.google.com/gem/d8664c27f003',
        demoUrl: 'src/tj-grammar-hearts/test-grammar.html',
        description: 'Gamified grammar practice with lives, multiple-choice, and sentence scrambling challenges.',
        demoContent: `<grammar-hearts hearts="3" round-size="10">
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
</grammar-hearts>`
    },
    {
        id: 'tj-info-gap',
        tagName: 'tj-info-gap',
        name: 'Info Gap',
        icon: '👥',
        geminiUrl: 'https://gemini.google.com/gem/c4ce1f63dfd9',
        demoUrl: 'src/tj-info-gap/test-info-gap.html',
        description: 'Collaborative multi-player activity for communication practice or single-player mode with AI partner.',
        demoContent: `<tj-info-gap>
{
  "topic": "Ordering Delivery",
  "scenario_description": "Ask your partner the questions to complete your delivery ticket.",
  "player_count": 2,
  "blocks": [
    {
      "text_holder_id": 1,
      "text": "Wanchai wants pad thai.",
      "question": "What does Wanchai want to eat?"
    }
  ]
}
</tj-info-gap>`
    },
    {
        id: 'tj-listening',
        tagName: 'tj-listening',
        name: 'Listening',
        icon: '🎧',
        geminiUrl: 'https://gemini.google.com/gem/a282ff7b4b26',
        demoUrl: 'src/tj-listening/test-listening.html',
        description: 'Comprehensive listening lesson component with vocabulary preview, dialogue, and comprehension quiz.',
        demoContent: `<tj-listening>
{
  "title": "At the Coffee Shop",
  "instructions": "Listen to the dialogue and answer the questions.",
  "audioSrc": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "transcript": "Customer: Can I have a latte, please?\\nBarista: Sure, what size?",
  "questions": [
    {
      "question": "What drink did the customer order?",
      "options": ["Tea", "Latte", "Water"],
      "correctIndex": 1
    }
  ]
}
</tj-listening>`
    },
    {
        id: 'tj-speed-review',
        tagName: 'tj-speed-review',
        name: 'Speed Review',
        icon: '🏎️',
        geminiUrl: 'https://gemini.google.com/gem/5a7412981b90',
        demoUrl: 'src/tj-speed-review/test-speed.html',
        description: 'Fast-paced review game where students score points based on how quickly they can answer questions.',
        demoContent: `<tj-speed-review>
{
  "title": "Vocabulary Speed Review",
  "timer": 60,
  "questions": [
    {
      "question": "Synonym for 'Fast'",
      "options": ["Quick", "Slow", "Quiet"],
      "correctIndex": 0
    }
  ]
}
</tj-speed-review>`
    },
    {
        id: 'tj-test',
        tagName: 'tj-test',
        name: 'Test',
        icon: '📈',
        geminiUrl: 'https://gemini.google.com/gem/1GR1C-bhcrWfUS79b0SA1Llna4NiWaCef?usp=sharing',
        demoUrl: 'src/tj-test/test-progressive.html',
        description: 'Multi-stage level placement test powered by JSON configuration where students unlock subsequent levels by meeting target score cutoffs.',
        demoContent: `<tj-test pass-threshold="75%" submission-url="YOUR_GAS_URL">
<script type="application/json">
{
  "title": "Comprehensive English Assessment",
  "passThreshold": "75%",
  "sections": [
    {
      "title": "Section 1: Vocabulary",
      "vocabulary": [
        { "word": "Resilient", "def": "Able to withstand or recover quickly from difficult conditions." },
        { "word": "Innovate", "def": "Make changes in something established, especially by introducing new methods or ideas." },
        { "word": "Perspective", "def": "A particular attitude toward or way of regarding something; a point of view." }
      ]
    },
    {
      "title": "Section 2: Grammar",
      "questions": [
        {
          "situation": "Two colleagues are discussing their weekend plans.",
          "question": "Alex: \\"Have you finished the project report yet?\\"\\nTaylor: \\"Not yet. If I ______________ more time yesterday, I would have completed it.\\"",
          "options": [
            "had had",
            "have had",
            "would have",
            "was having"
          ],
          "answer": "had had",
          "explanation": "Third conditional requires past perfect ('had had') in the if-clause."
        },
        {
          "question": "Choose the correct sentence:",
          "options": [
            "Neither of the answers are correct.",
            "Neither of the answers is correct.",
            "Neither of the answers were correct.",
            "Neither of the answers be correct."
          ],
          "answer": "Neither of the answers is correct.",
          "explanation": "'Neither' takes a singular verb ('is')."
        }
      ]
    },
    {
      "title": "Section 3: Reading Comprehension",
      "passages": [
        "Renewable energy sources such as solar and wind power are becoming increasingly vital in combating global climate change. Unlike fossil fuels, solar energy generates electricity without producing greenhouse gas emissions during operation. However, effective energy storage technologies, such as advanced lithium-ion batteries, are essential to ensure a stable supply when sunlight or wind is unavailable."
      ],
      "questions": [
        {
          "question": "What is mentioned as a key benefit of solar energy compared to fossil fuels?",
          "options": [
            "It is less expensive to install.",
            "It generates electricity without greenhouse gas emissions during operation.",
            "It works continuously regardless of weather conditions.",
            "It requires no battery storage."
          ],
          "answer": "It generates electricity without greenhouse gas emissions during operation.",
          "explanation": "The text states solar energy generates electricity without producing greenhouse gas emissions during operation."
        },
        {
          "question": "Why are energy storage technologies essential for renewable energy?",
          "options": [
            "To reduce the cost of solar panels.",
            "To maintain a stable power supply when sunlight or wind is unavailable.",
            "To replace fossil fuels immediately.",
            "To export energy to other countries."
          ],
          "answer": "To maintain a stable power supply when sunlight or wind is unavailable.",
          "explanation": "The passage notes batteries ensure a stable supply when sunlight or wind is unavailable."
        }
      ]
    },
    {
      "title": "Section 4: Cloze",
      "cloze": [
        {
          "text": "Every *morning*, Alex wakes *up* early to prepare for work. He enjoys drinking *coffee* while reading the daily *news* before leaving the house."
        }
      ]
    },
    {
      "title": "Section 5: Short Answer",
      "questions": [
        {
          "question": "Explain in 2-3 sentences why renewable energy adoption is important for the environment.",
          "options": []
        },
        {
          "question": "Describe a personal experience where you had to solve a difficult problem at school or work.",
          "options": []
        }
      ]
    }
  ]
}
</script>
</tj-test>`
    },
    {
        id: 'tj-chapter-book',
        tagName: 'tj-chapter-book',
        name: 'Chapter Book',
        icon: '📚',
        geminiUrl: 'https://gemini.google.com/gem/209dda1b768d',
        demoUrl: 'src/tj-chapter-book/test-chapter-book.html',
        description: 'Multi-chapter reader with integrated Text-to-Speech, translation toggles, and comprehension checks.',
        demoContent: `<tj-chapter-book>
{
  "title": "My Adventure",
  "chapters": [
    {
      "title": "Chapter 1: The Beginning",
      "text": "Once upon a time in a small village...",
      "questions": [
        {
          "question": "Where does the story take place?",
          "options": ["A small village", "A big city"],
          "correctIndex": 0
        }
      ]
    }
  ]
}
</tj-chapter-book>`
    },
    {
        id: 'tj-pronunciation',
        tagName: 'tj-pronunciation',
        name: 'Pronunciation',
        icon: '🗣️',
        geminiUrl: 'https://gemini.google.com/gem/d45e00c6dcb5',
        demoUrl: 'src/tj-pronunciation/test-pronunciation.html',
        description: 'Practice speaking with native audio comparison, minimal pair discrimination, and sentence scrambles.',
        demoContent: `<tj-pronunciation>
{
  "title": "Unit 1: Basic Listening & Recording",
  "instructions": "Listen carefully to the audio and practice speaking.",
  "activities": [
    {
      "type": "listen_record",
      "targetText": "The ship is leaving the port.",
      "phoneticHint": "ðə ʃɪp ɪz ˈliːvɪŋ ðə pɔːt"
    }
  ]
}
</tj-pronunciation>`
    },
    {
        id: 'tj-quiz-element',
        tagName: 'tj-quiz-element',
        name: 'Quiz Element (Legacy)',
        icon: '📝',
        geminiUrl: 'https://gemini.google.com/gem/4bbfe190f849',
        demoUrl: 'src/tj-quiz-element/test-quiz.html',
        description: 'Legacy quiz component. Maintained for support of existing quizzes.',
        demoContent: `<tj-quiz-element submission-url="YOUR_GAS_URL">
<script type="text/markdown">
B1 English Practice: Past Simple & Past Continuous

---instructions
Read the passage below and answer the questions.

---text
Last weekend, Sarah decided to take a trip to the mountains. While she was driving, it started to rain.

---questions-2
Q: Where did Sarah go?
A: To the mountains [correct]
A: To the beach

Q: What was she doing when it rained?
A: Driving [correct]
A: Sleeping
</script>
</tj-quiz-element>`
    }
];

export function getComponentByTag(tagName) {
    if (!tagName) return null;
    const clean = tagName.toLowerCase().trim();
    const stripped = clean.replace(/^tj-/, '');
    return COMPONENT_CATALOG.find(c => 
        c.tagName === clean || 
        c.id === clean || 
        c.tagName === stripped || 
        c.id === stripped ||
        c.tagName === `tj-${stripped}` ||
        c.id === `tj-${stripped}`
    ) || null;
}

export function getDemoContent(tagOrId) {
    const comp = getComponentByTag(tagOrId);
    return comp ? comp.demoContent : null;
}

