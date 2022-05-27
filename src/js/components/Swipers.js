import Swiper from 'swiper/bundle';

export function createPromotionSwiper ()  {
  const promotionsSwiper = new Swiper('.promotions-slider__swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 6000,
    },
  })
};

export function createGoodsSwiper ()  {
  const goodsSlider = document.querySelectorAll('.goods__slider');
  goodsSlider.forEach(slider => {
    const goodsSwiper = new Swiper(slider, {
      direction: 'horizontal',
      loop: false,
      slidesPerGroup: 2,
      slidesPerView: 2.3,
      spaceBetween: 7.5,
    })
  });
};

export function createGoodDetailedSwiper ()  {
  const goodsDetailedSwiper = new Swiper('.good-detailed__slider', {
    direction: 'vertical',
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    480: {
      spaceBetween: 15,
    },
  });
};

export function createReviewsSwiper () {
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 6,
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
    480: {
      spaceBetween: 18,
    },
  });
};

export function createLocationSwiper () {
  const locationSwiper = new Swiper('.locations__content-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: '.locations__swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
};
