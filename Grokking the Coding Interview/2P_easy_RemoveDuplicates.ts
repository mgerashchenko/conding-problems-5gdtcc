// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
// Remove Duplicates

const remove_duplicates = function(arr) {
  // sorted array
  // use 2 pointes from 0 side
  // start = 0
  // iterate end from 1
  // if start != end, end = start + 1
  // with out dublicates when 0 != 1,  0 + 1 = 1
  // return length, start + 1

  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    // base case
    if (arr[start] != arr[end]) {
      arr[start + 1] = arr[end];
      start++;
    }
  }

  // return length
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
