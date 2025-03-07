function sumAll(x, y) {
  if (typeof x !== "number" || !Number.isInteger(x) || x < 0) {
    return "x must be a positive integer";
  }

  if (typeof x !== "number" || !Number.isInteger(y) || y < 0) {
    return "y must be a positive integer";
  }

  if (x === y) {
    return x + y;
  }
  let finalSum = 0;

  let start = Math.min(x, y);
  let end = Math.max(x, y);

  for (let i = start; i <= end; i++) {
    finalSum += i;
  }

  return finalSum;
}
