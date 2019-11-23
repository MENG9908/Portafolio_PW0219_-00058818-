const mongoose = require('mongoose');
    schema = mongoose.Schema;
    
var EnfermedadSchema = Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    causa: String,
    sintomas: String,
    Es_mortal: String
});

module.exports = mongoose.model("Enfermedad",EnfermedadSchema);