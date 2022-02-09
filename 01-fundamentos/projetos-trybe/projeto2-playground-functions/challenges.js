function compareTrue(valor1, valor2) {
    if (valor1 === true && valor2 === true) {
      return true;
    }
    return false;
  }
  
  // Desafio 2
  function calcArea(base, height) {
    return (base * height) / 2;
  }
  
  // Desafio 3
  function splitSentence(string) {
    let splits = string.split(' ');
    return splits;
  }
  
  // Desafio 4
  function concatName(array) {
    let index = array.length - 1;
    return array[index] + ', ' + array[0];
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    let points = 0;
    if (wins !== 0 && ties !== 0) {
      points += wins * 3 + ties;
    }
    return points;
  }
  
  // Desafio 6
  function highestCount(arrayNumbers) {
    let repeticao = 0;
    for (let index in arrayNumbers) {
      // Aprendi o comando Math.max() no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max.
      // E a utilização com (...nomeDoArray) no site https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript.
      if (Math.max(...arrayNumbers) === arrayNumbers[index]) {
        repeticao += 1;
      }
    }
    return repeticao;
  }
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    if (cat1 === cat2 || (cat1 + cat2) / 2 === mouse) {
      return 'os gatos trombam e o rato foge';
    }
    // Aprendi o comando Math.abs() no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs.
    // Esse comando se faz necessário para que não tenhamos valores negativos; para os exemplos do robô
    // do projeto, não era necessário utilizar o Math.abs(). Mas, para outros exemplos, às vezes sim.
    if (Math.abs(cat1) - mouse < Math.abs(cat2) - mouse) {
      return 'cat1';
    }
    if (Math.abs(cat2) - mouse < Math.abs(cat1) - mouse) {
      return 'cat2';
    }
    //
  }
  
  // Desafio 8
  function fizzBuzz(arrayNumber) {
    let arrayFizzBuzz = [];
    for (let index in arrayNumber) {
      if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
        arrayFizzBuzz.push('fizzBuzz');
      }
      if (arrayNumber[index] % 3 !== 0 && arrayNumber[index] % 5 !== 0) {
        arrayFizzBuzz.push('bug!');
      }
      if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 !== 0) {
        arrayFizzBuzz.push('fizz');
      }
      if (arrayNumber[index] % 5 === 0 && arrayNumber[index] % 3 !== 0) {
        arrayFizzBuzz.push('buzz');
      }
    }
    return arrayFizzBuzz;
  }
  
  // Desafio 9
  function encode(stringVowels) {
    // Aprendi o comando .split através do site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split.
    let stringVowelsSplit = stringVowels.split('');
    //
    for (let index in stringVowelsSplit) {
      if (stringVowelsSplit[index] === 'a') {
        stringVowelsSplit[index] = 1;
      }
      if (stringVowelsSplit[index] === 'e') {
        stringVowelsSplit[index] = 2;
      }
      if (stringVowelsSplit[index] === 'i') {
        stringVowelsSplit[index] = 3;
      }
      if (stringVowelsSplit[index] === 'o') {
        stringVowelsSplit[index] = 4;
      }
      if (stringVowelsSplit[index] === 'u') {
        stringVowelsSplit[index] = 5;
      }
    }
    // Aprendi o comando .join através do site https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join.
    return stringVowelsSplit.join('');
    //
  }
  
  function decode(stringNumbers) {
    let stringNumbersSplit = stringNumbers.split('');
    console.log(stringNumbersSplit);
  
    for (let index in stringNumbersSplit) {
      if (stringNumbersSplit[index] === '1') {
        stringNumbersSplit[index] = 'a';
      }
      if (stringNumbersSplit[index] === '2') {
        stringNumbersSplit[index] = 'e';
      }
      if (stringNumbersSplit[index] === '3') {
        stringNumbersSplit[index] = 'i';
      }
      if (stringNumbersSplit[index] === '4') {
        stringNumbersSplit[index] = 'o';
      }
      if (stringNumbersSplit[index] === '5') {
        stringNumbersSplit[index] = 'u';
      }
    }
    return stringNumbersSplit.join('');
  }
  
  // Desafio 10
  
  function techList(arrayLista, name) {
    let objetosLista = [];
  
    for (let index of arrayLista) {
      objetosLista.push({
        tech: index,
        name,
      });
    }
    // Retirei esta parte do código do site https://receitasdecodigo.com.br/web/como-ordenar-um-array-de-objetos-com-array-sort.
    objetosLista.sort(function (a, b) {
      return a.tech < b.tech ? -1 : 1;
    });
    //
  
    if (objetosLista.length === 0) {
      return 'Vazio!';
    }
    return objetosLista;
  }