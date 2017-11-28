describe("TextFileReader", function(){
  var TextFileReader = require('../src/TextFileReader');
  var textFileReader;
  var mockFilePath = 'spec/mock-data/mockTextFile.txt';
  var expectedFileContent = "This is a very very short story.\n";

  beforeEach(function(){
    textFileReader = new TextFileReader();
  });

  it("reads a text file and returns a string containing its contents", function(){
    expect(textFileReader.readFile(mockFilePath)).toEqual(expectedFileContent);
  });
});
