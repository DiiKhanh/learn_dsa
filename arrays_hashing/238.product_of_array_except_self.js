/*
238. Product of Array Except Self - Medium
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length
  const result = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i -1]
  }

  let suffix = 1
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix
    suffix *= nums[i]
  }
  return result
};

console.log(productExceptSelf([0, 0]))
/*
Các bước thực hiện:
Duyệt từ trái sang phải (prefix):

Tính tích của tất cả các phần tử trước vị trí i và lưu vào mảng result.
Cụ thể, tại mỗi vị trí i, result[i] sẽ chứa tích của các phần tử trước i.
Duyệt từ phải sang trái (suffix):

Sau khi đã có tích các phần tử trước i ở mỗi vị trí, bây giờ ta cần tính tích của các phần tử sau i.
Sử dụng một biến suffix để tính tích các phần tử từ phải sang trái và nhân nó vào giá trị của result[i] đã tính ở bước trước.
Tại sao cách làm này hoạt động?
Khi tính tích của tất cả các phần tử trước vị trí i (vòng lặp từ trái sang phải), mảng result tại mỗi vị trí i sẽ có giá trị là tích của các phần tử trước i.
Khi tính tích của tất cả các phần tử sau vị trí i (vòng lặp từ phải sang trái), ta chỉ cần nhân tích hậu tố vào result[i] để có được tích của tất cả các phần tử ngoại trừ nums[i].
Hình ảnh hóa giải pháp:
Giả sử nums = [1, 2, 3, 4].

Bước 1 (tính tích prefix):
Khởi tạo result = [1, 1, 1, 1] (ban đầu là 1).
Duyệt từ trái sang phải:
result[1] = result[0] * nums[0] = 1 * 1 = 1
result[2] = result[1] * nums[1] = 1 * 2 = 2
result[3] = result[2] * nums[2] = 2 * 3 = 6
Sau vòng lặp này, result = [1, 1, 2, 6], đại diện cho tích các phần tử trước mỗi i.
Bước 2 (tính tích suffix):
Khởi tạo suffix = 1 (tương ứng với tích không có phần tử nào sau phần tử cuối cùng).
Duyệt từ phải sang trái:
result[3] *= suffix = 6 * 1 = 6, cập nhật suffix = suffix * nums[3] = 1 * 4 = 4.
result[2] *= suffix = 2 * 4 = 8, cập nhật suffix = suffix * nums[2] = 4 * 3 = 12.
result[1] *= suffix = 1 * 12 = 12, cập nhật suffix = suffix * nums[1] = 12 * 2 = 24.
result[0] *= suffix = 1 * 24 = 24.
Sau vòng lặp này, result = [24, 12, 8, 6], là kết quả cuối cùng.
Lợi ích của cách làm này:
Không cần phép chia: Giải pháp này sử dụng các phép nhân và tránh hoàn toàn phép chia, giải quyết yêu cầu của bài toán.
Độ phức tạp thời gian O(n): Cả hai vòng lặp (từ trái sang phải và từ phải sang trái) đều duyệt qua mảng một lần, nên độ phức tạp là O(n).
Độ phức tạp không gian O(1) (ngoại trừ không gian kết quả): Bằng cách chỉ sử dụng một biến suffix và không cần mảng phụ để lưu tích hậu tố, không gian bổ sung sử dụng là không đáng kể.
*/