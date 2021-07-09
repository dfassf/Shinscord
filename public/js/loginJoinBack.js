function loginWork(){
    let logId = document.querySelector('#logId');
    let logPw = document.querySelector('#logPw');
    let loginSubmit = document.querySelector('#loginSubmit');
    let joinSubmit = document.querySelector('#joinSubmit');

    async function postLoginInfo(){
        let data = { 
            logId:logId.value, 
            logPw:logPw.value,
        }
        let options = { 
            headers: {'Content-Type': 'application/json'}
        }
        let loginData = await axios.post('http://localhost:3000/user/login',JSON.stringify(data),options);
    }

    loginSubmit.addEventListener('click',postLoginInfo);
    
}
function joinWork(){
    let joinEmail = document.querySelector('#joinEmail');
    let joinId = document.querySelector('#joinId');
    let joinPw = document.querySelector('#joinPw');
    let yrInput = document.querySelector('.yrInput');
    let monInput = document.querySelector('.monInput');
    let dayInput = document.querySelector('.dayInput');

    async function postJoinInfo(){

        let data = { 
            joinEmail:joinEmail.value, 
            joinId:joinId.value,
            joinPw:joinPw.value,
            yrInput:yrInput.value,
            monInput:monInput.value,
            dayInput:dayInput.value,
        }
        let options = { 
            headers: {'Content-Type': 'application/json'}
        }
        let loginData = await axios.post('http://localhost:3000/user/join',JSON.stringify(data),options)
    }

    joinSubmit.addEventListener('click',postJoinInfo);
    





}
document.addEventListener('DOMContentLoaded',loginWork);
document.addEventListener('DOMContentLoaded',joinWork);