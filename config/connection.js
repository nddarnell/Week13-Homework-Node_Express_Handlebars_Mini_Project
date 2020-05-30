// connection to database goes here
// export connection see activity 16
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SummerFalls13",
    database: "burgers_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }

    console.log(`Connected to database as id ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;