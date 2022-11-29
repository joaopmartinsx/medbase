const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hospital',
    password: 'Ae@1254453'
})

module.exports = pool.promise();