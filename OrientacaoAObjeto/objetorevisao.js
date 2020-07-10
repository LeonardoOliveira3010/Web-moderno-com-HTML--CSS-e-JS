// Coleção dinamica de pares chave, valor

const produto = new Object 
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 250

console.log(produto)
delete produto.preco

console.log(produto)

const carro = {
    modelo: 'Audi',
    valor: 105000,
    proprietario: {
        nome: 'Leonardo',
        idade: 26,
        cpf: 44199137890,
        endereco: {
            rua: 'alameda do horto',
            numero: 454,
            bairro: 'caguassu'
        }
    },

    condutores: [{
        nome: 'Leticia',
        idade: 22
    },
    {
        nome: 'Leonardo',
        idade: 26
    }],
    calculoValorSeguro: function(){
        //...
    }
}