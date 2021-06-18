// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
// No-repeat Substring

// Given a string, find the length of the longest substring, which has no repeating characters.

const non_repeat_substring = function(str) {
  // sliding window
  // hashMap_index
  // max_length, init 0
  // update window start if el index >= start
  // update length, with end - start + 1
  // return max length

  let max_length = 0;

  let hashMap_index = {};

  let start = 0;
  for (let end = 0; end < str.length; end++) {
    let char_end = str[end];

    if (hashMap_index[char_end] >= start) {
      start = hashMap_index[char_end] + 1;
    }

    hashMap_index[char_end] = end;
    max_length = Math.max(max_length, end - start + 1);
  }

  return max_length;
}; // O(N)

// def non_repeat_substring(str):
//   count = 0

//   # hash indexes
//   hash = {}
//   start = 0

//   # use sliding windw
//   for end in range(len(str)):
//     end_char = str[end]

//     if end_char in hash:
//       # start cound be ahead of old end
//       start = max(start, hash[end_char] + 1)

//     hash[end_char] = end
//     count = max(count, end - start + 1)

//   return count
