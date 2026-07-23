//debug
//alert("O JavaScript carregou!");
//console.log("Script carregado!");

//consts, lets, variáveis
const diminuir = document.getElementById("diminuir");
const reset = document.getElementById("resetContador");
const aumentar = document.getElementById("aumentar");
const numero = document.getElementById("contador");

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
