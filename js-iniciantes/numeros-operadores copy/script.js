//Exercício
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// total = 35

// Crie duas expressões que retornem NaN
var frase = 'brincando com NaN' / 2
var nome = 'Kaio' % 5;
console.log(frase,nome);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado
var valor = 5;
console.log(++valor);

// Como dividir o peso por 2?
var numero = +'80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
var pesoPorDois = numero / 2;
console.log(pesoPorDois);
