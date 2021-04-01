const selectionSort = (
  arr: Array<number> | Array<string>
): Array<number> | Array<string> => {
  // swap helper function using destructuring
  const swap = (
    arr: Array<number> | Array<string>,
    idx1: number,
    idx2: number
  ) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  // iterate through array
  for (let i: number = 0; i < arr.length; i++) {
    let lowest: number = i;
    // j is the second pointer
    // basically we are using two pointers
    for (let j: number = i + 1; j < arr.length; j++) {
      // checks to see if value is lower, if so set lowest pointer to new index
      if (arr[lowest] > arr[j]) lowest = j;
    }
    // if i is not lowest swap it to lowest value
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
};
