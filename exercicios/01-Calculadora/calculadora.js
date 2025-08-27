function somar (a, b) {
    return a + b
}

function subtrair (a, b) {
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

function dividir (a, b) {
    if ( b === 0){
        return 'Erro: Divisão por zero!';
    }
    return a / b
}

function aoQuadrado(a) {
    return a ** 2
}

function raizQuadrada(a) {
    return a ** 0.5
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada
}