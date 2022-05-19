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

// getting single paint by colour
router.get('/:colour', (req, res) => {
    //loading and reading json file in utf8 format
    fs.readFile('./data/paintsStock.json', 'utf8', (err, data) => {
        // parsing json file so it is readable
        const paintsData = JSON.parse(data);
        // using array method to find an specific paint by looking for the colour
        const singlePaint = paintsData.find(
            (paint) => paint.colour === req.params.colour
        );
        if (singlePaint) {
            res.json(singlePaint);
        } else {
            res.send('no paint found with this id')
        }

    })
});

// THIS DIDN'T WORK! ///////////////////////////////////////////////////////////////////////

//editing the paints' details
router.patch('/:colour/edit', (req, res) => {
    //loading and reading json file in utf8 format
    fs.readFile('./data/paintsStock.json', 'utf8', (err, data) => {
        if (err) {
            res.send('item doesn\'t exist')
        } else {
            // parsing json file so it is readable
            const paintsData = JSON.parse(data);
            const updatedData = paintsData.filter(paint => paint.colour !== req.params.colour);
            const updatedPaint = req.body;
            updatedData.push(updatedPaint);
            //adding edited info to data file and then stringifi it into a json file format
            fs.writeFile('./data/paintsStock.json', JSON.stringify(updatedData), (err) => {
                if (err) {
                    res.send('error updating item')
                }
                res.send("item updated")
            })
        }
    })
})

// THIS ABOVE DIDN'T WORK! ///////////////////////////////////////////////////////////////////////


module.exports = router; // exporting paintsRoute