// Usano a notação literal
const obj1 = {}
    console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object())    
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome,
    this.getPrecoComDesconto = () => {return preco * (1- desc)}
}

const p1 = new Produto('caneta', 2.99, 0.10)

const p2 = new Produto('notebook', 4999.99, 0.20)

console.log(p1.getPrecoComDesconto())
console.log(p2  .getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salario, faltas){
   return {
       nome,
       salario,
       faltas,
       getSalario(){
           return (salario / 30) * (30 - faltas)
       }
   }
}

const f1 = criarFuncionario('Joao', 5000, 5)
const f2 = criarFuncionario('Leonardo', 1950, 2)
const f3 = criarFuncionario('Leticia', 2100, 3)
console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"INFO": "Sou um JSON"}') 
console.log(fromJSON.info)