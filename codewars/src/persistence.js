function persistence(num) {
  const toNumArr = number =>
    [...number.toString()].map(number => Number(number));
  let nums = toNumArr(num);
  let result = -9999;
  let count = 0;

  while (true) {
    if (result.toString().length === 1) return count;
    if (nums.length === 1) return 0;

    result = 1;

    for (let i = 0; i < nums.length; i++) {
      result *= nums[i];
    }

    count++;
    nums = toNumArr(result);
  }
}
