import React from 'react';

/*
Instructions: Given a Roman numeral string, return the integer.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

const RomanNumerals = () => {

  const map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  const romanToInt = str => {
    let result = 0;
    const regex = /(?=[MDCLXVI]+\b)M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/;

    // check if the string is valid
    if (!str.match(regex)) return 'invalid string';

    str.split('').forEach((letter, i) => {
      const curr = map[`${letter}`];
      const prev = map[`${str[i - 1]}`]
      const next = map[`${str[i + 1]}`]

      // check if the current letter is greater than prev = current - previous 
      if ((curr > prev)) {
        result += curr - prev
      }
      // check if the current letter is greater than next, equal to next or this is the last letter = add current
      else if ((curr > next) || (curr === next || str[i + 1] === undefined)) {
        result += curr;
      }
    })

    return result;
  }

  // Test cases
  const testCases = [
    { caseNumber: 1, romanNumeral: 'III', expectedAnswer: 3 },
    { caseNumber: 2, romanNumeral: 'IV', expectedAnswer: 4 },
    { caseNumber: 3, romanNumeral: 'IX', expectedAnswer: 9 },
    { caseNumber: 4, romanNumeral: 'LVIII', expectedAnswer: 58 },
    { caseNumber: 5, romanNumeral: 'MCMXCIV', expectedAnswer: 1994 },
    { caseNumber: 6, romanNumeral: 'LVIIN', expectedAnswer: 'invalid string' },
  ];

  const results = testCases.map(testCase => {
    const { caseNumber, romanNumeral, expectedAnswer } = testCase;
    const error = `☹️"${romanNumeral}" should return ${expectedAnswer}`;
    const success = `😻 Case ${caseNumber} passed!`;
    return romanToInt(romanNumeral) === expectedAnswer ? success : error;
  })

  return (
    <>
      <h2>Test Results</h2>
      {results.map((result, index) => <div key={index}>{result}</div>)}
    </>
  )
}

export default RomanNumerals