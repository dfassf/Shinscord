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

    //생년월일 토글
    let yrWrapOn = false;
    let monWrapOn = false;
    let dayWrapOn = false;
    let yrWrap = document.querySelector('#yrWrap');
    let monWrap = document.querySelector('#monWrap');
    let dayWrap = document.querySelector('#dayWrap');
    let yrWrapPop = document.querySelector('.yrWrapPop');
    let monWrapPop = document.querySelector('.monWrapPop');
    let dayWrapPop = document.querySelector('.dayWrapPop');


    yrWrap.addEventListener('click',(e)=>{

        if(yrWrapOn==true){
            yrWrapPop.style.display='block';
            monWrapPop.style.display='none';
            dayWrapPop.style.display='none';
        }
        if(yrWrapOn==false){
            console.log('b')
            yrWrapPop.style.display='none';
            monWrapPop.style.display='none';
            dayWrapPop.style.display='none';
        }
        yrWrapOn = !yrWrapOn;
    })
    
    monWrap.addEventListener('click',(e)=>{
      
        if(monWrapOn==true){
            yrWrapPop.style.display='none';
            monWrapPop.style.display='block';
            dayWrapPop.style.display='none';
        }
        if(monWrapOn==false){
            yrWrapPop.style.display='none';
            monWrapPop.style.display='none';
            dayWrapPop.style.display='none';
        }
        monWrapOn = !monWrapOn;
    })

    dayWrap.addEventListener('click',(e)=>{
      
        if(dayWrapOn==true){
            yrWrapPop.style.display='none';
            monWrapPop.style.display='none';
            dayWrapPop.style.display='block';
        }
        if(dayWrapOn==false){
            yrWrapPop.style.display='none';
            monWrapPop.style.display='none';
            dayWrapPop.style.display='none';
        } 
        dayWrapOn = !dayWrapOn;
    })

    document.body.addEventListener('click',(e)=>{
        if((e.target.className!=='yrInput' && e.target.className!=='yrLbl' && 
            e.target.className!=='yrDrop') && 
            (e.target.className!=='monInput' && e.target.className!=='monLbl' && 
            e.target.className!=='monDrop') &&
            (e.target.className!=='dayInput' && e.target.className!=='dayLbl' && 
            e.target.className!=='dayDrop'))
            {
                yrWrapPop.style.display='none';
                monWrapPop.style.display='none';
                dayWrapPop.style.display='none';
                yrWrapOn=true
                monWrapOn=true
                dayWrapOn=true
            }

    })







}
document.addEventListener('DOMContentLoaded',loginInit)