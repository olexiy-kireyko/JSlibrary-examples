import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Parallax,
  Keyboard,
  EffectCards,
} from 'swiper/modules';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, Parallax, Keyboard],
  keyboard: { enabled: true },
  speed: 600,
  // loop: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement: 'svg',
    renderBullet: function (index, className) {
      return (
        '<svg class="' +
        className +
        '"width="20" height="20">' +
        '<use href="./img/demo.svg#icon-location">' +
        '</use>' +
        '</svg>'
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const cardSwiper = new Swiper('.card-swiper', {
  modules: [EffectCards, Keyboard],
  effect: 'cards',
  width: 400,
});

const bntList = document.querySelector('.my-btn');
const list = document.querySelector('.list-item-hidden');
bntList.addEventListener('click', showList);
function showList(event) {
  list.classList.toggle('show');
}
