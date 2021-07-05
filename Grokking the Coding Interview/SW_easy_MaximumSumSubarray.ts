// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP#problem-statement
// Maximum Sum Subarray

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function(k, arr) {
  // init max value
  // iterate arr
  // and use sliding window
  // with 2 pointers from one side to another
  // the distance from start to end should be k
  // slide this widnow throw the array
  // update max value
  // return max value

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
}; // O(N) O(1)
