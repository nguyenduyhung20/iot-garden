require('dotenv').config();
const mysql = require('mysql2');
const config = require('../config')

const connection = mysql.createConnection(config.db);

connection.connect((err)=>{
    if (err){
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection;