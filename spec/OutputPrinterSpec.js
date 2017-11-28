describe("OutputPrinter", function(){
  var OutputPrinter = require('../src/OutputPrinter');
  var outputPrinter;
  var word = "Spock";
  var occurrences = 7;
  var isPrime = true;
  var expectedPrintOutput = "Word: Spock | Occurrences: 7 | Is the number of occurrences a prime number? true";

  beforeEach(function(){
    outputPrinter = new OutputPrinter();
  });

  it("returns a string containing the word, its number of occurrences, and whether this is a prime number", function(){
    expect(outputPrinter.printWordCountResult(word, occurrences, isPrime)).toEqual(expectedPrintOutput);
  });
});
