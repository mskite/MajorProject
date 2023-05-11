function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("UI"); 
  //creates the HTML file's output
}

function userClicked(skinColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test"); //works with the "Test" worksheet in "Major's Back End"

  var range = ws.getRange("I2").setFormula('=filter(D2:E97,E2:E97="' + skinColour + '")').activate(); 
  //edits filter in the active worksheet to sort for matches based on input 
  range = ws.getRange("I2:I15").getValues();
  var coloursOne = range; //links the results of the filter to the coloursOne variable
  return coloursOne;
}

function userClickedAgain(hairColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Test");
  
  var range = ws.getRange("G2").setFormula('=filter(A2:B92,B2:B92="'+ hairColour +'")').activate();
  //edits filter in the active worksheet to sort for matches based on input
  range = ws.getRange("G2:G15").getValues();
  var coloursTwo = range; //links the results of the filter to the coloursTwo variable
  return coloursTwo;
}

// function findCommonElements(skinSliced, hairSliced) {
//   const finalResults = hairSliced.concat(skinSliced);
//   console.log(finalResults);
//   return finalResults;
// }

function getSS() {
  //connect to the spreadsheet and range to get the data
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Test2");
  //get the info from these cells
  var range = sheet.getRange("A1:D97");
  var values = range.getValues();
  console.log(values);
};









