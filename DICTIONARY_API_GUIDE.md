# Hybrid Dictionary & Translation API Strategy

This document outlines the zero-key, free approach for providing dictionary definitions and translations in language learning applications supporting multiple languages (English, Spanish, French, German, Thai).

## Objective
Provide robust, pedagogical dictionary data (parts of speech, definitions) for major languages, while falling back to a reliable 1:1 translation for unsupported words, slang, conjugated forms, or unsupported languages.

## The Strategy

We use a two-tiered "Hybrid" approach, executed client-side without the need for API keys or backend proxies.

1.  **Primary Data Source: [freedictionaryapi.com](https://freedictionaryapi.com)**
    *   **What it is:** A free API serving data from Wiktionary.
    *   **Pros:** Requires no API key, CORS is enabled, and it returns rich pedagogical data (definitions, parts of speech, phonetics, example sentences) rather than just simple translations.
    *   **Supported Languages (Excellent):** English (`en`), Spanish (`es`), French (`fr`), German (`de`).
    *   **Data Structure:** Returns an array of objects containing `entries` or `meanings` with deep nested data for different parts of speech.

2.  **Fallback Data Source: Google Translate API (Free Web Endpoint)**
    *   **What it is:** The undocumented but widely used frontend endpoint for Google Translate (`translate.googleapis.com`).
    *   **Pros:** 100% language coverage (including Thai and complex conjugations), exceptionally fast, rarely rate-limited for standard user-click usage.
    *   **Cons:** Only provides a 1:1 translation in the target language (usually English), lacking grammatical context.
    *   **When to use:** In a `catch` block or conditional fallback when the primary dictionary API returns a 404 (word not found) or an empty data structure.

## Implementation Example (React/TypeScript)

Below is an example of the core fetch logic used to power this hybrid approach:

```typescript
// Helper to map app languages to API-friendly ISO codes
const getLanguageCode = (lang: string) => {
  const map: Record<string, string> = {
    'english': 'en',
    'spanish': 'es',
    'french': 'fr',
    'german': 'de',
    'thai': 'th'
  };
  return map[lang.toLowerCase()] || 'en'; // Default to English mapping
};

// The core data fetching function
const fetchWordData = async (word: string, langCode: string) => {
  try {
    // 1. Try the Multilingual Dictionary first
    const dictUrl = `https://freedictionaryapi.com/api/v1/entries/${langCode}/${encodeURIComponent(word)}`;
    const response = await fetch(dictUrl);
    
    if (response.ok) {
      const data = await response.json();
      
      // Safety Check: Freedictionaryapi sometimes returns 200 OK with an empty array or empty structure if it barely matches.
      const hasEntries = data && typeof data === 'object' && data.entries && data.entries.length > 0;
      const hasMeanings = Array.isArray(data) && data[0]?.meanings?.length > 0;
      
      if (hasEntries || hasMeanings) {
        return { type: 'dictionary', content: data };
      }
    }

    // 2. Fallback to Google Translate logic if dictionary fails or returns empty structural data
    const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${langCode}&tl=en&dt=t&q=${encodeURIComponent(word)}`;
    const transRes = await fetch(translateUrl);
    const transData = await transRes.json();
    return { type: 'translation', content: transData[0][0][0] };
    
  } catch (error) {
    console.error("Lookup failed", error);
    return null;
  }
};
```

## UI Considerations

When rendering the data returned from `fetchWordData`, the UI should adapt based on the `type` property returned:

*   **If `type === 'dictionary'`:** Render the part of speech prominently (e.g., in a styled pill or badge) followed by the primary definition. Ensure you handle both the new data structure (`content.entries[0].senses`) and the older structure (`content[0].meanings`) as the API occasionally varies its response format depending on the source dataset.
*   **If `type === 'translation'`:** Clearly indicate that this is a translation (to avoid confusing the user who might be expecting a target-language definition) and present the simple string.
*   **Action Buttons:** Use a label like "Translate / Dictionary" on the trigger button to accurately set user expectations. Provide an external link to Google Translate for further exploration if the user is still confused.
