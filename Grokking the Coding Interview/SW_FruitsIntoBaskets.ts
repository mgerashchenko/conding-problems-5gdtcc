// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
// Fruits into Baskets

const fruits_into_baskets = function(fruits) {
  let hashMap = {},
    start = 0,
    max_count = 0;
  for (let end = 0; end < fruits.length; end++) {
    // reduce the window
    let end_char = fruits[end];
    if (hashMap[end_char] == null) {
      hashMap[end_char] = 0;
    }
    hashMap[end_char]++;

    while (Object.keys(hashMap).length > 2) {
      let start_char = fruits[start];
      hashMap[start_char]--;
      if (hashMap[start_char] == 0) {
        delete hashMap[start_char];
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
