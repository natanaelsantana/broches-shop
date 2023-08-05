const controller = require('../controllers/userController');
const express = require('express');

const router = express.Router();

router.post('/register', controller.Register);

router.post('/login', controller.Login);

router.post('/logout', controller.Logout);

module.exports = router;
