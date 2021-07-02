// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
// Longest Substring with Same Letters

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const length_of_longest_substring = function(arr, k) {
  // logest substring with 1, and k replacements
  // init max length
  // use 2 pointers from 1 side
  // use sliding window
  // count 0's
  // if count > k, move start
  // return max length
  //   k=3
  //   0  1. 2. 3. 4. 5. 6. 7. 8. 9. 10
  //   0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]
  //               s
  //                                 e
  // c 3
  // m 9

  let max = 0;

  let count = 0;

  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 0) count++;

    while (count > k) {
      if (arr[start] === 0) count--;
      start++;
    } // O(N)

    max = Math.max(max, end - start + 1);
  } // O(N)

  return max;
}; // O(N+N) O(1); O

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
