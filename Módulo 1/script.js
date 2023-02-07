function start() {
    var buttonCalculate = document.querySelector('#btn-calc')
    buttonCalculate.addEventListener('click', handleButtonCalcular)
}
function sumMultiples(limit) {
    let sum = 0;

    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function handleButtonCalcular() {

    var input = document.querySelector('#input')
    var result = document.querySelector('#sum-result')
    var A = Number(input.value)

    var multiplos = sumMultiples(A)
    
    
    result.textContent = multiplos
    console.log(multiplos)
}


start()