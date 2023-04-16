var groupAnagrams = function(strs) {
  const hash = {}
  for (let item of strs) {
    const s = item.split('').sort().join('')
    
    if (hash[s] !== undefined) {
      hash[s] = [...hash[s], item]
    } else {
      hash[s] = [item]
    }
  }
  
  return Object.values(hash)
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])