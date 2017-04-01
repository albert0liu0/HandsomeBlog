window.addEventListener('load',function(){
	var footer=document.getElementById('footer')
	footer.innerHTML=(`
		<link rel='stylesheet' type='text/css' href='footer.css'>
		<div>
			<a href=home.html>Homepage</a><br>
		</div>
		<div>
			<a href=about.html>About this site</a><br>
			<a href=handsome.html>About the author</a><br>
			<a href=album.html>The author's album</a><br>
		</div>
		<div>
			<a href=register.html>Register</a><br>
			<a href=login.html>Login</a><br>
		</div>
	`)
})
