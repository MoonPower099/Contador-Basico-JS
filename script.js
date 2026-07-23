// Consts, lets, variáveis
const diminuir = document.getElementById("diminuir");
const resetar = document.getElementById("resetarContador");
const aumentar = document.getElementById("aumentar");
const numero = document.getElementById("contador");
const tema = document.getElementById("tema");
const body = document.body;

let contador = 0;


// Função para atualizar tela
function atualizarTela() {
    numero.textContent = contador;
}


// Aumentar contador
aumentar.addEventListener("click", aumentarContador);

function aumentarContador() {
    contador++;
    atualizarTela();
}


// Diminuir contador
diminuir.addEventListener("click", diminuirContador);

function diminuirContador() {
    contador--;
    atualizarTela();
}


// Resetar contador
resetar.addEventListener("click", resetarContador);

function resetarContador() {
    contador = 0;
    atualizarTela();
}


// Tema claro/escuro
tema.addEventListener("click", trocarTema);

function trocarTema() {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        tema.textContent = "☀️";
    } else {
        tema.textContent = "🌙";
    }
}
