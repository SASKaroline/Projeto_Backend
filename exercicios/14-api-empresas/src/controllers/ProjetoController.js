const express = require('express');
const ProjetoModel = require('../models/ProjetoModel');
const { createProjetoSchema, updateProjetoSchema } = require('../validators/ProjetoValidator');
const router = express.Router();

// Criar Projeto
router.post('/', async (req, res) => {
  try {
    await createProjetoSchema.validate(req.body, { abortEarly: false });
    const novoProjeto = await ProjetoModel.create(req.body);
    res.status(201).json(novoProjeto);
  } catch (error) {
    res.status(400).json({ erro: error.errors || error.message });
  }
});

// Listar todos os projetos
router.get('/', async (req, res) => {
  try {
    const projetos = await ProjetoModel.find();
    res.status(200).json(projetos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Buscar projeto por ID
router.get('/:id', async (req, res) => {
  try {
    const projeto = await ProjetoModel.findById(req.params.id);
    if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado.' });
    res.status(200).json(projeto);
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido ou erro na busca.' });
  }
});

// Atualizar projeto
router.put('/:id', async (req, res) => {
  try {
    await updateProjetoSchema.validate(req.body, { abortEarly: false });
    const projetoAtualizado = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!projetoAtualizado)
      return res.status(404).json({ erro: 'Projeto não encontrado para atualização.' });
    res.status(200).json(projetoAtualizado);
  } catch (error) {
    res.status(400).json({ erro: error.errors || error.message });
  }
});

// Deletar projeto
router.delete('/:id', async (req, res) => {
  try {
    const projetoRemovido = await ProjetoModel.findByIdAndDelete(req.params.id);
    if (!projetoRemovido)
      return res.status(404).json({ erro: 'Projeto não encontrado para exclusão.' });
    res.status(200).json({ mensagem: 'Projeto removido com sucesso.' });
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido ou erro ao excluir.' });
  }
});

module.exports = router;
