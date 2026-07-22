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
        description: 'Interactive story reader with word highlighting, text-to-speech, and memory matching activities.'
    },
    {
        id: 'grammar-hearts',
        tagName: 'grammar-hearts',
        name: 'Grammar Hearts',
        icon: '❤️',
        geminiUrl: 'https://gemini.google.com/gem/d8664c27f003',
        demoUrl: 'src/tj-grammar-hearts/test-grammar.html',
        description: 'Gamified grammar practice with lives, multiple-choice, and sentence scrambling challenges.'
    },
    {
        id: 'tj-info-gap',
        tagName: 'tj-info-gap',
        name: 'Info Gap',
        icon: '👥',
        geminiUrl: 'https://gemini.google.com/gem/c4ce1f63dfd9',
        demoUrl: 'src/tj-info-gap/test-info-gap.html',
        description: 'Collaborative multi-player activity for communication practice or single-player mode with AI partner.'
    },
    {
        id: 'tj-listening',
        tagName: 'tj-listening',
        name: 'Listening',
        icon: '🎧',
        geminiUrl: 'https://gemini.google.com/gem/a282ff7b4b26',
        demoUrl: 'src/tj-listening/test-listening.html',
        description: 'Comprehensive listening lesson component with vocabulary preview, dialogue, and comprehension quiz.'
    },
    {
        id: 'tj-speed-review',
        tagName: 'tj-speed-review',
        name: 'Speed Review',
        icon: '🏎️',
        geminiUrl: 'https://gemini.google.com/gem/5a7412981b90',
        demoUrl: 'src/tj-speed-review/test-speed.html',
        description: 'Fast-paced review game where students score points based on how quickly they can answer questions.'
    },
    {
        id: 'tj-test',
        tagName: 'tj-test',
        name: 'Test',
        icon: '📈',
        geminiUrl: 'https://gemini.google.com/gem/1GR1C-bhcrWfUS79b0SA1Llna4NiWaCef?usp=sharing',
        demoUrl: 'src/tj-test/test-progressive.html',
        description: 'Multi-stage level placement test powered by JSON configuration where students unlock subsequent levels by meeting target score cutoffs.'
    },
    {
        id: 'tj-chapter-book',
        tagName: 'tj-chapter-book',
        name: 'Chapter Book',
        icon: '📚',
        geminiUrl: 'https://gemini.google.com/gem/209dda1b768d',
        demoUrl: 'src/tj-chapter-book/test-chapter-book.html',
        description: 'Multi-chapter reader with integrated Text-to-Speech, translation toggles, and comprehension checks.'
    },
    {
        id: 'tj-pronunciation',
        tagName: 'tj-pronunciation',
        name: 'Pronunciation',
        icon: '🗣️',
        geminiUrl: 'https://gemini.google.com/gem/d45e00c6dcb5',
        demoUrl: 'src/tj-pronunciation/test-pronunciation.html',
        description: 'Practice speaking with native audio comparison, minimal pair discrimination, and sentence scrambles.'
    },
    {
        id: 'tj-quiz-element',
        tagName: 'tj-quiz-element',
        name: 'Quiz Element (Legacy)',
        icon: '📝',
        geminiUrl: 'https://gemini.google.com/gem/4bbfe190f849',
        demoUrl: 'src/tj-quiz-element/test-quiz.html',
        description: 'Legacy quiz component. Maintained for support of existing quizzes.'
    }
];

export function getComponentByTag(tagName) {
    if (!tagName) return null;
    const clean = tagName.toLowerCase().trim();
    return COMPONENT_CATALOG.find(c => c.tagName === clean || c.id === clean) || null;
}
