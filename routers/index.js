const express = require('express')
const router = express.Router();
const mainRouter = require('./main/index')
const userRouter = require('./user/index');
const channelRouter = require('./channels/index');


router.use('/user', userRouter);
router.use('/channels', channelRouter);
router.use('/', mainRouter);

module.exports = router;