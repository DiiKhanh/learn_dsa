/*
22. Generate Parentheses - Difficulty: Medium
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
Input: n = 1
Output: ["()"]

Constraints:
1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // Only add open paranthesis if open < n
  // Only add close if close < open
  // Valid open = close = n
  // Using backtracking
  const res = []
  backtrack(n, 0, 0, '', res)
  return res
};

var backtrack = (n, openN, closedN, current, res) => {
  // 3, 3, 3, ((())), [] => ['((()))']
  console.log('res', res)
  if (openN === closedN && openN === n) {
    res.push(current)
    return
  }
  if (openN < n) {
    // 3,1,0,(,[]
    // 3,2,0,((,[]
    // 3,3,0,(((,[]
    backtrack(n, openN + 1, closedN, current + '(', res)
  }
  // 3,3,1, (((), []
  // 3,3,2, ((()), []
  // 3,3,3, ((())), []
  if (closedN < openN) {
    backtrack(n, openN, closedN + 1, current + ')', res)
  }
}

console.log(generateParenthesis(3))