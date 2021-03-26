// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
// https://www.youtube.com/watch?v=LAKWWDX3sGw

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  //   0 a d c d
  // 0 0 0 0 0 0
  // d 0 0 1 1 1
  // e 0 0 1 1 1
  // f 0 0 1 1 1

  const dp = []; // O(1)
  for (let j = 0; j < text2.length; j++) {
    // O(n)
    dp.push([]);
    for (let i = 0; i < text1.length; i++) {
      // O(n)
      // check top the boundary
      let top = j > 0 ? dp[j - 1][i] : 0;
      // check left the boundary
      let left = i > 0 ? dp[j][i - 1] : 0;
      // check diagonal the boundary
      let prev = j > 0 && i > 0 ? dp[j - 1][i - 1] : 0;
      dp[j][i] =
        text2[j] === text1[i]
          ? // if values are equal take the last equal value from the diagonal
            prev + 1
          : // if not skip the value with less matches
            Math.max(top, left);
    }
  } // O(n^2)
  // Last el in the last row is always the max valu
  return dp[text2.length - 1][text1.length - 1]; // O(n^2)
};
