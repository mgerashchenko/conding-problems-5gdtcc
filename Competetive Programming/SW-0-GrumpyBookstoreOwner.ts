// #1
// Grumpy Bookstore Owner
// https://leetcode.com/problems/grumpy-bookstore-owner/

// Use preindex next time!!!

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  // Constraints
  // 1 <= X <= 1000
  // 0 <= customers[i] <= 1000
  // 0 <= grumpy <= 1

  // Algorithm Sliding window
  // find the sum of the existing customers
  // - add value if grumpy is 0
  // init the window, get the current sum for a start 0
  // - add value if grumpy is 1
  // compare the current sum with the max
  // move the window to the right,
  // - remove left value from cur if grumpy is 1
  // - add right valye if cur is grupy is 1
  // compare current and max
  // return max

  // get sum without super power
  let max = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      max += customers[i];
    }
  } // O(n)

  // init the window
  for (let i = 0; i < X; i++) {
    // if a superpower is useful
    if (grumpy[i] === 1) {
      max += customers[i];
    }
  } // O(n)

  // Move the widnow
  let current = max,
    start = 0,
    end = X - 1;
  while (end < customers.length) {
    // if superpower was applied
    if (grumpy[start] === 1) {
      // substract it
      current -= customers[start];
    }
    start++;
    end++;
    // if superpower is useful
    if (grumpy[end] === 1) {
      // apply it
      current += customers[end];
    }
    max = Math.max(current, max);
  } // O(n)

  return max;
};
