// Exemplos de callback no browser
// document.getElementsByTagName('body')[0].onclick = function(evento){
//     console.log('o evento ocorreu!!')
// }


function alterarSexo(sexo) {

        if(sexo == 'm'){
            return 'masculino'

        } else if(sexo === 'f'){
            return 'feminino'

        } else{
            return 'outro'
        }
    }        
var resultado = alterarSexo('f')

console.log(resultado)

var sexo = 'm', idade = 23
if(sexo == 'm' && idade >= 23){
    console.log('ok')
}