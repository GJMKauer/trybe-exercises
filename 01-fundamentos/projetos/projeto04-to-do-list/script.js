const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const idListaTarefas = '#lista-tarefas';

function criaTarefa() {
  const input = document.querySelector('#texto-tarefa');
  const tarefa = document.createElement('li');
  const listaTarefa = document.querySelector(idListaTarefas);
  //   const caixaCompleta = document.querySelector('#caixa-completa');
  //   const aumentaCaixa = '10';
  tarefa.innerText = input.value;
  tarefa.className = 'tarefas';
  listaTarefa.appendChild(tarefa);
  input.value = '';
  //   caixaCompleta.style.height = aumentaCaixa + 'px';
}
botaoCriaTarefa.addEventListener('click', criaTarefa);

function pintaTarefa() {
  const tarefas = document.querySelector(idListaTarefas).children;
  for (let i = 0; i < tarefas.length; i += 1) {
    if (
      tarefas[i] === event.target &&
      event.target.classList.contains('tarefas')
    ) {
      event.target.classList.add('selected');
    } else if (
      tarefas[i] !== event.target &&
      event.target.classList.contains('tarefas')
    ) {
      tarefas[i].classList.remove('selected');
    }
  }
}
document.addEventListener('click', pintaTarefa);

function completaTarefa() {
  const tarefaCompleta = document.querySelector(idListaTarefas).children;
  for (let i = 0; i < tarefaCompleta.length; i += 1) {
    if (
      tarefaCompleta[i] === event.target &&
      event.target.classList.contains('tarefas')
    ) {
      event.target.classList.toggle('completed');
      event.target.classList.remove('selected');
    }
  }
}
document.addEventListener('dblclick', completaTarefa);

// Não estava conseguindo fazendo a função abaixo (.removeChild) funcionar, pois estava utilizando querySelectors, e o .removeChild necessita de DOM Elements, não strings.
// No caso, pesquisei sobre isso e descobri. O site que utilizei para modificar o código foi o https://stackoverflow.com/questions/10433492/javascript-removechild-not-working.
const botaoLimpa = document.querySelector('#apaga-tudo');
function limpaLista() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefasLimpas = document.querySelector(idListaTarefas).children;
  for (let i = tarefasLimpas.length; i >= 0; i -= 1) {
    if (tarefasLimpas.length) {
      listaTarefas.removeChild(listaTarefas.firstChild);
    }
  }
}
// O meu for estava com as atribuições erradas. Como eu começava no 0, e ele ia removendo os elementos ao mesmo tempo, chegava na metade da lista e ele passava do tamanho dela, pois já tinha removido. Com isso, a cada clique no botão, eram removidos apenas metade dos elementos.
// Pesquisei sobre isso, e encontrei o site: https://stackoverflow.com/questions/44349204/removechild-not-removing-all-items-from-list. Com ele, alterei as regras do meu for e está funcionando o código.
botaoLimpa.addEventListener('click', limpaLista);

const botaoLimpaFinalizados = document.querySelector('#remover-finalizados');
function limpaFinalizados() {
  const tarefasFinalizadas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasFinalizadas.length; i += 1) {
    if (tarefasFinalizadas[i].classList.contains('completed')) {
      tarefasFinalizadas[i].remove();
    }
  }
}
botaoLimpaFinalizados.addEventListener('click', limpaFinalizados);
