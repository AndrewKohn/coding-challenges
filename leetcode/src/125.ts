// NOTE: submitted

function isPalindrome(s: string): boolean {
  const str = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const strReversed = str.split('').reverse().join('');

  return str === strReversed;
}
