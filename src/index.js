const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const config = require('./config/config');



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
const exampleRoutes = require('./routes/Routes');
app.use('/', exampleRoutes);

mongoose.connect(config.mongodb_uri,{
  replicaSet:"atlas-y8oxsk-shard-0",
  ssl:true,
  authSource:"admin"
})
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});