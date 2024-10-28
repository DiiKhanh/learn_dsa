/*
15. 3Sum - Difficulty: Medium
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  //1. Brute Force -> Time: O(n^3)
  //2. Hash Map -> Time: O(n^2)
  //3. Two Pointers
  // sắp xếp tăng dần để dễ dàng tìm
  // sum = nums[i] + nums[l] + nums[r]
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length; i++) {
    // tổng 3 số dương luôn > 0 => nếu nums[i] > 0 suy ra 2 phần tử còn lại cũng > 0 do mảng đã được sắp xếp nên thoát khỏi loop
    if (nums[i] > 0) break
    // loại bỏ bộ 3 trùng lặp -> chỉ lấy 1 bộ 3 đã có
    if (i > 0 && nums[i] === nums[i-1]) continue
    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      // nếu sum > 0 => phần tử bên phải đang lớn cần giảm
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        res.push([nums[i], nums[l], nums[r]])
        l++
        r--
        // loại bỏ trung lặp tạo ra dãy số đã tồn tại
        while (l < r && nums[l] === nums[l-1]) {
          l++
        }
      }
    }

  }
  return res
};