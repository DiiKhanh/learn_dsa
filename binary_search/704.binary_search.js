/*
704. Binary Search - Difficulty: Easy
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // let l = 0, r = nums.length - 1
  // while (l <= r) {
  //   let m = Math.floor((l + r)/2)
  //   if (nums[m] < target) {
  //     l++
  //   } else if (nums[m] > target) {
  //     r--
  //   } else {
  //     return m
  //   }
  // }
  // return -1
  //2. Tối ưu - Liên quan đến điểm m
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2)
    if (nums[m] > target) {
      r = m - 1
    } else if (nums[m] < target) {
      l = m + 1
    } else {
      return m
    }
  }
  return -1
};