describe("FrequencyCounter", function(){
  var FrequencyCounter = require('../src/FrequencyCounter');
  var frequencyCounter;
  var inputArray = [
    "test",
    "array",
    "of",
    "words",
    "and",
    "words",
    "and",
    "more",
    "words"
  ];
  var expectedOutput = {
    test: 1,
    array: 1,
    of: 1,
    words: 3,
    and: 2,
    more: 1,
  }

  beforeEach(function(){
    frequencyCounter = new FrequencyCounter();
  });

  it("counts the occurences of each word in a given array of words", function(){
    expect(frequencyCounter.getWordCounts(inputArray)).toEqual(expectedOutput);
  });

  it("returns an empty object if the input word array is empty", function(){
    expect(frequencyCounter.getWordCounts([])).toEqual({});
  });
});
