// I don't remember that 1 + 0 === 0
// I don't remember that 1 + 1 === 1

// Can I refactor the code
// How other people solve it?

// Write the function productOfArray that retun the product of the numbers in array

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  // recursion
  if (!Array.isArray(arr)) return null;
  // base case if arr is empty  retur 1;
  if (!arr.length) return 1;
  // recursion multiply arr[0] and arr.slice(1);
  return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray(0) // 1
// productOfArray(1) // 1 * 1
// productOfArray(1,2) // 1 * 2 * 1
// productOfArray(1,2,3) // 1 * 2 * 3 * 1

// O(n)
