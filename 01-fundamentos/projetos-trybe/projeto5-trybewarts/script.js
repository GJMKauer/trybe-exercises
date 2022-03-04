const botao = document.getElementById('botao');

function login() {
  const email = document.getElementById('email-input').value;
  const senha = document.getElementById('senha-input').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botao.addEventListener('click', login);

function desabilitaEnvio() {
  const botaoAgreement = document.getElementById('agreement');
  const botaoEnviar = document.getElementById('submit-btn');

  // Descobrimos que o ".checked" já é uma propriedade do próprio JavaScript com esse site: https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked.
  if (botaoAgreement.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
  // Descobrimos como chamar o ".disabled" do HTML para o JavaScript através desse site: https://flaviocopes.com/how-to-disable-button-javascript/.
  botaoAgreement.addEventListener('click', desabilitaEnvio);
}
desabilitaEnvio();

function alteraContador() {
  const caixaTextArea = document.getElementById('textarea');
  const contador = document.getElementById('counter');
  const tamanhoCaixa = 500;

  contador.innerText = tamanhoCaixa - caixaTextArea.value.length;
  caixaTextArea.addEventListener('keyup', alteraContador);
}
alteraContador();

// Consultado repositório de colegas https://github.com/tryber/sd-020-a-project-trybewarts/pull/101/commits/b291ef97dacde24e31c634e8f10f280a3d6e7ce0.
// Para verificar como chamar o conteúdo dos inputs no JavaScript.
// Está fora da function para não interferir no lint.

// Descobrimos sobre a utilização do template literals nesse site: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.
// Descobrimos que temos que usar ele através da consulta no repositórios dos colegas acima.
// Está fora da function para não interferir no lint.

function escolheMaterias() {
  const materias = document.getElementsByClassName('subject');
  const arrayMaterias = [];

  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      arrayMaterias.push(materias[i].value);
    }
  }
  return arrayMaterias.join(', ');
}

function setaValores() {
  const form = document.getElementById('evaluation-form');
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const materiasEscolhidas = escolheMaterias();
  const observacoes = document.getElementById('textarea');

  form.innerHTML = `
  <p>Nome: ${nome} ${sobrenome}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${casa}</p>
  <p>Família: ${familia}</p>
  <p>Matérias: ${materiasEscolhidas}</p>
  <p>Avaliação: ${avaliacao}</p>
  <p>Observações: ${observacoes.value}</p> `;
}

const botaoSubmit = document.getElementById('submit-btn');
function previnePadrao(event) {
  event.preventDefault();
  setaValores();
}
botaoSubmit.addEventListener('click', previnePadrao);
