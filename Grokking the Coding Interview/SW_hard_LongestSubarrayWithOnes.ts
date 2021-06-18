// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
// Longest Subarray with Ones after Replacement

// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

const length_of_longest_substring = function(arr, k) {}; // Time O(N) Space O(N)

// def length_of_longest_substring(arr, k):
//   # max length
//   # sliding window
//   # one count
//   # while window length - oncount > k

//   maxLength = 0

//   countOnes = 0

//   start = 0
//   for end in range(len(arr)):
//     if arr[end] == 1:
//       countOnes += 1

//     while end - start + 1 - countOnes > k:
//       if arr[start] == 1:
//         countOnes -= 1
//       start += 1

//     maxLength = max(maxLength, end - start + 1)

//   return maxLength
