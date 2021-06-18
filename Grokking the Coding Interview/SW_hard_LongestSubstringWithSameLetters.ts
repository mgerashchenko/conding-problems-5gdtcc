// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
// Longest Substring with Same Letters

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.



const length_of_longest_substring = function(arr, k) {
  // max length, init 0
  // sliding window
  // count 1
  // move start if length - 1's count > k limit
  // udpate max with Math.max
  // return max length

  let maxLength = 0;

  let countOne = 0;

  let start = 0;
  for(let end=0; end < arr.length; end++) {
    if(arr[end] == 1) countOne++;

    while(end - start + 1 - countOne > k) {
      if(arr[start] === 1) countOne--;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);  
  }

  return maxLength;
} // O(N+N) O(1)

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
