
// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((item) => {
  item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item) => {
  item.classList.remove('ativo');
});

menuItens[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const todasImgs = document.querySelectorAll('img');
todasImgs.forEach((img) => {
  const possuiAtributoAlt = img.hasAttribute('alt');
  console.log(img, possuiAtributoAlt);
})

// Modifique o href do link externo no menu
const linkExternoMenu = document.querySelector('a[href^="http"]');
linkExternoMenu.setAttribute('href', 'https://www.google.com')
