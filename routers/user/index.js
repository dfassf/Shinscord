const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.get('/login', controller.login)
router.post('/join', controller.getJoinInfo)
router.post('/ifvalid', controller.validCheck)

module.exports = router;