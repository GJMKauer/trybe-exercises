const botaoEnviar = document.querySelector("#botao-enviar");
const botaoApagar = document.querySelector("#botao-apagar");
const formulario = document.querySelector("#formulario");

function previneEnviar(event) {
  event.preventDefault();
}
botaoEnviar.addEventListener("click", previneEnviar);

function apagar() {
  formulario.reset();
}
botaoApagar.addEventListener("click", apagar);

