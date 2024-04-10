function reverseStringIterative(str: string): string {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseStringRecursive(str: string): string {
  if (str.length === 1) return str[0];
  return reverseStringRecursive(str.substring(1)) + str[0];
}

console.log(reverseStringIterative('yoyo master'));
console.log(reverseStringRecursive('yoyo master'));
