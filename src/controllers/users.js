const { param } = require("../routes/users")
const userModel = require("../models/users")

const getAllUser = async(req, res) => {
    const [data] = await userModel.getAllUser()
    try {
        res.json({
            message: "Route Get All Users Success !",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            message: "Server Error!",
            data: error
        })
    }

}
const createNewUsers = (req, res) => {
    const body = req.body
    res.json({
        message: "Route Create New Users Success !",
        data: body
    })
}

const updateUsers = (req, res) => {
    const idUser = req.params
    const body = req.body
    console.log("id User : ", idUser)
    res.json({
        message: "Route Update Users Success !",
        data: body
    })
}
const deleteUsers = (req, res) => {
    const idUser = req.params
    console.log("id User : ", idUser)
    res.json({
        message: "Route Delete Users Success !",
        data: idUser
    })
}

module.exports = {
    getAllUser,
    createNewUsers,
    updateUsers,
    deleteUsers
}