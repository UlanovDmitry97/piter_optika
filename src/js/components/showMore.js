export function showMorePopular() {
  const popularGoodsBtn = document.querySelectorAll('.goods__show-more');

  popularGoodsBtn.forEach(good => {
    good.addEventListener('click', (e) => {
      e.target.classList.add('goods__show-more_hidden');
      const popularItems = e.target.parentElement.querySelectorAll('.goods__item');
      popularItems.forEach(item => item.classList.add('goods__item_visible'));
    });
  });
}