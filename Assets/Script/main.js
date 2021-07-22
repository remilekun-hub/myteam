const toggleid = document.getElementById('toggle')
const navmenu = document.querySelector('.nav-menu')
const i = document.querySelector('i')
const form = document.getElementById('form')

const cardbtn = document.querySelectorAll('.card-btn')
const cardtext = document.querySelectorAll('.card-text')

const roll1 = document.querySelector('#card-btn1 i')
const roll2 = document.querySelector('#card-btn2 i')
const roll3 = document.querySelector('#card-btn3 i')
const roll4 = document.querySelector('#card-btn4 i')
const roll5 = document.querySelector('#card-btn5 i')
const roll6 = document.querySelector('#card-btn6 i')

const cardbtn1 = document.getElementById('card-btn1')
const cardbtn2 = document.getElementById('card-btn2')
const cardbtn3 = document.getElementById('card-btn3')
const cardbtn4 = document.getElementById('card-btn4')
const cardbtn5 = document.getElementById('card-btn5')
const cardbtn6 = document.getElementById('card-btn6')

const cardtext1 = document.querySelector('.card-text1')
const cardtext2 = document.querySelector('.card-text2')
const cardtext3 = document.querySelector('.card-text3')
const cardtext4 = document.querySelector('.card-text4')
const cardtext5 = document.querySelector('.card-text5')
const cardtext6 = document.querySelector('.card-text6')


toggleid.addEventListener('click', ()=> {
    navmenu.classList.toggle("show-menu")
    i.classList.toggle('fa-times')
})

function animate(x) {
    if (x) {
        x.classList.toggle('animate')
    }

}

cardbtn1.addEventListener('click', ()=> {
    animate(roll1)
    cardtext1.classList.toggle('show-cardtext')
})

cardbtn2.addEventListener('click', ()=> {
    animate(roll2)
    cardtext2.classList.toggle('show-cardtext')
})

cardbtn3.addEventListener('click', ()=> {
    animate(roll3)
    cardtext3.classList.toggle('show-cardtext')
})

cardbtn4.addEventListener('click', ()=> {
    animate(roll4)
    cardtext4.classList.toggle('show-cardtext')
})

cardbtn5.addEventListener('click', ()=> {
    animate(roll5)
    cardtext5.classList.toggle('show-cardtext')
})

cardbtn6.addEventListener('click', ()=> {
    animate(roll6)
    cardtext6.classList.toggle('show-cardtext')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
})
