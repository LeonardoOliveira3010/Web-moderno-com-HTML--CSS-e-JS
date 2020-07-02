const notas = [7.2, 5.5, 9.7, 1.5, 9.0, 8.3, 6.4, 2.0]

// sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback
notasAltas = notas.filter(function(nota){ // É uma função que irá filtrar os elementos de um array em cima de um determinado critério
    return nota > 7
}) 
console.log(notasAltas)

// com callback utilizando o arrow
notasAltas = notas.filter(notas => notas > 7)
console.log(notasAltas)




