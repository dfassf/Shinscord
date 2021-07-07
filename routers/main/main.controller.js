let main=(req,res)=>{
    res.render('index.html')
}

let login=(req,res)=>{
    res.render('login.html')
}

module.exports={
    main,
    login
}