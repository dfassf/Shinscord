const axios = require('axios');


let login = (req, res) =>{
    res.render('login.html')
}

let logintest = (req, res) =>{
    console.log(req.body)
    let asd='fromserver'
    res.json({
        asd
    })
}

module.exports = {
    login,
    logintest,
}