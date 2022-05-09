function adicionaCores() {
  const secao = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const cor = document.createElement('section');
    cor.className = 'color';

    secao.appendChild(cor);
  }
}
adicionaCores();

// Embora eu tivesse na minha cabeça uma forma de criar esse quadro através de dois for, estava dando alguns problemas. Com isso, utilizei a ajuda do site https://stackoverflow.com/questions/32946958/create-a-grid-of-3-x-3-using-javascript-jquery para terminar o código do meu quadro.
function criaQuadro() {
  const quadro = document.querySelector('#pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const pixelLinha = document.createElement('section');
    for (let j = 0; j < 5; j += 1) {
      const pixelColuna = document.createElement('div');
      pixelColuna.className = 'pixel';
      pixelLinha.appendChild(pixelColuna);
    }
    quadro.appendChild(pixelLinha);
  }
}
criaQuadro();

function defineCorInicial() {
  const cores = document.querySelector('.color');
  cores.className = 'color selected';
}
defineCorInicial();

const botaoLimpa = document.querySelector('#clear-board');
function limpaQuadro() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
botaoLimpa.addEventListener('click', limpaQuadro);

const cores = document.querySelectorAll('.color');

// Compreendi um pouco melhor o .classList e o .classList.toggle a partir desse link: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList.
// Descobri ele existe por um explicação da Caról na Mentoria.
function alteraSelecao1() {
  for (let i = 0; i < cores.length; i += 1) {
    if (cores[i] === cores[0]) {
      cores[0].classList.add('selected');
    } else {
      cores[i].classList.remove('selected');
    }
  }
}
cores[0].addEventListener('click', alteraSelecao1);

function alteraSelecao2() {
  for (let i = 0; i < cores.length; i += 1) {
    if (cores[i] === cores[1]) {
      cores[1].classList.toggle('selected');
    } else {
      cores[i].classList.remove('selected');
    }
  }
}
cores[1].addEventListener('click', alteraSelecao2);

function alteraSelecao3() {
  for (let i = 0; i < cores.length; i += 1) {
    if (cores[i] === cores[2]) {
      cores[2].classList.toggle('selected');
    } else {
      cores[i].classList.remove('selected');
    }
  }
}
cores[2].addEventListener('click', alteraSelecao3);

function alteraSelecao4() {
  for (let i = 0; i < cores.length; i += 1) {
    if (cores[i] === cores[3]) {
      cores[3].classList.toggle('selected');
    } else {
      cores[i].classList.remove('selected');
    }
  }
}
cores[3].addEventListener('click', alteraSelecao4);

// ---

cores[0].style.backgroundColor = 'black';
cores[1].style.backgroundColor = 'red';
cores[2].style.backgroundColor = 'blue';
cores[3].style.backgroundColor = 'green';

const pixels = document.querySelectorAll('.pixel');
const corUm = cores[0].style.backgroundColor;
const corDois = cores[1].style.backgroundColor;
const corTres = cores[2].style.backgroundColor;
const corQuatro = cores[3].style.backgroundColor;
function pintaPixels() {
  if (
    cores[0].classList.contains('selected') &&
    event.target.classList.contains('pixel')
  ) {
    for (let i = 0; i < pixels.length; i += 1) {
      event.target.style.backgroundColor = corUm;
    }
  } else if (
    cores[1].classList.contains('selected') &&
    event.target.classList.contains('pixel')
  ) {
    for (let i = 0; i < pixels.length; i += 1) {
      event.target.style.backgroundColor = corDois;
    }
  } else if (
    cores[2].classList.contains('selected') &&
    event.target.classList.contains('pixel')
  ) {
    for (let i = 0; i < pixels.length; i += 1) {
      event.target.style.backgroundColor = corTres;
    }
  } else if (
    cores[3].classList.contains('selected') &&
    event.target.classList.contains('pixel')
  ) {
    for (let i = 0; i < pixels.length; i += 1) {
      event.target.style.backgroundColor = corQuatro;
    }
  }
}
document.addEventListener('click', pintaPixels);
// Aqui utilizei o document como um eventBubbling. Aprendi no site: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/.
// Conforme instruções do readme.md do projeto.
