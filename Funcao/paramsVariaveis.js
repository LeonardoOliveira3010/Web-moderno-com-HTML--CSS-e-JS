function soma(){
let soma = 0
for(i in arguments){ // arguments é um array
    soma += arguments[i]

}
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.4, 4.7, 9.7, 0.1))
console.log(1, 4, 'teste')