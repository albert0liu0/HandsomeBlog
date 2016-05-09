var url=require('url')
var fs=require('fs')
var crypto=require('crypto')
function response(res,val){
    res.writeHead('200',{'Content-Type':'text/plain'})
    res.write(val)
    res.end()
}
module.exports=function(pool,req,res){
    var query=url.parse(req.url).query
    query=decodeURIComponent(query)
    query=JSON.parse(query)
    if(query===null){
        res.writeHead('200',{'Content-Type':'text/html'})
        fs.createReadStream('./data/login.html').pipe(res)
        return
    }
    var usr=query.username
    var pwd=query.password
    pool.query(
        'SELECT * FROM blog_system.user WHERE ?',
        {username:usr},
        function(err,row){
            if(err)return response(res,'-1')
            if(row.length===0)
                return response(res,'1')
            row=row[0]
            var id=row.id
            var hashpwd=
                crypto.createHash('sha256').update(
                    crypto.createHash('sha256').update(
                        pwd+id
                    ).digest('hex')+id
                ).digest('hex')
            if(hashpwd!==row.password){
                return response(res,'1')
            }
            var exp=10
            var cookie=[]
            cookie.push('id='+id)
            cookie.push('pwd='+crypto.createHash('sha256').update(pwd+id).digest('hex'))
            cookie.push('max-age='+exp)
            res.writeHead(200,{'Set-Cookie':cookie,'Content-Type': 'text/html'})
            res.end('0')
        }
    )
}
