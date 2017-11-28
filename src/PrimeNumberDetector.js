function PrimeNumberDetector() {}

PrimeNumberDetector.prototype.isPrime = function(number){
  if (Number.isInteger(number) === false){
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0){
      return false; // if divisible then it is not prime
    }
  }

  return number > 1; // if not divisible, then it is prime if greater than 1
}

module.exports = PrimeNumberDetector;
