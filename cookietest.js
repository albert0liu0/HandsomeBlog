var url=require('url')
var fs=require('fs')
module.exports=function(pool,req,res,usr){
    res.writeHead('200',{'Content-Type':'text/plain'})
    res.end(usr)
}
