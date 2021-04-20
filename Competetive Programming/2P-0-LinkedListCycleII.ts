// #
// https://leetcode.com/problems/linked-list-cycle-ii/
// Linked List Cycle II
// Medium

var detectCycle = function(head) {
    // Constraints
    // length [0, 10]
    // val [-10, 10]
    // pos -1 or index [0,10]
    // O(1) - memory
    // don't modify the list
    
    // easy win
    if(head == null || head.next == null) return null;
    
    let map = new Map(),
        tmp = head,
        pos = 0;
    while(tmp != null){
        // if node exist it is a loop
        if(map.has(tmp)){
            return tmp;
        }
        // remember the nodes in the map
        map.set(tmp);
        tmp = tmp.next;
    }
    
    return null;
};