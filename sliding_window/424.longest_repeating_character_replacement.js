/*
424. Longest Repeating Character Replacement - Difficulty: Medium
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  // 1. Brute Force
  // let res = 0
  //   for (let i = 0; i < s.length; i++) {
  //     let count = new Map()
  //     let maxf = 0
  //     for (let j = i; j < s.length; j++) {
  //       count.set(s[j], (count.get(s[j]) || 0) + 1)
  //       maxf = Math.max(maxf, count.get(s[j]))
  //       if ((j - i + 1) - maxf <= k) {
  //         res = Math.max(res, j - i + 1)
  //       }
  //     }
  //   }
  // return res
  // 2. Sliding Window
  let res = 0, l = 0, maxf = 0
  let count = new Map()

  for (let r = 0; r < s.length; r++) {
    count.set(s[r], (count.get(s[r]) || 0) + 1)
    maxf = Math.max(maxf, count.get(s[r]))

    while ((r - l + 1) - maxf > k) {
      count.set(s[l], count.get(s[l]) -1)
      l++
    }
    res = Math.max(res, r - l + 1)
  }

  return res
};