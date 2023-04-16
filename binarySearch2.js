function binarySearch (numbers, target) {
  let left = 0
  let rigth = numbers.length - 1
  
  while (left <= rigth) {
    let mid = Math.round(left + ((rigth - left) / 2))
    console.log('middle', mid)
    if (target === numbers[mid]) {
      return mid
    } else if (target < numbers[mid]) {
      rigth = mid - 1
    } else {
      left = mid + 1
    }
  }
  
  return -1
}

binarySearch([1,2,3,4,5,6,7,8,9], 5)