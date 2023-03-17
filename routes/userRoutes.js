const express = require('express')
const {
    getUser,
    createUser,
    deleteUser,
    updateUser,
    loginUser
} = require('../controllers/userController')

const {userProtect, adminProtect} = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/getUser').get(adminProtect, getUser)
router.route('/createUser').post(createUser)
router.route('/deleteUser/:id').delete(deleteUser)
router.route('/updateUser/:id').put(userProtect, updateUser)
router.route('/loginUser').post(loginUser)

module.exports = router