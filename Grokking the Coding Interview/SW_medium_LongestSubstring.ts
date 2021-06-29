// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function(str, k) {
  // find the length of the longest substring with less or equal K distinct characters
  // init max length
  // use 2 pointers as Sliding window
  // count characters in the window with the map
  // move window end to the right
  // add character to the map if it doesn't exist
  // increment character count in the map if character exist
  // if keys in the map are more the k,
  // move start to the right and decrement character count
  // if character count === 0 remove character
  // update max length
  // return max length

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
