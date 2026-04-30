const altura = prompt("Altura:");
const peso = prompt("Peso:");

alert(calcIMC(altura, peso));

function calcIMC(a, p){
    r = (p / (a * a)).toFixed(1);

    if(r < 18.5)
        return "Magreza";
    else if(r <= 24,9)
        return "Normal";
    else if (r <= 29,9)
        return "Sobrepeso";
    else if (r <= 39,9)
        return "Obesidade";
    else
        return "Obesidade Grave";
}
