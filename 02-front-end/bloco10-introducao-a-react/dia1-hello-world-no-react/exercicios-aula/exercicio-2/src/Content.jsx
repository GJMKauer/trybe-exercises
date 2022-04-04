import React from 'react';

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

const teste = conteudos.map((element, i) => {
  return (
    <ul key={i}>
      <li>
        O {Object.entries(element)[0][0]} é: {Object.entries(element)[0][1]}
      </li>
      <li>
        {Object.entries(element)[1][0].charAt(0).toUpperCase()}
        {Object.entries(element)[1][0].slice(1)}: {Object.entries(element)[1][1]}
      </li>
      <li>
        {Object.entries(element)[2][0].charAt(0).toUpperCase()}
        {Object.entries(element)[2][0].slice(1)}: {Object.entries(element)[2][1]}
      </li>
    </ul>
  );
});

class Content extends React.Component {
  render() {
    return teste;
  }
}

export default Content;
