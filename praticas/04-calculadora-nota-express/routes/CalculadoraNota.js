// Importar o express
const e = require('express')
const express = require('express')
// Criar um router(Roteador)
const router = express.Router()

// Mapeamento das rotas e implemento a lógica

// Calcular a nota A1
router.get('/notaA1', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    // Validar se os parâmetros existem
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    // Validar se as notas estão no intervalo correto
    if(exercicio < 0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6) {
        return res.status(400).json({ erro: "Nota fora do intervalo"})
    }

    const notaA1 = exercicio + trabalho + prova

    res.json({ notaA1 })
})

// Calcular a nota A2
router.get('/notaA2', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    // Validar se os parâmetros existem
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    // Validar se as notas estão no intervalo correto
    if(exercicio < 0 || 
        exercicio > 1 || 
        trabalho < 0 || 
        trabalho > 3 || 
        prova < 0 || 
        prova > 6) {
        return res.status(400).json({ erro: "Nota fora do intervalo"})
    }

    const notaA2 = exercicio + trabalho + prova

    res.json({ notaA2 })
})

// Calcular média final (A1 40% - A2 60%)
router.get("/media", (req, res, next) => {
    const notaA1 = parseFloat(req.query.notaA1)
    const notaA2 = parseFloat(req.query.notaA2)


    // validar se os parâmetros são números
    if(isNaN(notaA1) || isNaN(notaA2)) {
        return res.status(400).json({ erro: "Notas inválidas!!!"})
    }

    // validar se as notas estão no intervalo correto
    if(notaA1 < 0 || 
        notaA1 > 10 || 
        notaA2 < 0 || 
        notaA2 > 10 ) {
        return res.status(400).json({ erro: "Nota fora do intervalo"})
    }

    const media = (notaA1 * 0.4) + (notaA2 * 0.6)

    res.json({media})
})

module.exports = router