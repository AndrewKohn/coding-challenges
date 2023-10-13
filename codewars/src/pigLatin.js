function pigIt(str) {
  const arr = str.split(' ');
  const pigLatin = [];
  const regex = /[?!.]/;

  for (const chars of arr) {
    !regex.test(chars[0])
      ? pigLatin.push(
          chars.split('').splice(1, chars.length).join('') + `${chars[0]}ay`
        )
      : pigLatin.push(chars);
  }

  return pigLatin.join(' ');
}
