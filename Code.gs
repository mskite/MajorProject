function doGet(e) {
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile("UI"); 
  //creates the HTML file's output
}

function userClicked(skinColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Data"); //works with the "Test" worksheet in "Major's Back End"

  var range = ws.getRange("I2").setFormula('=filter(D2:E106,E2:E106="' + skinColour + '")').activate(); 
  //edits filter in the active worksheet to sort for matches based on input 
  range = ws.getRange("I2:I15").getValues();
  var coloursOne = range; //links the results of the filter to the coloursOne variable
  return coloursOne;
}

function userClickedAgain(hairColour) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("Data");
  
  var range = ws.getRange("G2").setFormula('=filter(A2:A106,B2:B106="'+ hairColour +'")').activate();
  //edits filter in the active worksheet to sort for matches based on input
  range = ws.getRange("G2:G15").getValues();
  var coloursTwo = range; //links the results of the filter to the coloursTwo variable
  return coloursTwo;
}

function getSS() {
  //connect to the spreadsheet and range to get the data
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Test2");
  //get the info from these cells
  var range = sheet.getRange("A1:D106");
  var values = range.getValues();
};

function getPalettes(commonColour) {
  commonColour = "Yellow";//hardcoded for now
  
  //loop through each colour, find it in the spreadsheet and retrieve 
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Palettes");
  var filter = sheet.getFilter();
  filter.remove();

  sheet.getRange('A1:E22').createFilter();
  sheet.getRange('A1').activate();
  var filter = sheet.getFilter();
  var criteria = SpreadsheetApp.newFilterCriteria().whenTextEqualTo(commonColour).build();
  var results = filter.setColumnFilterCriteria(1, criteria);
  
  for (let i = 1; i < 22; i++) {
    if (sheet.isRowHiddenByFilter(i) == false && i > 1) {
      console.log(sheet.getRange("A"+i).getValue());
      var driveLink = sheet.getRange("B"+i).getValue();
      var alt = sheet.getRange("C"+i).getValue();
      var blurb = sheet.getRange("D"+i).getValue();
    }
  }
  var paletteResults = [driveLink, alt, blurb]
  console.log(paletteResults);
  return paletteResults;
}





