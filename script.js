const diminuir = document.getElementById("diminuir");
const reset = document.getElementById("reset");
const aumentar = document.getElementById("aumentar");
const numero = document.getElementById("contador");

let contador = 0;

aumentar.addEventListener("click", aumentarContador);

function aumentarContador() {
    contador ++;
    numero.textContent = contador;
}

diminuir.addEventListener("click", diminuirContador);

function diminuirContador() {
    contador --;
    numero.textContent = contador;
}

reset.addEventListener("click", resetContador);

function resetContador() {
    contador = 0;
    numero.textContent = contador;
}
