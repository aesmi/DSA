// Best O(1) assuming the value we are looking for is the first value lol
// Worst O(n) assuming we have to traverse the list
// Average O(n) seriously... how lucky would we have to be get an array where the value is the first item in our array?

const linearSearch = (arr: Array<number>, val: number) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
