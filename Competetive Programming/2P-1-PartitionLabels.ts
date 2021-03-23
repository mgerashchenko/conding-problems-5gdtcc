// https://leetcode.com/problems/partition-labels/
// Partition Labels

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const res = [];
    const map = new Map();
    
    // Map max indexs
    for(let i=0;i<S.length;i++) {
        map.set(S[i], i);
    }

    let max = 0;
    let last = 0;
    for(let i=0;i<S.length;i++) {
        let cur = S[i];        
        max = Math.max(max, map.get(cur));
        if(i<max) continue;
        
        // add 1 to index to get length
        res.push(i - last + 1);
        // count from 0 index
        last = i + 1;
    }

    return res;
};

