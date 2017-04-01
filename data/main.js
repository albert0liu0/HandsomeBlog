window.addEventListener('load',function(){
	document.body.style.visibility=''
	document.head.appendChild((function(){
		var css=document.createElement('link')
		css.rel='stylesheet'
		css.type='text/css'
		css.href='main.css'
		return css
	})())
})
