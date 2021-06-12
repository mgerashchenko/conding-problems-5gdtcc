// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
// Longest Substring with Same Letters

// sliding window
// max length
// hashMapCount
// max repeats count

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
//   # max length
//   # sliding window
//   # hashMapCount
//   # max char count

//   maxLength = 0

//   maxCountChar = 0
//   hashMapCount = {}

//   start = 0
//   # len not let
//   for end in range(len(str)):
//     endChar = str[end]

//     if endChar not in hashMapCount:
//       hashMapCount[endChar] = 0
//     # endChar
//     hashMapCount[endChar] += 1

//     # Typicall mistake endChar not end
//     maxCountChar = max(maxCountChar, hashMapCount[endChar])

//     if end - start + 1 - maxCountChar > k:
//       startChar = str[start]
//       # startChar not start
//       hashMapCount[startChar] -= 1;
//       # += not ++
//       start += 1

//     maxLength = max(maxLength, end - start + 1)

//   return maxLength
