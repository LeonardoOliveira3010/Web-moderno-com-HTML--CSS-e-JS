const notas = [1.5, 9.8, 6.5, 3.5,4.2]
for(let i in notas){ // No caso do for in a busca pelo resultado se dá pelo seu indice, não o seu valor
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 25,
    peso: 79.8
}
for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}