// https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D
// Intervals Intersection

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

const merge = function(intervals_a, intervals_b) {
  // init merged array
  // sorted arrays by start
  // iterate 2 itervals from the start
  // isAStartIntersect = A.start >= B.start && A.start <= B.end
  // isBStartIntersect = B.start >= B.start && B.start <= A.end
  // if true
  // add max(start) and min(end)
  // move smaller end
  // if A.end <= B.end = A++
  // if B.end < A.end = B++
  // return merged

  let intersections = [];

  let i = 0;
  let j = 0;
  while (i < intervals_a.length && j < intervals_b.length) {
    // s -- a --- e
    let isAStartInIntersection =
      intervals_a[i].start >= intervals_b[j].start &&
      intervals_a[i].start <= intervals_b[j].end;

    // s --- b --- e
    let isBStartInIntersection =
      intervals_b[j].start >= intervals_a[i].start &&
      intervals_b[j].end <= intervals_a[i].end;

    // if intersect
    if (isAStartInIntersection || isBStartInIntersection) {
      intersections.push(
        new Interval(
          Math.max(intervals_a[i].start, intervals_b[j].start),
          Math.min(intervals_a[i].end, intervals_b[j].end)
        )
      );
    }

    if (intervals_a[i].end <= intervals_b[j].end) {
      i++;
      continue;
    }
    j++;
  }

  // Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
  // [[2,3], [5,6], [7,7]]
  // Output: [2, 3], [5, 6], [7, 7]
  return intersections;
}; // O(N + M); O(N + M)
