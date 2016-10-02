var DataParser = require('./src/DataParser');
var Translator = require('./src/Translator');

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

  var dataObject = dataParser.parse();
  dataObject.diagnostics = translator.translateToObject(dataObject);
  console.log(JSON.stringify(dataObject, null, 3));
} catch (error) {
  console.error('\n' + error + '\n');
}
