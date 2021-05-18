// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// Maximum Depth of N-ary Tree

// DFS recursevly
var maxDepth = function(root) {
  // Write BFS
  // Take the max length of the stack

  // conner case
  if (!root) return 0;

  let max = 0;
  (function step(node, level) {
    // base
    let { children } = node;
    if (!children.length) {
      max = Math.max(max, level);
    }

    //recursion
    for (let el of children) {
      step(el, level + 1);
    }
  })(root, 1);

  // return result
  return max;
};

// BFS recursevly
var maxDepth = function(root) {
  // Write BFS
  // Take the max length of the stack

  // connner case
  if (!root) return 0;

  let max = 0;

  //step
  (function step(nodes, level) {
    // base
    if (!nodes || !nodes.length) {
      max = level;
      return;
    }

    // recursion
    step(
      nodes.reduce((prev, { children }) => [...prev, ...children], []),
      level + 1
    );
  })([root], max);

  // return result
  return max;
};

// DFS iteratively
var maxDepth = function(root) {
  // Write BFS
  // Take the max length of the stack

  // conner case
  if (!root) return 0;

  let max = 0,
    stack = [{ node: root, level: 1 }];
  while (stack.length) {
    let { node, level } = stack.pop();

    let { children } = node;
    if (!children || !children.length) {
      max = Math.max(max, level);
    }

    for (let node of children.reverse()) {
      stack.push({ node, level: level + 1 });
    }
  }

  // return result
  return max;
};

// BFS iteratively
var maxDepth = function(root) {
  // BFS iteratevly

  // conner case
  if (!root) return 0;

  // iterate tree with queue
  let level = 0,
    queue = [root];
  while (queue.length) {
    level++;

    let tmp = [];
    for (let node of queue) {
      tmp.push(...node.children);
    }
    queue = tmp;
  }

  return level;
};
