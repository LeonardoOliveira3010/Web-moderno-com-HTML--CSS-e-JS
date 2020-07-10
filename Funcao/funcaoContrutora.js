// Utiliza a função como se fosse uma classe em java.

function carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <=velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new carro// Função construtora
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro (350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
