// Time Complexity
// Worst: O(log n)
// Average: O(log n) number of calls is log of n base 2
// Best: O(1) assuming our value is smack in the middle lol

const binarySearch = (arr: Array<number>, elem: number): number | Error => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(end / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem
    ? middle
    : new Error("Couldn't find item in given array");
};
