// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
// Longest Substring with Same Letters

// sliding window
// max length
// hashMapCount
// max repeats 

const length_of_longest_substring = function(str, k) {
  let max = 0;

  let start = 0,
    map = {},
    max_count = 0;
  for (let end = 0; end < str.length; end++) {
    let end_char = str[end];
    if (map[end_char] == null) {
      map[end_char] = 0;
    }
    map[end_char]++;
    max_count = Math.max(max_count, map[end_char]);

    while (end - start + 1 - max_count > k) {
      let start_char = str[start];
      map[start_char]--;
      start++;
    }

    max = Math.max(max, end - start + 1);
  }

  return max;
}; // O(N)

// def length_of_longest_substring(str, k):
//   max_res = 0

//   map_char = {}
//   max_count = 0
//   start = 0
//   for end in range(len(str)):
//     end_char = str[end]

//     if end_char not in map_char:
//       map_char[end_char] = 0

//     map_char[end_char] += 1
//     max_count = max(max_count, map_char[end_char])

//     while(end - start + 1 - max_count > k):
//       start_char = str[start];
//       map_char[start_char] -= 1
//       start += 1

//     max_res = max(max_res, end - start + 1)

//   return max_res
