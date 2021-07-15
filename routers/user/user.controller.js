const axios = require('axios');
const {User} = require('../../models/index');
const createToken = require('../../middleware/jwt');
const createHash = require('../../middleware/createhash');
const crypto = require('crypto');


// /login에서
let login = (req, res) =>{
    res.render('login.html')
}

// /join에서
let getJoinInfo = async (req, res) =>{
    console.log(req.body)
    let {joinEmail, joinId, joinPw, yrInput, monInput, dayInput} = req.body;
    let encPw = createHash(joinPw);
    if(monInput.length == 1){
        monInput = '0' + monInput
    }
    if(dayInput.length == 1){
        dayInput = '0' + dayInput
    }
    let joinBd = yrInput + monInput + dayInput
    console.log(joinBd)

    let addUser = await User.create({
        useremail: joinEmail,
        username: joinId,
        password: encPw,
        birthday: joinBd
    })
    let done='got joininfo'
    res.json({
        done
    })
}

let validCheck = async (req, res) =>{
    let {joinEmail} = req.body;
    if(joinEmail !== undefined){
    let result = await User.findAll({
        where:{
            useremail:joinEmail
        }
    })
    if(result.length==0){
        output = true;
        res.json({output});
    } else{ 
        output = false; 
        res.json({output});
    }
    console.log(output)
    }
    if(joinEmail == undefined){
        let {logId, logPw} = req.body
        console.log(req.body)
        let srcWithId = await User.findAll({
            where:{
                useremail: logId,
            }
        })
        if(srcWithId.length==0){
            let noIdMatch = true;
            res.json({noIdMatch})
        } else{
            let noPwMatch = {};
            let encPw = createHash(logPw);
            let token = createToken(logId);
            console.log(encPw)
            if(srcWithId[0].dataValues.password !== encPw){
                noPwMatch = true;
            } else{
                // 로그인 성공 부분
                noPwMatch = false;
                res.cookie('AccessToken', token, { httpOnly: true, secure: true })
                req.session.isLogin = true;
                console.log(req.session)
            }
        res.json({noPwMatch})
        }
    }
}
module.exports = {
    login,
    getJoinInfo,
    validCheck,

}