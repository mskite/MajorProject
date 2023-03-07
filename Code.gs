function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("UI");
}

function userClicked(skinColour, hairColour) {
  //var url = "https://docs.google.com/spreadsheets/d/1kpZ4wgx3qg4xLiPPmegWcU_ObCEsYzkorzk4KG6IVS8/edit#gid=794297814";
  //var ss = SpreadSheetApp.openByUrl(url);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test2");
  //ws.appendRow([skinColour]);
  Logger.log("A user entered their skin tone as " + skinColour + " and their hair colour as " + hairColour);
}

// function userClickedAgain(hairColour) {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   var ws = ss.getSheetByName("Test2");
//   Logger.log("A user entered their hair colour as " + hairColour)
// }

function getSS() {
  //connect to the spreadsheet and range to get the data
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Test2");
  //get the info from these cells
  var range = sheet.getRange("A1:B2");
  var values = range.getValues();
  console.log(values);
};

function ChooseHairColour() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('D2').activate();
  spreadsheet.getCurrentCell().setFormula('=filter(A2:B93,B2:B93="black")');
  spreadsheet.getRange('D3').activate();
};

function ChooseSkinTone() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('D2').activate();
  spreadsheet.getCurrentCell().setFormula('=filter(A2:B97,B2:B97="warm dark")');
  spreadsheet.getRange('D3').activate();
};