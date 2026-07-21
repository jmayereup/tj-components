// Configuration file for TJ Components
export const config = {
    // Shared endpoint for report cards / quiz submissions
    submissionUrl: import.meta.env?.VITE_SUBMISSION_URL || '',
    teacherCode: import.meta.env?.VITE_TEACHER_CODE || '6767'
};

const DEFAULT_SUBMISSION_URL = 'https://script.google.com/macros/s/AKfycbzqV42jFksBwJ_3jFhYq4o_d6o7Y63K_1oA4oZ1UeWp-M4y3F25r0xQ-Kk1n8F1uG1Q/exec';

/**
 * Resolves standard configuration options (submission URL, data URL, teacher code)
 * for any TJ Component from attributes, URL search parameters, global config, or defaults.
 * 
 * Lookup Precedence:
 * 1. Element Attribute (highest priority)
 * 2. Page URL Query Parameter (window.location.search)
 * 3. Global Configuration (tj-config.js / VITE_*)
 * 4. Fallback Default
 * 
 * @param {HTMLElement} element 
 * @returns {{ submissionUrl: string, dataUrl: string|null, teacherCode: string }}
 */
export function resolveComponentParams(element) {
    let searchParams;
    try {
        searchParams = typeof window !== 'undefined' && window.location ? new URLSearchParams(window.location.search) : new URLSearchParams();
    } catch (e) {
        searchParams = new URLSearchParams();
    }

    // 1. Submission URL
    const submissionUrl = 
        element.getAttribute('submission-url') ||
        element.getAttribute('submission_url') ||
        searchParams.get('submission-url') ||
        searchParams.get('submission_url') ||
        config.submissionUrl ||
        DEFAULT_SUBMISSION_URL;

    // 2. Data / Content URL
    const dataUrl = 
        element.getAttribute('url') ||
        element.getAttribute('src') ||
        searchParams.get('url') ||
        searchParams.get('src') ||
        null;

    // 3. Teacher Code
    const teacherCode = 
        element.getAttribute('code') ||
        element.getAttribute('teacher_code') ||
        searchParams.get('code') ||
        searchParams.get('teacher_code') ||
        config.teacherCode ||
        '6767';

    return { submissionUrl, dataUrl, teacherCode };
}

