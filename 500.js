var fs=require('fs')
module.exports=function(pool,req,res){
    res.writeHead(500)
    fs.createReadStream('./data/500.html').pipe(res)
}
