// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
// Merge Intervals
//
const merge = function(intervals) {
  // there are intervals merge them
  // 
  // init merged = [];
  // sort intevals N Log N
  // 
  // iterate intervals
  // start = i1.start
  // end = i2.start
  // set tmp start and end
  // if tmp start > end, push interval to result
  // if not update end = min(end, tmp.end)
  // return merged

  if(intervals.length < 2) return intervals;

  // init result
  let merged = [];

  // sort array
  intervals.sort((x,y) => x.start - y.start);

  let {start, end} = intervals[0];

  for(let i=1;i<intervals.length;i++) {
    let {start:tmpStart, end:tmpEnd} = intervals[i];

    if(end < tmpStart) {
      merged.push(new Interval(start, end));
      start = tmpStart;
      end = tmpEnd;
      continue;
    }
    end = Math.max(end, tmpEnd);
  }

  // add the last one
  merged.push(new Interval(start, end));

  return merged;
}; // O(N LogN + N)
