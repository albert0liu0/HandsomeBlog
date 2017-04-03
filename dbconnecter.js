var mysql=require('mysql')
var dbinfor=require('./dbinfor')
var pool=mysql.createPool(dbinfor)
module.exports=pool
