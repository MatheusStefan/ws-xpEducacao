function start() {
    var buttonCalculate = document.querySelector('#btn-calc')
    buttonCalculate.addEventListener('click', handleButtonCalcular)
}

function somar(a, b) {
    return ((a + b))
}

function subtrairA(a, b) {
    return ((a - b))
}
function subtrairB(a, b) {
    return ((b - a))
}

function dividirA(a, b) {
    return ((a / b).toFixed(2))
}
function dividirB(a, b) {
    return ((b / a).toFixed(2))
}

function multiplicar(a, b) {
    return ((a * b))
}

function potenciaA(a, b) {
    return ((Math.pow(a, b)))
}
function potenciaB(a, b) {
    return ((Math.pow(b, a)))
}

function raiz(a) {
    return Math.sqrt(a).toFixed(2)
}

function fatorial(a) {
    if(a === 0 || a === 1) return 1
    for (let i = a - 1; i >= 1; i--) {
        a = a * i
    }
    return a

}
function porcentagemAxB(a, b) {
    var result = Math.ceil((b * 100) / a)
    return (result + '%')
}
function porcentagemBxA(a, b) {
    var result = Math.ceil((a * 100) / b)
    return ((result + "%"))
}

function media(a, b) {
    return (((a + b)) / 2)
}

function handleButtonCalcular() {

    var inputA = document.querySelector('#input-A')
    var inputB = document.querySelector('#input-B')
    var somaResult = document.querySelector('#soma-result')
    var subAResult = document.querySelector('#subA-result')
    var subBResult = document.querySelector('#subB-result')
    var multiResult = document.querySelector('#multi-result')
    var divAResult = document.querySelector('#divA-result')
    var divBResult = document.querySelector('#divB-result')
    var potenciaAResult = document.querySelector('#potenciaA-result')
    var potenciaBResult = document.querySelector('#potenciaB-result')
    var raizAResult = document.querySelector('#raizA-result')
    var raizBResult = document.querySelector('#raizB-result')
    var fatAResult = document.querySelector('#fatA-result')
    var fatBResult = document.querySelector('#fatB-result')
    var porcentAResult = document.querySelector('#porcentA-result')
    var porcentBResult = document.querySelector('#porcentB-result')
    var mediaResult = document.querySelector('#media-result')

    var A = Number(inputA.value);
    var B = Number(inputB.value);
    var soma = somar(A, B)
    var subA = subtrairA(A, B)
    var subB = subtrairB(A, B)
    var multi = multiplicar(A, B)
    var divA = dividirA(A, B)
    var divB = dividirB(A, B)
    var potencialA = potenciaA(A, B)
    var potencialB = potenciaB(A, B)
    var sqrtA = raiz(A)
    var sqrtB = raiz(B)
    var fatA = fatorial(A)
    var fatB = fatorial(B)
    var porcentagemA = porcentagemAxB(A, B)
    var porcentagemB = porcentagemBxA(A, B)
    var med = media(A, B)

    somaResult.textContent = soma
    subAResult.textContent = subA
    subBResult.textContent = subB
    multiResult.textContent = multi
    divAResult.textContent = divA
    divBResult.textContent = divB
    potenciaAResult.textContent = potencialA
    potenciaBResult.textContent = potencialB
    raizAResult.textContent = sqrtA
    raizBResult.textContent = sqrtB
    fatAResult.textContent = fatA
    fatBResult.textContent = fatB
    porcentAResult.textContent = porcentagemA
    porcentBResult.textContent = porcentagemB
    mediaResult.textContent = med

    console.log(A)
    console.log(B)

    console.log(soma)
    console.log(subA)
    console.log(subB)
    console.log(multi)
    console.log(divA)
    console.log(divB)
    console.log(potencialA)
    console.log(potencialB)
    console.log(sqrtA)
    console.log(sqrtB)
    console.log(fatA)
    console.log(fatB)
    console.log(porcentagemA)
    console.log(porcentagemB)
    console.log(med)
}

start()

