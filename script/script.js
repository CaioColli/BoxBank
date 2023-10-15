import validarCPF from './valida_cpf.js'

const formularioCPF = document.querySelector('[data-formularioCPF]')
const inputCPF = document.querySelector('[data-inputCPF]')

const inputVazio = document.querySelector('[data-inputVazio]')
const inputInvalido = document.querySelector('[data-inputInvalido]')

const btnEnviarCPF = document.querySelector('[data-inputEnviar]')

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