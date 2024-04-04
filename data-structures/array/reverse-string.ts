/**
 * Create a function that reverses a string:
 * 'Hi My name is Andrei' -> 'ierdnA si eman yM iH'
 */
console.log(reverse('Hi My name is Andrei'));

// Using JS built-in method -> Time complexity: O(n) / Space complexity: O(1)
function reverse(str: string): string {
  // check input
  if (str.length < 2) return str;

  return str.split('').reverse().join('');
}

// Using extra space -> Time complexity: O(n) / Space complexity: O(1)
function reverse2(str: string): string {
  // check input
  if (str.length < 2) return str;

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
