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
const elementosTelaInicial = telaInicial.querySelector('.conteudo_inicial')
const botaoTelaInicial = document.querySelector('#btn_inicial')

const telaCarteira = document.querySelector('#carteira_digital')
const elementosCarteira = telaCarteira.querySelector('.conteudo_carteira')
const botaoVoltarInicio = document.querySelector('#btn_voltar_inicio')

const balaoInvestir = document.querySelector('.balao_investir')

botaoTelaInicial.addEventListener('click', () => {
  elementosTelaInicial.classList.add('inicial_oculto')

  setTimeout(function () {
    telaCarteira.style.display = 'block'
    balaoInvestir.style.display = 'block'
  }, 800)
})

botaoVoltarInicio.addEventListener('click', () => {
  elementosCarteira.classList.add('carteira_oculto')

  setTimeout(function () {
    elementosTelaInicial.classList.remove('inicial_oculto')
    elementosCarteira.classList.remove('carteira_oculto')
    telaCarteira.style.display = 'none'
  }, 1000)
})

const botaoInvestir = document.querySelector('#btn_investir')
const telaInvestimentos = document.querySelector('#escolhas_investimentos')
const elementosInvestimentos = telaInvestimentos.querySelector('.conteudo_investimentos')
const botaoVoltarCarteira = document.querySelector('#btn_voltar_carteira')

botaoInvestir.addEventListener('click', () => {
  elementosCarteira.classList.add('carteira_oculto')

  setTimeout(function () {
    telaInvestimentos.style.display = 'block'
  }, 800)
})

botaoVoltarCarteira.addEventListener('click', () => {
  elementosInvestimentos.classList.add('investimentos_oculto')

  setTimeout(function () {
    elementosCarteira.classList.remove('carteira_oculto')
    elementosInvestimentos.classList.remove('investimentos_oculto')
    telaInvestimentos.style.display = 'none'
  }, 1000)
})

const botaoCDB = document.querySelector('#card_cdb')
const telaCdb = document.querySelector('#tipos_cdb')
const elementosCdb = telaCdb.querySelector('.conteudo_tipos_cdb')
const botaoVoltarInvestimentos = document.querySelector('#btn_voltar_investimentos')
const botaoInvestirCdb = document.querySelector('#investir_cdb')

// scroll com o click do mouse

let Drag = false
let startY
let scrollTop

elementosCdb.addEventListener('mousedown', (evento) => {
  Drag = true
  startY = evento.clientY;
  scrollTop = elementosCdb.scrollTop
})

document.addEventListener('mousemove', (evento) => {
  if (!Drag) return

  const deltaY = evento.clientY - startY
  elementosCdb.scrollTop = scrollTop - deltaY
})

document.addEventListener('mouseup', () => {
  Drag = false
})

//

botaoCDB.addEventListener('click', () => {
  elementosInvestimentos.classList.add('investimentos_oculto')

  setTimeout(function () {
    telaCdb.style.display = 'block'
  }, 800)
})

botaoVoltarInvestimentos.addEventListener('click', () => {
  elementosCdb.classList.add('cdb_oculto')

  setTimeout(function () {
    elementosInvestimentos.classList.remove('investimentos_oculto')
    elementosCdb.classList.remove('cdb_oculto')
    telaCdb.style.display = 'none'
  }, 1000)
})

const formularioCDB = document.querySelector('#fomulario_cdb_fidelidade')
const valorCdbFidelidade = document.querySelector('#valor_cdb_fidelidade')

// Formatação Monetária

valorCdbFidelidade.addEventListener('input', formatarValor)

function formatarValor() {
  let valor = valorCdbFidelidade.value.replace(/\D/g, '')
  valor = (parseFloat(valor) / 100).toFixed(2)
  valorCdbFidelidade.value = formatarMoeda(parseFloat(valor))
}

function formatarMoeda(valor) {
  valor = valor.toFixed(2);
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return valor;
}

// 

function valorPadrao() {
  const valorMinimo = '500.00'
  let valor = Number(valorMinimo)
  
  valorCdbFidelidade.value = valorMinimo
}

function definirDataAtual() {
  const dataAtual = new Date()
  const ano = dataAtual.getFullYear()
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0')
  const dia = dataAtual.getDate().toString().padStart(2, '0')
  
  const dataFormatada = `${ano}-${mes}-${dia}`
  
  document.querySelector('#data_atual').value = dataFormatada
}

formularioCDB.addEventListener('submit', function(evento) {
  evento.preventDefault()
})