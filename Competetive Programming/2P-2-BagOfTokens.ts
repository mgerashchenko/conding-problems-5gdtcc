// Bag of Tokens
// https://leetcode.com/problems/bag-of-tokens/

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
  // Constraints
  // 0<=tekens.length<=100
  // 0<=tocke<=100

  // sort tokens
  // if power less than smalles token and count is 0 return 0
  // if power more than smallest token play it
  //      and increment the count
  // if the power is less than smallest and count is more than 0
  //      and biggest token is not the last
  //      play the biggest tocken
  //      and decrement the count

  tokens.sort((x, y) => x - y);

  let small = 0,
    big = tokens.length - 1,
    count = 0;

  // there at leas 1 tokens to play
  while (small <= big) {
    // When there is enogh power
    if (P >= tokens[small]) {
      // play and continue
      P = P - tokens[small];
      count++;
      small++;
      continue;
    }

    // no power or there are less than 2 tokens left
    // coas there is no sens to change 1 to less than 2 tokens
    if (count === 0 || small + 1 >= big) return count;

    // use superpower
    P += tokens[big];
    big--;
    count--;
  } // T:O(n) S:O(n)

  return count;
}; // T:O(n) S:O(n)
