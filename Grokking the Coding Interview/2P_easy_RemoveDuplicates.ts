// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
// Remove Duplicates

const remove_duplicates = function(arr) {
  // use 2 ponters from 1 side
  // start is 0
  // end is 1
  // if start !== end, start+1 === end
  // in the first case 0+1 === 1
  // return start

  let start = 0;
  for (let end = 1; end < arr.length; end++) {
    if (arr[start] !== arr[end]) {
      // assign to the next el
      arr[start + 1] = arr[end];
      start++;
    }
  }

  // length === start + 1
  return start + 1;
}; // O(n) O(1)

// def remove_duplicates(arr):
//   start = 0
//   for end in range(1,len(arr)):
//     # : at the end
//     if arr[start] != arr[end]:
//       start += 1
//       arr[start] = arr[end]

//   return start + 1
