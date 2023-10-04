// TODO:

function threeSum(nums: number[]) /*: number[][]*/ {
  let output: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          // console.log(i, j, k, `[${nums[i]}, ${nums[j]}, ${nums[k]}]`);

          output.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  return output;
}
