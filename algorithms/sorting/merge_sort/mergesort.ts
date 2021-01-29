const merge = (
  arr1: Array<number | string>,
  arr2: Array<number | string>
): Array<number | string> => {
  let results: Array<number | string> = [];
  let i: number = 0;
  let j: number = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};

const mergeSort = (arr: Array<number | string>): Array<number | string> => {
  // if array empty or only has one element... just return the array lol
  if (arr.length <= 1) return arr;
  // divide array
  let mid = Math.floor(arr.length / 2);
  // sort left array recursively
  let left = mergeSort(arr.slice(0, mid));
  // sort right array recursively
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
