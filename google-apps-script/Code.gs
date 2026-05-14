/**
 * Libra — Contact form backend (Google Apps Script Web App)
 *
 * Writes to the existing CRM sheet matching column headers by name.
 * Sheet columns detected: Company, Contact Person, Status, Last Contact,
 * Priority, Tags, Notes, Address, Email, Phone, Lead Source, Deals, URL
 */

// ====== CONFIG ======
var SHEET_ID    = '1U_u-_PtqjgFyFHu0hxiLYtha9yzWv7N9sbcCy8dqJyA';
var SHEET_NAME  = 'Πίνακας1';   // exact tab name visible in the sheet
var NOTIFY_EMAIL = 'auragram.web@gmail.com';
// ====================

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || '{}');

    var firstName = String(payload.firstName || '').trim();
    var lastName  = String(payload.lastName  || '').trim();
    var company   = String(payload.company   || '').trim();
    var email     = String(payload.email     || '').trim();
    var phone     = String(payload.phone     || '').trim();
    var shops     = String(payload.shops     || '').trim();

    if (!firstName || !lastName || !company || !email || !phone || !shops) {
      return jsonResponse({ ok: false, error: 'Missing fields' });
    }

    var now = new Date();
    appendToSheet_(now, firstName, lastName, company, email, phone, shops);
    sendNotification_(now, firstName, lastName, company, email, phone, shops);

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error(err);
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: 'libra-contact' });
}

function appendToSheet_(date, firstName, lastName, company, email, phone, shops) {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

  // Read header row to find column positions dynamically
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var col = {};
  headers.forEach(function(h, i) {
    col[String(h).trim()] = i + 1; // 1-based column index
  });

  // Build a new row matching existing columns
  var newRow = new Array(headers.length).fill('');

  function set(headerName, value) {
    if (col[headerName]) newRow[col[headerName] - 1] = value;
  }

  set('Company',        company);
  set('Contact Person', firstName + ' ' + lastName);
  set('Status',         'New Lead');
  set('Last Contact',   date);
  set('Priority',       'Medium');
  set('Tags',           'BEAUTY');
  set('Notes',          'Καταστήματα: ' + shops);
  set('Email',          email);
  set('Phone',          phone);
  set('Lead Source',    'Website (libra.gr)');

  sheet.appendRow(newRow);
}

function sendNotification_(date, firstName, lastName, company, email, phone, shops) {
  var subject = '[Libra] Νέα φόρμα επικοινωνίας — ' + firstName + ' ' + lastName + ' (' + company + ')';
  var body = [
    'Νέα υποβολή φόρμας από το libra.gr',
    '',
    'Ημερομηνία  : ' + date.toLocaleString('el-GR'),
    'Όνομα       : ' + firstName + ' ' + lastName,
    'Επιχείρηση  : ' + company,
    'Email       : ' + email,
    'Τηλέφωνο    : ' + phone,
    'Καταστήματα : ' + shops
  ].join('\n');

  MailApp.sendEmail({ to: NOTIFY_EMAIL, replyTo: email, subject: subject, body: body });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
