// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

//https://www.geeksforgeeks.org/overlapping-subproblems-property-in-dynamic-programming-dp-1/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = 0;

  const isPalindrom = str => {
    let i = 0;
    if (str.length === 0) {
      return 0;
    }
    if (str.length === 1) {
      return 1;
    }
    if ((str.length === 2, str.length === 3)) {
      return str[0] === str[str.length - 1] ? 1 : 0;
    }
    while (i < str.length - 1 - i) {
      if (str[i] !== str[str.length - 1 - i]) {
        return 0;
      }
      i++;
    }
    return 1;
  };

  // No Memoization(top-down)
  // Runtime: 452 ms Memory Usage: 44.7 MB
  const cash = new Map();
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      res += isPalindrom(s.slice(i, s.length - j));
    }
  }

  // Memoization(top-down)
  // Runtime: 2008 ms, Memory Usage: 101.4 MB
  // const cash = new Map();
  // for(let i=0;i<s.length;i++){
  //     for(let j=0;j<s.length;j++){
  //         if(cash.get(s.slice(i,s.length-j)) == null){
  //             cash.set(s.slice(i,s.length-j), isPalindrom(s.slice(i,s.length-j)));
  //         }
  //         res += cash.get(s.slice(i,s.length-j));
  //     }
  // }

  return res;
};
