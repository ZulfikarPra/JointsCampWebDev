const asyncHandler = require('express-async-handler')

const users = ["Budi", "Anton", "Rudi"]

const getUser = asyncHandler(async (req, res) => {
    res.json(users)
})

const createUser = asyncHandler(async (req, res) => {
    const name = req.body.name
    users.push(name)
    res.json(name)
})

const deleteUser = asyncHandler(async (req, res) => {
    const name = req.body.name
    const index = users.indexOf(name)
    if (index > -1) {
        users.splice(index, 1)
    }
    res.json(name)
})

module.exports = {
    getUser,
    createUser,
    deleteUser
}