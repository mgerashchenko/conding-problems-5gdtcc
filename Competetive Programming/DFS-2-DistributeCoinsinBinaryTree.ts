// https://www.google.com/search?q=inorder+preorder+postorder&newwindow=1&rlz=1C5CHFA_enUS828US832&source=lnms&tbm=isch&biw=1680&bih=913#imgrc=BBNIO5_GRXSXmM

// 979. Distribute Coins in Binary tree
// https://leetcode.com/problems/distribute-coins-in-binary-tree/

// Screen shot to understand the Pattern https://youtu.be/ZhGtKbdrAhI?t=161

// First of it is DFS
// You need to understand the type preOrder, inOrder, postOrder approach
// It is postOrder because we need to know that result if both children before doing the calculatoins.
// Here are 3 parts of a calculation.
// The first problem is to count the value of the leaf node.val - 1
// Then need to count the children values, Math.abs(left) + Math.abs(right)
// That is a small graph, and it is a subproblem itself, so we need to figure out what to return to the top form.
// Last but not least, subproblem is to return left + right + node.val - 1.
// If it is 0 it means that a small subproblem is balanced.

//  3
// 0  0
// Ans 2

//  0
// 3 0
// Ans 3

var distributeCoins = function(root) {
  // constraints
  // n - root length
  // 1 <= n <= 100
  // 0 <= Node.val <= n
  // The sum of Node.val is n

  let moves = 0;

  (function DFS(node) {
    if (!node) return 0;
    let right = DFS(node.right);
    let left = DFS(node.left);
    moves += Math.abs(left) + Math.abs(right);
    // Thas is what we signal to the outside
    // if it is 0, it means it is self-balanced
    return left + right + node.val - 1;
  })(root);

  return moves;
};
