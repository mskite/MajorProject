function doGet() {
  return HtmlService.createHtmlOutputFromFile("UI")
}

// function getSS(){
//   //connect to the spreadsheet and range to get the data
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const sheet = ss.getSheetByName("hairColour");
//   //get the info from these cells
//   var range = sheet.getRange("A2:B93");
//   var values = range.getValues();
// };
//   console.log(classes);
