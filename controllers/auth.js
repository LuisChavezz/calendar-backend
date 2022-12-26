const { response } = require('express')

const createUser = ( req, res = response ) => {
  const { name } = req.body;

  if ( name.length < 4 ) {
    return res.status(400).json({
      ok: false,
      msg: 'El nombre debe ser de al menos 4 letras'
    })
  }

  res.json({
    ok: true,
    msg: 'register',
    body: req.body
  })
}

const userLogin = ( _, res = response ) => {
  res.json({
    ok: true,
    msg: 'login'
  })
}

const renewToken = ( _, res = response ) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = { createUser, userLogin, renewToken }