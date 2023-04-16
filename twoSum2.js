var twoSum = function(nums, target) {
  const hash = {}
  for (let x = 0; x < nums.length; x++) {
    let diff = target - nums[x]
    
    if (hash[diff] !== undefined) {
      return [x, hash[diff]]
    } else {
      hash[nums[x]] = x
    }
  }
  
  console.log(hash)
};

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)
twoSum([3,2,3], 6) // [0,2]