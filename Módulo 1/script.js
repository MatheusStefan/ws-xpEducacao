function sumMultiples(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function start() {
    var input = document.querySelector('#number')
    var A = Number(input.value)
    var multiplos = sumMultiples(500)
    input.textContent = multiplos
    
}

start()