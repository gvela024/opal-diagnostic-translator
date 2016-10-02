var DataParser = require('./src/DataParser');
var Translator = require('./src/Translator');

// console.log(process.argv[2]);
if(process.argv[2] === undefined) {
  console.error('ERROR: Missing input file.');
  process.exit(1);
}

var fs = require('fs');
var filename = process.argv[2];
var rawData = fs.readFileSync(filename, 'utf8');

var translator = Translator();
var dataParser = new DataParser(rawData);

var dataObject = dataParser.parse();
dataObject.diagnostics = translator.translateToObject(dataObject);
console.log(JSON.stringify(dataObject, null, 3));
