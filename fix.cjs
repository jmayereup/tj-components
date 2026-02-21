const fs = require('fs');

// Fix tj-shared.css
let css = fs.readFileSync('src/tj-shared.css', 'utf-8');
css = css.replace('<style>/* component specific styles *\\/</style>', '<style>/* component specific styles *\\/<\\/style>');
fs.writeFileSync('src/tj-shared.css', css);

// Fix tj-pronunciation/index.js
let js = fs.readFileSync('src/tj-pronunciation/index.js', 'utf-8');

const oldScrambleLogic = `      // 1) Initialize bank items (empty id means no word mapped yet)
      const mappedBank = Array.from({ length: 12 }, () => ({ word: "", id: null }));
      
      // Shuffle exactly the words array (it must be 12 items for phonics logic)
      const wordsToUse = [...activity.words];
      const shuffledWords = wordsToUse.sort(() => 0.5 - Math.random());
      
      shuffledWords.forEach((word, wIdx) => {
        if (wIdx < mappedBank.length) {
          mappedBank[wIdx] = { word, id: wIdx };
        }
      });`;

const newScrambleLogic = `      let allWords = [...activity.words];
      if (activity.distractors && Array.isArray(activity.distractors)) {
        allWords = allWords.concat(activity.distractors);
      }

      // Shuffle the words
      for (let i = allWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
      }`;

js = js.replace(oldScrambleLogic, newScrambleLogic);

fs.writeFileSync('src/tj-pronunciation/index.js', js);
console.log('Fixes applied.');
