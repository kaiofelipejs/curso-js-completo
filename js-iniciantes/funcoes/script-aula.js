function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(2))

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi());

function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(60, 1.75));

function corFavorita(cor){
  if(cor === 'Azul'){
    return 'Eu gosto do céu';
  } else if(cor === 'Verde'){
    return 'Eu gosto de mato'
  } else {
    return 'Eu não gosto de cores'
  }
}

console.log(corFavorita());

addEventListener('click', function() {
  console.log('Clicou'); 
});

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80); // retorna o imc
// console.log(imc2(80, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Por favor preencha um número';
  } else if(idade >= 60){
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('60'));

function faltaVisitar(paisesVisitados){
  let totalPaises = 193; 
  return `Faltam visitar ${totalPaises - paisesVisitados} países`; 
}

console.log(faltaVisitar(20));

var profissao = 'Tech Recruiter';

function dados() {
  var nome = 'Kaio';
  var idade = 20;
  function outrosDados() {
    var endereco = 'Floripa';
    var idade = 21;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
// console.log(outrosDados()); // retorna um erro
