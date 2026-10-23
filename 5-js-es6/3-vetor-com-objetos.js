// Vetor de Objetos (usuarios)

const usuarios = [
    {nome: 'Pedro', idade: 20},
    {nome: 'Kaiky', idade: 21},
    {nome: 'Deivide:', idade: 23 },
    {nome: 'Felipe', idade: 21}
]

console.log('\n Exibindo todos os usuarios do vetor:')
usuarios.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\n Filtrando usuarios com idade acima de 50 anos:')
const maiorDeVinte = usuarios.filter(u => u.idade >= 20)
maiorDeVinte.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\n Exibindo apenas os nomes:')
const nomes = usuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`${nome};`))

console.log('\n Encontrando um usuário:')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Pedro')
console.log(usuarioEncontrado)
console.log(`${usuarioEncontrado.nome} tem ${usuarioEncontrado.idade} anos.`)

console.log('\n Mostra a soma de todas as idades:')
const somaIdades = usuarios.reduce((total,u)=> total + u.idade, 0)
console.log(`Total das idades: ${somaIdades}`)

