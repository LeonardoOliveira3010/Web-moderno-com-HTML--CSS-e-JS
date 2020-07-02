function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('APROVADO ' + nota)
    }
}

soBoaNoticia(6)

function seforVerdadeEuFalo(valor) {
    if(valor){
        console.log("É verdade " + valor)
    }
}

seforVerdadeEuFalo()
seforVerdadeEuFalo(null)
seforVerdadeEuFalo(undefined)
seforVerdadeEuFalo(NaN)
seforVerdadeEuFalo('')
seforVerdadeEuFalo(0)
seforVerdadeEuFalo(-1)
seforVerdadeEuFalo(' ')
seforVerdadeEuFalo('?')
seforVerdadeEuFalo([])
seforVerdadeEuFalo([1,2,3])
seforVerdadeEuFalo({})