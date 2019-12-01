// Retorne no console todas as imagens do site
const todasImg = document.getElementsByTagName('img');
console.log(todasImg)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgComecaComImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgComecaComImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2animais = document.querySelector('.animais-descricao h2');
console.log(primeiroH2animais);

//outra forma, mais otimizada abaixo

const animais = document.querySelector('.animais-descricao');
const h2animais = animais.querySelector('h2');
console.log(h2animais)

// Selecione o último p do site
const todosP = document.querySelectorAll('p');
const ultimoP = todosP.length - 1;
console.log(todosP[ultimoP])