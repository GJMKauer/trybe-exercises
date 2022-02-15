let texto = document.querySelector("#texto");
texto.style.textAlign = "justify";

function definirPadraoInicial() {
    localStorage.setItem('backgroundColor', )
}

function mudaCorFundo() {
  let corFundo = document.getElementById("selecionaCorBackground").value;
  texto.style.backgroundColor = corFundo;
  document.getElementById("corBackground").value = corFundo;
  localStorage.setItem("backgroundColor", corFundo);
}
function mudaCorTexto() {
  let corTexto = document.getElementById("selecionaCorTexto").value;
  texto.style.color = corTexto;
  document.getElementById("corTexto").value = corTexto;
  localStorage.setItem("fontColor", corTexto);
}
