Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimiResultado = function(nota) {
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 8.99)){ // Dessa forma podemos encadear varias condições, uma atrás da outra
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }
}

imprimiResultado(2)
imprimiResultado(5)
imprimiResultado(8.5)
imprimiResultado(10)