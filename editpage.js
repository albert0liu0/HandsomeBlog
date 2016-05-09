var fs=require('fs')
module.exports=function(pool,req,res){
    var array_data=[]
    req.on('data',function(data){
        array_data.push(data)
    })
    req.on('end',function(){
        var data=Buffer.concat(array_data).toString()
        if(data==='')return fs.createReadStream('./data/editpage.html').pipe(res)
        data=JSON.parse(data)
        pool.query(
            'INSERT INTO blog_system.article SET ?',{
                title:data.ttl,
                content:data.ctt,
                org:data.id,
                pub:data.pub
            },
            function(){
                res.end()
            }

        )
    })
}
