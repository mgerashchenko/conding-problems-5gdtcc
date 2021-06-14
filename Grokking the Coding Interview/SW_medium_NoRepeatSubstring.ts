// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
// No-repeat Substring

// not the best

const non_repeat_substring = function(str) {
  let count = 0;

  // Use hash
  let hashSet = new Set(),
    start = 0;
  // Use sliding window
  for (let end = 0; end < str.length; end++) {
    let end_char = str[end];

    while (hashSet.has(end_char)) {
      let start_char = str[start];
      hashSet.delete(start_char);
      start++;
    }

    hashSet.add(end_char);

    // Use max count
    count = Math.max(count, end - start + 1);
  }

  return count;
}; // O(N+N)

// better with indexes hash
const non_repeat_substring = function(str) {
  let count = 0;

  // Use hash for indexes
  let map = {},
    start = 0;
  // Use sliding window
  for (let end = 0; end < str.length; end++) {
    let end_char = str[end];

    // if the was visited, move start to the char
    if (map[end_char] != null) {
      // start could be ahead of old end indexes
      start = Math.max(start, map[end_char] + 1);
    }

    map[end_char] = end;
    // Use max count
    count = Math.max(count, end - start + 1);
  }

  return count;
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
