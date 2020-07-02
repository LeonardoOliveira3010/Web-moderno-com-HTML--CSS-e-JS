function pessoa() {
    this.idade = 0
//SetInterval > ela dispara uma outra função a partir de um determinado intervalo que foi passado

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) 
}

new pessoa