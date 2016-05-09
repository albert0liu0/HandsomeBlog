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
