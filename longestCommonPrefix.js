function longestCommonPrefix(strs: string[]): string {
	let res = ''
  strs.sort()
  const firstWord = strs[0]
  const lastWord = strs[strs.length - 1]
  
  for (let x = 0; x < firstWord.length; x++) {
    if (firstWord[x] === lastWord[x]) {
      res += firstWord[x]
    } else {
      break
    }
  }
  
  
  return res
};

console.log(longestCommonPrefix(["flower","flow","flight"]))