// Exercicio 1

console.log(document.getElementById('elementoOndeVoceEsta'));

// Exercicio 2
let eOVCParent = document.getElementById('elementoOndeVoceEsta').parentNode;
eOVCParent.style.color = 'red';

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