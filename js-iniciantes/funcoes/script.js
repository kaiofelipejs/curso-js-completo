// EXERCÍCIO
// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor){
  return !!valor;
}
console.log(verificaValor('teste'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 4;
}
console.log(perimetroQuadrado(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Kaio', 'Felipe Silva'))

// Crie uma função que verifica se um número é par

// function imparOuPar(numero){
//   if(numero % 2 != 0){
//     return 'É impar'
//   } else {
//     return 'É par'
//   }
//}
// REFACTORING
function imparOuPar(numero){
  let modulo = numero % 2; 
  if(modulo === 0){
    return true
  } else {
    return false
  }
}
console.log(imparOuPar(2342343))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
  return typeof dado;
}
console.log(tipoDado(false))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', () => {
  console.log('Kaio Felipe Silva')
});

// Corrija o erro abaixo
const totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

