window.addEventListener('load',function(event){
    var username=document.getElementById('username')
    var password=document.getElementById('password')
    var register=document.getElementById('register')
    var status_login=document.getElementById('status_login')
    login.addEventListener('click',function(event){
        var login_request=new XMLHttpRequest()
        var data={
            username:username.value,
            password:password.value,
        }
        login_request.open(
            'GET',
            './login?'+encodeURIComponent(JSON.stringify(data))
        )
        login_request.send()
        login_request.onreadystatechange=function(){
            if(login_request.readyState==3)
                status_login.innerHTML='Loading<br>'
            if(login_request.readyState==4){
                if(login_request.status=='200'){
                    if(login_request.responseText=='0'){
                        status_login.style.color='green'
                        status_login.innerHTML='Succefully logged in.<br>'
                    }
                    else{
                        status_login.style.color='red'
                        status_login.innerHTML='Incorrect username or password.<br>'
                    }
                }
                else{
                    status_login.style.color='red'
                    status_login.innerHTML='An error occurs, please try again.<br>'
                }
            }
		}
    })
})



window.addEventListener('load',function(event){
    var usrn=document.getElementById('usrn')
    var pwd=document.getElementById('pwd')
    var lgn=document.getElementById('lgn')
    var stt_lgn=document.getElementById('stt_lgn')
    lgn.addEventListener('click',function(event){
        var req=new XMLHttpRequest()
        var data={
            username:usrn.value,
            password:pwd.value,
        }
        req.open(
            'GET',
            './login?'+encodeURIComponent(JSON.stringify(data))
        )
        req.send()
        req.onreadystatechange=function(){
            if(req.readyState==3)
                stt_lgn.innerHTML='Loading<br>'
            if(req.readyState==4){
                if(req.status=='200'){
                    if(req.responseText=='0'){
                        stt_lgn.style.color='green'
                        stt_lgn.innerHTML='Succefully logged in.<br>'
                    }
                    else{
                        stt_lgn.style.color='red'
                        stt_lgn.innerHTML='Incorrect username or password.<br>'
                    }
                }
                else{
                    stt_lgn.style.color='red'
                    stt_lgn.innerHTML='An error occurs, please try again.<br>'
                }
            }
        }
    })
})
