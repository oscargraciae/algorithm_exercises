// const nums = [1,1,2]
const nums = [0,0,1,1,1,2,2,3,3,4]


/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let l = 1
  
  for (let x = 1; x < nums.length; x++) {
    if (nums[x] !== nums[x - 1]) {
      nums[l] = nums[x]
      l++
    }
  }
  
  return l
};

removeDuplicates(nums)