function loginWork(){
    let logId = document.querySelector('#logId');
    let logPw = document.querySelector('#logPw');
    let loginIdTag = document.querySelector('.loginIdTag');
    let loginPwTag = document.querySelector('.loginPwTag');
    let loginSubmit = document.querySelector('#loginSubmit');
    let options = {headers: {'Content-Type': 'application/json'}}

    loginSubmit.addEventListener('click', async ()=>{
        // 빈칸 검사
        if(logId.value == ''){
            loginIdTag.style.color = 'red';
            logId.style.borderColor = 'red';
            loginIdTag.innerHTML = '이메일 - <i>필수 입력 칸이에요</i>';
        } else{
            loginIdTag.style.color = '#72767d';
            logId.style.borderColor = 'black';
            loginIdTag.innerHTML = '이메일';
        }
        if(logPw.value == ''){
            loginPwTag.style.color = 'red';
            logPw.style.borderColor = 'red';
            loginPwTag.innerHTML = '비밀번호 - <i>필수 입력 칸이에요</i>';
        } else{
            loginPwTag.style.color = '#72767d';
            logPw.style.borderColor = 'black';
            loginPwTag.innerHTML = '비밀번호';
        }

        // 아이디 및 비밀번호 일치 여부
        if(logId.value!=='' && logPw.value!==''){
            let data = { 
                logId:logId.value, 
                logPw:logPw.value,
            }
            let idPwCheck = await axios.post('http://localhost:3000/user/ifvalid',JSON.stringify(data),options)
            let {noIdMatch, noPwMatch} = idPwCheck.data
            if(noIdMatch == true){
                loginIdTag.style.color = 'red';
                logId.style.borderColor = 'red';
                loginIdTag.innerHTML = '이메일 - <i>유효하지 않은 이메일입니다.</i>';
            }
            else if(noPwMatch == true){
                loginPwTag.style.color = 'red';
                logPw.style.borderColor = 'red';
                loginPwTag.innerHTML = '비밀번호 - <i>유효하지 않은 비밀번호입니다.</i>';
            } else{
                loginIdTag.style.color = '#72767d';
                logId.style.borderColor = 'black';
                loginIdTag.innerHTML = '이메일';
                window.location.href = 'http://localhost:3000/channels'
            }
        }
    });

}
function joinWork(){
    let joinEmail = document.querySelector('#joinEmail');
    let joinId = document.querySelector('#joinId');
    let joinPw = document.querySelector('#joinPw');
    let yrInput = document.querySelector('.yrInput');
    let monInput = document.querySelector('.monInput');
    let dayInput = document.querySelector('.dayInput');
    let valAlert = document.querySelector('.valAlert');   
    let emailTag = document.querySelector('.emailTag');   
    let joinSubmit = document.querySelector('#joinSubmit');
    let options = {headers: {'Content-Type': 'application/json'}}

    async function postJoinInfo(){
        let data = { 
            joinEmail:joinEmail.value, 
            joinId:joinId.value,
            joinPw:joinPw.value,
            yrInput:yrInput.value,
            monInput:monInput.value,
            dayInput:dayInput.value,
        }
        let joinData = await axios.post('http://localhost:3000/user/join',JSON.stringify(data),options)
    }
    

    joinSubmit.addEventListener('click',async ()=>{
        let data = {joinEmail:joinEmail.value};
        let getId = await axios.post('http://localhost:3000/user/ifvalid',JSON.stringify(data),options)
        let check = getId.data.output
        let emailFormat = /^[a-z0-9]+@([a-z]+\.)+[a-z]{2,4}$/;

        if(joinEmail.value!=='' && joinId.value!=='' && joinPw.value!=='' && yrInput.value!=='' && monInput.value!=='' &&  dayInput.value!==''){
            valAlert.innerHTML = '';
            valAlert.setAttribute('class', 'valAlert');
            if (!emailFormat.test(joinEmail.value)){
                emailTag.style.color = 'red';
                joinEmail.style.borderColor = 'red';
                emailTag.innerHTML = '이메일 - <i>이메일 형식이 잘못됐어요</i>';
            }        
            else if(check==false){
                emailTag.style.color = 'red';
                joinEmail.style.borderColor = 'red';
                emailTag.innerHTML = '이메일 - <i>이미 등록된 이메일이에요</i>'
            }
            else{
                emailTag.style.color = '#72767d';
                joinEmail.style.borderColor = 'black';
                emailTag.innerHTML = '이메일'
            }
            postJoinInfo();
            window.location.href = 'http://localhost:3000/channels'
        } 
        else{              
            valAlert.innerHTML = '입력란을 모두 작성해 주세요.';
            valAlert.setAttribute('class', 'valAlert alert');
        }
    });
    
}
document.addEventListener('DOMContentLoaded',loginWork);
document.addEventListener('DOMContentLoaded',joinWork);