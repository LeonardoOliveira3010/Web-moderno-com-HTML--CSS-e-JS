let valor  // Não inicializada UNDEFINED
console.log(valor)

valor = null // Null siginifica que se vc tem uma variavel ela não está apontando em nenhum endereco de memoria
console.log(valor)
//console.log(valor.toString()) // Irá dar um erro

const prod = {}
console.log(prod.preco)

prod.preco = 3.50

console.log(prod.preco)

prod.preco = undefined  // evitar atribuir undefined

console.log(!!prod.preco)
//delete prod.preco é a forma correta de retirar um atributo 
console.log(prod)

prod.preco = null // Sem preço
console.log(!!prod.preco) // Como não existe valor sobre o preço (null) nós o consideramos false !!prod.preco
console.log(prod)