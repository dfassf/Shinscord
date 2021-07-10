const axios = require('axios');
const {User} = require('../../models/index');
const createToken = require('../../jwt');
const createHash = require('../../createhash');
const crypto = require('crypto');


// /login에서
let login = (req, res) =>{
    res.render('login.html')
}

// /join에서
let getJoinInfo = async (req, res) =>{
    console.log(req.body)
    let {joinEmail, joinId, joinPw, yrInput, monInput, dayInput} = req.body;
    let encPw = crypto.createHmac('sha256',Buffer.from(process.env.salt))
                                                 .update(joinPw)
                                                 .digest('base64')
                                                 .replace('=','')
                                                 .replace('==','')
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
    res.redirect('/channels')
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
            let encPw = crypto.createHmac('sha256',Buffer.from(process.env.salt))
            .update(logPw)
            .digest('base64')
            .replace('=','')
            .replace('==','')
            if(srcWithId[0].dataValues.password !== encPw){
                let noPwMatch = true;
                res.json({noPwMatch})
            } else{
                let noPwMatch = false;
                res.json({noPwMatch})
            }
        }
    }
}
module.exports = {
    login,
    getJoinInfo,
    validCheck,

}