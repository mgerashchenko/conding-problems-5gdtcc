//
// Smallest Window containing Substring

// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

// Example 1:
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

const find_substring = function(str, pattern) {
  // Find the shortest substring, when string has all chars from the pattern
  //
  // use 2 pointers from 1 side as a sliding window
  // use hashMap to count pattern chars
  // use match counter to know when the pattern is matched
  //
  // init minStar, minEnd
  //
  // init hashMap and count the patter chars
  // iterate the string
  // if end is in the hashMap decrement hashMap count
  // if hashMap end count === 0, increment match count
  // while matchCount === 0,
  // and update minLength = min(minEnd-minStart+1, end-start+1)
  // and start++
  // and hashMap(start) in hashMap, hashMap start --;
  // return if Infinity return "", or slice(start, end+1)
  
};
