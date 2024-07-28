const express = require('express');
const router = express.Router();

// Import des fonctions callbacks du controllerProduct
const {
    getAllProducts,
    addProduct,
    getSingleProductById,
    updateProductById,
    deleteProductById} 
    = require('../controllers/product.controller');

// Read all products
router.get('/', getAllProducts);

// Create a new product
router.post('/add', addProduct);

// Read a single product by ID
router.get('/:id', getSingleProductById);

// Update a product by ID
router.patch('/:id', updateProductById);

// Delete a product by ID
router.delete('/:id', deleteProductById);

// Export du router
module.exports = router;
