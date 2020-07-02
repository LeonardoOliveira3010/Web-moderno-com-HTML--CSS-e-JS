let dobro = function(a){
    return 2 * a
    
}

// Função arrow
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  //return implicito

console.log(dobro(Math.PI))

let triplo = function(b) {
    return 3 * b
}
triplo = (b) => {
    return 3 * b
}

triplo = b => 3 * b // Usado quando se tem  uma função de uma única linha

console.log(triplo(Math.PI))


let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' //Não pode retirar os parenteses
ola = _ => 'Olá'
console.log(ola())