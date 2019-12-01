for (var numero = 0; numero <= 4; numero++){
   console.log(numero);
 }
 
 var i = 0;
 while (i < 10) {
   console.log(i);
   i = i + 5;
 }
 // Retorna de 0 a 9 no console
 
 var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
 
 for (var item = 0; item < videoGames.length; item++){
   console.log(videoGames[item])
   if(videoGames[item] === 'PS4'){
     break;
   }
 }
 
 var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];
 
 
 frutas.forEach(function(fruta, index, array) {
   console.log(fruta, index, array);
 });
 
 var numero = 0;
 var maximo = 20;
 for(;numero < maximo;) {
   console.log(numero);
   numero++;
 }
 