// - The Function: sort array
// inputs array
// output sorted array

// - The pattern: Bubble sort
// swap to 2 values, and over and over again

// Steps
// copy array
// create for i from the end - 1
// create for j from the begin
// if j > j + 1 swap
// return sorted

// I don't check variables names
// I don't check recursion loops
// I don't remember that 1 * 1 = 1
// I don't remember that 1 + 0 = 1
// I don't check "length" spelling
// I don't rememer how to use typeof
// I don't remember return the result
// I don't want to think about coner cases
// I don't remember that Array is an Object
// I don't remember to break or continue the loop
// I don't remember the diffrance between = and ===
// I don't remember about that 1+2*2=5 and (1+2)*2=6
// I don't think about mirrow cases as [aa] [a] [] [aba]
// I don't remember that for(in) return i as a string !!!
// I don't remember the diffrence between index and arr[index]
// I don't remember that for([key, val] in {}) = val is not string val*1 to make it string

// Code simples
// Ask for the help
// Code harder

function bubbleSort(arr) {
  console.log("sorting...");
  let ans = [...arr];

  for (let i = 1; i < ans.length; i++) {
    for (let j = ans.length - 1; j >= i; j--) {
      if (ans[j] < ans[j - 1]) {
        let tmp = ans[j];
        ans[j] = ans[j - 1];
        ans[j - 1] = tmp;
      }
    }
  }

  return ans;
} // O(n**2)

// - Check null
// Check 0 or empty
// Check result simple
// Check complicate
// Check complex

// FIXED MISTAKES
// GOT ERROS

// Refactor

// Time O()
// Space O()

// Check O(1) O(log n) O(n log n)

// Math solution
// Google solution
