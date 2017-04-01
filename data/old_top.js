var createbar=function(){
    var bar=document.createElement('div')
    bar.style.height='50px'
    bar.style.width='100%'
    bar.style.position='fixed'
    bar.style.backgroundColor='black'
    bar.style.top='0'
    bar.style.left='0'
    bar.style.display='table'
    bar.style.verticalAlign='middle'
    return bar
}
var createbutton=function(txt){
    var button=document.createElement('div')
    button.style.height='100%'
    button.style.width='200px'
    button.style.color='white'
    button.style.font='30px serif'
    button.style.position='relative'
    button.style.top='0'
    button.style.verticalAlign='middle'
    button.style.left='0'
    button.style.display='table-cell'
    button.innerHTML=txt
    return button
}
window.addEventListener('load',function(event){
    var bar=createbar()
    var login=createbutton('LOGIN')
    var register=createbutton('REGISTER')
    var logout=createbutton('LOGOUT')
    logout.onclick=function(){
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=; max-age=0";
        }
    }
    var cookie=createbutton(document.cookie)
    console.log(document.cookie)
    bar.appendChild(login)
    bar.appendChild(register)
    bar.appendChild(cookie)
    bar.appendChild(logout)
    document.body.appendChild(bar)
})
