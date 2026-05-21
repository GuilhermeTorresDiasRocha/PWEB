function validarDados(){
    const name = document.getElementById("in_name").value;
    const mail = document.getElementById("in_mail").value;
    const comment = document.getElementById("in_comment").value;
    const rdbtns = document.nomeform.elements["rdbtn"];
    let rdbtnChecked;

    if(name.length < 10){
        alert("O nome deve ter ao menos 10 caracteres.");
        document.getElementById("in_name").focus();
        return;
    }
    else if(mail == "" || mail.indexOf("@") == -1 || mail.indexOf(".") == -1){
        alert("Email preenchido incorretamente.");
        document.getElementById("in_mail").focus();
        return;
    }
    else if(comment.length < 20){
        alert("O comentário deve ter no mínimo 20 caracteres.");
        document.getElementById("in_comment").focus();
        return;
    }
    else{
        for(let i = 0; i < rdbtns.length; i++){
            if(rdbtns[i].checked){
                rdbtnChecked = rdbtns[i].value;
            }
        }

        if(rdbtnChecked == "no")
            alert("Que bom que você voltou a visitar esta página!")
        else if(rdbtnChecked == "yes")
            alert("Volte sempre à esta página!");
        else
            alert("A pesquisa é obrigatória.");
    }
}