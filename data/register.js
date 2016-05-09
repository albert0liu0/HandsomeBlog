window.addEventListener('load',function(event){
    var usrn=document.getElementById('usrn')
    var pwd=document.getElementById('pwd')
    var rpwd=document.getElementById('rpwd')
    var chk=document.getElementById('chk')
    var rgst=document.getElementById('rgst')
    var vld_usrn=document.getElementById('vld_usrn')
    var stt_rgst=document.getElementById('stt_rgst')
    chk.addEventListener('click',function(event){
        var req=new XMLHttpRequest()
        req.open(
            'GET',
            './checkusername?'+encodeURIComponent(usrn.value)
        )
        req.send()
        req.onreadystatechange=function(){
            if(req.readyState==3)
                vld_usrn.innerHTML='Loading<br>'
            if(req.readyState==4){
                if(req.status=='200'){
                    if(req.responseText=='0'){
                        vld_usrn.style.color='green'
                        vld_usrn.innerHTML='The username is valid.<br>'
                    }
                    else{
                        vld_usrn.style.color='red'
                        vld_usrn.innerHTML='The username is used.<br>'
                    }
                }
                else{
                    vld_usrn.style.color='red'
                    vld_usrn.innerHTML='An error occurs, please try again.<br>'
                }
            }
        }
    })
    rgst.addEventListener('click',function(event){
        var req=new XMLHttpRequest()
        var data={
            username:usrn.value,
            password:pwd.value,
            nickname:nckn.value
        }
        req.open(
            'GET',
            './register?'+encodeURIComponent(JSON.stringify(data))
        )
        req.send()
        req.onreadystatechange=function(){
            if(req.readyState==3)
                stt_rgst.innerHTML='Loading<br>'
            if(req.readyState==4){
                if(req.status=='200'){
                    if(req.responseText=='0'){
                        stt_rgst.style.color='green'
                        stt_rgst.innerHTML='Succefully registered.<br>'
                    }
                    else{
                        stt_rgst.style.color='red'
                        stt_rgst.innerHTML='The username is used.<br>'
                    }
                }
                else{
                    stt_rgst.style.color='red'
                    stt_rgst.innerHTML='An error occurs, please try again.<br>'
                }
            }
        }
    })
})
