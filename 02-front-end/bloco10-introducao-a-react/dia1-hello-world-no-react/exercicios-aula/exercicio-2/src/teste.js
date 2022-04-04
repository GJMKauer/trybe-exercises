const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

conteudos.map((element) => {
  // console.log(Object.entries(element)[0][1]);
  return `
  O ${Object.entries(element)[0][0]} é: ${Object.entries(element)[0][1]}
  ${Object.entries(element)[1][0].charAt(0).toUpperCase()}${Object.entries(element)[1][0].slice(1)}: ${Object.entries(element)[1][1]}
  ${Object.entries(element)[2][0].charAt(0).toUpperCase()}${Object.entries(element)[2][0].slice(1)}: ${Object.entries(element)[2][1]}
  `;
});
