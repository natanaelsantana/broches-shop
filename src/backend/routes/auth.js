const express = require('express');
require('dotenv').config();
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = express.Router();

router.post('/cadastro', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'Usuário já cadastrado' });
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Falha no cadastro' });
  }
});

router.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Senha inválida' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Falha no login' });
  }
});

module.exports = router;