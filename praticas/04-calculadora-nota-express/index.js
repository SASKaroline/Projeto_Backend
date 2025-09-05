// Importar o express
const express = require('express')
// Criar instância do express
const app = express()

// Middlewares (Intermediário)
// Intermediário de log
app.use((req, res, next) => {
    console.log("---------#####---------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req, res, next) => {
    // Capturar informação do usuário
    // Virão através dos parametros da requisição (query params)
    const primeiroNome = req.query.primeiroNome
    const sobreNome = req.query.sobreNome
    res.send("Olá, " + primeiroNome + " " + sobreNome + "!!!")
})

// Importando o router calculadora de rota
const calculadoraNotaRouter = require('./routes/CalculadoraNota')
// Toda requisição que chegar na rota 
app.use('/calculadora', calculadoraNotaRouter)


// Executar aplicação 
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})