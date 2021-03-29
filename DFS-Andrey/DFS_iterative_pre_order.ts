// https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819

console.clear();

(() => {
  class Node {
    val: Number;
    left: Node;
    right: Node;

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
  (function DFS(root) {
    const res = [];
    const stack = [root];
    let sum = 0;

    while (stack.length) {
      let el = stack.pop();
      if (el.val != null) {
        sum += el.val;
      }
      res.push(el.val);
      el.right && stack.push(el.right);
      el.left && stack.push(el.left);
    }

    console.log("DFS sum", res);
  })(tree);

  // DFS PRE ORDER
  (function DFS(root: Node) {
    const res = [];
    const stack = [root];
    let sum = 0;

    while (stack.length) {
      let el = stack.pop();
      if (el.val != null) {
        sum += el.val;
      }
      res.push(el.val);
      el.right && stack.push(el.right);
      el.left && stack.push(el.left);
    }

    console.log("DFS Preo", res);
  })(tree);
})();
