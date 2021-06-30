const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'html');
nunjucks.configure('views', {
    express:app,
});

app.get('/',(req,res)=>{
    res.render('./login.html')
})

app.listen('3000',()=>{
    console.log('3000')
})