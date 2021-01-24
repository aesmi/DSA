// Time Complexity
// Worst: O(n^2)
// Average: O(n^2)
// Best: O(n)
// Space Complexity
// O(1)

const bubbleSort = (arr: Array<any>): Array<any> => {
  // set noswaps boolean to determine if we need to continue swapping or not
  let noSwaps: boolean;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      // if elem is bigger than next elem then swap. swapping is O(1)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
