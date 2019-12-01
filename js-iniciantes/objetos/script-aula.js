var pessoa = {
   nome: 'Kaio',
   idade: 20,
 }
 
 var quadrado = {
   lados: 4,
   area(lado) {
     return lado * lado;
   },
   perimetro(lado){
     return this.lados * lado;
   },
 }
 
 console.log(quadrado.area(4));
 console.log(quadrado.perimetro(2));
 
 console.log(Math.random());
 
 var menu = {
   width: 800,
   height: 50,
   backgroundColor: '#84E',
   metadeHeight() {
     return this.height / 2;
   },
 }
 
 
 menu.backgroundColor = '#000'
 menu.color = 'blue';
 menu.esconder = function(){
   console.log('escondi')
 }
 
 var bg = menu.backgroundColor;