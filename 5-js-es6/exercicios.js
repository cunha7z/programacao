const listaDeAlunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Kaiky', nota: 7.5},
    {nome: 'Deivide', nota: 9.0},
    {nome: 'Felipe', nota: 8.0},
    {nome: 'Gabriel', nota: 6.0}
]

console.log('\n Mostre todos os alunos, seus nomes e suas notas:')
listaDeAlunos.forEach(u => console.log(`O aluno se chama ${u.nome} e tem a sua nota: ${u.nota}`))


console.log('\n Mostre a media geral da turma:')
const media = listaDeAlunos.reduce((total,u) => total + u.nota /5, 0)
console.log(media)

console.log('\n Mostre o nome e nota dos alunos com nota abaixo de 7.0')
const abaixoSete = listaDeAlunos.filter(u => u.nota <= 7)
abaixoSete.forEach(u => console.log(`O aluno ${u.nome} está abaixo da média com nota: ${u.nota} `))


console.log('\n Mostre apenas o nome dos alunos com nota maior ou igual a 7.0:')
const maiorSete = listaDeAlunos.filter(u => u.nota >= 7)
maiorSete.forEach(u => console.log(`O aluno ${u.nome} tem a sua nota: ${u.nota} `))


console.log('\n Mostre o nome e a nota do aluno Pedro:')
const alunoEncontrado = listaDeAlunos.find(u => u.nome === 'Pedro')
console.log(`O nome do aluno é: ${alunoEncontrado.nome} e sua media : ${alunoEncontrado.nota}`)

console.log('\n Some todas as notas:')
const somaNotas = listaDeAlunos.reduce((total, u) => total + u.nota, 0)
console.log(`Total das notas: ${somaNotas}`)

console.log('\n Liste todos os nomes dos alunos, sem mostrar suas notas:')
const nomes = listaDeAlunos.map(u => u.nome)
nomes.forEach(nome => console.log(`${nome}`))



