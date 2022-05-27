export function sliderImgAdd() {
  const images = document.querySelectorAll('.good-detailed__slider-img');
  const innerImg = document.querySelector('.good-detailed__images-inner');

  if(innerImg) {
    images.forEach(img => {
      img.addEventListener('click', (e) => {
        const src = e.target.src;
        const newImg = document.createElement('img');
        newImg.classList.add('good-detailed__image');
        newImg.src = src;

        innerImg.innerHTML = '';
        innerImg.append(newImg);
      });
    });
  }
};

export function choiceColor() {
  const colorBtns = document.querySelectorAll('.good-detailed__color-btn');

  if(colorBtns) {
    colorBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        colorBtns.forEach(btn => {
          btn.classList.remove('good-detailed__color-btn_active');
        });

        btn.classList.add('good-detailed__color-btn_active');
      });
    });
  }
};

export function tabsDetailInfo() {
  const tabsBtns = document.querySelectorAll('.good-detailed__tabs-btn');

  if(tabsBtns) {
    tabsBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const data = e.target.dataset.target;
        const tabsContentActive = document.querySelector(`.good-detailed__tabs-content[data-path=${data}]`);
        const tabsContent = document.querySelectorAll('.good-detailed__tabs-content');

        tabsContent.forEach(tabsContent => {
          tabsContent.classList.remove('good-detailed__tabs-content_active');
        });

        tabsContentActive.classList.add('good-detailed__tabs-content_active');

        tabsBtns.forEach(btn => {
          btn.classList.remove('good-detailed__tabs-btn_active');
        });

        btn.classList.add('good-detailed__tabs-btn_active');
      });
    });
  }
};

export function tabsReviews() {
  const tabsBtns = document.querySelectorAll('.reviews__tab');

  if(tabsBtns) {
    tabsBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const data = e.target.dataset.target;
        const tabsContentActive = document.querySelectorAll(`.reviews__tab-content[data-path=${data}]`);
        const tabsContent = document.querySelectorAll('.reviews__tab-content');

        tabsContent.forEach(tabsContent => {
          tabsContent.classList.remove('reviews__tab-content_active');
        });

        tabsContentActive.forEach(tabContentActive => {
          tabContentActive.classList.add('reviews__tab-content_active');
        });

        tabsBtns.forEach(btn => {
          btn.classList.remove('reviews__tab_active');
        });

        btn.classList.add('reviews__tab_active');
      });
    });
  }
}