const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.get('/login', controller.login)
router.post('/logintest', controller.logintest)

module.exports = router;