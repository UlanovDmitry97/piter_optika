const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu_visible');
});

menuClose.addEventListener('click', () => {
  menu.classList.toggle('menu_visible');
});