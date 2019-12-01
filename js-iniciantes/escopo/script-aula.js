var carro = 'Fusca';

function mostrarCarro() {
   console.log(carro);
}
 
mostrarCarro();
console.log(carro);

if(true){
   let mes = 'dezembro';
   console.log(mes);
}

{
   var carro = 'Fusca';
   const ano = 2018;
}
console.log(carro); // Carro
// console.log(ano); // erro ano is not defined


// for(let i = 0; i < 10; i++) {
//    console.log(`Número ${i}`)
// }
// console.log(i * 10)

const semana = 'Sexta';
// semana = 'quinta';

const data = {
   dia: 20,
   mes: 'Agosto',
   ano: 2019 
}

data.ano = 2018
