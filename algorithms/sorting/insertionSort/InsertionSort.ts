const insertionSort = (arr: Array<number | string>): Array<number | string> => {
  // our current val
  let currentVal;
  // traverse our array
  for (let i: number = 1; i < arr.length; i++) {
    // set our current val to current pointer
    currentVal = arr[i];
    // if our our previous val
    for (var j = i - 1; j >= 0 && arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};
