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
var maxProbability = function(n, edges, succProb, start, end) {
  let nodes = [];

  // describe the graph
  for (let i in edges) {
    let el = edges[i];
    if (!nodes[el[0]]) {
      nodes[el[0]] = [];
    }
    if (!nodes[el[1]]) {
      nodes[el[1]] = [];
    }
    nodes[el[0]].push({ index: el[1], prob: succProb[i] });
    nodes[el[1]].push({ index: el[0], prob: succProb[i] });
  }

  const pobabilities = [];
  for (let i = 0; i < nodes.length; i++) {
    pobabilities[i] = i === start ? 1 : 0;
  }

  let heap = new Heap(new Node(start, pobabilities[start]));
  let visited = [];

  let node = heap.get();

  // while(node.index !== end){
  visited.push(node.index);

  for (let el of nodes[node.index]) {
    let pobability = el.index === start ? 0 : pobabilities[el.index];
    let prob = node.value * el.prob;

    console.log(el, pobability, prob);
    if (prob > pobability) {
      pobabilities[el.index] = prob;
    }
  }
  // }

  console.log(pobabilities);

  return pobabilities[end];
};
class Node {
  next = null;
  constructor(index, value) {
    this.index = index;
    this.value = value;
  }
}
class Heap {
  queue = [];
  constructor(node) {
    this.queue.push(node);
  }
  get() {
    [this.queue[0], this.queue[this.queue.length - 1]] = [
      this.queue[this.queue.length - 1],
      this.queue[0]
    ];
    let max = this.queue.pop();

    //TODO: reballance;

    return max;
  }
}
