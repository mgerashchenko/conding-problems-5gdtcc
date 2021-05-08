// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
// Remove Duplicates from Sorted Array II

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // Constraints
  // 1 <= nums.lenght
  // - <= nums[i] <= +
  // nums is sorted in ascending order

  // Algorithm
  // - Set 2 pointers in the begining
  // - move pointers forward if there is no dublicates
  // - if there is dublicate movo only one pointer
  // unitil there is no pointers
  //

  // p         x
  // i           x
  //   1,1,1,2,2,3

  let count = 0,
    prev = 0,
    i = 0;
  while (i < nums.length) {
    // if there is dublicate
    count =
      nums[i] === nums[i - 1]
        ? // increment counter
          count + 1
        : // reset counter;
          0;

    // if dublicates more than 1
    if (count > 1) {
      // continue interating the array
      i++;
      continue;
    }

    // store the value and move pointers
    nums[prev] = nums[i];
    prev++;
    i++;
  } // T:O(n)

  return prev;
}; // T:O(n) S:O(n)
