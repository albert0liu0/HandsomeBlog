window.addEventListener('load',function(event){
    var username=document.getElementById('username')
    var spanUsernameValid=document.getElementById('valid_username')
    var check=document.getElementById('check')
    var spanUsernameCheck=document.getElementById('check_username')
	var displayname=document.getElementById('displayname')
	var spanDisplaynameValid=document.getElementById('valid_displayname')
    var password=document.getElementById('password')
    var spanPasswordValid=document.getElementById('valid_password')
    var repassword=document.getElementById('repassword')
    var spanPasswordConfirmed=document.getElementById('valid_repassword')
    var register=document.getElementById('register')
    var spanStatusRegister=document.getElementById('spanStatusRegister')
    usernameValid()
	displaynameValid()
    passwordValid()
    confirmPasswordValid()
    repassword.onpaste=function(){
		spanPasswordConfirmed.value='You should confirm your password instead of pasting it.'
        return false
    }
    check.addEventListener('click',function(event){
        var checkRequest=new XMLHttpRequest()
        checkRequest.open(
            'GET',
            './checkusername?'+encodeURIComponent(username.value)
        )
        checkRequest.send()
        checkRequest.onreadystatechange=function(){
            if(checkRequest.readyState==3){
				spanUsernameCheck.style.color='white'
                spanUsernameCheck.innerHTML='Loading<br>'
			}
            if(checkRequest.readyState==4){
                if(checkRequest.status=='200'){
                    if(checkRequest.responseText=='0'){
                        spanUsernameCheck.style.color='green'
                        spanUsernameCheck.innerHTML='The username is valid.<br>'
                    }
                    else{
                        spanUsernameCheck.style.color='red'
                        spanUsernameCheck.innerHTML='The username is used.<br>'
                    }
                }
                else{
                    spanUsernameCheck.style.color='red'
                    spanUsernameCheck.innerHTML='An error occurs, please try again.<br>'
                }
            }
        }
    })
    register.addEventListener('click',function(event){
        var registerRequest=new XMLHttpRequest()
        var data={
            username:usrn.value,
            password:pwd.value,
            nickname:nckn.value
        }
        registerRequest.open(
            'GET',
            './register?'+encodeURIComponent(JSON.stringify(data))
        )
        registerRequest.send()
        registerRequest.onreadystatechange=function(){
            if(registerRequest.readyState==3)
                spanStatusRegister.innerHTML='Loading<br>'
            if(registerRequest.readyState==4){
                if(requestRequest.status=='200'){
                    if(registerRequest.responseText=='0'){
                        spanStatusRegister.style.color='green'
                        spanStatusRegister.innerHTML='Succefully registered.<br>'
                    }
                    else{
                        spanStatusRegister.style.color='red'
                        spanStatusRegister.innerHTML='The username is used.<br>'
                    }
                }
                else{
                    spanStatusRegister.style.color='red'
                    spanStatusRegister.innerHTML='An error occurs, please try again.<br>'
                }
            }
        }
    })
    function usernameValid(){
        username.addEventListener('input',function(){
            var value=username.value
            var span=document.getElementById('valid_username')
            if(lengthValid()===1){
                span.style.color='red'
                span.innerHTML=value.length+' characters, too long'
                if(componentValid()){
                    span.innerHTML+='.'
                    return false
                }
                span.innerHTML+=', and the username you assigned includes illegal characters.'
                return false
            }
            if(lengthValid()===-1){
                span.style.color='red'
                span.innerHTML=value.length+' characters, too short'
                if(componentValid()){
                    span.innerHTML+='.'
                    return false
                }
                span.innerHTML+=', and the username you assigned includes illegal characters.'
                return false
            }
            if(!componentValid()){
                span.style.color='red'
                span.innerHTML='The username you assigned includes illegal characters.'
                return false
            }
            span.style.color='green'
            span.innerHTML=value.length+' characters, valid.'

            function lengthValid(){
                if(value.match(/^.{0,4}$/)){
                    return -1
                }
                if(value.match(/^.{17,}$/)){
                    return 1
                }
                return 0
            }
            function componentValid(){
                if(value.match(/[^a-z\d]+/)){
                    return false
                }
                return true
            }
        })
    }
    function displaynameValid(){
        displayname.addEventListener('input',function(){
            var value=displayname.value
            var span=document.getElementById('valid_displayname')
            if(lengthValid()===1){
                span.style.color='red'
                span.innerHTML=value.length+' characters, too long'
                if(componentValid()){
                    span.innerHTML+='.'
                    return false
                }
                span.innerHTML+=', and the display name you assigned includes illegal characters.'
                return false
            }
            if(lengthValid()===-1){
                span.style.color='red'
                span.innerHTML=value.length+' characters, too short'
                if(componentValid()){
                    span.innerHTML+='.'
                    return false
                }
                span.innerHTML+=', and the display name you assigned includes illegal characters.'
                return false
            }
            if(!componentValid()){
                span.style.color='red'
                span.innerHTML='The display name you assigned includes illegal characters.'
                return false
            }
            span.style.color='green'
            span.innerHTML=value.length+' characters, valid.'

            function lengthValid(){
                if(value.match(/^.{0,4}$/)){
                    return -1
                }
                if(value.match(/^.{33,}$/)){
                    return 1
                }
                return 0
            }
            function componentValid(){
                if(value.match(/[^a-z\d]+/)){
                    return false
                }
                return true
            }
        })
    }
    function passwordValid(){
        password.addEventListener('input',function(){
            var value=password.value
            var span=document.getElementById('valid_password')
            if(value.match(/^.{4,}$/)){
                span.style.color='green'
                span.innerHTML=value.length+' characters, valid.'
                return true
            }
            else{
                span.style.color='red'
                span.innerHTML=value.length+' characters, invalid.'
                return false
            }
        })
    }
    function confirmPasswordValid(){
        repassword.addEventListener('input',function(){
            var span=document.getElementById('valid_repassword')
            if(repassword.value===password.value){
                span.style.color='green'
                span.innerHTML='Password confirmed.'
				if(password.value===''){
					span.innerHTML=''
				}
            }
            else{
                span.style.color='red'
                span.innerHTML='Password unconfirmed.'
            }
        })
        password.addEventListener('input',function(){
            var span=document.getElementById('valid_repassword')
            if(repassword.value===password.value){
                span.style.color='green'
                span.innerHTML='Password confirmed.'
				if(password.value===''){
					span.innerHTML=''
				}
            }
            else{
                span.style.color='red'
                span.innerHTML='Password unconfirmed.'
            }
        })

    }
})
