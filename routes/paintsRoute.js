const express = require('express');
const router = express.Router();
const fs = require('fs');


// getting collection of paints as array of objects
router.get('/', (req, res) => {
    //loading and reading json file in utf8 format
    fs.readFile('./data/paintsStock.json', 'utf8', (err, data) => {
        // parsing json file so it is readable
        const paintsData = JSON.parse(data);
        res.json(paintsData);
    });
});

// getting single paint by id
router.get('/:id', (req, res) => {
    //loading and reading json file in utf8 format
    fs.readFile('./data/paintsStock.json', 'utf8', (err, data) => { 
        // parsing json file so it is readable
        const paintsData = JSON.parse(data);
        // using array method to find an specific paint by looking for the id
        const singlePaint = paintsData.find(
            (paint) => paint.id === req.params.id
        );
        if (singlePaint) {
            res.json(singlePaint);
        } else {
            res.send('no paint found with this id')
        }
        
     })
});


module.exports = router; // exporting paintsRoute