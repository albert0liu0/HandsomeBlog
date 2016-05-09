var crypto=require('crypto')
module.exports=function(pool,req,callback){
    var cookie=require('./parseCookie')(req)
    pool.query(
        'SELECT * FROM blog_system.user WHERE ?',
        {id:cookie.id},
        function(err,row){
            if(err)return err
            row=row[0]
            console.log(cookie.id)
            console.log(crypto.createHash('sha256').update(''+cookie.pwd+cookie.id).digest('hex'))
            console.log(row)
            if(row&&crypto.createHash('sha256').update(''+cookie.pwd+cookie.id).digest('hex')===row.password){
                console.log(cookie.id)
                callback(cookie.id)
            }
            else{
                console.log(0)
                callback(0)
            }
        }
    )
}

