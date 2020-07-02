const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5){
        break // O break aje em cima do tipo for while
    } // No caso do break acontece um desvio de fluxo pra fora do laço
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y == 5){
        continue // Ele simplismente interrompe a repetição corrente e vai pra proxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}