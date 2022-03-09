// // Exercício 1
// function objeto(nome) {
//   const geraEmail = nome.replace(/ /g, '_').toLowerCase();
//   return { nome, email: `${geraEmail}@trybe.com` };
// }

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };
// console.log(newEmployees(objeto));

// // -----

// // Exercício 2
// const geraNumero = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const resultadoSorteio = (callback) => {
//   const resultado = geraNumero(1, 5);
//   console.log(resultado);
//   return (callback === resultado ? 'Parabéns, você ganhou!' : 'Tente novamente.');
// };
// console.log(resultadoSorteio(1, geraNumero));

// // -----

// // Exercício 3

// const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const confirmaRespostas = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   }
//   if (rightAnswer !== studentAnswer && studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const resultadoProva = (respostasCorretas, respostasDoEstudante, callback) => {
//   let contagemPontos = 0;
//   for (let i = 0; i < respostasCorretas.length; i += 1) {
//    const callbackReturn = callback(respostasCorretas[i], respostasDoEstudante[i]);
//    contagemPontos += callbackReturn;
//   }
//   return `Resultado final: ${contagemPontos} pontos.`;
// };
// console.log(resultadoProva(rightAnswers, studentAnswers, confirmaRespostas));
