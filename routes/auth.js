/*
    Rutas de Usuarios (auth)
    url: host + /api/auth
*/

const { Router } = require('express');
const router = Router();

// Métodos
const { createUser, userLogin, renewToken } = require('../controllers/auth.js')

router.post('/new', createUser);

router.post('/', userLogin);

router.get('/renew', renewToken);

module.exports = router;