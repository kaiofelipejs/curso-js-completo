// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
const distanciaPrimeiraImgTopo = primeiraImg.offsetTop;
// console.log(distanciaPrimeiraImgTopo);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const todasImgs = document.querySelectorAll('img');
  let soma = 0;
  todasImgs.forEach((item) => {
    soma += item.offsetWidth;
  })
  console.log(soma)
}
window.onload = function(){
  somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const todosLinks = document.querySelectorAll('a')
todosLinks.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeigth = link.offsetHeight;
  if(linkWidth >= 48 && linkHeigth >= 48){
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade');
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tamanhoBrowser = window.matchMedia('(max-width: 719px)').matches;
if(tamanhoBrowser === true){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
}
