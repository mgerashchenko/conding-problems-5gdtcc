// https://leetcode.com/problems/partition-labels/
// Partition Labels

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const partions = [];

  const { length } = S;
  let max = 0;
  let prevMaxIndex = 0;

  for (let i = 0; i < length; i++) {
    let cur = S[i];

    for (let j = 0; j < length; j++) {
      if (S[j] === cur && j > max) {
        max = j;
      }
    }

    if (i == max) {
      let prev = partions.reduce((prev, cur) => prev + cur, 0);
      partions.push(max + 1 - prev);
    }
  }

  return partions;
};
