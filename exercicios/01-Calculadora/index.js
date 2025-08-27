let prompt = require("prompt-sync")()

let {somar, multiplicar, dividir, subtrair, aoQuadrado, raizQuadrada} = require('./calculadora')

let a = parseFloat(prompt("Digite o primeiro valor: "))
let b = parseFloat(prompt("Digite o segundo valor: "))

const calc = require('./calculadora'); 

console.log(`Soma: ${calc.somar(a,b)}`)
console.log(`Subtração: ${calc.subtrair(a,b)}`)
console.log(`Multiplicar: ${calc.multiplicar(a,b)}`)
console.log(`Dividir: ${calc.dividir(a,b).toFixed(2)}`)
console.log(`Ao Quadrado: ${calc.aoQuadrado(a,b)}`)
console.log(`Raiz Quadrada: ${calc.raizQuadrada(a,b)}`)