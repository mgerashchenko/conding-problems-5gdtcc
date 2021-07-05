// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function(str, k) {
  // find the longest substring with <= distinct characters

  // iterate array
  // use sliding window
  // use max value
  // use hashMap to count the distinct characters

  // init max = 0
  // init hashMap = {}
  // while chars in hashMap count < k and end < arr.length
  //  move end -> and add characters to the hashMap
  //  if char doesn't exist, set the value 0
  //  i f exist increment the charecter
  //  if chars in hashMap count > k
  //  move start -> and decrement char count in the hashMap
  //  if char count === 0, delete char from the hashMap
  //  update max length
  // return max

  // araaci
  // s
  // e
  // 1

  // init max length
  let max = 0;

  // init map
  let hashMap = {};

  // use sliding window
  let start = 0;
  let end = 0;
  while (end < str.length) {
    let charEnd = str[end];
    // add character to the map
    if (hashMap[charEnd] == null) {
      hashMap[charEnd] = 0;
    }
    // increment end char
    hashMap[charEnd]++;

    // decrement start char
    while (Object.keys(hashMap).length > k) {
      let charStart = str[start];
      hashMap[charStart]--;
      if (hashMap[charStart] === 0) {
        delete hashMap[charStart];
      }
      start++;
    }

    // update max length
    max = Math.max(max, end - start + 1);
    end++;
  }

  // return max length
  return max;
}; // O(N) + O(N) = O(N); O(K+1) - store every k + 1 element
