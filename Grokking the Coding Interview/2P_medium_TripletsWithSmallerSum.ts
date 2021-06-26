// https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Take away
// triplets count += end - start
// count all triples between

const triplet_sum_close_to_target = function(arr, target_sum) {
  // sort arrya
  // use infinity to find min diff
  // iterate i
  // use 2 pointers from 2 sides
  // use Math abs tofind the min diff
  // return mind diff

  // sort array
  arr.sort((x, y) => x - y);

  // init min diff
  let minDiff = Infinity;
  let minSum = Infinity;

  // iterate i
  for (let i = 0; i < arr.length - 2; i++) {
    // use 2 pointers from 2 sides
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      let curMinDiff = Math.abs(target_sum - sum);

      // base case
      if (sum === target_sum) {
        return sum;
      }

      if (curMinDiff === minDiff) {
        minSum = Math.min(sum, minSum);
      }

      // take slosest
      if (curMinDiff < minDiff) {
        minDiff = curMinDiff;
        minSum = sum;
      }

      if (sum < target_sum) {
        start++;
      }

      if (sum > target_sum) {
        end--;
      }
    }
  }

  // return min diff
  return minSum;
}; // O(N*logN) + O(N2) == O(N*logN + N2) == O(N2) Space O()

// def triplet_with_smaller_sum(arr, target):
//   # init counter
//   # sort arrya
//   # iterate third index
//   # use 2 pointer on 2 sides
//   # if sum < target count all triplets between end and start
//   # return count

//   count = 0

//   arr.sort()

//   for i in range(len(arr)-2):
//     start = i + 1
//     end = len(arr) - 1

//     while start < end:
//       if arr[i] + arr[start] + arr[end] < target:
//         count += end - start
//         start += 1
//         continue
//       end -= 1

//   return count
