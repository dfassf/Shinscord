const express = require('express')
const router = express.Router();
const mainRouter = require('./main/index')
const userRouter = require('./user/index');
// const boardRouter = require('./board/index');

router.use('/user', userRouter);
// router.use('/board', boardRouter);
router.use('/', mainRouter);

module.exports = router;