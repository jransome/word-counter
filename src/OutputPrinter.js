function OutputPrinter() {}

OutputPrinter.prototype.printWordCountResult = function(word, occurrences, isPrime){
  let outputString = "Word: " + word + " | ";
  outputString += ("Occurrences: " + occurrences + " | ");
  outputString += ("Is the number of occurrences a prime number? " + isPrime);
  return outputString;
};

module.exports = OutputPrinter;
