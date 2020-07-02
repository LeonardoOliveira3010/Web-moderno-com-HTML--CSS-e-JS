let isaAtivo = false
console.log(isaAtivo)

isaAtivo = true
console.log(isaAtivo)

isaAtivo = 1
console.log(! isaAtivo) /*Para transformar um valor em true ou false pode usar a negação !, 
se colocar duas negações !! volta ao original*/

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isaAtivo = true))

console.log('os falsos')
console.log(!!0)
console.log(!!" ")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isaAtivo =NaN))

console.log('pra finalizar')
console.log(!!(''|| null || 0 || ' '))

let nome = 'Leonardo'
console.log(nome || 'desconhecido') // O simbolo || quer dizer OU
