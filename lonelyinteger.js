function lonelyinteger(a) {
  const hash = {}
  for (let x = 0; x < a.length; x++) {
    let item  = a[x]
    if (hash[item]) {
      hash[item] += 1
    } else {
      hash[item] = 1
    }
  }
  
  for (let item in hash) {
    if (hash[item] === 1) {
      return item
    }
  
}

const a = [1,2,3,4,3,2,1]

lonelyinteger(a)