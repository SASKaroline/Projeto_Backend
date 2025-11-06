const yup = require('yup');

const createProjetoSchema = yup.object({
  nome: yup.string().required('O nome do projeto é obrigatório.'),
  descricao: yup.string().required('A descrição do projeto é obrigatória.'),
  dataInicio: yup
    .date()
    .required('A data de início é obrigatória.')
    .typeError('Data de início inválida.'),
  dataFim: yup
    .date()
    .required('A data de fim é obrigatória.')
    .typeError('Data de fim inválida.')
    .min(yup.ref('dataInicio'), 'A data de fim deve ser posterior à data de início.'),
});

const updateProjetoSchema = yup.object({
  nome: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date().typeError('Data de início inválida.'),
  dataFim: yup
    .date()
    .typeError('Data de fim inválida.')
    .min(yup.ref('dataInicio'), 'A data de fim deve ser posterior à data de início.'),
});

const ProjetoValidator = {
  createProjetoSchema,
  updateProjetoSchema,
};

module.exports = ProjetoValidator;
