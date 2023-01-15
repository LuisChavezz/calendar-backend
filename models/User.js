const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true // Solo puede haber un registro con el mismo correo
  },
  password: {
    type: String,
    require: true
  },
});

module.exports = model( 'User', UserSchema )