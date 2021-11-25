const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const result = document.querySelector('#result')
const maxmin = document.querySelector('.max-min')
const ul = document.querySelector('.result-box-ul')
// const resultMinMax = document.querySelector('.result-min-max')
const dis = document.querySelectorAll('.dis')
const mainBox = document.querySelector('.main-box')
const resultBox = document.querySelector('.result-box')


const operator = document.querySelector('.operator')
operator.addEventListener('', () => {
})


const f = () => {
    Array.from(dis).forEach(it => {
        if (num1.value === '' || num2.value === '') {
            it.setAttribute('disabled', 'true')
        } else {
            it.removeAttribute('disabled')
        }
    })
}

num1.addEventListener('input', f)
num2.addEventListener('input', f)


const buttonSum = document.querySelector('.sum')
buttonSum.addEventListener('click', () => {
    result.value = +num1.value + +num2.value
    operator.textContent = '+'
    const createLi = document.createElement('li')
    createLi.textContent = num1.value + '+' + num2.value + "=" + result.value
    ul.append(createLi)
})
const buttonMinus = document.querySelector('.minus')
buttonMinus.addEventListener('click', () => {
    result.value = +num1.value - +num2.value
    operator.textContent = ' - '

    const createLi = document.createElement('li')
    createLi.textContent = num1.value + ' - ' + num2.value + "=" + result.value
    ul.append(createLi)
})

const buttonMultiply = document.querySelector('.multiply')
buttonMultiply.addEventListener('click', () => {
    result.value = +num1.value * +num2.value
    operator.textContent = '*'

    const createLi = document.createElement('li')
    createLi.textContent = num1.value + '*' + num2.value + "=" + result.value
    ul.append(createLi)
})

const buttonDivide = document.querySelector('.divide')
buttonDivide.addEventListener('click', () => {
    operator.textContent = '/'
    if (!Number.isFinite(num1.value / num2.value)) {
        alert('u cant divide to zero')
        return;
    }
    result.value = num1.value / num2.value
    const createLi = document.createElement('li')
    createLi.textContent = num1.value + '/' + num2.value + "=" + result.value
    ul.append(createLi)
})

const buttonDegree = document.querySelector('.degree')
buttonDegree.addEventListener('click', () => {
    result.value = num1.value ** num2.value
    operator.textContent = '^'
    const createLi = document.createElement('li')
    createLi.textContent = num1.value + '^' + num2.value + "=" + result.value
    ul.append(createLi)
})

const buttonSquare = document.querySelector('.square')
buttonSquare.addEventListener('click', () => {
    result.value = Math.sqrt(+num1.value)
    const createLi = document.createElement('li')
    createLi.textContent = num1.value + '^' + +'2' + "=" + result.value
    ul.append(createLi)
})

maxmin.addEventListener('keydown', (e) => {
    if (!(e.key >= 0 && e.key <= 9) && e.key !== 'Backspace' && e.key !== '-') {
        e.preventDefault()
    }
})

const buttonMin = document.querySelector('.min')
buttonMin.addEventListener('click', () => {
    result.value = Math.min(...maxmin.value.split(' '))
    const createLi = document.createElement('li')
    createLi.textContent = maxmin.value + " = " + ' MIN ' + result.value
    ul.append(createLi)
})

const buttonMax = document.querySelector('.max')
buttonMax.addEventListener('click', () => {
    result.value = Math.max(...maxmin.value.split(' '))
    const createLi = document.createElement('li')
    createLi.textContent = maxmin.value + " = " + ' MAX ' + result.value
    ul.append(createLi)
})


const deleteButton = document.querySelector('.delete-button')

deleteButton.addEventListener('click', () => {
    if (confirm('Do u want to delete all ?')) {
        result.value = ''
        num1.value = ''
        num2.value = ''
        maxmin.value = ''
        operator.textContent = ''
        // resultBox.value = ''
        resultBox.innerHTML = ''
    }


})
const historyBtn = document.querySelector('.history-button')
historyBtn.addEventListener('click',() => {
    mainBox.hidden = true
    resultBox.hidden = false
})










