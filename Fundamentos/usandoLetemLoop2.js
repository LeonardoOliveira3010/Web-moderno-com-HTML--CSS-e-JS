const funcs = []
for(let i = 0; i < 10; i ++){
    funcs.push(function() {
        console.log(i)
    })
} // Uma função tem conciencia do local que ela foi definida

funcs [2]()
funcs [8]()
