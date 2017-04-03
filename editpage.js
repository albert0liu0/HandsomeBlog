var fs=require('fs')
var error=require('./errormodule')
module.exports=function(pool,req,res){
    var array_data=[]
    /*req.on('data',function(data){
        array_data.push(data)
    })*/
    req.on('data',[].push.bind(array_data))
    req.on('end',function(){
        var data=decodeURIComponent(Buffer.concat(array_data).toString())
        console.log("Data:"+data)
        if(data==='')return fs.createReadStream('./data/editpage.html').pipe(res)
	try{
	    data=JSON.parse((data))
	}catch(e){return error(400,res)}
        pool.query(
            'INSERT INTO blog_system.article SET ?',{
                title:data.ttl,
                content:data.ctt,
                org:data.org,
                pub:data.pub
            },
            function(){
                res.end()
            }
        )
    })
}
