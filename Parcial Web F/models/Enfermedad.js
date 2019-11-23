const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema =  new Schema({
    nombre: {type: String, unique: true},
    sintomas: String,
    Causas: String,
     Es_mortal: String
});


module.exports = mongoose.model('enfermedades',schema);