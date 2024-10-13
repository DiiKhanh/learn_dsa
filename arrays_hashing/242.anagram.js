/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
*/
const isAnagram = (s, t) => {
  /*
  Note: Check length 2 strings
  1. Sorting
  2. Hash Table
  */
  if (s.length !== t.length) return false;
  // return s.split('').sort().join('') === t.split('').sort().join('');
  const countS = {};
  const countT = {};
  for (let i = 0; i < s.length; i++) {
    // s[i] = 'a' => countS['a'] => { 'a' : value}
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }
  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
      }
  }
  return true;
}

const a = "anagram";
const obj = {'a': 2};
const obj2 = {'a': 2};
for (const key in obj) {
  console.log(key);
}
