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
 * Handles HTTP POST requests sent from TJ Components.
 * TJ Components send using mode: 'no-cors' (no Content-Type header)
 * to avoid CORS preflight errors with Google Apps Script.
 * Data arrives as plain text via e.postData.contents.
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
1. **Element HTML Attribute** (e.g. `submission-url="..."`, `teacher-code="..."`, `submit-code="..."`, `src="..."`)
2. **Global Configuration / Environment Variable** (`tj-config.js` / `VITE_SUBMISSION_URL`, `VITE_TEACHER_CODE`, `VITE_RESET_CODE`)
3. **Empty / No Submission** — if no URL is configured, digital submission is disabled and students are directed to screenshot their report card

> **Important:** If no `submission-url` is configured, components display a "No submission URL configured" warning when students try to submit. There is **no default fallback endpoint** — you must supply your own GAS URL.

---

## 6. Student Submission & Proof of Work Process

### Submission Code Requirement
To submit score data to Google Sheets, students **must enter a valid Submission Code**. This protects your spreadsheet from unauthorized submissions by students at other schools or institutions who do not have your code.

**Submission Code Attributes** (all interchangeable):
- `submit-code="7676"` — recommended clean alias
- `teacher-code="7676"` — primary attribute (also used to unlock after tab-away in test mode)
- `reset-code="7676"` — legacy alias, backward compatible

**If the code is empty or wrong:** The component blocks the network request client-side — no data is sent to your spreadsheet. The student sees:
- Empty field: *"⚠️ Submission code required. Please enter the code provided by your teacher, or take a screenshot of this table."*
- Wrong code: *"❌ Invalid Submission Code. Please check the code provided by your teacher, or take a screenshot of this table."*

**Screenshot Fallback:** Students without a submission code can complete all activities and take a screenshot of their final report card to show their teacher manually.

### Test Mode vs Practice Mode
| | Test Mode (`test-mode`) | Practice Mode (`test-mode="false"`) |
|---|---|---|
| **Starting the activity** | Requires entering `start-code` | No code — opens immediately |
| **Submitting score report** | Requires valid `submit-code` / `teacher-code` | Requires valid `submit-code` / `teacher-code` |
| **Without a valid code** | Screenshot fallback shown | Screenshot fallback shown |

### CORS & Google Apps Script Compatibility
TJ Components send all submission requests using `fetch` with `mode: 'no-cors'` and **no custom headers**. This is required because Google Apps Script does not handle CORS preflight (`OPTIONS`) requests — setting a `Content-Type: application/json` header would trigger a browser preflight and cause the request to be blocked. The JSON payload is sent as plain text and parsed on the GAS side via `e.postData.contents`.
