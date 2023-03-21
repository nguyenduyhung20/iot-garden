const mysql = require('mysql');
const config = require('../config')

const connection = mysql.createConnection(config.db);

connection.connect((err)=>{
    if (err){
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

// connection.query('SELECT * FROM tbl_user', (err, rows, fields) => {
//     if (err) throw err
  
//     console.log('The solution is: ', rows[0])
// });

module.exports = connection;