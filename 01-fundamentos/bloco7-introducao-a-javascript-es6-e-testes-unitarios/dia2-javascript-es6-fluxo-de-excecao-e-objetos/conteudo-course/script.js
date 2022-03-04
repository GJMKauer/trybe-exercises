// THROW E TRY/CATCH

// // Arrow function que retorna a soma de dois valores.
// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, 3)); // Resultado: 5

// --

// // E se o usuário inserir uma string?
// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, "3")); // resultado: 23

// --

// // Para isso, colocamos uma condicional que impede isso.
// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser numéricos';
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3')); // Resultado: Os valores devem ser numéricos.

// --

// Ainda assim, a função de "soma" está trazendo uma string, enquanto deveria trazer um número. Portanto, podemos utilizar um FLUXO DE EXCEÇÃO, que interrompe o funcionamento do código. Para isso, utilizamos o THROW:

// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3')); // Interrompe o código com uma linha de erro.

// --

// Ainda é possível melhorar o fluxo do código. Precisamos, por exemplo, capturar esse erro para melhor tratá-lo. Para isso, usamos o TRY/CATCH. Enquanto o TRY tenta execturar o código com sucesso, o CATCH é chamado caso ocorra um erro. Já aproveitamos também para refatorar a função SUM para que ela não tenha funcionalidades demais.

// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
// };

// const sum = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     throw error.message;
//   }
// };

// console.log(sum(2, '3')); // Interrompe o código "atirando" a exceção em algum lugar.
// // Agora sim! Você criou um fluxo para quando nosso código é executado com sucesso, representado pelo bloco TRY, que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber, que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o THROW, que é capturado pelo CATCH no fluxo de exceção, através da VARIÁVEL error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message, uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente.

// ----------

// OBJETOS: PARTE 1 - ADICIONANDO NOVAS CHAVES (KEYS)

// // Objeto que contém as informações de um cliente de uma loja.
// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// --

// // Imagine que queremos adicionar uma nova propriedade para armazenar seu sobrenoma. Uma das formas já vistas seria reescrever o objeto, adicionando uma nova propriedade lastName.
// const customer = {
//   firstName: 'Roberto',
//   lastName: 'Faria', // Propriedade adicionada.
//   age: 22,
//   job: 'Teacher',
// };

// --

// // Existem outras formas de adicionar essa propriedade de maneira muito mais simples e prática, sem a necessidade de reescrever o objeto e suas propriedades:
// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1); // { firstName: 'Roberto', age: 22, job: 'Teacher' }

// customer1.lastName = 'Faria';
// console.log(customer1); // { firstName: 'Roberto', age: 22, job: 'Teacher', lastName: 'Faria' }

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2); // { firstName: 'Maria', age: 23, job: 'Medic' }
// customer2['lastName'] = 'Silva';
// console.log(customer2); // { firstName: 'Maria', age: 23, job: 'Medic', lastName: 'Silva' }
// // Nos exemplos acima, ao invés de reescrever o objeto inteiro, apenas adicionamos uma nova propriedade, utilizando as sintaxes abaixo:
// // objeto.nomeDaNovaPropriedade; ou
// // objeto[variávelQueContemONomeDaPropriedade].

// --

// // Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil. Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName'; // Cria uma variável que recebe o nome da nova chave que queremos adicionar.
// const lastName = 'Ferreira'; // Cria uma variável que recebe o valor da nova chave que queremos adicionar.
// customer[newKey] = lastName; // Cria uma nova chave, informando o valor da variável newKey (chave) e o valor da variável lastName (valor).

// newKey = 'fullName'; // Reatribui o valor da variável newKey para adicionar uma nova chave no objeto.
// const fullName = `${customer.firstName} ${customer.lastName}`; // Cria uma variável que recebe o valor da nova chave que queremos adicionar.
// customer[newKey] = fullName; // Cria uma nova chave, informando o valor da variável newKey (chave) e o valor da variável fullName (valor).
// console.log(customer); // { firstName: 'Roberto', age: 22, job: 'Teacher', lastName: 'Ferreira', fullName: 'Roberto Ferreira' }

// --

// // Agora, crie uma função que recebe três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

// const novaChave = (objeto, chave, valor) => {
//   const user = {
//     firstName: 'Gabriel',
//     age: 23,
//     job: 'Student',
//   };

//   let newKey = chave;
//   const lastName = valor;
//   user[newKey] = lastName;

//   console.log(user);
//   return user;
// };
// novaChave('user', 'lastName', 'Kauer');

// ----------

// OBJETOS: PARTE 2 - OBJECT.KEYS

// // Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto.
// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// // Com o que já aprendemos até o momento, poderíamos utilizar a estrutura de repetição FOR...IN. Por exemplo:
// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   author: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(property);
//   // name
//   // genre
//   // author
//   // favoriteCharacter
//   // quote
//   // seasons
// }

