var fs=require('fs')
module.exports=function(stt,res){
    res.writeHead(stt)
    fs.createReadStream('./data/'+stt+'.html').pipe(res)
}
