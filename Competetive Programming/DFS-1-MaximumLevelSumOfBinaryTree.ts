// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// 1161. Maximum Level Sum of a Binary Tree

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  // BFS
  if (root == null) return 0;

  let level = 0;
  let minLevel = 0;
  let maxSum = -Infinity;
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    level++;
    let sum = 0;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (sum > maxSum) {
      minLevel = level;
      maxSum = sum;
    }
  }

  return minLevel;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  // DFS

  var maxLevelSum = function(root) {
    const levels = [-Infinity];
    (function DFS(node, level) {
      if (!node) return;

      if (levels.length === level) {
        levels.push(0);
      }

      levels[level] += node.val;

      DFS(node.left, level + 1);
      DFS(node.right, level + 1);
    })(root, 1);

    const max = Math.max(...levels);
    return levels.indexOf(max);

    // object
    //return Object.keys(levels).reduce( (a,b) => levels[a] > levels[b] ? a : b)[0];

    var maxLevelSum = function(root) {
    const levels = [];
    (function DFS(node, level){
        if(!node) return;
        if(levels.length === level) levels.push(0);
        
        const {left, right, val} = node;
        levels[level] += val;
        
        level++;
        DFS(left, level);
        DFS(right, level);
    })(root, 0)

    let max = Math.max(...levels);
    return levels.indexOf(max)+1;
  };
};
