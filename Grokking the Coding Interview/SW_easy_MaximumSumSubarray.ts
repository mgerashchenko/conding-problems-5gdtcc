// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP#problem-statement
// Maximum Sum Subarray

// Sliding window
// 2 of 2

const max_sub_array_of_size_k = function(k, arr) {
  let max = -1,
    sum = 0,
    start = 0;
  
  for(let end=0; end<arr.length;end++) {
    sum += arr[end];

    if(end == start+k-1){
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }

  return max;
};
