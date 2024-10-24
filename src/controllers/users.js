const getAllUser = (req, res) => {
    res.json({
        message: "Route Get All Users Success !"
    })
}
const createNewUsers = (req, res) => {
    res.json({
        message: "Route Create New Users Success !"
    })
}


module.exports = {
    getAllUser,
    createNewUsers
}