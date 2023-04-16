// const input = [1, 2, 3, 4, 5]
const input = [7, 69, 2, 221, 8974]

function miniMaxSum(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0)
  const max = sum - Math.min(...arr)
  const min = sum - Math.max(...arr)
  console.log(min, max)
}

miniMaxSum(input)