function findAverage(array) {
  return array.length !== 0
    ? array.reduce((prev, next) => prev + next, 0) / array.length
    : 0;
}
