var numero = 1 // Variavel escrita com VAR tem escopo global e função. Variavel LET tem escopo global, função e bloco
{
    let numero = 2
    console.log('dentro', numero)
}

console.log('fora', numero) // Como o let está em um escopo diferente, o mesmo não irá repetir no var