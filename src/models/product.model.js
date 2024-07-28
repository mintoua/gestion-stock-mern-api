const mongoose = require('mongoose');

//le schema de model de donnée Produit
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, {timestamps: true});

//exportation du modèle
module.exports = mongoose.model('Product', ProductSchema);
