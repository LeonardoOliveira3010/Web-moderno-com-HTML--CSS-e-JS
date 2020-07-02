const soma = function (x, y) {
    return x + y // Essa função não recebe nenhum valor como parametro
}
 const imprimiResultado = function(a, b, operacao = soma) { // Recebe uma operação buscando a variavel soma e com isso atribuimos os seus valores no momento da aplicação dessa variavel

     console.log(operacao(a, b))
 }

 imprimiResultado(3, 4)
 imprimiResultado(3, 4, soma)
 imprimiResultado(3, 4, function(x, y){ // Uma função anonima
     return x - y
 })
 imprimiResultado(3, 4, (x, y) => x * y) // Arrow Function

 const pessoa = {
     falar: function(){
         console.log('opa')
     }
 }
 pessoa.falar()