const mysql = require("mysql2")
const dbPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "api_basic"
})

module.exports = dbPool.promise()