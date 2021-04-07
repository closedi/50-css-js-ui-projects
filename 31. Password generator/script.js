const resultEl = document.getElementById('result')
const clipboardEl = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('uppercase')
const lowerEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')


const randomize = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomDigit,
    symbol: getRandomSymbol,
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowerEl.checked
    const hasUpper = upperEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol)
})

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) {
        return;
    }

    navigator.clipboard.writeText(password)
    alert('Password is copied to buffer')
})

function generatePassword() {
    const [length,lower = hasLower, upper = hasUpper, number = hasNumber, symbol = hasSymbol]  = arguments;
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => {
       return Object.values(item)[0]
    })
    if(!typesCount) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomize[funcName]()
        })
    }
    return generatedPassword.slice()
}


function cl() {
    console.log(...arguments)
}

function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26)) + 97)
}

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26)) + 65)
}

function getRandomDigit() {
    return String.fromCharCode((Math.floor(Math.random() * 10)) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/.,?"'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
