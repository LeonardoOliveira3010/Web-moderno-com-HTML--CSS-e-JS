// var umNumeroPequeno = 10
// var umNumeroGrande =  15
// var eMaior = umNumeroPequeno > umNumeroGrande
// var eMenor = umNumeroPequeno < umNumeroGrande
// console.log(eMenor)
// console.log(eMaior)

// function multiplicacao(a, b){
//     return a * b
// }

// console.log(multiplicacao(5, 5))

// function somar(a, b){
//     return a + b
// }

// function triploDaSoma(a, b){
//     function triplo (){

//         var resultadoDaSoma =  somar(c, d)
//         return resultadoDaSoma * 3    
//     }
    
// }

// console.log(triploDaSoma(2,1))

// function perimetro(radius){
//     return 2 * Math.PI * radius
// }

// console.log(perimetro(10))


// function escreverCartao(dr, nome, sobrenome){
//     return dr + nome + sobrenome;
// }

// console.log(escreverCartao('Dra.', " " + 'Ana', " " + 'Pérez'));
// console.log(escreverCartao('Dr.', " " + 'Julio', " " + 'Gelman' ))

// function triplo (num1, num2) {
//     return num1 + num2;
//  }

//  function triploDaSoma(num3, num4) {
//     var resultadoDaSoma = triplo(num3, num4);
//     return resultadoDaSoma * 3;
//  }

//  console.log(triploDaSoma(4, 5))

//  function perimetro(raio){
//      return 3.14 * raio * 2
//  }

//  function area(raio){
//      return 3.14 * raio * raio
//  }

//  console.log(perimetro(5))
//  console.log(area(5))

// function tamanhoNomeCompleto(nome, sobrenome){
//     return nome + sobrenome
// }

// console.log(tamanhoNomeCompleto('Juan'," " + 'Perez'))
// console.log(tamanhoNomeCompleto('natalia'," " + 'natalia'))

// function gerarProbabilidade(p, l){
//     return Math.random()
// }

// console.log(gerarProbabilidade(10, 20))


// function hojeSeJoga(diaDeSemana){
//     if(diaDeSemana == 'domingo'){
//         return 'hoje é dia de futebol ! ! !'
//     }else{
//         return 'hoje não é dia de futebol :('
//     }
// }

// console.log(hojeSeJoga('domingo'))
// console.log(hojeSeJoga('terça'))

// function eMaior(num1, num2){
//     if(num1 > num2){
//         return num1
//     }else{
//         return num2
//     }
// }

// console.log(eMaior(9, 3))

// function sinal(num1){
//     if(num1 >= 1){
//         return 1
//     }else if(num1 == 0){
//         return 0
//     }else if(num1 <= -1){
//         return -1
//     }
// }

// console.log(sinal(5))
// console.log(sinal(0))
// console.log(sinal(-20))

// function eMaiorDeIdade(idade){
//     if(idade < 17 && idade > 10){
//         return ('Adolescente')
//     }else if(idade > 18 && idade < 30){
//         return ('jovem adulto')
//     }else if(idade <= 10){
//         return ('criança')
//     }else if (idade > 30 && idade < 100){
//         return ('velho')
//     }else 
//         return 'Valor incorreto'
// }

// console.log(eMaiorDeIdade(101))

// function eNumeroDaSorte(num1){
//     return num1 % 20 == 0 || num1 == 2 || num1 == 6 || num1 * 1 == 4
// }

// console.log(eNumeroDaSorte(2))
// console.log(eNumeroDaSorte(6))
// console.log(eNumeroDaSorte(4))

// function possoIrAoBanco(diaDaSemana, horaAtual){
//     return diaDaSemana =! 'domingo' || horaAtual == 10
// }

// console.log(possoIrAoBanco('segunda', 10))

// function filosofoHipster(profissao, nacionalidade, kmPordia){
//     return profissao == 'Músico' && nacionalidade == 'Brasil' && kmPordia == 5
// }

// console.log(filosofoHipster('Músico', 'Brasil', 5))
// console.log(filosofoHipster('Músico', 'Argentina', 1))
// console.log(filosofoHipster('Músico', 'Canada', 12))

// function pagarComCartao(temJuros, taxasDoCartao, dinheiroDisponivel){
//     return  !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100
// }

// console.log(pagarComCartao(6, 2, 90))

// function podeSeAposentar(idade, sexo, anosDeContribuicao){
//     return idade >= 60 && sexo == 'F' && anosDeContribuicao >=30  || idade >= 65 && sexo == 'M' && anosDeContribuicao >= 30
// }

// console.log(podeSeAposentar(62, 'F', 40))
// console.log(podeSeAposentar(63, 'F', 25))
// console.log(podeSeAposentar(69, 'F', 40))
// console.log(podeSeAposentar(63, 'M', 35))
// console.log(podeSeAposentar(58, 'M', 35))

// function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco){
//    return alturaPessoa >= 1.5 && !vemComCompania && !temProblemaCardiaco
// }
// console.log(podeSubir(1.5, false, true))
// console.log(podeSubir(1.7, true, false))
// console.log(podeSubir(1.2, false, false))

// function pagarComCartao(temJuros, taxasDoCartao, dinheiroDisponivel){
//     return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100
// }

// console.log(pagarComCartao(true, 6, 320))
// console.log(pagarComCartao(false, 8, 80))
// console.log(pagarComCartao(true, 2, 215))
// console.log(pagarComCartao(true, 1, 32))

// function medalhaSegundoOPosto(posto){
//     if(posto === 1){
//         return 'ouro'
//     }else if(posto == 2){
//         return 'prata'
//     }else if(posto == 3){
//         return 'bronze'
//     }else
//         return 'Continue participando'
// }

// console.log(medalhaSegundoOPosto(1))
// console.log(medalhaSegundoOPosto(2))
// console.log(medalhaSegundoOPosto(3))
// console.log(medalhaSegundoOPosto(4))

//  Trabalhando com ciclos FOR

// function imprimirAzul4(){
//     for(var i = 0; i < 4; i++ ){
//         console.log('Azul')
//     }
// }

// function imprimir5vezes5(){
//     for(var i = 0; i < 5; i++){
//         console.log(5)
//     }
// }

// imprimir5vezes5()

// function passoAPasso(){
//     for(var i = 0; i< 5; i++)
//     console.log(i)
// }

// function passandoPor(){
//     for(var i = 0; i < 4; i++)
//     console.log('aqui tenho o valor de ' + i)
// }

// passandoPor()

// function passandoPelosPares(par){
//     for(var i = par % 6 == 0; i < 7; i++){
//         console.log('aqui eu tenho o valor de ' + i)
//     }
// }

// passandoPelosPares()

// function imprimirAzul(azul){
//     for(var i = 0; i < azul; i++){
//         console.log('Azul')
//     }
// }
// imprimirAzul(3)


var centavos = 0
function somar5MoedasDe25centavos(){
    for(var i = 0; i < 5; i++){
        centavos = centavos + 0.25
    }


}

console.log(centavos)

