// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
// Remove Duplicates

const remove_duplicates = function(arr) {
  // remove dublicates from the array in place, return the length of the array
  //
  // iterate the array
  // use 2 pointers from 1 side
  // if end != start
  // save end to the start + 1
  //
  // !!! start from 0 and 1
  // !!! safe to 0 + 1

  // 1223
  //  s
  //    e
  // 1233

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
