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
}

document.addEventListener('DOMContentLoaded',mainBackInit)