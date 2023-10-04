// TODO:

function groupAnagrams(strs: string[]): string[][] {
  const output: string[][] = [];

  for (let current = 0; current < strs.length; current++) {
    const result: string[] = [];
    const currentStr = strs[current].split('').sort().join('');
    if (result.length === 0) result.push(strs[current]);

    for (let next = 0; next < strs.length; next++) {
      const nextStr = strs[next].split('').sort().join('');
      if (next !== current && nextStr === currentStr) {
        result.push(strs[next]);
      }
    }

    output.push(result.sort());
  }

  return output;
}
