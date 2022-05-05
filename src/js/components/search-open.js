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