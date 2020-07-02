// Função sem retorno
 /*Funções são blocos de construção fundamentais em JavaScript.
  Uma função é um procedimento de JavaScript - 
  um conjunto de instruções que executa uma tarefa ou calcula um valor.*/

  /* Um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo.
   Uma xícara é um objeto, com propriedades. 
   Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. 
  Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.*/

  /* A Função é um bloco de código e esse bloco irá ter um nome.
 Recebe parametros de entrada e executa e no final retorna esse valor*/
 function imprirSoma(a, b) {
     console.log(a + b)
 }

 imprirSoma(2, 3)

// calculo de notas utilizando uma função
 function notaAnual(a1, a2, a3, a4){
    console.log((a1 + a2 + a3 + a4) / 4)
 }

 notaAnual(5, 3, 6, 8)

 //Função com retorno
 function soma(a, b = 0){ // feito uma tratativa na variavel b
     return a + b
 }
 console.log(soma(2, 3))
 console.log(soma(2)) // Foi passado um parametro para o B então não terá um NaN