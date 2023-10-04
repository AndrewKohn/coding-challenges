// NOTE: submitted

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false; // false if not the same length

  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }

  return true; // return true if previous steps don't flag as false
}
