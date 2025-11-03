require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const livroRouter = require('./controllers/LivroController');

const app = express();
app.use(express.json());

// rota base
app.use('/livros', livroRouter);

// porta do .env ou 3000
const PORT = process.env.PORT || 3000;

// montar URI do Atlas
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
if (!DB_USER || !DB_PASS || !DB_HOST || !DB_NAME) {
  console.error('Por favor, configure as variáveis de ambiente no .env (DB_USER, DB_PASS, DB_HOST, DB_NAME).');
  process.exit(1);
}

const uri = `mongodb+srv://${encodeURIComponent(DB_USER)}:${encodeURIComponent(DB_PASS)}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err.message || err);
});