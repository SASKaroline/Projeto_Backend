const express = require('express');
const Livro = require('../models/livro');
const validarID = require('../validators/IDValidator');
const { validarCriacao, validarAtualizacao } = require('../validators/LivroValidator');

const router = express.Router();

// POST /livros - criar
router.post('/', validarCriacao, async (req, res) => {
  try {
    const livro = new Livro(req.body);
    const salvo = await livro.save();
    return res.status(201).json(salvo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: ['Erro interno ao criar o livro'] });
  }
});

// GET /livros - listar todos
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find().sort({ createdAt: -1 });
    return res.json(livros);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: ['Erro interno ao listar os livros'] });
  }
});

// GET /livros/:id - buscar por id
router.get('/:id', validarID, async (req, res) => {
  try {
    const { id } = req.params;
    const livro = await Livro.findById(id);
    if (!livro) return res.status(404).json({ errors: ['Livro não encontrado'] });
    return res.json(livro);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: ['Erro interno ao buscar o livro'] });
  }
});

// PUT /livros/:id - atualizar
router.put('/:id', validarID, validarAtualizacao, async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizacao = req.body;

    const atualizado = await Livro.findByIdAndUpdate(id, dadosAtualizacao, { new: true, runValidators: true });
    if (!atualizado) return res.status(404).json({ errors: ['Livro não encontrado'] });
    return res.json(atualizado);
  } catch (err) {
    console.error(err);
    // Caso de erro de validação do mongoose (p.ex. tipo incorreto) - enviar menssagem clara
    return res.status(500).json({ errors: ['Erro interno ao atualizar o livro'] });
  }
});

// DELETE /livros/:id - remover
router.delete('/:id', validarID, async (req, res) => {
  try {
    const { id } = req.params;
    const removido = await Livro.findByIdAndDelete(id);
    if (!removido) return res.status(404).json({ errors: ['Livro não encontrado'] });
    return res.json({ message: 'Livro removido com sucesso' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: ['Erro interno ao remover o livro'] });
  }
});

module.exports = router;
