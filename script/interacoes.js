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

const telaInicial = document.querySelector('.inicial')
const elementosTelaInicial = telaInicial.querySelectorAll('h1, h2, p, button')
const botaoTelaInicial = document.querySelector('#btn_inicial')

const telaInvestimeto = document.querySelector('#tela_investimento')
const elementosInvestimento = telaInvestimeto.querySelector('.conteudo_investimento')
const botaoVoltar = document.querySelector('#btn_voltar')


botaoTelaInicial.addEventListener('click', () => {
  elementosTelaInicial.forEach(elementos => {
    elementos.classList.add('inicial_oculto')
  })
  setTimeout(function() {
    telaInvestimeto.style.display = 'block'
  }, 800)
})

botaoVoltar.addEventListener('click', () => {

  elementosInvestimento.classList.add('investimento_oculto')

  setTimeout(function() {
    elementosTelaInicial.forEach(elemento => {
      elemento.classList.remove('inicial_oculto')
      telaInvestimeto.style.display = 'none'
      elementosInvestimento.classList.remove('investimento_oculto')
    })
  }, 1000)

  setTimeout(function() {
    telaInvestimeto.style.display = 'block'
  }, 800)
})





