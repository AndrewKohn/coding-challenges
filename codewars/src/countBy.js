function countBy(x, n) {
  let z = [];

  for (let i = 0; i <= n * x; i += x) {
    if (i > 0) z.push(i);
  }

  return z;
}
