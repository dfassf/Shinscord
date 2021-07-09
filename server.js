const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const router = require('./routers/index')
const axios = require('axios');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'html');
nunjucks.configure('views', {
    express:app,
});

app.use('/',router)

app.listen('3000',()=>{
    console.log('3000')
})