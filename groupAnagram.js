interface Hash<T> {
  [key: string]: T;
}

function groupAnagrams(strs: string[]): string[][] {
  let hash: Hash<string[]> = {}
	for (let item of strs) {
    const newS: string = item.split('').sort().join('')
    if (hash[newS] !== undefined) {
      hash[newS] = [...hash[newS], item]
    } else {
      hash[newS] = [item]
    }
  }
  
  return Object.values(hash)
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])


// function groupAnagrams(strs: string[]): string[][] {
//   const hash = {}
// 	for (let x = 0; x < strs.length; x++) {
//     const newS = strs[x].split('').sort().join('')
//     if (hash[newS] !== undefined) {
//       hash[newS] = [...hash[newS], strs[x]]
//     } else {
//       hash[newS] = [strs[x]]
//     }
//   }
  
//   return Object.values(hash)
// };