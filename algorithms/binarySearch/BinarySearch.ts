// Time Complexity
// Worst: O(log n)
// Average: O(log n) number of calls is log of n base 2
// Best: O(1) assuming our value is smack in the middle lol

const binarySearch = (arr: Array<number>, elem: number): number | Error => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(end / 2);
  // this is a splitting search that assumes our array is SORTED!
  while (arr[middle] !== elem && start <= end) {
    // if elem is smaller than our middle value, then set our end pointer to the value right before our previous middle
    if (elem < arr[middle]) end = middle - 1;
    // else if elem is greater than our middle value, then set our start pointer to the next value
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem
    ? middle
    : new Error("Couldn't find item in given array");
};
