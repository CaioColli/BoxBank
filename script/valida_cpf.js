const formularioCPF = document.querySelector('[data-formularioCPF]')
const inputCPF = document.querySelector('[data-inputCPF]')
const btnEnviarCPF = document.querySelector('[data-inputEnviar]')

const inputVazio = document.querySelector('[data-inputVazio]')
const inputInvalido = document.querySelector('[data-inputInvalido]')

inputCPF.addEventListener('input', () => {
    let valorCPF = inputCPF.value

    const cpfSemDigitos = valorCPF.replace(/\D/g, '')
    inputCPF.value = cpfSemDigitos

    let cpfValido = validarCPF(cpfSemDigitos)
    let cpfInvalido = !cpfValido

    // Para vizualizar se CPF é válido ou não
    console.log(cpfValido)

    valorCPF = cpfSemDigitos.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    inputCPF.value = valorCPF

    if (cpfValido) {
        btnEnviarCPF.classList.remove('btn_submit')
        btnEnviarCPF.classList.add('btn_submit_vermelho')
    }

    if (inputCPF.value.length > 11 && cpfInvalido) {
        btnEnviarCPF.disabled = true
        inputInvalido.style.display = 'block'
    } else {
        btnEnviarCPF.disabled = false
    }

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 8) {
            inputCPF.value = ''
            btnEnviarCPF.classList.remove('btn_submit_vermelho')
            btnEnviarCPF.classList.add('btn_submit')
            inputInvalido.style.display = 'none'
        }
    })

    if (inputCPF.validity.valid) {
        inputVazio.style.display = 'none'
    }
})

inputCPF.addEventListener('invalid', function (event) {
    event.preventDefault()
    inputVazio.style.display = 'block'
})

function validarCPF(cpf) {
    // Remove todos os caracteres que não sejam dígitos
    cpf = cpf.replace(/\D/g, '')
  
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false
    }
  
    // Verifica se todos os dígitos são iguais se forem, não é um CPF válido
    if (/^(\d)\1+$/.test(cpf)) {
      return false
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let digito1 = 11 - (soma % 11)
    if (digito1 > 9) {
      digito1 = 0
    }
  
    // Calcula o segundo dígito verificador
    soma = 0
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i)
    }
    let digito2 = 11 - (soma % 11)
    if (digito2 > 9) {
      digito2 = 0
    }
  
    // Verifica se os dígitos verificadores calculados são iguais aos dígitos fornecidos
    if (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2) {
      return true
    }
  
    return false
  }