function findUniq(arr) {
  const firstIndex = arr[0];
  for (const num of arr) {
    if (num !== firstIndex) num;
  }
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));
