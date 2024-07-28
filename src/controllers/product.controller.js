const Product = require('../models/product.model');

// Read all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        console.log(JSON.stringify(products));
        res.status(200).send(products);
    } catch (err) {
        console.error("error getting all products");
        res.status(500).send(err);
    }
};

// Read a single product by ID
const getSingleProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send(err);
    }
};

//Create a new product
const addProduct =  async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

//Update a product by ID
const updateProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

//Delete a product by ID
const deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Exporting the functions for use in other files.  
// This makes the functions accessible in controllers/product.controller.js
module.exports = {
    getAllProducts,
    addProduct,
    getSingleProductById,
    updateProductById,
    deleteProductById
};

