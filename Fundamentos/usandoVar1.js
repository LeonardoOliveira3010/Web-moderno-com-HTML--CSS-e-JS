// Escopo é aonde a sua variavel se torna visivel. Até onde essa variavel é acessivel
{
    {
        {
            var sera = 'será que ira imprimir'      
        }   
    }
}

console.log(sera)

function teste(){  // Dentro da função, a variavel não é exibido caso esteja fora do bloco
    var numero = 123
    console.log(numero)
}
teste()
console.log(numero)

