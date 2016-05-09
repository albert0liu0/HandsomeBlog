function insert(pool,title,content,orgid,pub,callback){
    var string_query='INSERT INTO blog_system.table_article VALUES (?,?,?,?,?,?)'
    pool.getConnection(function(err,connection){
        if(err)
            callback(err)
        connection.query(
            string_query,
            [
                'NULL',
                title,content,
                Date.now(),
                orgid,pub
            ],
            function (err){
                if(err)throw err
            }
        )
    })
}
function select(pool,query,callback){
    var rst
    pool.getConnection(function(err,connection){
        if(err)throw err
        var string_query='SELECT * FROM blog_system.table_article'
        connection.query(
            string_query,
            function(err,rows,field){
                if(err)
                    return callback(err)
                rst=rows
                console.log(rst)
                callback(null,rows)
            }
        )
    })
}
module.exports={
    'insert':insert,
    'select':select
}
