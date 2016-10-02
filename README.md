# opal-diagnostics-translator
This application will turn the raw Opal Diagnostics Data into a JSON object.

## Prerequisites
You must have `node.js` installed in your machine.

## Instructions
1. Clone this repo
2. `cd` into the root directory
3. Run `npm install`
4. Run the application with `node index.js [path/to/raw/data/file.txt]`. For an example, run `node index.js opal-data/data-set-1.txt`. The results will be printed to the console. If you would like to save them to a file, use `node index.js [path/to/raw/data/file.txt] >> name-of-file.json`.

## Things to consider
This has hardly any error checking. Unexpected behavior will result due to misuse.
