const logRequest = (req, res, next) => {
    console.log("Terjadi log ke Path :", req.path)
    next()
}
module.exports = logRequest