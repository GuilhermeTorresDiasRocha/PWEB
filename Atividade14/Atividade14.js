function initialize(){
    document.getElementById("txtbxInput").value = "";
    document.getElementById("rd1").checked = false;
    document.getElementById("rd2").checked = false;
}

function checkSelection(){
    if(document.getElementById("rd1").checked){
        const x = document.getElementById("txtbxInput");
        x.value = x.value.toUpperCase();
    }
    if(document.getElementById("rd2").checked){
        const x = document.getElementById("txtbxInput");
        x.value = x.value.toLowerCase();
    }
}