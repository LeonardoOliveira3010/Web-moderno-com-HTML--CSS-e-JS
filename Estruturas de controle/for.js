let contador = 1 // Contador irá controlar o laço
while(contador <= 10){ // A expressão que irá continuar ou não
    console.log(`Contador: ${contador}`)
    contador++ // incremento
}

for(let i = 1; i <= 10; i++){
    console.log(`valor de i ${i}`)
}

const notas = [1.5, 9.7, 6.9, 4.5, 5.5]
for(let i = 0; i < notas.length; i++) { // lenght é o comprimento do array
    console.log(`notas = ${notas[i]}`)
}