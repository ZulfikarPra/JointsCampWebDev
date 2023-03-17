const express = require('express')
const {
    createAdmin,
    loginAdmin
} = require('../controllers/adminController')

const {adminCreate} = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/createAdmin').post(adminCreate, createAdmin)
router.route('/loginAdmin').post(loginAdmin)

module.exports = router