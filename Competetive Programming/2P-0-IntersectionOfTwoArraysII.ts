// #1
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
  // Constraints
  // nums length 1<= n <= 1000
  // nums i 1 <= i <= 1000
  const res = [];

  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);

  let [tmp1, tmp2] =
    nums1.length < nums2.lenght ? [nums1, nums2] : [nums2, nums1];
  let i = 0,
    j = 0;
  while (i < tmp1.length && j < tmp2.length) {
    if (tmp1[i] === tmp2[j]) {
      res.push(tmp1[i]);
      i++;
      j++;
      continue;
    }
    if (tmp2[j] > tmp1[i]) {
      i++;
      continue;
    }
    j++;
  }
  return res;
};

// for #2 write a hashMap
