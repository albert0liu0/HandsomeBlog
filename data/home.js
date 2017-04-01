window.addEventListener('load',function(){
	document.head.appendChild((function(){
		var css=document.createElement('link')
		css.rel='stylesheet'
		css.type='text/css'
		css.href='home.css'
		return css
	})())
	var content=document.getElementById('content')
	var page=[]
        var pageRequest=new XMLHttpRequest()
        pageRequest.open(
            'GET',
            './getpage?1-10'
        )
        pageRequest.send()
        pageRequest.onreadystatechange=function(){
            if(checkRequest.readyState==4){
                if(checkRequest.status=='200'){
                    console.log(checkRequest.responseText)
		}
	    }
	}
	for(let p of page){
		content.appendChild(p.div)
	}	
})
