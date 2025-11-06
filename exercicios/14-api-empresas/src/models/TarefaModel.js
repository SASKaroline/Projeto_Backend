const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    descricao: {
      type: String,
      required: true,
      trim: true,
    },
    dataInicio: {
      type: Date,
      required: true,
    },
    dataFim: {
      type: Date,
      required: true,
    },
    responsavel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Funcionarios',
      required: true,
    },
    projeto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Projetos',
      required: true,
    },
  },
  { timestamps: true }
);

const TarefaModel = mongoose.model('Tarefas', TarefaSchema);
module.exports = TarefaModel;