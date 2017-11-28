describe("StringParser", function(){
  var StringParser = require('../src/StringParser');
  var inputString = "This is a TEST input string. It's a nice-looking string.";
  var expectedLowercaseOutput = "this is a test input string. it's a nice-looking string.";
  var expectedArrayOutput = ['This', 'is', 'a', 'TEST', 'input', 'string', "It's", 'a', 'nice-looking', 'string'];
  var expectedParsedOutput = ['this', 'is', 'a', 'test', 'input', 'string', "it's", 'a', 'nice-looking', 'string'];
  var hypenatedInputs = "just-in-time, mother-in-law, good-hearted";
  var expectedHyphenatedOutput = ['just-in-time', 'mother-in-law', 'good-hearted'];
  var apostropheInputs = "James', can't, you're";
  var expectedApostropheOutput = ["James", "can't", "you're"];

  beforeEach(function(){
    stringParser = new StringParser();
  });

  it("parses a given string into an array of lowercased words", function(){
    expect(stringParser.parseString(inputString)).toEqual(expectedParsedOutput);
  });

  it("converts a given string into an array of words", function(){
    expect(stringParser.stringToWordArray(inputString)).toEqual(expectedArrayOutput);
  });

  it("converts a given string to lowercase", function(){
    expect(stringParser.lowercaseString(inputString)).toEqual(expectedLowercaseOutput);
  });

  it("counts hypenated words as a single word", function(){
    expect(stringParser.stringToWordArray(hypenatedInputs)).toEqual(expectedHyphenatedOutput);
  });

  it("counts words with apostrophes as single words", function(){
    expect(stringParser.stringToWordArray(apostropheInputs)).toEqual(expectedApostropheOutput);
  });
});