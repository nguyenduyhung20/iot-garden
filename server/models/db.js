const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_database'
});

connection.connect((err)=>{
    if (err){
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});
module.exports = connection;