// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
// Remove Duplicates from Sorted Array II

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //     Constraints
  //     1 <= nums.length
  //     - <= nums[i] <= +
  //     dublicates in a row
  //     soreted in ascending order

  //     Algorithm
  //     use 2 pointers slow and fast
  //     the fast should scan the elements
  //     slow is for the replacing in the place
  //     use counter for duplicates

  //     Use 2 pointers
  let slow = 0,
    fast = 0,
    counter = 0;
  while (fast < nums.length) {
    // if there is duplicate
    counter =
      nums[fast] === nums[fast - 1]
        ? // increase
          counter + 1
        : // or reset counter
          0;
    if (counter < 2) {
      nums[slow] = nums[fast];
      fast++;
      slow++;
      continue;
    }
    fast++;
  } // O(n)

  return slow;
}; // O(n)
