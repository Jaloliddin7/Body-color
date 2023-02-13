const form = document.querySelector(".form")
const label = document.querySelector(".form__label")
const input = document.querySelector(".form__input")
const prewBtn = document.querySelector(".prew")
const nextBtn = document.querySelector(".next")
const roundWrapper = document.querySelector(".round-wrapper")
const body = document.querySelector("body")

const colorArray = []
let count;


form.addEventListener('submit', (e) => {
    e.preventDefault()
    body.style.background = input.value
    if (body.style.background == input.value && input.value != colorArray[colorArray.length - 1]) {
        colorArray.push(input.value)
        roundWrapper.innerHTML += `<div class='round' style= 'background:${input.value}'></div>`

        for (i = 0; i < roundWrapper.childNodes.length; i++) {
            roundWrapper.childNodes[i].classList.remove('round-toggle')
        }
        roundWrapper.childNodes[roundWrapper.childNodes.length - 1].classList.add('round-toggle')
    } 
    count = colorArray.length - 1
    input.value = ''
})

prewBtn.addEventListener('click', () => {
    if (count > 0) {
        count--
        body.style.background = colorArray[count]
        for (i = 0; i < roundWrapper.childNodes.length; i++) {
            roundWrapper.childNodes[i].classList.remove('round-toggle')
        }
        roundWrapper.childNodes[count].classList.add('round-toggle')
    }
})

nextBtn.addEventListener('click', () => {
    if (count < colorArray.length - 1) {
        count++
        body.style.background = colorArray[count]
        for (i = 0; i < roundWrapper.childNodes.length; i++) {
            roundWrapper.childNodes[i].classList.remove('round-toggle')
        }
        roundWrapper.childNodes[count].classList.add('round-toggle')
    }
})

// let color1 = function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
