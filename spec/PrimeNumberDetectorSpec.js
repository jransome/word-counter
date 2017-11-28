describe("PrimeNumberDetector", function(){
  var PrimeNumberDetector = require('../src/PrimeNumberDetector');
  var primeNumberDetector;

  beforeEach(function(){
    primeNumberDetector = new PrimeNumberDetector();
  });

  it("returns true if the given integer is a prime number", function(){
    expect(primeNumberDetector.isPrime(7)).toBeTruthy();
    expect(primeNumberDetector.isPrime(29)).toBeTruthy();
    expect(primeNumberDetector.isPrime(53)).toBeTruthy();
    expect(primeNumberDetector.isPrime(367)).toBeTruthy();
    expect(primeNumberDetector.isPrime(49993)).toBeTruthy();
  });

  it("returns false if the given integer is a composite number", function(){
    expect(primeNumberDetector.isPrime(4)).toBeFalsy();
  });

  it("returns false if the given integer is negative", function(){
    expect(primeNumberDetector.isPrime(-17)).toBeFalsy();
  });

  it("returns false if the given integer is 1", function(){
    expect(primeNumberDetector.isPrime(1)).toBeFalsy();
  });

  it("returns false if the given integer is 0", function(){
    expect(primeNumberDetector.isPrime(0)).toBeFalsy();
  });

  it("returns false if given a non-integer", function(){
    expect(primeNumberDetector.isPrime(33.2)).toBeFalsy();
  });
});
