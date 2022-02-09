// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
//  1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
//  function

function alteraTexto(elemento, texto) {
  let p2 = document.getElementById(elemento);
  p2.innerText = texto;
  return p2;
}
alteraTexto(
  "comoMeVejo",
  "Me vejo ganhando acima de R$ 5.000,00 mensais e com um bom emprego! :)"
);

//  2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function alteraCorMain(elemento, cor) {
  document.getElementsByClassName(elemento)[0].style.backgroundColor = cor;
}
alteraCorMain("main-content", "rgb(76, 164, 109");

//  3. Crie uma função que mude a cor do quadrado vermelho para branco.

function alteraCorMain(elemento, cor) {
  document.getElementsByClassName(elemento)[0].style.backgroundColor = cor;
}
alteraCorMain("center-content", "white");

//  4. Crie uma função que corrija o texto da tag <h1>.

function alteraH1(elemento, texto) {
  let h1 = document.getElementsByTagName(elemento)[0];
  h1.innerText = texto;
  return h1;
}
alteraH1("h1", "Exercício 5.1 - JavaScript");

//  5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function alteraPUpper(elemento) {
  let pUpper = document.getElementsByTagName(elemento);

  for (i = 0; i < pUpper.length; i += 1) {
    pUpper[i].innerHTML = pUpper[i].innerHTML.toUpperCase();
  }
  return pUpper;
  console.log(pUpper);
}
alteraPUpper("p");

//  6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibeTagP(elemento) {
  console.log(document.getElementsByClassName('center-content')[0].innerHTML);
}
exibeTagP('center-content');