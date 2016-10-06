var DataParser = require('./src/DataParser');
var Translator = require('./src/Translator');
var JsonToCsv = require('./src/JsonToCsv');

if (process.argv[2] === undefined) {
  console.error('\nError: Missing input file.\n');
  process.exit(1);
}

var fs = require('fs');
var filename = process.argv[2];
try {
  var rawData = fs.readFileSync(filename, 'utf8');
  var translator = Translator();
  var dataParser = new DataParser(rawData);
  var jsonToCsv = JsonToCsv();

  var dataObject = dataParser.parse();
  dataObject.diagnostics = translator.translateToObject(dataObject);
  var csv = jsonToCsv.parseJson(dataObject);
  console.log(csv);
} catch (error) {
  console.error('\n' + error + '\n');
}
