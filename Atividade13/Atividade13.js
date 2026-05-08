function chgOpen(){
    let x = document.getElementById("header");
    x.innerHTML = "Open Windows";

    x = document.getElementById("windowImage");
    x.src = "./images/open.png";
}

function chgClosed(){
    let x = document.getElementById("header");
    x.innerHTML = "Closed Windows";

    x = document.getElementById("windowImage");
    x.src = "./images/closed.png";
}

function chgBroken(){
    let x = document.getElementById("header");
    x.innerHTML = "Broken Windows";

    x = document.getElementById("windowImage");
    x.src = "./images/win11.png";
}