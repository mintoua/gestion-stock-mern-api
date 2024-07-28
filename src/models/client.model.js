const mongoose = require('mongoose');

//le schema de model de donnée Client
const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: Number, required: true },
    tel: { type: Number, required: true },
    adress: { type: String, required: true },
}, {timestamps: true});

//exportation du modèle
module.exports = mongoose.model('Client', ClientSchema);
