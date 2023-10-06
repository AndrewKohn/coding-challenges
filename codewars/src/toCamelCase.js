function toCamelCase(str) {
  const splitStr = str.split(/[-:_]/);

  const camelCaseStr = splitStr
    .map((string, index) => {
      return index === 0
        ? string
        : string.split('')[0].toUpperCase() +
            string.split('').splice(1, string.length).join('');
    })
    .join('');

  return camelCaseStr;
}
