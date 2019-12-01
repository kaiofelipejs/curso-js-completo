var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log('é verdadeiro')
} else if (possuiDoutorado) {
  console.log('possui doutorado')
} else {
  console.log('nao possui nada')
}

var nome = '10kg' / 10;

if (nome) {
  console.log(nome)
} else {
  console.log('nome não existe')
}

var x = 'gato';
console.log(x !== 'gato')

var condicional = (5 - 10) && (5 + 5);
if (condicional) {
  console.log('Verdadeiro', condicional)
} else {
  console.log('Falso')
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2)
console.log(condicional2)

var corFavorita = 'Roxo';

switch (corFavorita) {
  case 'Azul':
    console.log(`Olhe para o céu`);
    break;
  case 'Amarelo':
    console.log(`Olhe para o sol`);
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break;
  default: 
    console.log(`Feche os olhos`);
}