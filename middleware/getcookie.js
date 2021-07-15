const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});

function getCookie(cookie){
    if(cookie == (undefined || null || '')){
        return 0;
    } else{
        let cookieArr = [];
        let gotCookie = cookie.split(';');
        gotCookie.forEach(v => {
            let [name, value] = v.split('=')
            if(name.trim() == 'AccessToken'){
                let jwt = value.split('.');
                let payload = Buffer.from(jwt[1], 'base64').toString();
                console.log(payload)
                let {userid} = JSON.parse(payload);
                id = userid;
                cookieArr.push(JSON.parse(payload).userid)
            }
        })
        console.log(cookieArr[0])
        return cookieArr[0]
    }
}

module.exports = getCookie