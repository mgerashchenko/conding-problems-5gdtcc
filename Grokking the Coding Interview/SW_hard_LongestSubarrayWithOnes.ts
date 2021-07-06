// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
// Longest Subarray with Ones after Replacement

// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

const length_of_longest_substring = function(arr, k) {
  // Find the longest substring with the same letter, k laters could be replaced

  // use 2 pointers from 1 side, as sliding window
  // count the dominatn letter
  // move end and increment the count
  // while length - maxCount > k
  // move start decrement char count
  // update max length end - start + 1

  // !!! update the maxCount every time when increment the char count
  // !!! use if to decrement the longest as incrementing maxCount

  // aaaaccbbb
  //     s
  //       e

  let maxLength = 0;
  let hashMapCount = {};
  let maxCharCount = 0;

  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    let charEnd = arr[end];
    if (!(charEnd in hashMapCount)) {
      hashMapCount[charEnd] = 0;
    }
    hashMapCount[charEnd]++;
    maxCharCount = Math.max(maxCharCount, hashMapCount[charEnd]);

    if (end - start + 1 - maxCharCount > k) {
      let charStart = arr[start];
      if (hashMapCount[charStart] > 0) hashMapCount[charStart]--;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}; // Time O(N) Space O(26) wich asimptoticaly equal  O(1)

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
