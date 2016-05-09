var crypto=require('crypto')
module.exports=function(req){
    var cookie={}
    req.headers.cookie&&req.headers.cookie.split(';').forEach(
        function(c){
            var parts=c.split('=');
            cookie[parts[0].trim()] = (parts[1]||'').trim();
        }
    )
    return cookie
}
