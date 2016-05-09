var http=require('http')
var url=require('url')
var fs=require('fs')
var path=require('path')
var loginCookie=require('./loginCookie')
var router=require('./pagemodule')
var pool_article=require('./dbconnecter.js')
var error=require('./errormodule.js')
var srv=http.createServer(function(req,res){
    loginCookie(pool_article,req,function(usr){
        var pathname=url.parse(req.url).pathname
        console.log("Request for " + pathname + " received.");
        if(router[pathname]!==undefined)
            return router[pathname](pool_article,req,res,usr)
        pathname='./data'+pathname
        fs.stat(pathname,function(err,stats){
            if(err){
                console.log(err)
                return error(404,res)
            }
            if(stats.isFile()){
                if(path.extname(pathname)==='.css'){
                    res.writeHead(200,{'Content-Type':'text/css'})
                }
                if(path.extname(pathname)==='.js'){
                    res.writeHead(200,{'Content-Type':'text/javascript'})
                }
                if(path.extname(pathname)==='.html'){
                    res.writeHead(200,{'Content-Type':'text/html'})
                }
                fs.createReadStream(pathname).pipe(res)
                return
            }
            return error(404,res)
        })
    })
})
srv.listen('8000')
