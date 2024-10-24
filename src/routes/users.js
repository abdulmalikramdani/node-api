const express = require("express")
const UsersControllers = require("../controllers/users.js")

const route = express()

route.get("/", UsersControllers.getAllUser)

route.post("/", UsersControllers.createNewUsers)

module.exports = route