describe("Reader", function(){
  var Reader = require('../src/Reader');
  var mockFilePath = 'spec/mock-data/mockTextFile.txt';
  var mockFileContent = "This is a mock text file. It's not very long.\n";

  beforeEach(function(){
    reader = new Reader();
  });

  it("reads a text file and returns a string containing its contents", function(){
    expect(reader.readFile(mockFilePath)).toEqual(mockFileContent);
  });
});
