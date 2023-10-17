function perimeter(n) {
  let result = 0, n1 = 0, n2 = 1;

  for (let i = 1; i <= n + 2; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
  }

  return result * 4 - 4;
}
