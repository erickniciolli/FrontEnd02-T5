var botao = document.getElementById("botao");
var body = document.querySelector('body');



function escuro () {
  if (botao.checked) {
  body.style.backgroundColor = "#2196F3"
  }
}

// botao.addEventListener('click', () => {
    // adiciona a classe `night-mode` ao html
//     document.documentElement.classList.toggle('botao')
//   })