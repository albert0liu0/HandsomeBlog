window.addEventListener('load',function(event){
	var album=[];
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/13227014_1087426284652971_4157828690975461520_n.jpg?oh=13ad9e0171b3d4af9e34c58f9d1b6064&oe=5809EBF5')
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/993852_1000702489992018_7381499629806521437_n.jpg?oh=23b169d6ee25a865407786e052072bb7&oe=57D1F1DF')
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1526247_851241324938136_3869681836215526869_n.jpg?oh=f1bca52943ee7bc064f5362358ff1611&oe=57D0508E')
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-0/p206x206/7747_642003539195250_1967443826_n.jpg?oh=a8e4dd29deb804bcf9aa87a178929ae2&oe=57C20F1C')
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/10435570_800128873382715_6894290921746412779_n.jpg?oh=b33587e3b228a20e0db649b530258132&oe=57C78A41')
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/11028028_849828021746133_5133339546789827676_n.jpg?oh=a351b543bf3682e22af7bb8654d9f232&oe=5804F692')
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/12347965_983595125036088_3519041508560626251_n.jpg?oh=06fb77088714b19e07b032cf29b4e6ea&oe=57C34467')
	album.push('https://scontent-tpe1-1.xx.fbcdn.net/v/l/t1.0-9/1239882_578953972166874_1381701948_n.jpg?oh=63a639d64825e009e7a2bd6488806e83&oe=580060B0')
	var content=document.getElementById('content')
	for(let u of album){
		content.appendChild(urlToA(u))
	}
	preview()
	function urlToA(url){
		var a=document.createElement('a')
		var img=document.createElement('img')
		img.src=url
		img.style.height='33%'
		img.style.width='33%'
		img.style.overflow='hidden'
		img.margin='0'
		img.onclick=function(){
			var screen=document.getElementById('screen')
			var esc=document.getElementById('esc')
			screen.src=url
			screen.style.display='block'
			esc.style.display='block'
		}
		a.appendChild(img)
		return a 
	}
	function preview(){
		var screen=document.createElement('img')
			screen.id='screen'
		screen.style.width='40%'
		screen.style.left='30%'
		screen.style.top='10%'
		screen.style.position='fixed'
		screen.style.display='none'
		var esc=document.createElement('div')
		esc.id='esc'
		esc.style.width='100%'
		esc.style.height='100%'
		esc.style.left='0%'
		esc.style.bottom='0%'
		esc.style.position='fixed'
		esc.style.background='rgba(0,0,0,0.8)'
		esc.style.display='none'
		esc.onclick=function(){
			screen.style.display='none'
			esc.style.display='none'
		}
		content.appendChild(esc)
		content.appendChild(screen)
	}
		
})
