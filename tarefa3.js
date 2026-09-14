
const Big = require("big.js");
const Decimal = require("decimal.js");


const preco = new Big("19.99");
const quantidade = new Big("3");


const totalCompra = preco.times(quantidade);
console.log("Total da compra (Big.js):", totalCompra.toString());



Decimal.set({ precision: 50 });


const raizDeDois = new Decimal(2).sqrt();
console.log("Raiz quadrada de 2 (50 casas):", raizDeDois.toString());


const seno1 = new Decimal(1).sin();
const logNatural10 = new Decimal(10).ln();
const doisElevadoMeio = new Decimal(2).pow(0.5); 

console.log("sin(1):", seno1.toString());
console.log("ln(10):", logNatural10.toString());
console.log("2^0.5:", doisElevadoMeio.toString());
