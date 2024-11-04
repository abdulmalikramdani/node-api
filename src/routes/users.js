const express = require("express")
const UsersControllers = require("../controllers/users.js")

const route = express()
    //read
route.get("/", UsersControllers.getAllUser)

//create
route.post("/", UsersControllers.createNewUsers)

//update
route.patch("/:id", UsersControllers.updateUsers)

//delete
route.delete("/:id", UsersControllers.deleteUsers)

module.exports = route