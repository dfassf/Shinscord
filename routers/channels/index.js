const express = require('express');
const router = express.Router();
const controller = require('./channels.controller');
const multer = require('multer');
const path = require('path');
const auth = require('../../middleware/auth');

const upload = multer({
    storage : multer.diskStorage({
        destination:function(req, file, callback){
            callback(null,'public/uploads/servers')
        },
        filename:function(req, file, callback){
            callback(null, new Date().valueOf() + path.extname(file.originalname))
        }
    }),
});

router.get('/', controller.main);
router.post('/', controller.mainGetUserInfo);
router.get('/create', controller.createServer);
router.post('/create', upload.single('serverlogo'), controller.submitServer);
router.post('/l', controller.loadServerData);
router.post('/friends', controller.getFriendsData);


module.exports = router;