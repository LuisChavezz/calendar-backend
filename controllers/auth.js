const { response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { generateJWT } = require('../helpers/jwt')

const createUser = async( req, res = response ) => {

  const { email, password } = req.body

  try {
    let user = await User.findOne({email})
    if ( user ) { // Si ya existe el usuario (por email)
      return res.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario registrado con ese correo.'
      })
    }

    user = new User( req.body );

    // TODO: Encriptar contraseña
    user.password = bcrypt.hashSync( password, bcrypt.genSaltSync() )
    
    await user.save();

    // TODO: Generar Json Web Token (JWT)
    const token = await generateJWT( user._id, user.name )

    // TODO: Respuesta al crear usuario en la DB
    res.status(201).json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error!'
    })
  }

}

const userLogin = async( req, res = response ) => {

  const { email, password } = req.body

  try {
    const user = await User.findOne({email})
    if ( !user ) { // Si no existe el usuario (por email)
      return res.status(400).json({
        ok: false,
        msg: 'El usuario o contraseña son incorrectos'
      })
    }

    // TODO: confirmar las contraseñas
    const validPassword = bcrypt.compareSync( password, user.password )
    if ( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario o contraseña son incorrectos'
      })
    }

    // TODO: Generar Json Web Token (JWT)
    const token = await generateJWT( user._id, user.name )
    
    res.json({
      ok: true,
      uid: user._id,
      name: user.name,
      token
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error!'
    })    
  }

}

const renewToken = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = { createUser, userLogin, renewToken }