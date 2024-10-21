/*
20. Valid Parentheses - Dif: Easy
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // xét 2 trường hợp
  // + Dấu ngoặc mở: push
  // + Dấu ngoặc đóng: pop => so sánh
  let map = {
      '(':')',
      '[':']',
      '{':'}'
  };
  let stack = [];
  for (let char of s) {
      if (map[char]) {
        stack.push(map(char))
      } else {
        if (stack.pop() !== char) return false
      }
  }
  return !stack.length
};

console.log(isValid("([{}])"))