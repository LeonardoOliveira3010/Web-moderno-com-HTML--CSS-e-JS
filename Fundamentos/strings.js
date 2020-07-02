const escola = 'leonardo'
console.log(escola.charAt(5)) // Busca a letra que está no method
console.log(escola.charCodeAt(3)) // Código relacionado a tabela unicode
console.log(escola.indexOf('d')) // Saber em qual indice o digito está na palavra
console.log(escola.substring(3)) // A partir de determindo indice irá imprimir as informações
console.log(escola.substring(1, 3))

console.log('Nome '.concat(escola)) // É a concatenação, adiciona mais uma palavra usando .concat()

console.log(escola.replace('o', 'a')) // subsititu um indice por outro

console.log('Ana, Maria, Carla'.split(',')) // Transformar aa string em array