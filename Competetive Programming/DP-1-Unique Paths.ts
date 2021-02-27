// https://leetcode.com/problems/unique-paths/
// https://rixong.medium.com/unique-paths-algorithm-e5834962b687

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // m - number of rows
  // n - lenght of rows
  const dp = [[]];

  // Set all first row and first el of every row as 1,
  // cos there is only one path to it
  // 1 1 1
  // 1

  // Set all el of first row as 1
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let j = 1; j < m; j++) {
    // set all first el of the row as 1
    // doint here, not separatly haha
    dp.push([1]);
    for (let i = 1; i < n; i++) {
      dp[j][i] = dp[j - 1][i] + dp[j][i - 1];
    }
  }

  return dp[m - 1][n - 1];
};
