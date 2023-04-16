function pangrams(s) {
  for (let x = 97; x <= 122; x++) {
    const letter = String.fromCharCode(x)
    if (!s.toLowerCase().includes(letter)) {
      return 'noy pangram'
    }
  }
  
  return 'pangram'
}

pangrams('We promptly judged antique ivory buckles for the next prize')