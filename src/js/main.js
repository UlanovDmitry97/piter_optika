import {createPopularGoodsSwiper, createPromotionSwiper} from './components/Swipers';
import {showMorePopular} from './components/showMore'
import {directorModal, modalBuy, statusModal} from "./components/HeaderModal";
import {footerMenu} from "./components/footerMenu";

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
  document.body.classList.add('hidden');
  menu.classList.toggle('menu_visible');
});

menuClose.addEventListener('click', () => {
  document.body.classList.remove('hidden');
  menu.classList.toggle('menu_visible');
});


const searchOpen = document.querySelector('.control__search-open');
const searchInput = document.querySelector('.control__search-input');

searchOpen.addEventListener('click',() => {
  searchInput.classList.toggle('control__search-input_show');
});

document.addEventListener('click', event => {
  let dontClose = false;
  event.path.forEach(element => {
    if (element === searchOpen || element === searchInput) {
      dontClose = true;
    }
  });
  if (dontClose) return;
  searchInput.classList.remove('control__search-input_show');
});

// Слайдеры
createPromotionSwiper();
createPopularGoodsSwiper();

//Кнопки смотреть все
showMorePopular();

//Модальное окно в header
directorModal();
statusModal();

// Модальное окно на главной
modalBuy();

//Футер меню
footerMenu();