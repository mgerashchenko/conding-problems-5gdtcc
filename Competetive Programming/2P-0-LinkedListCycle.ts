// Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
  // Constraints
  // 0 <= n <= ...

  if (!head) return false;
  let node = head;

  let slow = head;
  let fast = head.next && head.next.next;
  while (slow && fast) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next && fast.next.next;
  } // O(n)

  return false;
};
