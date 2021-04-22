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
  console.log("              20,15,13,18,25,30");
  (function DFSPre(root) {
    const res = [],
      stack = [root];

    while (stack.length) {
      let { val, left, right } = stack.pop();
      // we can imidiatly add value
      res.push(val);
      // push right first to be last in the stack
      right && stack.push(right);
      // left will be first in the stack
      left && stack.push(left);
    }
    console.log("DFS PreOrder", res);
  })({ ...tree });

  // DFS POST ORDER
  // Left -> Right -> Top
  // https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/how-to-traverse-in-a-tree-postorder-13146c73f47dcf88.png
  console.log("           -    13,18,15,30,25,20");
  (function DFSPost(root) {
    const res = [],
      stack = [root];

    while (stack.length) {
      // deep copy of the array
      let { ...node } = stack[stack.length - 1],
        { val, left, right } = node;

      // print node when it is leafe
      if (!(left || right)) {
        res.push(val);
        stack.pop();
        continue;
      }

      // clean node, to be ready to print
      node.left = null;
      node.right = null;
      stack[stack.length - 1] = node;

      // add right first to be last in the stack
      right && stack.push(right);
      // left will be first
      left && stack.push(left);
    }

    console.log("DFS PostOrder", res);
  })({ ...tree });

  // DFS IN ORDER
  // Bottom -> Left -> Top -> Right
  // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techiedelight.com%2Finorder-tree-traversal-iterative-recursive%2F&psig=AOvVaw2aJghaaT75guFSIQItvCb2&ust=1619059038744000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiuk4qnjvACFQAAAAAdAAAAABAt
  console.log("            -    13,15,18,20,25,30");
  (function DFSInOrder(root) {
    const res = [],
      stack = [root];

    while (stack.length) {
      // deep copy;
      let { ...node } = stack.pop(),
        { val, left, right } = node;
      // clean the node
      node = { val, left: null, right: null };

      // if no node left print
      if (!left) {
        res.push(val);
        right && stack.push(right);
        continue;
      }

      // if left exist put into stack in reverse order
      // right top left
      right && stack.push(right);
      stack.push(node);
      stack.push(left);
    }

    console.log("DFS IN ORDER", res);
  })({ ...tree });
})();
