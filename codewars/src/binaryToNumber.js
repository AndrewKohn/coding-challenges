const binaryArrayToNumber = arr => {
  const toNumberArr = arr.map((num, i) =>
    num === 1 ? 2 ** (arr.length - i) / 2 : 0
  );
  const result = toNumberArr.reduce((total, current) => total + current);
  return result;
};
