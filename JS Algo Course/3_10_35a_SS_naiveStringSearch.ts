// - The Function: Write the function that check is substring part of the string
// inputs string substring
// output count of substrings in the string

// null - naiveSearch('', '') // 0
// 0 - naiveSearch('.   ', '') // 0
// 0 - naiveSearch('dfdsf', '') // 0
// 0 - naiveSearch('', 'a') // 0
// simple - naiveSearch('a', 'a') // 1
// simple - naiveSearch('aa', 'aa') // 1
// simple - naiveSearch('aa', 'aa') // 1
// simple - naiveSearch('ab', 'aa') // 0
// comlicate - naiveSearch('bb aa', 'aa') // 2
// comlicate - naiveSearch('ab ac', 'a') // 2
// complex - ------

// - The pattern:
// 2 Arrays

// What we do if imput is null
// What we do if input is real not integer
// What we do if input not a number or string
// What we do if input is not object or array

// Write the steps and move closer to the code
// Ask for the help

// - Check null
// Check 0 or empty
// Check result simple
// Check complicate
// Check complex

// I don't remember that 1 + 0 = 1
// I don't remember that 1 + 0 = 1
// I don't remember that 1 * 1 = 1
// I don't rememer how to use typeof
// I don't remember to break or continue the loop
// I don't remember that Array is Object
// I don't remember that for([key, val] in {}) = val is not string +val to make it string
// I don't remember about that 1+2*2=5 and (1+2)*2=6
// I don't remember the diffrence between index and arr[index]
// I don't remember return the result
// I don't remember the diffrance between = and ===
// I don't remember that for(in) return i as a string !!!
// I don't check conner case by myself
// I don't check variables names
// I don't check recursion loops
// I don't check "length" spelling
// I don't think about mirrow cases as [aa] [a] [] [aba]
// I don't want to think about coner cases

// Code simples
// Ask for the help
// Code harder

function naiveStringSearch(str, sub) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[+j]) break;
      if (+j === sub.length - 1) count++;
    }
  }
  return count;
}

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
