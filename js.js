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
const metade = window.innerHeight * 0.8;
function ScrollAnima(){
  sessoes.forEach((sessao)=>{
   const sessaoTop = sessao.getBoundingClientRect().top
    const seessaoInvi = (sessaoTop - metade) < 0
    if(seessaoInvi){
      sessao.classList.add('ativos')
    }else{
      sessao.classList.remove('ativos')
    }
    console.log(metade)
  })
}

const imgsAnima = document.querySelector('.produtos-container')
const metades = window.innerHeight * 0.3
function animaProdutos(){
  const blue = document.querySelector('.animaPurple')
  const pink = document.querySelector('.animaPink')
  const purple = document.querySelector('.animaBlue')
    const AnimaTop = imgsAnima.getBoundingClientRect().top
    const animaInvi = (AnimaTop - metades) > 0
    if(animaInvi){
      imgsAnima.classList.add('mostrar')
      pink.classList.add('mostrar')
      blue.classList.add('mostrar')
      purple.classList.add('mostrar')
    }else{
      imgsAnima.classList.remove('mostrar')
      pink.classList.remove('mostrar')
      blue.classList.remove('mostrar')
      purple.classList.remove('mostrar')

    }
}

window.addEventListener('scroll',ScrollAnima)
window.addEventListener('scroll',animaProdutos)

ScrollAnima()
animaProdutos()



