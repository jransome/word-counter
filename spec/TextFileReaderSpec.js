describe("TextFileReader", function(){
  var TextFileReader = require('../src/TextFileReader');
  var textFileReader;

  var testFilePath = 'spec/test-data/TestTextFile.txt';
  var testEmptyFilePath = 'spec/test-data/EmptyTextFile.txt';
  var expectedFileContent = "This is a very very short story.\n";

  beforeEach(function(){
    textFileReader = new TextFileReader();
  });

  it("reads a text file and returns a string containing its contents", function(){
    expect(textFileReader.readFile(testFilePath)).toEqual(expectedFileContent);
  });

  it("throws an error if the file is empty", function(){
    expect(function(){ textFileReader.readFile(testEmptyFilePath); }).toThrow(new Error("Selected file has no text!"));
  });
});
