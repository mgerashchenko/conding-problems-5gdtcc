// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
// Pseudo-Palindromic Paths in a Binary Tree

// Doesn't works
var pseudoPalindromicPaths  = function(root) {
    // Algorithm
    // Use DFS
    // Buld paths
    // Check if it is pseudo palendromic
    
    if(!root) return 0;
    
    let paths = [];
    
    let stack = [{node: root, path: []}];
    while(stack.length) {
        let {node, path} = stack.pop();
        
        let {val, left, right} = node;
        left && stack.push({node: left, path:[...path, val]});
        right && stack.push({node: right, path:[...path, val]});

        if(!left && !right) {
           paths.push([...path, val]);
           continue;
        }
    }
    
    const isPsPalidromic = path => {
        let hashMap = {};
        for(let el of path){
            if(hashMap[el] == null) {
                hashMap[el] = 0;
            }

            hashMap[el]++;
        }
        
        let counter = Object.keys(hashMap).reduce((prev, el) => hashMap[el]%2===1 ? prev+1 : prev, 0);
        return counter<=1;
    }
    
    return paths.reduce((prev, path) => isPsPalidromic(path) ? prev+1: prev, 0);
};