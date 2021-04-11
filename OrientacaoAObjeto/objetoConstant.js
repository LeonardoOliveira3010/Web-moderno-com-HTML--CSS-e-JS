// Pessoa aponta para o endereço de memoria
const pessoa = {nome: "Pedro"}

pessoa.nome = 'Ana'
console.log(pessoa)



Object.freeze(pessoa) // O metodo freeze congela o objeto, assim sendo não poderá ser alterado o valor do objeto pessoa.nome
pessoa.nome = 'Leonardo'

console.log(pessoa)