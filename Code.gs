function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("UI");
}

function userClicked(skinColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test");

  var range = ws.getRange("I2").setFormula('=filter(D2:E97,E2:E97="' + skinColour + '")').activate();
  range = ws.getRange("I2:I15").getValues();
  var coloursOne = range;
  return coloursOne;
}

function userClickedAgain(hairColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test");
  
  var range = ws.getRange("G2").setFormula('=filter(A2:B93,B2:B93="'+ hairColour +'")').activate();
  range = ws.getRange("G2:G15").getValues();
  var coloursTwo = range;
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









