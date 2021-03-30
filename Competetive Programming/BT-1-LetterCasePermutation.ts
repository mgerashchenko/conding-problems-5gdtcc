//https://leetcode.com/problems/letter-case-permutation/

// 784. Letter Case Permutation

// options 2(Lover/Upper) positions s.lenght =  2*n
// S length 1..12
// S will consist only of letters or digits

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let res = [];

    (function BT(mutation, index){
        if(index===S.length){
            res.push(mutation);
            return;
        }

        let char = S[index];
        /[a-z]/.test(char) && BT(mutation+char.toUpperCase(), index+1);
        /[A-Z]/.test(char) && BT(mutation+char.toLowerCase(), index+1);
        BT(mutation+char, index+1);
    })('', 0); // O(n)
    
    return res;
};  // O(n)
