const valores = [7.8, 5, 'leo', 3.6]
console.log(valores)

console.log(valores.length) // Irá informar quantos elementos tem no array

valores.push({id:3}, false, null, 'teste')// Adicionar novos elementos no array
console.log(valores)

console.log(valores.pop()) // Irá pegar o ultimo valor do array e irá perder esse valor
delete valores [0] // Irá retirar o valor do elemento
console.log(valores)
console.log(typeof valores)
