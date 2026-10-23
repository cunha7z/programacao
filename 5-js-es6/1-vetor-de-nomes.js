//criando nomes

const listaNomes = ['Pedro', 'Kaiki', 'Deivide', 'Felipe']

console.log('\n Exibindo todos os elementos do vetor:')
console.log(listaNomes)

console.log('\n Exibindo o primeiro elemento do vetor:')
console.log(listaNomes[0])

console.log('\n Adicionando um elemento no vetor:')
listaNomes.push('Gabriel')
console.log(listaNomes)

// ------------------------------------------------------------------


console.log('\n Adicionado MEU NOME no vetor:')
listaNomes.push('Henrique')
console.log(listaNomes)

console.log('\n Removendo o primeiro elemento do vetor:')
listaNomes.shift()
console.log(listaNomes)

console.log('\n Removendo um elemento especifico no vetor:')
// a partir de indice 2, remover apenas um elemento
listaNomes.splice(2,1)
console.log(listaNomes)

console.log('\n Removendo o ultimo elemento do vetor:')
listaNomes.pop()
console.log(listaNomes)

