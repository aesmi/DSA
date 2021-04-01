const insertionSort = (arr: Array<number | string>): Array<number | string> => {
  // our current val
  let currentVal: any;
  // traverse our array
  for (let i = 1; i < arr.length; i++) {
    // set our current val to current pointer
    currentVal = arr[i];
    // if our our previous val
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[i + 1] = currentVal;
  }
  return arr;
};
