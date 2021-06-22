// https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// Input:  [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]

const dutch_flag_sort = function(arr) {
  // because there is only 3 type of digits
  // we can use 2 pointers on 2 sides
  // 1s stay in the middle
  // 0 go to the start
  // 2 go to the end

  let start = 0;
  let end = arr.length - 1;
  let i = 0;
  while (i <= end) {
    let num = arr[i];
    // base case
    if (num == 1) {
      i++;
      continue;
    }
    if (num === 0) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      start++;
      i++;
      continue;
    }
    if (num === 2) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end--;
    }
  }
};

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

