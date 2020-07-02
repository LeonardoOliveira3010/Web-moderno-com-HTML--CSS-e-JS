function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min // É algo randomico, é gerado diversos valores dentro da multiplicação
    return Math.floor(valor)

 }

const obj = (rand({max: 50, min: 45}))
console.log(rand(obj))

// function alter({min = 0, max= 100}) {
//     const n = Math.random() * (max-min) + min
//     return Math.floor(n)
// }

// const obj = (alter({max: 10, min: 15}))
// console.log(alter(obj))