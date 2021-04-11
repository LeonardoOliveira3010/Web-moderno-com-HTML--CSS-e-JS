const pai = {
    nome:'Leonardo',
    corCabelo: 'Preto'
}

const filha01 = Object.create(pai) // Quando criado o Object.create já é definido no parametro o objeto pai
filha01.nome = 'Sofia'

console.log(filha01.corCabelo)

const filha02 = Object.create(pai, {
    nome: { value: 'Bia', writable:false, enumerable: true }
})

console.log(filha02.nome)
filha02.nome = "Bea"

for(let key in filha02){
    filha02.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}