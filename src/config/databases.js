require("dotenv").config({ path: "../../.env" })
const mysql = require("mysql2")
const dbPool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USERNAME,
    password: "",
    database: process.env.DB_NAME
})

module.exports = dbPool.promise()