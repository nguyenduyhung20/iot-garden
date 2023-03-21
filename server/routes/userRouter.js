const express = require('express');
const router = express.Router();
const connection = require('../models/db')

router.get('/user', (req, res) => {
    // Send a query to the database to retrieve all rows from the tbl_user table
    connection.query('SELECT * FROM tbl_user', (err, rows) => {
        // If there's an error, throw it
        if (err) {
            console.log('Error retrieving data from database:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Send the rows back to the client as a JSON object
            res.json({rows});
        }
    });
})

module.exports = router;