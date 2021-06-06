//
// Smallest Subarray

// Sliding window O(N+N)
// Outer loop process all elements
// Inner `while` loop processes each element only once

const smallest_subarray_with_given_sum = function(s, arr) {
  // TODO: Write your code here
  let start = 0,
    sum = 0,
    length = Infinity;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum >= s) {
      length = Math.min(length, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return length === Infinity ? -1 : length;
};
