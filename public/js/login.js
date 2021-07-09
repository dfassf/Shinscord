function loginInit(){
    // 로그인 회원가입 토글 
    let loginContainer = document.querySelector('#loginContainer');
    let joinContainer = document.querySelector('#joinContainer');
    let ifLogin = true;
    joinContainer.style.display='none';

    function joinOrLogin(){
        if(ifLogin==false){
            loginContainer.style.display='block';
            joinContainer.style.display='none';
        }
        if(ifLogin==true){
            loginContainer.style.display='none';
            joinContainer.style.display='block';
        }
        ifLogin = !ifLogin;
    }

    let joinToggle = document.querySelector('.joinToggle');
    let loginToggle = document.querySelector('.loginToggle');
    joinToggle.addEventListener('click',joinOrLogin);
    loginToggle.addEventListener('click',joinOrLogin);

}
document.addEventListener('DOMContentLoaded',loginInit)