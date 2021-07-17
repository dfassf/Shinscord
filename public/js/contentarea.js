/*function contentareaInit(){

let contentMain = document.querySelector('#contentMain');
let typeChat = document.querySelector('.typeChat');
let typeChatFrame = document.querySelector('.typeChatFrame');
let txtInput = document.querySelector('.txtInput');
let contentListArea = document.querySelector('.contentListArea');
let wrap = document.querySelector('#wrap')


console.log(txtInput.style.height)
txtInput.addEventListener('keydown',(e)=>{
    if(e.key == "Enter" && e.shiftKey == true){ 
        // let addValue = 20+txtInput.scrollHeight
        // let go = true;
        // if (addValue>150) go = false;
        // console.log(contentMain.style.paddingBottom)
        // console.log('줄띄기');
        // txtInput.value += '\r\n';

        // console.log(addValue>150)
        // if(go){
        //     let contentMainPadding = contentMain.style.paddingBottom;
        //     txtInput.style.height = (20+txtInput.scrollHeight)+"px";
        //     typeChat.style.height = (20+typeChat.scrollHeight)+"px";
        //     contentMain.style.paddingBottom = (20+contentMainPadding)+"px";
        //     typeChatFrame.style.height = (20+typeChatFrame.scrollHeight)+"px";

        // }
    } 
    if(e.key == "Enter" && e.shiftKey == false){
        console.log('전송')
        e.preventDefault()

    }
})

txtInput.addEventListener('keyup',(e)=>{
    console.log('asd')
    console.log(e)
    if(e.key == "Enter" && e.shiftKey == true){ 
        // let addValue = 20+txtInput.scrollHeight
        // let go = true;
        // if (addValue>150) go = false;
        // console.log(contentMain.style.paddingBottom)
        // console.log('줄띄기');
        // txtInput.value += '\r\n';

        // console.log(addValue>150)
        // if(go){
        //     let contentMainPadding = contentMain.style.paddingBottom;
        //     txtInput.style.height = (20+txtInput.scrollHeight)+"px";
        //     typeChat.style.height = (20+typeChat.scrollHeight)+"px";
        //     contentMain.style.paddingBottom = (20+contentMainPadding)+"px";
        //     typeChatFrame.style.height = (20+typeChatFrame.scrollHeight)+"px";

        // }
    } 
    if(e.key == "Enter" && e.shiftKey == false){
        console.log('전송')
        e.preventDefault()

    }
})


}


document.addEventListener('DOMContentLoaded',contentareaInit)*/

// 

function contentareaInit(){

    let contentMain = document.querySelector('#contentMain');
    let typeChat = document.querySelector('.typeChat');
    let typeChatFrame = document.querySelector('.typeChatFrame');
    let txtInput = document.querySelector('.txtInput');
    let contentListArea = document.querySelector('.contentListArea');
    let wrap = document.querySelector('#wrap')
    
    

    
    txtInput.addEventListener('keydown',(e)=>{
        console.log('asd')
        console.log(e)
        if(e.key == "Enter" && e.shiftKey == true){ 

            console.log('줄띄기');

        } 
        if(e.key == "Enter" && e.shiftKey == false){
            console.log('전송')
            e.preventDefault()
    
        }
    })
    
    
    }
    
    
    document.addEventListener('DOMContentLoaded',contentareaInit)