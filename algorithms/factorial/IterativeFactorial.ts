const factorial = (num: number): number => {
  // start with one
  let total: number = 1;
  // multiply by an decrementing amount until we hit one
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};
