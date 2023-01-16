/*
    Rutas de Usuarios (auth)
    url: host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();

// Métodos
const { createUser, userLogin, renewToken } = require('../controllers/auth.js');
const { validateFields } = require('../middlewares/fields-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
  '/new',
  [ // middleware collections
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validateFields
  ],
  createUser
);

router.post(
  '/', 
  [ // middleware collections
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validateFields
  ],
  userLogin);

router.get('/renew', validateJWT , renewToken);

module.exports = router;