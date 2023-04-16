function lonelyinteger(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result ^= a[i];
    console.log('result', result)
  }
  return result;
}

const a = [1,2,3,4,3,2,1]
lonelyinteger(a)