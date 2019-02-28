const memoizedCounting = _ => {
  let cache = {};
  // use closure
  return name => {
    if (!cache[name]) {
      //setTimeout(() => {
      let result = 0;
      for (let i = 0; i < 100; i++) {
        result += i;
      }
      cache[name] = result;
      console.log('not cached');
    }
    return cache[name];
  };
};

const memoized = memoizedCounting();
console.log('1', memoized(5));
console.log('2', memoized(5));
console.log('3', memoized(5));
