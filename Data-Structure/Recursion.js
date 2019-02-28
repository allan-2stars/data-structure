function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  if (number === 2) {
    return 2;
  }
  const result = number * findFactorialRecursive(number - 1);
  number--;
  console.log(result);
  return result;
}

findFactorialRecursive(50);
