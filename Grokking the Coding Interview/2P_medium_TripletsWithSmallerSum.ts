// https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Take away
// triplets count += end - start
// count all triples between

const triplet_with_smaller_sum = function(arr, target) {
  // init triplets counter
  // sort array
  // iterate third
  // use 2 pointers on 2 sites
  // base case if sum < target add triplets between start and end
  // return triplets counter

  let tripletsCounter = 0;

  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1,
      end = arr.length - 1;
    while (start < end) {
      if (arr[i] + arr[start] + arr[end] < target) {
        // count triplets that are between start and end
        tripletsCounter += end - start;
        start++;
        continue;
      }
      end--;
    }
  }

  return tripletsCounter;
};

// def triplet_with_smaller_sum(arr, target):
//   # init counter
//   # sort arrya
//   # iterate third index
//   # use 2 pointer on 2 sides
//   # if sum < target count all triplets between end and start
//   # return count

//   count = 0

//   arr.sort()

//   for i in range(len(arr)-2):
//     start = i + 1
//     end = len(arr) - 1

//     while start < end:
//       if arr[i] + arr[start] + arr[end] < target:
//         count += end - start
//         start += 1
//         continue
//       end -= 1

//   return count
