const fabricantes = ['mercedes', 'bmw', 'ford', 'fiat']

function imprimi(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimi)