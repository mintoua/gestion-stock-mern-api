require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection Failed ...'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});