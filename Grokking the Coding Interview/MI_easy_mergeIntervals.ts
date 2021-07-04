// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
// Merge Intervals
//
const merge = function(intervals) {
  // merge intervals
  // sort intervals by start
  // iterate intervals
  // have temo start and end
  // if cur_start > tmo_end, safa tmp interval
  // if not use min start and max end

  // [[1,4], [2,5], [7,9]]
  // t_s 2
  // t_e 5
  // s 7
  // e 9
  // [[1,5], [7,9]]

  // conercase
  if (intervals.length < 2) return intervals;

  // init result
  let merged = [];

  // sort.intervals
  intervals.sort((x, y) => x.start - y.start);

  // iterate intervals
  let start = Infinity;
  let end = -1;
  for (let i = 0; i < intervals.length; i++) {
    let { start: tmp_start, end: tmp_end } = intervals[i];

    if (end != -1 && tmp_start > end) {
      merged.push(new Interval(start, end));
      start = tmp_start;
      end = tmp_end;
      continue;
    }

    // update start and end
    start = Math.min(start, tmp_start);
    end = Math.max(end, tmp_end);
  }

  // add the last one
  merged.push(new Interval(start, end));

  return merged;
}; // O(N logN) + O(N); O(N)
