function teste1(num) {
    if(num > 7) {
        console.log(num)
        console.log('final')
    }
}

// teste1(5)
// teste1(8)

function teste2(num){
    if(num > 7); { // Cuidado com o ;, não usar nass estruturas de controle
        console.log(num)
    }
}

teste2(5)
teste2(8)