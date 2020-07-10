// Factory é uma função que retorna um objeto
const prod1 = {
    name: 'Teste',
    price: 45,

}

// Função Factory
function criarPessoa(){
    return{
        name: 'Leonardo',
        lastName: 'Santos',
        age: 26,

    }
}

console.log(criarPessoa())