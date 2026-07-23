const diminuir = document.getElementById("diminuir");
const reset = document.getElementById("reset");
const aumentar = document.getElementById("aumentar");
const numero = document.getElementById("contador");

let contador = 0;

function atualizarTela() {
    numero.textContent = contador;
}

aumentar.addEventListener("click", aumentarContador);

function aumentarContador() {
    contador ++;
    atualizarTela();
}

diminuir.addEventListener("click", diminuirContador);

function diminuirContador() {
    contador --;
    atualizarTela();
}

reset.addEventListener("click", resetContador);

function resetContador() {
    contador = 0;
    atualizarTela();
}
