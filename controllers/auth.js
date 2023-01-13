const { response } = require('express')
const User = require('../models/User')

const createUser = async( req, res = response ) => {

  try {
    const user = new User( req.body );
    await user.save();

    res.status(201).json({
      ok: true,
      msg: 'register',
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error!'
    })
  }

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