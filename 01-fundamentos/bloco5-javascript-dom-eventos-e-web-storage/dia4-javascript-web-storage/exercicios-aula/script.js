let texto = document.querySelector("#texto");
texto.style.textAlign = "justify";
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
  switch (texto.style.backgroundColor) {
    case "rgb(255, 255, 255)":
      texto.style.backgroundColor = "rgb(237, 222, 164)";
      break;
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
      texto.style.backgroundColor = "rgb(255, 255, 255)";
      break;
    default:
      texto.style.backgroundColor = "rgb(255, 255, 255)";
  }
}
botaoBackground.addEventListener("click", mudaBackground);

function mudaCorTexto() {
  let texto = document.querySelector("#texto");
  switch (texto.style.color) {
    case "rgb(0, 0, 0)":
      texto.style.color = "rgb(0, 166, 237)";
      break;
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
      texto.style.color = "rgb(0, 0, 0)";
      break;
    default:
      texto.style.color = "rgb(0, 0, 0)";
  }
}
botaoCor.addEventListener("click", mudaCorTexto);

function mudaTamanhoLetra() {
  switch (texto.style.fontSize) {
    case "16px":
      texto.style.fontSize = "18px";
      break;
    case "18px":
      texto.style.fontSize = "20px";
      break;
    case "20px":
      texto.style.fontSize = "22px";
      break;
    case "22px":
      texto.style.fontSize = "24px";
      break;
    case "24px":
      texto.style.fontSize = "16px";
    default:
      texto.style.fontSize = "16px";
  }
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
  switch (texto.style.fontFamily) {
    case "times-new-roman":
      texto.style.fontFamily = "arial";
      break;
    case "arial":
      texto.style.fontFamily = "monospace";
      break;
    case "monospace":
      texto.style.fontFamily = "courier";
      break;
    case "courier":
      texto.style.fontFamily = "times-new-roman";
      break;
    default:
      texto.style.fontFamily = "times-new-roman";
  }
}
botaoFonte.addEventListener("click", mudaFonteTexto);
