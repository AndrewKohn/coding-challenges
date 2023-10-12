function findOutlier(integers) {
  const evenNums = integers.filter(num => num % 2 === 0);
  const oddNums = integers.filter(num => num % 2 !== 0);

  return evenNums.length < oddNums.length ? evenNums[0] : oddNums[0];
}
