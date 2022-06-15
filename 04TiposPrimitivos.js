/**
 * string
 * number
 * boolean
 * undefined
 * null
 * object
 */

let nome = 'Xavier';
nome = 17;
let c = null;

// Valor String:
let nome1 = 'Xavier';
let nome2 = 'Ronaldo';
let nome3 = 'Carlos';
const templateString = `Meu nome é ${nome1}, não ${nome2}. Se fode ai ${nome3}!`;
console.log(templateString);

// Valor NUMBER
const number = 1;
const pi = 3.14;
const exp = 5e6;
console.log(number, pi, exp);

// Valor BOOLEAN
const isJavaScript = true;
const isJava = false;
console.log(isJavaScript, isJava);

// Valor OBJECT
let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Xavier',
    idade: 17,
    isStudant: true,
}
console.log(pessoa);

// TYPEOF
console.log(typeof number, number);
console.log(1 === '1');