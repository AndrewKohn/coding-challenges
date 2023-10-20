function countPositivesSumNegatives(input) {
  const result = [0, 0];

  if (input === null || input === undefined || input.length === 0) return [];

  input.map(num => (num > 0 ? result[0]++ : (result[1] += num)));
  return result;
}
