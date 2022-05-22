export function footerMenu() {
  const menuTitle = document.querySelectorAll('.footer__nav-title');

  menuTitle.forEach(title => {
    title.addEventListener('click', (e) => {
      const lists = e.target.parentNode.querySelector('.footer__list');
      e.target.classList.toggle('footer__nav-title_active');

      menuTitle.forEach(title => {
        if(e.target !== title) {
          const list = title.parentNode.querySelector('.footer__list');
          title.classList.remove('footer__nav-title_active');
          list.classList.remove('footer__list_active');
          title.parentNode.style.paddingBottom = `0px`;
        }
      });

      lists.classList.toggle('footer__list_active');

      const height =  e.target.parentNode.querySelector('.footer__list').clientHeight;

      e.target.parentNode.style.paddingBottom = `${height}px`;
    });
  });
};

export function scroll() {
  const scrollBtn = document.querySelector('.scroll');

  window.addEventListener('scroll', () => {
    const coordinatesY = window.scrollY;
    const screenHeight = window.screen.height;

    if (coordinatesY >= screenHeight) {
      scrollBtn.classList.add('scroll_visible');
    }

    if(document.body.offsetHeight - 332 <= window.innerHeight + coordinatesY) {
      scrollBtn.classList.add('scroll_bottom');
    }

    if(document.body.offsetHeight - 332 > window.innerHeight + coordinatesY) {
      scrollBtn.classList.remove('scroll_bottom');
    }

    if (coordinatesY < screenHeight) {
      scrollBtn.classList.remove('scroll_visible');
    }
  }, { passive: true })

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
};