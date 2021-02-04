// "the".slice(0,2) [0,2) // the
// slice(i, j+1);
// slice is like map return new
// "string".length
// use object as counter
// ! I rename variables and make mistake because of it
// ! I don't return the value
// ! I don't assign the value
// even counter[char] === 0, case when index is 0 fit the condition
// ! I check only simple cases
// ! I don't look for a little bit more complicated cases
// ! I am not curious

function findLongestSubstring(str) {
  if (!str) return 0;
  let max = 0,
    start = 0;
  let counter = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (counter[char]) {
      start = Math.max(counter[char], start);
    }
    max = Math.max(max, i - start + 1);
    counter[char] = i + 1;
  }
  return max;
}

// start = 5;

// counter
// this
// 0145

// tmp = 5-5+1 = 1;
// max = 4;

// thisisawesome
// 0123456789111
//           012
//      i
