// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP#problem-statement
// Maximum Sum Subarray

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function(k, arr) {
  // sliding window
  // max

  let max = 0;

  let sum = 0,
    start = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    if (end + 1 > k) {
      sum -= arr[start];
      start++;
    }

    max = Math.max(max, sum);
  }

  return max;
}; // O(N)
