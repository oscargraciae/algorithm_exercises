const arr = [ -4, 3, -9, 0, 4, 1 ]

// const newArray = arr.reduce(() => {}, 0)

// function plusMinus() {
//   let positive = 0
//   let negative = 0
//   let zero = 0

//   for (let item of arr) {
//     if (item > 0) {
//       positive++
//     } else if (item === 0) {
//       zero++
//     } else if(item < 0) {
//       negative++
//     }
//   }

//   return [
//     (positive / arr.length).toFixed(6),
//     (negative / arr.length).toFixed(6),
//     (zero / arr.length).toFixed(6),
//   ]
// }

function plusMinus(array) {
  const [positive, negative, zero] = array.reduce((acc, val) => {
    if (val > 0) {
      acc[0]++
    } else if (val < 0) {
      acc[1]++
    } else {
      acc[2]++
    }
    
    return acc
  }, [0, 0, 0])

  return [
    (positive / arr.length).toFixed(6),
    (negative / arr.length).toFixed(6),
    (zero / arr.length).toFixed(6),
  ]
}

console.log(plusMinus(arr))