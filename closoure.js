const parentFunction = (person) => {
  let coins = 5
  
  return () => {
    coins -= 1
    if (coins > 0) {
      console.log(person, 'quedan', coins)
    } else {
      console.log('Ya no tengo monedas')
    }
  }
}

const oscar = parentFunction('Oscar')
const juan = parentFunction('Juan')

oscar()
oscar()
oscar()


juan()
juan()