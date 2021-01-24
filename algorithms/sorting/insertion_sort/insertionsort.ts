const insertionSort = (arr: Array<number>): Array<number> => {
  let min: number;
  let currentVal: any;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[i + 1] = currentVal;
  }
  return arr;
};
