const { response } = require('express')

const createUser = (_, res = response) => {
  res.json({
    ok: true,
    msg: 'register'
  })
}

const userLogin = (_, res = response) => {
  res.json({
    ok: true,
    msg: 'login'
  })
}

const renewToken = (_, res) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = { createUser, userLogin, renewToken }