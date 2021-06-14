// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
// Permutation in a String

const find_permutation = function(str, pattern) {
  // sliding window
  // hashMapCount decrease
  // matchCount
  // return true or false at the end

  // init hashMap 
  let hashMapCount = {};
  let matchCount = 0;

  for(let char of pattern) {
    hashMapCount[char] = !(char in hashMapCount)
      ? 1
      : hashMapCount[char] + 1;
  }

  let start = 0;
  for(let end = 0; end<str.length; end++) {
    let endChar = str[end]
    if(endChar in hashMapCount) {
      hashMapCount[endChar]--;

      if(hashMapCount[endChar]===0) {
        matchCount++;
      }
    }

    // all counts are zero
    if(matchCount === Object.keys(hashMapCount).length) {
      return true;
    }

    // shrink the window
    if(end - start + 1 === pattern.length){
      let startChar = str[start];

      if(startChar in hashMapCount) {
        if(hashMapCount[startChar] === 0){
          matchCount--;
        }
        hashMapCount[startChar]++;
      }

      start++;
    }
  }

  return false;
};
