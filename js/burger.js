const humburger = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')
const link = document.querySelectorAll('.menu-list__item')

humburger.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
    humburger.classList.toggle('humburger-menu-active')
})


link.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-active')
        humburger.classList.toggle('humburger-menu-active')
    })
})
