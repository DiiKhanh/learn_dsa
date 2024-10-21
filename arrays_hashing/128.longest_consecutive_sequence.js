/*
128. Longest Consecutive Sequence - Dif: Medium
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  //1. Brute Force
  // let newSet = new Set(nums)
  // let res = 0
  // for (let num of nums) {
  //   let streak = 0, curr = num
  //   while(newSet.has(curr)) {
  //     streak++
  //     curr++
  //   }
  //   res = Math.max(res, streak)
  // }
  // return res
  //2. Hash Set
  const store = new Set(nums)
  let longest = 0

  for (let item of store) {
    // đảm bảo item là phần tử đầu tiên bắt đầu
    // nếu item không phải là phần tử đầu tiên => bỏ qua cho đến khi gặp phần tử đầu tiên mới có thể tính được độ dài
    if (!store.has(item - 1)) {
      let length = 1
      while (store.has(item + length)) {
        length ++
      }
      longest = Math.max(longest, length)
    }
  }
  return longest
};

console.log(longestConsecutive([0,3,7,2,5,9,4,6,0,1]))