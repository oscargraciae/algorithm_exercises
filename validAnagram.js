function isAnagram(s: string, t: string): boolean {
  const res1 = s.split('').sort().join('');
  const res2 = t.split('').sort().join('');

  return res1 === res2;
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))