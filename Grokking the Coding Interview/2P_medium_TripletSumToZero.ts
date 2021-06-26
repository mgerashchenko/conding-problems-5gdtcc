// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
// Triplet Sum to Zero

const search_triplets = function(arr) {
  // init result
  // sort array
  // iterate array
  // skip with if i === i - 1 elements
  // use 2 pointers from 2 sides, start = i +1, end = 0
  // skip with while start === start - 1 elements
  // return result

  // init result
  let result = [];

  // sort array
  arr.sort((x, y) => x - y);

  // iterate i
  for (let i = 0; i < arr.length - 2; i++) {
    // skip dublicates i
    if (i > 0 && arr[i - 1] === arr[i]) continue;

    let start = i + 1;
    // !!! last index not the length
    let end = arr.length - 1;
    // <, coz we need 2 numbers
    while (start < end) {
      // base case
      let sum = arr[i] + arr[start] + arr[end];
      if (sum === 0) {
        result.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;

        // // skip start dublicates
        // while(start < end && arr[start-1] == arr[start]) start++

        // // skip end dublicates
        // while(start < end && arr[end] == arr[end+1]) end--;
      }

      // !!! i is negative end is always positive
      if (sum > 0) end--;
      if (sum < 0) start++;
    }
  }

  // return ressult
  return result;
};// Sorting O(N logN) + third iterate O(N) * 2 pointers (N) === O(N2) + O(N2) === O(N2)

// def search_triplets(arr):
//   # sort array
//   # iterate third
//   # 2 pointers for the rest
//   # add and skip dublicats

//   result = []

//   arr.sort();

//   for i in range(len(arr)):
//     num = arr[i]

//     start = i + 1
//     end = len(arr) - 1
//     while start < end:
//       sum_cur = arr[i] + arr[start] + arr[end]

//       # : at the end
//       if sum_cur == 0:
//         result.append([num, arr[start], arr[end]])
//         start += 1
//         end -= 1

//         # : check typical mistake
//         while start < end & arr[start] == arr[start-1]:
//           start += 1

//         # : at the end
//         # == not =
//         while start < end & arr[end] == arr[end + 1]:
//             end -= 1

//       # : at the end
//       if sum_cur > 0:
//         end -= 1

//       # : at the end
//       if sum_cur < 0:
//         start += 1

//   return result
