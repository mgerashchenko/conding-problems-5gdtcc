// #2
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    // Constraints
    // 1 <= lenght <= 1000
    // 0 <= n[i] <= 1000
    
    const res = [];
    
    // I. Let's sort an array
    let s1 = [...nums1].sort((x,y)=>x-y); // O(log^n)
    let s2 = [...nums2].sort((x,y)=>x-y); // O(log^n)
    
    // Lest make the sort first
    [s1, s2] = s1.length < s2.length ? [s1, s2] : [s2, s1];
    
    let [i,j]=[0,0];
    while(i<s1.length && j<s2.length) {
          if(s1[i]===s2[j]) {
              res.push(s1[i]);
              i++;
              j++;
              continue;
          }
          if(s1[i]<s2[j]){
              // thre is no sence to j++
              // cos it will be equlal or greater
              i++;
              continue;
          }
          // if shorter is greater than
          // longer lood to the next longer
          j++;
    }
    
    return res;
};

// for #3 write a hashMap
