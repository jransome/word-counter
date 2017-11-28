function FrequencyCounter() {}

FrequencyCounter.prototype.getWordCounts = function(wordArray){
  let wordCounts = {};
  for (let i = 0; i < wordArray.length; i++) {
    if(wordCounts[wordArray[i]] !== undefined){
      wordCounts[wordArray[i]]++;
    } else {
      wordCounts[wordArray[i]] = 1;
    }
  }
  return wordCounts;
}

module.exports = FrequencyCounter;
