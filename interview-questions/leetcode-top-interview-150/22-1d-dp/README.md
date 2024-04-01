## Recursion

is a concept (not a data structure nor a algorithm)

### Fibonacchi sequence

is the simplest example of recursion

```
function Fib(n: number) {
	if (n <= 0) return 0;
	else if (n === 1) return 1;
	else return Fib(n - 1) + Fib(n - 2);
}

Fib(4); // 3
//	= Fib(3) + Fib(2);
//	= (Fib(2) + Fib(1)) + (Fib(1) + Fib(0));
//	= ((Fib(1) + Fib(0) + 1) + (1 + 0);
// 	= ((1 + 0) + 1) + (1 + 0);
```

- Recursion can be very inefficient because it repeat the same calculation for same input
  - This can be fixed with use of **Memoization**
- Anything that is implemented recursively can be implemented iteratively
  - Whether to use Recursion or Iteration is depends on the problem

### Recursion with memoization example

```
// Given coins array and money, find how many ways the money can be changed with coins
function findNumberOfWays(coins: number[], money: number) {
	makeChange(coins, money, 0, new Map())
}

function makeChange(coins: number[], money: number, index: number, memo: Map<string, number>) {
	if (money === 0) return 1;
	if (index >= coins.length) return 0;

	// return momoized value
	const key = money + '-' + index;
	if (memo.has(key)) {
		return memo.get(key);
	}

	let changedAmount = 0;
	let ways = 0;
	while (changedAmount <= money) {
		ways += makeChange(coins, money - changedAmount, index + 1, memo);
		changedAmount += coins[index];
	}

	// memoization
	memo.set(key, ways);

	return ways;
}
```
