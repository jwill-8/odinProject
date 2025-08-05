function sumToIterative(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumToIterative(3));
console.log(sumToIterative(4));
console.log(sumToIterative(100));

function sumToRecursive(n) {
  return n === 1 ? n : n + sumToRecursive(n - 1);
}

console.log(sumToRecursive(3));
console.log(sumToRecursive(4));
console.log(sumToRecursive(100));

function recursiveFactorial(n) {
  if (n === 1) return n;

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(3));
console.log(recursiveFactorial(5));

function fib(n) {
  if ((n === 1) | (n === 0)) return n;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListRecursive(list) {
  console.log(list.value);
  if (list.next) {
    printListRecursive(list.next);
  }
}

//printListRecursive(list);

function printListRecursiveBackwards(list) {
  if (list.next) {
    printListRecursiveBackwards(list.next);
  }
  console.log(list.value);
}

printListRecursiveBackwards(list);
