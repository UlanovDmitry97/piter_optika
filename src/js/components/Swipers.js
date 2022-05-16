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
}

export function createPopularGoodsSwiper ()  {
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

}
