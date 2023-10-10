function solution(str, ending) {
  const reverseEnding = ending.split('').reverse();
  const reverseSplicedStr = str
    .split('')
    .reverse()
    .splice(0, reverseEnding.length);

  return reverseSplicedStr.join('') === reverseEnding.join('');
}
