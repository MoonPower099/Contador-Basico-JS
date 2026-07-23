//debug
//alert("O JavaScript carregou!");
//console.log("Script carregado!");

//consts, lets, variáveis
const diminuir = document.getElementById("diminuir");
const reset = document.getElementById("resetContador");
const aumentar = document.getElementById("aumentar");
const numero = document.getElementById("contador");
const tema = document.getElementById("tema");
const body= document.body;

let contador = 0;

//Função para Atualizar Tela, ao invés de usar "numero.textContent = contador;" três vezes
function atualizarTela() {
    numero.textContent = contador;
}

//Aumentar Contador
aumentar.addEventListener("click", aumentarContador);

function aumentarContador() {
    contador ++;
    atualizarTela();
}

//Diminuir Contador
diminuir.addEventListener("click", diminuirContador);

function diminuirContador() {
    contador --;
    atualizarTela();
}

//Resetar Contador
resetar.addEventListener("click", resetarContador);

function resetContador() {
    contador = 0;
    atualizarTela();
}

//temas
tema.addEventListener("click", trocarTema);

function trocarTema() {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        tema.textContent = "☀️";
    } else {
        tema.textContent = "🌙";
    }
}
