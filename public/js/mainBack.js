async function mainBackInit(){
    let createServer = document.querySelector('.createServer');
    let mainWrap = document.querySelector('#wrap');
    let wrapBg = document.querySelector('.wrapBg');
    let closeBtn = document.querySelector('.closeBtn');
    let goCreate = document.querySelector('.goCreate');
    let svrNameInput = document.querySelector('.svrNameInput');
    let nameLabel = document.querySelector('.nameLabel');
    let serverNameSubmit = document.querySelector('.serverNameSubmit');
    let options = {headers: {'Content-Type': 'application/json'}}
    let serverLogoSubmit = document.querySelector('.serverLogoSubmit');
    let iconListArea = document.querySelector('#iconListArea');
    let serverNameHeader = document.querySelector('.serverNameHeader');

    let openChat = document.querySelector('#openChat');
    let ifServer = document.querySelector('.ifServer');
    let ifChat = document.querySelector('.ifChat');

    //서버 목록 불러오기

    let dataget = await axios.post('http://localhost:3000/channels')
    for(let i = 0; i<dataget.data.userServerInfo.length; i++){
        let {id, servername, logo, serverdomain} = dataget.data.userServerInfo[i]
        let newLogo = logo.split('public')[1]
        let div = document.createElement('div');
        div.className = `icn ${id}`;
        let span = document.createElement('span');
        span.className = 'icnMarker';
        let img = document.createElement('img');
        img.src = newLogo;
        img.className = `icnMain ${id}`;
        // img.style.width = '48px';
        // img.style.height = '48px';
        let name = document.createElement('span');
        name.className = `icnToolTip ${id}`;
        name.innerHTML = servername;
        div.appendChild(span);
        div.appendChild(img);
        div.appendChild(name);
        iconListArea.appendChild(div);
        div.addEventListener('mouseover',()=>{
            name.style.display = 'block';
            span.className = 'icnMarker mouseOn';
        })
        div.addEventListener('mouseout',()=>{
            name.style.display = 'none';
            span.className = 'icnMarker';
        })
        div.addEventListener('click',async ()=>{
            let data = {id, serverdomain}

            let loadServerData = await axios.post('http://localhost:3000/channels/l/',JSON.stringify(data),options)
        })
    }

    //채팅목록과 서버 채널 토글
     
    let switchChatServer = false;
    openChat.addEventListener('click',()=>{
        if(switchChatServer == false ){
            ifServer.style.display = 'none';
            ifChat.style.display = 'block';
            serverNameHeader.innerHTML = '친구 목록'
            getFriendsList()
        } else{
            ifServer.style.display = 'block';
            ifChat.style.display = 'none';
            serverNameHeader.innerHTML = '서버이름입니다.'
        }
        switchChatServer = !switchChatServer;
    })


    //친구목록 받아서 div 생성

    let friendsListArr = [];

    async function getFriendsList(){
        let data = {message:'requested the friends list of the logged in user'}
        let loadFriendsData = await axios.post('http://localhost:3000/channels/friends',JSON.stringify(data),options)
        let {friendsInfoArr} = loadFriendsData.data

        for(let i = 0; i<friendsInfoArr.length; i++){
            let {id, username, pfp} = friendsInfoArr[i]
            let div = document.createElement('div');
            div.className = `friends ${id}`
            let img = document.createElement('img');
            img.className = `avatar ${id}`
            if(pfp == "") img.src = "/images/shinscord_logo2.png";
            else img. src = pfp;
            let p = document.createElement('p');
            p.className = "friendName";
            p.innerHTML = username;
            let img2 = document.createElement('img');
            img2.className = `delChatLog ${id}`;
            img2.src = "/images/closebtn-wht.svg";
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(img2);
            ifChat.appendChild(div);
            friendsListArr.push(div)
        }
        chatRoomOpen()

    }

    async function chatRoomOpen(){
        for(let i = 0; i<friendsListArr.length; i++){
            console.log('ㅁㄴㅇ')
            friendsListArr[i].addEventListener('click',async(e)=>{
                let data = {message:'requested the friend\'s info to get the chat log'}
                let {className} = e.currentTarget
                className.split(' ')
                console.log(className.split(' ')[1])
                let loadFriendsData = await axios.post('http://localhost:3000/channels/friends',JSON.stringify(data),options)
                let {friendsInfoArr} = loadFriendsData.data
                let {id, username, pfp} = friendsInfoArr[i]
                console.log(id)
                const socket = io.connect('http://localhost:3000/channels/friends');

                socket.on('connect',()=>{
                    console.log('접속됨')
                })
                socket.emit('send',{msg : 'sent'})
            })


            
        }
    }

}

document.addEventListener('DOMContentLoaded',mainBackInit)