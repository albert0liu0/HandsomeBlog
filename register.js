var error=require('./errormodule')
var crypto=require('crypto')
var url=require('url')
var fs=require('fs')
function response(res,val){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write(val)
    res.end()
}
function register(pool,req,res){
    var query=url.parse(req.url).query
    if(query===null||query.length===0){
        res.writeHead(
            '200',
            {'Content-Type':'text/html'}
        )
        fs.createReadStream('./data/register.html').pipe(res)
        return
    }
    query=decodeURIComponent(query)
    query=JSON.parse(query)
    if(
        query.username&&
        query.password&&
        query.nickname
    ){
        pool.query(
            'INSERT INTO blog_system.user SET ?',{
                username:query.username,
                nickname:query.nickname,
                userkey:'key'
            },function(err,rsl){
                if(err)return response(res,'-1')
                var hashpwd=
                    crypto.createHash('sha256').update(
                        crypto.createHash('sha256').update(
                            query.password+rsl.insertId
                        ).digest('hex')+rsl.insertId
                    ).digest('hex')
                pool.query('UPDATE blog_system.user SET ? WHERE ?',[{
                    password:hashpwd
                },{
                    id:rsl.insertId
                }],function(err){
                    if(err)return response(res,'-1')
                    return response(res,'0')
                })
            }
        )
    }
}
register.checkusername=function(pool,req,res){
    var usrn=url.parse(req.url).query
    pool.query(
        'SELECT * FROM blog_system.user WHERE ?',
        {username:usrn},
        function(err,row){
            if(err)
                return response(res,'-1')
            response(res,''+row.length)
        }
    )
}
module.exports=register
