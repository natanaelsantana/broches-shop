const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

const protect = async (req, res) => {
  try {
    let token;

    token = req.cookies.jwt;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.userID).select('-password');
      } catch (error) {
        res.status(401).json({ error: 'Não autorizado token inválido' });
      }
    } else {
      res.status(401).json({ error: 'Não autorizado, token inexistente' });
    }
  } catch {}
};

module.exports = protect;
