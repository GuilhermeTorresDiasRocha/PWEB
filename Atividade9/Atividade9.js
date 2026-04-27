function maior(a, b, c){
    return Math.max(a, b, c);
}

function ordemCrescente(a){
    const aux = a;
    aux.sort();
    alert(`${a[0]} ${a[1]} ${a[2]}`);
}

function isPalindromo(s){
    s = s.replaceAll(" ", "");
    s = s.toUpperCase();

    let j = s.length - 1;
    for(i = 0; i < s.length / 2; i++){
        if(s[i] != s[j])
            return false;

        j--;
    }
    return true;
}

function subconjunto(str1, str2){
    if(a == undefined || a == "" || b == undefined || b == "")
        return "Erro";

    if(str1.includes(str2))
        return `${str2} é um subconjunto de ${str1}`;
    else
        return `${str2} não é um subconjunto de ${str1}`;
}

function data(str){
    let aux = new Date(str);
    let d = aux.getDay();

    switch(d){
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-Feira";
        case 2:
            return "Terça-Feira";
        case 3:
            return "Quarta-Feira";
        case 4:
            return "Quinta-Feira";
        case 5:
            return "Sexta-Feira";
        case 6:
            return "Sábado";
    }
}


    let a = prompt("Primeiro numero:");
    let b = prompt("Segundo numero:");
    let c = prompt("Terceiro numero:");

    alert(maior(a, b, c));

    ordemCrescente([a, b, c]);

    let str = prompt("Nome: ");
    let r = isPalindromo(str);
    
    if(r)
        alert(`${str} é palíndromo`);
    else
        alert(`${str} não é palíndromo`);

    str = prompt("Primeira Frase:");
    let str2 = prompt("Segunda Frase:");

    alert(subconjunto(str, str2));

    str = prompt("Data:");
    alert(data(str));