// Configuration file for TJ Components
export const config = {
    // Shared endpoint for report cards / quiz submissions
    submissionUrl: import.meta.env?.VITE_SUBMISSION_URL || '',
    teacherCode: import.meta.env?.VITE_TEACHER_CODE || '6767'
};
