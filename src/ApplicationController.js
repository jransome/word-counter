var TextFileReader = require('./TextFileReader');
var StringParser = require('./StringParser');
var FrequencyCounter = require('./FrequencyCounter');
var PrimeNumberDetector = require('./PrimeNumberDetector');
var OutputPrinter = require('./OutputPrinter');

function Controller(consoleObject, textFileReader, stringParser, frequencyCounter, primeNumberDetector, outputPrinter) {
  this.textFileReader = textFileReader || new TextFileReader();
  this.stringParser = stringParser || new StringParser();
  this.frequencyCounter = frequencyCounter || new FrequencyCounter();
  this.primeNumberDetector = primeNumberDetector || new PrimeNumberDetector();
  this.outputPrinter = outputPrinter || new OutputPrinter();
}

Controller.prototype.runApplication = function(filePath){
  let wordCounts = this.executeWordCount(filePath);
  let outputStrings = this.getOutputStrings(wordCounts);
  this.logResultsToConsole(outputStrings);
}

Controller.prototype.executeWordCount = function(filePath){
  let text = this.textFileReader.readFile(filePath);
  let parsedText = this.stringParser.parseString(text);
  let wordCounts = this.frequencyCounter.getWordCounts(parsedText);
  return wordCounts;
}

Controller.prototype.getOutputStrings = function(wordCounts){
  let outputStrings = [];
  for (const word in wordCounts) {
    let isPrime = this.primeNumberDetector.isPrime(wordCounts[word]);
    let outputString = this.outputPrinter.printWordCountResult(word, wordCounts[word], isPrime);
    outputStrings.push(outputString);
  }
  return outputStrings;
}

Controller.prototype.logResultsToConsole = function(stringArray){
  stringArray.forEach(function(wordOutput){
    console.log(wordOutput);
  });
}

module.exports = Controller;
