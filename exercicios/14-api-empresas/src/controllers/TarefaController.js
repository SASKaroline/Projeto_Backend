const express = require('express');
const TarefaModel = require('../models/TarefaModel');
const { createTarefaSchema, updateTarefaSchema } = require('../validators/TarefaValidator');
const router = express.Router();

// Criar Tarefa
router.post('/', async (req, res) => {
  try {
    await createTarefaSchema.validate(req.body, { abortEarly: false });
    const novaTarefa = await TarefaModel.create(req.body);
    const tarefaPopulada = await novaTarefa.populate(['responsavel', 'projeto']);
    res.status(201).json(tarefaPopulada);
  } catch (error) {
    res.status(400).json({ erro: error.errors || error.message });
  }
});

// Listar todas as tarefas (com populate)
router.get('/', async (req, res) => {
  try {
    const tarefas = await TarefaModel.find().populate(['responsavel', 'projeto']);
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Buscar tarefa por ID (com populate)
router.get('/:id', async (req, res) => {
  try {
    const tarefa = await TarefaModel.findById(req.params.id).populate(['responsavel', 'projeto']);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido ou erro na busca.' });
  }
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
  try {
    await updateTarefaSchema.validate(req.body, { abortEarly: false });
    const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate(['responsavel', 'projeto']);

    if (!tarefaAtualizada)
      return res.status(404).json({ erro: 'Tarefa não encontrada para atualização.' });

    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    res.status(400).json({ erro: error.errors || error.message });
  }
});

// Deletar tarefa
router.delete('/:id', async (req, res) => {
  try {
    const tarefaRemovida = await TarefaModel.findByIdAndDelete(req.params.id);
    if (!tarefaRemovida)
      return res.status(404).json({ erro: 'Tarefa não encontrada para exclusão.' });
    res.status(200).json({ mensagem: 'Tarefa removida com sucesso.' });
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido ou erro ao excluir.' });
  }
});

module.exports = router;