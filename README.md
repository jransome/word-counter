# Word Counter

## Specification
Given a book in a text file (http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt for example)

1.	Write an application that outputs the individual words that appear in the book, and how many times that word appears in the text file.
2.	The second part is to also output whether the number of times each word appears is a prime number.

The following assumptions can be made:
* Ignore punctuation and capitalisation
* TDD is expected

## Installation
As this application requires Node.js, install it from [here](https://nodejs.org/en/) if you don't already have it.

Open your terminal, navigate to the directory you wish to install to, then run the following commands to install the program and its dependencies:

```
$ git clone git@github.com:jransome/word-counter.git
$ cd word-counter
$ npm install
```

## Usage Instructions

In the terminal in the root directory, type the following:
```
$ node index.js
```
This will run the program on the `BookTextFile.txt` file included in the root directory. Example output:
```
Word: superior | Occurrences: 1 | Is the number of occurrences a prime number? false
Word: injured | Occurrences: 2 | Is the number of occurrences a prime number? true
Word: restored | Occurrences: 1 | Is the number of occurrences a prime number? false
Word: flames | Occurrences: 1 | Is the number of occurrences a prime number? false
Word: stars | Occurrences: 2 | Is the number of occurrences a prime number? true
Word: twinkling | Occurrences: 1 | Is the number of occurrences a prime number? false
```

To count the words in a different text file, copy it into the root directory and rename it `BookTextFile.txt`, then run the program again.

## Running tests
Test scripts are located within the `/spec` directory. Type the following into your terminal whilst in the root directory to run the tests:

```
$ npm test
```

## Approach and structure
I began by translating the above specification into the following user stories:
```
As a user
So I can know what words appear in a given text
I want to see a list of the words that occur in the text

As a user
So I can know the frequency of a word's appearance in a given text
I want to see the word with the number of occurrences next to it

As a user
So I can know the frequency of a word's appearance in a given text is a prime number
I want the program to indicate if the number of occurrences of a word is a prime number or not
```
I then broke this down further into a number of core steps:
1. Reading the text file.
2. Splitting the text into a list of words.
3. Counting the occurrences of each word.
4. Determining if the number of occurrences is a prime number.
5. Outputting this information.

Mapping these key steps as the responsibilities of different objects, I then test drove the development of my application with the following structure:

1. `TextFileReader` reads the file and returns a string of its contents.
2. `StringParser` takes this string and splits it into an array of lowercased words.
3. `FrequencyCounter` iterates over this array and returns a results object containing the words and their number of occurrences.
4. For each word in the results, `PrimeNumberDetector` determines if the number of occurrences is a prime number.
5. The word, its occurrences, and whether this is a prime number are fed into the `OutputPrinter`, which returns a string presenting this information. These strings are then outputted to the console to be read by the end user.

The `ApplicationController` controls this sequence of events. Testing this object effectively involved writing integration tests, as they are not isolated from other objects in the program. I did this after realising that mocking the other objects in an attempt to isolate the tests would have led to vacuous tests.

### Technologies used
* JavaScript
* Node.js
* Jasmine (testing framework)

### Known issues
* Hyphenated words are counted as separate words e.g. "on-site" is interpreted as: "on", "site"

### Further Extensions
* Ability to sort results, eg. by occurrences, or if prime, or alphabetically.
* Ability to run the program on different files by inputting their paths as arguments from the terminal.
* Potentially extracting a 'word' class to contain a string of the word itself, the number of occurrences, and whether this number is a prime number or not.
* Error handling
