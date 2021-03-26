// 5.Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// DP Solution
// https://www.youtube.com/watch?v=UflHuQj6MVA

// ! Not optimized but easy to understand

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = s.slice(0, 1);
  // dp[] - represents start
  // dp[][] - represents end
  let dp = [];
  for (let i = 0; i < s.length; i++) {
    dp.push([]);
  }

  // fill the diagolan means that
  // all single char els are polindrom
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  // fill palidroms of length 2
  for (let i = 0; i < s.length; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    if (dp[i][i + 1] && max.length < 2) {
      max = s.slice(i, i + 1 + 1);
    }
  }

  // fill the res of the matrix
  for (let n = 2; n < s.length; n++) {
    for (let i = 0; i < s.length - 2; i++) {
      // if start and end chars are equal
      // and sub in the middle is palindrom
      // string is a palindrom
      if (s[i] === s[i + n] && dp[i + 1][i + n - 1]) {
        dp[i][i + n] = true;
        if (n > max.length - 1) {
          max = s.slice(i, i + n + 1);
        }
      }
    }
  }

  return max;
};
