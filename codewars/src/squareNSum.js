function squareSum(numbers) {
  return numbers.map(num => num * num).reduce((total, num) => total + num, 0);
}
