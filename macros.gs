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