/**
 * @let
 * tem escopo de bloco {}
 * pode ser atualizado, mas não declarado novamente
 */

let nome = 'Gabriel';
let nome2 = 'Xavier';
nome = 'Marcos'

console.log(nome, nome2);

function newFunction(){
    let nome = 'Adriel';
    console.log(nome, nome2);
}

newFunction();