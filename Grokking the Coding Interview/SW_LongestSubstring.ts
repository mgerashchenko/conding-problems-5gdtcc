// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

const longest_substring_with_k_distinct = function(str, k) {
  // max length
  // sliding window
  // hash map count
  // hash map keys count

  let maxLength = 0;

  let hasMapCount = {};

  let start = 0;
  for(let end=0;end<str.length;end++){
    let endChar = str[end];
    if(hasMapCount[endChar] == null
      ? 1
      : hasMapCount[endChar] + 1;
  }

  return maxLength;
};// O(N + N) == O(N)
