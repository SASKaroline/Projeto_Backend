//modulo de calculadora de notas

// 40% da nota
function calcularNotaA1(exercicios, trabalho, prova){
    return  exercicios + trabalho + prova
}

// 60% da nota
function calcularNotaA2(exercicios, trabalho, prova){
    return  exercicios + trabalho + prova
}

// Nota final calculada (notaA1 * 0.4) + (notaA2 * 0.6)
function calcularNotaFinal(calcularNotaA1, calcularNotaA2){
    return  (notaA1 * 0.4) + (notaA2 * 0.6) 
}

//exportar funções para o index
module.exports = {
    calcularNotaA1,
    calcularNotaA2,
    calcularNotaFinal
}