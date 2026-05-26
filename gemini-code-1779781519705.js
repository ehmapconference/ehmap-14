// Konfigurasi ID Folder & URL Google Drive Anda
var FOLDER_ABSTRAK_ID = '1a01-2kPQv_2kO1NZWvxX2DeYXBIHj-GB'; 
var FOLDER_PDF_ID = '1p85Lax5zoqFzhvObAjwj1O06UmaHM7Yv';

function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('EHMAP-14 International Conference')
    .setFaviconUrl('https://my.unri.ac.id/favicon.ico')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Fungsi Setup database Spreadsheet
function setupDatabase() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetAkun = ss.getSheetByName('Akun');
  if (!sheetAkun) {
    sheetAkun = ss.insertSheet('Akun');
    sheetAkun.appendRow(['Timestamp', 'Email', 'Password', 'Role']);
    sheetAkun.appendRow([new Date(), 'admin', 'admin123', 'admin']); 
  }
  // ... simpan kode logika GAS Anda seterusnya di folder backend ini
}