// Novo recuros introduzido no ECMA 2015

const pessoa = {
    nome: 'Leonardo',
    idade: 25,
    peso: 80,
    altura: 1.83,
    logradouro: {
        endereco: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa //Essa chave representa o operador de desestruturação
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumurado = true} = pessoa 
console.log(sobrenome, bemHumurado)

const {logradouro: {endereco, numero} } = pessoa
console.log( endereco, numero)