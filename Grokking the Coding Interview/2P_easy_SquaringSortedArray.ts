// https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
// Squaring a Sorted Array

const make_squares = function(arr) {
  // sorted array
  // -1^2 is === 1^2
  // init new array
  // use 2 pointers from 2 sides
  // use bigger number
  // add to the end of the arrray

  // init array
  let result = [];

  // use 2 pointers from 2 sides
  let start = 0;
  let end = arr.length - 1;
  // coz need every number
  while (start <= end) {
    if (Math.pow(arr[start], 2) >= Math.pow(arr[end], 2)) {
      result.unshift(Math.pow(arr[start], 2));
      start++;
      continue;
    }

    result.unshift(Math.pow(arr[end], 2));
    end--;
  }

  // return result
  return result;
}; // O(N) O(N)
