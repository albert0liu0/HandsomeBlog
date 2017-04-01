var fs=require('fs')
module.exports=function(pool,req,res){
    res.writeHead(400)
	res=`
		<!DOCTYPE html>
		<html>
		<head>
		<meta http-equiv="Content-Type" content="text/html"; charset="uft-8">
		<title>Bad Request</title>
		</head>
		<body>
		<h1>Bad Request</h1>
		</body>
		</html>
	`
	res.end()
}
