// https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
// Squaring a Sorted Array

const make_squares = function(arr) {
  // two pointers from - and +
  // fill array in reverse order

  let resArr = [],
    lastIndex = arr.length - 1;

  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let startNum = Math.pow(arr[start], 2),
      endNum = Math.pow(arr[end], 2);

    if (startNum >= endNum) {
      resArr[lastIndex] = startNum;
      start++;
    }

    if (startNum < endNum) {
      resArr[lastIndex] = endNum;
      end--;
    }

    lastIndex--;
  }

  return resArr;
}; // O(N) O(1)
