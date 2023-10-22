// Intereção do "Para você" do header

const paraVoce = document.getElementById('mostrar_conteudo')
const conteudoParaVoce = document.querySelector('.conteudo_paraVoce')

paraVoce.addEventListener('mouseenter', () => {
  conteudoParaVoce.style.height = '320px'
})

conteudoParaVoce.addEventListener('mousemove', () => {
  conteudoParaVoce.style.height = '320px'
})

paraVoce.addEventListener('mouseleave', () => {
  conteudoParaVoce.style.height = '0px'
})

conteudoParaVoce.addEventListener('mouseleave', () => {
  conteudoParaVoce.style.height = '0px'
})

// Funções celular

const telaInicial = document.querySelector('#inicial')
const botaoTelaInicial = document.querySelector('#btn_inicial')

botaoTelaInicial.addEventListener('click', () => {
  telaInicial.style.display = 'none'
})