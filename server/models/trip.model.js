const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const TripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        minlength: [2, 'El nombre no puede tener menos de 2 caracteres']
    },
    email: {
        type: String,
        required: [true, 'Debe ingresar un email válido'],
        unique: [true, 'Este email ya existe, pruebe con otro distinto']
    },
    password: {
        type: String,
        required: [true, 'Debe ingresar una contraseña']
    }
    
}, {timestamps: true});


const Trip = mongoose.model("Trip", TripSchema);
TripSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });
module.exports = Trip;
