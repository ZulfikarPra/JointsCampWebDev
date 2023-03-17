const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')
const passwordValidator = require('../utils/passwordValidator')

const getUser = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.json(user)
})

const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    passwordValidator(password)
    const user = await User.create({
        name,
        email,
        password
    })
    res.json(user)
})

const deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = await User.deleteOne({ _id: id })
    res.json(user)
})

const updateUser = asyncHandler(async (req, res) => {
    const id = req.params.id
    const { name, email, password } = req.body
    const user = await User.findById(id)
    user.name = name
    await user.save()
    res.json(user)
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({
        email
    })
    if (user && (await user.matchPassword(password))) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser,
    loginUser
}