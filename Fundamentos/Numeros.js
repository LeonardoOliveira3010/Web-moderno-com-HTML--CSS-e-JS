const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //retorna se o valor é true ou false
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.557
const avaliacao2 = 6.246768

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Quantas casa decimais tu quer
console.log(media.toString(2)) // tranforma o valor float para valor binario
console.log(typeof media)