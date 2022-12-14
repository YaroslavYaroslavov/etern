const buttonServ = document.querySelector('.services')
const buttonAdv = document.querySelector('.advantage')
const firstMain = document.querySelector('.firstMain')
const secondMain = document.querySelector('.secondMain')

buttonServ.addEventListener('click', () => {
    buttonServ.classList.add('active')
    buttonAdv.classList.remove('active')
    firstMain.style.display = 'block'
    secondMain.style.display = 'none'

})

buttonAdv.addEventListener('click', () => {
    buttonServ.classList.remove('active')
    buttonAdv.classList.add('active')
    firstMain.style.display = 'none'
    secondMain.style.display = 'block'
})