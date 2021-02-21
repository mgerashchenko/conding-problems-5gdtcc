// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // Prepair the DP
  const dp = grid.map(el => []);
  dp[0][0] = grid[0][0];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      // safe start, ignore 0,0 case
      if (x == 0 && y == 0) continue;

      // 0 is as undefined don't use type conversions
      // use type number
      let top = y - 1 > -1 ? dp[y - 1][x] : Infinity;
      let left = x - 1 > -1 ? dp[y][x - 1] : Infinity;

      dp[y][x] = grid[y][x] + Math.min(top, left);
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};
