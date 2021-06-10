// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

const longest_substring_with_k_distinct = function(str, k) {
  let max = 0;

  let map = {},
    start = 0;
  // Object keys return the array
  for (let end = 0; end < str.length; end++) {
    if (map[str[end]] == null) {
      map[str[end]] = 0;
    }
    map[str[end]] += 1;

    while (Object.keys(map).length > k) {
      map[str[start]] -= 1;
      if (map[str[start]] === 0) {
        delete map[str[start]];
      }
      start += 1; // shrink the window
    }

    max = Math.max(max, end - start + 1);
  }

  return max;
}; // O(N + N) == O(N)
