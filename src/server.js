const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT
const userRouters = require("./routes/users.js")
const middlewareLogs = require("./middleware/logs.js")

//middleware

app.listen(port, () => {
    console.log(`server is running on port ${port}`)

})
console.log(process.env.PORT)

app.use(middlewareLogs)
app.use(express.json())

app.use("/users", userRouters)