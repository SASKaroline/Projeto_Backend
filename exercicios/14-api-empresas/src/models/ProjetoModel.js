const mongoose = require('mongoose');

const ProjetoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  descricao: {
    type: String,
    required: true,
    trim: true
  },
  data_inicio: {
    type: Date,
    required: true
  },
  data_fim: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

const ProjetoModel = mongoose.model('Projetos', ProjetoSchema);

module.exports = ProjetoModel;
