// https://www.educative.io/courses/grokking-the-coding-interview/3jY0GKpPDxr
// Cycle in a Circular Array

// We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

const circular_array_loop_exists = function(arr) {
  // check cycle starting from every index
  // step index function
  // if 1st is positive move forward
  // if 1st is negative move back
  // if next index is opposit sign return false
  // cycle index by cur + index % arr.length
  // cyle index by cur - index, if cur - index < 0, (length - val))%length
  // use fast and slow step function
  // if fast === slow return true
  // if arr length is 1 return false
  // if change direction return false
  // return result

  if (arr.length < 2) return false;

  let step = (isForward, index, move) => {
    if (move < 0 && isForward) return -1;

    // 0 1
    // 2 1
    // (0 + 2) %2 = 2%2 = 0
    if (move >= 0) {
      return (index + move) % arr.length;
    }

    // 0  1
    // -1
    // 0 -1
    if (move < 0) {
      index + move;
    }
  };

  for (let i = 0; i < arr.length; i++) {}
};
