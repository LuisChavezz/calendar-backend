const { response } = require('express')
const jwt = require('jsonwebtoken');

const validateJWT = ( req, res = response, next ) => {
  // TODO: x-token in headers
  const token = req.header('x-token')

  if ( !token ) { // No autenticado
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la solicitud.'
    })
  }

  try {
    const { uid, name } = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED
    );
    
    req.uid = uid;
    req.name = name;
    
    

  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no válido.'
    })
  }

  next();

}

module.exports = { validateJWT }