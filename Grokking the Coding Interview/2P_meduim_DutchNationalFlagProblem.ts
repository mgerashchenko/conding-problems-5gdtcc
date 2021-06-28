// https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// Input:  [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]

const dutch_flag_sort = function(arr) {
  // since there are only 3 numbers
  // need to move only 2 of them
  // 3rd could stay in place
  // use 2 pointes from 2 sides
  // if 0 replace with start, and move the start
  // if 1 stay in place
  // if 2 replace with end
  // left part of curent index is already sorted
  // replaced from the rigth should be checked

  // use 2 pointers from 2 sides
  let start = 0;
  let end = arr.length - 1;
  let i = 0;
  // <= coz need to check every num
  while (i <= end) {
    let num = arr[i];

    // base case
    if (num === 1) i++;
    if (num === 0) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      start++;
      i++;
    }
    if (num === 2) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end--;
    }
  }
}; // O(n) O(1)

// def dutch_flag_sort(arr):
// # there are 3 option 0 1 2
// # can use 2 ponters on 1 side
// # base case when 1 iterate
// # when 0 swap with start
// # when 1 swap with end

//   start = 0
//   end = len(arr) - 1
//   i = 0
//   while i <= end:
//     num = arr[i]
//     # base case
//     if num == 1:
//       i += 1
//       continue
//     if num == 0:
//       arr[start], arr[i] = arr[i], arr[start]
//       start += 1
//       # arr[i] could be 0 or 1, becaue i have checked that
//       # so need to skip
//       i += 1
//       continue
//     if num == 2:
//       arr[i], arr[end] = arr[end], arr[i]
//       end -= 1
//       # shouldn't skip, coz it wasn't check
//       continue
