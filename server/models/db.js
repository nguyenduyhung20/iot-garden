const mysql = require('mysql');
const config = require('../config')

// Create a connection to the MySQL database using the configuration settings in the config file
const connection = mysql.createConnection(config.db);

// Connect to the database
connection.connect((err)=>{
    // If there's an error, log it to the console
    if (err){
        console.log('Error connecting to database:', err);
    } else {
        // If there's no error, log a success message to the console
        console.log('Connected to database');
    }
});

// Export the connection object
module.exports = connection;