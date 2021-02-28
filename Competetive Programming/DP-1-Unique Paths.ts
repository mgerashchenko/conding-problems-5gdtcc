// https://leetcode.com/problems/unique-paths/
// https://rixong.medium.com/unique-paths-algorithm-e5834962b687

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = [];

  // cols, there is only 1 path
  for (let i = 0; i < m; i++) {
    dp.push([1]);
  }

  // rows there is only 1 path
  for (let i = 0; i < n; i++) {
    dp[0].push(1);
  }

  // calculate the rest
  for (let j = 1; j < m; j++) {
    for (let i = 1; i < n; i++) {
      dp[j][i] = dp[j - 1][i] + dp[j][i - 1];
    }
  }

  // console.log(JSON.stringify(dp, null, 2));
  return dp[m - 1][n - 1];
};
