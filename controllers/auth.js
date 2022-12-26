const { response } = require('express')
const { validationResult } = require('express-validator')

const createUser = ( req, res = response ) => {
  const errors =  validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  res.json({
    ok: true,
    msg: 'register',
    body: req.body
  })
}

const userLogin = ( req, res = response ) => {
  const errors =  validationResult( req );
  
  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  res.json({
    ok: true,
    msg: 'login'
  })
}

const renewToken = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = { createUser, userLogin, renewToken }