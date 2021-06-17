// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
// Triplet Sum to Zero

const search_triplets = function(arr) {
  // sort array
  // third loop
  // 2 pointers
  // remove dublicates

  let result = [];

  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]) continue;

    let num = arr[i],
        start = i + 1,
        end = arr.length - 1;

    while(start < end) {
        // console.log(i,num,start, arr[start], end, arr[end])        

        let sum = num + arr[start] + arr[end];
        if(sum === 0) {
          result.push([num, arr[start], arr[end]]);
          start++;
          end--;

          while(start < end && arr[start] === arr[start-1]) {
            start++;
          };

          while(start < end && arr[end] === arr[end+1]) {
            end--;
          };
        }

        if(sum > 0) {
          end--;
        }

        if(sum < 0) {
          start++;
        }
    }
  }

  return result;
}; // Sorting O(N logN) + third iterate O(N) * 2 pointers (N) === O(N2) + O(N2) === O(N)

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
