let adicionar = document.createElement('div');
let container = document.querySelector('.container');

// let maisAnimais = parseInt(prompt("Deseja adicionar outro animal? Digite 0 para sim, 1 para não"))
console.log(container[1].innerHTML);

function adicionarAnimais () {
    let numero = parseInt(prompt("Escolha um felino para adicionar as informações. 1 - tigre, 2 - leão, 3 - leopardo, 4 - pantera negra, 5 - jaguar, 6 - guepardo"));
    adicionar.innerHTML = container[(numero-1)];
    container.appendChild(adicionar);
}




// if (maisAnimais==1) {
//     pergunta==1;
    
// }
