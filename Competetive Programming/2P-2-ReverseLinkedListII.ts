// https://leetcode.com/problems/reverse-linked-list-ii/
// Reverse Linked List II

// https://www.youtube.com/watch?v=wk8-_M-2fzI

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // 1 <= n
  // - <= val <= +
  // 1 <= left <= right <= n

  // Algorithm
  // protect from contter case
  // - creat dum node for the pre el
  // set curent at lef position
  // repeat right - left times;

  // create dum node, init prev;
  let dummy = { next: head };

  let prev = dummy,
    cur = prev;
  for (let i = 0; i < left; i++) {
    prev = cur;
    cur = cur.next;
  }

  let next;
  for (let i = 0; i < right - left; i++) {
    next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
};
