// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
// Fruits into Baskets

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

const fruits_into_baskets = function(fruits) {
  // find the longest subarray with not more than 2 distinct characters

  // iterate the array
  // use 2 pointers from 1 side as a sliding window
  // use hashMap to count the chars
  // update max length

  // if end < arr.length, move end -> and
  // if no char in hashMap set it to 0, then increment the char
  // if char count is > than 2, move start ->
  // and decrement char,  and delete char when char count is 0
  // update max length
  // return max length

  let hashMapCount = {},
    start = 0,
    max_count = 0;
  for (let end = 0; end < fruits.length; end++) {
    // reduce the window
    let end_char = fruits[end];
    if (hashMapCount[end_char] == null) {
      hashMapCount[end_char] = 0;
    }
    hashMapCount[end_char]++;

    while (Object.keys(hashMapCount).length > 2) {
      let start_char = fruits[start];
      hashMapCount[start_char]--;
      if (hashMapCount[start_char] == 0) {
        delete hashMapCount[start_char];
      }
      start++;
    }

    max_count = Math.max(max_count, end - start + 1);
  }

  return max_count;
}; //  O(N+N)O(N+N)

// def fruits_into_baskets(fruits):
//   hashMap = {}
//   max_count = 0
//   start = 0

//   for end in range(len(fruits)):
//     end_char = fruits[end]
//     if end_char not in hashMap:
//       hashMap[end_char] = 0
//     hashMap[end_char] += 1

//     while len(hashMap) > 2:
//       start_char = fruits[start]
//       hashMap[start_char] -= 1
//       if hashMap[start_char] == 0:
//         del hashMap[start_char]
//       start += 1

//     max_count = max(max_count, end - start +1)

//   return max_count
