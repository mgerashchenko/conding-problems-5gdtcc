// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
// Remove Duplicates

const remove_duplicates = function(arr) {
  // sort array
  // two pointers
  // return start

  if (arr.length < 2) return arr.length;

  let start = 0;
  for (let end = 1; end < arr.length; end++) {
    if (arr[start] != arr[end]) {
      start++;
      arr[start] = arr[end];
    }
  }

  // return length
  return start + 1;
}; // Time O(n) Space O(1)

// def remove_duplicates(arr):
//   start = 0
//   for end in range(1,len(arr)):
//     # : at the end
//     if arr[start] != arr[end]:
//       start += 1
//       arr[start] = arr[end]

//   return start + 1
