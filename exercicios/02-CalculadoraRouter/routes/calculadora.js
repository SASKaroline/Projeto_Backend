// Importar o express
const e = require('express')
const express = require('express')
// Criar um router(Roteador)
const router = express.Router()

// Mapeamento das rotas e implemento a lógica

//SOMA
router.get('/soma', (req, res, next) => {
    const primeiroNumero = parseFloat(req.query.primeiroNumero)
    const segundoNumero = parseFloat(req.query.segundoNumero)

    // Validar se os parâmetros existem
    if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    const soma = primeiroNumero + segundoNumero

    res.json({ soma })
})

//subtração
router.get('/subtracao', (req, res, next) => {
    const primeiroNumero = parseFloat(req.query.primeiroNumero)
    const segundoNumero = parseFloat(req.query.segundoNumero)

    // Validar se os parâmetros existem
    if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    const subtracao = primeiroNumero - segundoNumero

    res.json({ subtracao })
})

//multiplicacao
router.get('/multiplicacao', (req, res, next) => {
    const primeiroNumero = parseFloat(req.query.primeiroNumero)
    const segundoNumero = parseFloat(req.query.segundoNumero)

    // Validar se os parâmetros existem
    if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    const multiplicacao = primeiroNumero * segundoNumero

    res.json({ multiplicacao })
})

//divisao
router.get('/divisao', (req, res, next) => {
    const primeiroNumero = parseFloat(req.query.primeiroNumero)
    const segundoNumero = parseFloat(req.query.segundoNumero)

    // Validar se os parâmetros existem
    if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    if ( segundoNumero === 0){
        return 'Erro: Divisão por zero!';
    }

    const divisao = primeiroNumero / segundoNumero

    res.json({ divisao })
})

// Ao quadrado
router.get('/aoQuadrado', (req, res, next) => {
    const numero = parseFloat(req.query.numero)

    // Validar se os parâmetros existem
    if(isNaN(numero)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    const aoQuadrado = numero ** 2

    res.json({ aoQuadrado })
})

// Raiz quadrada
router.get('/raizQuadrada', (req, res, next) => {
    const numero = parseFloat(req.query.numero)

    // Validar se os parâmetros existem
    if(isNaN(numero)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    const raizQuadrada = numero ** 0.5

    res.json({ raizQuadrada })
})

module.exports = router