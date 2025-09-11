// Importar o express
const express = require('express')
// Criar instância do express
const app = express()

// importar o lib cors
const cors = require('cors')
// Desabilita a consfiguração de cors
// Habilitada o browser para mandar requisição para o seu backens local
app.use(cors())

// Middlewares (Intermediário)
// Intermediário de log
app.use((req, res, next) => {
    console.log("---------#####---------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

// Importando o router calculadora de rota
const calculadoraRouter = require('./routes/Calculadora')
// Toda requisição que chegar na rota 
app.use('/calculadora', calculadoraRouter)


// Executar aplicação 
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})