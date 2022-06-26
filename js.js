//linha aumentar ao entrar na pag
function aumentarLinha(){
 document.querySelectorAll('.linha-sobre').forEach(item =>{
   item.style.width = '100%'
 })
}

setTimeout(aumentarLinha,500)

//scroll suave botao voltar


function subirTela(){
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'   
  })
}

function aparecerBotaoScroll(){
  let verifica = window.scrollY
  let botao = document.querySelector('.bolaScroll')

  if(verifica <= 450){
    botao.classList.add('ativo')
  }else{
    botao.classList.remove('ativo')
  }
  console.log(verifica)
 
}

window.addEventListener('scroll', aparecerBotaoScroll)


