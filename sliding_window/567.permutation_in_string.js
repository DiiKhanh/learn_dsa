/*
567. Permutation in String - Difficulty: Medium

Given two strings s1 and s2, return true if s2 contains a 
permutation of s1, or false otherwise.
(Permutation: A permutation is a rearrangement of all the characters of a string)
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // 1. Brute Force
  // s1 = s1.split('').sort().join('')

  // for (let i = 0; i < s2.length; i++) {
  //   for (let j = i; j < s2.length; j++) {
  //     let subStr = s2.slice(i, j + 1).split('').sort().join('')
  //     if (subStr === s1) {
  //       return true
  //     }
  //   }
  // }
  // return false
  // 2. Sliding window
  if (s1.length > s2.length) {
    return false
  }

  let s1Count = new Array(26).fill(0)
  let s2Count = new Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++
    s2Count[s2.charCodeAt(i) - 97]++
  }

  let matches = 0
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++
    }
  }

  let l = 0
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) {
      return true
    }

    let index = s2.charCodeAt(r) - 97
    s2Count[index]++
    if (s1Count[index] === s2Count[index]) {
      matches++
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--
    }

    index = s2.charCodeAt(l) - 97
    s2Count[index]--
    if (s1Count[index] === s2Count[index]) {
      matches++
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--
    }
    l++
  }
  return matches === 26
};