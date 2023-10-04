// NOTE: submitted

function longestConsecutive(nums: number[]): number {
  let num = 1;
  let maxCount = 0;
  const sortedNums = nums.sort((prev: number, next: number) => prev - next);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] !== sortedNums[i + 1])
      if (sortedNums[i] + 1 === sortedNums[i + 1]) {
        num++;
      } else num = 1;

    if (num > maxCount) maxCount = num;
  }

  return maxCount;
}