// // Porém, há uma maneira muito mais robusta de trabalhar com objetos e seus valores. O método OBJECT.KEYS é utilizado para listar as chaves de um objeto, retornando-as em um array. Cada entrada do array retornado será uma STRING com o valor de cada chave do objeto. Assim:
// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// console.log(Object.keys(coolestTvShow)); // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

// // Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora. Tente criar uma função que exiba as habilidades do objeto STUDENT. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".
// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listofSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for (const index in arrayOfSkills) {
//         console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
// }
// console.log('Estudante 1');
// listofSkills(student1);

// console.log('Estudante 2');
// listofSkills(student2);
// // Obs: peguei do gabarito direto do Course porque não tinha entendido muito bem o que o exercício pedia.

// ----------

// OBJETOS: PARTE 3 - OBJECT.VALUES

// // O OBJECT.VALUES segue a mesma lógica que o OBJECT.KEYS, a diferença está em que ele lista os valores de cada chave. Voltando ao exercício anterior, como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow? Utilizando o FOR...IN seria algo como:
// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
//   // BoJack Horseman
//   // adult animation
//   // Raphael Bob-Waksberg
//   // Princess Carolyn
//   // Princess Carolyn always lands on her feet.
//   // 6
// }

// --

// // Refatorando com o Object.values:
// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// console.log(Object.values(coolestTvShow)); // [ 'BoJack Horseman', 'adult animation', 'Raphael Bob-Waksberg', 'Princess Carolyn', 'Princess Carolyn always lands on her feet.', 6 ]

// --

// // Para fixar melhor, veja abaixo mais um exemplo em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores. Veja como fica muito mais ácil objetos os valores de um objeto com o uso do Object.values.
// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// // Sem Object.values
// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for (skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// const listSkillsValuesWithValues = (student) => Object.values(student);

// console.log(listSkillsValuesWithValues(student));
// // Observe como a função listSkillsValuesWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.

// ----------

// OBJETOS: PARTE 4 - OBJECT.ENTRIES

// // Outro método muito útil para se trabalhar com objetos é o Object.entries. Um pouco diferente dos métodos apresentados anteriormente, este retorna um ARRAY cujos elementos são também ARRAYS para cada conjunto chave e valor do objeto. Exemplo:
// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// console.log(Object.entries(coolestTvShow));

// // [
// //   [ 'name', 'BoJack Horseman' ],
// //   [ 'genre', 'adult animation' ],
// //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
// //   [ 'favoriteCharacter', 'Princess Carolyn' ],
// //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
// //   [ 'seasons', 6 ]
// // ]
// // Como pode ver, ao aplicar o OBJECT.ENTRIES no nosso objeto, o retorno foi um array de arrays. Onde a primeira entrada de cada array é a CHAVE DO OBJETO em formato de STRING, e o segundo valor é o seu respectivo VALOR, que pode ser uma string ou outro tipo de dado, como por exemplo o número de temporadas do exemplo que é um NUMBER.

// --

// // Mais um exemplo:
// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// // [
// //   ['França', 'Paris'],
// //   ['Brasil', 'Brasília'],
// //   ['Espanha', 'Madrid'],
// //   ['Portugal', 'Lisboa'],
// // ];
// // O retorno é um array e cada um dos seus elementos é um outro array com apenas dois dados, a CHAVE e o VALOR. Para ver os valores separadamente, adicione um for e execute-o novamente.
// for (index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// }
// // --------
// // País: França
// // Capital: Paris
// // --------
// // País: Brasil
// // Capital: Brasília
// // --------
// // País: Espanha
// // Capital: Madrid
// // --------
// // País: Portugal
// // Capital: Lisboa

// ----------

// OBJETOS: PARTE 5 - OBJECT.ASSIGN

// // Esse método é utilizado para copiar todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:
// // A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// // Como pode ver, ele recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino. Veja o exemplo abaixo:

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family);
// console.log(person);

// // Output
// // { name: 'Alberto',
// //     lastName: 'Gomes',
// //     age: 23,
// //     job: 'engenheiro',
// //     children: [ 'Maria', 'João' ],
// //     wife: 'Ana'
// // }

// // Como pode perceber, o método OBJECT.ASSIGN adicionou as propriedades de INFO e de FAMILY ao objeto PERSON. Observe também que a chave AGE aparece tanto em person como em info, e é SOBRESCRITA pelo valor contido em info. Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, de forma que a propriedade do objeto destino sempre utilizará o último valor disponível.

// --

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// // Como pode perceber, o CLONE é exatamente igual ao objeto PERSON, e se você mudar qualquer propriedade nele, observará que o objeto PERSON também é modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método OBJECT.ASSIGN é o próprio objeto destino, que foi alterado adicionando as novas propriedades.

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// --

// // Para mudar os dados do objeto CLONE sem modificar o objeto inicial, temos que passar como primeiro parâmetro do OBJECT.ASSIGN um objeto vazio {} e armazenar seu retorno em uma nova variável:

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({}, person, lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson); //{ name: 'Gilberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto' }
// // Desse jeito, apenas o objeto newPerson foi modificado.