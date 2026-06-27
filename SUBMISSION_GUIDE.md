# Google Sheets Submission Setup Guide

This guide explains how to set up a Google Apps Script to receive score submissions from the TJ Components (like `tj-pronunciation` and `tj-quiz-element`).

## 1. Create a Google Sheet
1. Open Google Sheets and create a new, blank spreadsheet.
2. At the bottom, rename the default sheet (usually `Sheet1`) to exactly: **`Submissions`** (Note the capital **S**).
3. *(Optional)* You can pre-fill the first row with headers, but the script will automatically create them for you if the sheet is completely empty: `Timestamp, Nickname, Homeroom, Student ID, Quiz Name, Score, Total Questions`.

## 2. Add the Apps Script
1. In the Google Sheet menu, click **Extensions** > **Apps Script**.
2. Delete any existing code in the editor (e.g., `function myFunction() { ... }`).
3. Paste the following code into the editor:

```javascript
/** @OnlyCurrentDoc
*/

/**
* This function handles HTTP POST requests.
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
4. Click the **Save** icon (floppy disk) at the top of the editor.

## 3. Deploy the Script as a Web App
1. In the Apps Script editor, click the blue **Deploy** button at the top right, then select **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Under **Configuration**:
   - **Description**: Enter a name (e.g., "TJ Components Submissions").
   - **Execute as**: Select **Me** (your Google account).
   - **Who has access**: Select **Anyone**. *(This is required so students can submit scores without logging into Google).*
4. Click **Deploy**.
5. You will see a prompt for **Authorize Access**. Click it, select your Google Account, click **Advanced** at the bottom, and click **Go to Untitled project (unsafe)**. Click **Allow** to give the script permission to edit your spreadsheet.
6. Once deployed, you will be given a **Web app URL**. Copy this URL.

## 4. Connect the URL to Your Components
To connect the Web app URL to all your components, create a `.env` file in the root of the project and define the `VITE_SUBMISSION_URL` environment variable:

```env
VITE_SUBMISSION_URL=YOUR_WEB_APP_URL_HERE
```

Make sure that `.env` is ignored by Git in your `.gitignore` file so that your private endpoint URL is not committed. The build system will automatically inject this URL into all the components during compiling.

Your components are now ready to successfully send data straight to your Google Sheet!

## 5. Student Submission Process
The system is designed with a "Proof of Work" mechanism:
- **Teacher Code (Optional for Reports)**: Students can generate their report card even without entering the teacher code. This allows them to see their progress immediately.
- **Updating the Code**: If a student missed the code or entered it wrong at the start, they can **update it directly on the report card screen** before submitting.
- **Submission (Locked)**: To officially submit the score to your Google Spreadsheet, the student **must** enter the correct Teacher Code (`6767`) in the report form (either at the start or on the report screen).
- **Screenshot Fallback**: If a student does not have the teacher code or enters it incorrectly, they will be prompted with an alert to **take a screenshot** of their report card and show it to you manually. This ensures that even without a "verified" database submission, you can still verify their work.

> [!TIP]
> You can change the required teacher code in `src/tj-pronunciation/index.js` by searching for the string `'6767'`.
