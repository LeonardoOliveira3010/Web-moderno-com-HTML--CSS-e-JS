// Criar função literal
function fun1() { }

// Armazenar uma função em uma variavel
const fun2 = function() { }

// Armazenar dentro de um Array
const array = [function(a, b) {return a + b }, fun1, fun2]
console.log(array[0](2, 8))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

// Passar funçõ para parametro de função
function run (fun){
    fun()
}
run(function(){console.log('Executando...')})

// Uma função pode retornaar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 7)(1)

