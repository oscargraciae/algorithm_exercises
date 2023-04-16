function diagonalDifference(arr) {
  let sumLeftToRigth = 0
  let sumRigthToLeft = 0
  
  for (let x = 0; x < arr.length; x++) {
    sumLeftToRigth += parseInt(arr[x][x])
    sumRigthToLeft += arr[x][arr.length - 1 - x]
  }
  return Math.abs(sumLeftToRigth - sumRigthToLeft)
}

// [ 11, 2, 4 ]
// [ 4, 5, 6 ]
// [ 10, 8, -12 ]

const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
diagonalDifference(arr)