function tratarErroELancar(){
    throw new Error('Só um momento amigo')
}


function imprimaNomeGritado (obj) {
    try{
        console.log(obj.name.toUppercase() + "!!!!!")
    }catch(e){
        tratarErroELancar(e)
    }
}

const obj = {
    nome: 'Leonardo'
}
imprimaNomeGritado(obj)