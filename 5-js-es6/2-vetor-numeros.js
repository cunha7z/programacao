// vetor de numeros.

const numeros = [1,2,3,4,5]

console.log('\n Exibindo todos os numeros:')
console.log(numeros)

console.log('\n Multiplicando todos os numeros por 2:')
console.log(numeros)
const numerosMultiplicadosPorDois = numeros.map(n => n * 2)
console.log(numerosMultiplicadosPorDois)

console.log('\n Exibindo apenas os numeros pares:')
console.log(numeros)
const numerosPares = numeros.filter(n => n % 2 === 0)
console.log(numerosPares)

console.log('\n Exibindo a soma de todos os numeros:')
console.log(numeros)
const soma = numeros.reduce((soma,atual) => soma + atual, 0)
console.log(soma)