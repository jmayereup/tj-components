// Configuration file for TJ Components
export const config = {
    teacherCode: import.meta.env?.VITE_TEACHER_CODE || '6767',
    resetCode: import.meta.env?.VITE_RESET_CODE || '7676'
};


/**
 * Resolves standard configuration options (submission URL, data URL, teacher code, reset code)
 * for any TJ Component from attributes, global configuration/env, or default fallbacks.
 * 
 * Lookup Precedence:
 * 1. Element Attribute (highest priority)
 * 2. Global Configuration / Environment Variables (tj-config.js / VITE_*)
 * 3. Fallback Default
 * 
 * @param {HTMLElement} element 
 * @returns {{ submissionUrl: string, dataUrl: string|null, teacherCode: string, startCode: string, resetCode: string }}
 */
export function resolveComponentParams(element) {
    // 1. Submission URL (Requires submission-url attribute)
    const submissionUrl = 
        element.getAttribute('submission-url') ||
        element.getAttribute('submission_url') ||
        '';

    // 2. Data / Content URL
    const dataUrl = 
        element.getAttribute('url') ||
        element.getAttribute('src') ||
        null;

    // 3. Start Quiz Code & Teacher Code
    const startCode = 
        element.getAttribute('start-code') ||
        element.getAttribute('start_code') ||
        element.getAttribute('start-quiz-code') ||
        element.getAttribute('code') ||
        config.teacherCode ||
        '1234';

    const teacherCode = 
        element.getAttribute('teacher-code') ||
        element.getAttribute('teacher_code') ||
        element.getAttribute('submit-code') ||
        element.getAttribute('submit_code') ||
        element.getAttribute('reset-code') ||
        element.getAttribute('reset_code') ||
        config.resetCode ||
        '7676';

    return { submissionUrl, dataUrl, teacherCode: startCode, startCode, resetCode: teacherCode };
}

