
const l1 = "bici coche (balón) bici coche peluche" // -> ✅
const l2 = "(muñeca) consola bici" // ✅


const l3 = "bici coche (balón bici coche" // -> ❌
const l4 = "peluche (bici [coche) bici coche balón" // -> ❌
const l5 = "(peluche {) bici" // -> ❌
const l6 = "() bici" // ❌
const l7 = "(()) bici" 
const l8 = "(a() bici (a)"
const l9 = ")bici( casa play"

const checkLetter = (letter) => {
	const letters = [...letter]
  // console.log('is empty', )
  const totalOpen = letters.filter((item) => item === '(').length
  const totalClose = letters.filter(item => item === ')').length
  // const isEmpty = letter.replace('()',"").trim().length;
  const hasKey =  letter.includes('{')
  const hasBraket =  letter.includes('[')
  
  if (totalOpen !== totalClose || letter.includes('()') || hasKey || hasBraket || letter[0] === ')') {
    return false
  }
  
  return true
}

checkLetter(l1)
checkLetter(l2)
checkLetter(l3)
checkLetter(l4)
checkLetter(l5)
checkLetter(l6)
checkLetter(l7)
checkLetter(l8)
checkLetter(l9)


