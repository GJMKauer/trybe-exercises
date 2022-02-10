// Parte 1 - Buscando elementos

// Exercicio 1
console.log(document.getElementById('elementoOndeVoceEsta'));

// Exercicio 2
let eOVEParent = document.getElementById('elementoOndeVoceEsta').parentNode;
eOVEParent.style.color = 'red';

// Exercicio 3
console.log(document.getElementById('primeiroFilhoDoFilho').textContent += 'Adicionando texto.');

// Exercicio 4
console.log(document.getElementById('pai').firstChild);

// Exercicio 5
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// Exercicio 6
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// Exercicio 7
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// Exercicio 8
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);


// Parte 2 - Criando elementos

// Exercício 1
let irmaoEOVE = document.getElementById('pai');
let irmaoEOVE2 = document.createElement('section');
irmaoEOVE2.id = 'irmaoDoElementoOndeVoceEsta';
irmaoEOVE.appendChild(irmaoEOVE2);


// Exercício 2
let filhoEOVE = document.getElementById('elementoOndeVoceEsta');
let filhoEOVE2 = document.createElement('section');
filhoEOVE2.id = 'filhoDoElementoOndeVoceEsta';
filhoEOVE.appendChild(filhoEOVE2);

// Exercício 3
let filhoDoFilhoEOVE = document.getElementById('primeiroFilhoDoFilho');
let filhoDoFilhoEOVE2 = document.createElement('section');
filhoDoFilhoEOVE2.id = 'filhoDoFilhoDoElementoOndeVoceEsta';
filhoDoFilhoEOVE.appendChild(filhoDoFilhoEOVE2);

// Exercício 4
console.log(document.getElementById('primeiroFilhoDoFilho').lastElementChild.parentNode.parentNode.nextElementSibling);

// Parte 3 - Removendo elementos

