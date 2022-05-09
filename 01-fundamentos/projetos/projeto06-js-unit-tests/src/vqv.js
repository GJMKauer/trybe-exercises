/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  if (!(nome, idade)) { // Obs: acessei o link https://stackoverflow.com/questions/41746845/typing-a-function-that-returns-undefined-if-parameter-is-undefined para verificar uma forma de declarar esse if (ou seja, um if que identifica se a minha função não tem parâmetros). O link não tem relação exata ao que eu estava procurando, mas identifiquei a utilização do ! (negação) para verificar se não há determinado parâmetro chamado. No entanto, o if funciona tanto com: "! (nome, idade)" ou "! (nome)" ou "! (idade)" ou "! nome" ou "! idade". Por quê? // Respondido no Slack pelo Cadu. :D
    return undefined;
  } 
  return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
