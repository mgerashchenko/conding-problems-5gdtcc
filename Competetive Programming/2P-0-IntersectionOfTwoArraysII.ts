// #2
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
  // Constrains
  // num.lenght [1..1000]
  // num[i] [0...1000]

  // it is not just intersection
  // need to count amount of matches
  // make sense to sort array first
  // makse sense to start from the shorter array

  //  0123
  // [1221]
  //  013
  // [22]

  //  01234
  // [122345]
  //  012
  // [24]

  const res = [];

  // sort array first to optimize search
  const sa1 = [...nums1].sort((x, y) => x - y); // O(n);
  const sa2 = [...nums2].sort((x, y) => x - y);

  // find the smallest array first
  if (sa1.lenght > sa2.length) {
    // swap arrays
    [sa1, sa2] = [sa2, sa1];
  }

  let i = (j = 0);
  while (i < sa1.length && j < sa2.length) {
    if (sa1[i] === sa2[j]) {
      res.push(sa1[i]);
      i++;
      j++;
      continue;
    }
    if (sa1[i] < sa2[j]) {
      i++;
      continue;
    }

    j++;
  }

  return res;
};

// for #3 write a hashMap
