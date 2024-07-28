const Client = require('../models/client.model');

// Read all clients
const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find(); //Get all clients
        console.log(JSON.stringify(clients));
        res.status(200).send(clients);
    } catch (err) {
        console.error("error getting all clients", err);
        res.status(500).send("DB Error: " + err);
    }
};

// Read a single client by ID
const getSingleClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).send();
        }
        res.status(200).send(client);
    } catch (err) {
        res.status(500).send(err);
    }
};

//Create a new client
const addClient =  async (req, res) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).send(client);
    } catch (err) {
        res.status(400).send(err);
    }
};

//Update a client by ID
const updateClientById = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, 
            req.body, 
            { new: true});

        if (!client) {
            return res.status(404).send();
        }
        res.status(200).send(client);
    } catch (err) {
        res.status(400).send(err);
    }
};

//Delete a client by ID
const deleteClientById = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).send();
        }
        res.status(200).send(client);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Exporting the functions for use in other files.  
// This makes the functions accessible in controllers/client.controller.js
module.exports = {
    getAllClients,
    addClient,
    getSingleClientById,
    updateClientById,
    deleteClientById
};

