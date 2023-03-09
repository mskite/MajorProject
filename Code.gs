function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("UI");
}

function userClicked(skinColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test");
  var range = ws.getRange("I2:I6").getValues();
  var colours = range;
  //Logger.log("A user entered their skin tone as " + skinColour + " and their hair colour as " + hairColour);
  return colours;
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

