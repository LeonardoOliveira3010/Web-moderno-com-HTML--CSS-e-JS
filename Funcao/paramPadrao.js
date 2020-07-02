// Estrategia 1 para gerar  valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(2), soma1(3, 7), soma1(5, 4, 11) )

// Estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // Se o valor a for diferente de undefined, irá receber o valor 1
    b = 1 in arguments ? b : 1 // O indice dentro do arguments do b é 1
    c = isNaN(c) ? 1 : c // Se o valor for diferente de um número, irá receber 1
    return a + b + c
}
console.log(soma2(), soma2(2), soma2(3, 7), soma2(5, 4, 11) )

// valor padrão es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(2), soma3(3, 7), soma3(5, 4, 11) )