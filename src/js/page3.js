import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
// import Accordion from '../../node_modules/accordion-js/dist/accordion.min';
import Accordion from 'accordion-js';

import 'accordion-js/dist/accordion.min.css';

const mySwiper = new Swiper('.my-swiper', {
  modules: [Navigation, Keyboard, Pagination],
  keyboard: { enabled: true },
  speed: 600,
  // spaceBetween: 40,

  pagination: {
    el: '.my-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.my-swiper-button-next',
    prevEl: '.my-swiper-button-prev',
  },
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 2,
      centerInsufficientSlides: true,
    },
  },
});

document
  .querySelector('.scroll-btn')
  .addEventListener('click', () =>
    window.scrollBy({ left: 0, top: window.innerHeight, behavior: 'smooth' })
  );
const scrollSpan = document.querySelector('#scroll-onY');
window.addEventListener('scroll', () => {
  scrollSpan.innerHTML = window.scrollY;
});

const header = document.querySelector('header');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.style.transform = 'translateY(-100%)';
    header.classList.remove('scroll');
  } else {
    header.style.transform = 'translateY(0)';
    header.classList.add('scroll');
  }

  if (window.scrollY === 0) {
    header.style.transform = 'translateY(0)';
    header.classList.remove('scroll');
  }

  lastScrollY = window.scrollY;
});

const root = document.documentElement;
const themeMod = document.querySelector('#theme-mod');
themeMod.addEventListener('change', () => {
  const theme = themeMod.checked ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
});

const accord = new Accordion('.accordion-container', {
  openOnInit: [0],
  duration: 400,
  showMultiple: false,
  collapse: true,

  // onOpen: function (currentElement) {
  //   currentElement.style.backgroundColor = 'grey';
  // },
});
