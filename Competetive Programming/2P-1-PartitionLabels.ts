// https://leetcode.com/problems/partition-labels/
// Partition Labels

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const partions = [];
    const maxIndexs = {};
    

    // Map max indexs
    for(let i=0;i<S.length;i++) {
        maxIndexs[S[i]] = i;
    }
    
    let maxIndex = maxIndexs[S[0]];
    let lastIndex = 0;
    for(let i=0;i<S.length;i++) {
        let char = S[i];
        if(i===maxIndex) {
            // add 1 for length
            partions.push(i - lastIndex + 1);
            lastIndex = i + 1;
            maxIndex = maxIndexs[S[i+1]];
            continue;
        }

        if(maxIndexs[char] > maxIndex) {
            maxIndex = maxIndexs[char];
        }
    }

    return partions;
};
