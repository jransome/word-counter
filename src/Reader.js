var fs = require('fs');

function Reader() {}

Reader.prototype.readFile = function(filePath) {
  let fileContents = fs.readFileSync(filePath);
  return fileContents.toString();
};

module.exports = Reader;
