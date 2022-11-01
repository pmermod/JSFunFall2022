/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @returns {boolean} true is a string is a palindrome, false if it is not.
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

const isPalindrome = (string) => {
  // WRITE YOUR ANSWER HERE
  /*
  array = string.split("");
  reverseArray = array.reverse();
  reverseString = reverseArray.join("");
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
  */
};
isPalindrome("kayak");

// IGNORE THIS BELOW. It is for the tests.

export default isPalindrome;
