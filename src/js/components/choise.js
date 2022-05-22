import Choices from 'choices.js';
export function sortingSelect() {
  const selectSorting = document.querySelector('.catalog__select-sort');
  if(selectSorting) {
    const choices = new Choices(selectSorting, {
      searchEnabled: false,
    });
  }
};