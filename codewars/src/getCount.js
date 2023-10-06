function getCount(str) {
  let count = 0;

  for (const char of str.split('')) if (/[aieou]/.test(char)) count++;

  return count;
}

