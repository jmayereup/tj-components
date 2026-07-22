# Google Sheets Submission Setup Guide

This guide explains how teachers can set up their own Google Apps Script endpoint to automatically collect score submissions from any of the TJ Components (e.g., `tj-quiz-element`, `tj-grammar-hearts`, `tj-reader`, `tj-pronunciation`, etc.) into their own Google Sheet.

> [!NOTE]
> **🔒 Privacy & Data Ownership (Why Google Apps Script?)**
> TJ Components use a **Zero-Data Retention Architecture**. Our website and CDN **never see, collect, or store** student information (such as student IDs, nicknames, or quiz scores). 
> By setting up your own Google Apps Script Web App, score submissions are sent **directly** from the student's browser to your personal or institutional Google account. You maintain 100% data ownership and privacy compliance (e.g. FERPA) without any third-party middleman database or server tracking.

---


## 1. Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new, blank spreadsheet.
2. At the bottom, rename the default sheet tab (usually `Sheet1`) to exactly: **`Submissions`** (Note the capital **S**).
3. *(Optional)* You can pre-fill row 1 with headers, but the script will automatically populate headers if the sheet is empty:
   `Timestamp, Nickname, Homeroom, Student ID, Quiz Name, Score, Total Questions, Written Answers`.

---

## 2. Add the Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script** from the top menu.
2. Clear out any default code in the editor (e.g. `function myFunction() { ... }`).
3. Copy and paste the following script into the Apps Script editor:

```javascript
/** @OnlyCurrentDoc */

/**
 * This function handles HTTP POST requests sent from TJ Components.
 * @param {Object} e - The event parameter for a POST request.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No data provided.");
    }

    const data = JSON.parse(e.postData.contents);

    const sanitize = (input) => {
      if (input === null || input === undefined) return "";
      let str = String(input).substring(0, 2000).trim();
      if (/^[=\+\-@]/.test(str)) {
        str = "'" + str;
      }
      return str;
    };

    const cleanScore = Number(data.score) || 0;
    const cleanTotal = Number(data.total) || 0;

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Submissions');

    if (!sheet) {
      throw new Error("Target sheet not found.");
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Nickname', 'Homeroom', 'Student ID', 
        'Quiz Name', 'Score', 'Total Questions', 'Written Answers'
      ]);
    }

    sheet.appendRow([
      new Date(),
      sanitize(data.nickname),
      sanitize(data.homeroom),
      sanitize(data.studentId),
      sanitize(data.quizName),
      cleanScore,
      cleanTotal,
      sanitize(data.writtenAnswers)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Your score was submitted successfully!'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error("Submission Error: ", error);

    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': 'An error occurred while processing your submission.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** (floppy disk) icon at the top of the editor.

---

## 3. Deploy the Script as a Web App
1. In the Apps Script editor, click the blue **Deploy** button (top right) and select **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Fill out the configuration fields:
   - **Description**: e.g., `TJ Components Submissions`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: **`Anyone`** *(Crucial: allows students to submit without Google authentication)*.
4. Click **Deploy**.
5. Click **Authorize Access**, log into your Google account, click **Advanced**, click **Go to Untitled project (unsafe)**, and click **Allow**.
6. Copy the resulting **Web App URL** (starts with `https://script.google.com/macros/s/.../exec`).

---

## 4. Connecting Your Web App URL to Components

You can connect your custom Apps Script URL to any TJ Component using either of the following methods:

### Method A: HTML Attribute
Add the `submission-url` (or `submission_url`) attribute directly to any TJ Component element in HTML:
```html
<tj-quiz-element test-mode start-code="1234" teacher-code="7676" submission-url="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec">
  ...
</tj-quiz-element>
```

### Method B: Environment Variable (Self-Hosting / Building)
Copy `.env.example` to `.env` in the root of the project before building:
```env
VITE_SUBMISSION_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
VITE_TEACHER_CODE=6767
VITE_RESET_CODE=7676
```

---

## 5. Parameter Lookup Precedence Order
All 8 components evaluate configuration options in the following strict order:
1. **Element HTML Attribute** (e.g. `submission-url="..."`, `code="..."`, `teacher-code="..."`, `src="..."`)
2. **Global Configuration / Environment Variable** (`tj-config.js` / `VITE_SUBMISSION_URL`, `VITE_TEACHER_CODE`, `VITE_RESET_CODE`)
3. **Default System Fallback**

---

## 6. Student Submission & Proof of Work Process
- **Teacher Code Verification**: To officially submit score data to Google Sheets, students enter the Teacher Code (`6767` by default).
- **Custom Teacher Code**: Override via `code="1234"` / `teacher-code="1234"` attribute or `VITE_TEACHER_CODE` environment variable.
- **Screenshot Fallback**: If the submission endpoint is unavailable or code is invalid, students are prompted to screenshot their report card for manual submission to the teacher.

