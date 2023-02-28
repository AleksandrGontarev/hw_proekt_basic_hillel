"use strict";

var buton = document.querySelector('.header-menu__mobile-menu-btn');
var burger = document.querySelector('.header-menu__mobile-menu-list');
var burger_item = document.querySelector('.header-menu__list-item');
var body = document.querySelector('.body');
buton.addEventListener('click', function () {
  buton.classList.toggle('active-btn-dark');
  burger.classList.toggle('header-menu__mobile-menu-list-show');
  burger.classList.toggle('show');
  burger_item.classList.toggle('header-menu__list-item-show');
  body.classList.toggle('fixed');
});