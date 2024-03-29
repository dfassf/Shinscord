function joinInit(){
    // 년월일 폼 돌리기

    let thisYear = new Date().getFullYear()
    let yrWrapPop = document.querySelector('.yrWrapPop');
    let monWrapPop = document.querySelector('.monWrapPop');
    let dayWrapPop = document.querySelector('.dayWrapPop');
    let yrInput = document.querySelector('.yrInput');
    let monInput = document.querySelector('.monInput');
    let dayInput = document.querySelector('.dayInput');
    let bdAlert = document.querySelector('.bdAlert')

    for(let i = thisYear; i>(thisYear-100); i--){
        let span = document.createElement('span');
        span.innerHTML = i
        span.className = 'yrWrapPopCnt'
        yrWrapPop.appendChild(span)
        span.addEventListener('click',()=>{
            yrInput.value = i
        })
    }

    for(let i = 12; i>(0); i--){
        let span = document.createElement('span');
        span.innerHTML = i
        span.className = 'monWrapPopCnt'
        monWrapPop.appendChild(span)
        span.addEventListener('click',()=>{
            monInput.value = i
        })
    }

    for(let i = 31; i>(0); i--){
        let span = document.createElement('span');
        span.innerHTML = i
        span.className = 'dayWrapPopCnt'
        dayWrapPop.appendChild(span)
        span.addEventListener('click',()=>{
            dayInput.value = i
        })
    }

    //생년월일 토글
    let yrWrapOn = false;
    let monWrapOn = false;
    let dayWrapOn = false;
    let yrWrap = document.querySelector('#yrWrap');
    let monWrap = document.querySelector('#monWrap');
    let dayWrap = document.querySelector('#dayWrap');    

    function bdValidCheck(){   
        //비정상 검사
        if(yrInput.value!=='' && monInput.value!=='' && dayInput.value!=='' &&
        (monInput.value>12 || yrInput.value>thisYear || yrInput.value<thisYear-100 || dayInput.value>31)){
            bdAlert.innerHTML = '유효한 생년월일을 입력해주세요';
            bdAlert.setAttribute('class', 'bdAlert alert');
        }else{
            //윤년식별
            if(yrInput.value!=='' && dayInput.value!=='' && monInput.value=='2'){
                if(yrInput.value % 4 !== 0 && dayInput.value>28){
                    bdAlert.innerHTML = '유효한 생년월일을 입력해주세요';
                    bdAlert.setAttribute('class', 'bdAlert alert');
                }
                else if(yrInput.value % 4 == 0 && dayInput.value>29){
                    bdAlert.innerHTML = '유효한 생년월일을 입력해주세요';
                    bdAlert.setAttribute('class', 'bdAlert alert');
                }
                else {
                    bdAlert.innerHTML = '';
                    bdAlert.setAttribute('class', 'bdAlert');
                }
            }
            // 30일 검사
            else if(yrInput.value!=='' && dayInput.value!=='' && 
                (monInput.value=='4' ||  monInput.value=='6' || monInput.value=='9' || monInput.value=='11')
                ){
                    if(dayInput.value>30){
                        bdAlert.innerHTML = '유효한 생년월일을 입력해주세요';
                        bdAlert.setAttribute('class', 'bdAlert alert');
                    }
                    else {
                        bdAlert.innerHTML = '';
                        bdAlert.setAttribute('class', 'bdAlert');
                    }
            }
            else{
                bdAlert.innerHTML = '';
                bdAlert.setAttribute('class', 'bdAlert');
            }
        }
    }
    
    yrWrap.addEventListener('click',(e)=>{
        if(yrWrapOn==true){
            yrWrapPop.style.display='block';
            monWrapPop.style.display='none';
            dayWrapPop.style.display='none';
        }
        if(yrWrapOn==false){
            yrWrapPop.style.display='none';
            monWrapPop.style.display='none';
            dayWrapPop.style.display='none';
        }
        yrWrapOn = !yrWrapOn;
        bdValidCheck();
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
        bdValidCheck();
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
        bdValidCheck();
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
                yrWrapOn=true;
                monWrapOn=true;
                dayWrapOn=true;
            }
        bdValidCheck();
    })

    yrWrap.addEventListener('focusout',bdValidCheck);
    monWrap.addEventListener('focusout',bdValidCheck);
    dayWrap.addEventListener('focusout',bdValidCheck);

    
}
document.addEventListener('DOMContentLoaded',joinInit)

