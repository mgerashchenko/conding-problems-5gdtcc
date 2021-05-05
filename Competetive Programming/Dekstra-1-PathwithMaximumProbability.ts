// #0
// Path with Maximum Probability
// https://leetcode.com/problems/path-with-maximum-probability/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
  // Dekstra
  // Need priority queue
  let heap = new Heap();
  // main table
  let priorities = {};
  // need to count visited nodes
  let visited = new Set();
  let nodes = {};

  // set notes
  for (let pair of edges) {
    for (let edge of pair) {
      if (nodes[edge] == null) {
        nodes[edge] = [];
      }
    }

    let [first, second] = pair,
      index = edges.indexOf(pair);
    nodes[first].push({ index: second, val: succProb[index] });
    nodes[second].push({ index: first, val: succProb[index] });
  }

  // init priorities
  for (let node of Object.keys(nodes)) {
    priorities[node] = node == start ? 1 : 0;
  }

  let cur = start;
  while (cur !== end) {
    if (!nodes[cur]) return 0;

    if (visited.has(cur)) {
      node = heap.get();
      if (node == null) return 0;
      cur = node.index;
      continue;
    }

    for (let node of nodes[cur]) {
      let { index, val } = node;

      priorities[index] = Math.max(priorities[cur] * val, priorities[index]);
      heap.add(index, priorities[index]);
    }
    visited.add(cur);
    cur = heap.get().index;
  }

  return priorities[end];
};

// Need node object to add to he main table and priority queue
class Node {
  constructor(index, val) {
    this.index = index;
    this.val = val;
  }
}
// There is no priority queue in the Javascript
class Heap {
  queue = [];
  constructor() {}
  add(index, val) {
    let node = new Node(index, val);
    this.queue.push(node);

    let cur = this.queue.length - 1;
    let parent = ~~((cur - 1) / 2);
    while (this.queue[cur].val > this.queue[parent].val && cur >= 0) {
      [this.queue[cur], this.queue[parent]] = [
        this.queue[parent],
        this.queue[cur]
      ];
      cur = parent;
      parent = ~~((cur - 1) / 2);
    }
  }
  get() {
    let first_i = 0;
    let last_i = this.queue.length - 1;
    [this.queue[first_i], this.queue[last_i]] = [
      this.queue[last_i],
      this.queue[first_i]
    ];
    let max_node = this.queue.pop();

    let cur_i = 0;
    let left_val = this.queue[cur_i * 2 + 1] && this.queue[cur_i * 2 + 1].val;
    let right_val = this.queue[cur_i * 2 + 2] && this.queue[cur_i * 2 + 2].val;
    let max_i = left_val > right_val ? cur_i * 2 + 1 : cur_i * 2 + 2;
    while (
      this.queue[max_i] != null &&
      this.queue[cur_i].val < this.queue[max_i].val
    ) {
      [this.queue[cur_i], this.queue[max_i]] = [
        this.queue[max_i],
        this.queue[cur_i]
      ];
      cur_i = max_i;
      left_val = this.queue[cur_i * 2 + 1] && this.queue[cur_i * 2 + 1].val;
      right_val = this.queue[cur_i * 2 + 2] && this.queue[cur_i * 2 + 2].val;
      max_i = left_val > right_val ? cur_i * 2 + 1 : cur_i * 2 + 2;
    }
    return max_node;
  }
}
