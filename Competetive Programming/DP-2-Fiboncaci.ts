console.clear();

//     1 2 3 4 5 6
// fib 1,1,2,3,5,8

// Recursive O(n^2)
function fibRec(n) {
  if (n < 3) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
console.log("fibRec", fibRec(6)); // 8

// Dynamic O(n)
function fibDP(n) {
  const dp = [1, 1];

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
}

console.log("fibDP", fibDP(6)); // 8
