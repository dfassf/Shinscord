const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.get('/login', controller.login)
router.post('/login', controller.getUserInfo)
router.post('/join', controller.getJoinInfo)

module.exports = router;