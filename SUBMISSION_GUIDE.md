# Google Sheets Submission Setup Guide

This guide explains how teachers can set up their own Google Apps Script endpoint to automatically collect score submissions from any of the TJ Components (e.g., `tj-quiz-element`, `tj-grammar-hearts`, `tj-reader`, `tj-pronunciation`, etc.) into their own Google Sheet.

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

You can connect your custom Apps Script URL to any TJ Component using any of the following methods:

### Method A: Page URL Search Parameter (No Code Modifications Needed!)
If you share or embed an activity page, simply append `submission-url` (or `submission_url`) to the browser URL:
```text
https://your-site.com/quiz.html?submission-url=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Method B: HTML Attribute
Add the `submission-url` (or `submission_url`) attribute directly to any TJ Component element in HTML:
```html
<tj-quiz-element test-mode start-code="1234" teacher-code="7676" submission-url="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec">
  ...
</tj-quiz-element>
```

### Method C: Data / Content URL via Parameter or Attribute
Load activity JSON data directly from a URL using `url` or `src`:
```html
<!-- Via HTML attribute -->
<tj-grammar-hearts 
  src="https://example.com/data/lesson1.json" 
  submission-url="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec">
</tj-grammar-hearts>

<!-- Or via URL parameters in browser address bar -->
https://your-site.com/activity.html?url=https://example.com/lesson1.json&submission-url=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Method D: Environment Variable (When Building/Bundling)
Create a `.env` file in the root of the project before building:
```env
VITE_SUBMISSION_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

---

## 5. Parameter Lookup Precedence Order
All 8 components evaluate configuration options in the following strict order:
1. **Element HTML Attribute** (e.g. `submission-url="..."`, `code="..."`, `src="..."`)
2. **Page URL Query Parameter** (e.g. `?submission-url=...`, `?code=...`, `?url=...`)
3. **Global Configuration / Environment Variable** (`VITE_SUBMISSION_URL`, `VITE_TEACHER_CODE`)
4. **Default System Fallback**

---

## 6. Student Submission & Proof of Work Process
- **Teacher Code Verification**: To officially submit score data to Google Sheets, students enter the Teacher Code (`6767` by default).
- **Custom Teacher Code**: Override via `code="1234"` attribute or `?code=1234` URL query parameter.
- **Screenshot Fallback**: If the submission endpoint is unavailable or code is invalid, students are prompted to screenshot their report card for manual submission to the teacher.

