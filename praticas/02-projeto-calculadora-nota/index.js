// importando a lib prompt-sync
let prompt = require('prompt-sync')();

// usar a lib do prompt-sync
let nome = prompt("Qual é o seu nome? ")

// usando o nome capturado pelo prompt
console.log("Olá, " + nome + "!")

//importar o modulo CalculadoraNota
let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota')

//NOTA A1
//perguntar nota de exercícios, trabalho e prova
let exerciciosA1 = parseFloat(prompt('Qual a nota de exercícios A1? '))
let trabalhoA1 = parseFloat(prompt('Qual a nota de trabalhos A1? '))
let provaA1 = parseFloat(prompt('Qual a nota de provas A1? '))
let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log(" ### Calculo da nota A1 ### ")
console.log("Nota Exercício A1: ", exerciciosA1)
console.log("Nota Trabalho A1: ", trabalhoA1)
console.log("Nota Prova A1: ", provaA1)
console.log("Nota A1 calculada: ", notaA1)

//NOTA A1
let exerciciosA2 = parseFloat(prompt('Qual a nota de exercícios A2? '))
let trabalhoA2 = parseFloat(prompt('Qual a nota de trabalhos A2? '))
let provaA2 = parseFloat(prompt('Qual a nota de provas A2? '))
let notaA2 = calcularNotaA2(exerciciosA2, trabalhoA2, provaA2)

console.log(" ### Calculo da nota A2 ### ")
console.log("Nota Exercício A2: ", exerciciosA2)
console.log("Nota Trabalho A2: ", trabalhoA2)
console.log("Nota Prova A2: ", provaA2)
console.log("Nota A2 calculada: ", notaA2)

//NOTA FINAL
let notaFinal = calcularNotaFinal(notaA1, notaA2)

console.log(" ### Calculo da nota FINAL ### ")

if (notaFinal >= 5){
    console.log("Parabéns, " + nome + "! Você foi Aprovado(a)!!!")
} else {
    console.log(nome + ", estude mais! Você foi Reprovado.")
}
