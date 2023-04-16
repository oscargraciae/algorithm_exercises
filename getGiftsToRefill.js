const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

function getGiftsToRefill(a1, a2, a3) {
  const list = [...a1, ...a2, ...a3].reduce((acc, elem) => {
    if (!acc.includes(elem)) {
      acc.push(elem)
    }
    
    return acc
  }, [])
  
  let numOfStoresByGift = 0
  
  const giftsToRefill = list.filter((gift) => {
    if (a1.includes(gift)) {
      numOfStoresByGift++
    }
    if (a2.includes(gift)) {
      numOfStoresByGift++
    }
    if (a3.includes(gift)) {
      numOfStoresByGift++
    }
    
    if (numOfStoresByGift < 2) {
      numOfStoresByGift = 0
      return gift
    }
    
    numOfStoresByGift = 0
    return null
  })
  
  return giftsToRefill
}

getGiftsToRefill(a1, a2, a3)