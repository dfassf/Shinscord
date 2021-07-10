const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const router = require('./routers/index')
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') })
const port = process.env.port

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'html');
nunjucks.configure('views', {
    express:app,
});

const { sequelize } = require('./models');
sequelize.sync({ force: false, })
    .then(() => {
        console.log('access successful')
    }).catch(() => {
        console.log('access failed')
    })


app.use('/',router)

app.listen(port,()=>{ 
    console.log(port)
})