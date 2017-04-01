function Page(title,content){
    var divPage=document.createElement('div')
    var divTitle=document.createElement('div')
    divTitle.innerHTML=title
    divTitle.className='pageTitle'
    var divContent=document.createElement('div')
    divContent.innerHTML=content
    divContent.className='pageContent'
    divPage.appendChild(divTitle)
    divPage.appendChild(divContent)
    this.div=divPage
}
