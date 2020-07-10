// Passar o valor para o parametro dentro da função factory

function criarProduto(name, price){
    return {
        name,
        price,
        desconto: 0.1
    }
}

console.log(criarProduto('teste', 50))