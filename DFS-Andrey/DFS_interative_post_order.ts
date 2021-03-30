console.clear();

(() => {
  class Node {
    val=Number;
    left=Node;
    right=Node;

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

  // DFS POST ORDER
  (function DFSPost(root) {
    const res = [];
    const stack = [root];

    while(stack.length){
      let el = stack[stack.length-1];
      if(el.right){
        stack.push(el.right);
        el.right = null;
      }
      if(el.left){
        stack.push(el.left);
        el.left = null;
      }
      if(el.val === stack[stack.length-1].val) {
        stack.pop();
        res.push(el.val);
      }
    }

    console.log("DFS PostOrder", res);
  })(tree);

})();