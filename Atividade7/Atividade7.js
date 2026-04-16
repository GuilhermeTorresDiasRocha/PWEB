let human = prompt("Pedra, Papel ou Tesoura?").toUpperCase();

let pc;
let check = Math.floor(Math.random() * 10);
if(check <= 3)
    pc = "Pedra";
else if (check <= 6 )
    pc = "Papel";
else
    pc = "Tesoura";

if(pc == "Pedra"){
    if(human == "PEDRA")
        alert(`O computador escolheu ${pc}: Empate.`);
    else if (human == "PAPEL")
        alert(`O computador escolheu ${pc}: Você venceu!`);
    else
        alert(`O computador escolheu ${pc}: Você perdeu.`);
}
else if (pc == "Papel"){
    if(human == `PEDRA`)
        alert(`O computador escolheu ${pc}: Você perdeu.`);
    else if (human == "PAPEL")
        alert(`O computador escolheu ${pc}: Empate`);
    else
        alert(`O computador escolheu ${pc}: Você venceu!`);
}
else{
    if(human == "PEDRA")
        alert(`O computador escolheu ${pc}: Você venceu`);
    else if (human == "PAPEL")
        alert(`O computador escolheu ${pc}: Você perdeu.`);
    else
        alert(`O computador escolheu ${pc}: Empate.`);
}