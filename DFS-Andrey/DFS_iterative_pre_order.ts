// https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819

console.clear();

(() => {
  // Create a tree from array
  class Node {
    val = Number;
    left = Node;
    right = Node;

    constructor(val) {
      this.val = val;
    }
  }

  function arrayToTree(array) {
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

      fillTheTree(node.left, i + 1);
      fillTheTree(node.right, i + 2);
    })(root, 0);

    return root;
  }
  let array = [1, 7, 0, 7, -8, null, null];
  console.log(array);
  const tree = arrayToTree(array);
  console.log("tree", tree);

  // DFS PRE ORDER
  let sumDFS = (function DFS(root) {
    const stack = [root];
    let sum = 0;

    while (stack.length) {
      let el = stack.pop();
      if (el.val != null) {
        sum += el.val;
      }

      el.right && stack.push(el.right);
      el.left && stack.push(el.left);
    }

    return sum;
  })(tree);
  console.log("DFS sum", sumDFS);
})();
