const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }

}
    
pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional x OO
const falarPessoa = pessoa.falar.bind(pessoa) // O bind serve para amarrar o conteudo dentro do this, para que o mesmo não venha a ser alterado
falarPessoa()