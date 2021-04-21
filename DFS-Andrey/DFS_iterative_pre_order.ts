// https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819

console.clear();

(() => {
  class Node {
    val = Number;
    left = Node;
    right = Node;

    constructor(val) {
      this.val = val;
    }
  }

  let array = [20, 15, 25, 13, 18, , 30];
  let tree = {};

  // Create a tree from array
  (array => {
    const root = new Node(null);
    if (!array || !array.length) return root;

    root.val = array[0];

    (function fillTheTree(node, i) {
      if (!node) return;

      let leftValue = array[i * 2 + 1];
      let rightValue = array[i * 2 + 2];

      const left = leftValue == null ? null : new Node(leftValue);
      const right = rightValue == null ? null : new Node(rightValue);

      node.left = left;
      node.right = right;

      fillTheTree(node.left, i * 2 + 1);
      fillTheTree(node.right, i * 2 + 2);
    })(root, 0);

    tree = root;
  })(array);

  // https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819
  console.log(array);
  console.log("tree", tree);

  // DFS PRE ORDER
  // Bottom -> Left -> Right
  (function DFSPre(root) {
    const res = [],
      stack = [root];

    while (stack.length > 0) {
      let node = stack.pop();
      res.push(node.val);

      // should push right first in order
      // to get left from the stack first
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    console.log("DFS PreOrder", res);
  })(tree);

  // DFS POST ORDER
  // Left -> Right -> Top
  (function DFSPost(root) {
    const res = [],
      stack = [root];

    while (stack.length > 0) {
      let node = stack[stack.length - 1];

      // if the node doesn't have children, it's current bottom
      if (node.right == null && node.left == null) {
        res.push(node.val);
        stack.pop();
        continue;
      }

      if (node.right) {
        // push a right el first to have a left el pop first from the stack
        stack.push(node.right);
        // set node children to null, to mark as visited
        node.right = null;
      }

      if (node.left) {
        // lef will come first
        stack.push(node.left);
        // set node children to null, to mark as visited
        node.left = null;
      }
    }

    console.log("DFS PostOrder", res);
  })(tree);
})();
