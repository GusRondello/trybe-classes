const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

/* saudacoes[1](saudacoes[0]); // Olá  */

const [ digaOlá, funcaoOlá ] = saudacoes

funcaoOlá(digaOlá);

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const [ comidaCerta ] = bebida;
const [ animalCerta ] = comida;
const [ bebidaCerta ] = animal;

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [ seis ] = numerosPares[3];
const [ oito ] = numerosPares[4];
const [ dez ] = numerosPares[5];
const [ doze ] = numerosPares[6];

const pares = [seis, oito, dez, doze];
console.log(pares);
// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo