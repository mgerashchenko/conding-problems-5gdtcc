// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
// https://www.youtube.com/watch?v=LAKWWDX3sGw

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  //       0 a b c d e
  //     0 0 0 0 0 0 0
  //     a 0 1 1 1 1 1
  //     c 0 1 1 2 2 2
  //     e 0 1 1 2 2 3

  //       0 a d c d
  //     0 0 0 0 0 0
  //     d 0 0 1 1 1
  //     e 0 0 1 1 1
  //     f 0 0 1 1 1

  let map = [[0]];
  // fill the rows with 0s
  for (let j = 0; j < text1.length; j++) {
    map[0].push(0);
  }

  // fill the columns 0s
  for (let i = 0; i < text2.length; i++) {
    map.push([0]);
  }

  for (let j = 1; j <= text2.length; j++) {
    for (let i = 1; i <= text1.length; i++) {
      map[j][i] =
        text1[i - 1] === text2[j - 1]
          ? // if match take the diagonal, cos it should include correct order
            // to avoid the situation when char repeats several time in one but
            // is only one in second
            (map[j][i] = map[j - 1][i - 1] + 1)
          : // if don't take max of previous top or left
            // that means we choose the best path, to skip symbol from on string
            // or another
            Math.max(map[j - 1][i], map[j][i - 1]);
    }
  }
  return map[map.length - 1][map[0].length - 1];
};
