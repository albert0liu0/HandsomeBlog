window.addEventListener('load',function(event){
    var id=document.getElementById('id')
    var ttl=document.getElementById('ttl')//title
    var ctt=document.getElementById('ctt')//content
    var pub=document.getElementById('pub')//public
    var edt=document.getElementById('edt')
    var stt_edt=document.getElementById('stt_edt')
    edt.addEventListener('click',function(event){
        var req=new XMLHttpRequest()
        req.open(
            'POST',
            './editpage'
        )
        var body_req={}
        body_req.ttl=ttl.value;
        body_req.ctt=ctt.value;
        body_req.pub=(pub.checked)?'True':'False';
        body_req.org=id.value;

        req.send(encodeURIComponent(JSON.stringify(body_req)))
        req.onreadystatechange=function(){
            if(req.readyState==3) stt_edt.innerHTML='Loading<br>'
            if(req.readyState==4){
                if(req.status=='200'){
                    stt_edt.style.color='green'
                    stt_edt.innerHTML='Successfully edited.<br>'
                }
                else{
                    console.log(req.status)
                    stt_edt.style.color='red'
                    stt_edt.innerHTML='An error occurs, please try again.<br>'
                }
            }
        }
    })
})
