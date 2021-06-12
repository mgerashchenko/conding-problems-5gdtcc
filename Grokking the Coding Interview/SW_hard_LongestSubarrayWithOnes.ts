// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
// Longest Subarray with Ones after Replacement

const length_of_longest_substring = function(arr, k) {
  // max length
  // sliding window
  // count zeroes

  let maxLength = 0;

  let countOne = 0;

  let start = 0;
  for(let end=0; end < arr.length; end++) {
    if(arr[end] == 1) countOne++;

    while(end - start + 1 - countOne > k) {
      if(arr[start] === 1) countOne--;
      // +1 start to shring the window not -1
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);  
  }

  return maxLength;
};
