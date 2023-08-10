require('dotenv').config();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const saltRounds = 12;

const Register = async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '1800');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'PUT, POST, GET, DELETE, PATCH, OPTIONS',
    );

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
};

const Login = async (req, res) => {
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

    const token = generateToken(res, user._id);
    res.status(201).json({
      message: 'success in login',
      token: token,
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({ error: 'Falha no login' });
  }
};

const Logout = async (req, res) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: 'logged out' });
  } catch {
    res.status(500).json({ error: 'Falha no logout' });
  }
};

module.exports = { Register, Login, Logout };
