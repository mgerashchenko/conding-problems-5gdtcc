// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// 1161. Maximum Level Sum of a Binary Tree

// BFS
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
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

// DFS
