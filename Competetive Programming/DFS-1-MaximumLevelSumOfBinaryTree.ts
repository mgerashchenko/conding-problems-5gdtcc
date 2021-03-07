// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// 1161. Maximum Level Sum of a Binary Tree

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  if (root == null) return 0;

  let level = 0;
  let minLevel = Infinity;
  let maxSum = -Infinity;
  let queue = [root];

  while (queue.length) {
    level++;
    let sum = queue.reduce((prev, cur) => prev + cur.val, 0);
    if (sum > maxSum) {
      minLevel = level;
      maxSum = sum;
    }

    let newQueue = [];
    while (queue.length) {
      let node = queue.shift();
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }
    queue = [...newQueue];
  }

  return minLevel;
};
