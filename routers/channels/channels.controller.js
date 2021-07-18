const {sequelize, User, Server, Messages} = require('../../models/index');
const getCookie = require('../../middleware/getcookie');
const { Op } = require('sequelize');



// /login에서
let main = async (req, res) =>{






    res.render('./channels/main.html');
}

let mainGetUserInfo = async (req, res) => {
    console.log(req.headers.cookie,'ㅋㅋ')
    let loggedInUser = getCookie(req.headers.cookie)
    console.log(loggedInUser,'ㅋㅋ')
    let getUserInfo = await User.findOne({
        where:{
            useremail:loggedInUser
        }
    })
    let userServerInfo = [];
    let svrStrArr = getUserInfo.dataValues.servers.split(' ');
    console.log(getUserInfo.dataValues.servers,'ㅋㅋ')
    for(let i = 0; i < svrStrArr.length; i++){
        let result = await Server.findOne({
            where:{
                id:svrStrArr[i],
            },
            attributes:[
                'id', 'servername', 'logo', 'serverdomain'
            ]
        }) 
        if(result!==null){
            userServerInfo.push(result)
        }
    }
    res.json({userServerInfo})
}

let createServer = (req, res) =>{
    res.render('./channels/create.html')
}

let submitServer = async (req, res) =>{
    let {servername} = req.body;
    let loggedInUser = getCookie(req.headers.cookie)
    
    let svrimg = req.file == undefined ? '' : req.file.path;
    let serverImage = svrimg.replace('public\\','')

    let getServerInfo = await Server.findAll({
        attributes:['serverdomain']
    })

    let svrAddress = ''
    if(getServerInfo.length==0){
        while(svrAddress.length!==10){
            svrAddress = Math.random().toString(10).substr(2,10)
        }
    } else{
        for(let i = 0; i<getServerInfo.length; i++){
            while(svrAddress.length!==10 && svrAddress!==getServerInfo[i].dataValues.serverdomain){
                svrAddress = Math.random().toString(10).substr(2,10)
            }
        }
    }
    console.log(svrAddress)

    let createServer = await Server.create({
        servername,
        logo:serverImage,
        serverdomain: svrAddress,
    })
    let serverId = createServer.dataValues.id.toString(); 

    // console.log(serverId)

    let getUserInfo = await User.findOne({
        where:{
            useremail:loggedInUser
        }
    })

    let newServerList = ''
    let userServerList = getUserInfo.dataValues.servers
    newServerList = (userServerList + serverId + ' ')

    let updateUserServerInfo = await User.update({
        servers:newServerList,
    }, {where:{
        id:getUserInfo.dataValues.id
    }})
    res.redirect('/channels')
}

// 나중에 완성하기
// 나중에 완성하기
// 나중에 완성하기

let loadServerData = async (req, res) => {
    console.log(req.body)
}

let getFriendsData = async (req, res) => {
    let loggedInUser = getCookie(req.headers.cookie)
    let getUserInfo = await User.findOne({
        where:{
            useremail:loggedInUser
        },
        attributes:['id','friendslist']
    })

    let frLi = getUserInfo.dataValues.friendslist
    let frLi2 = frLi.split(' ')
    let friendsIdArr = [];
    let friendsInfoArr = [];
    frLi2.forEach((ele)=>{
        if(ele!==''){
            friendsIdArr.push(ele)
        }
    })

    for(let i = 0; i < friendsIdArr.length; i++){
        let result = await User.findOne({
            where:{
                id:friendsIdArr[i]
            },
            attributes:['id','username','pfp']
        })
        console.log(result.dataValues)
        friendsInfoArr.push(result.dataValues)
    }
    console.log('시작',friendsInfoArr)
    res.json({friendsInfoArr})
}

let loadChatData = async (req, res) => {
    let loggedInUser = getCookie(req.headers.cookie)
    console.log(loggedInUser,'ㅋㅋ')
    let getUserInfo = await User.findOne({
        where:{
            useremail:loggedInUser
        }
    })
    let loggedInUserId = getUserInfo.dataValues.id
    let {id} = req.body; //불러오는 사람꺼

    let asd = 'asd'
    let result = await Messages.findAll({
        where:{
            [Op.or]:[{sentfrom: id, sentto: loggedInUserId}, {sentto: id, sentfrom: loggedInUserId}],

        },
        order: [['id', 'DESC']],
        limit: 5,
    })
    let theOtherParty;
    if(result[0].sentfrom == id){
        console.log('보낸사람이 본인')
        theOtherParty = result[0].sentto
    } else{
        console.log('받은 사람이 본인')
        theOtherParty = result[0].sentfrom
    }


    let result2 = await User.findOne({
        where:{
            id:theOtherParty
        },
        attributes:['id', 'username', 'pfp']
    })


    
    res.json({result, result2})
}

let sendChat = async (req, res) => {
    let loggedInUser = getCookie(req.headers.cookie)
    let getUserInfo = await User.findOne({
        where:{
            useremail:loggedInUser
        },
        attributes:['id']
    })
    console.log(req.body)
    let {txtVal, id} = req.body
    let result = await Messages.create({
        sentfrom: getUserInfo.dataValues.id,
        sentto: id,
        content:txtVal
    })
    console.log('created')
    console.log(result)
}



module.exports = {
    main,
    mainGetUserInfo,
    createServer,
    submitServer,
    loadServerData,
    getFriendsData,
    loadChatData,
    sendChat,
}
