// # - PROGRESS
// Path with Maximum Probability
// https://leetcode.com/problems/path-with-minimum-effort/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
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
  let priorities = [];
  // need to count visited nodes
  let visited = new Set();
  let nodes = [];

  // set notes
  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (nodes[edges[i][j]] == null) {
        nodes[edges[i][j]] = [];
      }
    }

    nodes[edges[i][0]].push({ index: edges[i][1], val: succProb[i] });
    nodes[edges[i][1]].push({ index: edges[i][0], val: succProb[i] });
  }

  // init priorities
  for (let i = 0; i < nodes.length; i++) {
    priorities[i] = i === start ? 1 : 0;
  }

  let cur = start;
  while (cur !== end) {
    if (visited.has(cur)) {
      cur = heap.get();
      if (cur == null) return 0;
      cur = cur.index;
      continue;
    }

    for (let i = 0; i < nodes[cur].length; i++) {
      priorities[nodes[cur][i].index] = Math.max(
        priorities[cur] * nodes[cur][i].val,
        priorities[nodes[cur][i].index]
      );
      heap.add(nodes[cur][i].index, priorities[nodes[cur][i]]);
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
