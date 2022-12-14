const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.dbPassword,
    database: 'miniproject',
    multipleStatements: true
})

connection.connect((err) => {
    if (err) {
        console.log("Unable to connect to server")
        console.log(err)
    } else {
        console.log("Connection established")
    }
})

module.exports = {connection, mysql}