describe("TextFileReader", function(){
  var TextFileReader = require('../src/TextFileReader');
  var textFileReader;
  var mockFilePath = 'spec/mock-data/mockTextFile.txt';
  var mockFileContent = "This is a mock text file. It's not very long.\n";

  beforeEach(function(){
    textFileReader = new TextFileReader();
  });

  it("reads a text file and returns a string containing its contents", function(){
    expect(textFileReader.readFile(mockFilePath)).toEqual(mockFileContent);
  });
});
