// NOTE: submitted

function twoSum(nums: number[], target: number): number[] {
  let firstIndex = -1;
  let secondIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (firstIndex === -1 || secondIndex === -1)
      nums.map((num: number, index: number) => {
        if (index !== i && num + nums[i] === target) {
          firstIndex = i;
          secondIndex = index;
        }
      });
  }

  return [firstIndex, secondIndex];
}
