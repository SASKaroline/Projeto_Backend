const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())

// Variáveis de ambiente
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

// URL de conexão
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

// Conexão com MongoDB
mongoose.connect(url)
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch(err => console.log("❌ Erro ao conectar no MongoDB: ", err))

// Model de Livro
const LivroModel = mongoose.model('Livros', new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: String,
  ano: Number,
  preco: Number
}))

// CREATE - Adicionar novo livro
app.post('/livros', async (req, res) => {
  const livro = req.body
  if (!livro.titulo || !livro.autor) {
    return res.status(400).json({ erro: "Os campos título e autor são obrigatórios!" })
  }

  try {
    const novoLivro = await LivroModel.create(livro)
    res.status(201).json(novoLivro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar livro: " + err })
  }
})

// READ - Listar todos os livros
app.get('/livros', async (req, res) => {
  try {
    const livros = await LivroModel.find()
    res.json(livros)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao listar livros: " + err })
  }
})

// READ BY ID - Buscar livro por ID
app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await LivroModel.findById(req.params.id)
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado!" })
    res.json(livro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar livro: " + err })
  }
})

// UPDATE - Atualizar livro
app.put('/livros/:id', async (req, res) => {
  const dados = req.body
  if (!dados.titulo || !dados.autor) {
    return res.status(400).json({ erro: "Os campos título e autor são obrigatórios!" })
  }

  try {
    const livroAtualizado = await LivroModel.findByIdAndUpdate(req.params.id, dados, { new: true })
    if (!livroAtualizado) return res.status(404).json({ erro: "Livro não encontrado!" })
    res.json(livroAtualizado)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar livro: " + err })
  }
})

// DELETE - Remover livro
app.delete('/livros/:id', async (req, res) => {
  try {
    const livroRemovido = await LivroModel.findByIdAndDelete(req.params.id)
    if (!livroRemovido) return res.status(404).json({ erro: "Livro não encontrado!" })
    res.json({ mensagem: "Livro removido com sucesso!" })
  } catch (err) {
    res.status(500).json({ erro: "Erro ao remover livro: " + err })
  }
})

// Inicializar servidor
app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000")
})
