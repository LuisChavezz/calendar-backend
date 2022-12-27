const { response } = require('express')

const createUser = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'register',
    body: req.body
  })
}

const userLogin = ( req, res = response ) => {
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