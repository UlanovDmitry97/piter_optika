import {
  createGoodsSwiper,
  createPromotionSwiper,
  createGoodDetailedSwiper,
  createReviewsSwiper, createLocationSwiper
} from './components/Swipers';
import {showMorePopular} from './components/showMore'
import {directorModal, modalBuy, statusModal} from "./components/HeaderModal";
import {footerMenu, scroll} from "./components/footer";
import {filterMobile, sortingDropdown, sortingMobile, sortingShowMore} from "./components/sorting";
import {sortingSelect} from "./components/choise";
import {choiceColor, sliderImgAdd, tabsDetailInfo, tabsReviews} from "./components/detail";
import {map} from "./components/map";
import {accordionLocation, locationTabs} from "./components/location";
import {articlesShowMore} from "./components/articles";

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
createGoodsSwiper();
createGoodDetailedSwiper();
createReviewsSwiper();
createLocationSwiper();

//Кнопки смотреть все
showMorePopular();

//Модальное окно в header
directorModal();
statusModal();

// Модальное окно на главной
modalBuy();

//Футер
footerMenu();
scroll();

//Сортировка
sortingDropdown();
sortingShowMore();
sortingSelect();
filterMobile();
sortingMobile();

//Детальная страница
sliderImgAdd();
choiceColor();
tabsDetailInfo();
tabsReviews();

//Карта
map();

//Локация
locationTabs();
accordionLocation();

//Статьи
articlesShowMore();