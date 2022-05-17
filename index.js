const express = require('express');
require('dotenv').config();

const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
// app.use(express.static('public'));
app.use(cors());
// app.use('/inventory', inventoryRoutes);
