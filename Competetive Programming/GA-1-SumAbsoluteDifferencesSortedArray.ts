// #1
// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
// Sum of Absolute Differences in a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  // constraints
  // 2 <= nums <= 10^5
  // 1 <= nums[i] <= 10^4

  let res = [],
    n = nums.length,
    // Instead of Math.abs(nums[i]-nums[j]) which O(n^2)
    // We calculate prev nums[i]*n - sum and post sum - nums[i]*n-i
    left = 0,
    rigth = nums.reduce((prev, cur) => prev + cur, 0);
  for (let i = 0; i < n; i++) {
    left += nums[i - 1] || 0;
    rigth -= nums[i];
    res[i] = nums[i] * i - left + rigth - nums[i] * (n - (i + 1));
  } // O(n)

  return res;
};
