function twoSum(nums, target) {
  const hash = {};
  for (let x = 0; x < nums.length; x++) {
    const numReq = target - nums[x];
    if (hash[numReq] !== undefined) {
      return [x, hash[numReq]];
    }

    hash[nums[x]] = x;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
