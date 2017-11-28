function StringParser() {}

StringParser.prototype.parseString = function (string) {
  return this.stringToWordArray(this.lowercaseString(string));
};

StringParser.prototype.stringToWordArray = function (string) {
  return string.match(/\b([a-zA-z0-9']+)\b/g);
};

StringParser.prototype.lowercaseString = function(string){
  return string.toLowerCase();
};

module.exports = StringParser;
