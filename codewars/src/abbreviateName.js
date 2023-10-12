function abbrevName(name) {
  return [
    name.split(' ')[0].split('')[0].toUpperCase(),
    name.split(' ')[1].split('')[0].toUpperCase(),
  ].join('.');
}
