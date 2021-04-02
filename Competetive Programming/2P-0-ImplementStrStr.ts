// https://leetcode.com/problems/implement-strstr/
// Implement strStr
// Easy

// Naive vol #0

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // when haystack is '' return 0
    // when needle is ''  retirn 0
    // when there is match return -1
    
    // Constraints
    //  0 <= haystack <= 5*10^4
    // lower-case English letters
    
    if(needle.length===0) return 0;
    // Good catch!!!
    if(needle.length > haystack.length) return-1;
    
    for(let i=0;i<haystack.length;i++){
        let j;
        for(j=0;j<needle.length;j++){
            if(haystack[i+j]!==needle[j]) break;
        }
        if(j===needle.length) return i;
    }
    
    return -1;
};
