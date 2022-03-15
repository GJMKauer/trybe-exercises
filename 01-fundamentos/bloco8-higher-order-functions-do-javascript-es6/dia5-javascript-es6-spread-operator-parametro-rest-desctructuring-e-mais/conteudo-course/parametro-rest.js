// Teste de Parâmetro Rest na função Sum:

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
console.log(sum(5, 7, 9, 20, 4, 90, 7, 1, 53, 5)); // 201
