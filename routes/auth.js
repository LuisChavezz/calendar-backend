/*
    Rutas de Usuarios (auth)
    url: host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();

// Métodos
const { createUser, userLogin, renewToken } = require('../controllers/auth.js')

router.post(
  '/new',
  [ // middleware collections
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
  ],
  createUser
);

router.post(
  '/', 
  [ // middleware collections
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
  ],
  userLogin);

router.get('/renew', renewToken);

module.exports = router;