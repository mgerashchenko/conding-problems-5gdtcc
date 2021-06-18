// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function(str, k) {
  // max length, init 0
  // sliding window
  // hash map count
  // hash map keys count
  // return max length

  let maxLength = 0;

  let hasMapCount = {};

  let start = 0;
  for(let end=0;end<string.length;end++){
    let endChar = str[end];
    if(hasMapCount[endChar] == null
      ? 1
      : hasMapCount[endChar] + 1;
  }

  return maxLength;
};// O(N + N) == O(N)
