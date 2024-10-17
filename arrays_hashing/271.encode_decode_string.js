/*
String Encode and Decode
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Example 2:
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]

Constraints:
0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

/**
  * @param {string[]} strs
  * @returns {string}
*/
var encode =(strs) => {
  // Thêm số lượng 1 từ + 1 kí tự đặc biệt để ghi nhớ
  let result = ''
  for (let s of strs) {
    result += `${s.length}#${s}`
  }
  return result
}
/**
 * @param {string} str
 * @returns {string[]}
 */
var decode = (str) => {
  let result = []
  let i = 0
  while (i < str.length) {
    let j = i
    while (str[j] !== '#') {
      j++;
    }
    // Xác định được vị trí có kí tự đặc biệt: i bắt đầu, j đặc biệt
    // cắt từ số đến kí tự đặc biệt. Lấy ra được độ dài của chuỗi đó '23#' => 23
    let length = parseInt(str.substring(i, j), 10)
    i = j + 1 // bắt đầu lấy phần cần decode
    j = i + length // kết thúc của từ decode
    result.push(str.substring(i, j))
    i = j
  }
  return result
}

console.log(encode(["neet","code","love","you"]))
console.log(decode('4#neet4#code4#love3#you'))