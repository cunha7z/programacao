// Função que irá executar quando clicar no botão no btn-gerar.

function gerarTabuada() {
    // Pega o valor do campo input do HTML.
    const numeroInput = document.getElementById('numero-input')

    // Converta o texto que veio do HTML para número inteiro.
    let numero = parseInt(numeroInput.value)

    // Pega o elemento onde a tabuada será exibida no HTM e associa a uma constante..
    const resultadoDiv = document.getElementById('resultado-aqui')

    // Limpa o conteudo anterior no campo onde o resultado será exibido.
    resultadoDiv.innerHTML = ''
    
    // Adiciona o titulo da tabuada com tag h2.
    resultadoDiv.innerHTML += `<h2>TABUADA DO NÚMERO ${numero}</h2>`
    
    // Laço de repetição para gerar tabuada de 1 até 10.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

// Pega o elemento onde a tabuada será exibida no HTML.
const btnGerar = document.getElementById('btn-gerar')

// Faz a função gerarTabuada() ser executada quando clicar.
btnGerar.addEventListener('click', gerarTabuada)



