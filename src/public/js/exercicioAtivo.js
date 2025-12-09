//exercicioAtivo.js

//funçao para pegar o nome do exercicio atravez dos parametros da URL
function getQueryParams(nome) {
    const urlParams = new URLSearchParams(window.location.search)
    //retorna o valor do parametro 'name'
    return urlParams.get(nome)
}
//pega o nome do exercicio da URL
const nomeExercicio = getQueryParams('nome')

const tituloExercicio = document.getElementById('nomeExercicio')

if (nomeExercicio) {
    tituloExercicio.textContent = decodeURIComponent(nomeExercicio)

    document.title = decodeURIComponent(nomeExercicio) + '- NexFit'
} else {
    tituloExercicio.textContent = "Exercicio desconhecido"
}

//PARTE DO CONTADOR 
let segundos = 0
let intervalo;

const valorCard = document.getElementById('valorCard')
const btnPausar = document.getElementById('btnPausar')
const btnContinuar = document.getElementById('btnContinuar')
const btnConcluir = document.getElementById('btnConcluir')

const btnVoltar = document.getElementById('btnVoltar')

iniciarContador()

function iniciarContador() {
    intervalo = setInterval(() => {
        segundos++
        valorCard.textContent = segundos
    }, 1000)
}

function pausarContador() {
    clearInterval(intervalo)
    intervalo = null
    btnPausar.style.display = "none"
}

btnPausar.addEventListener("click", () => {
    pausarContador()

    btnContinuar.style.display = "block"
    btnConcluir.style.display = "block"

})

btnContinuar.addEventListener("click", () => {
    if (!intervalo) iniciarContador()
        btnConcluir.style.display = "none"
        btnContinuar.style.display = "none"
        btnPausar.style.display = "block"
})

btnConcluir.addEventListener("click", () => {
    pausarContador()

    const secaoDeTreinoConcluido = document.getElementById('secaoDeTreinoConcluido')
    secaoDeTreinoConcluido.style.display = "flex"

    const botaoDeOk = document.getElementById('botaoDeOk')
    botaoDeOk.addEventListener('click', () => {

        window.location.href = "/exercicios"
    })

})

btnVoltar.addEventListener('click', () => {
    window.location.href = "/exercicios"
})


//seçao das musicas
function carregarMusica() {
    const btnMusica = document.getElementById('btnMusica')
    const modalPlayer = document.getElementById('modalPlayer')

    modalPlayer.style.display = "Block"
}