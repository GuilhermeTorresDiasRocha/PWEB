let nome;
let n1;
let n2;
let n3;
let n4;

nome = prompt("Nome:");
n1 = parseFloat(prompt("Nota 1:"));
n2 = parseFloat(prompt("Nota 2:"));
n3 = parseFloat(prompt("Nota 3:"));
n4 = parseFloat(prompt("Nota 4:"));

let media = (n1 + n2 + n3 + n4) / 4;

alert(`Média aritmética: ${media.toFixed(2)}`);