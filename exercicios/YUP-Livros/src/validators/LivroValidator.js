const yup = require('yup');

const criarLivroSchema = yup.object().shape({
  titulo: yup.string().required('titulo é obrigatório'),
  autor: yup.string().required('autor é obrigatório'),
  editora: yup.string().required('editora é obrigatória'),
  ano: yup.number().typeError('ano deve ser um número').required('ano é obrigatório'),
  preco: yup.number().typeError('preco deve ser um número').required('preco é obrigatório').min(0, 'preco deve ser positivo')
});

const atualizarLivroSchema = yup.object().shape({
  titulo: yup.string(),
  autor: yup.string(),
  editora: yup.string(),
  ano: yup.number().typeError('ano deve ser um número'),
  preco: yup.number().typeError('preco deve ser um número').min(0, 'preco deve ser positivo')
}).noUnknown();

function validarCriacao(req, res, next) {
  criarLivroSchema.validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {
      const errors = (err && err.inner) ? err.inner.map(e => e.message) : [err.message];
      return res.status(400).json({ errors });
    });
}

function validarAtualizacao(req, res, next) {
  atualizarLivroSchema.validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {
      const errors = (err && err.inner) ? err.inner.map(e => e.message) : [err.message];
      return res.status(400).json({ errors });
    });
}

module.exports = {
  validarCriacao,
  validarAtualizacao
};
