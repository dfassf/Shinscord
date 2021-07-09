function loginWork(){
    let logId = document.querySelector('#logId');
    let logPw = document.querySelector('#logPw');
    let loginSubmit = document.querySelector('#loginSubmit')
    async function loginTest(){

        let test = await axios.post('http://localhost:3000/user/logintest', {
        postid:logId.value,
        testing:'fromfront'
        })
        console.log('aaa')
        console.log(logId.value,logPw.value)
        console.log(test.data)
        // let data = { postid:logId.value, testing:'fromfront'}
        // let options = { 
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        // }
        // let test = await axios.post('http://localhost:3000/user/logintest',data,options)
        // console.log('aaa')
        // console.log(logId.value,logPw.value)
        // console.log(test.data)
    }

    loginSubmit.addEventListener('click',loginTest)
    





}
document.addEventListener('DOMContentLoaded',loginWork)