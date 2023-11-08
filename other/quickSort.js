const array = [4, 2, 6, 1, 7, 3, 5, 4, -1, 14, 12, -11, 2, 6, -5, 6];

function quickSort(arr) {
  if (arr.length <= 1) return arr; // Return array if it can't be sorted

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]); // Same numbers will be pushed to the right array
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));
