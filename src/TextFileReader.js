var fs = require('fs');

function TextFileReader() {}

TextFileReader.prototype.readFile = function(filePath) {
  let fileContents = fs.readFileSync(filePath).toString();
  if(fileContents === ""){
    throw new Error("Selected file has no text!");
  }
  return fileContents;
};

module.exports = TextFileReader;
