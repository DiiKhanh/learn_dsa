const containsDuplicate = (nums) => {
  /*
  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
  1. Brute force
  2. Sorting
  3. Hash Set
  4. Hash Set Length
  */
  return new Set(nums).size !== nums.length;
}