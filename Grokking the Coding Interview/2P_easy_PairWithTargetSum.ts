// https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
// Pair with Target Sum

const pair_with_targetsum = function(arr, target_sum) {
  // sort array
  // two pointers

  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    // base case
    let sum = arr[start] + arr[end];
    if (sum === target_sum) return [start, end];

    if (sum > target_sum) end--;
    if (sum < target_sum) start++;
  }

  // conner case
  return [-1, -1];
}; // O(n)

// def pair_with_targetsum(arr, target_sum):
//   # sorted array
//   # 2 pointers

//   start = 0
//   end = len(arr) - 1
//   while start < end:
//     sum_cur = arr[start] + arr[end]

//     # base case
//     if sum_cur == target_sum:
//       return [start, end]

//     if sum_cur > target_sum:
//       end -= 1

//     if sum_cur < target_sum:
//       start += 1

//   return [-1,]
