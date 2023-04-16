var topKFrequent = function(nums, k) {
  const hash = {}
  
  for (let item of nums) {
    if (hash[item] !== undefined) {
      hash[item]++
    } else {
      hash[item] = 1
    }
  }
  
  const sortedNums = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  return sortedNums.slice(0, k)
};

topKFrequent([1,1,1,2,2,3,3,3], 2)