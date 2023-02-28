const buton=document.querySelector('.header-menu__mobile-menu-btn')
const burger=document.querySelector('.header-menu__mobile-menu-list')
const burger_item=document.querySelector('.header-menu__list-item')
const body=document.querySelector('.body')

buton.addEventListener('click', function() {
    buton.classList.toggle('active-btn-dark')
    burger.classList.toggle('header-menu__mobile-menu-list-show')
    burger.classList.toggle('show')
    burger_item.classList.toggle('header-menu__list-item-show')
    body.classList.toggle('fixed')
})