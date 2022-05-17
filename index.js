const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();// load .env variables
const paintsStock = require('./routes/paintsRoute');
const { application } = require('express');

const PORT = process.env.PORT ||  5000;

//middleware
app.use(express.json());  // adds required body (name: req.body.name) 
// app.use(express.static('public'));  // allows to serve the images in public folder.
app.use(cors()); // allow cross origin resource sharing


// home route
app.use('/', (req, res) => {
    res.send('Welcome to server API')
});

//routing
app.use('/paints', paintsStock);

app.listen(PORT, () => {
    console.log(`Hello! My server is listening on port ${PORT}`)
});