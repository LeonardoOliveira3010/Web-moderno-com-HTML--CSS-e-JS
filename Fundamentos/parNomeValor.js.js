const saudacao = 'Opa' // Contexto léxico 1 é o local do qual a sua variavel foi definida fisicamente no código


function exec(){
    const saudacao = 'Olá a todos'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80.5,
    endereco: {
        logradouro: 'Casimiro de abreu' ,
        numero: 46,
        cep: 18035261,
    }
}
  
console.log(saudacao)
console.log(exec())
console.log(cliente)