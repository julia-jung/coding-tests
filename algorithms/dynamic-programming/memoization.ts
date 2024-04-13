function memoizedAddTo80() {
  let cache = {};

  // capture cache using Closure
  return function (n: number): number {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(5));
