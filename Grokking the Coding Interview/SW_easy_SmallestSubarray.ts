//
// Smallest Subarray

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Sliding window O(N+N)
// Outer loop process all elements
// Inner `while` loop processes each element only once

const smallest_subarray_with_given_sum = function(s, arr) {
  // Sliding window
  // Min length, init as Inifnity,
  // Return return -1 if Inifnity

  let minLength = Infinity;

  let start = 0,
    sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum >= s) {
      minLength = Math.min(length, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return minLength == Infinity ? 0 : minLength;
}; // O(N+N),
