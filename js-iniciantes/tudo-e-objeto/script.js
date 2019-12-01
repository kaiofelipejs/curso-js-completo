// nomeie 3 propriedades ou métodos de strings
var nome = 'Kaio'
nome.length;
nome.slice(1,2);
nome.split();
// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn')
//addEventListener()
//appendChild();
//getElementsByClassName();
//innerHTML;
//id;
console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function copy(){
  var copyText = document.getElementById('input')
  copyText.select();
  document.execCommand('copy');
}

