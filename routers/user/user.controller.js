const axios = require('axios');

// /login에서
let login = (req, res) =>{
    res.render('login.html')
}

let getUserInfo = (req, res) =>{
    // Db조회
    console.log(req.body)
    let done='got logininfo'
    res.json({
        done
    })
}

// /join에서
let getJoinInfo = (req, res) =>{
    console.log(req.body)
    let done='got joininfo'
    res.json({
        done
    })
}

module.exports = {
    login,
    getUserInfo,
    getJoinInfo
}