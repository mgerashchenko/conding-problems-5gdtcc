// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = [];
  let max = cost.length - 1;

  dp[0] = cost[0];
  dp[1] = cost[1];

  // DP Store 2 resuts every step
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  // Pick up the best at the end
  return Math.min(dp[max - 1], dp[max]);
};
