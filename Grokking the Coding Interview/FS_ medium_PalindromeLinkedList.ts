// https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ
// Palindrome LinkedList

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

const is_palindromic_linked_list = function(head) {
  // is palindrome
  // space O(1)
  // time O(N)
  // the head should be not muted at the end
  // use 2 pointers from 1 side
  // use Fast and Slow pointers
  // find the middle
  // reverse the second half
  // compaire all elements
  // reverse the second half back

  let test = head;
  let arr = [];
  while (test != null) {
    arr.push(test.value);
    test = test.next;
  }
  console.log('#1', arr);

  let isPalidrome = true;

  // 1 2 3
  //   s
  //     f

  // 1 2 3
  //   s
  //     f
  // in both cases take next one to get the middle value

  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // revert
  //   pre | cur tmp next
  // 1 2 3 | 4 5 6 7
  // 1 2 3 | 5 4 6 7
  // 1 2 3 | 6 5 4 7
  // 1 2 3 | 7 6 5 4

  // revert the second part
  let prev = slow;
  let cur = prev.next;
  while (cur.next != null) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = prev.next;
    prev.next = tmp;
  }

  test = head;
  arr = [];
  while (test != null) {
    arr.push(test.value);
    test = test.next;
  }
  console.log('#2', arr);

  // iterate to check if palindrom
  let middle = prev.next;
  let start = head;
  while (middle.next != null) {
    if (start.value !== middle.value) {
      isPalidrome = false;
      break;
    }
    start = start.next;
    middle = middle.next;
  }

  // return the order
  cur = prev.next;
  while (cur.next != null) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = prev.next;
    prev.next = tmp;
  }

  test = head;
  arr = [];
  while (test != null) {
    arr.push(test.value);
    test = test.next;
  }
  console.log('#3', arr);

  return isPalidrome;
}; // O(N); O(1)
