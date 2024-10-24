const express = require("express")
const app = express()
const port = 3000
const userRouters = require("./routes/users.js")

app.use("/users", userRouters)

app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
    // app.use('/', (req, res, next) => {
    //     res.send("Hello World")
    // })
app.get('/', (req, res) => {
    res.json({
        name: "John Doe",
        age: 30,
        city: "New York"
    })
})
app.post('/', (req, res) => {
    res.send("Hello World post")
})