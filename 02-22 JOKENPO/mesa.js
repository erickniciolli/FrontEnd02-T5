let pontosJogador=0;
let pontosComputador=0;
let resultado=true;

while (resultado=true) {
    let escolhaJogador=parseInt(prompt("0 - pedra, 1 - papel ou 2 - tesoura?"))
    let escolhaComputador=parseInt(Math.random() * 3 + 1)
    switch (escolhaJogador) {
        case 0:
            if (escolhaComputador==1) {
                pontosComputador++;
                alert("Você=Pedra, Computador=Papel. Vitória do computador")
            }
            else if (escolhaComputador==2) {
                pontosJogador++;
                alert("Você=Pedra, Computador=Papel. Vitória sua")
            }
            else {
                alert("Deu empate")
            }
            break;
        case 1:
            if (escolhaComputador==2) {
                pontosComputador++;
                alert("Você=Papel, Computador=Tesoura. Vitória do computador")
            }
            else if (escolhaComputador==0) {
                pontosJogador++;
                alert("Você=Papel, Computador=Pedra. Vitória sua")
            }
            else {
                alert("Deu empate")
            }
            break;
        case 2:
            if (escolhaComputador==0) {
                pontosComputador++;
                alert("Você=Tesoura, Computador=Pedra. Vitória do computador")
            }
            else if (escolhaComputador==1) {
                pontosJogador++;
                alert("Você=Tesoura, Computador=Papel. Vitória sua")
            }
            else {
                alert("Deu empate")
            }
            break;
        }
    
    if (pontosJogador == 2) {
        alert("Você ganhou duas partidas e venceu a batalha!");
        resultado=false;
        break;
    } 
    else if (pontosComputador == 2) {
        alert("O computador ganhou duas partidas e venceu a batalha...");
        resultado=false
        break;
    }
}