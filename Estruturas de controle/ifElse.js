const imprimiResultado = function(nota) {
    if(nota >= 7){
        console.log('APROVADO')
    } else {
        console.log('REPROVADO')
    }
}

imprimiResultado(9)
imprimiResultado(6)
imprimiResultado('epa') // cuidado
