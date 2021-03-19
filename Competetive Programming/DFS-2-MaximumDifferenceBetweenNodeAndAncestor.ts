// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
// 1026. Maximum Difference Between Node and Ancestor

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  let maxValue = -Infinity;

  (function DFS(node, max, min) {
    if (!node) {
      maxValue = Math.max(maxValue, max - min);
      return;
    }
    let { val, left, right } = node;
    let newMax = Math.max(max, val);
    let newMin = Math.min(min, val);
    DFS(left, newMax, newMin);
    DFS(right, newMax, newMin);
  })(root, -Infinity, +Infinity);

  return maxValue;
};
