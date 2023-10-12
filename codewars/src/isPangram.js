function isPangram(string) {
  const regex = /[a-z]/;
  const letters = new Set();

  for (const char of string.toLowerCase()) {
    if (regex.test(char)) letters.add(char);
  }

  return letters.size === 26 ? true : false;
}
