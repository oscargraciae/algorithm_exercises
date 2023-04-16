function flippingBits(n) {
  const binary = n.toString(2).padStart(32, '0').split('')
  console.log(binary)
  const newbinary = binary.map((item) => item === '1' ? '0' : '1')
  return parseInt(newbinary.join(''), 2)
}

const a = 2147483647
const b = 1
const c = 0

flippingBits(b)