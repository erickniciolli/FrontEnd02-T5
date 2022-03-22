window.onload = alert("Página pronta!")

let botaoEnviar=document.getElementById("botaoEnviar")
let h1=document.querySelector("h1")

botaoEnviar.addEventListener("click", function(evento) {

    evento.preventDefault();
    console.log("O botão 'Enviar' foi clicado");
    
});

h1.onmouseover = function () {
    h1.style.color = "blue"
}

h1.onmouseout = function () {
    h1.style.color = "green"
}

function contador () {
    let conta=0;
    if onkeydown==true {
        conta=conta+1
        console.log(conta)
    }
    
}