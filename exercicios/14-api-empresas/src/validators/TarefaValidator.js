const yup = require('yup');
const mongoose = require('mongoose');

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const createTarefaSchema = yup.object({
  titulo: yup.string().required('O título da tarefa é obrigatório.'),
  descricao: yup.string().required('A descrição da tarefa é obrigatória.'),
  dataInicio: yup
    .date()
    .required('A data de início é obrigatória.')
    .typeError('Data de início inválida.'),
  dataFim: yup
    .date()
    .required('A data de fim é obrigatória.')
    .typeError('Data de fim inválida.')
    .min(yup.ref('dataInicio'), 'A data de fim deve ser posterior à data de início.'),
  responsavel: yup
    .string()
    .required('O ID do responsável é obrigatório.')
    .test('is-valid-objectid', 'ID do responsável inválido.', (value) =>
      isValidObjectId(value)
    ),
  projeto: yup
    .string()
    .required('O ID do projeto é obrigatório.')
    .test('is-valid-objectid', 'ID do projeto inválido.', (value) =>
      isValidObjectId(value)
    ),
});

const updateTarefaSchema = yup.object({
  titulo: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date().typeError('Data de início inválida.'),
  dataFim: yup
    .date()
    .typeError('Data de fim inválida.')
    .min(yup.ref('dataInicio'), 'A data de fim deve ser posterior à data de início.'),
  responsavel: yup
    .string()
    .test('is-valid-objectid', 'ID do responsável inválido.', (value) =>
      !value || isValidObjectId(value)
    ),
  projeto: yup
    .string()
    .test('is-valid-objectid', 'ID do projeto inválido.', (value) =>
      !value || isValidObjectId(value)
    ),
});

const TarefaValidator = {
  createTarefaSchema,
  updateTarefaSchema,
};

module.exports = TarefaValidator;
