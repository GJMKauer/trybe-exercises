let textoPrincipal = document.querySelector("#texto");
// textoPrincipal.style.textAlign = "justify";
// textoPrincipal.style.color = "rgb(13, 27, 42)";
// textoPrincipal.style.fontSize = "18px";
// textoPrincipal.style.lineHeight = "24px";

let botoes = document.querySelector("#containerBotoes");

botoes.style.padding = "20px";
botoes.style.textAlign = "center";

let botaoBackground = document.querySelector("#botaoCorFundo");
let botaoCor = document.querySelector("#botaoCorTexto");
let botaoTamanho = document.querySelector("#botaoTamanho");
let botaoEspacamento = document.querySelector("#botaoEspacamento");
let botaoFonte = document.querySelector("#botaoFonte");

function mudaBackground() {
  let texto = document.querySelector("#texto");
  console.log(texto.style.backgroundColor);
  switch (texto.style.backgroundColor) {
    case "rgb(237, 222, 164)":
      texto.style.backgroundColor = "rgb(165, 148, 249)";
      break;
    case "rgb(165, 148, 249)":
      texto.style.backgroundColor = "rgb(17, 157, 164)";
      break;
    case "rgb(17, 157, 164)":
      texto.style.backgroundColor = "rgb(13, 27, 42)";
      break;
    case "rgb(13, 27, 42)":
      texto.style.backgroundColor = "rgb(237, 222, 164)";
      break;
    default:
      texto.style.backgroundColor = "rgb(237, 222, 164)";
  }
}
botaoBackground.addEventListener("click", mudaBackground);

function mudaCorTexto() {
  let texto = document.querySelector("#texto");
  console.log(texto.style.color);
  switch (texto.style.color) {
    case "rgb(0, 166, 237)":
      texto.style.color = "rgb(245, 247, 220)";
      break;
    case "rgb(245, 247, 220)":
      texto.style.color = "rgb(27, 38, 59)";
      break;
    case "rgb(27, 38, 59)":
      texto.style.color = "rgb(205, 193, 255)";
      break;
    case "rgb(205, 193, 255)":
      texto.style.color = "rgb(0, 166, 237)";
      break;
    default:
      texto.style.color = "rgb(0, 166, 237)";
  }
}
botaoCor.addEventListener("click", mudaCorTexto);

function mudaTamanhoLetra() {
  //   let texto = document.querySelector("#texto");
  //   if (texto.style.fontFamily === "Arial") {
  //     texto.style.fontFamily = "Monospace";
  //   } else {
  //     texto.style.fontFamily = "Arial";
  //   }
}
botaoTamanho.addEventListener("click", mudaTamanhoLetra);

function mudaEspacamento() {
  //   let texto = document.querySelector("#texto");
  //   if (texto.style.fontFamily === "Arial") {
  //     texto.style.fontFamily = "Monospace";
  //   } else {
  //     texto.style.fontFamily = "Arial";
  //   }
}
botaoEspacamento.addEventListener("click", mudaEspacamento);

function mudaFonteTexto() {
  let texto = document.querySelector("#texto");
  console.log(texto.style.fontFamily);
  switch (texto.style.fontFamily) {
    case "arial":
      texto.style.fontFamily = "monospace";
      break;
    case "monospace":
      texto.style.fontFamily = "times-new-roman";
      break;
    case "times-new-roman":
      texto.style.fontFamily = "courier";
      break;
    case "courier":
      texto.style.fontFamily = "arial";
      break;
    default:
      texto.style.fontFamily = "arial";
  }
}
botaoFonte.addEventListener("click", mudaFonteTexto);
