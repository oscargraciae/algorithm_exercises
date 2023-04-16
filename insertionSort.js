export default function insertionSort(arr: Array<number>): Array<number> {
  for (let x = 1; x < arr.length; x++) {
    let curr = arr[x]
    let j = x - 1
    
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j]
      j--
    }
    
    arr[j + 1] = curr
  }
  
  console.log(arr)
}

insertionSort([9, 3, 6, 2, 1, 11]);   // [1, 2, 3, 6, 9, 11]
// insertionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]