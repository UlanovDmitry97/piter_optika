export function articlesShowMore() {
  const showMoreBtn = document.querySelector('.articles__show-more');
  const articlesItem = document.querySelectorAll('.articles__item');

  if(showMoreBtn) {
    showMoreBtn.addEventListener('click', (e) => {
      e.target.classList.add('articles__show-more_active');

      articlesItem.forEach(item => {
        item.classList.add('articles__item_visible');
      });
    });
  }
};