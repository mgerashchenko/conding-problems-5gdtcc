// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
// Insert intervals

const insert = function(intervals, new_interval) {
  // init new array merged
  // add all intervals before old.end < new.start
  // start merge min(old.start, new.start.)
  // and while new.end > old.start
  // merge max(new.end, old.end)
  // add the rest of the array
  // return new merged array

  // [[1,3], [5,7], [8,12]], new [4,6]
  // [[1,3], [4,7],[8,12]]
  // expect: [[1,3], [4,7], [8,12]]

  // [[1,3], [5,7], [8,12]] ; new [4,10]
  // [[1,3], [4,12]]
  // [[1,3], [4,12]]

  let merged = [];

  // add before the merge
  let i = 0;
  while (intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i++;
  }

  // merge
  let start = Math.min(intervals[i].start, new_interval.start);
  let end = Math.max(intervals[i].end, new_interval.end);
  while (i < intervals.length && new_interval.end > intervals[i].start) {
    end = Math.max(intervals[i].end, new_interval.end);
    i++;
  }
  // add merged interval
  merged.push(new Interval(start, end));

  // add after the merge
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}; // O(N) - O(N)
