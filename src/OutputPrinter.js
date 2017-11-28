function OutputPrinter(wordHeader, occurrencesHeader, isPrimeHeader, divider) {
  this.wordHeader = wordHeader || "Word: ";
  this.occurrencesHeader = occurrencesHeader || "Occurrences: ";
  this.isPrimeHeader = isPrimeHeader || "Is the number of occurrences a prime number? ";
  this.divider = divider || " | ";
}

OutputPrinter.prototype.printWordCountResult = function(word, occurrences, isPrime){
  let outputString = this.wordHeader + word + this.divider;
  outputString += (this.occurrencesHeader + occurrences + this.divider);
  outputString += (this.isPrimeHeader + isPrime);
  return outputString;
};

module.exports = OutputPrinter;
