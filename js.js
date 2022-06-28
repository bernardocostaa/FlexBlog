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

  if(verifica <= 600){
    botao.classList.add('ativo')
  }else{
    botao.classList.remove('ativo')
  }
 
}

window.addEventListener('scroll', aparecerBotaoScroll)


//Anima foto
const sessoes = document.querySelectorAll('.js-scroll')
const metade = window.innerHeight * 0.5;
function ScrollAnima(){
  sessoes.forEach((sessao)=>{
    sessaoTop = sessao.getBoundingClientRect().top
    console.log(sessaoTop)
    const seessaoInvi = (sessaoTop - metade) < 0
    if(seessaoInvi){
      sessao.classList.add('ativos')
    }else{
      sessao.classList.remove('ativos')
    }
  })
}

window.addEventListener('scroll',ScrollAnima)


ScrollAnima()



