
function aumentarLinha(){
 document.querySelectorAll('.linha-sobre').forEach(item =>{
   item.style.width = '100%'
 })
}

setTimeout(aumentarLinha,500)
