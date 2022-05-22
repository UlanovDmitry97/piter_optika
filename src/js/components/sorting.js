import $ from 'jquery';
import swipe from 'jquery-touchswipe';

export function sortingDropdown() {
  const btnsOpen = document.querySelectorAll('.sorting__name');

  btnsOpen.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.classList.toggle('sorting__name_open');
      const form = e.target.parentNode.querySelector('.sorting__form');

      form.classList.toggle('sorting__form_visible');
    });
  });
};

export function sortingShowMore() {
  const btnsShowMore = document.querySelectorAll('.sorting__show-more');

  btnsShowMore.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parameters =  e.target.parentNode.querySelectorAll('.sorting__parameter');

      e.target.classList.add('display-none');

      parameters.forEach(parameter => {
        parameter.classList.remove('display-none');
      });
    });
  });
};

export function filterMobile() {
  const filterBtn = document.querySelector('.catalog__filter');
  const sortingList = document.querySelector('.catalog__sorting-list');
  const filterBtnClose = document.querySelector('.catalog__sorting-close');
  if(filterBtn) {
    filterBtnClose.addEventListener('click', () => {
      sortingList.classList.remove('catalog__sorting-list_visible');
      document.body.classList.remove('hidden');
    });

    filterBtn.addEventListener('click', () => {
      sortingList.classList.add('catalog__sorting-list_visible');
      document.body.classList.add('hidden');
    });
  }
};

export function sortingMobile() {
  const choice = document.querySelector('.choices__inner');
  const modalWrapp = document.querySelector('.catalog__main-sorting-wrapp');
  const choiceDropdown = document.querySelector('.choices__list--dropdown');
  const closeDropdown = document.createElement('button');

  if(choice) {
    const observer = new MutationObserver(callback);

    function callback(mutations, observer) {
      if(mutations[0].oldValue.includes('is-active')) {
        modalWrapp.classList.remove('catalog__main-sorting-wrapp_visible');
        document.body.classList.remove('hidden');
      }
    };

    observer.observe(choiceDropdown, {
      attributes: true,
      attributeFilter: ['class'],
      attributeOldValue: true
    });

    modalWrapp.addEventListener('click', (e) => {
      if(e.target !== choiceDropdown) {
        modalWrapp.classList.remove('catalog__main-sorting-wrapp_visible');
        document.body.classList.remove('hidden');
      }
    });

    choice.addEventListener('click', () => {
      modalWrapp.classList.add('catalog__main-sorting-wrapp_visible');
      document.body.classList.add('hidden');
    });

    closeDropdown.classList.add('choices__close-dropdown');
    choiceDropdown.appendChild(closeDropdown);

    let $body = $('body');
    let $dropdown = $('.choices__list--dropdown');

    $('.choices__close-dropdown').swipe({
      swipeStatus: function(event, phase, direction, distance) {

        $dropdown.css('transform', 'translateY(' + distance + 'px)');

        if (phase === $.fn.swipe.phases.PHASE_END) {

          if (direction == 'down' && distance > 50) {
            modalWrapp.click();

            setTimeout(function() {
              $dropdown.css('transform', 'translateX(0)');
            }, 500);
          }
        }
      },
      threshold: 0
    });
  }
}