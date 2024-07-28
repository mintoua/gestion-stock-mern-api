const express = require('express');

// Chargement du router pour les
// routes liées aux produits
const router = express.Router();

// Import des fonctions callbacks du controllerProduct
const {
    getAllClients,
    addClient,
    getSingleClientById,
    updateClientById,
    deleteClientById,} 
    = require('../controllers/client.controller');

// Read all products
router.get('/', getAllClients);

// Create a new product
router.post('/', addClient);

// Read a single product by ID
router.get('/:id', getSingleClientById);

// Update a product by ID
router.patch('/:id', updateClientById);

// Delete a product by ID
router.delete('/:id', deleteClientById);

// Export du router
module.exports = router;
