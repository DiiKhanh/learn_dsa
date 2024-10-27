/*
84. Largest Rectangle in Histogram - Difficulty: Hard
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:
Input: heights = [2,4]
Output: 4

Constraints:
1 <= heights.length <= 105
0 <= heights[i] <= 104
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // ý tưởng: Duy trì stack theo dõi các cột tăng dần, khi gặp cột thấp hơn thì ta tính diện tích trước đó
  let maxArea = 0
  // pair: (index, height)
  const stack = []
  for (let i = 0; i < heights.length; i++) {
    // lưu giữ index cột có chiều cao thấp bởi vì nó có thể kéo dài khi gặp 1 cột cao hơn
    let start = i
    // Lặp cho đến khi không còn chiều cao nào trong stack lớn hơn
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop()
      maxArea = Math.max(maxArea, height * (i - index))
      start = index
    }
    stack.push([start, heights[i]])
  }
  // vẫn có thể còn phần tử trong stack nên duyệt tiếp
  for (const [index, height] of stack) {
    maxArea = Math.max(maxArea, height * (heights.length - index))
  }
  return maxArea
};

console.log(largestRectangleArea([2,1,5,6,2,3]))