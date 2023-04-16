const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
  const paper = '*'
  const wrappedGifts = gifts.map((item, index) => {
    const wrappedGift = `${paper.repeat(item.length + 2)}\n${paper}${item}${paper}\n${paper.repeat(item.length + 2)}`
    console.log(wrappedGift)
    return wrappedGift
  })
  return wrappedGifts
}

const wrapped = wrapping(gifts)

console.log(wrapped)
