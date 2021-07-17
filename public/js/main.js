function mainInit(){
    let createServer = document.querySelector('.createServer');
    let mainWrap = document.querySelector('#wrap');
    let wrapBg = document.querySelector('.wrapBg');
    let closeBtn = document.querySelectorAll('.closeBtn');
    let goCreate = document.querySelector('.goCreate');
    let stepOne = document.querySelector('.stepOne');
    let stepTwo = document.querySelector('.stepTwo');
    let stepThree = document.querySelector('.stepThree');
    let backToOne = document.querySelector('.backToOne');
    let backToTwo = document.querySelector('.backToTwo');
    let svrNameInput = document.querySelector('.svrNameInput');
    let nameLabel = document.querySelector('.nameLabel');
    let serverNameSubmit = document.querySelector('.serverNameSubmit');
    let svrFileInput = document.querySelector('#svrFileInput');
    let beforeUpload = document.querySelector('.beforeUpload');
    let afterUpload = document.querySelector('.afterUpload');
    let serverName = document.querySelector('.serverName');
    let serverNameHeader = document.querySelector('.serverNameHeader');

    stepThree.style.display='none'
    stepTwo.style.display='none'
    stepOne.style.display='block'     

    createServer.addEventListener('click',()=>{
        wrapBg.style.display = 'block';
        mainWrap.style.display = 'none';
    })

    wrapBg.addEventListener('click',(e)=>{
        if(e.target.className=='wrapBg'){
            wrapBg.style.display = 'none';
            mainWrap.style.display = 'flex';
        }
    })

    for(let i=0;i<closeBtn.length;i++){
        closeBtn[i].addEventListener('click',()=>{
            wrapBg.style.display = 'none';
            mainWrap.style.display = 'flex';
        })
    }

    goCreate.addEventListener('click',()=>{
        stepTwo.style.display='block';
        stepOne.style.display='none';  
    })

    serverNameSubmit.addEventListener('click',()=>{
        if(svrNameInput.value.length<=1){
            console.log('tooshort');
            nameLabel.innerHTML = '서버 이름이 너무 짧습니다.';
            nameLabel.style.color = 'red';
        } else if(svrNameInput.value.length>51){
            console.log('toolong');
            nameLabel.innerHTML = '서버 이름은 50자 미만이어야 합니다.';
            nameLabel.style.color = 'red';
        } else{
            nameLabel.innerHTML = '서버 이름을 정해주세요.'
            nameLabel.style.color = 'black';
            serverName.value = svrNameInput.value;
            stepThree.style.display='block';
            stepTwo.style.display='none';
            stepOne.style.display='none';
        }
    })

    backToOne.addEventListener('click',()=>{
        stepTwo.style.display='none'
        stepOne.style.display='block'   
        stepThree.style.display='none'
    })

    backToTwo.addEventListener('click',()=>{
        stepTwo.style.display='block'
        stepThree.style.display='none'
        stepOne.style.display='none'      
    })

    svrFileInput.addEventListener('change',(e)=>{
        let uploaded = new FileReader();
        uploaded.onload = function(e){
            if(afterUpload.hasChildNodes()){
                afterUpload.removeChild(afterUpload.firstChild)
            }
            let img = document.createElement("img"); 
            img.setAttribute("src", e.target.result); 
            img.style.width = '48px'
            img.style.height = '48px'
            img.style.borderRadius = '24px'
            afterUpload.appendChild(img);
            afterUpload.style.display = 'block',
            beforeUpload.style.display = 'none'
        }
        uploaded.readAsDataURL(e.target.files[0]);
    })
}

document.addEventListener('DOMContentLoaded',mainInit)