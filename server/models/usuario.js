
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
  values : ['ADMIN_ROLE','USER_ROLE'],
  message:'{VALUE} no es un rol valido'
}

  let Schema = mongoose.Schema;

    let usuarioSchema = new Schema({
      nombre:{
        type: String,
        required: [true, 'El nombre es necesario']
      },
      email:{
        type:String,
        unique:true,
        required:[true, 'El corre es necesario']
      },
      password:{
        type:String,
        required:[true, ' la contraseña es obligatoria']
      },
      img:{
        type:String,
        required:false
      },
      role:{
        type:String,
        default: 'USER_ROLE',
        enum:rolesValidos
      },
      estado: {
        type:Boolean,
        default:true
      },
      google:{
        type:Boolean,
        default:false
      }

    });

    usuarioSchema.plugin( uniqueValidator, {
      message:'{PATH} debe de ser unico'
    });

    module.exports = mongoose.model('Usuario', usuarioSchema);