const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true, // Isso permite o envio de cookies e cabeçalhos de autorização
  }),
);

app.use(express.json());
app.use('/api/auth', authRoutes);

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with an error code
  }
}

app.listen(3001, () => {
  console.log(`Servidor rodando na porta 3001`);
});
