const qtdPessoas = 45;
let maior = 0;
let menor = 999;
let media = 0;
let qtdP = 0;
let qtdOB = 0;
let numMasc = 0;
let numFem = 0;
let numOutros = 0;

for(i = 0; i < qtdPessoas; i++){
    let aux = prompt("idade:");

    if(aux < menor)
        menor = aux;
    if(aux > maior)
        maior = aux;

    media += aux;

    aux = prompt("Sexo:");

    if(aux == 'F')
        numFem++;
    else if(aux == 'M')
        numMasc++;
    else
        numOutros++;

    aux = prompt("Opinião:");
    if(aux == 1)
        qtdP++;
    else if(aux == 3 || aux == 4)
        qtdOB++;
}

alert(`Média de idade: ${media/qtdPessoas}\n
    Pessoa mais velha: ${maior}\n
    Pessoa mais nova: ${menor}\n
    Quantidade Pessimo: ${qtdP}\n
    Porcentagem Otimo/Bom: ${(qtdOB/qtdPessoas) * 100}%\n
    Homens: ${numMasc}\n
    Mulheres: ${numFem}\n
    Outros: ${numOutros}`);
