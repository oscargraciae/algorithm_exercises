function countBits(n) {
  const ans = []
  for (let x = 0; x <= n; x++) {
    const bin = x.toString(2)
    ans.push(bin.replaceAll('0', '').length)
  }
  
  const ans2 = Array(n+1).fill(0).map((item, i) => i.toString(2).replaceAll('0','').length)
  
  return ans
}

countBits(5)