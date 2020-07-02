const [a] = [10]
console.log(a)

const [n1, ,n3, , n5, n6=0] = [10, 5, 20, 40]
console.log(n1, n3,n5, n6)

const [,[, nota]] = [[8, 7, 5, 2], [1, 6, 'fg', 10]]
console.log(nota)