function duplicateCount(text) {
  const str = text.toLowerCase().split('');
  const duplicateArr = str.filter((char, index) => {
    for (let i = 0; i < str.length; i++) {
      if (i !== index && str[i] === char) return char;
    }
  });

  return new Set(duplicateArr).size;
}

console.log(duplicateCount('Blahhhhaab'));
