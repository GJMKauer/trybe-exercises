const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionaTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
};
adicionaTurno(lesson2, 'turno', 'tarde');

// Exercício 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listaKeys = (objeto) => {
  Object.keys(objeto);
};
listaKeys(lesson1);

// Exercício 3 - Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObjeto = (objeto) => {
  Object.keys(objeto).length;
};
tamanhoObjeto(lesson1);

// Exercício 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listaValues = (objeto) => {
  Object.values(objeto);
};
listaValues(lesson1);

// Exercício 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
// {
//   lesson1: {
//      materia: 'Matemática',
//      numeroEstudantes: 20,
//      professor: 'Maria Clara',
//      turno: 'manhã'
//   },
//   lesson2: {
//      materia: 'História',
//      numeroEstudantes: 20,
//      professor: 'Carlos',
//      turno: 'tarde'
//   },
//   lesson3: {
//      materia: 'Matemática',
//      numeroEstudantes: 10,
//      professor: 'Maria Clara',
//      turno: 'noite'
//   }
// };
const criaAllLessons = (objetoNovo, aulaUm, aulaDois, aulaTres) => {
  const allLessons = Object.assign(objetoNovo, aulaUm, aulaDois, aulaTres);
  return allLessons;
};
criaAllLessons({}, { lesson1 }, { lesson2 }, { lesson3 });

// Exercício 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalAlunos = () => {
  const allLessons = criaAllLessons({}, { lesson1 }, { lesson2 }, { lesson3 });
  const total = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

  console.log(`O número total de alunos em todas as aulas é de ${total} alunos.`);
};
totalAlunos();

// Exercício 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matématica'
const chaveNaPosicao = (aula, posicao) => {
  const objeto = Object.values(aula)[posicao];
};
chaveNaPosicao(lesson1, 0);

// Exercício 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false
const verificaPar = (objeto, chave, valor) => {
  const object = Object.entries(objeto);
  let eIgual = false;
  for (index in object) {
    if (object[index][0] === chave && object[index][1] === valor) {
      eIgual = true;
    }
  }
  return eIgual;
};
console.log(verificaPar(lesson3, 'turno', 'noite'));
