// const imgs = document.querySelectorAll('img');
// console.log(imgs)

// imgs.forEach(function(item, index, array){
//    // console.log(item, index, array)
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
//   console.log(item);
});

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
   console.log(item)
});