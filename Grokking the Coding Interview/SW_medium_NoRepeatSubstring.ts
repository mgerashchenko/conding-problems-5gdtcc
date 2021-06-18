// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
// No-repeat Substring

// not the best

const non_repeat_substring = function(str) {
  let count = 0;

  // Use hash
  let hashSet = new Set(),
    start = 0;
  // Use sliding window
  for (let end = 0; end < str.length; end++) {
    let end_char = str[end];

    while (hashSet.has(end_char)) {
      let start_char = str[start];
      hashSet.delete(start_char);
      start++;
    }

    hashSet.add(end_char);

    // Use max count
    count = Math.max(count, end - start + 1);
  }

  return count;
}; // O(N+N)

// better with indexes hash
const non_repeat_substring = function(str) {
  // sliding window
  // hashMap_index
  // max_length
  // count_row

  let max_length = 0;

  let hashMap_index = {};

  let start = 0;
  for(let end=0;end<str.length;end++){
    let char_end = str[end];

    if(hashMap_index[char_end] > start) {
      start = hashMap_index[char_end] + 1;
      start++;
    }

    hashMap_index[char_end] = end;
    max_length = Math.max(max_length, end - start + 1)
  }
  
  return max_length;

}; // O(N)// O(N)

// def non_repeat_substring(str):
//   count = 0

//   # hash indexes
//   hash = {}
//   start = 0

//   # use sliding windw
//   for end in range(len(str)):
//     end_char = str[end]

//     if end_char in hash:
//       # start cound be ahead of old end
//       start = max(start, hash[end_char] + 1)

//     hash[end_char] = end
//     count = max(count, end - start + 1)

//   return count
