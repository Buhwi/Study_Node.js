const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : '<my_sql_id>',
    password : '<my_sql_pswd>',
    database : 'my_database'
});

connection.connect();

connection.query('SELECT * FROM Users', (error, rows, fields) => {
    if (error) throw error;
    console.log('User info is: ', rows);
});

connection.end();