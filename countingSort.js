function countingSort(arr) {
  const max = Math.max(...arr);
  const freq = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
  }

  console.log(freq)
  const sortedArr = [];

  for (let i = 0; i < freq.length; i++) {
    for (let j = 0; j < freq[i]; j++) {
      console.log(i)
      sortedArr.push(i);
    }
  }

  return sortedArr;
}

countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9])