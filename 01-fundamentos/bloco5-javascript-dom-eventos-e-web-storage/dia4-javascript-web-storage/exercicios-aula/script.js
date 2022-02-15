let texto = document.querySelector("#texto");
texto.style.textAlign = "justify";

let inputCorDeFundo = document.querySelector("#inputCorDeFundo");
let inputCorDoTexto = document.querySelector("#inputCorDoTexto");
let inputTamanhoFonte = document.querySelector("#inputTamanhoFonte");
let inputAlturaLinha = document.querySelector("#inputAlturaLinha");
let seletorFonte = document.querySelector("#selecaoDeFonte");

function definirPadraoInicial() {
  localStorage.setItem("backgroundColor", "#ffffff");
  localStorage.setItem("textColor", "#000000)");
  localStorage.setItem("fontSize", "16");
  localStorage.setItem("lineHeight", "18");
  localStorage.setItem("fontFamily", "Times");
}
function colocarLocalStorageNoInput() {
  inputCorDeFundo.value = localStorage.getItem("backgroundColor");
  inputCorDoTexto.value = localStorage.getItem("textColor");
  inputTamanhoFonte.value = localStorage.getItem("fontSize");
  inputAlturaLinha.value = localStorage.getItem("lineHeight");
  seletorFonte.value = localStorage.getItem("fontFamily");
}
function valoresIniciais() {
  texto.style.backgroundColor = localStorage.getItem("backgroundColor");
  texto.style.color = localStorage.getItem("textColor");
  texto.style.fontSize = localStorage.getItem("fontSize") + "px";
  texto.style.lineHeight = localStorage.getItem("lineHeight") + "px";
  texto.style.fontFamily = localStorage.getItem("fontFamily");
}
if (localStorage.length <= 0) {
  definirPadraoInicial();
}

inputCorDeFundo.addEventListener("blur", function () {
  texto.style.backgroundColor = inputCorDeFundo.value;
  localStorage.setItem("backgroundColor", inputCorDeFundo.value);
});

inputCorDoTexto.addEventListener("blur", function () {
  texto.style.color = inputCorDoTexto.value;
  localStorage.setItem("textColor", inputCorDoTexto.value);
});
inputTamanhoFonte.addEventListener("blur", function () {
  texto.style.fontSize = inputTamanhoFonte.value + "px";
  localStorage.setItem("fontSize", inputTamanhoFonte.value);
});

inputAlturaLinha.addEventListener("blur", function () {
  texto.style.lineHeight = inputAlturaLinha.value + "px";
  localStorage.setItem("lineHeight", inputAlturaLinha.value);
});

seletorFonte.addEventListener("click", function () {
  texto.style.fontFamily = selecaoDeFonte.value;
  localStorage.setItem("fontFamily", selecaoDeFonte.value);
});

window.onload = function () {
  colocarLocalStorageNoInput();
  valoresIniciais();
};
