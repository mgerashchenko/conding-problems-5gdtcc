// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
// Triplet Sum to Zero

const search_triplets = function(arr) {
  // sort array
  // iterate array for 1st number
  // and skip when i == i-1, use if in 1 loop
  // use 2 pointers from 2 sides
  // if cur sum === 0 add triplet
  // and skip start when start === start-1, use while in 2 loops
  // and end start when end = end + 1, use while in 2 loops
  // return triplets array

  arr.sort((x, y) => x - y);

  let result = [];

  // -2 coz 2 pointers and < gives 1 === 3
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1]) continue;

    let start = i + 1;
    let end = arr.length - 1;
    // < because we need both numbers
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];

      if (sum == 0) {
        result.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;

        // skip dublicates only after we have added the triplet
        while (start < end && arr[start] === arr[start - 1]) {
          start++;
        }

        while (start < end && arr[end] === arr[end + 1]) {
          end--;
        }
      }

      if (sum < 0) start++;

      if (sum > 0) end--;
    }
  }

  return result;
}; // Sorting O(N logN) + third iterate O(N) * 2 pointers (N) === O(N2) + O(N2) === O(N2)

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
