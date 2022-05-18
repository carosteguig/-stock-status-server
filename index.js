const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();// load .env variables
const paintsStock = require('./routes/paintsRoute');



const PORT = process.env.PORT ||  5000;

//middleware- additional functionality
app.use(express.json());  // adds required body (name: req.body) 
app.use(cors()); // allow cross origin resource sharing


// home route
app.get('/', (req, res) => {
    res.send('Welcome to server API')
});

//routing
app.use('/paints', paintsStock);

app.listen(PORT, () => {
    console.log(`Hello! Listening on port ${PORT}`)
});