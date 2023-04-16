const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) { 
  const giftWeigth = packOfGifts.reduce((acc, item) => acc + item.length, 0)
  const reindeersWeigth = reindeers.reduce((acc, item) => acc + (item.length * 2))
  console.log("PESO DE REGALOS", giftWeigth)
  console.log("PESO DE RENOS", reindeersWeigth)
  return 0
}

distributeGifts(packOfGifts, reindeers)