window.addEventListener('load',function(){
    document.head.appendChild(cssDiv('header.css'))
    document.head.appendChild(cssDiv('https://fonts.googleapis.com/icon?family=Material+Icons'))
    var link=document.createElement('div')
    link.id='headerLink'
    var account=document.createElement('div')
    account.id='headerAccount'
    var header=document.getElementById('header')
    var home=document.createElement('a')
    home.className='material-icons'
    home.innerHTML='homeHOME'
    home.href='home.html'
    var top=document.createElement('a')
    top.className='material-icons'
    top.innerHTML='publishTOP'
    top.href='javascript:window.scrollTo(0,0)'
    var about=document.createElement('a')
    about.className='material-icons'
    about.innerHTML='infoABOUT'
    about.href='about.html'
    var album=document.createElement('a')
    album.className='material-icons'
    album.innerHTML='view_quiltALBUM'
    album.href='album.html'
    var register=document.createElement('a')
    register.className='material-icons'
    register.innerHTML='person_addREGISTER'
    register.href='register.html'
    var login=document.createElement('a')
    login.className='material-icons'
    login.innerHTML='exit_to_appLOGIN'
    login.href='login.html'
    link.appendChild(home)
    link.appendChild(top)
    link.appendChild(about)
    link.appendChild(album)
    account.appendChild(register)
    account.appendChild(login)
    header.appendChild(link)
    header.appendChild(account)
    var time=document.createElement('div')
    time.id='headerTime'
    startTime(time)
    header.appendChild(time)
})
function cssDiv(href){
    var css=document.createElement('link')
    css.rel='stylesheet'
    css.type='text/css'
    css.href=href
    return css
}
function startTime(div){
    var now=new Date()
    div.innerHTML=''+
    pad(2,''+now.getHours())+':'+
    pad(2,''+now.getMinutes())+':'+
    pad(2,''+now.getSeconds())+'.'+
    pad(3,''+now.getMilliseconds())
    window.setTimeout(function(){startTime(div)},61)
}
	
function pad(digit,string){
    while(string.length<digit){
	    string='0'+string
    }
    return string
}
