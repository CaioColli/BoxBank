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

// Pagina inicial / Pagina Carteira Digital
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

// Pagina Carteira Digital / Pagina Escolhas de Investimentos
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

// Pagina Escolhas de Investimentos / Tipos CDB
const botaoCDB = document.querySelector('#card_cdb')
const telaCdb = document.querySelector('#tipos_cdb')
const elementosCdb = telaCdb.querySelector('.conteudo_tipos_cdb')
const botaoVoltarInvestimentos = document.querySelector('#btn_voltar_investimentos')
const botaoInvestirCdbFidelidade = document.querySelector('#investir_cdb_fidelidade')

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


// Tipos CDB / CDB Fidelidade
const telaCdbFidelidade = document.querySelector('#cdb_fidelidade')
const elementosCdbFidelidade = telaCdbFidelidade.querySelector('.conteudo_cdb_fidelidade')
const botaoVoltarTiposCdb = document.querySelector('#btn_voltar_tipos_cdb')
const botaoContinuarFidelidade = document.querySelector('#btn_aplicar_cdb_inativo')

botaoInvestirCdbFidelidade.addEventListener('click', () => {
  elementosCdb.classList.add('cdb_oculto')

  setTimeout(function () {
    telaCdbFidelidade.style.display = 'block'
  }, 800)
})

botaoVoltarTiposCdb.addEventListener('click', () => {
  elementosCdbFidelidade.classList.add('cdb_fidelidade_oculto')

  setTimeout(function () {
    elementosCdb.classList.remove('cdb_oculto')
    elementosCdbFidelidade.classList.remove('cdb_fidelidade_oculto')
    telaCdbFidelidade.style.display = 'none'
  }, 1000)
})

// Funcionalidades do CDB Fidelidade //

const formularioCDB = document.querySelector('#fomulario_cdb_fidelidade')
const valorCdbFidelidade = document.querySelector('#valor_cdb_fidelidade')
const valorDataFidelidade = document.querySelector('#data_atual')
const botaoInvestirFidelidade = document.querySelector('.btn_aplicar_cdb_inativo')
const mensagemErroValorMinimo = document.querySelector('#msg_erro_valor_minimo')

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

// Ao clicar Input Automaticamente Insere Data Atual

function definirDataAtual() {
  const dataAtual = new Date()
  const ano = dataAtual.getFullYear()
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0')
  const dia = dataAtual.getDate().toString().padStart(2, '0')

  const dataFormatada = `${ano}-${mes}-${dia}`

  valorDataFidelidade.value = dataFormatada
}

window.addEventListener('load', definirDataAtual)

//

// Formatação Monetária

function formatarMoeda(valor) {
  valor = valor.toFixed(2);
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return valor;
}

formularioCDB.addEventListener('input', () => {
  let valor = valorCdbFidelidade.value.replace(/\D/g, '')
  valor = (parseFloat(valor) / 100).toFixed(2)
  valorCdbFidelidade.value = formatarMoeda(parseFloat(valor))

  if (parseFloat(valor) > 499.99) {
    botaoInvestirFidelidade.classList.remove('btn_aplicar_cdb_inativo')
    botaoInvestirFidelidade.classList.add('btn_aplicar_cdb')
    mensagemErroValorMinimo.style.display = 'none'
    console.log("O valor é superior a R$ 500.00");
  } else {
    botaoInvestirFidelidade.classList.remove('btn_aplicar_cdb')
    botaoInvestirFidelidade.classList.add('btn_aplicar_cdb_inativo')
    mensagemErroValorMinimo.style.display = 'block'
    console.log('O valor é inferior a R$ 500.00')
  }
})

//

formularioCDB.addEventListener('submit', function(evento) {
  evento.preventDefault()
})

botaoContinuarFidelidade.addEventListener('click', () => {
  setTimeout(() => {
    valorCdbFidelidade.value = ''
  }, 1000)
})

////

// CDB Fidelidade / Tela Final
const telaFinal = document.querySelector('#tela_final')
const elementosTelaFinal = telaFinal.querySelector('.conteudo_tela_final')
const botaoVoltarHome = document.querySelector('#btn_home')

botaoContinuarFidelidade.addEventListener('click', () => {
  elementosCdbFidelidade.classList.add('cdb_fidelidade_oculto')

  setTimeout(function () {
    telaFinal.style.display = 'block'
  }, 800)
})

botaoVoltarHome.addEventListener('click', () => {
  elementosTelaFinal.classList.add('final_oculto')

  setTimeout(function () {
    elementosTelaInicial.classList.remove('inicial_oculto')

    elementosCarteira.classList.remove('carteira_oculto')
    telaCarteira.style.display = 'none'

    elementosInvestimentos.classList.remove('investimentos_oculto')
    telaInvestimentos.style.display = 'none'

    elementosCdb.classList.remove('cdb_oculto')
    telaCdb.style.display = 'none'

    elementosCdbFidelidade.classList.remove('cdb_fidelidade_oculto')
    telaCdbFidelidade.style.display = 'none'

    elementosTelaFinal.classList.remove('final_oculto')
    telaFinal.style.display = 'none'
  }, 1000)
})