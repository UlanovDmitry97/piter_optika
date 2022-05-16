const modalWrapp = document.querySelector('.header__modal-wrapp');
const modalStatus = document.querySelector('.status-modal');

export function directorModal () {
  const directorBtnMobile = document.querySelector('.menu__controls-link_director');
  const directorBtn = document.querySelector('.control__director');
  const modalClose = document.querySelector('.director-modal__close');
  const modalDirector = document.querySelector('.director-modal');

  directorBtn.addEventListener('click', () => {
    modalWrapp.classList.add('header__modal-wrapp_visible');
    modalDirector.classList.add('header__modal-director_visible');
    document.body.classList.add('hidden');
  });

  directorBtnMobile.addEventListener('click', () => {
    modalWrapp.classList.add('header__modal-wrapp_visible');
    modalDirector.classList.add('header__modal-director_visible');
    document.body.classList.add('hidden');
  });

  modalClose.addEventListener('click', () => {
    modalWrapp.classList.remove('header__modal-wrapp_visible');
    modalDirector.classList.remove('header__modal-director_visible');
    document.body.classList.remove('hidden');
  });

  modalWrapp.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.header__modal-director') && !target.closest('.status-modal')) {
      modalWrapp.classList.remove('header__modal-wrapp_visible');
      modalDirector.classList.remove('header__modal-director_visible');
      modalStatus.classList.remove('status-modal_visible');
      document.body.classList.remove('hidden');
    }
  });
};

export function statusModal () {
  const statusBtnMobile = document.querySelector('.menu__controls-link_status');
  const statusBtn = document.querySelector('.control__status');
  const modalClose = document.querySelector('.status-modal__close');

  statusBtn.addEventListener('click', () => {
    modalWrapp.classList.add('header__modal-wrapp_visible');
    modalStatus.classList.add('status-modal_visible');
    document.body.classList.add('hidden');
  });

  statusBtnMobile.addEventListener('click', () => {
    modalWrapp.classList.add('header__modal-wrapp_visible');
    modalStatus.classList.add('status-modal_visible');
    document.body.classList.add('hidden');
  });

  modalClose.addEventListener('click', () => {
    modalWrapp.classList.remove('header__modal-wrapp_visible');
    modalStatus.classList.remove('status-modal_visible');
    document.body.classList.remove('hidden');
  });
};

export function modalBuy () {
  const goodBuyBtn = document.querySelectorAll('.good__buy');

  goodBuyBtn.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(e.target)
  }))
};