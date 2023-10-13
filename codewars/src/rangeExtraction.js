function solution(list) {
  let arr = [];
  const range = [];

  for (const index in list) {
    const i = Number(index);

    if (list[i + 1] - 1 === list[i]) {
      arr.push(list[i]);
    }

    if (list[i + 1] - 1 !== list[i]) {
      if (arr.length >= 2) {
        arr.push(list[i]);
        range.push(`${arr[0]}-${arr[arr.length - 1]}`);
        arr = [];
      } else {
        if (arr.length === 1) {
          range.push(`${arr[0]}`);
          arr = [];
        }
        range.push(`${list[i]}`);
      }
    }
  }

  return range.join(',');
}
