function isValid(s: string): boolean {
  const hash: any = { '(' : ')', '[': ']', '{': '}' }
  const temp: string[] = []
  
  if (s.length % 2) return false
  
	for (let x = 0; x < s.length; x++) {
    if (hash[s[x]] !== undefined) {
      temp.push(s[x])
      if (x === s.length - 1) return false
    } else if (hash[temp[temp.length - 1]] !== s[x] || temp.length === 0) {
      return false
    } else {
      temp.pop()
    }
  }
  
  if (temp.length > 0) return false
  
  return true
};

// console.log(isValid('()[]{}'))
// console.log(isValid('()'))
// console.log(isValid('(]'))
// console.log(isValid("{[]}"))
// console.log(isValid("(("))
console.log(isValid("([]"))
console.log(isValid("[[[]"))