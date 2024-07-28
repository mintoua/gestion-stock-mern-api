// Chargement des variables d'environnement
require('dotenv').config()
// Chargement des configs de la base de données
require("./db");

// Chargement de l'express pour créer une application web  'app'  
const express = require('express');

// Chargement du middleware 'bodyParser' 
//pour décoder les données JSON reçues 
//dans les requêtes POST et PUT
const bodyParser = require('body-parser');

// Chargement des routes liées aux produits  'productRouter'  
//qui sont stockés dans le fichier 'product.route.js' 
// et utilisés dans 'server.js'  pour les routes liées aux produits
const productRouter =  require('./routes/product.route');
const clientRouter = require('./routes/client.route');
      
 // Création de l'application Express  'app' et .
 //définition du port et du nom de l'hôte
const app = express();

 // Définition du port et du nom de l'hôte utilisés par 
 //l'application  'app'  (par défaut sur 5000)  et 
 //'HOSTNAME' (par défaut sur 'http://localhost:')  
 //pour le log des requêtes sur le terminal
const PORT = process.env.PORT || 5000;

 // Définition du chemin vers le répertoire de stockage des données  'data'  pour MongoDB (par défaut sur 'mongodb://localhost:27017/gestion-stock-db')
const HOSTNAME = process.env.HOSTNAME || 'http://localhost:';

// Utilisation du middleware 'bodyParser' 
//pour décoder les données JSON reçues 
//dans les requêtes POST et PUT
app.use(bodyParser.json());

// Définition du middleware 'logger' qui log les requêtes sur le terminal
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Utilisation du router 'productRouter' pour les routes liées aux produits
app.use('/api/v1/products',productRouter);
app.use('/api/v1/clients',clientRouter);

// Démarrage du serveur sur le port et le nom de l'hôte définit  'app'  et affichage du message de bienvenue sur le terminal
app.listen(PORT, () => {
    console.log(`Le serveur tourne à l'adresse
        ${HOSTNAME}${PORT}`);
});
