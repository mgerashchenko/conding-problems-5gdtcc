// 5.Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let dp = {};
  let res = "";

  // Not effective way to find a palindrom
  const isPalindrom = sub => {
    if (sub.length === 1) return true;
    let middle = Math.floor(sub.length / 2 - 1);
    for (let i = 0; i < middle; i++) {
      if (sub[i] !== sub[sub.length - 1 - i]) return false;
      // optimize the solution by saving the middle solution
      dp[sub.slice(i, sub.length - i)] = true;
    }
    return true;
  };

  let i = 0;
  let start = i;
  let end = i + 1;
  while (i < s.length) {
    let sub = s.slice(start, end);
    dp[sub] = dp[sub] == null ? isPalindrom(s) : dp[sub];
    console.log(sub);
    if (dp[sub]) {
      console.log("in", sub);
      res = sub.length > res.length ? sub : res;
      if (start - 1 >= 0 && end + 1 <= s.length) {
        start--;
        end++;
        continue;
      }
    }
    i++;
    start = i;
    end = i + 1;
  }

  return res;
};
