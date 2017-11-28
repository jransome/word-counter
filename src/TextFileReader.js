var fs = require('fs');

function TextFileReader() {}

TextFileReader.prototype.readFile = function(filePath) {
  let fileContents = fs.readFileSync(filePath);
  return fileContents.toString();
};

module.exports = TextFileReader;
