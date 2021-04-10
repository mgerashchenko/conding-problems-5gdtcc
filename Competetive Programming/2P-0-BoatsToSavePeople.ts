// https://leetcode.com/problems/boats-to-save-people/
// Boats to Save People

var numRescueBoats = function(people, limit) {
  // Constraints
  // 1 <= people length ...
  // 1 <= people[i]
  // 1 <= limit
  // people[i] <= lim

  let res = 0;
  const peopleS = [...people].sort((x, y) => x - y); // O()

  let i = 0,
    j = peopleS.length - 1;
  while (i <= j) {
    res++;
    if (peopleS[i] + peopleS[j] <= limit) {
      i++;
    }
    j--;
  }
  return res;
}; // O(n)
