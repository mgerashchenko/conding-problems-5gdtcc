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
  // Constraints
  // 1 <= n
  // 1 <= left <= right <= n

  // Algorigthm
  // Use 2 pointers to reverse the elments
  // set cur element
  // use dummy node to prevent the conner case
  //      when start = 1

  // init dummy node
  let dummy = { next: head };

  let cur = head,
    prev = dummy;
  // set current and p
  for (let i = 1; i < left; i++) {
    prev = cur;
    cur = cur.next;
  }

  // interate the list
  let next;
  for (let i = 0; i < right - left; i++) {
    let next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  // return the result
  return dummy.next;
};
