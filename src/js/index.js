import Swiper, {Navigation} from 'swiper';
import 'swiper/swiper.css';
// import 'swiper/css/navigation';

const swiperNews = new Swiper('.news__swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation],
  breakpoints: {
    812: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
    },
    533: {
      slidesPerView: 2,
      spaceBetween: 12,
      centeredSlides: false,
    }
  }
});
const swiperMedia = new Swiper('.media__swiper', {
  slidesPerView: 2,
  spaceBetween: 8,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation],
  breakpoints: {
    1000: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    746: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    }
  }
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 10) {
    //clearHeader, not clearheader - caps H
    $(".header").addClass("header--active");
  }
  if (scroll <= 10) {
    //clearHeader, not clearheader - caps H
    $(".header").removeClass("header--active");
  }
});

const menuBurger = document.querySelector(".menu__burger");
const menuWrapper = document.querySelector(".menu__wrapper");
menuBurger.addEventListener('click', function () {
  menuWrapper.classList.toggle("menu__wrapper--active");
  menuBurger.classList.toggle("menu__burger--active");
})

const linkin = document.querySelectorAll('.linkin');
linkin.forEach(function (removingTel) {
  removingTel.addEventListener('click', function () {
    menuWrapper.classList.remove("menu__wrapper--active");
    menuBurger.classList.remove("menu__burger--active");
  });
});