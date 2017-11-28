describe("Controller", function(){
  var Controller = require('../src/ApplicationController');
  var controller;

  var mockFilePath = 'spec/mock-data/mockTextFile.txt';
  var expectedWordCounts = { this: 1, is: 1, a: 1, very: 2, short: 1, story: 1 }
  var expectedStringOutputs = [
    "Word: this | Occurrences: 1 | Is the number of occurrences a prime number? false",
    "Word: is | Occurrences: 1 | Is the number of occurrences a prime number? false",
    "Word: a | Occurrences: 1 | Is the number of occurrences a prime number? false",
    "Word: very | Occurrences: 2 | Is the number of occurrences a prime number? true",
    "Word: short | Occurrences: 1 | Is the number of occurrences a prime number? false",
    "Word: story | Occurrences: 1 | Is the number of occurrences a prime number? false"
  ];

  beforeEach(function(){
    controller = new Controller();
  });

  // Note: the following tests are not isolated from other objects and are therefore
  // effectively integration tests.

  it("calculates the word-count", function(){
    expect(controller.executeWordCount(mockFilePath)).toEqual(expectedWordCounts);
  });

  it("creates an array of strings to be outputted", function(){
    expect(controller.getOutputStrings(expectedWordCounts)).toEqual(expectedStringOutputs);
  });

  it("outputs results to the console", function(){
    spyOn(console, 'log');
    controller.runApplication(mockFilePath);
    expectedStringOutputs.forEach(function(expectedWordOutput){
      expect(console.log).toHaveBeenCalledWith(expectedWordOutput);
    });
  });
})
