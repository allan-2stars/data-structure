// not efficient version

const fib = number => {
  if (number < 2) {
    return number;
  }
  return fib(number - 1) + fib(number - 2);
};

// use cache to improve
const fibCached = _ => {
  let cache = {};
  return function fib(number) {
    if (number in cache) {
      return cache[number];
    } else {
      if (number < 2) {
        return number;
      } else {
        cache[number] = fib(number - 1) + fib(number - 2);
        return cache[number];
      }
    }
  };
};

console.log(fibCached()(100));
console.log(fib(2));
