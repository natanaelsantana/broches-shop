require('dotenv').config();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const saltRounds = 12;
const jwt = require('jsonwebtoken');

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

    generateToken(res, user._id);
    res.status(201).json({
      message: 'success in login',
    });
  } catch (err) {
    res.status(500).json({ error: 'Falha no login' });
  }
};

const Authentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);

        if (user) {
          res.status(200).json({ message: 'Sucesso' });
        } else {
          console.log('User not found in the database');
          return res
            .status(401)
            .json({ error: 'Unauthorized, user not found' });
        }
      } catch (error) {
        console.error('JWT verification error:', error);
        return res.status(401).json({ error: 'Unauthorized, invalid token' });
      }
    } else {
      return res.status(401).json({ error: 'Unauthorized, token missing' });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const Logout = async (req, res) => {
  try {
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: 'logged out' });
  } catch (error) {
    console.error('Error during logout:', error);

    res.status(500).json({ error: 'Falha no logout' });
  }
};

module.exports = { Register, Login, Logout, Authentication };
