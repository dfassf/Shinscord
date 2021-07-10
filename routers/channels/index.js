const express = require('express')
const router = express.Router()
const controller = require('./channels.controller')

router.get('/', controller.main)

module.exports = router;