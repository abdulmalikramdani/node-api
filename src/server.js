const express = require("express")
const app = express()
const port = 3000
const userRouters = require("./routes/users.js")
const middlewareLogs = require("./middleware/logs.js")

//middleware

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

app.use(middlewareLogs)
app.use(express.json())

app.use("/users", userRouters)