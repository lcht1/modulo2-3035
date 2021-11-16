

// toggle menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}


// imc calculator
function calculateImc() {

    const height = (document.getElementById('height').value) / 100
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')


    if (height > 0 && weight > 0) {

        let imc = weight / (height * height)
        let classification = ''

        if (imc > 0 && imc >= 30) {
            classification = 'está acima do peso. Mantenha uma alimentação saudável.'
        } else {
            classification = 'está no peso ideal. Parabéns'
        }

        result.innerHTML = `Resultado: <br> Seu IMC é ${imc.toFixed(2)} e você está ${classification}`


    } else {
        result.innerHTML = 'Valores inválidos'
    }

    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''

}


let foods = document.querySelectorAll("input[type='checkbox'")
let selecionados = []
let soma = 0
let result = document.getElementsByClassName('result')[0]



function sumKcal() {

    for (var i = 0; i < foods.length; i++) {

        if (foods[i].checked) {
            selecionados.push(foods[i].value)
            soma += parseInt(selecionados)
        }

        foods[i].checked = false

    }

    result.innerHTML = `Total de calorias: <br> ${soma}kcal `
}

// localstorage
function registerConsulting() {
    let name = document.getElementById('name')
    let select = document.getElementById('select')
    let option = select.selectedOptions[0].textContent
    let content = document.getElementById('content')

    var data = JSON.parse(localStorage.getItem('userData'))

    if (data == null) {
        localStorage.setItem('user', '[]')
        data = []
    }
    let register = {
        name: name.value,
        option: option,
        content: content.value

    }
    data.push(register)

    localStorage.setItem('userData', JSON.stringify(data))

}


// cards
function insertCards() {

    let cardsContainer = document.querySelector('.cards-container')
    let clientCard = document.createElement('div')
    clientCard.classList = 'client-card'

    let cardTitle = document.createElement('h1')
    cardTitle.classList.add('card-title')
    clientCard.appendChild(cardTitle)

    let cardGoal = document.createElement('p')
    cardGoal.classList.add("goal")
    clientCard.appendChild(cardGoal)


    let cardContent = document.createElement('p')
    cardContent.classList.add('card-content')
    clientCard.appendChild(cardContent)

    let date = document.createElement('span')
    clientCard.appendChild(date)

    var d = new Date()
    var day = String(d.getDate()).padStart(2, '0')
    var month = String(d.getMonth() + 1).padStart(2, '0')
    var year = d.getFullYear()
    currentDate = day + '/' + month + '/' + year;
    

    cardsContainer.appendChild(clientCard)


    let title = document.getElementById('name')
    cardTitle.innerHTML = title.value

    let select = document.getElementById('select')
    let option = select.selectedOptions[0].textContent
    cardGoal.innerHTML = `Principal objetivo: ${option}`

    let content = document.getElementById('content')
    cardContent.innerHTML = content.value

    date.innerHTML = currentDate

    var formValue = {
        title: title.value,
        option: option,
        content: content.value
    };


    registerConsulting()
    title.value = ''
    select.value = ''
    content.value = ''


}


