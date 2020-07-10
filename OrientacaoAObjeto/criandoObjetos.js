// Usando a notaçao literal
const obj1 = {}
console.log(obj1)

//Object em js função construtora
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function produto(nome, preco, desc){
    this.nome = nome,
    this.getPrecoComDesconto = () => {
        
    }
}