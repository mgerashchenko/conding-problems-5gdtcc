// https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA
// Triplet Sum Close to Target

const triplet_sum_close_to_target = function(arr, target_sum) {
  // sort array
  // iterate third
  // 2 pointers to find sum
  // min_diff

  let minDiff = Infinity;
  let minSum = Infinity;

  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length - 2; i++) {
    let num = arr[i];

    let start = i + 1,
      // end is the end of the array
      end = arr.length - 1;
    while (start < end) {
      let sum = num + arr[start] + arr[end];

      console.log(target_sum, sum, num, arr[start], arr[end]);

      // base case
      if (target_sum - sum === 0) {
        return sum;
      }

      if (Math.abs(target_sum - sum) < minDiff) {
        minDiff = Math.abs(target_sum - sum);
        minSum = sum;
      }

      if (Math.abs(target_sum - sum) === minDiff) {
        minSum = Math.min(minSum, sum);
      }

      if (target_sum - sum > 0) {
        start++;
      }

      if (target_sum - sum < 0) {
        end--;
      }
    }
  }

  return minSum === Infinity ? -1 : minSum;
}; // Sort O(N logN) + O(N) * O(N) = O(n)
