function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("UI");
}

function userClicked(skinColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test");
  var range = ws.getRange("I2:I6").getValues();
  var coloursOne = range;
  //Logger.log("A user entered their skin tone as " + skinColour + " and their hair colour as " + hairColour);
  return coloursOne;
}

function userClickedAgain(hairColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test");
  var range = ws.getRange("G2:G7").getValues();
  var coloursTwo = range;
  //Logger.log("A user entered their skin tone as " + skinColour + " and their hair colour as " + hairColour);
  return coloursTwo;
}

function getSS() {
  //connect to the spreadsheet and range to get the data
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Test2");
  //get the info from these cells
  var range = sheet.getRange("A1:D97");
  var values = range.getValues();
  console.log(values);
};

// function ChooseHairColour() {
//   var spreadsheet = SpreadsheetApp.getActive();
//   spreadsheet.getRange('D2').activate();
//   spreadsheet.getCurrentCell().setFormula('=filter(A2:B93,B2:B93="black")');
//   spreadsheet.getRange('D3').activate();
// };

// function ChooseSkinTone() {
//   var spreadsheet = SpreadsheetApp.getActive();
//   spreadsheet.getRange('D2').activate();
//   spreadsheet.getCurrentCell().setFormula('=filter(A2:B97,B2:B97="warm dark")');
//   spreadsheet.getRange('D3').activate();
// };









