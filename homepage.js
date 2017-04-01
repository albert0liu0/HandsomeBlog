var select=require('./dbcommand').select
var url=require('url')
var fs=require('fs')
module.exports=function(pool,req,res,usr){
    console.log('homepage')
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream('./data/home.html').pipe(res)
}

