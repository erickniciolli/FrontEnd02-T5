
// Modificando Fundo

let botao = document.getElementById('botao')
let body = document.querySelector('body');


if (document.getElementById("botao").checked) {
  body.style.backgroundColor = 'rgb(39, 39, 39)';
  } else {

   body.style.backgroundColor = 'rgb(219, 219, 219)';
    }





// Modificando h1 - Titulo

const titleDark = document.querySelector('h1');

titleDark.classList.toggle('titleDark');

//modificando itens
const cardsDark = document.querySelectorAll('.item');

cardsDark.forEach (element => {
    element.classList.toggle('cardsDark')
})

//  Modificações nos textos dos itens e cabeçalhos dos itens

const cardTextDark = document.querySelectorAll('.item h2, p');

cardTextDark.forEach (element => {
    element.classList.toggle('cardTextDark')
}); 