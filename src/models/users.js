const dbPool = require("../config/databases")

const getAllUser = (req, res) => {
    const sql = "SELECT * FROM users"
    return dbPool.execute(sql)
}

module.exports = {
    getAllUser
}