function alteraCorH3(elemento, cor) {
  let h3 = document.getElementsByTagName(elemento);

  for (let i = 0; i < h3.length; i += 1) {
    h3[i].style.color = cor;
  }
  return h3;
}
alteraCorH3("h3", "rgb(249, 249, 249)");

function alteraTextoFooter(textoNovo) {
  document.getElementById("footer-container").innerHTML = textoNovo;
}
alteraTextoFooter("Trybe© Todos os Direitos Reservados.");

function alteraH3_2(elemento, cor) {
  let h3_2 = document.querySelectorAll(".no-emergency-tasks h3")[1];
  h3_2.style.color = cor;

  return h3_2;
}
alteraH3_2("h3_2", "rgb(150, 150, 150");

function alteraH3_1(elemento, cor) {
  let h3_1 = document.querySelector(".no-emergency-tasks h3");
  h3_1.style.color = cor;

  return h3_1;
}
alteraH3_1("h3_1", "rgb(100, 150, 100");
