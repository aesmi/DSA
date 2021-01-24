const factorial = (num: number): number => {
  let total: number = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};
